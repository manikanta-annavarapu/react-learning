import { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme";

export default function Card({ children }: PropsWithChildren) {
  const { color } = useTheme();
  return (
    <div className="card" style={{ color }}>
      {children}
    </div>
  );
}
