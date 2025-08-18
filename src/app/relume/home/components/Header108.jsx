"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";

const useAnimationSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { scrollYProgress } = useScroll();

  const createTransform = (mobileValues, desktopValues) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      isMobile ? mobileValues : desktopValues
    );

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
    width: createTransform(["50vw", "100vw"], ["36vw", "100vw"]),
    height: createTransform(["60vh", "100vh"], ["80vh", "100vh"]),
  };

  const rightImageGroup = {
    x: createTransform(["0vw", "25vw"], ["0vw", "32vw"]),
  };

  return { leftImageGroup, centerImageContainer, rightImageGroup };
};

export function Header108() {
  const animationProps = useAnimationSection();
  return (
    <section className="relative h-[250vh]">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Medium length hero heading goes here
            </h1>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Button">Button</Button>
              <Button title="Button" variant="secondary">
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 hidden md:flex h-screen w-full items-center overflow-hidden">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%] content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={animationProps.leftImageGroup}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative">
                <img
                  className="aspect-square w-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="relative">
                <img
                  className="aspect-[3/4] w-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            style={animationProps.centerImageContainer}
          >
            <img
              className="size-full rounded-image object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 4"
            />
          </motion.div>
          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={animationProps.rightImageGroup}
          >
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-[40vw] sm:w-auto">
                <img
                  className="aspect-[3/4] w-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                />
              </div>
              <div className="relative w-[40vw] sm:w-auto">
                <img
                  className="aspect-square w-full rounded-image object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full rounded-image object-cover"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 7"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
