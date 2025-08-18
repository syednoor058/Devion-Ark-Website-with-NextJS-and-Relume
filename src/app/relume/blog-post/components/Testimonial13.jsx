"use client";

import React from "react";
import { StarFull } from "relume-icons";

export function Testimonial13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Testimonial image 1"
              className="aspect-square w-full rounded-image object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 flex md:mb-8">
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
              <StarFull className="size-6 text-scheme-text" />
            </div>
            <blockquote className="heading-h5 font-bold">
              "Working with this agency transformed our online presence and
              boosted our lead generation significantly! Their expertise in
              digital marketing is unmatched."
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p>CEO, Tech Innovations</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-scheme-border sm:mx-0" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo 1"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
