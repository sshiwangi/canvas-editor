import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Hero from "../components/home/hero";
import Features from "../components/home/Features";
import Working from "../components/home/working";
// import AnimatedEditorPreview from "../components/custom/animated-hero";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Working />
      <Footer />
    </div>
  );
}

export default Home;
