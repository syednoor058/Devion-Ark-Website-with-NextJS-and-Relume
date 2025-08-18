"use client";

import React from "react";

export function Layout90() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="heading-h3 font-bold">
            Unlock Your Business Potential with Tailored Custom Software
            Solutions
          </h3>
          <p className="text-medium">
            Custom software solutions enhance efficiency by automating processes
            and reducing manual tasks. They are scalable, allowing your business
            to grow without limitations. Additionally, these solutions provide a
            competitive advantage, enabling you to meet customer demands swiftly
            and effectively.
          </p>
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
