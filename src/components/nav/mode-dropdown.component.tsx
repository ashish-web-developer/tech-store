import { useContext } from "react";
// types
import type { FC } from "react";

// styled theme
import { useTheme } from "styled-components";

// context
import { ModeContext } from "@/context";

const ModeDropdown: FC = () => {
  const theme = useTheme();
  const { modeUpdater } = useContext(ModeContext);

  return (
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
  );
};

export default ModeDropdown;
