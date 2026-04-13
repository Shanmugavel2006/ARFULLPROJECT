import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props) => {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default RequireAuth;
