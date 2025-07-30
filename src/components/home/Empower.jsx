"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
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
            <p className="mb-3 font-semibold md:mb-4 text-accentColor1">
              Empower
            </p>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-titleColor">
              Unlock Your Business's Full Digital Potential
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Choosing Devion Ark Digital Solutions means partnering with
              experts dedicated to your growth. Our tailored strategies ensure
              your business stands out in the digital landscape.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Expert Guidance
                </h6>
                <p>
                  Benefit from our years of experience in digital marketing and
                  software development.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Custom Solutions
                </h6>
                <p>
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
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in" />
                }
              />
              <SecondaryButton url="/about" text="Learn More" />
            </div>
          </div>
          <div className="w-full aspect-square relative overflow-hidden">
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
