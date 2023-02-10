import gsap from 'gsap';

export const navModalGsap = (navOpen, setNavOpen) => {

  const navTimeline = gsap.timeline({defaults: {duration: 1}})
  const openNav = () => {
    setNavOpen(!navOpen)
    animateOpenNav()
    navTimeline.reversed(!navTimeline.reversed())
  }
  const closeNav = () => {
    setNavOpen(!navOpen)
    animateCloseNav()
    navTimeline.reversed(!navTimeline.reversed())
  }
  const animateOpenNav = () => {
    navTimeline
      .to('.nav-modal', {ease: 'expo.out', x: 0}).reverse()
      .fromTo('.modal-item', {y: '-75%', opacity: 0}, {y: 0, opacity: 1, ease:'power4.out', stagger: 0.05}, '< .5').reverse()
  }
  const animateCloseNav = () => {
    navTimeline
      .to('.nav-modal', { ease: 'expo.inOut', x: '100%'}).reverse()
      .to('.modal-item', {y: '-75%', opacity: 0, ease:'power4.out', stagger: 0.05}, '< .05').reverse()
  }

  return {
    handleNavModal: () => !navOpen ? openNav() : closeNav()
  };
}
