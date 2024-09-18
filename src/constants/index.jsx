import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiCplusplus, SiC } from 'react-icons/si';

import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";

import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";

export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievement" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "APARNA BALIGA",
  greet: "Hello there! 👋🏻",
  description:
    "I'm a Computer Science student currently in my final year, eager to apply everything I've learned to real-world challenges and make a meaningful impact through technology.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Safety Sphere - An App",
    description:"A mobile app focused on disaster preparedness and personal safety, offering real-time alerts, location-based services, and emergency contact management. Built with React Native for cross-platform use, it integrates Firebase for authentication and Firestore for data storage, ensuring a reliable and user-friendly experience.",
    image:Img1,
    githubLink: "https://github.com/AparnaBaliga",
  },
  {
    id: 2,
    name: "ResQ - Disaster Resource Management",
    description:
      "An integrated mobile app designed to optimize disaster relief by enabling real-time reporting, dynamic needs assessment, and inventory management. The app ensures efficient resource allocation and reliable communication, enhancing the effectiveness of disaster response efforts.",
    image: Img2,
    githubLink: "https://github.com/AparnaBaliga",
  },
  {
    id: 3,
    name: "Movie Recommendation System",
    description:
      "A Python-based recommendation engine that analyzes user interactions and preferences to deliver personalized recommendations. Utilizing data preprocessing and machine learning techniques, the project enhances user experience by suggesting relevant content.",
    image: Img3,
    githubLink: "https://github.com/AparnaBaliga/Recommendation-engine",
  },
];

export const BIO = [
 " I'm a final-year Computer Science student at Sahyadri College of Engineering and Management with a CGPA of 9.75.",
  "Passionate about technology, I’ve learned and worked with mobile application development, and I'm familiar with C, C++, Python, and Java. While I’m still learning and growing in these areas, and exploring new fields of technology. I’m determined to achieve my goals and tackle new challenges. I thrive on teamwork and am driven to excel, whether it's through coding challenges or collaborative projects.",
  "When I’m not coding, you’ll often catch me dancing, singing, or engaging in lively discussions. Balancing my love for learning with a bit of creativity and fun keeps me motivated and excited about the future.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-500 lg:text-5xl" />, // React
    name: "React",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-700 lg:text-5xl" />, // HTML
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />, // CSS
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-500 lg:text-5xl" />, // JavaScript
    name: "JavaScript",
  },
  {
    icon: <TbBrandReactNative className="text-4xl text-cyan-600 lg:text-5xl" />, // React Native
    name: "React Native",
  },
  {
    icon: <IoLogoFirebase className="text-4xl text-orange-500 lg:text-5xl" />, // Firebase
    name: "Firebase",
  },
  {
    icon: <FaPython className="text-4xl text-blue-500 lg:text-5xl" />, // Python
    name: "Python",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />, // Java
    name: "Java",
  },
  {
    icon: <SiC className="text-4xl text-blue-800 lg:text-5xl" />, // C programming
    name: "C programming",
  },
  {
    icon: <SiCplusplus className="text-4xl text-blue-600 lg:text-5xl" />, // C++
    name: "C++",
  },

];


export const EXPERIENCES = [
  {
    title: "Mentor/Speaker for Junior Internship Programme",
    company: "Sahyadri Open Source Community (SOSC)",
    duration: "November 2023",
    description:
      "Mentored a dynamic group of over 50 students during the Hack Harbor Summer Internship program with SOSC, focusing on Python and C++. Guided learners through key concepts and shared practical insights, enhancing their coding skills while deepening my own understanding.",
  },
  {
    title: "Software Development Intern",
    company: "TCE | Novigo Solutions - Remote",
    duration: "October 2023 - November 2023",
    description:"Worked on developing a movie recommendation system, addressing challenges like data collection, algorithm selection, and system performance. Focused on enhancing user experience by providing personalized movie suggestions and improving overall satisfaction.",
  },
  {
    title: "Community Member",
    company: "Google Developer Student Club - SCEM",
    duration: "August 2023 - Present",
    description:
      "As a Community Member of Google Developer Student Club - SCEM, I participated in various workshops and Google Cloud Arcades. Gained valuable insights into cloud technologies and development practices while engaging with a community of tech enthusiasts.",
  },
];

export const ACHIEVEMENTS = [
  {
    image:a1,
    title: "Recognized for Excellence in Mini-Project Exhibition",
    duration: "March 2024",
    members:"Sankshipth Shetty",
    description:
      "Achieved top 20 recognition among 70 teams in a mini-project poster exhibition and secured the runner-up position at the department-level project exhibition for the 'Disaster & Safety Monitoring: An App' project, demonstrating innovation and excellence in disaster readiness and safety solutions.",
  },
  {
    image:a2,
    title: "Finalist in SAP Hackfest 2024",
    duration: "July 2024",
    members:"Sankshipth Shetty, Nihara, Samarth Rao",
    description:
      "Selected as a finalist in SAP Hackfest 2024, where we successfully developed a prototype for 'Crowd Sourced Disaster Management' and ranked in the top 100 out of 2,500 teams, showcasing innovative solutions in disaster management and collaborative technology.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/baliga_aparnaaa",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
{
    href: "https://github.com/AparnaBaliga",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/aparna-baliga-m-764029229",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
