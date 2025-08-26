"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FeatureCard = ({ feature, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const animatedWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const width = { width: useTransform(animatedWidth, [0, 1], ["0%", "100%"]) };
  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold leading-none md:mt-0 md:hidden md:text-[14rem]">
        {feature.number}
      </div>
      <div
        ref={ref}
        className="mb-8 mt-8 h-0.5 w-full bg-neutral-lighter md:mt-0"
      >
        <motion.div className="h-0.5 w-8 bg-scheme-text" style={width} />
      </div>
      {children}
    </div>
  );
};

const useRelume = () => {
  const ref = useRef(null);
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = isTablet
    ? useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"]
      )
    : useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ["0%", "0%", "-25%", "-35%", "-50%", "-75%"]
      );
  return { ref, y };
};

export function Layout486() {
  const useScroll = useRelume();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" ref={useScroll.ref}>
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <h1 className="text-[6rem] leading-none font-bold md:text-[14rem]">
              4
            </h1>
            <motion.div className="text-center" style={{ y: useScroll.y }}>
              <h1 className="text-[6rem] leading-none font-bold md:text-[14rem]">
                {1}
              </h1>
              <h1 className="text-[6rem] leading-none font-bold md:text-[14rem]">
                {2}
              </h1>
              <h1 className="text-[6rem] leading-none font-bold md:text-[14rem]">
                {3}
              </h1>
              <h1 className="text-[6rem] leading-none font-bold md:text-[14rem]">
                {4}
              </h1>
            </motion.div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            <FeatureCard
              feature={{
                number: "01",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Success</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Transforming Challenges into Success Stories
              </h2>
              <p className="text-medium">
                Explore our diverse range of case studies that showcase our
                expertise. Each project highlights our innovative solutions and
                the impact we've made for our clients.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="View" variant="secondary">
                  View
                </Button>
                <Button title="Details" variant="link" size="link">
                  Details
                </Button>
              </div>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "02",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Success</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Transforming Challenges into Success Stories
              </h2>
              <p className="text-medium">
                Explore our diverse range of case studies that showcase our
                expertise. Each project highlights our innovative solutions and
                the impact we've made for our clients.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="View" variant="secondary">
                  View
                </Button>
                <Button title="Details" variant="link" size="link">
                  Details
                </Button>
              </div>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "03",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Success</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Transforming Challenges into Success Stories
              </h2>
              <p className="text-medium">
                Explore our diverse range of case studies that showcase our
                expertise. Each project highlights our innovative solutions and
                the impact we've made for our clients.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="View" variant="secondary">
                  View
                </Button>
                <Button title="Details" variant="link" size="link">
                  Details
                </Button>
              </div>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "04",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Success</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Transforming Challenges into Success Stories
              </h2>
              <p className="text-medium">
                Explore our diverse range of case studies that showcase our
                expertise. Each project highlights our innovative solutions and
                the impact we've made for our clients.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="View" variant="secondary">
                  View
                </Button>
                <Button title="Details" variant="link" size="link">
                  Details
                </Button>
              </div>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
