import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute (){
  let auth = useAuth();
  let location = useLocation();
  
  if (!auth.user && location.pathname !== '/register') {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  
  if(!auth.user && location.pathname !== '/login') {
    return <Navigate to="/register" state={{ from: location }} />;
  }

  return <Outlet />;
}