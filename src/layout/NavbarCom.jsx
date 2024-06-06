import { signOut } from "firebase/auth";
import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseServices";

function NavbarCom() {
  async function handleLogout() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Login/Register</Link>
        <Button onClick={handleLogout}>Log out</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCom;
