"use client";

import { PrimaryButton, SecondaryButton } from "@/components/buttons/Buttons";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Spotlight } from "../ui/spotlight-new";

const useRelume = () => {
  const transformRef = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  });
  const width = useTransform(animatedScrollYProgress, [0, 1], ["50%", "100%"]);

  const halfViewportHeight =
    typeof window !== "undefined" ? window.innerHeight * 0.5 : 100;
  const fadeOut = useTransform(scrollY, [0, halfViewportHeight], [1, 0]);
  const scaleDown = useTransform(scrollY, [0, halfViewportHeight], [1, 0.95]);

  const yFirst = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["90%", "100%"]
  );
  const height = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["80vh", "100vh"]
  );
  const y = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-10vh"]);

  return {
    transformRef,
    width,
    fadeOut,
    scaleDown,
    yFirst,
    height,
    y,
  };
};

export function ZoomOnScrollHeader({
  title,
  desc,
  primaryButton,
  secondaryButton,
  image,
  alt,
}) {
  const useActive = useRelume();
  return (
    <section
      className="relative flex h-[300vh] flex-col items-center bg-neutral-950 text-neutral-300"
      ref={useActive.transformRef}
    >
      <div className="px-[5%] relative z-[2]">
        <div className="sticky top-0 z-0 mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <motion.div
            style={{ opacity: useActive.fadeOut, scale: useActive.scaleDown }}
          >
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
              {title}
            </h1>
            <p className="md:text-md text-neutral-300">{desc}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-center">
              <PrimaryButton
                text={primaryButton}
                icon={
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in ml-3 text-sm" />
                }
              />
              <SecondaryButton
                text={secondaryButton}
                className="text-neutral-300 border-neutral-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{
          width: useActive.width,
          height: useActive.height,
          y: useActive.y,
        }}
        className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start rounded-[10px] overflow-hidden"
      >
        <Image
          src={image.src}
          alt={alt}
          className="w-full h-full object-cover object-left"
          fill
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
      <div className="w-full absolute inset-0 overflow-hidden z-[1]">
        <Spotlight />
      </div>
      <div className="absolute w-full h-[480px] bg-gradient-to-t from-neutral-950 to-transparent left-0 right-0 -bottom-[1px] z-[100]"></div>
    </section>
  );
}
