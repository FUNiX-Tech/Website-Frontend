import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <React.Fragment>
      {/* Navbar/Header */}
      <Header />
      {/* Main Layout */}
      <main>
        {/* Render Children Component */}
        <Outlet />
      </main>
      {/* Main Layout */}
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Root;
