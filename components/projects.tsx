import SectionHeading from "./sectionHeading";
import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
