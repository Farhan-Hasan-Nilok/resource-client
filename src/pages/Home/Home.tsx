import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import AllResources from '../AllResources/AllResources';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;