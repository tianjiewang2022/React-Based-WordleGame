import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import ClickProject from "./ClickProject/App";
import WordleProject from './WordleProject/Pages/App';
import GamePage from './WordleProject/Pages/GamePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ClickProject",
    element: <ClickProject />,
  },
  {
    path: "/WordleProject",
    element: <WordleProject />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);