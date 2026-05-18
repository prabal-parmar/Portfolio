import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const MouseGlow = () => {
  const [active, setActive] = useState(false);
  const spring = { stiffness: 120, damping: 22, mass: 0.4 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!active) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[5] pointer-events-none mix-blend-screen"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      aria-hidden="true"
    >
      <motion.div
        className="w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,197,24,0.06) 0%, rgba(0,194,255,0.04) 35%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};
