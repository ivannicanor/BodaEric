import './Button.css'

const Button = ({ 
  children, 
  className = 'btn', 
  variant = 'primary', 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e)
    }
  }

  const buttonClasses = `${className} btn-${variant} ${disabled ? 'btn-disabled' : ''}`

  return (
    <button 
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button