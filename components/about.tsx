"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a college freshman currently enrolled in a <span className="font-medium">CS degree</span>, diving into <span className="font-medium">Android Development</span> with <span className="font-medium">Kotlin</span> and <span className="font-medium">Jetpack Compose</span>. My passion for programming began in high school with a YouTube course, where I discovered how much I enjoy the <span className="font-medium">problem-solving aspects of coding and design</span>.

I'm excited about combining my technical skills with a flair for design to create seamless and engaging digital experiences. My core focus right now is on <span className="font-medium">building handy apps</span> and learning as much as I can along the way.

      </p>
      <p>
      When I'm not coding,<span className="font-medium"> I love watching films</span> (perhaps way more than normal people, I fear).
      </p>
    </motion.section>
  );
}
