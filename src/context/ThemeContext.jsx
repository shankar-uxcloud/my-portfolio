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
  cyberpunk: {
    label: "Cyberpunk",
    icon: "💜",
  },
  pink: {
    label: "Pink",
    icon: "🌸",
  },
  comfort: {
    label: "Eye Comfort",
    icon: "👁️",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
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