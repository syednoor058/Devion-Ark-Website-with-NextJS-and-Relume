"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout102() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 font-bold">
              Transforming Ecommerce: Our Journey from Consultation to Launch
            </h3>
          </div>
          <div>
            <p className="text-medium mb-6 md:mb-8">
              Our initial consultation revealed the client's need for a robust
              ecommerce platform. We collaborated closely to define their vision
              and requirements.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Client Insights
                </h6>
                <p>
                  The client sought a user-friendly platform to enhance online
                  sales and customer engagement.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Project Goals
                </h6>
                <p>
                  Our goal was to create an intuitive, scalable ecommerce
                  solution tailored to their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
