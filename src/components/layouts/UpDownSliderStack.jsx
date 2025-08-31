"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import bgElement from "../../../public/images/shapes/bg-elem-2.png";
import { SecondaryButton } from "../buttons/Buttons";
import { BorderTrail } from "../ui/border-trail";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });
  const calculateScale = (index, totalSections) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);
    return useTransform(scrollYProgress, [start, end], [1, 0.8]);
  };
  return { containerRef, calculateScale };
};

const useMobile = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return { isTablet };
};

export function UpDownSliderStack({ tagline, title, desc, renderBox = [{}] }) {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useScroll = useRelume();
  return (
    <section
      id="services-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 text-neutral-600 bg-neutral-100 md:bg-white relative"
    >
      <div className="relative z-[3]">
        <div className="mb-12 w-full flex flex-col justify-center items-center md:mb-16 lg:mb-20">
          <div className="max-w-3xl flex flex-col justify-center items-center">
            <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg relative z-[3] bg-gradient-to-tr from-accentColor2 via-pink-300 to-accentColor2 px-3 py-1 rounded-full text-white">
              {tagline}
            </p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800 text-center">
              {title}
            </h2>
            <p className="md:text-md text-center">{desc}</p>
          </div>
        </div>
        <div
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
          ref={useScroll.containerRef}
        >
          {renderBox.map((box, index) => (
            <Fragment key={index}>
              <ConditionalRender condition={renderMobile.isMobile}>
                <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                  <Fragment>
                    <div className="order-first flex flex-col justify-center px-0 py-6 md:py-8 lg:py-12 md:order-first">
                      <p className="mb-2 font-semibold text-accentColor1">
                        {box.tagline}
                      </p>
                      <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl">
                        {box.title}
                      </h2>
                      <p>{box.desc}</p>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                        <SecondaryButton url={box.url} text="Learn More" />
                      </div>
                    </div>
                    <div className="order-last flex flex-col items-center justify-center md:order-last relative overflow-hidden w-full aspect-[6/4.8]">
                      <Image
                        src={box.image}
                        alt={box.alt}
                        className="w-full h-full object-cover rounded-[15px] object-center"
                      />
                    </div>
                  </Fragment>
                </div>
              </ConditionalRender>
              <ConditionalRender condition={renderTablet.isTablet}>
                <motion.div
                  className="grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 rounded-[15px] border border-neutral-300 relative custom-shadow"
                  style={{
                    scale: useScroll.calculateScale(index, renderBox.length),
                  }}
                >
                  <Fragment>
                    <div
                      className={`order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 ${
                        index % 2 === 0 ? "md:order-first" : "md:order-last"
                      } bg-neutral-100`}
                    >
                      <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                        {box.tagline}
                      </p>
                      <h2 className="rb-5 mb-3 xl:mb-5 text-4xl font-bold  md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                        {box.title}
                      </h2>
                      <p className="text-neutral-600 xl:text-md">{box.desc}</p>
                      <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-5 md:mt-6">
                        {box.tags?.map((tag, idx) => (
                          <div key={idx} className="flex">
                            <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to-accentColor2 rounded-md flex">
                              <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                                {tag}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center gap-x-4 md:mt-5 xl:mt-8">
                        <SecondaryButton
                          url={box.url}
                          text="Learn More"
                          className="border-neutral-600 text-neutral-600"
                        />
                      </div>
                    </div>
                    <div
                      className={`order-last flex flex-col items-center justify-center ${
                        index % 2 === 0 ? "md:order-last" : "md:order-first"
                      } relative h-full overflow-hidden `}
                    >
                      <Image
                        src={box.image}
                        alt={box.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Fragment>
                </motion.div>
              </ConditionalRender>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="w-[25%] lg:w-[10%] aspect-square absolute z-[1] overflow-hidden top-0 left-0">
        <Image
          src={bgElement}
          alt="background element"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
