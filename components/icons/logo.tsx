import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & { className?: string };

// App logomark: a simplified receipt/scanner glyph designed to read well at 20–28px.
// Uses currentColor so it can adapt to brand color via parent text color.
export function Logo(props: LogoProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <rect
        x="6"
        y="5"
        width="20"
        height="22"
        rx="4"
        className="stroke-current"
        strokeWidth="2"
      />
      <path
        d="M10 11h10M10 16h12M10 21h8"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 27l3-3M27 27l-3-3"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
