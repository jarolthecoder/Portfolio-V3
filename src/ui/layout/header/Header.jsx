import { AOSElement, Logo, NavBar } from '../../components';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';
import 'aos/dist/aos.css';
import './Header.css';

export const Header = ({ handleNavModal }) => {

	const { navOpen } = useContext(AppContext);

  return (
    <header 
			id='main-header' 
			className='top-header'
			style={{ position: navOpen ? 'fixed' : 'absolute' }}>
			<AOSElement aos="fade-in" duration="900" delay="100">
				<div className="width-wrapper grid-control">
					<div className={`col-left ${navOpen ? 'logo-dark' : ''}`} >
						<a href="/" aria-label="home">
							<Logo />
						</a>
					</div>
					<div className="col-right grid-control">
						<NavBar navOpen={ navOpen } />
						<div 
							className="nav-btn"
							onClick={ handleNavModal }>
							<div className={`bar ${navOpen ? 'bar-active': ''}`}></div>
							<div className={`bar ${navOpen ? 'bar-active': ''}`}></div>
						</div>
					</div>
				</div>
			</AOSElement>
    </header>
  )
}
