"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20">
        <div className="w-full max-w-lg">
          <h2 className="heading-h3 mb-3 font-bold md:mb-4">
            Get Your Free Consultation Today
          </h2>
          <p className="text-medium">
            Unlock your business potential with our expert services.
          </p>
        </div>
        <div>
          <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
            <Input id="email" type="email" placeholder="Your Email Here" />
            <Button title="Get Started">Get Started</Button>
          </form>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "\n  <p class='text-xs'>\n    By clicking Sign Up you're confirming that you agree with our\n    <a href='#' class='underline'>Terms and Conditions</a>.\n  </p>\n  ",
            }}
          />
        </div>
      </div>
    </section>
  );
}
