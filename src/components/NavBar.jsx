import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/components/NavBar.css';

const NavBar = ({ setState }) => {
	const navLink = [
		{name: 'work', url:'/work'},
		{name: 'contact', url:'/#contact'}
	]

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
		
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="top-navbar">
			<ul 
				className='navigation flex-control'
				style={{display: setState ? 'none' : 'flex'}}>
				{navLink.map((item, index) => {
					return(
						<li className="nav-item flex-control" key={ index }>
							<Link
								to={item.name}
								spy={true}
								smooth={true}
								offset={0}
								duration={800}
								className="nav-link" 
								data-text={ item.name }
								aria-label={ item.name }>
								<span className="rotating-link">{ item.name }</span>
							</Link>
						</li>
					)
				})}
			</ul>
    </nav>
  )
}

export default NavBar