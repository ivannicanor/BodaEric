import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Button from './components/Button'
import Timeline from './components/Timeline'
import FechaHoraLugar from './components/FechaHoraLugar'
import TransporteAlojamiento from './components/TransporteAlojamiento'
import PostBoda from './components/PostBoda'

// Componente principal App
function App() {
  const handleContactClick = () => {
    alert('¡Contáctanos para más información!')
  }

  const handleGalleryClick = () => {
    console.log('Abrir galería de fotos')
  }

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
    <div className="app">
      <Hero />

      {/* Aquí puedes añadir más secciones No borrar a hablar con los prometidos*/}
      <Timeline events={weddingEvents} />
      <FechaHoraLugar />
      <TransporteAlojamiento />
      <PostBoda />
    </div>
  )
}

export default App
