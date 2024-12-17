import React, { useEffect } from "react";

type Props = {
  changeTheme: (theme: string) => void;
};

export default function ThemeSwitch({ changeTheme }: Props) {
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    // side effect : anywhere where react has control
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]);

  if (theme === "light") {
    return (
      <button
        onClick={() => {
          setTheme("dark");
          changeTheme("dark");
        }}
      >
        Dark Mode
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          setTheme("light");
          changeTheme("light");
        }}
      >
        Light Mode
      </button>
    );
  }
}
