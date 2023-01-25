
const Button = ({ customFunction, customClass, text, link }) => {
  return (
    <button 
      type="button"
      onClick={ customFunction} 
      className={ customClass }
      aria-label={ text }>
     <a href={ link } target="_blank">{ text }</a>
    </button>
  )
}

export default Button
