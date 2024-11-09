import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function HomeLayout({ children }) {
  return (
    <div id="root-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
