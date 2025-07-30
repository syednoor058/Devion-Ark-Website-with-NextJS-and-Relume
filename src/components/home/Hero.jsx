"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import heroVerticle1 from "../../../public/images/hero-images/hero-2.3-1.jpg";
import heroVerticle2 from "../../../public/images/hero-images/hero-2.3-2.jpg";
import heroVerticle4 from "../../../public/images/hero-images/hero-3.4-1.jpg";
import heroVerticle3 from "../../../public/images/hero-images/hero-3.4-2.jpg";
import heroMainImg from "../../../public/images/hero-images/hero-main.jpg";
import heroSquare1 from "../../../public/images/hero-images/hero-square-1.jpg";
import heroSquare2 from "../../../public/images/hero-images/hero-square-2.jpg";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";
import { Spotlight } from "../ui/spotlight-new";

export const Hero = ({ title = "", description = "" }) => {
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
    <section id="home" className="relative h-[300vh]">
      <div className="px-[5%] pt-24 md:pt-32 lg:pt-36 relative z-[5]">
        <div className="container">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-titleColor">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 mb-5">
              <PrimaryButton
                text="Get Started"
                url="/contact"
                icon={
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in" />
                }
              />
              <SecondaryButton text="Learn More" url="/about" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden z-[5]">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%]  content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw] aspect-[2/3] overflow-hidden">
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
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={heroVerticle3}
                  alt="industrial tall building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-full overflow-hidden"
            style={centerImageContainer}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Image
              src={heroMainImg}
              alt="educating clients with cutting edge technology for their business growth"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={rightImageGroup}
          >
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-[40vw] sm:w-auto aspect-[3/4] overflow-hidden">
                <Image
                  src={heroVerticle4}
                  alt="robotic hands using with AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-[40vw] sm:w-auto aspect-square overflow-hidden">
                <Image
                  src={heroSquare2}
                  alt="a woman using VR"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw] aspect-[2/3] overflow-hidden">
              <Image
                src={heroVerticle2}
                alt="team members are discussing plan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
      <div className="w-full absolute inset-0 overflow-hidden z-[1]">
        <Spotlight />
      </div>
    </section>
  );
};
