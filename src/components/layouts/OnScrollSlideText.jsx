"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const useScrollAnimation = () => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xPartOne = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return {
    sectionRef,
    xPartOne,
    xPartTwo,
  };
};

export function OnScrollSlideText() {
  const useAnimations = useScrollAnimation();
  return (
    <section
      className="overflow-hidden px-[5%] py-3 md:py-5 lg:py-8 bg-gradient-to-br from-accentColor1 to-accentColor2"
      ref={useAnimations.sectionRef}
    >
      <div className="flex flex-col whitespace-nowrap">
        <motion.h1
          style={{ x: useAnimations.xPartOne }}
          className="text-[3rem] lg:text-[6rem] leading-[1.2] font-bold text-white"
        >
          Tailored Solutions For Every Business Need
        </motion.h1>
        <motion.h1
          style={{ x: useAnimations.xPartTwo }}
          className="text-[3rem] lg:text-[6rem] leading-[1.1] font-bold self-end text-white"
        >
          Tailored Solutions For Every Business Need
        </motion.h1>
      </div>
    </section>
  );
}
