"use client";

import { PrimaryButton, SecondaryButton } from "@/components/buttons/Buttons";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Spotlight } from "../ui/spotlight-new";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768)
        setBreakpoint("mobile"); // tailwind sm breakpoint
      else if (window.innerWidth < 1024 && window.innerWidth > 768)
        setBreakpoint("tablet"); // tailwind lg breakpoint
      else setBreakpoint("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}

const useOnScrollZoom = () => {
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

  const y = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-10vh"]);

  return {
    transformRef,
    width,
    fadeOut,
    scaleDown,
    yFirst,
    y,
  };
};

export function ZoomOnScrollHeader({
  title,
  desc,
  primaryButton,
  secondaryButton,
  image,
  imageMob = {},
  imageTab = {},
  alt,
}) {
  const useActive = useOnScrollZoom();
  const breakpoint = useBreakpoint();

  const aspect =
    breakpoint === "mobile" ? "1/2" : breakpoint === "tablet" ? "2/3" : "16/9";
  return (
    <section
      className="relative flex h-[300vh] flex-col items-center bg-neutral-950 text-neutral-300 pt-16 md:pt-20 lg:pt-28"
      ref={useActive.transformRef}
    >
      <div className="px-[5%] relative z-[2]">
        <div className="sticky top-0 z-0 mx-auto flex max-w-3xl items-center justify-center text-center">
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
          y: useActive.y,
        }}
        className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start  overflow-hidden mt-12"
      >
        <div
          className="relative w-full"
          style={{ height: "auto", aspectRatio: aspect }}
        >
          {breakpoint === "mobile" && (
            <Image
              src={imageMob.src}
              alt={alt}
              className="w-full h-full object-cover"
              fill
            />
          )}
          {breakpoint === "tablet" && (
            <Image
              src={imageTab.src}
              alt={alt}
              className="w-full h-full object-cover"
              fill
            />
          )}
          {breakpoint === "desktop" && (
            <Image
              src={image.src}
              alt={alt}
              className="w-full h-full object-cover"
              fill
            />
          )}
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
      <div className="w-full absolute inset-0 overflow-hidden z-[1]">
        <Spotlight />
      </div>
    </section>
  );
}
