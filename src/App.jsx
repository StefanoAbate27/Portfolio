import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Header from './components/Header.jsx'
import SocialBar from './components/SocialBar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: 'transparent' },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
              modes: { repulse: { distance: 120 } }
            },
            particles: {
              color: { value: '#111827' },
              links: { color: '#111827', distance: 160, enable: true, opacity: 0.08, width: 1 },
              move: { enable: true, speed: 0.6 },
              number: { value: 40, density: { enable: true, area: 900 } },
              opacity: { value: 0.7 },
              size: { value: { min: 1, max: 3 } }
            },
            detectRetina: true
          }}
          style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        />

        <Header />
        <SocialBar />

        <main className="relative z-10">
          <section id="inicio">
            <Hero />
          </section>
          <section id="proyectos" className="bg-gray-50">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contacto" className="bg-gray-50">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
