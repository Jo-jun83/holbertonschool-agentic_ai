import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Features from "./components/sections/Features.jsx";
import Insights from "./components/sections/Insights.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
