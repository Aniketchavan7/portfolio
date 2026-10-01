export function ArcMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 29V20a13 13 0 0 1 26 0v9M14 29V20a6 6 0 0 1 12 0v9M7 34h26"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}
