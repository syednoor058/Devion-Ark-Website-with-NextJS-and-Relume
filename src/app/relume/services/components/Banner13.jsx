"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const useScrollAnimation = () => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const xPartOne = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return {
    sectionRef,
    xPartOne,
    xPartTwo,
  };
};

export function Banner13() {
  const useAnimations = useScrollAnimation();
  return (
    <section
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
      ref={useAnimations.sectionRef}
    >
      <div className="flex flex-col whitespace-nowrap">
        <motion.h1
          style={{ x: useAnimations.xPartOne }}
          className="text-[6rem] leading-[1.2] font-bold"
        >
          Tailored Solutions for Every Business Need
        </motion.h1>
        <motion.h1
          style={{ x: useAnimations.xPartTwo }}
          className="text-[6rem] leading-[1.2] font-bold self-end"
        >
          Tailored Solutions for Every Business Need
        </motion.h1>
      </div>
    </section>
  );
}
