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
import Error from "@/pages/error.page";
import About from "@/pages/about.page";
import Contact from "@/pages/contact.page";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutProvider />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
