import { useState, useCallback } from "reat";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const togleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
