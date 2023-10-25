import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <React.Fragment>
      {/* Navbar/Header */}
      {/* Main Layout */}
      <main>
        {/* Render Children Component */}
        <Outlet />
      </main>
      {/* Main Layout */}
      {/* Footer */}
    </React.Fragment>
  );
};

export default Root;
