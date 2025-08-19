"use client";

import Image from "next/image";
import brocelle from "../../../public/images/partners/borcelle.png";
import brigite from "../../../public/images/partners/brigite.png";
import elevate from "../../../public/images/partners/elevate.png";
import indigo from "../../../public/images/partners/indigo_company.png";
import interAid from "../../../public/images/partners/interaid.png";
import puppetBrush from "../../../public/images/partners/puppetbrush.png";
import qahaf from "../../../public/images/partners/qahaf.png";
import retrofino from "../../../public/images/partners/retrofino.png";
import sikderFoundation from "../../../public/images/partners/sikder_foundation.png";
import treatosBd from "../../../public/images/partners/treatosBD.png";

export function LogoList() {
  return (
    <section
      id="logo-list"
      className="px-[3%] py-10 md:py-16 lg:py-20 bg-black"
    >
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base leading-[1.2] font-bold md:mb-8 md:text-md md:leading-[1.2] text-neutral-200">
          Trusted by the world's top industry leaders
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-6 lg:gap-x-10 lg:gap-y-10 pt-4 pb-2 md:pt-2">
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={treatosBd}
              alt="treatos bd logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>

          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={interAid}
              alt="interAid logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>

          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={qahaf}
              alt="Qahaf logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={brocelle}
              alt="brocelle logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={puppetBrush}
              alt="puppetbrush logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={indigo}
              alt="indigo company logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={retrofino}
              alt="retrofino logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={brigite}
              alt="Brigite logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-6 lg:h-8 relative overflow-hidden">
            <Image
              src={sikderFoundation}
              alt="Shikder Foundation logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
          <div className="h-10 relative overflow-hidden">
            <Image
              src={elevate}
              alt="Elevate logo"
              className="w-full h-full object-cover invert-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
