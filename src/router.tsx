import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './pages/home';
import DefaultLayout from './layout/default';
import PublicLayout from './layout/public';
import LoginPage from './pages/public/login';
import RegisterPage from './pages/public/register';
import { getCookie } from './services/cookies';
import { toast } from './hooks/use-toast';
import AboutPage from './pages/about';
import ShopPage from './pages/shop/shop-page';
import ItemPage from './pages/item';

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const access_token = getCookie('access_token');

  if (!access_token) {
    toast({
      title: 'Session expired',
      variant: 'destructive'
    })

    return <Navigate to='/' />;
  }
  return element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  },
  {
    path: "/",
    element: <ProtectedRoute element={<DefaultLayout />} />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/item/:id",
        element: <ItemPage />
      }
    ]
  }

]);

export default router;