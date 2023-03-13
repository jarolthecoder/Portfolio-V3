import '../styles/components/ProjectsList.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import projectsData from '../helpers/projectsData';
import AOSElement from '../components/AOSElement';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';


/* Icons */
const gitHub = <FontAwesomeIcon icon={ faGithub } />
const arrowLink = <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />

/* GSAP Scrolltrigger plugin*/
gsap.registerPlugin(ScrollTrigger);

const ProjectsList = () => {

  const handleImageAnimation = (img) => {
     gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentNode,
        start: "-500px top",
        end: "center center",
        scrub: true,
      },
      scale: 1,
      transformOrigin: "center center",
      autoAlpha: 1,
      duration: 0.2,
      startAt: { scale: 0.9, autoAlpha: 0.9}
    });
  };

  return (
    <>
      {
        projectsData.map((item, index) => {
          let imgRef = useRef();

          useEffect(() => {
            handleImageAnimation(imgRef.current);
          }, [imgRef])
          return (
            <div className="project-wrapper flex-control" key={index}>
              <figure className="project-img-container flex-control">
                <img
                  className="project-img"
                  src={item.img}
                  width="100%"
                  height="100%"
                  alt="Project image"
                  ref={imgRef}
                />
              </figure>
              <AOSElement duration="300">
                <div className="project-description">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="technoligies flex-control">
                    {item.technologies}
                  </p>
                  <div className="project-link-container flex-control">
                    {(item.repo_link.length > 1) &&
                      <a
                        className="project-link"
                        href={item.repo_link}
                        target="_blank"
                      >
                        GitHub {gitHub}
                      </a>
                    }
                    <a
                      className="project-link"
                      href={item.url}
                      target="_blank"
                    >
                      View Project {arrowLink}
                    </a>
                  </div>
                </div>
              </AOSElement>
            </div>
          );
        })
      }
    </>
  )
}

export default ProjectsList