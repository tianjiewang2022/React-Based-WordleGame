import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import ClickProject from "./ClickProject/App";
import WordleProject from './WordleProject/Pages/App';
import Normal from './WordleProject/Pages/Normal';
import Hard from './WordleProject/Pages/Hard';
import game from './game/pages/ModalPage';
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
  {
    path: "/WordleProject/Normal",
    element: <Normal />,
  },
  {
    path: "/WordleProject/Hard",
    element: <Hard />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);