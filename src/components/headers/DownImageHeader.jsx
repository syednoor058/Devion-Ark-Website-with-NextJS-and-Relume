import Image from "next/image";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

export function DownImageHeader({
  title,
  desc,
  image,
  alt,
  iconbox = [],
  header = false,
}) {
  return (
    <section
      className={`px-[5%] ${
        header ? "py-16 md:py-24 lg:py-28" : "py-10 md:py-16 lg:py-20"
      } bg-neutral-950 text-neutral-300 relative`}
    >
      <div className="absolute w-full h-full inset-0 backdrop-blur-[1px] z-[5]"></div>
      <BackgroundRippleEffect />
      <div className="container relative z-[10]">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-white">
              {title}
            </h3>
          </div>
          <div>
            <p className="text-medium mb-6 md:mb-8">{desc}</p>
            <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 p-2 rounded-[15px] bg-neutral-900">
              {iconbox.map((iconItem, index) => (
                <div
                  key={index}
                  className="p-4 rounded-[15px] border border-neutral-800 bg-gradient-to-br from-accentColor1/10 to-accentColor2/10"
                >
                  <h6 className="mb-1 font-bold md:mb-3 text-neutral-100 flex flex-row gap-2 items-center">
                    <span>{iconItem.icon}</span>
                    <span>{iconItem.title}</span>
                  </h6>
                  <p className="text-sm text-neutral-300">{iconItem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full aspect-video relative overflow-hidden rounded-[15px] p-1 border-neutral-300 border-[2px]">
          <Image
            src={image}
            className="w-full h-full object-cover rounded-[15px]"
            alt={alt}
          />
        </div>
      </div>
    </section>
  );
}
