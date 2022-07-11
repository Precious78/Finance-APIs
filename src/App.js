import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from  "./components/Abouts";
import Abouts from './components/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Abouts />
        <Footer />       
    </div>
  )
}

export default App