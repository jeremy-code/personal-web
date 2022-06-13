import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import { HiOutlineAcademicCap, HiOutlineTerminal, HiOutlinePhotograph } from "react-icons/hi";

import { patientport, rhythmRoom, cryptoApp, covidTracker, crowdpage } from "assets";

export type FrontCardProps = {
  title: string;
  subtitle: string;
  icon: IconType;
};

export type BackCardProps = {
  description: string;
};

export type SectionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
};

export const NAV_LINKS = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
  {
    name: "Social",
    id: "social",
  },
];

export const ABOUT_CARDS = [
  {
    front: {
      title: "Student",
      subtitle: "UC San Diego",
      icon: HiOutlineAcademicCap,
    },
    back: {
      description:
        "I am a student at the University of California, San Diego. I am currently pursuing a B.S. in Mathematics and Computer Science.",
    },
  },
  {
    front: {
      title: "Developer",
      subtitle: "Full-Stack",
      icon: HiOutlineTerminal,
    },
    back: {
      description:
        "I am a full-stack developer with a passion for building web applications. I have experience with React, Node, Express, and many other langugages and technologies.",
    },
  },
  {
    front: {
      title: "Creative",
      subtitle: "Designer",
      icon: HiOutlinePhotograph,
    },
    back: {
      description:
        "I am a designer with a passion for creating beautiful and functional interfaces. I have experience with Figma, and Adobe XD, Adobe Photoshop, and Adobe Illustrator.",
    },
  },
];

export type SocialMediaProps = {
  name: string;
  username: string;
  link: string;
  color: string;
  icon: IconType;
};

export const SOCIAL_MEDIA = [
  {
    name: "GitHub",
    username: "jeremynguyencs",
    link: "https://github.com/jeremynguyencs",
    color: "blackAlpha",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    username: "jeremynguyencs",
    link: "https://www.linkedin.com/in/jeremynguyencs",
    color: "linkedin",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    username: "hi@jeremynguyen.dev",
    link: "mailto:hi@jeremynguyen.dev",
    color: "red",
    icon: HiOutlineMail,
  },
];

export type ContactFormInputProps = {
  name: string;
  icon: IconType;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CarouselCard = {
  title: string;
  tags: string[];
  description: string;
  github: string;
  link: string;
  image: string;
};

export const PROJECT_CARDS: Array<CarouselCard> = [
  {
    title: "PatientPort",
    tags: ["React", "Solidity", "Ether.js"],
    description: "React Blockchain web application for managing patient records.",
    github: "https://github.com/rishimagiawala/patient-port",
    link: "https://patientport.netlify.com/",
    image: patientport,
  },
  {
    title: "Rhythm Room",
    tags: ["React", "Node", "Socket.io"],
    description:
      "A web app that allows you to listen to music and watch videos synchronously with other people.",
    github: "https://github.com/sprestrelski/rhythm-room",
    link: "https://rhythm-room.herokuapp.com/",
    image: rhythmRoom,
  },
  {
    title: "Crypto App",
    tags: ["React", "Solidity", "Ether.js"],
    description:
      "A web app that allows you to buy and sell cryptocurrencies. You can also view the current price of each cryptocurrency.",
    github: "https://github.com/jeremynguyencs/crypto-app",
    link: "https://another-crypto-app.netlify.app/",
    image: cryptoApp,
  },
  {
    title: "Crowdpage",
    tags: ["React", "Next.js", "Firebase"],
    description:
      "A social media platform for creating and sharing posts. Users can create posts and like other posts.",
    github: "https://github.com/jeremynguyencs/crowdpage",
    link: "crowdpage.vercel.app",
    image: crowdpage,
  },
  {
    title: "COVID-19 Tracker",
    tags: ["React", "Chart.js", "API"],
    description: "Track the current status of COVID-19 in the world based on current data.",
    github: "https://github.com/jeremynguyencs/covid-tracker",
    link: "https://covid-tracker.herokuapp.com/",
    image: covidTracker,
  },
];
