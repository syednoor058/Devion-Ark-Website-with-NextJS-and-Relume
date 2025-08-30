"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";
import { Spotlight } from "../ui/spotlight-new";

const useRelume = () => {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const yFirst = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-87.5vh"]
  );
  const ySecond = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-39.6vh"]
  );

  return {
    transformRef,
    yFirst,
    ySecond,
  };
};

export function FourImagesOnScrollHeader({
  title,
  desc,
  primaryButton = "Hire Us",
  secondaryButton = "View Our Work",
  image1 = {},
  image2 = {},
  image3 = {},
  image4 = {},
}) {
  const useActive = useRelume();
  return (
    <section
      className="relative h-[150vh] px-[5%] md:h-[300vh] bg-neutral-950 text-neutral-300 pt-20 md:pt-24 lg:pt-28"
      ref={useActive.transformRef}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 right-auto bottom-0 left-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: useActive.yFirst }}
          >
            <div className="relative h-[35vw] pt-[120%] sm:h-auto w-[30vw] md:w-[28vw] lg:w-[22vw]">
              <Image
                src={image1.img}
                className="absolute inset-0 size-full rounded-image object-cover"
                alt={image1.alt}
                fill
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] sm:h-auto left-[52vw] mt-[-46vw] w-[30vw] md:w-[28vw] lg:left-[58vw] lg:w-[22vw]">
              <Image
                src={image2.img}
                className="absolute inset-0 size-full rounded-image object-cover"
                alt={image2.alt}
                fill
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 right-0 bottom-0 left-auto z-0"
          style={{ y: useActive.ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            <div className="relative h-[35vw] pt-[120%] opacity-75 sm:h-auto w-[28vw] md:w-[26vw] lg:w-[20vw]">
              <Image
                src={image3.img}
                className="absolute inset-0 size-full rounded-image object-cover"
                alt={image3.alt}
                fill
              />
            </div>
            <div className="relative h-[35vw] pt-[120%] opacity-75 sm:h-auto right-[50vw] mt-[-44vw] w-[26vw] md:w-[24vw] lg:right-[54vw] lg:w-[18vw]">
              <Image
                src={image4.img}
                className="absolute inset-0 size-full rounded-image object-cover"
                alt={image4.alt}
                fill
              />
            </div>
          </div>
        </motion.div>
        <div className="relative container flex h-full max-w-3xl justify-center pt-16 pb-24 text-center">
          <div>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
              {title}
            </h1>
            <p className="md:text-md text-neutral-300 relative z-20">{desc}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 mb-5 relative z-[20]">
              <PrimaryButton
                text={primaryButton}
                icon={
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in ml-3 text-sm" />
                }
              />
              <SecondaryButton
                text={secondaryButton}
                className="border-neutral-300 text-neutral-300"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
      <div className="w-full absolute inset-0 overflow-hidden z-[1]">
        <Spotlight />
      </div>
    </section>
  );
}
