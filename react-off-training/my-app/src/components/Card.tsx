import React, { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../context";

export default function Card({ children }: PropsWithChildren) {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "#333" : "#fff";
  return (
    <div className="card" style={{ color }}>
      {children}
    </div>
  );
}
