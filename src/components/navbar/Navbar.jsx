"use client";

import {
  CONTACT,
  CUSTOMSOFTWARESOLUTIONS,
  HOME,
  SOCIALMEDIAMARKETING,
  WEBAPPDEVELOPMENT,
} from "@/routes/websiteRoute";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import {
  LuCog,
  LuFactory,
  LuGlobe,
  LuHandshake,
  LuMegaphone,
  LuRocket,
  LuStore,
  LuTablet,
  LuZap,
} from "react-icons/lu";
import { RxChevronDown } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import logo from "../../../public/images/logo/logo.png";
import gymWebMock from "../../../public/images/portfolio/gym-website.jpg";
import realEstateMock from "../../../public/images/portfolio/real-estate-software.jpg";
import { LinkButton, PrimaryButton } from "../buttons/Buttons";
const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCaseStudyDropdownOpen, setIsCaseStudyDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileCaseStudyDropdownMenu = () => {
    setIsCaseStudyDropdownOpen((prev) => !prev);
  };
  const openOnCaseStudyDropDownMenu = () => {
    !isMobile && setIsCaseStudyDropdownOpen(true);
  };
  const closeOnCaseStudyDropDownMenu = () => {
    !isMobile && setIsCaseStudyDropdownOpen(false);
  };
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  // Case Study Dropdown Menu Animation
  const animateCaseStudyDropdownMenuIcon = isCaseStudyDropdownOpen
    ? "rotated"
    : "initial";
  const animateCaseStudyDropdownMenu = isCaseStudyDropdownOpen
    ? "open"
    : "close";
  return {
    isMobileMenuOpen,
    isDropdownOpen,
    isCaseStudyDropdownOpen,
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    openOnMobileCaseStudyDropdownMenu,
    openOnCaseStudyDropDownMenu,
    closeOnCaseStudyDropDownMenu,
    animateCaseStudyDropdownMenuIcon,
    animateCaseStudyDropdownMenu,
  };
};

export function Navbar() {
  const pathname = usePathname();
  const useActive = useRelume();
  return (
    <section
      id="navbar"
      className={`absolute top-0 z-[999] flex w-full items-center justify-between ${
        useActive.isMobileMenuOpen ||
        useActive.isDropdownOpen ||
        useActive.isCaseStudyDropdownOpen
          ? "bg-neutral-950"
          : "bg-transparent delay-300"
      } px-[4%] transition-colors duration-300 ease-in-out py-2 md:py-0 text-neutral-300`}
    >
      <div className="size-full flex items-center lg:justify-between lg:gap-10">
        <div className="lg:flex lg:w-full lg:gap-4 lg:justify-between">
          <div className="flex items-center justify-between lg:px-0">
            <a href={HOME}>
              <Image
                src={logo}
                alt="logo"
                className="block h-5 md:h-6 lg:h-7 w-auto"
              />
            </a>
            <button
              className="-mr-2 flex size-10 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-300"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-300"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-neutral-300"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <div className="hidden lg:flex flex-row gap-3 items-center">
            <GoDotFill className="text-neutral-300 text-[10px]" />
            <span className="text-xs text-neutral-300">
              Rewrite the Rules
              <br />
              of Digital.
            </span>
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.3 }}
            className="overflow-auto lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="#"
              className={`block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6 ${
                pathname === "/" ? "text-accentColor1" : "text-neutral-300"
              }`}
            >
              Home
            </a>

            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span
                  className={`${
                    pathname.startsWith("/services")
                      ? "text-accentColor1"
                      : "text-neutral-300"
                  }`}
                >
                  Services
                </span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-neutral-950 lg:absolute lg:w-[100vw] lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Our Services
                        </h4>
                        <a
                          href={CUSTOMSOFTWARESOLUTIONS}
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuCog className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Custom Software Solutions
                            </h5>
                            <p className="hidden text-sm md:block">
                              Build custom tools that improve efficiency,
                              automate tasks, and solve real challenges.
                            </p>
                          </div>
                        </a>
                        <a
                          href={WEBAPPDEVELOPMENT}
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuGlobe className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Web App Development
                            </h5>
                            <p className="hidden text-sm md:block">
                              Build modern, scalable web apps that streamline
                              operations.
                            </p>
                          </div>
                        </a>
                        <a
                          href={SOCIALMEDIAMARKETING}
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuTablet className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Social Media Marketing
                            </h5>
                            <p className="hidden text-sm md:block">
                              Brand awareness, engage your audience, and drive
                              conversions.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuRocket className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Search Engine Marketing
                            </h5>
                            <p className="hidden text-sm md:block">
                              Target the right audience through paid ads that
                              drive instant traffic.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuZap className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Search Engine Optimization
                            </h5>
                            <p className="hidden text-sm md:block">
                              Rank higher on search engines with SEO strategies
                              that improve visibility.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuHandshake className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Business Consultancy
                            </h5>
                            <p className="hidden text-sm md:block">
                              Get expert digital guidance to refine your
                              strategy.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Featured from Blog
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 1"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold text-white">
                                The Rising Influence of Social Media
                              </h5>
                              <p className="text-sm">
                                A comprehensive analysis of demographics and
                                trends for 2025-2026.
                              </p>
                              <div className="mt-1.5">
                                <LinkButton
                                  text="Read more"
                                  className="text-sm text-neutral-300"
                                  icon={false}
                                />
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full pt-[66.66%]">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                alt="Relume placeholder image 2"
                                className="absolute inset-0 size-full object-cover"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold text-white">
                                Is SEO Dead? Will AEO Take Over the Industry in
                                2025?
                              </h5>
                              <p className="text-sm">
                                The rise of AEO with voice search and featured
                                snippets.
                              </p>
                              <div className="mt-1.5">
                                <LinkButton
                                  text="Read more"
                                  className="text-sm text-neutral-300"
                                  icon={false}
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <LinkButton
                            className="text-white"
                            url="/articles"
                            text="See all articles"
                          />
                        </div>
                      </div>
                      <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-neutral-950-secondary lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div
              onMouseEnter={useActive.openOnCaseStudyDropDownMenu}
              onMouseLeave={useActive.closeOnCaseStudyDropDownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileCaseStudyDropdownMenu}
              >
                <span
                  className={`${
                    pathname.startsWith("/case-studies")
                      ? "text-accentColor1"
                      : "text-neutral-300"
                  }`}
                >
                  Case Studies
                </span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateCaseStudyDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: 1,
                    height: "var(--height-open, auto)",
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "0",
                    height: "var(--height-close, 0)",
                  },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateCaseStudyDropdownMenu}
                transition={{ duration: 0.3 }}
                className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-neutral-950 lg:absolute lg:w-[100vw] lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto flex size-full max-w-full items-center justify-between">
                  <div className="w-full lg:flex">
                    <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Explore Case Studies
                        </h4>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuFactory className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Comprehensive Real Estate Management
                            </h5>
                            <p className="hidden text-sm md:block">
                              A powerful management system for real estate
                              professionals.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuStore className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Petshop E-commerce Web Application
                            </h5>
                            <p className="hidden text-sm md:block">
                              Full responsive online platform to maintain
                              stores.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuMegaphone className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Hight Performing CPC Ads Campaign
                            </h5>
                            <p className="hidden text-sm md:block">
                              A laser-targeted Facebook ads campaign that
                              delivered.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4">
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuGlobe className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Gymnasium Center Responsive Business Website
                            </h5>
                            <p className="hidden text-sm md:block">
                              SEO-optimized website with modern design strategy
                              grow online presence.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex flex-col items-center justify-center p-1">
                            <LuRocket className="text-xl text-accentColor1" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-white">
                              Brand Revival with Socila Media Strategy
                            </h5>
                            <p className="hidden text-sm md:block">
                              Helped to rebuild brand&apos;s online growth and
                              position that it deserved.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="relative flex max-w-none flex-1 p-6 md:py-8 md:pr-0 md:pl-8 lg:max-w-md">
                      <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                        <h4 className="text-sm leading-[1.3] font-semibold">
                          Featured Projects
                        </h4>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full overflow-hidden rounded-xs">
                              <Image
                                src={realEstateMock}
                                alt="real estate management mock"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold text-white">
                                Comprehensive Real Estate Management System
                              </h5>
                              <p className="text-sm">
                                A powerful management system for real estate
                                professionals.
                              </p>
                              <div className="mt-1.5">
                                <LinkButton
                                  text="Read more"
                                  icon={false}
                                  className="text-sm text-neutral-300"
                                />
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 md:grid"
                          >
                            <div className="relative w-full overflow-hidden  rounded-xs">
                              <Image
                                src={gymWebMock}
                                alt="gym website mock"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in"
                              />
                            </div>
                            <div className="rt-4 mt-4 flex flex-col justify-start md:mt-0">
                              <h5 className="mb-1 font-semibold text-white">
                                Gymnasium Center Responsive Business Website
                              </h5>
                              <p className="text-sm">
                                SEO-optimized website with modern design.
                              </p>
                              <div className="mt-1.5">
                                <LinkButton
                                  text="Read more"
                                  icon={false}
                                  className="text-sm text-neutral-300"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center">
                          <LinkButton
                            text="See all cases"
                            className="text-white"
                          />
                        </div>
                      </div>
                      <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-neutral-950-secondary lg:min-w-[100vw]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <a
              href="#"
              className={`block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6 ${
                pathname === "/about" ? "text-accentColor1" : "text-neutral-300"
              }`}
            >
              About
            </a>
            <a
              href="#"
              className={`block py-3 text-md first:pt-7 lg:px-4 lg:py-6 lg:text-base first:lg:pt-6 ${
                pathname === "/contact"
                  ? "text-accentColor1"
                  : "text-neutral-300"
              }`}
            >
              Contact
            </a>
            <div className="mt-6  w-full  pb-24 lg:hidden lg:pb-0">
              <PrimaryButton
                text="Get A Quote"
                url={CONTACT}
                icon={
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in text-sm ml-3 mt-[2px]" />
                }
                className="text-sm py-3 px-4"
              />
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <PrimaryButton
            text="Get A Quote"
            url={CONTACT}
            icon={
              <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in text-xs ml-2 mt-[1px]" />
            }
            className="text-xs px-3.5 py-2"
          />
        </div>
      </div>
    </section>
  );
}
