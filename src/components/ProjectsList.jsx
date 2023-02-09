import '../styles/components/ProjectsList.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOSElement from '../components/AOSElement';
import projectsData from '../helpers/projectsData';


/* Icons */
const gitHub = <FontAwesomeIcon icon={ faGithub } />
const arrowLink = <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />

const ProjectsList = () => {

  return (
    <>
      {
        projectsData.map(item => {
          return (
            <div className="project-wrapper flex-control" key={ item.name }>
              <figure className='project-img-container'>
                <img className='project-img' src={ item.img } alt="Project image" loading="lazy"/>
              </figure>
              <AOSElement duration="300">
                <div className="project-description">
                  <h3>{ item.name }</h3>
                  <p>{ item.description }</p>
                  <p className="technoligies flex-control">
                    { item.technologies }
                  </p>
                  <div className="project-link-container flex-control">
                    { (item.repo_link.length > 1 ) 
                      &&  <a 
                            className="project-link" 
                            href={item.repo_link}
                            target="_blank">
                            GitHub { gitHub }
                          </a>
                    }
                    <a 
                      className="project-link" 
                      href={ item.url }
                      target="_blank">
                      View Project { arrowLink }
                    </a>
                  </div>
                </div>
              </AOSElement>
            </div>
          )
        })
      }
    </>
  )
}

export default ProjectsList