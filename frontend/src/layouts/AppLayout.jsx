import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <nav>AppLayout</nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
