import { useMemo } from "react";

interface GothamRainProps {
  visible: boolean;
}

interface RainDropStyle {
  left: string;
  height: string;
  animationDuration: string;
  animationDelay: string;
}

function generateDrops(min: number, max: number): RainDropStyle[] {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const drops: RainDropStyle[] = [];
  for (let i = 0; i < count; i++) {
    drops.push({
      left: `${Math.random() * 100}%`,
      height: `${15 + Math.random() * 15}px`,
      animationDuration: `${0.6 + Math.random() * 0.8}s`,
      animationDelay: `${Math.random() * 2}s`,
    });
  }
  return drops;
}

export const GothamRain = ({ visible }: GothamRainProps) => {
  const drops = useMemo(() => generateDrops(60, 120), []);

  return (
    <div
      aria-hidden="true"
      className="gotham-rain-container"
      style={{ display: visible ? undefined : "none" }}
    >
      {drops.map((style, i) => (
        <span key={i} className="gotham-rain-drop" style={style} />
      ))}
    </div>
  );
};
