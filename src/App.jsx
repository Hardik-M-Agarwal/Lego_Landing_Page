import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Model from './components/Model'


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Model/>
    <Story/>
    <Contact/>
    <Footer/>
  </main>
  )
}

export default App