import './ScrollTopBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

//Icon
const arrowUp = <FontAwesomeIcon icon={ faArrowUpLong }/>

export const ScrollTopBtn = ({ customClass }) => {

  const { handleScrollUp } = useContext(AppContext)

  return (
    <div 
      className={ customClass } 
      onClick={ handleScrollUp }>
      <button className='scroll-top-btn btn'>
        { arrowUp }
      </button>
    </div>
  )
}

