import { useState } from 'react'
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Introduction to React</h1>
          <h2 className="text-2xl">Task 0</h2>
          <Check />
        </div>
        
    </>
  )
}

export default App
