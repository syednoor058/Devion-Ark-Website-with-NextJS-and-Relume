"use client";

import Image from "next/image";
import { LinkButton, SecondaryButton } from "../buttons/Buttons";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

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
      <BackgroundRippleEffect />
      <div className="w-full flex flex-col items-center relative z-[3]">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 via-blue-400 to-accentColor1 text-white px-3 py-1 rounded-full">
            {tagline}
          </p>
          <h2
            className={`mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-neutral-800"
            } text-center`}
          >
            {title}
          </h2>
          <p className="md:text-md text-center">{desc}</p>
        </div>
        <div className="mt-7 flex flex-wrap  justify-center items-center gap-4 md:mt-10 mb-12 md:mb-18 lg:mb-20">
          <SecondaryButton
            url="/contact"
            text="Start With Us"
            className="text-neutral-300 border-neutral-300"
          />
          <LinkButton
            className="text-neutral-300"
            url="/services"
            text="Learn More"
          />
        </div>
        <div className="grid place- gap-x-8 gap-y-5 sm:grid-cols-2 md:gap-y-12 lg:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-5 md:gap-y-12 lg:gap-y-16">
            {iconbox1.map((box, index) => (
              <div key={index} className="flex flex-col">
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
              <div key={index} className="w-full h-full flex flex-col">
                <h3 className="mb-3  font-bold md:mb-4 text-white flex flex-row gap-2 items-center">
                  <span>{box.icon}</span> <span>{box.title}</span>
                </h3>
                <p className="text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
