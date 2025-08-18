"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout434() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-8 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Tagline</p>
              <h2 className="heading-h2 font-bold">
                Elevate Your Brand with Professional Websites
              </h2>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="mt:mb-18 mt-12 aspect-square w-full rounded-image object-cover lg:mt-20"
              alt="Relume placeholder image 2"
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="mb-6 w-full rounded-image object-cover md:mb-8"
              alt="Relume placeholder image 1"
            />
            <div className="mr-[10%] ml-[5%]">
              <p className="text-medium">
                Our professional websites are designed to captivate and convert,
                ensuring your business stands out in a crowded market. With
                user-friendly interfaces and optimized performance, we help you
                create a strong online presence that drives engagement and
                growth.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
                <Button
                  title="Sign Up"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
