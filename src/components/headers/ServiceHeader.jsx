"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

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

const ServiceHeader = ({ title, desc, images }) => {
  const carousel = useCarousel();
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0 bg-neutral-950 text-neutral-300">
      <div className="mx-[5%] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
          {title}
        </h1>
        <p className="md:text-md text-neutral-300 pl-6 border-l-4 border-accentColor2">
          {desc}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <PrimaryButton
            text="Get Started"
            url="/contact"
            icon={
              <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in ml-3 text-sm" />
            }
          />
          <SecondaryButton
            className="text-neutral-300 border-neutral-300"
            text="Learn More"
            url="/about"
          />
        </div>
      </div>
      <div className="relative clear-both w-full text-center">
        <Carousel
          opts={carousel.options}
          plugins={carousel.plugins}
          setApi={carousel.setApi}
          className="relative right-0 left-0 z-10 block h-full overflow-hidden pl-4 whitespace-nowrap"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative inline-block size-full text-left align-top whitespace-normal">
                  <div className="flex flex-col">
                    <div className="relative w-full aspect-[3/2] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                    <div className="relative bg-scheme-foreground px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                      <div className="w-full max-w-lg">
                        <h6 className="text-md mb-1 font-bold text-white">
                          {image.title}
                        </h6>
                        <p className="">{image.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute top-auto right-auto bottom-[52px] left-8 flex w-full items-start justify-start">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={carousel.handleDotClick(index)}
                  className={carousel.dotClassName(index)}
                />
              ))}
            </div>
            <CarouselPrevious className="top-auto right-[5.5rem] bottom-5 left-auto size-12 bg-transparent md:right-24" />
            <CarouselNext className="top-auto right-8 bottom-5 left-auto size-12 bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceHeader;
