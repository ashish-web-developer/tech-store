import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import LayoutProvider from "@/provider/layout.provider";

// pages
import Index from "@/pages/index.page";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
