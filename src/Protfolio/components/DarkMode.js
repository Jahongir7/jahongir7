import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <>
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      >
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </button>
    </>
  );
};

export default DarkMode;
