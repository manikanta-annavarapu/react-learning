import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Link to={"/login"} />;
  }
  return <>{children}</>;
}
