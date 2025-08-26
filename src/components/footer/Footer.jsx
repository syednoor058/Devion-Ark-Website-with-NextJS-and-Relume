"use client";

import { HOME } from "@/routes/websiteRoute";
import Image from "next/image";
import { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
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
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-7 md:gap-y-16 md:pb-10 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-14">
          <div className="flex flex-col">
            <a href={HOME} className="mb-2.5 md:mb-3">
              <Image
                src={logo}
                alt="logo"
                className="block h-7 md:h-8 lg:h-10 w-auto"
              />
            </a>
            <p className="mb-5 md:mb-6">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
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
                  className="border border-neutral-500 px-5 bg-transparent placeholder:text-neutral-500 rounded-full py-3"
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
            <ul className="flex flex-wrap gap-4 mt-5">
              <li className="underline">
                <a href="#">
                  <BiLogoFacebookCircle className="size-6" />
                </a>
              </li>
              <li className="underline">
                <a href="#">
                  <BiLogoInstagram className="size-6" />
                </a>
              </li>
              <li className="underline">
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
              </li>
              <li className="underline">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
              </li>
              <li className="underline">
                <a href="#">
                  <BiLogoYoutube className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-5 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 font-semibold md:mb-4 text-white">
                Quick Links
              </h2>
              <ul>
                <li className=" text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/"
                    text="Homepage"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/about"
                    text="About Us"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/services"
                    text="Services"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/articles"
                    text="Articles"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/contact"
                    text="Contact Us"
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
                    text="Case Studies"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/#faq"
                    text="FAQ"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/#testimonials"
                    text="Testimonials"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/"
                    text="Career"
                    icon={false}
                  />
                </li>
                <li className="pt-1 text-sm lg:text-base">
                  <LinkButton
                    className="text-neutral-300"
                    url="/supports"
                    text="Supports"
                    icon={false}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-800" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">
            © 2024-2025 Devion Ark Digital Solutions. All rights reserved.
          </p>
          <ul className="flex flex-col md:flex-row md:gap-4 items-center">
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
