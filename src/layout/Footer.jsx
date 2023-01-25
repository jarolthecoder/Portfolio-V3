import '../styles/layout/Footer.css'
import Logo from '../components/Logo.jsx'
import AOSElement from '../components/AOSElement';

const Footer = () => {
  return (
    <footer id="main-footer">
      <AOSElement duration="900">
        <div className="width-wrapper grid-control">
          <div className="logo-container col-left">
            <a href="/" aria-label="home">
              <Logo />
            </a>
          </div>
          <p className="copyright">
            ©2023 Made by <a href="https://jarolriera.com/">Jarol Riera</a>.
          </p>
        </div>
      </AOSElement>
    </footer>
  )
}

export default Footer