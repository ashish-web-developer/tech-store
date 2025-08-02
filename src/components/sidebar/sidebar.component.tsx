// types
import type { FC } from "react";

// theme
import { useTheme } from "styled-components";

// icons
import { Home, User, Mail, Layers, FileText, Settings } from "lucide-react";

const sidebar_items = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Mail, label: "Contact", path: "/contact" },
  { icon: Layers, label: "Projects", path: "/projects" },
  { icon: FileText, label: "Blog", path: "/blog" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar: FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button> */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          style={{
            backgroundColor: theme.palette.primary.light,
          }}
          className="h-full px-3 py-4 overflow-y-auto"
        >
          <h3
            style={{
              color: theme.palette.info.light,
            }}
            className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3"
          >
            Main Navigation
          </h3>
          <ul className="space-y-2 font-medium">
            {sidebar_items.map((item) => {
              return (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <item.icon />
                    <span className="ms-3">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
