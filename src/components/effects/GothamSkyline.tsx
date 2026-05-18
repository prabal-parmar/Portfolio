import { useId } from "react";
import { cn } from "@/lib/utils";

export const GothamSkyline = ({
  className = "",
  opacity = 0.15,
}: {
  className?: string;
  opacity?: number;
}) => {
  const uid = useId().replace(/:/g, "");
  const gradId = `skylineGrad-${uid}`;

  return (
    <svg
      viewBox="0 0 1200 200"
      preserveAspectRatio="xMidYMax slice"
      className={cn("w-full h-auto pointer-events-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M0,200 L0,120 L40,120 L40,80 L70,80 L70,140 L100,140 L100,60 L130,60 L130,100 L160,100 L160,40 L190,40 L190,90 L220,90 L220,50 L250,50 L250,130 L280,130 L280,70 L310,70 L310,110 L340,110 L340,30 L370,30 L370,85 L400,85 L400,55 L430,55 L430,125 L460,125 L460,75 L490,75 L490,45 L520,45 L520,95 L550,95 L550,65 L580,65 L580,135 L610,135 L610,50 L640,50 L640,100 L670,100 L670,35 L700,35 L700,80 L730,80 L730,120 L760,120 L760,60 L790,60 L790,90 L820,90 L820,25 L850,25 L850,70 L880,70 L880,110 L910,110 L910,55 L940,55 L940,85 L970,85 L970,40 L1000,40 L1000,95 L1030,95 L1030,65 L1060,65 L1060,115 L1090,115 L1090,75 L1120,75 L1120,130 L1150,130 L1150,90 L1200,90 L1200,200 Z"
      />
      <rect x="0" y="195" width="1200" height="5" fill="rgba(245,197,24,0.08)" />
    </svg>
  );
};
