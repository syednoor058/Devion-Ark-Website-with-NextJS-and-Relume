"use client";

import { HOME } from "@/routes/websiteRoute";
import Image from "next/image";
import { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import logo from "../../../public/images/logo/logo.png";
import { LinkButton, SubscribeButton } from "../buttons/Buttons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer() {
  const formState = useForm();
  return (
    <footer
      id="footer"
      className="px-[5%] pt-12 md:pt-18 lg:pt-20 pb-6 md:pb-8 lg:pb-10 bg-black text-neutral-300"
    >
      <div className="">
        <div className="w-full flex flex-col gap-x-[8vw] gap-y-12 pb-7 md:gap-y-16 md:pb-10 lg:flex-row lg:gap-y-4 lg:pb-14 md:justify-between">
          <div className="lg:w-[50%] flex flex-col">
            <a href={HOME} className="mb-2.5 md:mb-3">
              <Image
                src={logo}
                alt="logo"
                className="block h-7 md:h-8 lg:h-10 w-auto"
              />
            </a>
            <div className="w-full flex flex-row gap-8 mt-5 mb-10">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">Address:</p>
                <p className="text-sm">
                  8 Tootpara Central Road,
                  <br />
                  Khulna-9100, Bangladesh
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">Contact:</p>
                <p className="text-sm">
                  +8801782-734573
                  <br />
                  info@devionark.com
                </p>
              </div>
            </div>
            <div className="w-full">
              <form
                className="mb-3 grid gap-x-2 gap-y-2 grid-cols-[1fr_max-content] md:gap-y-2"
                onSubmit={formState.handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="border border-neutral-500 px-5 bg-transparent placeholder:text-neutral-500 rounded-sm py-3"
                />
                <SubscribeButton
                  url="#"
                  text="Subscribe"
                  className="font-bold"
                />
              </form>
              <p className="text-xs pt-1">
                * By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div>
            <ul className="flex flex-wrap gap-4 mt-5 text-neutral-300">
              <li className="">
                <a href="#">
                  <BiLogoFacebookCircle className="size-7 hover:text-accentColor1 transition-colors duration-300" />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <BiLogoInstagram className="size-7 hover:text-accentColor1 transition-colors duration-300" />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <FaXTwitter className="size-7 hover:text-accentColor1 transition-colors duration-300 p-0.5" />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-7 hover:text-accentColor1 transition-colors duration-300" />
                </a>
              </li>
              <li className="">
                <a href="#">
                  <IoLogoYoutube className="size-7 hover:text-accentColor1 transition-colors duration-300" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-y-5 md:flex-row  md:gap-x-32 lg:gap-x-24 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 font-semibold md:mb-4 text-white">
                Quick Links
              </h2>
              <ul>
                <li className=" text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/"
                    text="About Us"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/about"
                    text="Services"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/services"
                    text="Contact Us"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/articles"
                    text="Blog"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/contact"
                    text="Careers"
                    icon={false}
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 font-semibold md:mb-4 text-white">
                Resources
              </h2>
              <ul>
                <li className="text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/case-studies"
                    text="Testimonials"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/#faq"
                    text="Case Studies"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/#testimonials"
                    text="FAQs"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/"
                    text="Support"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/supports"
                    text="Resources"
                    icon={false}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-800" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 lg:flex-row lg:items-center md:pt-8 md:pb-0 gap-5">
          <p className="">© 2024-2025 Devion Ark. All rights reserved.</p>
          <ul className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <li className="text-sm lg:text-base">
              <LinkButton
                className="text-neutral-300"
                url="/case-studies"
                text="Privacy Policy"
                icon={false}
              />
            </li>
            <li className=" text-sm lg:text-base">
              <LinkButton
                className="text-neutral-300"
                url="/#faq"
                text="Terms of Service"
                icon={false}
              />
            </li>
            <li className=" text-sm lg:text-base">
              <LinkButton
                className="text-neutral-300"
                url="/#testimonials"
                text="Cookies Policy"
                icon={false}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
