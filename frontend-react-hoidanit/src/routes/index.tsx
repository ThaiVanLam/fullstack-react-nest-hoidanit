import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/layouts/MainLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AdminLayout } from '@/layouts/AdminLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';
import { RoleListPage } from '@/features/auth/pages/RoleListPage';
import { RoleCreatePage } from '@/features/auth/pages/RoleCreatePage';
import { RoleEditPage } from '@/features/auth/pages/RoleEditPage';
import { UserListPage } from '@/features/auth/pages/UserListPage';
import { UserEditPage } from '@/features/auth/pages/UserEditPage';

// Pages will be added here as features are built with /fe-crud
const HomePage = () => <div className="p-8 text-center"><h1 className="text-2xl font-bold">Home Page</h1></div>;
const NotFoundPage = () => <div className="p-8 text-center"><h1 className="text-2xl font-bold">404 - Not Found</h1></div>;

export const router = createBrowserRouter([
  // Public routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // Add public routes here: products, categories, etc.
    ],
  },

  // Auth routes (login, register)
  {
    element: <AuthLayout />,
    children: [
      // Add auth routes here
    ],
  },

  // Protected routes (require login)
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          // Add protected routes: cart, checkout, orders, profile
        ],
      },
    ],
  },

  // Admin routes
  {
    path: '/admin',
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: 'roles', element: <RoleListPage /> },
          { path: 'roles/create', element: <RoleCreatePage /> },
          { path: 'roles/:id/edit', element: <RoleEditPage /> },
          { path: 'users', element: <UserListPage /> },
          { path: 'users/:id/edit', element: <UserEditPage /> },
          // Add more admin routes here
        ],
      },
    ],
  },

  // 404
  { path: '*', element: <NotFoundPage /> },
]);
