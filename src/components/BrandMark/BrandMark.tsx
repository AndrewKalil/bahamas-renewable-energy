/**
 * BrandMark — placeholder SVG logo for Bahamas Renewable Energy Solutions Ltd.
 * Modelled on the business-card mark: gold sun arc, navy solar panel, green leaf arc,
 * teal wave. Replace with the real logo file once provided.
 */
import type { BrandMarkProps } from "./BrandMark.types";

export const BrandMark = (props: BrandMarkProps) => {
  const { size = 42, className } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Bahamas Renewable Energy Solutions logo"
      className={className}
    >
      {/* Gold sun arc — upper right */}
      <path
        d="M24 4a20 20 0 0 1 18 28"
        stroke="#EFB63A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Sun circle */}
      <circle cx="17" cy="14" r="5.5" fill="#EFB63A" />
      {/* Sun rays */}
      <line x1="17" y1="5" x2="17" y2="3" stroke="#EFB63A" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="23" y1="7" x2="24.5" y2="5.5" stroke="#EFB63A" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="10" y1="7" x2="8.5" y2="5.5" stroke="#EFB63A" strokeWidth="1.8" strokeLinecap="round" />
      {/* Wind turbine */}
      <line x1="34" y1="10" x2="34" y2="30" stroke="#17325B" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 14 L38 8 L34 12" fill="#17325B" />
      <path d="M34 14 L28 10 L33 14" fill="#17325B" />
      <path d="M34 14 L30 20 L34 15" fill="#3D93BC" />
      {/* Solar panel */}
      <rect
        x="18"
        y="20"
        width="14"
        height="10"
        rx="1"
        fill="#17325B"
        transform="rotate(-6 25 25)"
      />
      <line x1="21" y1="20" x2="20" y2="30" stroke="#3D93BC" strokeWidth="0.8" />
      <line x1="25" y1="19.5" x2="24" y2="30" stroke="#3D93BC" strokeWidth="0.8" />
      <line x1="29" y1="19" x2="28" y2="29.5" stroke="#3D93BC" strokeWidth="0.8" />
      {/* Green leaf arc — lower left */}
      <path
        d="M42 36a20 20 0 0 1-32 4"
        stroke="#5E9C34"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Teal wave */}
      <path
        d="M8 36c4-3 8-3 12 0s8 3 12 0s6-2 8 0"
        stroke="#3D93BC"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6 40c4-2.5 8-2.5 12 0s8 2.5 12 0s6-2 9 0"
        stroke="#3D93BC"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};
