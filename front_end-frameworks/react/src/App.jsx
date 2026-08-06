import { useState } from 'react'
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Features from './sections/Features.jsx';

function App() {
  return (
    <>
      <Header />
      
      <main>
      <Hero />
      <About />
      <Features />

      </main>
        
    </>
  )
}

export default App
