import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Button from './components/Button'
import Timeline from './components/Timeline'
import FechaHoraLugar from './components/FechaHoraLugar'
import TransporteAlojamiento from './components/TransporteAlojamiento'
import PostBoda from './components/PostBoda'
import EnvelopeOpening from './components/EnvelopeOpening'

// Componente principal App
function App() {
  const [showEnvelopeAnimation, setShowEnvelopeAnimation] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  useEffect(() => {
    // Verificar si es la primera visita
    const hasVisited = localStorage.getItem('hasVisitedWeddingSite')
    if (!hasVisited) {
      setIsFirstVisit(true)
      setShowEnvelopeAnimation(true)
      localStorage.setItem('hasVisitedWeddingSite', 'true')
    }
  }, [])
  const handleContactClick = () => {
    alert('¡Contáctanos para más información!')
  }

  const handleGalleryClick = () => {
    console.log('Abrir galería de fotos')
  }

  const handleAnimationComplete = () => {
    setShowEnvelopeAnimation(false)
  }

  // Función para resetear y volver a mostrar la animación (solo para pruebas)
  const resetAnimation = () => {
    localStorage.removeItem('hasVisitedWeddingSite')
    setShowEnvelopeAnimation(true)
  }

  // Detectar combinación de teclas Ctrl+Shift+R para resetear animación
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault()
        resetAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Datos del timeline
  const weddingEvents = [

    {
      time: '18:15',
      title: 'Bienvenida de invitados',
      description: 'Se dara la bienvenida a los invidatos.',
      location: 'Jardín Principal'
    },

    {
      time: '19:00',
      title: 'Ceremonia',
      description: 'La ceremonia se realizará en un entorno natural rodeado de jardines.',
      location: 'Jardín Principal'
    },
    {
      time: '20:00-22:00',
      title: 'Cóctel 1º parte',
      description: 'Disfrutaremos de un cóctel mientras nos tomamos las fotos.',
      location: 'Terraza del Salón'
    },
    {
      time: '22:00 - 00:00',
      title: 'Cóctel 2º parte',
      description: 'Disfrutaremos de un cóctel mientras nos tomamos las fotos.',
      location: 'Terraza del Salón'
    },
    {
      time: '00:00 - 05:00',
      title: 'Fiesta',
      description: '¡A bailar hasta que el cuerpo aguante!',
      location: 'Pista de Baile'
    }
  ]

  return (
    <>
      {/* Mostrar animación solo en la primera visita */}
      {showEnvelopeAnimation && (
        <EnvelopeOpening onAnimationComplete={handleAnimationComplete} />
      )}
      
      {/* Contenido principal de la página */}
      <div className={`app ${showEnvelopeAnimation ? 'app-hidden' : 'app-visible'}`}>
        <Hero />

        {/* Aquí puedes añadir más secciones No borrar a hablar con los prometidos*/}
        <Timeline events={weddingEvents} />
        <FechaHoraLugar />
        <TransporteAlojamiento />
        <PostBoda />
      </div>
    </>
  )
}

export default App
