import Dashboard from "./pages/Dashboard";
import Errors from "./pages/Errors";
import Alerts from "./pages/Alerts";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/errors", element: <Errors /> },
  { path: "/alerts", element: <Alerts /> }
];