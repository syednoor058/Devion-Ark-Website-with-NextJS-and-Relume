"use client";

import { FaInfoCircle } from "react-icons/fa";

export function Layout18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Unlock Your Business Potential with Our Comprehensive Digital
              Solutions
            </h3>
            <p className="text-medium mb-5 md:mb-6">
              Choosing our agency means elevating your brand and maximizing your
              reach. Experience increased lead generation and a stronger online
              presence like never before.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <FaInfoCircle className="size-6 text-scheme-text" />
                </div>
                <p>
                  Boost your lead generation effortlessly with our expertise.
                </p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <FaInfoCircle className="size-6 text-scheme-text" />
                </div>
                <p>Enhance your brand presence across all digital platforms.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <FaInfoCircle className="size-6 text-scheme-text" />
                </div>
                <p>Achieve digital dominance and outshine your competitors.</p>
              </li>
            </ul>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
