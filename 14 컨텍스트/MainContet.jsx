import { UseContext } from "reat";
import ThemeContext from "./ThemeContext"

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div
        style = {{
          width: "100vw",
          height: "100vh",
          padding: "1.5rem",
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black": "white",
        }}
      >
        <p>hi, you can change the theme.</p>
        <button onClick={toggleTheme}>change the theme</button>
      </div>
    );
}

export default MainContent;
