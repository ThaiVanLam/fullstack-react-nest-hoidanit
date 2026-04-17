import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';

// Placeholder: will connect to useAuthStore when auth feature is built
const useIsAdmin = () => {
  // TODO: replace with useAuthStore().user?.role === 'admin'
  return true;
};

export const AdminRoute = () => {
  const isAdmin = useIsAdmin();

  if (!isAdmin) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};
