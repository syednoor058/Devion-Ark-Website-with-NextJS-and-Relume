"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import businessConsultancyImg from "../../../public/images/services/business-consultancy.jpg";
import customSoftImg from "../../../public/images/services/custom-soft.jpg";
import semImg from "../../../public/images/services/sem.jpg";
import seoImg from "../../../public/images/services/seo.jpg";
import socialMarketingImg from "../../../public/images/services/social-marketing.jpg";
import webDevImg from "../../../public/images/services/web-dev.jpg";
import { SecondaryButton } from "../buttons/Buttons";
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

export function Services() {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useScroll = useRelume();
  return (
    <section
      id="services-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 relative text-neutral-600 bg-neutral-100 md:bg-white"
    >
      <div className="relative z-[3]">
        <div className="mb-12 w-full md:mb-16 lg:mb-20">
          <div className="w-full flex">
            <div className="w-full md:w-[70%] lg:w-[60%]">
              <p className="mb-3 font-semibold md:mb-4 text-accentColor2 md:text-md lg:text-lg">
                Innovate
              </p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
                Empowering Your Digital Journey
              </h2>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[70%] lg:w-[50%] pl-7 border-l-3 border-accentColor1">
              <p className="md:text-md">
                We&apos;re more than a digital service provider company in
                Bangladesh – we're your business growth partners. Specializing
                in custom software development, website solutions, and
                data-driven digital marketing services, we empower businesses
                across Dhaka and beyond to outrank competitors, streamline
                operations, and connect with their audience. Whether you're a
                startup or an enterprise.
              </p>
            </div>
          </div>
        </div>
        <div
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
          ref={useScroll.containerRef}
        >
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center px-0 py-6 md:py-8 lg:py-12 md:order-first">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Tech Solution
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl">
                      Custom Software Solutions
                    </h2>
                    <p>
                      Every business is unique. We build custom tools that
                      improve efficiency, automate tasks, and solve real
                      challenges.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/custom-software-solutions"
                        text="Learn More"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last relative overflow-hidden">
                    <Image
                      src={customSoftImg}
                      alt="software development"
                      className="w-full h-full object-cover rounded-[15px]"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={renderTablet.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 rounded-[15px]  custom-shadow"
                style={{ scale: useScroll.calculateScale(0, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Tech Solution
                    </p>
                    <h2 className="rb-5 mb-3 xl:mb-5 text-4xl font-bold  md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Custom Software Solutions
                    </h2>
                    <p className="text-neutral-600 xl:text-md">
                      Every business is unique. We build custom tools that
                      improve efficiency, automate tasks, and solve real
                      challenges.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-5 md:mt-6">
                      <div className="flex">
                        <div className="p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1 bg-neutral-800 text-white  rounded-md text-xs">
                            E-commerce App
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Management System
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Cloud Computing
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Agentic AI
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Software As A Service
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-5 xl:mt-8">
                      <SecondaryButton
                        url="/services/custom-software-solutions"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last relative h-full">
                    <Image
                      src={customSoftImg}
                      alt="custom software development development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center py-6 md:py-8 lg:py-12 md:order-last">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Tech Solution
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl lg:text-4xl">
                      Web Application Development
                    </h2>
                    <p>
                      Build modern, scalable web apps that streamline
                      operations, boost performance, and deliver smooth user
                      experiences.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/web-application-development"
                        text="Learn More"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <Image
                      src={webDevImg}
                      alt="website development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender
              condition={renderTablet.isTablet}
              className="bg-white"
            >
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden bg-white  rounded-[15px] custom-shadow md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 "
                style={{ scale: useScroll.calculateScale(1, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Tech Solution
                    </p>
                    <h2 className="rb-5 mb-3 xl:mb-5 text-4xl font-bold md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Web Application Development
                    </h2>
                    <p className="text-neutral-600 md:text-md">
                      Build modern, scalable web apps that streamline
                      operations, boost performance, and deliver smooth user
                      experiences.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-6">
                      <div className="flex">
                        <div className="p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Business Site
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Personal Porfolio
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            News Portal
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Wordpress
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Responsive
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Cross-browser Compatibility
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-x-4 xl:mt-8">
                      <SecondaryButton
                        url="/services/web-application-development"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <Image
                      src={webDevImg}
                      alt="website development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center px-0 py-6 md:py-8 lg:py-12 md:order-first">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Marketing Solution
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl">
                      Social Media Marketing
                    </h2>
                    <p>
                      Create brand awareness, engage your audience, and drive
                      conversions with platform-specific social media
                      strategies.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/custom-software-solutions"
                        text="Learn More"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <Image
                      src={socialMarketingImg}
                      alt="people all around the world connected with lines"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={renderTablet.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 bg-white  rounded-[15px] custom-shadow"
                style={{ scale: useScroll.calculateScale(2, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Marketing Solution
                    </p>
                    <h2 className="rb-5 mb-3 xl:mb-5 text-4xl font-bold md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Social Media Marketing
                    </h2>
                    <p className="text-neutral-600 md:text-md">
                      Create brand awareness, engage your audience, and drive
                      conversions with platform-specific social media
                      strategies.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-6">
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Page Setup
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Organic Promotions
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Ads Campaign
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Optimization
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Business Suite
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-x-4 xl:mt-8">
                      <SecondaryButton
                        url="/services/social-media-marketing"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <Image
                      src={socialMarketingImg}
                      alt="people all around the world connected with lines"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center py-6 md:py-8 lg:py-12 md:order-last">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Digital Growth Solution
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl lg:text-4xl">
                      Search Engine Optimization
                    </h2>
                    <p>
                      Rank higher on search engines with SEO strategies that
                      improve visibility, grow traffic, and attract the right
                      leads.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/search-engine-optimization"
                        text="Learn More"
                        className="border-neutral-300"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first overflow-hidden">
                    <Image
                      src={seoImg}
                      alt="seo image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={renderTablet.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 bg-white rounded-[15px] custom-shadow"
                style={{ scale: useScroll.calculateScale(3, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Digital Growth Solution
                    </p>
                    <h2 className="rb-5 mb-3 text-4xl font-bold xl:mb-6 md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Search Engine Optimization
                    </h2>
                    <p className="text-neutral-600 md:text-md">
                      Rank higher on search engines with SEO strategies that
                      improve visibility, grow traffic, and attract the right
                      leads.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-6">
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            On-page SEO
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Off-page SEO
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Keyword Research
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Technical SEO
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Meta Tags
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-x-4 xl:mt-8">
                      <SecondaryButton
                        url="/services/web-application-development"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first overflow-hidden">
                    <Image
                      src={seoImg}
                      alt="seo Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center px-0 py-6 md:py-8 lg:py-12 md:order-first">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Marketing Solution
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl">
                      Search Engine Marketing
                    </h2>
                    <p>
                      Target the right audience through paid ads that drive
                      instant traffic, boost reach, and deliver measurable
                      results.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/search-engine-marketing"
                        text="Learn More"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <Image
                      src={semImg}
                      alt="search engine marketing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={renderTablet.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 bg-white custom-shadow rounded-[15px]"
                style={{ scale: useScroll.calculateScale(4, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Marketing Solution
                    </p>
                    <h2 className="rb-5 mb-3 text-4xl leading-[1.2] font-bold xl:mb-6 md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Search Engine Marketing
                    </h2>
                    <p className="text-neutral-600 md:text-md">
                      Target the right audience through paid ads that drive
                      instant traffic, boost reach, and deliver measurable
                      results.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-6">
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Google My Business
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Organic Optimization
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Keyword Research
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Audience Research
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Ads Campaign
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-x-4 xl:mt-8">
                      <SecondaryButton
                        url="/services/social-media-marketing"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <Image
                      src={semImg}
                      alt="search engine marketing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={renderMobile.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center py-6 md:py-8 lg:py-12 md:order-last">
                    <p className="mb-2 font-semibold text-accentColor1">
                      Business Development
                    </p>
                    <h2 className="rb-5 mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl lg:text-4xl">
                      Business Consultancy
                    </h2>
                    <p>
                      Get expert digital guidance to refine your strategy,
                      optimize operations, and scale your business confidently.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <SecondaryButton
                        url="/services/search-engine-optimization"
                        text="Learn More"
                        className="border-neutral-300"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first overflow-hidden">
                    <Image
                      src={businessConsultancyImg}
                      alt="three people discussing about business"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={renderTablet.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2 bg-white rounded-[15px] custom-shadow"
                style={{ scale: useScroll.calculateScale(5, 6) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last bg-neutral-100">
                    <p className="mb-2 font-semibold text-accentColor1 md:text-lg xl:text-xl">
                      Business Development
                    </p>
                    <h2 className="rb-5 mb-3 text-4xl font-bold xl:mb-6 md:text-3xl lg:text-4xl xl:text-5xl text-neutral-800">
                      Business Consultancy
                    </h2>
                    <p className="text-neutral-600 md:text-md">
                      Get expert digital guidance to refine your strategy,
                      optimize operations, and scale your business confidently.
                    </p>
                    <div className="w-full flex flex-wrap gap-1 mt-3 xl:mt-6">
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Competitor Analysis
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Marketing Planning
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Strategy Discuss
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            Budget Optimization
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className=" p-[1px] bg-gradient-to-tr from-accentColor1 to accent-accentColor2 rounded-md flex">
                          <div className="px-3 py-1.5 bg-neutral-800 text-white  rounded-md text-xs">
                            24/7 Support
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-x-4 xl:mt-8">
                      <SecondaryButton
                        url="/services/web-application-development"
                        text="Learn More"
                        className="border-neutral-600 text-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first overflow-hidden">
                    <Image
                      src={businessConsultancyImg}
                      alt="three people are discusing about business"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
