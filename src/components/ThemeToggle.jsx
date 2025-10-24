import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 rounded-lg transition ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
