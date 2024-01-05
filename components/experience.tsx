"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import TimelineElement from "./timelineElement";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return <TimelineElement key={index} item={item} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
