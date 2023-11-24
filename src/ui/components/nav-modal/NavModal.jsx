import { SocialMedia } from '../socialmedia/SocialMedia';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavModal.css'
import resume from '../../../assets/resumeJarolRiera23.pdf'

export const NavModal = ({ handleNavModal }) => {

  const links = [
    {name: 'about', url: '/about'},
    {name: 'work', url: '/work'},
    {name: 'contact', url: '/contact'}
  ]

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
                key={ index }
              >
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
            <a href={ resume } target="_blank">
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

