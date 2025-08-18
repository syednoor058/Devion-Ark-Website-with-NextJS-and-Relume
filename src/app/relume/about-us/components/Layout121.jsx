"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

const useAnimationSection = () => {
  const scrollSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return { scrollSection, height };
};

export function Layout121() {
  const animationProps = useAnimationSection();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Empowering Your Business Through Digital Solutions
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Contact"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[10%] right-auto left-8 h-3/4 w-0.5 bg-neutral-darkest/15 md:left-[2.4375rem]">
              <motion.div
                className="bg-neutral-darkest"
                style={{ height: animationProps.height }}
                ref={animationProps.scrollSection}
              />
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Our Mission
                </h6>
                <p>
                  To drive growth and innovation for businesses through tailored
                  digital strategies and solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Our Vision
                </h6>
                <p>
                  To be the leading partner in digital transformation for
                  businesses worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Our Values
                </h6>
                <p>
                  Integrity, innovation, and collaboration are at the core of
                  everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
              </div>
              <div className="py-10">
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">Join Us</h6>
                <p>
                  Partner with us to elevate your business in the digital
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
