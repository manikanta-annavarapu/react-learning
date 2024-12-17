import { useContext } from "react";
import { ThemeContext } from "../context";

export default function useTheme() {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "#333" : "#fff";
  const bgColor = theme === "light" ? "#eee" : "#333";
  const altTheme = theme === "light" ? "dark" : "light";

  return { theme, color, bgColor, altTheme };
}
