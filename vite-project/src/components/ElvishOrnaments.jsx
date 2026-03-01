import './ElvishOrnaments.css'

const ElvishOrnaments = ({ position = 'center', size = 'medium', type = 'leaves' }) => {
  const getOrnamentContent = () => {
    switch (type) {
      case 'leaves':
        return (
          <div className={`ornament-leaves ornament-${size}`}>
            <div className="leaf-ornament leaf-left">🍃</div>
            <div className="ornament-center">✧</div>
            <div className="leaf-ornament leaf-right">🍃</div>
          </div>
        )
      case 'vines':
        return (
          <div className={`ornament-vines ornament-${size}`}>
            <div className="vine-segment">🌿</div>
            <div className="ornament-center">❦</div>
            <div className="vine-segment vine-flip">🌿</div>
          </div>
        )
      case 'flowers':
        return (
          <div className={`ornament-flowers ornament-${size}`}>
            <div className="flower-ornament">🌸</div>
            <div className="ornament-center">✿</div>
            <div className="flower-ornament">🌸</div>
          </div>
        )
      case 'runes':
        return (
          <div className={`ornament-runes ornament-${size}`}>
            <div className="rune-symbol">◈</div>
            <div className="rune-symbol">◊</div>
            <div className="ornament-center">※</div>
            <div className="rune-symbol">◊</div>
            <div className="rune-symbol">◈</div>
          </div>
        )
      default:
        return (
          <div className={`ornament-default ornament-${size}`}>
            <div className="ornament-center">✧</div>
          </div>
        )
    }
  }

  return (
    <div className={`elvish-ornament elvish-ornament-${position}`}>
      {getOrnamentContent()}
    </div>
  )
}

export default ElvishOrnaments