"use client";
import Link from "next/link";
import ThemeSwitch from "../Theme/ThemeSwitch";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl">{"<OGZ.Dev>"}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg ">
            <li>
              <Link href="/">{"Home"}</Link>
            </li>
            <li>
              <Link href="/about">{"About Me"}</Link>
            </li>
            <li>
              <Link href="/contact">{"Contact"}</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default NavBar;
