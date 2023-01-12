import {
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
  SkillGroup
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Injong Won.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Senior computer science student studying at the  <strong className="text-stone-100">University of Toronto</strong>
      </p>
      
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1arI2X-Hm8Nbs2aKy3-3xXTwKoGK62EXo/view?usp=share_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I'm a senior computer science student studying at the University of Toronto, always keen to solve an tackle problems that will help our society one step at a time. Interested in fullstack development and deep learning module with image processing. 
  I'm currently seeking for internships`,
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Interests', text: 'Software engineering, Full stack development, DevOPS', Icon: SparklesIcon},
  ]
};

/**
 * Skills section,
 */
export const skills: SkillGroup[] = [
  {
    name: 'Web development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 10,
      },
      {
        name: 'Javascript(React)',
        level: 9,
      },
      {
        name: 'Typescript(Angular)',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming/cloud service',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C(OOP)',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'Docker',
        level:8 
      },
      {
        name: 'MongoDb',
        level: 8
      },
      {
        name:'AWS',
        level: 8
      }
    ],
    
  },
  {
    name: 'Algorithms',
    skills: [
      {
        name: 'Data structures',
        level: 10,
      }
      
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];



/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Present',
    location: 'University of Toronto',
    title: 'B.Sc Computer Science',
    content: <p>Rising senior student focus with software engineering</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2019- Aug 2020',
    location: 'IBM',
    title: 'Software developer intern',
    content: (
      <p>
        
        Worked in IBM Watson Commerce Insights Team.
        Perform UI E2E testing on Angular application using Protractor library
        Front End:
        <ul>
          <li>• Working with different teams on implementing high scalability and availability e-commerce applications</li>
          <li>• Develop dynamic UI components that can be re-used in various scenarios.</li>
          <li>• Consuming RESTful APIs to create Angular service for binding data into UI application</li>
          <li>• Upgrade management system from Angular 6 to Angular 8, Neutrino to Carbon, and make it as a standalone application</li>
          <li>• Contributes 30,000+ lines of code and modify 20,000+ lines of code in Typescript</li>  
        </ul>
      </p>
    ),
  },
  
];

/**
 * Recommendation section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Suman Dutta ',
      text: '',
    },
    {
      name: 'Jane Doe',
      text: '.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: '',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Send Email',
      href: 'mailto:iw33981126@gmail.com',
    },
    
   
    {
      type: ContactType.Github,
      text: 'InjongWon',
      href: 'https://github.com/InjongWon',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/InjongWon'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brian-won-injong/'}
];
