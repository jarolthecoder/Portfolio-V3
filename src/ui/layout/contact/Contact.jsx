import { AOSElement, Button, SocialMedia } from '../../components';
import dotsBg from '../../../assets/dots-bg.svg'
import helloImg from '../../../assets/hand-hello.svg'
import './Contact.css'


export const Contact = () => {
  
  return (
    <div id='contact'>
      <div className="width-wrapper flex-control">
        <div className="col-left">
          <AOSElement duration="900">
            <h2 className="flex-control">
              <span>Interested?</span>
              <span>Let's get in touch</span>
            </h2>
          </AOSElement>
          <AOSElement duration="900">
            <p className='lead'>
              If you're looking for a goal-oriented and creative Front End developer, 
              I might be the one you're looking for. Feel free to send me a message, 
              I will get back to you as soon as possible!
            </p>
          </AOSElement>
        </div>
        <div className="col-right">
          <div className="email-wrapper flex-control">
            <AOSElement duration="900">
              <div className="email-icon">
                <img className="hello-img" src={ helloImg } alt="" />
              </div>
            </AOSElement>
            <AOSElement duration="900">
              <Button 
                customClass="email-link"
                link="mailto:jarolr.webdev@gmail.com"
                text="jarolr.webdev@gmail.com"
              />
            </AOSElement>
          </div>
          <AOSElement duration="900">
            <SocialMedia />
          </AOSElement>
        </div>
      </div>
      <div 
        className="bg-container" 
        data-aos="fade-up" 
        data-aos-duration="900">  
        <img 
          src={ dotsBg } 
          alt="" 
          className="bg-img" 
          style={{ transform: `translateY(${scrollY * -0.3}px)` }} 
        />
        <div className="gradient-layer"></div>
      </div>
    </div>
  )
}
