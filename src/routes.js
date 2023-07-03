import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Mappage from "./pages/Mappage";
import Devicemanager from "./pages/Devicemanager";
import GPS from "./pages/GPS";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/map",
        element: <Mappage />,
      },

      {
        path: "/device",
        element:  <Devicemanager/>,
      },
      {
        path: "/gps",
        element:  <GPS />,
      },
    ],
  },
];

export default routes;
