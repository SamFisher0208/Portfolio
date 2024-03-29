import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import sightLineImg from "@/public/sightline.png";
import bloodWaveImg from "@/public/bloodwave2.png";
import mtgBotImg from "@/public/mtg2.png";
import portfolioImg from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; //this is more precise and explicitly defined, if we removed this line TS would infer the type

export const experiencesData = [
  {
    title: "Graduated from UNT",
    location: "Denton, TX",
    description:
      "I graduated from the University of North Texas in Fall of 2023 with a Bachelor of Science in Computer Science and a 3.8 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "DTS Internship",
    location: "Richardson, TX",
    description:
      "I worked for RESPEC as a Data and Technology Solutions intern during Summer of 2023. I primarily assissted in the conversion of RAP, a web application using Angular for the frontend and Spring Boot for the backend.",
    icon: React.createElement(MdOutlineWorkOutline),
    date: "2023",
  },
  {
    title: "IT Technician",
    location: "Denton, TX",
    description:
      "I worked as an IT Technician for UNT's libraries in which I diagnosed and solved customer technical issues.",
    icon: React.createElement(RiComputerLine),
    date: "2020",
  },
  {
    title: "Administration Specialist",
    location: "Denton, TX",
    description:
      "For four years I managed the office of CLEAR at the Universtiy of North Texas by tracking the departmental budget, coordinating events, and maintaining day-to-day office operations.",
    icon: React.createElement(FaRegCalendarAlt),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "SightLine",
    description:
      "A web app designed to detect hazardous issues in videos, such as flashing, excessive luminance, and blue light.",
    tags: ["React", "TypeScript", "Next.js", "Framer Motion", "Emotion CSS"],
    imageUrl: sightLineImg,
    hostUrl: "https://sight-line.vercel.app/",
  },
  {
    title: "MTG!Bot",
    description:
      "A Discord bot that posts random Magic the Gathering™ cards at the command of a user.",
    tags: ["Python", "Discord API", "Scryfall API"],
    imageUrl: mtgBotImg,
    hostUrl: "https://github.com/SamFisher0208/MTGBot",
  },
  {
    title: "Portfolio",
    description:
      "I built this portfolio as a way to show off my work and to practice current web dev technologies.",
    tags: ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: portfolioImg,
    hostUrl: "https://github.com/SamFisher0208/Portfolio",
  },
  {
    title: "Blood Wave",
    description:
      "A wave-based survival game built in LARC, a custom-made C++ engine.",
    tags: ["C++", "DirectX12"],
    imageUrl: bloodWaveImg,
    hostUrl: "https://github.com/Geeknerd1337/Bloodwave",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Angular",
  "Framer Motion",
  "PostgreSQL",
  "Python",
  "C++",
  "Java",
  "Spring Boot",
] as const;
