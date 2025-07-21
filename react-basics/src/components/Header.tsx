import { useTheme } from "../components/context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
    >
      <button onClick={toggleTheme}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
