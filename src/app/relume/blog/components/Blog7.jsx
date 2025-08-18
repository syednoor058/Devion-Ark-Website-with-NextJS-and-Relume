"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export function Blog7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Explore Our Latest Insights
            </h1>
            <p className="text-medium">
              Stay updated with our expert blog posts.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <Card className="mb-12 grid grid-cols-1 items-center md:mb-16 md:grid-cols-2">
            <a href="#" className="size-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[8/6] size-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12">
              <div className="flex w-full flex-col items-start justify-start">
                <p className="text-small mb-2 font-semibold">Category</p>
                <a className="mb-2" href="#">
                  <h3 className="heading-h4 mb-2 font-bold">
                    Maximize Your Online Presence
                  </h3>
                </a>
                <p>
                  Discover how to enhance your brand visibility and engagement.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">Jane Doe</h6>
                  <div className="flex items-center">
                    <p className="text-small">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Tabs defaultValue="view-all" className="flex flex-col justify-start">
            <TabsList className="mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              <TabsTrigger
                value="view-all"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                View all
              </TabsTrigger>
              <TabsTrigger
                value="category-one"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                Marketing Tips
              </TabsTrigger>
              <TabsTrigger
                value="category-two"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                Tech Insights
              </TabsTrigger>
              <TabsTrigger
                value="category-three"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                Business Growth
              </TabsTrigger>
              <TabsTrigger
                value="category-four"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                SEO Strategies
              </TabsTrigger>
              <TabsTrigger
                value="category-five"
                className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
              >
                Category Five
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="view-all"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-four"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-five"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Marketing</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        The Future of Digital Marketing
                      </h2>
                    </a>
                    <p>
                      Insights into upcoming trends and strategies for success.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">John Smith</h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Feb 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Trends</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Effective SEO Techniques
                      </h2>
                    </a>
                    <p>
                      Learn how to improve your search rankings and traffic.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Emily Clark
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">20 Mar 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">6 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">SEO</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Boost Your Brand Awareness
                      </h2>
                    </a>
                    <p>
                      Strategies to elevate your brand in a competitive market.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Michael Lee
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">05 Apr 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Branding</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Navigating Social Media Marketing
                      </h2>
                    </a>
                    <p>Tips for leveraging social platforms effectively.</p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Sara Johnson
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">12 May 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Social</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Understanding Analytics for Growth
                      </h2>
                    </a>
                    <p>
                      Utilize data to drive your business decisions effectively.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          David Brown
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">30 Jun 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">9 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="flex size-full flex-col items-center justify-start">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </a>
                  <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                    <p className="text-small mb-2 font-semibold">Analytics</p>
                    <a className="mb-2" href="#">
                      <h2 className="heading-h5 font-bold">
                        Creating Compelling Content Strategies
                      </h2>
                    </a>
                    <p>
                      Engage your audience with effective content creation
                      techniques.
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="mr-4 shrink-0">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Laura White
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">18 Aug 2022</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
