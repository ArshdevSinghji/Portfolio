import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/codingstats' && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;