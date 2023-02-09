import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import AOSElement from '../components/AOSElement';
import backgroundImg from '../assets/peter-olexa-Q5GnQxjX7Jk-unsplash-PhotoRoom.png-PhotoRoom.webp'
import '../styles/layout/Hero.css'
import 'aos/dist/aos.css';


const Hero = () => {

  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () =>  setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
			<section id="hero" className="hero flex-control">
				<div className="section-wrapper width-wrapper">
					<div className="hero-content flex-control">
            <AOSElement duration="900" delay="100">
              <p className="subtitle">Hello, my name is Jarol</p>
            </AOSElement>
						<AOSElement duration="900" delay="150">
              <h1 className="title flex-control" >
                <span>UI Developer</span>
                <span>Avid Programmer</span>
              </h1>
            </AOSElement>
            <AOSElement duration="900" delay="200">
              <p className="lead">
                I am a goal-driven Front End web developer passionate 
                about bringing digital experiences to life. 
              </p>
            </AOSElement>
					</div>
          <div className="hero-bg-container">
            <AOSElement duration="900" delay="100">
              <img 
                src={ backgroundImg } 
                className={`bg-img ${!scrollY ? 'bg-img-float' : ''}`} 
                style={{ transform: `translateY(${scrollY * -0.3}px)` }} 
                width="1280"
                height="853"
                alt="Hero background image" 
              />
              <div className="gradient-layer"></div>
            </AOSElement>
          </div>
					<div 
            className={`scroll-down ${loaded ? 'scroll-fade-in' : ''}`}
            aria-label="scroll">
						<Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}>
              <div className="mouse">
                <div className="scroller"></div>
              </div>
              <p className="scroll-text">scroll down</p>
            </Link>
					</div>
				</div>
			</section>
    </>
  )
}

export default Hero
