"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header126() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Medium length hero heading goes here
            </h1>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Sign Up" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="mr-[30%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="aspect-[2/3] size-full rounded-image object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="absolute top-[10%] right-0 bottom-auto left-auto w-1/2">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png"
                className="aspect-square size-full rounded-image object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
