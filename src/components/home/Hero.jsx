"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import heroVerticle1 from "../../../public/images/hero-images/hero-2.3-1.jpg";
import heroVerticle2 from "../../../public/images/hero-images/hero-2.3-2.jpg";
import heroVerticle4 from "../../../public/images/hero-images/hero-3.4-1.png";
import heroVerticle3 from "../../../public/images/hero-images/hero-3.4-2.jpg";
import heroMainImg from "../../../public/images/hero-images/hero-main.jpg";
import heroSquare1 from "../../../public/images/hero-images/hero-square-1.png";
import mobileHeroImg from "../../../public/images/hero-images/mobile-hero.png";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";
import { Spotlight } from "../ui/spotlight-new";

export const Hero = ({ description = "" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { scrollYProgress } = useScroll();

  const createTransform = (mobileValues, desktopValues, range = [0, 0.3]) =>
    useTransform(
      scrollYProgress,
      range,
      isMobile ? mobileValues : desktopValues
    );

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
    width: createTransform(["50vw", "100vw"], ["35.5vw", "100vw"]),
    height: createTransform(["60vh", "100vh"], ["80vh", "100vh"]),
  };

  const rightImageGroup = {
    x: createTransform(["0vw", "25vw"], ["0vw", "32vw"]),
  };

  return (
    <section
      id="home"
      className="relative md:h-[550vh] bg-neutral-950 pt-20 md:pt-24 lg:pt-28"
    >
      <div className="px-[5%] relative z-[5]">
        <div className="container">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
              Transforming Your Ideas Into{" "}
              <span className="bg-gradient-to-tr from-accentColor2 to-accentColor1 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="md:text-md text-neutral-300">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 mb-5">
              <PrimaryButton
                text="Get Started"
                url="/contact"
                icon={
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in ml-3 text-sm" />
                }
              />
              <SecondaryButton
                className="text-neutral-300 border-neutral-300"
                text="Learn More"
                url="/about"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 hidden md:flex h-screen w-full items-center overflow-hidden z-[5]">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%]  content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw] aspect-[2/3] overflow-hidden rounded-[15px]">
              <Image
                src={heroVerticle1}
                alt="two colluges are discussing plan"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={heroSquare1}
                  alt="colleges are watching laptop on office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[15px]">
                <Image
                  src={heroVerticle4}
                  alt="industrial tall building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-full overflow-hidden rounded-[15px] p-[3px]"
            style={centerImageContainer}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Image
              src={heroMainImg}
              alt="educating clients with cutting edge technology for their business growth"
              className="w-full h-full object-cover rounded-[15px] object-left inset-shadow-2xs ring-background inset-shadow-white/20 shadow-lg shadow-zinc-950/15 ring-1"
            />
            <div className="absolute w-full h-[480px] bg-gradient-to-t from-neutral-950 to-transparent left-0 right-0 bottom-0 z-[100]"></div>
          </motion.div>

          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={rightImageGroup}
          >
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-[40vw] sm:w-auto aspect-[3/4] overflow-hidden rounded-[15px]">
                <Image
                  src={heroVerticle3}
                  alt="robotic hands using with AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-[40vw] sm:w-auto aspect-square overflow-hidden rounded-[15px]">
                <video
                  src="https://res.cloudinary.com/dgqybmtey/video/upload/v1755687764/Untitled_design_4_guqero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw] aspect-[2/3] overflow-hidden rounded-[15px]">
              <Image
                src={heroVerticle2}
                alt="team members are discussing plan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full aspect-video overflow-hidden relative mt-10 flex md:hidden">
        <Image
          src={mobileHeroImg}
          alt="mobile hero image"
          className="w-full h-full object-cover"
        />
        <div className="w-full absolute -bottom-[0.5px] right-0 left-0 bg-gradient-to-t from-neutral-950 to-transparent h-[40%]"></div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
      <div className="w-full absolute inset-0 overflow-hidden z-[1]">
        <Spotlight />
      </div>
    </section>
  );
};
