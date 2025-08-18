"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta52() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Stay Updated with Our Insights
            </h2>
            <p className="text-medium">
              Subscribe to our newsletter for the latest updates, tips, and
              insights from our experts.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Your Email Here" />
              <Button
                title="Join Now"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Join Now
              </Button>
            </form>
            <p className="text-tiny">
              By clicking Join Now, you agree to our Terms and Conditions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
