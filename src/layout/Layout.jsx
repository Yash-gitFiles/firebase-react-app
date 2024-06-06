import React from "react";
import NavbarCom from "./NavbarCom";
import FooterCom from "./FooterCom";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavbarCom />
      <Outlet />
      <FooterCom />
    </div>
  );
}

export default Layout;
