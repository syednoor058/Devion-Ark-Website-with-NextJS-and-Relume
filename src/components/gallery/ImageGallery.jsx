import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageGallery({ images = [] }) {
  return (
    <div className="py-12 lg:py-20 mb-5 md:mb-10 lg:mb-14">
      <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-titleColor px-[5%]">
        A Glimpse Into Our World
      </h2>
      <p className="md:text-md px-[5%]">
        Dive into our gallery to see the visuals behind our work — from
        interface designs to client success moments.
      </p>
      <div className="w-full mt-6 md:mt-8">
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-1">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-[70%] md:basis-1/2 lg:basis-[40%]"
              >
                <div className="w-full aspect-[6/4] relative overflow-hidden rounded-[15px]">
                  <Image
                    src={img}
                    alt="company gallery images"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
