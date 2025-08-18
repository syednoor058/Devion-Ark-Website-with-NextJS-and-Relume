"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Unlock Your Business Potential with Expert SEO Strategies Tailored
              for You
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Search Engine Optimization (SEO) is crucial for enhancing your
              online visibility. Our tailored SEO services drive organic
              traffic, ensuring your business stands out in a crowded digital
              landscape.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Increased Traffic
                </h6>
                <p>
                  Boost your website's visibility and attract more visitors with
                  our SEO solutions.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Higher Rankings
                </h6>
                <p>
                  Achieve top search engine rankings and enhance your brand's
                  credibility and authority.
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
