"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { FaFacebook } from "react-icons/fa6";

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

export function Header82() {
  const useActive = useRelume();
  return (
    <section
      className="relative flex h-[300vh] flex-col items-center"
      ref={useActive.transformRef}
    >
      <div className="px-[5%]">
        <div className="sticky top-0 z-0 mx-auto flex min-h-[80vh] max-w-lg items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <motion.div
            style={{ opacity: useActive.fadeOut, scale: useActive.scaleDown }}
          >
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
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{
          width: useActive.width,
          height: useActive.height,
          y: useActive.y,
        }}
        className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start"
      >
        <Dialog>
          <DialogTrigger className="relative flex size-full items-center justify-center overflow-hidden rounded-image">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
            <FaFacebook className="absolute z-20 size-20 text-white" />
          </DialogTrigger>
          <DialogContent>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DialogContent>
        </Dialog>
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
