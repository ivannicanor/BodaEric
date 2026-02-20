import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

// Componente principal App
function App() {
  return (
    <div className="app">
      <Hero />
      
      {/* Aquí puedes añadir más secciones */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Nuestra Historia</h2>
          <div className="divider"></div>
          <p className="text-center">
            Después de [X] años juntos, hemos decidido dar el gran paso. 
            Queremos compartir este momento tan especial con las personas que más queremos.
          </p>
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center">Detalles del Evento</h2>
          <div className="divider"></div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content card">
                <div className="timeline-time">16:30</div>
                <h4 className="timeline-title">Ceremonia</h4>
                <p>La ceremonia se realizará en un entorno natural rodeado de jardines.</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content card">
                <div className="timeline-time">18:00</div>
                <h4 className="timeline-title">Cóctel</h4>
                <p>Disfrutaremos de un cóctel mientras nos tomamos las fotos.</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content card">
                <div className="timeline-time">20:30</div>
                <h4 className="timeline-title">Cena</h4>
                <p>Una cena especial preparada con mucho cariño para todos.</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content card">
                <div className="timeline-time">23:00</div>
                <h4 className="timeline-title">Fiesta</h4>
                <p>¡A bailar hasta que el cuerpo aguante!</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
