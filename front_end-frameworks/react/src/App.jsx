import { useState } from 'react'
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <About />


      </main>
        
    </>
  )
}

export default App
