"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header133() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <h1 className="heading-h1 font-bold">
            Medium length hero heading goes here
          </h1>
          <div>
            <p className="text-medium">
              Transform your online presence with our professional website
              development services. We create tailored solutions that not only
              look stunning but also drive results.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Sign Up" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="absolute bottom-0 left-0 w-[30%]">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png"
              className="aspect-[2/3] size-full rounded-image object-cover"
              alt="Relume placeholder image 1"
            />
          </div>
          <div className="mx-[10%] mb-[10%] w-full">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image 2"
            />
          </div>
          <div className="absolute top-[10%] right-0 w-[30%]">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png"
              className="aspect-square size-full rounded-image object-cover"
              alt="Relume placeholder image 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
