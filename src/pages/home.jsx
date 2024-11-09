import React from "react";
import Footer from "../components/shared/components/Footer";
import Hero from "../components/home/hero";
import Features from "../components/home/Features";
import Working from "../components/home/working";
import CTA from "../components/home/cta";
// import AnimatedEditorPreview from "../components/custom/animated-hero";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Working />
      <CTA />
    </div>
  );
}

export default Home;
