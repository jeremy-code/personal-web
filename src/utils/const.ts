import { IconType } from "react-icons";
import { FaGraduationCap, FaCode, FaPencilAlt } from "react-icons/fa";

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
];

export const ABOUT_CARDS = [
  {
    front: {
      title: "Student",
      subtitle: "UC San Diego",
      icon: FaGraduationCap,
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
      icon: FaCode,
    },
    back: {
      description:
        "I am a full-stack developer with a passion for building web applications. I have experience with React, Node, and Express, and many other langugages and technologies.",
    },
  },
  {
    front: {
      title: "Creative",
      subtitle: "Designer",
      icon: FaPencilAlt,
    },
    back: {
      description:
        "I am a designer with a passion for creating beautiful and functional interfaces. I have experience with Figma, and Adobe XD, Adobe Photoshop, and Adobe Illustrator.",
    },
  },
];
