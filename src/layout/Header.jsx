import NavBar from '../components/NavBar'
import Logo from '../components/Logo.jsx'
import AOSElement from '../components/AOSElement';
import 'aos/dist/aos.css';
import '../styles/layout/Header.css';

const Header = ({ handleNavModal, setState }) => {

  return (
    <header 
			id='main-header' 
			className='top-header'
			style={{ position: setState ? 'fixed' : 'absolute' }}>
			<AOSElement aos="fade-in" duration="900" delay="100">
				<div className="width-wrapper grid-control">
					<div className={`col-left ${setState ? 'logo-dark' : ''}`} >
						<a href="/" aria-label="home">
							<Logo />
						</a>
					</div>
					<div className="col-right grid-control">
						<NavBar setState={ setState }/>
						<div 
							className="nav-btn"
							onClick={ handleNavModal }>
							<div className={`bar ${setState ? 'bar-active': ''}`}></div>
							<div className={`bar ${setState ? 'bar-active': ''}`}></div>
						</div>
					</div>
				</div>
			</AOSElement>
    </header>
  )
}

export default Header