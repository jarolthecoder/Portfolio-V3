import '../styles/components/ScrollTopBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'

//Icon
const arrowUp = <FontAwesomeIcon icon={ faArrowUpLong }/>

const ScrollTopBtn = ({ showScrollTopBtn, scrollUp }) => {

  return (
    <div 
      className={ showScrollTopBtn } 
      onClick={ scrollUp }>
      <button className='scroll-top-btn btn'>
        { arrowUp }
      </button>
    </div>
  )
}

export default ScrollTopBtn
