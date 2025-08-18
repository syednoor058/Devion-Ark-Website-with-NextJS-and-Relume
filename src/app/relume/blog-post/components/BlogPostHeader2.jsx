"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  ChevronLeft,
  FacebookLogo,
  Link,
  LinkedinLogo,
  XLogo,
} from "relume-icons";

export function BlogPostHeader2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          <Button
            title="All Posts"
            variant="link"
            size="link"
            iconLeft={<ChevronLeft className="text-scheme-text" />}
            className="mb-8 md:mb-10 lg:mb-12"
            asChild={true}
          >
            <a>All Posts</a>
          </Button>
          <div className="mb-4 flex w-full items-center justify-start">
            <Badge className="mr-4">Insights</Badge>
            <p className="text-small inline font-semibold">5 min read</p>
          </div>
          <h1 className="heading-h2 font-bold">
            Unlocking Digital Success for Your Business
          </h1>
        </div>
        <div className="mx-auto mb-8 w-full overflow-hidden md:mb-12 lg:mb-8">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="aspect-[5/2] size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between md:flex-row">
          <div className="mb-4 flex items-center sm:mb-8 md:mb-0">
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Written by</p>
              <p className="font-medium">Jane Doe</p>
            </div>
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Published on</p>
              <p className="font-medium">22 January 2021</p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2">
            <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
              <Link className="text-scheme-text size-6" />
            </a>
            <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
              <LinkedinLogo className="text-scheme-text size-6" />
            </a>
            <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
              <XLogo className="text-scheme-text size-6 p-0.5" />
            </a>
            <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
              <FacebookLogo className="text-scheme-text size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
