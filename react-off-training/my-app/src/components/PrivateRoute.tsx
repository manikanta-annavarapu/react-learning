import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = !true;

  if (!isLoggedIn) {
    return <Link to={"/login"} />;
  }
  return <>{children}</>;
}
