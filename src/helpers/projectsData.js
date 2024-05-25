import koffeeImg from '../assets/12.webp'
import taskmanagerImg from '../assets/11.webp'
import wonderHomesImg from '../assets/wonderhomes-cover.png'
import iStreamImg from '../assets/13.webp'
import alsaidImg from '../assets/14.webp'
import alexlandscapingImg from '../assets/15.webp'
import agConstructionsImg from "../assets/a&g-constructions-project-cover.png";

const projectsData = [
  {
    name: "TaskManager",
    img: taskmanagerImg,
    description:
      "TaskManager is a user-friendly and intuitive dashboard that allows users to stay organized and manage their daily tasks with ease.",
    technologies: "Next.js / Redux / Firebase / React-hook-form",
    repo_link: "https://github.com/jarolthecoder/TaskManager-V2",
    url: "https://thetaskmanager.vercel.app/",
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
  //   name: "Alex Landscaping LLC",
  //   img: alexlandscapingImg,
  //   description: `I assisted Alex, a local business owner, in building a website for his company. The goal was to effectively showcase the high-quality of his work and establish a strong online presence for the business.`,
  //   technologies: "WordPress / Elementor / CSS / JavaScript",
  //   repo_link: "",
  //   url: "https://alexlandscapingllc.com/",
  // },
  {
    name: "A&G Construction Services LLC",
    img: agConstructionsImg,
    description: `I had the pleasure of working with Melvin, the owner of A&G Constructions, to update his company's website with a modern design. The project involved a complete overhaul of the existing site, focusing on creating a user-friendly and engaging interface that highlights his services.`,
    technologies: "WordPress / Elementor / CSS / JavaScript",
    repo_link: "",
    url: "https://agconstructionsllc.com/",
  },
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