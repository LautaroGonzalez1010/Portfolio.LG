import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Selector from "../pages/selector/page";
import Akidev from "../pages/akidev/page";
import Lautaro from "../pages/lautaro/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Selector />,
  },
  {
    path: "/akidev",
    element: <Akidev />,
  },
  {
    path: "/lautaro",
    element: <Lautaro />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;