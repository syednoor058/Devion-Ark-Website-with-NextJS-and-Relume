"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout245() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Optimize</p>
              <h2 className="heading-h2 font-bold">
                Unlock Your Potential with SEM Strategies
              </h2>
            </div>
            <div>
              <p className="text-medium">
                Search Engine Marketing (SEM) is a powerful tool that drives
                targeted traffic to your website. Our comprehensive process
                begins with an in-depth audit to identify opportunities and
                challenges. We then develop a tailored strategy that focuses on
                maximizing your online visibility and ROI.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Step 1: Initial Audit and Strategy Development
              </h3>
              <p>We analyze your current online presence and competition.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Step 2: Implementation of SEM Campaigns
              </h3>
              <p>Our team executes the strategy with precision.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Step 3: Continuous Optimization and Reporting
              </h3>
              <p>We monitor performance and adjust tactics as needed.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
