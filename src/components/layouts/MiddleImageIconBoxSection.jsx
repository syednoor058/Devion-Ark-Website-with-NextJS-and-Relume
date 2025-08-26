"use client";

import Image from "next/image";
import { LinkButton, SecondaryButton } from "../buttons/Buttons";

export function MiddleImageIconBoxSection({
  theme = "dark",
  title,
  image = {},
  desc = "",
  iconbox1 = [],
  tagline = "",
  iconbox2 = [],
}) {
  return (
    <section
      className={`px-[5%] py-10 md:py-16 lg:py-20 relative ${
        theme === "dark"
          ? "bg-neutral-950 text-neutral-300"
          : "bg-white text-neutral-600"
      }`}
    >
      <div className=" relative z-[3]">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className=" flex flex-col ">
            <div className="w-full flex">
              <div className="w-full md:w-[70%] lg:w-[60%]">
                <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                  {tagline}
                </p>
                <h2
                  className={`mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl ${
                    theme === "dark" ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {title}
                </h2>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-full md:w-[70%] lg:w-[50%] pl-7 border-l-2 border-accentColor1">
                <p className="md:text-md ">{desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place- gap-x-8 gap-y-5 sm:grid-cols-2 md:gap-y-12 lg:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-5 md:gap-y-12 lg:gap-y-16">
            {iconbox1.map((box, index) => (
              <div key={index} className="flex flex-col p-5">
                <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                  <span>{box.icon}</span> <span>{box.title}</span>
                </h3>
                <p className="text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1 aspect-square overflow-hidden rounded-[15px]">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-5 md:gap-y-12 lg:gap-y-16">
            {iconbox2.map((box, index) => (
              <div key={index} className="flex flex-col p-5">
                <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                  <span>{box.icon}</span> <span>{box.title}</span>
                </h3>
                <p className="text-sm">{box.desc}</p>
              </div>
            ))}
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
    </section>
  );
}
