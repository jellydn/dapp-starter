import React, { useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeTogger() {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      document.documentElement.setAttribute("data-theme", prevTheme === "dark" ? "light" : "dark");
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <div className="fixed top-0 right-0 mt-2 mr-4">
      <button type="button" className="btn" onClick={toggleTheme}>
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </div>
  );
}
