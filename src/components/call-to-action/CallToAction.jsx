"use client";

import Image from "next/image";
import callToActionBg from "../../../public/images/call-to-action-bg.jpg";
import { SecondaryButton } from "../buttons/Buttons";

export function CallToAction() {
  return (
    <section
      id="relume"
      className="relative px-[5%] py-10 md:py-16 lg:py-20 bg-black"
    >
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
            Unlock Your{" "}
            <span className="bg-gradient-to-b from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
              Business Potential
            </span>{" "}
            Today
          </h2>
          <p className=" md:text-md text-neutral-200">
            Contact us now for a personalized consultation and discover how we
            can elevate your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <SecondaryButton
              url="/about"
              text="Explore More"
              className="border-neutral-200 text-neutral-200"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={callToActionBg}
          alt="tall building"
          className="w-full h-full object-cover blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
