import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          position: "top-center",
          style: {
            background: "#283046",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  </AuthProvider>
);
