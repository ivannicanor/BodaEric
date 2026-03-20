import { useState, useRef } from 'react'
import './Carrusel.css'

const images = [
  { src: new URL('../assets/novios.jpg', import.meta.url).href, alt: 'Foto 1' },
  { src: new URL('../assets/2.jpg', import.meta.url).href, alt: 'Foto 2' },
  { src: new URL('../assets/novios.jpg', import.meta.url).href, alt: 'Foto 3' },
]

function Carrusel() {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)
  const carruselRef = useRef(null)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  // Funciones para manejar el arrastre
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setDragDistance(0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const distance = e.clientX - startX
    setDragDistance(distance)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    
    // Si el arrastre es mayor a 50px, cambiar de imagen
    const threshold = 50
    if (dragDistance > threshold) {
      prev() // Arrastrar hacia la derecha = imagen anterior
    } else if (dragDistance < -threshold) {
      next() // Arrastrar hacia la izquierda = imagen siguiente
    }
    
    setIsDragging(false)
    setDragDistance(0)
  }

  // Funciones para touch (móvil)
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setDragDistance(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const distance = e.touches[0].clientX - startX
    setDragDistance(distance)
  }

  const handleTouchEnd = () => {
    handleMouseUp() // Reutilizar la misma lógica
  }

  return (
    <>
      <div className="section-divider"></div>
      <section className="carrusel-section">
        <div className="container">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="section-divider-small"></div>

          <div 
            className="carrusel"
            ref={carruselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
          >
            <div className="carrusel-track">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`carrusel-slide ${i === current ? 'active' : ''}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="carrusel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carrusel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Carrusel
