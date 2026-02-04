import "./ThemeToggle.css";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <img
        src={sunIcon}
        alt="Light mode"
        className={`theme-toggle__icon ${
          theme === "light" ? "theme-toggle__icon--active" : ""
        }`}
        onClick={() => setTheme("light")}
      />

      <img
        src={moonIcon}
        alt="Dark mode"
        className={`theme-toggle__icon ${
          theme === "dark" ? "theme-toggle__icon--active" : ""
        }`}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
