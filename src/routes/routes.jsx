import { createBrowserRouter } from "react-router";
import App from "../App";
import Favorites from "../favorites";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayouts,
      errorElement: <p>Error</p>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/favorites',
          Component: Favorites,
        },
        {
          path: '/about',
          element: <p>This is about section</p>,
        },
      ]
      },
      
  ]);

  export default router