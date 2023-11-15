// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import "./index.css";
// import CalculatorApp from "./CalculatorApp";
// import App from './App'
import ClickProject from "./ClickProject/ClickProject";
import About from './WordleProject/About'

const router = createBrowserRouter([
  {
    path: "/ClickProject",
    element: <ClickProject />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
