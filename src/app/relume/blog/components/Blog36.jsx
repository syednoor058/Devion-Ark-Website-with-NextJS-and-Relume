"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog36() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Explore Our Latest Insights
            </h2>
            <p className="text-medium">
              Stay updated with our expert articles and tips.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4">Marketing</Badge>
                <p className="text-small inline font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="heading-h5 font-bold">
                  Maximize Your Online Presence
                </h2>
              </a>
              <p>
                Learn strategies to enhance your digital marketing efforts
                today.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4">SEO</Badge>
                <p className="text-small inline font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="heading-h5 font-bold">
                  Understanding Search Engine Optimization
                </h2>
              </a>
              <p>
                Discover the fundamentals of SEO and its importance for
                businesses.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-4 flex w-full items-center justify-start">
                <Badge className="mr-4">Social</Badge>
                <p className="text-small inline font-semibold">5 min read</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="heading-h5 font-bold">
                  Boost Your Brand with Social Media
                </h2>
              </a>
              <p>
                Engage your audience and elevate your brand through effective
                social strategies.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
