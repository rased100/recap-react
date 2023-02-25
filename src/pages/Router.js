import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorElement from './ErrorElement';
import Home from './Home';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Login from './Login';

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorElement />,
          children: [
            {
              path: "item1",
              element: <Item1 />,
            },
            {
              path: "item2",
              element: <Item2 />,
            },
            {
              path: "item3",
              element: <Item3 />,
            },
          ],
        },
        {
          path: "Login",
          element: <Login />,
        },
      ]);

export default router;