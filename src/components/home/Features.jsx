"use client";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GoGoal } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { IconCard } from "../cards/cards";

export function Features() {
  return (
    <section
      id="feature-section"
      className="px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950"
    >
      <div className="">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="w-full ">
            <h2 className="text-3xl leading-[1.2] font-bold md:text-4xl lg:text-5xl text-white">
              Helping business overcome digital growth challenges
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full lg:w-[85%] grid grid-cols-1 items-start justify-center md:grid-cols-2 lg:grid-cols-3 divide-x divide-y border">
            <IconCard
              title="High Online Visibility"
              desc="Struggling to get found? We help you rank higher with SEO and paid
              ads that drive real traffic."
              icon={<AiOutlineThunderbolt className="text-xl" />}
            />
            <IconCard
              title="Connected Systems"
              desc="Tired of juggling spreadsheets? Our custom software brings your
              business data into one centralized place."
              icon={<MdOutlineCloudUpload className="text-xl" />}
            />
            <IconCard
              title="Optimized Ad Spend"
              desc="Don't burn your budget. We build performance-driven ad campaigns
                that deliver more for every dollar."
              icon={<TbPigMoney className="text-xl" />}
            />
            <IconCard
              title="Strong Social Presence"
              desc="We turn dull feeds into engaging content engines with strong
                visuals and consistent strategy."
              icon={<IoIosPeople className="text-xl" />}
            />
            <IconCard
              title="Professional Website"
              desc="We redesign or rebuild fast, modern web apps and sites that keep
                users engaged and convert better."
              icon={<CgWebsite className="text-xl" />}
            />
            <IconCard
              title="Sharp Digital Strategy"
              desc="If your digital growth feels directionless, we provide expert
                consulting to help you plan and scale."
              icon={<GoGoal className="text-xl" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
