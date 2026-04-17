import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';

// TODO: replace with real auth store once auth feature is implemented
const useIsAuthenticated = () => {
  return false;
};

export const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
