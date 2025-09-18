import * as React from "react";

type PaperIconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

// Minimal, friendly paper/receipt icon for the hero.
export function PaperIcon(props: PaperIconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="44" height="52" rx="6" fill="url(#g)" />
      <rect
        x="12"
        y="8"
        width="40"
        height="48"
        rx="4"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M18 18h20M18 26h28M18 34h24M18 42h16"
        className="stroke-foreground/60"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 52l6-6M50 52l-6-6"
        className="stroke-foreground/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
