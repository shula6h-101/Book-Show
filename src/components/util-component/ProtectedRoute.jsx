import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({permission}) => {
  return permission ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
