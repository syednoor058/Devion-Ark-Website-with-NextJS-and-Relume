"use client";

import Image from "next/image";
import { FaNetworkWired, FaTruckPickup } from "react-icons/fa6";
import { GiBinoculars } from "react-icons/gi";
import { LuWrench } from "react-icons/lu";
import mutualTrustImg from "../../../public/images/mutual-trust.jpg";
import bgElement from "../../../public/images/shapes/bg-elem.png";
import { LinkButton, SecondaryButton } from "../buttons/Buttons";

export function Process() {
  return (
    <section
      id="process"
      className="px-[5%] py-10 md:py-16 lg:py-20 relative bg-neutral-950 text-neutral-300"
    >
      <div className=" relative z-[3]">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className=" flex flex-col ">
            <div className="w-full flex">
              <div className="w-full md:w-[70%] lg:w-[60%]">
                <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                  Process
                </p>
                <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
                  Our Seamless Project Development Journey
                </h2>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-full md:w-[70%] lg:w-[50%] pl-7 border-l-2 border-accentColor1">
                <p className="md:text-md ">
                  At Devion Ark, we follow a clear, collaborative, and efficient
                  process to bring your digital vision to life. From idea to
                  launch — every step is handled with precision and care to
                  ensure results that truly make an impact. We begin with an
                  in-depth consultation to understand your unique needs. Our
                  team then crafts a tailored strategy to ensure your project's
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place- gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col  ">
              <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                <span>
                  <FaNetworkWired className="text-md text-accentColor1" />
                </span>{" "}
                <span>We listen, learn, and plan.</span>
              </h3>
              <p className="text-sm">
                Our journey begins with understanding your goals, target
                audience, and unique challenges. We conduct research and craft a
                strategy tailored to your business objectives.
              </p>
            </div>
            <div className="flex flex-col  ">
              <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                <span>
                  <GiBinoculars className="text-xl text-accentColor1" />
                </span>{" "}
                <span>We visualize your vision.</span>
              </h3>
              <p className="text-sm">
                From wireframes to interactive prototypes, our design process
                ensures an intuitive user experience, strong brand alignment,
                and visual appeal across all devices.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1 aspect-square overflow-hidden rounded-[15px]">
            <Image
              src={mutualTrustImg}
              alt="mutual trust between company and client"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col  ">
              <h3 className="mb-3 font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                <span>
                  <LuWrench className="text-lg text-accentColor1" />
                </span>{" "}
                <span>We build smart solutions.</span>
              </h3>
              <p className="text-sm">
                Using modern tech stacks, we develop fast, secure, and scalable
                applications — seamlessly integrating all essential features and
                third-party tools you need.
              </p>
            </div>
            <div className="flex flex-col  ">
              <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                <span>
                  <FaTruckPickup className="text-lg text-accentColor1" />
                </span>{" "}
                <span>We deliver support and growth.</span>
              </h3>
              <p className="text-sm">
                After thorough testing, we deploy your project with confidence.
                But it doesn&apos;t end there — we provide ongoing support,
                performance monitoring, and optimization for long-term success.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap  justify-center items-center gap-4 md:mt-10">
          <SecondaryButton
            url="/contact"
            text="Start Now"
            className="text-neutral-300 border-neutral-300"
          />
          <LinkButton
            className="text-neutral-300"
            url="/services"
            text="Learn More"
          />
        </div>
      </div>
      <div className="w-[25%] lg:w-[15%] aspect-square absolute z-[1] overflow-hidden top-0 right-0">
        <Image
          src={bgElement}
          alt="background element"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
