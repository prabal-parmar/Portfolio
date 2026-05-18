import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const spring = { stiffness: 400, damping: 28, mass: 0.2 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        aria-hidden="true"
      >
        <motion.div
          animate={{
            width: hovering ? 48 : 12,
            height: hovering ? 48 : 12,
            borderColor: hovering ? "rgba(245,197,24,0.9)" : "rgba(0,194,255,0.8)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full border-2"
          style={{
            boxShadow: hovering ? "0 0 20px rgba(245,197,24,0.5)" : "0 0 12px rgba(0,194,255,0.4)",
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
          className="w-1 h-1 rounded-full bg-[#F5C518]"
        />
      </motion.div>
    </>
  );
};
