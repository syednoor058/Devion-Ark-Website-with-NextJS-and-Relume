import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import axisFitness from "../../../public/images/partners/axis-fitness.png";
import axisYoga from "../../../public/images/partners/axis-yoga.png";
import elevate from "../../../public/images/partners/elevate.png";
import indigo from "../../../public/images/partners/indigo_company.png";
import interAid from "../../../public/images/partners/interaid.png";
import puppetBrush from "../../../public/images/partners/puppetbrush.png";
import qahaf from "../../../public/images/partners/qahaf.png";
import retrofino from "../../../public/images/partners/retrofino.png";
import sikderFoundation from "../../../public/images/partners/sikder_foundation.png";
import treatosBd from "../../../public/images/partners/treatosBD.png";

export default function LogoCloud() {
  return (
    <section className="overflow-hidden py-7 my:pb-10 lg:py-16 bg-neutral-100 md:bg-white">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r border-neutral-600 md:pr-6">
            <p className="text-end text-sm lg:text-base text-neutral-800">
              Powering the best teams
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40}>
              <div className="flex">
                <Image
                  className="mx-auto h-4 lg:h-6 w-fit "
                  src={treatosBd}
                  alt="treatos bd Logo"
                  width="auto"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-5 lg:h-7 w-fit "
                  src={interAid}
                  alt="interaid Logo"
                  width="auto"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-6 lg:h-8 w-fit "
                  src={qahaf}
                  alt="qahaf Logo"
                  width="auto"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-8 lg:h-10 w-fit "
                  src={axisFitness}
                  alt="axis fitness center Logo"
                  width="auto"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-6 lg:h-8 w-fit "
                  src={puppetBrush}
                  alt="puppetbrush Logo"
                  width="auto"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-6 lg:h-8 w-fit "
                  src={indigo}
                  alt="indigo Logo"
                  width="auto"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-4 lg:h-6 w-fit "
                  src={retrofino}
                  alt="retrofino Logo"
                  width="auto"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-5 lg:h-7 w-fit "
                  src={sikderFoundation}
                  alt="sikder foundation Logo"
                  width="auto"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-8 lg:h-10 w-fit "
                  src={axisYoga}
                  alt="axis yoga center bd Logo"
                  width="auto"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-6 lg:h-8 w-fit "
                  src={elevate}
                  alt="elevate Logo"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
