"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import { GoogleLogo, StarFull } from "relume-icons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  const options = {
    loop: true,
  };

  const plugins = [
    Autoplay({
      delay: 5000,
    }),
  ];

  return {
    email,
    handleSetEmail,
    password,
    handleSetPassword,
    api,
    setApi,
    current,
    handleSubmit,
    handleDotClick,
    dotClassName,
    plugins,
    options,
  };
};

export function Login5() {
  const formState = useForm();
  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute top-0 right-0 left-0 z-10 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-between">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo text"
            />
          </a>
        </div>
        <div className="relative mx-[5vw] flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mx-auto mb-6 w-full max-w-lg text-center md:mb-8">
              <h1 className="heading-h2 mb-5 font-bold md:mb-6">Log In</h1>
              <p className="text-medium">
                Access your account to unlock exclusive features.
              </p>
            </div>
            <form
              className="grid grid-cols-1 gap-6"
              onSubmit={formState.handleSubmit}
            >
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  required={true}
                />
              </div>
              <div className="grid w-full items-center">
                <div className="flex items-start justify-between">
                  <Label htmlFor="password" className="mb-2">
                    Password*
                  </Label>
                  <a href="#" className="underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={formState.handleSetPassword}
                  required={true}
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant={undefined}
                  size={undefined}
                  iconLeft={undefined}
                  iconRight={undefined}
                >
                  Log in
                </Button>
                <Button
                  variant="secondary"
                  size={undefined}
                  iconLeft={<GoogleLogo className="size-6 text-scheme-text" />}
                  iconRight={undefined}
                  className="gap-x-3"
                >
                  Log in with Google
                </Button>
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>Don't have an account?</p>
              <a href="#" className="underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-scheme-foreground px-[5vw] pt-16 pb-20 md:pt-20 md:pb-24 lg:pb-20">
          <Carousel
            setApi={formState.setApi}
            opts={formState.options}
            plugins={formState.plugins}
            className="overflow-hidden"
          >
            <div className="relative pb-12 md:pb-20">
              <CarouselContent>
                <CarouselItem className="max-w-full">
                  <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                    <div className="flex">
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                    </div>
                    <blockquote className="heading-h5 my-6 font-bold md:my-8">
                      "A game changer for our marketing strategy!"
                    </blockquote>
                    <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
                      <div className="mb-4 shrink-0 md:mr-5 md:mb-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                          alt="Testimonial avatar 1"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div className="mb-4 md:mb-0">
                        <p className="font-semibold">Emily Johnson</p>
                        <p>Director, Marketing Solutions</p>
                      </div>
                      <div className="mx-5 hidden w-px self-stretch bg-scheme-border md:block" />
                      <div className="shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo-v2.svg"
                          alt="Webflow logo 1"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="max-w-full">
                  <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                    <div className="flex">
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                    </div>
                    <blockquote className="heading-h5 my-6 font-bold md:my-8">
                      "A game changer for our marketing strategy!"
                    </blockquote>
                    <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
                      <div className="mb-4 shrink-0 md:mr-5 md:mb-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                          alt="Testimonial avatar 2"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div className="mb-4 md:mb-0">
                        <p className="font-semibold">Emily Johnson</p>
                        <p>Director, Marketing Solutions</p>
                      </div>
                      <div className="mx-5 hidden w-px self-stretch bg-scheme-border md:block" />
                      <div className="shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Webflow logo 2"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="max-w-full">
                  <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                    <div className="flex">
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                      <StarFull className="size-5 text-scheme-text" />
                    </div>
                    <blockquote className="heading-h5 my-6 font-bold md:my-8">
                      "A game changer for our marketing strategy!"
                    </blockquote>
                    <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
                      <div className="mb-4 shrink-0 md:mr-5 md:mb-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                          alt="Testimonial avatar 3"
                          className="size-14 rounded-full object-cover"
                        />
                      </div>
                      <div className="mb-4 md:mb-0">
                        <p className="font-semibold">Emily Johnson</p>
                        <p>Director, Marketing Solutions</p>
                      </div>
                      <div className="mx-5 hidden w-px self-stretch bg-scheme-border md:block" />
                      <div className="shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Webflow logo 3"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute bottom-0 flex w-full items-center justify-center gap-12">
                <CarouselPrevious
                  className="static hidden h-12 -translate-y-0 bg-transparent md:flex"
                  variant="link"
                />
                <div className="flex h-12 items-center justify-center">
                  <button
                    onClick={formState.handleDotClick(0)}
                    className={formState.dotClassName(0)}
                  />
                  <button
                    onClick={formState.handleDotClick(1)}
                    className={formState.dotClassName(1)}
                  />
                  <button
                    onClick={formState.handleDotClick(2)}
                    className={formState.dotClassName(2)}
                  />
                </div>
                <CarouselNext
                  className="static hidden h-12 -translate-y-0 bg-transparent md:flex"
                  variant="link"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <footer className="absolute right-0 bottom-0 left-0 flex h-16 w-full items-center justify-center px-[5%] md:h-18 md:justify-start">
          <p className="text-small">© 2024 Relume</p>
        </footer>
      </div>
    </section>
  );
}
