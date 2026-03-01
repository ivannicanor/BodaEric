import { useState, useEffect } from 'react'
import './EnvelopeOpening.css'

const EnvelopeOpening = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState('envelope-floating')

  useEffect(() => {
    // Secuencia de animación corregida
    const timer1 = setTimeout(() => {
      setAnimationStage('envelope-ready')
    }, 1000) // Preparar el sobre

    const timer2 = setTimeout(() => {
      setAnimationStage('envelope-seal-break')
    }, 2000) // Romper el sello

    const timer3 = setTimeout(() => {
      setAnimationStage('envelope-opening')
    }, 3000) // Abrir el sobre

    const timer4 = setTimeout(() => {
      setAnimationStage('envelope-opened')
    }, 4500) // Sobre completamente abierto

    const timer5 = setTimeout(() => {
      setAnimationStage('envelope-zoom-into')
    }, 6000) // Hacer zoom hacia el interior

    const timer6 = setTimeout(() => {
      onAnimationComplete()
    }, 7500) // Completar la animación

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
    }
  }, [onAnimationComplete])

  return (
    <div className={`envelope-container ${animationStage}`}>
      {/* Fondo de partículas mágicas */}
      <div className="magic-background">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="magic-particle" 
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 3}s`
               }}></div>
        ))}
      </div>

      <div className="envelope-wrapper">
        {/* Sobre principal */}
        <div className="envelope">
          {/* Parte trasera del sobre */}
          <div className="envelope-back"></div>
          
          {/* Sello del sobre */}
          <div className="envelope-seal">
            <div className="seal-inner">E&S</div>
          </div>
          
          {/* Solapa que se abre */}
          <div className="envelope-flap">
            <div className="envelope-flap-inner">
              <div className="flap-shadow"></div>
            </div>
          </div>
          
          {/* Texto en el sobre */}
          <div className="envelope-names">
            <div className="names-text">
              <h1>Eric & Sandra</h1>
              <p>15 de Agosto, 2026</p>
              <div className="ornamental-line"></div>
            </div>
          </div>
          
          {/* Parte delantera del sobre */}
          <div className="envelope-front"></div>
        </div>
        
        {/* Efectos decorativos mejorados */}
        <div className="sparkles">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="sparkle" 
                 style={{
                   top: `${20 + Math.random() * 60}%`,
                   left: `${10 + Math.random() * 80}%`,
                   animationDelay: `${Math.random() * 2}s`
                 }}></div>
          ))}
        </div>
        
        {/* Ondas de impacto */}
        <div className="impact-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
    </div>
  )
}

export default EnvelopeOpening