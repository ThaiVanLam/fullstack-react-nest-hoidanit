import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/layouts/MainLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AdminLayout } from '@/layouts/AdminLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';
import { ROUTES } from './routes';

// Placeholder pages — replace with real pages when features are built
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8 text-center text-gray-500">{title}</div>
);

export const router = createBrowserRouter([
  // Public routes
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <Placeholder title="Home Page" /> },
      { path: ROUTES.PRODUCTS, element: <Placeholder title="Products Page" /> },
      { path: ROUTES.PRODUCT_DETAIL, element: <Placeholder title="Product Detail Page" /> },
      { path: ROUTES.CATEGORY, element: <Placeholder title="Category Page" /> },
    ],
  },
  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.LOGIN, element: <Placeholder title="Login Page" /> },
      { path: ROUTES.REGISTER, element: <Placeholder title="Register Page" /> },
    ],
  },
  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: ROUTES.CART, element: <Placeholder title="Cart Page" /> },
          { path: ROUTES.CHECKOUT, element: <Placeholder title="Checkout Page" /> },
          { path: ROUTES.ORDERS, element: <Placeholder title="Orders Page" /> },
          { path: ROUTES.ORDER_DETAIL, element: <Placeholder title="Order Detail Page" /> },
          { path: ROUTES.PROFILE, element: <Placeholder title="Profile Page" /> },
          { path: ROUTES.ADDRESSES, element: <Placeholder title="Addresses Page" /> },
        ],
      },
    ],
  },
  // Admin routes
  {
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: ROUTES.ADMIN_PRODUCTS, element: <Placeholder title="Admin Products" /> },
          { path: ROUTES.ADMIN_ORDERS, element: <Placeholder title="Admin Orders" /> },
        ],
      },
    ],
  },
]);
