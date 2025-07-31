import React from 'react'
import Accordion from './components/Accordian';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import Footer from './components/UI/Footer';
import  './footer.css';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Accordion/>
    <Footer />
    </>
  )
}

export default App;