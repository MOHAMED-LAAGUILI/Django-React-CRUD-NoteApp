// src/context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add prop-types validation for 'children'
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' should be a valid React node
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
