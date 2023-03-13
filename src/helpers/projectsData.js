import koffeeImg from '../assets/12.webp'
import taskmanagerImg from '../assets/11.webp'
import iStreamImg from '../assets/13.webp'
import alsaidImg from '../assets/14.webp'
import alexlandscapingImg from '../assets/15.webp'

const projectsData = [
   {
      name: 'TaskManager',
      img: taskmanagerImg,
      description: 'TaskManager is a user-friendly and intuitive dashboard that allows users to stay organized and manage their daily tasks with ease.',
      technologies: 'React / Vite / Animate.css',
      repo_link: 'https://github.com/jarolthecoder/TaskManagerApp',
      url: 'https://thetaskmanager.netlify.app/'
    },
    {
      name: 'Koffee',
      img: koffeeImg,
      description: 'A fully functional ecommerce SPA (Single Page Application) built with Angular that allows for secure online transactions using the integrated Stripe payment gateway.',
      technologies: 'Angular / TypeScript / Node.js / Stripe API',
      repo_link: 'https://github.com/jarolthecoder/iSTREAM',
      url: 'https://koffeeshop.netlify.app/'
    },
  // {
  //     name: 'iStream',
  //     img: iStreamImg,
  //     description: 'iSTREAM is an entertainment web app built to be user-friendly and intuitive. Users can search, browse and save their preferred content with ease.',
  //     technologies: 'Angular / TypeScript / Mock API',
  //     repo_link: 'https://github.com/jarolthecoder/Koffee-Ecommerce',
  //     url: 'https://myistream.netlify.app/'
  //   },
    {
      name: 'Alsaid Foundation',
      img: alsaidImg,
      description: 'A multipage website I created for the organization during my internship, it includes custom styling and a donation plugin integration that makes it easy for people to donate.',
      technologies: 'WordPress / Elementor / CSS / JavaScript',
      repo_link: '',
      url: 'https://alsaidfoundation.org/'
    },
    {
      name: 'Alex Landscaping LLC',
      img: alexlandscapingImg,
      description: `I assisted Alex, a local business owner, in building a website for his company. The goal was to effectively showcase the high-quality of his work and establish a strong online presence for the business.`,
      technologies: 'WordPress / Elementor / CSS / JavaScript',
      repo_link: '',
      url: 'https://alexlandscapingllc.com/'
    }
]
  
export default projectsData