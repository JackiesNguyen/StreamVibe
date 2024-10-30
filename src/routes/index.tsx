import PATH from "@/constants/path";
import { MainLayout } from "@/layouts/";
import HomePage from "@/pages/Home/HomePage";
import MoviesShows from "@/pages/MoviesShows/MoviesShows";
import Subscriptions from "@/pages/Subscriptions/Subscriptions";
import Support from "@/pages/Support/Support";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.USER.MOVIES_SHOWS,
        element: <MoviesShows />,
      },
      {
        path: PATH.USER.SUBSCRIPTIONS,
        element: <Subscriptions />,
      },
      {
        path: PATH.USER.SUPPORT,
        element: <Support />,
      },
    ],
  },
]);

export default router;
