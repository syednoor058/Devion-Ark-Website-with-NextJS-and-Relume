import { PrimaryButton, SecondaryButton } from "@/components/buttons/Buttons";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function DoubleSliderHeader({
  title,
  desc,
  primaryButton = "",
  secondaryButton = "",
  images1 = [],
  images2 = [],
}) {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28 bg-neutral-950 text-neutral-300">
      <div className="flex flex-col items-center">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
            {title}
          </h1>
          <p className="md:text-md text-neutral-300">{desc}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 mb-5">
            <PrimaryButton text={primaryButton} />
            <SecondaryButton text={secondaryButton} className="border-neutral-300 text-neutral-300" />
          </div>
        </div>
        <div className="w-full overflow-hidden flex flex-col gap-5 lg:gap-8 mt-6 md:mt-8">
          <InfiniteSlider
            speedOnHover={20}
            speed={40}
            className="flex w-screen justify-start overflow-hidden"
            gap="gap-5 lg:gap-8"
          >
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
          </InfiniteSlider>
          <InfiniteSlider
            speedOnHover={20}
            speed={40}
            reverse={true}
            gap="gap-5 lg:gap-8"
            className="flex w-screen justify-start overflow-hidden"
          >
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
            <div className="flex">
              <div className="w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] aspect-[3/2] bg-red-300"></div>
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
