import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';

// TODO: replace with real auth store once auth feature is implemented
const useIsAdmin = () => {
  return false;
};

export const AdminRoute = () => {
  const isAdmin = useIsAdmin();

  if (!isAdmin) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};
