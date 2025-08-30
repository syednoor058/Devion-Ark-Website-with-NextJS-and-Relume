"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function TeamSection({ tagline, title, desc, team = [] }) {
  return (
    <section className="px-[5%] py-10 md:py-14 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 md:text-md lg:text-lg bg-gradient-to-tr from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
            {tagline}
          </p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-neutral-800">
            {title}
          </h2>
          <p className="mb-6 md:mb-8 md:text-md">{desc}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] rounded-[15px]">
                <Image
                  src={member.img.src}
                  alt={`${member.name} photo`}
                  className="absolute inset-0 size-full object-cover"
                  fill
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">{member.name}</h5>
                <h6 className="text-medium">{member.position}</h6>
              </div>
              <p>{member.desc}</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href={member.linkedin}>
                  <FaLinkedin className="size-6 text-scheme-text" />
                </a>
                <a href={member.facebook}>
                  <FaFacebook className="size-6 text-scheme-text" />
                </a>
                <a href={member.twitter}>
                  <FaXTwitter className="size-6 text-scheme-text" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
