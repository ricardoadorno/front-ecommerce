import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/default";
import PublicLayout from "./layout/public";
import LoginPage from "./pages/public/login";
import RegisterPage from "./pages/public/register";
import { getCookie } from "./services/cookies";
import { toast } from "./hooks/use-toast";
import AboutPage from "./pages/about-page";
import ShopPage from "./pages/shop/shop-page";
import ItemPage from "./pages/item/item-page";

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  const accessToken = getCookie("accessToken");

  if (!accessToken) {
    toast({
      title: "Session expired",
      variant: "destructive",
    });

    return <Navigate to="/" />;
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
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute element={<DefaultLayout />} />,
    children: [
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/item/:id",
        element: <ItemPage />,
      },
    ],
  },
]);

export default router;
