import profileImg from '../assets/Jarol-Riera-Web-Developer-Profile-Picture-min-mobile.webp';
import 'aos/dist/aos.css';
import '../styles/layout/About.css'
import AOSElement from '../components/AOSElement';


const About = () => {
  const stackList1 = [
    {name: 'React.js'},
    {name: 'Angular'},
    {name: 'Bootstrap'},
    {name: 'SASS'},
    {name: 'Git'}
  ]
  const stackList2 = [
    {name: 'JavaScript'},
    {name: 'TypeScript'},
    {name: 'CSS3'},
    {name: 'HTML5'},
    {name: 'WordPress'}
  ]
   
  return (
    <section id='about' className='about'>
			<div className="width-wrapper flex-control">
        <div className="col-left">
          <AOSElement duration="900">
            <h2>About me</h2>
          </AOSElement>
          <div className="text-content">
            <AOSElement duration="900">
              <p> 
                My journey as a self-taught developer began in 2020 and since then, 
                I have been assisting local business owners by creating 
                visually appealing, accessible & performant websites for their businesses, 
                providing them with a stronger online presence that will help their 
                overall success. 
              </p>
            </AOSElement>
            <AOSElement duration="900">
              <p>
                I find great joy in the process of learning and growing, and it brings 
                me immense satisfaction to utilize my skills and expertise in creating 
                technology that empowers individuals to achieve their goals.
              </p>
            </AOSElement>
             <AOSElement duration="900">
              <p>
                I'm currently open for any freelance or hire opportunities. 
                Here is the stack of technologies I work with:
              </p>
            </AOSElement>
          </div>
          <AOSElement duration="900">
            <div className="stack-list-container flex-control">
              <ul className="stack-list-left">
                {stackList1.map((item, index) => {
                 return ( 
                  <li className="list-item" key={ index }>
                    { item.name }
                  </li>
                 )})
                }
              </ul>
              <ul className="stack-list-right">
                {stackList2.map((item, index) => {
                  return ( 
                  <li className="list-item" key={ index }>
                    { item.name }
                  </li>
                 )})
                }
              </ul>
            </div>
          </AOSElement>
        </div>
        <div className="col-right">
          <AOSElement duration="900">
            <figure className="profile-img-container">
              <img src={ profileImg } className='profile-img' alt="Jarol Riera profile picture"/>
            </figure>
          </AOSElement>
        </div>
			</div>
    </section>
  )
}

export default About