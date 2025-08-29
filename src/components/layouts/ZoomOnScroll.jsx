"use client";

import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center start"],
  });
  const initialImageWidth = "50%";
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageWidth, "100%"]
  );
  const imageYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const cardYPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "100%", "0%"]
  );
  const imageStyle = {
    width: imageWidth,
    height: "auto",
    y: imageYPosition,
  };
  const cardStyle = {
    y: cardYPosition,
  };
  return { containerRef, imageStyle, cardStyle };
};

export function ZoomOnScroll({
  tagline,
  title,
  desc,
  primaryButton,
  secondaryButton,
  image,
  mobileImage,
  tabImage,
  alt = {},
}) {
  const { containerRef, imageStyle, cardStyle } = useRelume();
  const isMobileScrn = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isTabletScrn = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  return (
    <section
      className="h-[200vh] bg-neutral-950 p-10 md:py-16 lg:py-20"
      ref={containerRef}
    >
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center">
        <motion.img
          src={
            isMobileScrn
              ? mobileImage.src
              : isTabletScrn
              ? tabImage.src
              : image.src
          }
          alt={alt || "Image zoom on scroll"}
          className="size-full object-cover"
          style={imageStyle}
        />
        <motion.div
          className="absolute inset-0 -right-14 lg:-right-0 mx-auto flex size-full max-w-xxl items-center justify-end"
          style={cardStyle}
        >
          <Card className="flex w-[90%] flex-col p-5 md:max-w-[520px] md:p-10 border-neutral-400 text-neutral-600 gap-0">
            <p className="mb-1 md:mb-2 font-normal md:font-semibold text-accentColor1 md:text-lg text-sm">
              {tagline}
            </p>
            <h2 className="text-base md:text-3xl lg:text-xl font-bold text-neutral-800 mb-3 md:mb-5">
              {title}
            </h2>
            <p className="text-sm md:text-md">{desc}</p>
            <div className="mt-5 md:mt-7 flex flex-wrap items-center gap-2">
              <PrimaryButton
                text={primaryButton}
                className="text-xs md:text-base"
              />
              <SecondaryButton
                text={secondaryButton}
                className="border-neutral-600 text-neutral-600 text-xs md:text-base"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
