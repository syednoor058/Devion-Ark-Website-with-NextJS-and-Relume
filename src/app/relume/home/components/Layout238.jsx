"use client";

import { Button } from "@/components/ui/button";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

export function Layout238() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="heading-h3 font-bold">
              Our Proven Process: From Consultation to Delivery, We’ve Got You
              Covered
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <FaInfoCircle className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Step 1: Initial Consultation to Understand Your Unique Business
              Needs
            </h3>
            <p>
              We begin by discussing your goals, challenges, and vision for your
              project.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<FaArrowRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Start
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <FaInfoCircle className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Step 2: Tailored Strategy Development for Optimal Results
            </h3>
            <p>
              Our team crafts a customized plan that aligns with your business
              objectives.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<FaArrowRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Plan
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <FaInfoCircle className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Step 3: Execution and Iteration for Continuous Improvement
            </h3>
            <p>
              We implement the strategy while continuously refining it based on
              performance metrics.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<FaArrowRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Launch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
