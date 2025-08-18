"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Innovative Execution Phase: Crafting an Exceptional Ecommerce Web
              Application
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              In the execution phase, we utilized cutting-edge technologies to
              ensure seamless functionality. Our design principles focused on
              user experience and responsiveness, creating an engaging
              interface.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Technologies Used
                </h6>
                <p>
                  We implemented React, Node.js, and MongoDB for a robust
                  application architecture.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Design Principles
                </h6>
                <p>
                  Our design emphasized simplicity, usability, and a modern
                  aesthetic for enhanced engagement.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
