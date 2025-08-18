"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Innovate</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Empowering Businesses Through Digital Excellence
          </h2>
          <p className="text-medium">
            Our commitment to innovation drives us to deliver exceptional
            results for our clients. We leverage cutting-edge technology to
            elevate your business in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              50%
            </p>
            <h3 className="heading-h6 font-bold">Increased Lead Generation</h3>
          </div>
          <div className="border-l-2 border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              40%
            </p>
            <h3 className="heading-h6 font-bold">Enhanced Brand Visibility</h3>
          </div>
          <div className="border-l-2 border-scheme-border pl-8">
            <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
              60%
            </p>
            <h3 className="heading-h6 font-bold">
              Improved Customer Engagement
            </h3>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Learn More</Button>
          <Button
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
