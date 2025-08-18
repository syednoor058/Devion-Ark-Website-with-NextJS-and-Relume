"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="heading-h3 mb-3 font-bold md:mb-4">
              Start Your Website Journey Today
            </h2>
            <p className="text-medium">
              Get a personalized consultation for your website project.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Button title="Contact">Contact</Button>
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
