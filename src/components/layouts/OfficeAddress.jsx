import Image from "next/image";
import office1 from "../../../public/images/office-1.jpg";
import office2 from "../../../public/images/office-2.jpg";
import { SecondaryButton } from "../buttons/Buttons";

export function OfficeAddress() {
  return (
    <section className="px-[5%] py-10 md:py-16 lg:py-20 text-neutral-600">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl md:mb-12 flex flex-col justify-center text-center ">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
            Reach
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
            Locations
          </h2>
          <p className="md:text-md text-neutral-300">
            Find us in major cities around the world.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8">
              <Image
                src={office1}
                alt="Office 1 environment"
                className="h-[320px] w-full object-cover md:h-[384px] rounded-[15px]"
              />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Head Office</h3>
            <p className="text-center">
              08 Tootpara Central Rd, Khulna 9100 Bangladesh
            </p>
            <div className="mt-5 md:mt-6">
              <SecondaryButton text="Get Direction" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 w-full md:mb-8">
              <Image
                src={office2}
                alt="Office 2 environment"
                className="h-[320px] w-full object-cover md:h-[384px] rounded-[15px]"
              />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Dhaka Brunch</h3>
            <p className="text-center">
              24/8 Shyamoli Square Plaza, Shyamoli Dhaka 2466 Bangladesh
            </p>
            <div className="mt-5 md:mt-6">
              <SecondaryButton text="Get Direction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
