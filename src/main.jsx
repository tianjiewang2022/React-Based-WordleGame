import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ClickProject from "./ClickProject/App";
import WordleProject from './WordleProject/Pages/GamePage';
import Normal from './WordleProject/Pages/Normal';
import Hard from './WordleProject/Pages/Hard';
import LoginPage from "./Login/LoginPage";
import { UserProvider } from './Login/useContext';

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
  {
    path: "/LoginPage",
    element: <LoginPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);