import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { AppContext } from './AppContext'
import AOS from 'aos';
import { useEffect } from 'react';

export const AppProvider = ({ children }) => {

  // Navbar state
  const [navOpen, setNavOpen] = useState(false);

  // Scroll to top button
  const refScrollUp = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTopBtn, setshowScrollTopBtn] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (position > 1250) {
      setshowScrollTopBtn(true);
    } else if(position < 1000) {
      setshowScrollTopBtn(false);
    }
  };

   const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleVisibleButton);
  }, [])

  const value = {
    navOpen,
    setNavOpen,
    handleVisibleButton,
    handleScrollUp,
    showScrollTopBtn,
    refScrollUp
  }

  return <AppContext.Provider value={ value }>{ children }</AppContext.Provider>

}
