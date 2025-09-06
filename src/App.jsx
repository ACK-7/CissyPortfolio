import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import CVExperience from './components/CVExperience'
import ContactFooter from './components/ContactFooter'
import Footer from './components/Footer'
import { useGsapAnimations } from './hooks/useGsapAnimations'

function App() {
  useGsapAnimations()

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <CVExperience />
        <ContactFooter />
      </main>
      <Footer />
    </div>
  )
}

export default App