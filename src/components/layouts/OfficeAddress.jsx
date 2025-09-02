import Image from "next/image";
import office1 from "../../../public/images/office-1.jpg";
import office2 from "../../../public/images/office-2.jpg";

export function OfficeAddress() {
  return (
    <section className="px-[5%] py-10 md:py-16 lg:py-20 text-neutral-600">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl md:mb-12 flex flex-col justify-center text-center ">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
            Reach Us
          </p>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-neutral-800">
            Office Locations
          </h2>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 lg:grid-cols-2 md:gap-16">
          <div className="flex flex-row items-center justify-start gap-5 md:gap-10">
            <div className="w-[40%] md:w-[50%] aspect-[6/4] relative overflow-hidden rounded-sm">
              <Image
                src={office1}
                alt="Office 1 environment"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className="w-[60%] md:w-[50%] flex flex-col">
              <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Head Office</h3>
              <p className="">
                Floor #4, Ideal Syed Tower, 08 Tootpara Central Rd,
                <br />
                Khulna 9100 Bangladesh.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-7 md:gap-10">
            <div className="w-[40%] md:w-[50%] aspect-[6/4] relative overflow-hidden rounded-sm">
              <Image
                src={office2}
                alt="Office 2 environment"
                className=" w-full h-full object-cover  "
              />
            </div>
            <div className="w-[60%] md:w-[50%] flex flex-col">
              <h3 className="heading-h4 mb-3 font-bold lg:mb-4">
                Dhaka Brunch
              </h3>
              <p className="">
                Floor #6, Janata Mahal Tower, 30 Kemal Ataturk Ave,
                <br />
                Dhaka 1213 Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
