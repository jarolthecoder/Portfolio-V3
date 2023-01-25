import { useState, useEffect, useRef} from 'react'
import Header from './layout/Header'
import About from './layout/About'
import Hero from './layout/Hero'
import Projects from './layout/Projects'
import Contact from './layout/Contact'
import  Footer  from './layout/Footer'
import NavModal from './components/NavModal'
import ScrollTopBtn from './components/ScrollTopBtn'
import AOS from 'aos';
import './styles/App.css'
import 'aos/dist/aos.css';


const App = ()=> {
  const [navOpen, setNavOpen] = useState(false)

	const handleNavModal = () => {
		if(!navOpen) {
			setNavOpen(true);
		} else {
			setNavOpen(false);
		}
		
	}
  const refScrollUp = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTopBtn, setshowScrollTopBtn] = useState("goTopHidden");

  //DISPLAY HANDLER
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (position > 1000) {
      setshowScrollTopBtn("scroll-top");
    } else if(position < 1000) {
      setshowScrollTopBtn("scroll-top-hidden");
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    AOS.init({
      once: true
    });
    window.addEventListener("scroll", handleVisibleButton);
  }, [])
  
  return (
    <>
      <div ref={refScrollUp}> </div>
      <div className={`bg-layer ${navOpen ? 'bg-layer-active' : ''}`}></div>
      <NavModal handleNavModal={ handleNavModal } setState={ navOpen } />
      <Header handleNavModal={ handleNavModal } setState={ navOpen } />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopBtn 
        showScrollTopBtn={ showScrollTopBtn } 
        scrollUp={ handleScrollUp }/>
    </>
  )
}

export default App
