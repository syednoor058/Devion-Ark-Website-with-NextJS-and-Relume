"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout241() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Boost</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Unlock the Power of Search Engine Marketing
              </h2>
              <p className="text-medium">
                Search Engine Marketing (SEM) is essential for businesses aiming
                to increase their online visibility. With targeted strategies,
                you can attract more qualified leads and drive conversions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Paid Search Advertising: Instant Visibility
              </h3>
              <p>
                Leverage paid ads to appear at the top of search results,
                ensuring your business is seen by potential customers right when
                they search.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Display Advertising: Visual Engagement
              </h3>
              <p>
                Utilize eye-catching banners and visuals to engage users across
                websites and apps, enhancing brand awareness and driving
                traffic.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Remarketing: Re-Engage Interested Customers
              </h3>
              <p>
                Reconnect with visitors who showed interest in your products,
                reminding them of your offerings and encouraging them to return.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
