import { useContext, useState } from "react";
// types
import type { FC } from "react";

// styled components
import { StyledLink, StyledNav } from "@/styles/components/nav/nav-bar.style";

// styled theme
import { useTheme } from "styled-components";

// icons
import { Moon, Sun, Menu } from "lucide-react";

// context
import { ModeContext } from "@/context";

const navbar_items = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar: FC = () => {
  const theme = useTheme();
  const { mode, modeUpdater } = useContext(ModeContext);
  const [is_dropdown_open, setDropDownOpen] = useState(false);
  return (
    <StyledNav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* ++++++++++++ LOGO +++++++++  */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div
            style={{
              backgroundColor: theme.palette.info.main,
            }}
            className="h-8 w-8 bg-red-50 rounded-lg flex items-center justify-center"
          >
            <span
              style={{
                color: theme.palette.primary.main,
              }}
              className="text-primary-foreground font-bold text-lg"
            >
              T
            </span>
          </div>
          <span className="font-bold text-xl">TechStore</span>
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* ++++++++++++ MODE TOGGLER CTA +++++++++  */}
          <button
            type="button"
            className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-placement="bottom"
            onClick={() => {
              setDropDownOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">Open user menu</span>
            {mode == "dark" ? <Moon /> : <Sun />}
          </button>

          {/* ++++++++++++ MODE DROPDOWN MENU +++++++++  */}
          {is_dropdown_open && (
            <div
              style={{
                backgroundColor: theme.palette.primary.main,
              }}
              className="absolute top-14 right-4 z-50 my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow-md"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <button
                    className="block px-4 py-2 text-sm"
                    onClick={() => {
                      modeUpdater?.("light");
                    }}
                  >
                    Light
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      modeUpdater?.("dark");
                    }}
                    className="block px-4 py-2 text-sm"
                  >
                    Dark
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 text-sm">Colorful</button>
                </li>
              </ul>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <Menu />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navbar_items.map((item) => {
              return (
                <li key={item.path}>
                  <StyledLink
                    to={item.path}
                    className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    {item.label}
                  </StyledLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
