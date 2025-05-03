import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import LawyerDetailse from "../pages/LawyerDetailse";
import ErrorPages from "../pages/ErrorPages";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayouts,
      errorElement: <ErrorPages></ErrorPages>,
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
          element: <About></About>,
        },
        {
            path: '/lawyer-detailse',
            element: <LawyerDetailse></LawyerDetailse>,
          },
      ]
      },
      
  ]);

  export default router