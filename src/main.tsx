import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import LayoutProvider from "@/provider/layout.provider";

// pages
import Index from "@/pages/index.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutProvider />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
