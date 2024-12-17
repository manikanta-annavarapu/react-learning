import React, { useEffect } from "react";
import useTheme from "../hooks/useTheme";

type Props = {
  changeTheme: (theme: string) => void;
};

export default function ThemeSwitch({ changeTheme }: Props) {
  const { bgColor, altTheme } = useTheme();

  useEffect(() => {
    // side effect : anywhere where react has control
    document.body.style.backgroundColor = bgColor;
    // document.body.setAttribute("data-theme", theme);
    // document.documentElement.setAttribute("data-theme", bgColor);
  }, [bgColor]);

  return (
    <button
      onClick={() => {
        changeTheme(altTheme);
      }}
    >
      Light Mode
    </button>
  );
}
