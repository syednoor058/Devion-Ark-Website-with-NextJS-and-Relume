"use client";

import { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { LinkButton, PrimaryButton } from "../buttons/Buttons";

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
      className="px-[5%] pt-12 md:pt-18 lg:pt-20 pb-6 md:pb-8 lg:pb-10 bg-neutral-100 dark:bg-black"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
                className="inline-block dark:invert-100"
              />
            </a>
            <p className="mb-5 md:mb-6">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="border border-borderColor px-5 bg-transparent placeholder:text-neutral-400 dark:placeholder:text-neutral-700"
                />
                <PrimaryButton
                  url="#"
                  text="Subscribe"
                  className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-800"
                />
              </form>
              <p className="text-xs">
                * By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-titleColor">
                Quick Links
              </h2>
              <ul>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/" text="Homepage" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/about" text="About Us" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/services" text="Services" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/articles" text="Articles" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/contact" text="Contact Us" icon={false} />
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-titleColor">
                Resources
              </h2>
              <ul>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton
                    url="/case-studies"
                    text="Case Studies"
                    icon={false}
                  />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/#faq" text="FAQ" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton
                    url="/#testimonials"
                    text="Testimonials"
                    icon={false}
                  />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/" text="Career" icon={false} />
                </li>
                <li className="pt-2 text-sm lg:text-base">
                  <LinkButton url="/supports" text="Supports" icon={false} />
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4 text-titleColor">
                Connect With Us
              </h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm lg:text-base">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm lg:text-base">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm lg:text-base">
                  <a href="#" className="flex items-center gap-3">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm lg:text-base">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm lg:text-base">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-300 dark:bg-neutral-800" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">
            © 2024-2025 Devion Ark Digital Solutions. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
