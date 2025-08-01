import type { FC } from "react";

import { Link } from "react-router-dom";

// icons
import { Sun, Moon } from "lucide-react";

const navbar_items = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const themes_items = [
  {
    label: "Light",
    element: Sun,
  },
  {
    label: "Dark",
    element: Moon,
  },
];

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navbar_items.map((item) => {
              return (
                <li>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TechStore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbar_items.map((item) => {
            return (
              <li>
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            <Sun />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <ul className="menu bg-base-200 rounded-box w-56">
              {themes_items.map((item) => {
                return (
                  <li>
                    <a>
                      {<item.element />}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
