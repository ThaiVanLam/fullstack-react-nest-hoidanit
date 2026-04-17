import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';

// Placeholder: will connect to useAuthStore when auth feature is built
const useIsAuthenticated = () => {
  // TODO: replace with useAuthStore().isAuthenticated
  return false;
};

export const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
