import ProjectsList from '../components/ProjectsList';
import Button from '../components/Button';
import '../styles/layout/Projects.css'

const Projects = () => {

  return (
    <section id='work' className='projects'>
			<div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectsList />
          </div>
          <div className="col-right">
            <h2>Featured <br/> Projects</h2>
            <p>A showreel of my personal projects and work that I have done for various clients.</p>
            <Button 
              customClass="dark-btn btn" 
              text="See More" 
              link="https://github.com/jarolthecoder?tab=repositories" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
