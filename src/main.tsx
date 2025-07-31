import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import LayoutProvider from "@/provider/layout.provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutProvider />,
    children: [
      {
        index: true,
        element: <h6>What is up dude</h6>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
