"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout102() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 font-bold">
              Unlock Your Business Potential with Expert Consultancy Services
              Tailored for You
            </h3>
          </div>
          <div>
            <p className="text-medium mb-6 md:mb-8">
              Our Business Consultancy services are designed to elevate your
              company’s performance and strategy. We provide actionable insights
              and tailored solutions to drive growth and efficiency.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Strategic Insights
                </h6>
                <p>
                  Gain valuable perspectives that inform your business decisions
                  and strategies effectively.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Tailored Solutions
                </h6>
                <p>
                  Customized strategies that align with your unique business
                  goals and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
