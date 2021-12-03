import { useAuth } from '../context/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
