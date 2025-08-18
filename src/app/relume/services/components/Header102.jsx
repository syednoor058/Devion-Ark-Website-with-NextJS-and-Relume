"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";

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

  const options = {
    loop: true,
  };

  const plugins = [
    Autoplay({
      delay: 5000,
    }),
  ];

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

  return {
    options,
    plugins,
    api,
    setApi,
    handleDotClick,
    dotClassName,
  };
};

export function Header102() {
  const carousel = useCarousel();
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0">
      <div className="mx-[5%] max-w-md justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">
          Medium length hero heading goes here
        </h1>
        <p className="text-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Button">Button</Button>
          <Button title="Button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full text-center">
        <Carousel
          opts={carousel.options}
          plugins={carousel.plugins}
          setApi={carousel.setApi}
          className="relative right-0 left-0 z-10 block h-full overflow-hidden pl-4 whitespace-nowrap"
        >
          <CarouselContent>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                  <div className="relative bg-scheme-foreground px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="heading-h6 mb-1 font-bold">
                        Short heading goes here
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                  <div className="relative bg-scheme-foreground px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="heading-h6 mb-1 font-bold">
                        Short heading goes here
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="relative inline-block size-full text-left align-top whitespace-normal">
                <div className="flex h-screen flex-col">
                  <div className="relative flex-1">
                    <img
                      className="absolute size-full object-cover"
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                    />
                  </div>
                  <div className="relative bg-scheme-foreground px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                    <div className="w-full max-w-lg">
                      <h6 className="heading-h6 mb-1 font-bold">
                        Short heading goes here
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute top-auto right-auto bottom-[52px] left-8 flex w-full items-start justify-start">
              <button
                onClick={carousel.handleDotClick(0)}
                className={carousel.dotClassName(0)}
              />
              <button
                onClick={carousel.handleDotClick(1)}
                className={carousel.dotClassName(1)}
              />
              <button
                onClick={carousel.handleDotClick(2)}
                className={carousel.dotClassName(2)}
              />
            </div>
            <CarouselPrevious className="top-auto right-[5.5rem] bottom-2 left-auto size-12 bg-transparent md:right-24" />
            <CarouselNext className="top-auto right-8 bottom-2 left-auto size-12 bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
