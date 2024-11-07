import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Update classList and localStorage
    document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "light" : "dark";
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1 transform transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-blue-100" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
