import './Hero.css'
import FallingFlowers from './FallingFlowers'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Boda romántica" 
          className="hero-image"
        />
      </div>
      
      {/* Componente de flores cayendo optimizado para móvil */}
      <FallingFlowers count={6} />
      
      <div className="hero-content">
        <div className="hero-sparkles">
          <div className="sparkle" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
          <div className="sparkle" style={{top: '30%', right: '20%', animationDelay: '1s'}}></div>
          <div className="sparkle" style={{bottom: '25%', left: '25%', animationDelay: '2s'}}></div>
          <div className="sparkle" style={{bottom: '35%', right: '15%', animationDelay: '1.5s'}}></div>
        </div>
        
        <h1 className="hero-title">María & Carlos</h1>
        <p className="hero-subtitle">Nos casamos y queremos celebrarlo contigo</p>
        <p className="hero-date">15 de Junio, 2026</p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary">Confirmar Asistencia</button>
          <button className="btn btn-outline">Ver Detalles</button>
        </div>
      </div>
    </section>
  )
}

export default Hero