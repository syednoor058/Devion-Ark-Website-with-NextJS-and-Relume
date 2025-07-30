"use client";

import {
  LuCircleDollarSign,
  LuGlobe,
  LuGoal,
  LuMonitorCog,
  LuThumbsUp,
  LuTrendingUp,
} from "react-icons/lu";

export function Features() {
  return (
    <section id="feature-section" className="px-[5%] py-10 md:py-16 lg:py-20">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-3xl leading-[1.2] font-bold md:text-4xl lg:text-5xl text-neutral-800 dark:text-white">
              Helping business overcome digital growth challenges
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuTrendingUp className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              High Online Visibility
            </h3>
            <p>
              Struggling to get found? We help you rank higher with SEO and paid
              ads that drive real traffic.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuMonitorCog className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Connected Systems
            </h3>
            <p>
              Tired of juggling spreadsheets? Our custom software brings your
              business data into one centralized place.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuCircleDollarSign className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Optimized Ad Spend
            </h3>
            <p>
              Don’t burn your budget. We build performance-driven ad campaigns
              that deliver more for every dollar.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuThumbsUp className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Strong Social Presence
            </h3>
            <p>
              We turn dull feeds into engaging content engines with strong
              visuals and consistent strategy.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuGlobe className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Modern and Updated Website
            </h3>
            <p>
              We redesign or rebuild fast, modern web apps and sites that keep
              users engaged and convert better.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-1.5 bg-accentColor1 text-white mb-5 md:mb-6 rounded-xs">
              <LuGoal className="text-2xl" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Sharp Digital Strategy
            </h3>
            <p>
              If your digital growth feels directionless, we provide expert
              consulting to help you plan and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
