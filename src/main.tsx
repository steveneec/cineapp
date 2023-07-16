import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Peliculas from "./screens/Peliculas.tsx";
import Bar from "./screens/Bar.tsx";
import "./css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/peliculas",
    element: <Peliculas />,
    children: [{ path: ":id" }],
  },
  { path: "/bar", element: <Bar /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
