import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import sightLineImg from "@/public/sightline.png";
import bloodWaveImg from "@/public/bloodwave.png";
import mtgBotImg from "@/public/mtg2.png";

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
] as const;

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
      "I worked for RESPEC as a Data and Technology Solutions intern during Summer of 2023. I primarily assissted in the conversion of RAP, a comprehensive web application using Angular for the frontend and Spring Boot for the backend.",
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
      "SightLine is a React-based web application designed to promote accessibility awareness. It serves as a valuable tool for identifying potentially hazardous elements in video footage, with a focus on detecting issues such as flashing, excessive luminance, and blue light.",
    tags: ["React", "Next.js", "Framer Motion", "Emotion Styles"],
    imageUrl: sightLineImg,
  },
    {
    title: "MTG!Bot",
    description:
      "A Discord bot that posts random Magic the Gathering cards at the command of a user. Depending on the command, it can post different types of cards; a creature or sorcery card, as an example",
    tags: ["Python", "Discord API", "Scryfall API"],
    imageUrl: mtgBotImg,
  },
  {
    title: "Blood Wave",
    description:
      "Blood Wave is a C++, wave-based survival game. My contributions entailed: concept art and character design, development of a player stamina system, a mini-boss, an enemy attack state, GUI implementation, and several animation cycles.",
    tags: ["C++", "DirectX12"],
    imageUrl: bloodWaveImg,
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
  "MongoDB",
  "PostgreSQL",
  "Python",
  "C++",
  "Java",
  "Spring Boot",
] as const;
