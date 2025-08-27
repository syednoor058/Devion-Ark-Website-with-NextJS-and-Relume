"use client";

import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

const useRelume = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "center start"],
  });
  const initialImageWidth = isMobile ? "35%" : "20%";
  const initialImageHeight = "40%";
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageWidth, "100%"]
  );
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [initialImageHeight, "100%"]
  );
  const imageYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const cardYPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "100%", "0%"]
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

export function ZoomOnScroll({
  tagline,
  title,
  desc,
  primaryButton,
  secondaryButton,
  image,
  mobileImage,
}) {
  const { containerRef, imageStyle, cardStyle } = useRelume();
  const isMobileScrn = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <section className="h-[200vh] bg-neutral-950" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.img
          src={isMobileScrn ? mobileImage.src : image.src}
          alt="Mockup Image zoom on scroll"
          className="size-full object-cover"
          style={imageStyle}
        />
        <motion.div
          className="absolute inset-0 mx-auto flex size-full max-w-xxl items-center justify-end px-[5%]"
          style={cardStyle}
        >
          <Card className="flex w-[90%] flex-col p-6 md:max-w-[658px] md:p-12 border-neutral-400 text-neutral-600">
            <p className="mb-1 font-semibold text-accentColor1">{tagline}</p>
            <h2 className="text-md md:text-lg lg:text-xl mb-3 font-bold text-neutral-800">
              {title}
            </h2>
            <p className="text-medium">{desc}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <PrimaryButton text={primaryButton} />
              <SecondaryButton
                text={secondaryButton}
                className="border-neutral-600 text-neutral-600"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
