import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import DashBoard from './pages/dashboard';
import DefaultLayout from './layout/default';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/front-ecommerce/",
        element: <Home />,
      },
      {
        path: "/front-ecommerce/dashboard",
        element: <DashBoard />,
      }
    ]
  }

]);

export default router;