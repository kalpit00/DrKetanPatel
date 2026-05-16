"use client";

import { useTheme } from "./ThemeProvider";

// Icons toggle purely via CSS based on the .light class on <html> so there's
// no flicker on first paint and no client-only mount gating needed.
export const ThemeToggle: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100 light:shadow-sm ${className}`}
    >
      {/* Moon: visible in dark mode */}
      <svg
        className="h-5 w-5 block light:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        />
      </svg>
      {/* Sun: visible in light mode */}
      <svg
        className="h-5 w-5 hidden light:block"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
