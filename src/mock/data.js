import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chandrajit Satapathy', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Website.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Chandrajit',
  subtitle: "",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'prog.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  //resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'TodoList',
    info: 'Build this todo list using Mongodb as database and hosting it on Heroku server, it can store the task to be done and you can delete it after the task completed.',
    info2: '',
    url: 'https://powerful-anchorage-11968.herokuapp.com/',
    //repo: 'https://twitter.com/home', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dogt.png',
    title: 'Fun Website',
    info: 'This is a fun website, tinder for dog. Here a full website was made from scratch. ',
    info2: '',
    url: 'https://chandrajitsatapathy.github.io/TinDog-Start-master/',
    //repo: 'https://chandrajitsatapathy.github.io/TinDog-Start-master/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drum.png',
    title: 'Drums',
    info: 'Created this applications where drums can be played either by clicking on it or pressing the respective letters.',
    info2: '',
    url: 'https://chandrajitsatapathy.github.io/Drum-Kit/',
   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chandrajitsatapathy9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Chandrajitsata1',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chandrajit-satapathy-6a5b2396/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/chandrajit_satapathy/',
    },
    
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chandrajitsatapathy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
