import { useState, useEffect } from 'react'
import './MagicalElements.css'

const MagicalElements = ({ density = 'medium' }) => {
  const [leaves, setLeaves] = useState([])
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const leafCount = density === 'light' ? 8 : density === 'medium' ? 12 : 16
    const sparkleCount = density === 'light' ? 15 : density === 'medium' ? 20 : 25

    // Generar hojas flotantes
    const newLeaves = Array.from({ length: leafCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 0.8 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      type: ['oak', 'maple', 'vine'][Math.floor(Math.random() * 3)]
    }))

    // Generar partículas mágicas
    const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      id: i + leafCount,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 4,
      size: 0.5 + Math.random() * 0.8,
    }))

    setLeaves(newLeaves)
    setSparkles(newSparkles)
  }, [density])

  return (
    <div className="magical-elements">
      {/* Hojas flotantes élficas */}
      <div className="floating-leaves">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className={`leaf leaf-${leaf.type}`}
            style={{
              left: `${leaf.left}%`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
              transform: `scale(${leaf.size}) rotate(${leaf.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Partículas mágicas */}
      <div className="magical-sparkles">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="magical-sparkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
              transform: `scale(${sparkle.size})`,
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos élficos */}
      <div className="elvish-decorations">
        <div className="elvish-corner elvish-corner-tl" />
        <div className="elvish-corner elvish-corner-tr" />
        <div className="elvish-corner elvish-corner-bl" />
        <div className="elvish-corner elvish-corner-br" />
      </div>

      {/* Vines mágicas en los bordes */}
      <div className="magical-vines">
        <div className="vine vine-left" />
        <div className="vine vine-right" />
      </div>
    </div>
  )
}

export default MagicalElements