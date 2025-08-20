"use client";

import Image from "next/image";
import { FaArrowRight, FaMedal } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import businessStatImg from "../../../public/images/business-stats.jpg";
import bgElement from "../../../public/images/shapes/bg-elem-2.png";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

export function Empower() {
  return (
    <section
      id="empower-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 relative"
    >
      <div className="container relative z-[3]">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
              Empower
            </p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
              Unlock Your Business's Full Digital Potential
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Choosing Devion Ark Digital Solutions means partnering with
              experts dedicated to your growth. Our tailored strategies ensure
              your business stands out in the digital landscape.
            </p>
            <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 p-2 rounded-[15px] border border-neutral-100 bg-neutral-100">
              <div className="p-4 rounded-[15px] border border-neutral-100 bg-gradient-to-br from-accentColor1/10 to-accentColor2/10">
                <h6 className="mb-1 font-bold md:mb-3 text-neutral-800 flex flex-row gap-2 items-center">
                  <span>
                    <FaMedal className="" />
                  </span>
                  <span>Expert Guidance</span>
                </h6>
                <p className="text-sm text-neutral-600">
                  Benefit from our years of experience in digital marketing and
                  software development.
                </p>
              </div>
              <div className="p-4 rounded-[15px] border border-neutral-100 bg-gradient-to-br from-accentColor1/10 to-accentColor2/10">
                <h6 className="mb-1 font-bold md:mb-3 text-neutral-800 flex flex-row gap-2 items-center">
                  <span>
                    <MdDashboardCustomize className="text-[20px]" />
                  </span>
                  <span>Custom Solutions</span>
                </h6>
                <p className="text-sm text-neutral-600">
                  Get personalized services designed to meet your unique
                  business needs.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <PrimaryButton
                url="/contact"
                text="Get Started"
                icon={
                  <FaArrowRight className="ml-3 group-hover:-rotate-45 transition-all duration-300 ease-in" />
                }
              />
              <SecondaryButton url="/about" text="Learn More" />
            </div>
          </div>
          <div className="w-full aspect-square relative overflow-hidden rounded-[15px]">
            <Image
              src={businessStatImg}
              alt="business stat documents research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[25%] lg:w-[15%] aspect-square absolute z-[1] lg:z-[4] overflow-hidden top-0 right-0 scale-x-[-1]">
        <Image
          src={bgElement}
          alt="background element"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
