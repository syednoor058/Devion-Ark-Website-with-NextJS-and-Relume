import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import azizulHaque from "../../../public/images/testimonials/azizul.webp";
import farhan from "../../../public/images/testimonials/farhan_masum.webp";
import mazhar from "../../../public/images/testimonials/mazhar.jpg";
import mehedi from "../../../public/images/testimonials/mehedi.webp";
import rakib from "../../../public/images/testimonials/rakib.webp";
import tanjina from "../../../public/images/testimonials/tanjina.jpg";

function TestimonialCard({ name = "", feedback = "", designation = "", img }) {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-row gap-1 items-center text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="md:text-md mt-5 md:mt-6 font-semibold">"{feedback}"</p>
      <div className="w-12 aspect-square rounded-full overflow-hidden relative mt-5 md:mt-6">
        <Image src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h5 className="mt-2 mb-1 text-titleColor">{name}</h5>
      <p>{designation}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="py-10 md:py-16 lg:py-20 mb-6">
      <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-titleColor px-[5%]">
        What Our Clients Say
      </h2>
      <p className="md:text-md px-[5%]">
        From vision to reality — discover how we&apos;ve made an impact through
        the words of those we&apos;ve worked with.
      </p>
      <div className="w-full mt-6 md:mt-8">
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Md Azizul Hoque"
                feedback="Working with Devion Ark has been a game-changer for us at InterAiD. From managing our Facebook page and running effective ads campaigns to keeping our website updated and professional — they've handled it all with care and consistency."
                designation="Founder & CEO, InterAiD"
                img={azizulHaque}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Rakib Shikdar"
                feedback="We're thrilled with the results from our recent ad campaign run by Devion Ark! With just a small budget, they helped us reach almost twenty thousands of local people and generated two hundreds of real customer messages."
                designation="Founder & CEO, Retrofino"
                img={rakib}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Syed Mustafa Mehedi"
                feedback="We're super happy with Devion Ark! Their ad campaigns and social media management really boosted our clothing brand, Qahaf. They brought in great engagement and sales with a professional yet approachable style. Highly recommended!"
                designation="Founder & CEO, Qahaf"
                img={mehedi}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Tanjina Tanha"
                feedback="Absolutely loved working with Devion Ark! They completely transformed our social media game at Sweet Cakes. Our engagement has gone way up, and we've even had customers mention they found us through our Instagram!"
                designation="Founder & CEO, Tanha's Kitchen"
                img={tanjina}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Mazharul Islam"
                feedback="We are incredibly pleased with Devion Ark! They developed a fantastic real estate management system for us that is streamlined our operations. Their team was professional, responsive, and delivered exactly what we needed. Highly recommend their services!"
                designation="Cheif Technology Officer, Shikder Foundation"
                img={mazhar}
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                name="Kazi Farhan Masum"
                feedback="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                designation="Owner & CEO, Puppetbrush"
                img={farhan}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
