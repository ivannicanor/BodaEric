import './FallingFlowers.css'

const FallingFlowers = ({ count = 6 }) => {
  // Generar menos flores para móvil con posiciones optimizadas
  const flowers = Array.from({ length: count }, (_, index) => {
    const positions = [15, 30, 50, 70, 85];
    const durations = [8, 9, 10, 11];
    const delays = [0, 1, 2, 3, 4, 5];
    
    return {
      id: index,
      left: positions[index % positions.length],
      animationDelay: delays[index % delays.length],
      animationDuration: durations[index % durations.length],
      isSmall: index % 3 === 0 // Menos flores pequeñas
    }
  });

  return (
    <div className="falling-flowers">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className={`flower ${flower.isSmall ? 'flower-small' : ''}`}
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.animationDelay}s`,
            animationDuration: `${flower.animationDuration}s`
          }}
        ></div>
      ))}
    </div>
  )
}

export default FallingFlowers