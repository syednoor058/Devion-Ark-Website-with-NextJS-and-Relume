"use client";

import Image from "next/image";
import brandGrowthImg from "../../../public/images/portfolio/brand-growth.jpg";
import gymWeb from "../../../public/images/portfolio/gym-website.jpg";
import cpcAdsCampaignImg from "../../../public/images/portfolio/paid-ads-campaign.jpg";
import petshopEcommerce from "../../../public/images/portfolio/pet-shop-ecommerce.jpg";
import portfolioWeb from "../../../public/images/portfolio/portfolio-website.jpg";
import realestateSoftware from "../../../public/images/portfolio/real-estate-software.jpg";
import bgElement from "../../../public/images/shapes/bg-elem-1.png";
import { LinkButton, SecondaryButton } from "../buttons/Buttons";

export function Portfolio() {
  return (
    <section
      id="portfolio-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-100 dark:bg-neutral-900 relative"
    >
      <div className="relative z-[3]">
        <header className=" mb-12 md:mb-18 lg:mb-20 flex flex-col items-center">
          <div className="w-full flex">
            <div className="w-full md:w-[70%] lg:w-[60%]">
              <p className="mb-3 font-semibold md:mb-4 text-accentColor1 md:text-md lg:text-lg">
                Portfolio
              </p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800 dark:text-white">
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
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={gymWeb}
                    alt="gymnasium website mockup"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">Gymnasium Center Responsive Business Website</a>
            </h3>
            <p>
              SEO-optimized website with modern design strategy grow online
              presence.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Website Development
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Responsive
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Agency Website
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={petshopEcommerce}
                    alt="petshop ecommerce webapplication mockup"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">Petshop E-commerce Web Application</a>
            </h3>
            <p>
              Full responsive online platform to maintain stores, manage orders,
              and track inventory seamlessly.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                E-commerce
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Web Application
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Online Store
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-square relative overflow-hidden">
                  <Image
                    src={realestateSoftware}
                    alt="real estate custom software mockup"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">Comprehensive Real Estate Management System</a>
            </h3>
            <p>
              A powerful management system for real estate professionals, to
              manage inventory, customer, employtee, and projects day to day.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Management System
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Custom Software
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Real Estate
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={cpcAdsCampaignImg}
                    alt="a man advertising holding mic"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">High Performing CPC Campaign</a>
            </h3>
            <p>
              A laser-targeted Facebook ads campaign that delivered more than
              expected and satisfied results.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Social Media
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Organic
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Paid Promotion
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={brandGrowthImg}
                    alt="brand revival work process"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">Brand Revival with Social Media Strategy</a>
            </h3>
            <p>
              Helped to rebuild brand's online growth and position that it
              deserved with consistent contents and strategy.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Organic Promotion
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Social Media Marketing
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image
                    src={portfolioWeb}
                    alt="personal portfolio website"
                    className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
                  />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-titleColor">
              <a href="#">Personal Portfolio Static Website</a>
            </h3>
            <p>
              From developers to designers, students to businessman, we build
              personal portfolio for everyone.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Portfolio Website
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Web Development
              </div>
              <div className="px-3 py-1.5 rounded-full bg-neutral-700 dark:bg-neutral-950 text-white text-xs">
                Modern UI
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <LinkButton text="View project" />
            </div>
          </article>
        </div>
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <SecondaryButton url="/case-studies" text="View All Case Studies" />
        </footer>
      </div>
      <div className="w-[25%] lg:w-[15%] aspect-square absolute z-[1] overflow-hidden top-0 right-0 scale-x-[-1]">
        <Image
          src={bgElement}
          alt="background element"
          className="w-full h-full object-cover hover:scale-[105%] transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
}
