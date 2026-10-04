import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const THEMES = {
  dark: {
    label: "Dark",
    icon: "🌑",
  },

  light: {
    label: "Light",
    icon: "☀️",
  },

  neon: {
    label: "Neon",
    icon: "💚",
  },
};

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme && THEMES[savedTheme]) {
      return savedTheme;
    }
  } catch {
    // Ignore localStorage errors
  }

  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Apply theme to HTML
    html.setAttribute("data-theme", theme);

    // Also apply to body
    body.setAttribute("data-theme", theme);

    // Save selected theme
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore localStorage errors
    }
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (!THEMES[newTheme]) return;

    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: changeTheme,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}