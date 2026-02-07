export default function Illustration404() {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[200px] mx-auto"
      aria-hidden
    >
      <path
        d="M40 50 L100 30 L160 50 L160 120 L100 140 L40 120 Z"
        fill="var(--paper)"
        stroke="var(--ink-muted)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M98 38 L102 138 M60 55 L140 115 M55 95 L145 60"
        stroke="var(--ink-muted)"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.7"
      />
      <g transform="translate(100, 85)">
        <path d="M-12 -12 L12 12 M12 -12 L-12 12" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="70" cy="70" r="8" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="130" cy="75" r="6" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  );
}
