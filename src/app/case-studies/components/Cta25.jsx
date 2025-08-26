

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold md:mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-medium">
          Contact us today for a personalized consultation and discover how we
          can help you succeed.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Sign Up" variant="secondary">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
