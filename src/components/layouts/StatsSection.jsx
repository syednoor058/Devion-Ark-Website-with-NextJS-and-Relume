"use client";

import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

export function StatsSection({ tagline, title, desc, percentageBox = [] }) {
  return (
    <section className="px-[5%] py-10 md:py-14 lg:py-20 bg-neutral-950 text-neutral-300 relative">
      <div className="container">
        <div className="mb-12 max-w-3xl md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
            {tagline}
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
            {title}
          </h2>
          <p className="mb-6 md:mb-8 md:text-md">{desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {percentageBox.map((box, index) => (
            <div key={index} className="border-l-2 border-neutral-500 pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem] bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                {box.number}%
              </p>
              <h3 className="heading-h6 font-bold">{box.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
