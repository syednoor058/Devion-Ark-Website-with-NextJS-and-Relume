"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout484() {
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">Innovate</p>
        <p className="heading-h2 font-bold">
          At our core, we are dedicated to empowering businesses through
          innovative digital solutions. Our mission is to drive growth and
          success for our clients in an ever-evolving marketplace.
        </p>
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
    </section>
  );
}
