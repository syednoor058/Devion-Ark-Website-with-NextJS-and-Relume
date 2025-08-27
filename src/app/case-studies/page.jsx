import { DoubleSliderHeader } from "@/components/headers/DoubleSliderHeader";
import { CounterSlider } from "@/components/layouts/CounterSlider";
import { Portfolio } from "@/components/layouts/Portfolio";
import { ZoomOnScroll } from "@/components/layouts/ZoomOnScroll";
import mockup1 from "../../../public/images/case-studies/mockups/mockup-1.jpg";
import mockup10 from "../../../public/images/case-studies/mockups/mockup-10.jpg";
import mockup2 from "../../../public/images/case-studies/mockups/mockup-2.jpg";
import mockup3 from "../../../public/images/case-studies/mockups/mockup-3.jpg";
import mockup4 from "../../../public/images/case-studies/mockups/mockup-4.jpg";
import mockup5 from "../../../public/images/case-studies/mockups/mockup-5.jpg";
import mockup6 from "../../../public/images/case-studies/mockups/mockup-6.jpg";
import mockup7 from "../../../public/images/case-studies/mockups/mockup-7.jpg";
import mockup8 from "../../../public/images/case-studies/mockups/mockup-8.jpg";
import mockup9 from "../../../public/images/case-studies/mockups/mockup-9.jpg";
import scrollMockupMobile from "../../../public/images/case-studies/mockups/mockup-scroll-mobile.jpg";
import scrollMockup from "../../../public/images/case-studies/mockups/mockup-scroll.jpg";

export default function Page() {
  return (
    <>
      <DoubleSliderHeader
        title={
          <>
            Showcasing Growth Through
            <br />
            <span className="bg-gradient-to-tr from-accentColor2 to-accentColor1 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </>
        }
        desc="Every project tells a story of innovation, creativity, and measurable results. From custom software to digital marketing campaigns, our case studies showcase how we help businesses grow, adapt, and succeed in the digital era."
        primaryButton="Explore More"
        secondaryButton="Start Your Project"
        images1={[mockup1, mockup2, mockup3, mockup4, mockup5]}
        images2={[mockup6, mockup7, mockup8, mockup9, mockup10]}
      />
      <ZoomOnScroll
        tagline="Excellence in Action"
        title="Every Project Begins with Understanding"
        desc="We believe the foundation of a successful project lies in truly understanding the client’s needs. From deep research to creative brainstorming, our approach ensures every solution we build is meaningful, practical, and result-driven."
        primaryButton="View Details"
        secondaryButton="Work With Us"
        image={scrollMockup}
        mobileImage={scrollMockupMobile}
      />
      <CounterSlider
        cards={[
          {
            tagline: "Discovery & Research",
            title: "Laying the Foundation",
            desc: "Every great project starts with understanding. We take time to learn about your business, your audience, and your goals. Through workshops, competitor analysis, and market research, we identify the challenges and opportunities that matter most. This phase ensures we don’t just deliver a product, but a solution tailored to your unique needs.",
          },
          {
            tagline: "Strategy & Planning",
            title: "Mapping the Road Ahead",
            desc: "With insights in hand, we create a clear roadmap for success. From defining project milestones to wireframing user journeys, this stage transforms ideas into actionable plans. Our strategies are always data-driven and business-focused, giving you confidence that every decision supports your long-term growth.",
          },
          {
            tagline: "Design & Development",
            title: "Turning Ideas Into Reality",
            desc: "Here’s where creativity meets technology. Our designers craft engaging interfaces while our developers bring them to life with clean, scalable code. Whether it’s a custom dashboard, a mobile app, or a marketing campaign, we build with precision and flexibility, ensuring your solution is both visually striking and technically reliable.",
          },
          {
            tagline: "Testing, Launch & Beyond",
            title: "Delivering With Excellence",
            desc: "Before anything goes live, we test thoroughly to ensure seamless performance across all devices and platforms. But our journey doesn’t end at launch — we continue to monitor, optimize, and refine your solution, making sure it evolves alongside your business. With us, you get a partner committed to long-term success, not just a one-time delivery.",
          },
        ]}
      />
      <Portfolio expanded={true} />
    </>
  );
}
