import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="mb-3 position-fixed top-0 start-0 end-0 z-3">
      <Navbar />
    </header>
  );
}
