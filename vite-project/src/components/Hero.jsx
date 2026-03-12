import './Hero.css'
import FallingFlowers from './FallingFlowers'
import Button from './Button'

const Hero = () => {
  const handleRSVP = () => {
    console.log('Confirmar asistencia clicked!')
    // Aquí puedes agregar la lógica para RSVP
    // Por ejemplo, scroll a formulario o abrir modal
  }

  const noviosImg = new URL('../assets/2.jpg', import.meta.url).href

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src={noviosImg}
          alt="Boda romántica" 
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-sparkles">
          <div className="sparkle" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
          <div className="sparkle" style={{top: '30%', right: '20%', animationDelay: '1s'}}></div>
          <div className="sparkle" style={{bottom: '25%', left: '25%', animationDelay: '2s'}}></div>
          <div className="sparkle" style={{bottom: '35%', right: '15%', animationDelay: '1.5s'}}></div>
        </div>
        
        <h1 className="hero-title">
          Sandra & Eric
        </h1>
        <p className="hero-subtitle">
          Nos casamos y queremos celebrarlo contigo
        </p>
        <p className="hero-date">
          15 de Agosto, 2026
        </p>
        
        <div className="hero-buttons">
          <Button variant="primary" onClick={handleRSVP}>
            Confirmar Asistencia
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero