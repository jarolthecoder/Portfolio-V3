import koffeeImg from '../assets/12.webp'
import taskmanagerImg from '../assets/11.webp'
import wonderHomesImg from '../assets/wonderhomes-cover.png'
import iStreamImg from '../assets/13.webp'
import alsaidImg from '../assets/14.webp'
import alexlandscapingImg from '../assets/15.webp'

const projectsData = [
    {
        name: "TaskManager",
        img: taskmanagerImg,
        description:
            "TaskManager is a user-friendly and intuitive dashboard that allows users to stay organized and manage their daily tasks with ease.",
        technologies: "React / Vite / Animate.css",
        repo_link: "https://github.com/jarolthecoder/TaskManagerApp",
        url: "https://thetaskmanager.netlify.app/",
    },
    {
        name: "Koffee",
        img: koffeeImg,
        description:
            "A fully functional ecommerce SPA (Single Page Application) built with Angular that allows for secure online transactions using the integrated Stripe payment gateway.",
        technologies: "Angular / TypeScript / Node.js / Stripe API",
        repo_link: "https://github.com/jarolthecoder/iSTREAM",
        url: "https://koffeeshop.netlify.app/",
    },
    {
        name: "Alsaid Foundation",
        img: alsaidImg,
        description:
            "A multipage website I created for the organization during my internship, it includes custom styling and a donation plugin integration that makes it easy for people to donate.",
        technologies: "WordPress / Elementor / CSS / JavaScript",
        repo_link: "",
        url: "https://alsaidfoundation.org/",
    },
    // {
    //   name: 'Farmstead Round Top',
    //   img: wonderHomesImg,
    //   description: 'WonderHomes is a web template that I created targeting the real estate and property industry which anyone can use to present their business online.',
    //   technologies: 'HTML5 / Bootstrap / JavaScript',
    //   repo_link: 'https://github.com/jarolthecoder/WonderHomes',
    //   url: 'https://jarolthecoder.github.io/WonderHomes/'
    // },
    {
      name: 'Alex Landscaping LLC',
      img: alexlandscapingImg,
      description: `I assisted Alex, a local business owner, in building a website for his company. The goal was to effectively showcase the high-quality of his work and establish a strong online presence for the business.`,
      technologies: 'WordPress / Elementor / CSS / JavaScript',
      repo_link: '',
      url: 'https://alexlandscapingllc.com/'
    }
    // {
    //   name: 'WonderHomes',
    //   img: wonderHomesImg,
    //   description: 'WonderHomes is a web template that I created targeting the real estate and property industry which anyone can use to present their business online.',
    //   technologies: 'HTML5 / Bootstrap / JavaScript',
    //   repo_link: 'https://github.com/jarolthecoder/WonderHomes',
    //   url: 'https://jarolthecoder.github.io/WonderHomes/'
    // },
];
  
export default projectsData