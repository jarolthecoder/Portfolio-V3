import logoLight from '../assets/jr-logo-light.webp'
import '../styles/components/Logo.css'


const Logo = () => {

  return (
    <div className="logo-container col-left">
			<img 
        src={ logoLight }
        className="logo-img" 
        alt="jarol riera logo" />
		</div>
  )
}

export default Logo
