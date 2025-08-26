"use client";

import { SecondaryButton } from "../buttons/Buttons";
import { PortfolioBentoGrid } from "../grids/Grids";

export function Portfolio() {
  return (
    <section
      id="portfolio-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 relative text-neutral-300"
    >
      <div className="relative z-[3]">
        <header className=" mb-12 md:mb-18 lg:mb-20 flex flex-col items-center">
          <div className="w-full flex">
            <div className="w-full md:w-[70%] lg:w-[60%]">
              <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                Portfolio
              </p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
                Crafting Creative Solutions at All Scales
              </h2>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[70%] lg:w-[50%] pl-7 border-l-2 border-accentColor2">
              <p className="md:text-md">
                From startups to nationwide enterprises, our work speaks for
                itself. We&apos;ve engineered an intuitive e-commerce platform
                for sportswear brands, boosting sales by 150% through
                SEO-friendly web development, and built a custom CRM system that
                automated 70% of manual tasks for real estate professionals. Our
                strategic social media campaigns transformed a local retailer's
                online presence, tripling engagement, while targeted SEO
                strategies helped a tech startup dominate Google rankings.
              </p>
            </div>
          </div>
        </header>
        <PortfolioBentoGrid />
        <footer className="flex justify-center mt-7 md:mt-10">
          <SecondaryButton
            url="/case-studies"
            text="View All Case Studies"
            className="text-neutral-300 border-neutral-300"
          />
        </footer>
      </div>
    </section>
  );
}
