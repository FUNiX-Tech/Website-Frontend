import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
