import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

export function TwoSideImageBox({ tagline, title, desc, image1, alt1, image2, alt2 }) {
  return (
    <section className="px-[5%] py-10 md:py-16 lg:py-20 text-neutral-600">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-8 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
                {tagline}
              </p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
                {title}
              </h2>
            </div>
            <Image
              src={image1}
              className="mt:mb-18 mt-6 md:mt-10 aspect-square w-full rounded-image object-cover lg:mt-20 rounded-[15px] overflow-hidden"
              alt={alt1}
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <Image
              src={image2}
              className="mb-6 w-full rounded-image object-cover md:mb-8 rounded-[15px] overflow-hidden"
              alt={alt2}
            />
            <div className="mr-[10%] ml-[5%]">
              <p className="md:text-md">{desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <PrimaryButton
                  url="/contact"
                  text="Get Started"
                  icon={
                    <FaArrowRight className="ml-3 group-hover:-rotate-45 transition-all duration-300 ease-in" />
                  }
                />
                <SecondaryButton url="/about" text="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
