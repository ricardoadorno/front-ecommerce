import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './pages/home';
import DashBoard from './pages/dashboard';
import DefaultLayout from './layout/default';

const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      }
    ]
  }

]);

export default router;