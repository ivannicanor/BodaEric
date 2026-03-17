import { useState, useEffect, useRef } from 'react'
import './EnvelopeOpening.css'
import introVideo from '../assets/video.mp4'

const LINES = [
  { text: 'En un rincón, encantado del bosque,', type: 'normal' },
  { text: 'donde los árboles usan historias', type: 'normal' },
  { text: 'y el agua canta al pasar,', type: 'normal' },
  { text: 'Sandra y Eric', type: 'names' },
  { text: 'han decidido entrelazar sus destinos', type: 'normal' },
  { text: 'bajo el brazo de un gran árbol llorón.', type: 'normal' },
  { text: 'Te invitamos a compartir con nosotros este día,', type: 'normal' },
  { text: 'lleno de magia, amor y fantasía.', type: 'normal' },
  { text: 'Ven con el corazón abierto y, si te atreves,', type: 'normal' },
  { text: 'deja que las hadas te guíen entre la luz,', type: 'normal' },
  { text: 'las flores y los sueños.', type: 'normal' },
]

const EnvelopeOpening = ({ onAnimationComplete }) => {
  const [showText, setShowText] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const completionTimerRef = useRef(null)

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000)
    return () => {
      clearTimeout(textTimer)
      if (completionTimerRef.current) clearTimeout(completionTimerRef.current)
    }
  }, [])

  const handleVideoEnded = () => {
    completionTimerRef.current = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => onAnimationComplete(), 1000)
    }, 7000)
  }

  return (
    <div className={`intro-container${fadeOut ? ' fade-out' : ''}`}>
      <video
        className="intro-video"
        src={introVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />
      <div className={`text-overlay${showText ? ' visible' : ''}`}>
        <div className="invitation-text">
          {LINES.map((line, i) => (
            <span
              key={i}
              className={`text-line${line.type === 'names' ? ' line-names' : ''}`}
              style={{ animationDelay: `${i * 0.75}s` }}
            >
              {line.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EnvelopeOpening