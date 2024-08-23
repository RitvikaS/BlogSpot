import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { About } from "./modules/About/About";
import { Layout } from "./modules/AppLayout/Layout";
import { Blog } from "./modules/Blog/Blog";
import { ContactUS } from "./modules/Contact/Contact";
import {SignIn} from "./modules/Get Started/Sign-in/SignIn";
import IntegrationNotistack from "./modules/CreateBlog/CreateBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUS",
        element: <ContactUS />,
      },
      {
        path: "add-blog",
        element: <IntegrationNotistack />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "blog/:blogId",
        element: <Blog />,
      },
    ],
  },
]);
