import { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/components/NavModal.css'
import gsap from 'gsap';

const NavModal = ({ handleNavModal, setState }) => {

  const links = [
    {name: 'about', url: '/about'},
    {name: 'work', url: '/work'},
    {name: 'contact', url: '/contact'}
  ]

	useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
		
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div 
      id='nav-modal' 
      className={`nav-modal flex-control`}>
      <div className='inner-container width-wrapper flex-control'>
        <ul className={`modal-navigation`}>
          { links.map((item, index) => {
            return (
              <li 
                className={`modal-link modal-item`}
                key={ index }>
                <Link
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                  aria-label={ item.name }>
                  <span className="link" onClick={ handleNavModal }>
                    { item.name }
                  </span>
                </Link>
              </li>
            )
          })
          }
          <li className={`modal-link modal-item`}>
            <a href="../assets/resume-jarol-riera2023.pdf" target="_blank">
              <span className="link" onClick={ handleNavModal }>
                Resume
              </span>
            </a>
          </li>
        </ul>
        <div className={`social-media-container modal-item`}>
          <SocialMedia />
          <a className="email-link" href="mailto:jarolr.webdev@gmail.com">jarolr.webdev@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default NavModal
