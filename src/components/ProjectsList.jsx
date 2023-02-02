import '../styles/components/ProjectsList.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOSElement from '../components/AOSElement';
import koffeeImg from '../assets/koffee-cover.webp'
import iStreamImg from '../assets/istream-cover.webp'
import alsaidImg from '../assets/alsaidfoundation-cover.webp'
import portfolioImg from '../assets/jarolriera-portfolio-cover.webp'


/* Icons */
const gitHub = <FontAwesomeIcon icon={ faGithub } />
const arrowLink = <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />

const ProjectsList = () => {
  return (
    <>
      <div className="project-wrapper flex-control">
        <figure className='project-img-container'>
          <img className='project-img' src={ koffeeImg } alt="" />
        </figure>
        <AOSElement duration="300">
          <div className="project-description">
            <div className="project-header">
              <h3>Koffee</h3>
            </div>
            <p>
              A fully functional ecommerce site I built with Angular that allows
              for secure online transactions using the integrated Stripe payment gateway. 
            </p>
            <ul className="technoligies flex-control">
              <li>Angular /</li>
              <li>TypeScript /</li>
              <li>Node.js /</li>
              <li>Stripe API</li>
            </ul>
            <div className="project-link-container flex-control">
              <a 
                className="project-link" 
                href="https://github.com/jarolthecoder/Koffee-Ecommerce"
                target="_blank">
                GitHub { gitHub }
              </a>
              <a 
                className="project-link" 
                href="https://koffeeshop.netlify.app/"
                target="_blank">
                View Project { arrowLink }
              </a>
            </div>
          </div>
        </AOSElement>
      </div>
      <div className="project-wrapper">
        <figure className='project-img-container'>
          <img className='project-img' src={ iStreamImg } alt="" />
        </figure>
        <AOSElement duration="300">
          <div className="project-description">
            <div className="project-header">
              <h3>iStream</h3>
            </div>
            <p>
              iSTREAM is an entertainment web app built to be user-friendly and intuitive. 
              Users can search, browse and save their preferred content with ease. 
            </p>
            <ul className="technoligies flex-control">
              <li>Angular /</li>
              <li>TypeScript /</li>
              <li>Mock API</li>
            </ul>
            <div className="project-link-container flex-control">
              <a 
                className="project-link" 
                href="https://github.com/jarolthecoder/iSTREAM"
                target="_blank">
                GitHub { gitHub }
              </a>
              <a 
                className="project-link" 
                href="https://myistream.netlify.app/"
                target="_blank">
                View Project { arrowLink }
              </a>
            </div>
          </div>
        </AOSElement>
      </div>
      <div className="project-wrapper">
        <figure className='project-img-container'>
          <img className='project-img' src={ alsaidImg } alt="" />
        </figure>
        <AOSElement duration="300">
          <div className="project-description">
            <div className="project-header">
              <h3>Alsaid Foundation</h3>
            </div>
            <p>
              A multipage website I created for the organization during my internship, 
              it includes custom styling and a donation plugin integration that makes it 
              easy for people to donate. 
            </p>
            <ul className="technoligies flex-control">
              <li>WordPress /</li>
              <li>Elementor /</li>
              <li>CSS /</li>
              <li>JavaScript</li>
            </ul>
            <div className="project-link-container flex-control">
              <a 
                className="project-link" 
                href="https://alsaidfoundation.org/"
                target="_blank">
                View Project { arrowLink }
              </a>
            </div>
          </div>
        </AOSElement>
      </div>
      <div className="project-wrapper">
        <figure className='project-img-container'>
          <img className='project-img' src={ portfolioImg } alt="" />
        </figure>
        <AOSElement duration="300">
          <div className="project-description">
            <div className="project-header">
              <h3>Portfolio V3</h3>
            </div>
            <p>
              With an artistic approach to the UI, I wanted to
              provide a more dynamic and engaging experience,  
              while showcasing my work and expertise.
              It's a great representation of my design and development skills.
            </p>
            <ul className="technoligies flex-control">
              <li>React /</li>
              <li>Vite /</li>
              <li>AOS </li>
            </ul>
            <div className="project-link-container flex-control">
              <a 
                className="project-link" 
                href="https://github.com/jarolthecoder/Koffee-Ecommerce"
                target="_blank">
                GitHub { gitHub }
              </a>
            </div>
          </div>
        </AOSElement>
      </div>
    </>
  )
}

export default ProjectsList