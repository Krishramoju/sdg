import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Participate from "./components/Participate";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <About />
      <Prizes />
      <Participate />
      <Footer />
    </div>
  );
}
