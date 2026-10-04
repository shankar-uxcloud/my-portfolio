import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Palette,
} from "lucide-react";

import { THEMES, useTheme } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentTheme = THEMES[theme];

  return (
    <div
      ref={containerRef}
      className="theme-switcher relative z-[200]"
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change website theme"
        aria-expanded={open}
        className="theme-trigger group flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium"
      >
        <Palette
          size={14}
          strokeWidth={1.8}
        />

        <span className="hidden sm:inline">
          {currentTheme.icon} {currentTheme.label}
        </span>

        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="theme-menu absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-2xl border p-2 shadow-2xl">
          {/* Header */}
          <div className="px-3 py-2">
            <p className="theme-menu-label font-mono text-[8px] uppercase tracking-[0.25em]">
              Appearance
            </p>
          </div>

          {/* Themes */}
          <div className="space-y-1">
            {Object.entries(THEMES).map(([key, item]) => {
              const active = theme === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setTheme(key);
                    setOpen(false);
                  }}
                  className={`theme-option flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm ${
                    active ? "theme-option-active" : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">
                      {item.icon}
                    </span>

                    <span>
                      {item.label}
                    </span>
                  </span>

                  {active && (
                    <Check
                      size={15}
                      strokeWidth={2}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;