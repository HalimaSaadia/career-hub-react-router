import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ()=> fetch("../public/jobs.json")
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
