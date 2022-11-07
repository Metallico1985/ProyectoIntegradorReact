import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./Routes/Detail";
import ErrorComponent from "./Routes/ErrorComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
