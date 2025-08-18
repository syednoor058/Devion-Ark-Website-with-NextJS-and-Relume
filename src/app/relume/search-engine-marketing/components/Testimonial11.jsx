"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { StarFull } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial11() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Customer testimonials
          </h2>
          <p className="text-medium">
            Our SEM strategy transformed our online presence.
          </p>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pb-20 md:pb-24">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h6 font-bold">
                    "The results exceeded our expectations and boosted our
                    sales!"
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>CEO, Tech Innovations</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h6 font-bold">
                    "The results exceeded our expectations and boosted our
                    sales!"
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>CEO, Tech Innovations</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h6 font-bold">
                    "The results exceeded our expectations and boosted our
                    sales!"
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>CEO, Tech Innovations</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 lg:basis-1/2 lg:pr-16">
                <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h6 font-bold">
                    "The results exceeded our expectations and boosted our
                    sales!"
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>CEO, Tech Innovations</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-center justify-between">
              <div className="mt-5 flex w-full items-start justify-start">
                <button
                  onClick={carouselState.handleDotClick(0)}
                  className={carouselState.dotClassName(0)}
                />
                <button
                  onClick={carouselState.handleDotClick(1)}
                  className={carouselState.dotClassName(1)}
                />
                <button
                  onClick={carouselState.handleDotClick(2)}
                  className={carouselState.dotClassName(2)}
                />
                <button
                  onClick={carouselState.handleDotClick(3)}
                  className={carouselState.dotClassName(3)}
                />
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static top-0 right-0 size-12 -translate-y-0" />
                <CarouselNext className="static top-0 right-0 size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
