"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Cta45() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Card className="grid grid-cols-1 items-start justify-start gap-6 p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                Meet Our Expert Team
              </h3>
              <p className="text-medium">
                Discover how we can elevate your business today.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            <Button title="Learn More">Learn More</Button>
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
