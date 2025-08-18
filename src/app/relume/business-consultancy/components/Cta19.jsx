"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta19() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Unlock Your Business Potential Today
          </h2>
          <p className="text-medium">
            Schedule a consultation to explore tailored strategies that drive
            growth and success for your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
