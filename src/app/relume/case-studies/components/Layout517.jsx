"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight } from "relume-icons";

const useRelume = () => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center start"],
  });
  const initialImageWidth = isMobile ? "60%" : "20%";
  const initialImageHeight = "40%";
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageWidth, "100%"],
  );
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageHeight, "100%"],
  );
  const imageYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const cardYPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "100%", "0%"],
  );
  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
    y: imageYPosition,
  };
  const cardStyle = {
    y: cardYPosition,
  };
  return { containerRef, imageStyle, cardStyle };
};

export function Layout517() {
  const useScroll = useRelume();
  return (
    <section className="h-[200vh]" ref={useScroll.containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          alt="Relume placeholder image 2"
          className="size-full object-cover"
          style={useScroll.imageStyle}
        />
        <motion.div
          className="absolute inset-0 mx-auto flex size-full max-w-xxl items-center justify-end px-[5%]"
          style={useScroll.cardStyle}
        >
          <Card className="flex w-[90%] flex-col p-6 md:max-w-[658px] md:p-12">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Medium length section heading goes here
            </h2>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Button
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
