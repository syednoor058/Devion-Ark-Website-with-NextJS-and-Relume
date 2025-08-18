"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const useTabAnimation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isTabActive = (index) => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return index <= activeIndex;
  };

  const progressWidth = () => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return `${(100 / (tabs.length * 2)) * (activeIndex * 2 + 1)}%`;
  };

  const circleClassName = (index) => {
    return `z-20 flex size-[0.9375rem] flex-none items-center justify-center rounded-full shadow-[0_0_0_8px_white] transition-colors duration-300 ${
      isTabActive(index) ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  const triggerClassName = (index) => {
    return `relative flex flex-1 flex-col items-center justify-center gap-2 border-0 px-0 transition-colors duration-300 data-[state=active]:bg-transparent ${
      isTabActive(index)
        ? "data-[state=active]:text-scheme-text"
        : "text-scheme-text/20"
    }`;
  };

  return {
    activeTab,
    setActiveTab,
    progressWidth,
    circleClassName,
    triggerClassName,
  };
};

export function Timeline15() {
  const tabAnimation = useTabAnimation({
    tabs: [
      {
        value: "tab-one",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
        },
      },
      {
        value: "tab-two",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 2",
          },
        },
      },
      {
        value: "tab-three",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 3",
          },
        },
      },
      {
        value: "tab-four",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 4",
          },
        },
      },
      {
        value: "tab-five",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 5",
          },
        },
      },
    ],
  });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative container">
        <div
          className="absolute bottom-[99px] z-10 h-[3px] bg-scheme-text transition-[width] duration-300 md:bottom-[58px]"
          style={{ width: tabAnimation.progressWidth() }}
        />
        <Tabs
          defaultValue="tab-one"
          onValueChange={tabAnimation.setActiveTab}
          className="relative flex flex-col"
        >
          <TabsContent
            value="tab-one"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">2020</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Our journey begins with a vision for innovative digital
                solutions.
              </h4>
              <p className="text-medium">
                In 2020, we launched our agency with a commitment to excellence.
                Our goal was to empower businesses through customized digital
                strategies.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">2021</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Expanding our services to meet the growing needs of our clients.
              </h4>
              <p className="text-medium">
                In 2021, we broadened our offerings to include social media
                marketing. This allowed us to provide comprehensive solutions
                for our clients' digital presence.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Discover" variant="secondary">
                  Discover
                </Button>
                <Button
                  title="Join"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Join
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">2022</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Achieving recognition as a leader in digital marketing
                solutions.
              </h4>
              <p className="text-medium">
                By 2022, our agency was recognized for its innovative
                approaches. We became a trusted partner for businesses seeking
                to enhance their online visibility.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Read" variant="secondary">
                  Read
                </Button>
                <Button
                  title="Connect"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Connect
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">2023</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Continuing to innovate and adapt in a rapidly changing digital
                landscape.
              </h4>
              <p className="text-medium">
                In 2023, we are focused on integrating the latest technologies
                into our services. Our commitment to client success drives us to
                stay ahead of industry trends.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Engage" variant="secondary">
                  Engage
                </Button>
                <Button
                  title="Follow"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Follow
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-five"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">2024</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Setting new benchmarks for excellence in digital marketing and
                consultancy.
              </h4>
              <p className="text-medium">
                Looking ahead to 2024, we aim to redefine industry standards.
                Our focus remains on delivering unparalleled value to our
                clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Plan" variant="secondary">
                  Plan
                </Button>
                <Button
                  title="Start"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Start
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsList className="relative mt-16 mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center justify-start border-b border-b-transparent px-[5vw] md:mb-0 md:ml-0 md:w-auto md:justify-between md:px-0">
            <TabsTrigger
              value="tab-one"
              className={tabAnimation.triggerClassName(0)}
            >
              <div className="absolute top-3.5 left-0 z-20 h-[6px] w-16 bg-gradient-to-l from-transparent to-scheme-background" />
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(0)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">2029</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className={tabAnimation.triggerClassName(1)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(1)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">2029</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className={tabAnimation.triggerClassName(2)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(2)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">2029</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-four"
              className={tabAnimation.triggerClassName(3)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(3)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">2029</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-five"
              className={tabAnimation.triggerClassName(4)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(4)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">2029</span>
              <div className="absolute top-3.5 right-0 z-0 h-2 w-16 bg-gradient-to-r from-transparent to-scheme-background" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
