import React from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <nav>AppLayout</nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
