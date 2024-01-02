"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[50rem] text-left leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having recently obtained my degree in{" "}
        <span className="font-medium">Computer Science</span>, I'm now ready to
        tackle new challenges in my professional journey.{" "}
        <span className="italic">My favorite part of programming</span> is the
        blending of my creative and analytical minds. I{" "}
        <span className="underline">love</span> bringing my creative side to
        seemingly straight forward, qualitative problems. Lately, I've been
        working in and learning{" "}
        <span className="font-medium">React, Next.js, Node.js, and Vite</span>{" "}
        and I'm always looking to learn new technologies. I'm currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer, with the desire to specialize in front-end.
      </p>
      <p>
        <span className="italic">Apart from my profesional life</span>, I have a
        great passion for art and have been drawing since I could pick up a
        crayon. I also enjoy playing video games, watching movies, and being cat
        mom to three cats: Fen, Lady, and Salem.
      </p>
    </motion.section>
  );
}
