"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout203() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Understanding Client Needs: Challenges in the Ecommerce Landscape
            </h3>
            <p className="text-medium mb-6 md:mb-8">
              Our client faced significant hurdles in optimizing their online
              sales platform. They needed a robust solution to enhance user
              experience and streamline transactions.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Client Challenges
                </h6>
                <p>
                  Outdated technology and a complex checkout process hindered
                  their sales growth.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Our Approach
                </h6>
                <p>
                  We implemented a user-friendly interface and streamlined
                  payment options for efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
