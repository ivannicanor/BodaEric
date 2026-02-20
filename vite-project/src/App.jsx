import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Button from './components/Button'
import Timeline from './components/Timeline'
import FechaHoraLugar from './components/FechaHoraLugar'

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
      time: '16:30',
      title: 'Ceremonia',
      description: 'La ceremonia se realizará en un entorno natural rodeado de jardines.',
      location: 'Jardín Principal'
    },
    {
      time: '18:00', 
      title: 'Cóctel',
      description: 'Disfrutaremos de un cóctel mientras nos tomamos las fotos.',
      location: 'Terraza del Salón'
    },
    {
      time: '20:30',
      title: 'Cena',
      description: 'Una cena especial preparada con mucho cariño para todos.',
      location: 'Salón Principal'
    },
    {
      time: '23:00',
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
    </div>
  )
}

export default App
