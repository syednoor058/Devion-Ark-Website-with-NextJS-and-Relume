"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import { motion } from "motion/react";
import React from "react";
import { PlayCircle } from "relume-icons";

export function Header143() {
  return (
    <section className="relative md:min-h-screen">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 items-start gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
            <h1 className="heading-h1 font-bold">
              Medium length hero heading goes here
            </h1>
            <div className="mx-[7.5%] self-end md:mt-48">
              <p className="text-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Button">Button</Button>
                <Button title="Button" variant="secondary">
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center md:h-[60vh] lg:h-[80vh] lg:justify-start">
            <Dialog>
              <DialogTrigger asChild={true}>
                <motion.button
                  className="relative flex size-full origin-top-right items-center justify-center overflow-hidden rounded-image"
                  style={{ scale: 1 }}
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
                    alt="Relume placeholder image"
                    className="size-full object-cover"
                  />
                  <PlayCircle className="absolute z-20 size-20 text-white" />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                </motion.button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
