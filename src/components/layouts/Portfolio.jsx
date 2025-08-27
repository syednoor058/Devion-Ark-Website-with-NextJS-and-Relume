"use client";

import { SecondaryButton } from "../buttons/Buttons";
import { PortfolioBentoGrid } from "../grids/Grids";

export function Portfolio({ expanded = false }) {
  return (
    <section
      id="portfolio-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 relative text-neutral-300"
    >
      <div className="relative z-[3]">
        <header className="w-full mb-12 md:mb-18 lg:mb-20 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col justify-center items-center">
            <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 via-blue-400 to-accentColor1 text-white px-3 py-1 rounded-full">
              Portfolio
            </p>
            <h2
              className={`mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white text-center`}
            >
              Crafting Solutions at
              <br />
              <span className="bg-gradient-to-t from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                All Scales Possible
              </span>
            </h2>
            <p className="md:text-md text-center">
              From startups to nationwide enterprises, our work speaks for
              itself. We&apos;ve engineered an intuitive e-commerce platform for
              sportswear brands, boosting sales by 150% through SEO-friendly web
              development, and built a custom CRM system that automated 70% of
              manual tasks for real estate professionals.
            </p>
          </div>
        </header>
        <PortfolioBentoGrid expanded={expanded} />
        {!expanded && (
          <footer className="flex justify-center mt-7 md:mt-10">
            <SecondaryButton
              url="/case-studies"
              text="View All Case Studies"
              className="text-neutral-300 border-neutral-300"
            />
          </footer>
        )}
      </div>
    </section>
  );
}
