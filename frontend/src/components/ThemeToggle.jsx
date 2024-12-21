import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa"; // Using React Icons for a cleaner look

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-3 rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 hover:from-pink-500 hover:to-indigo-500 focus:outline-none ring-2 ring-transparent dark:ring-indigo-300 dark:ring-offset-2 dark:hover:ring-2 dark:hover:ring-indigo-600"
    >
      {theme === "light" ? (
        <FaMoon className="text-2xl" />
      ) : (
        <FaSun className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
