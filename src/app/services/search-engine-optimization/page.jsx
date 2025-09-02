import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { AiOutlineAudit } from "react-icons/ai";
import { FaDisplay, FaLink } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";
import {
  MdContentPaste,
  MdLocalFlorist,
  MdOutlineAirlineStops,
  MdOutlineMilitaryTech,
} from "react-icons/md";
import businessGrowth from "../../../../public/images/services/search-engine-optimization/business-growth.jpg";
import keywordsResearch from "../../../../public/images/services/search-engine-optimization/keyword-research.jpg";
import keywords from "../../../../public/images/services/search-engine-optimization/keywords.jpg";
import seoLaptop from "../../../../public/images/services/search-engine-optimization/seo-laptop.jpg";
import seoTeam from "../../../../public/images/services/search-engine-optimization/seo-team.jpg";

export const metadata = {
  title: "SEO - Rank Higher & Drive Organic Traffic | Devion Ark",
  description:
    "Dominate search results with Devion Ark's proven SEO strategies. We optimize your website for better visibility, traffic, and conversions.",
};

const SearchEngineOptimization = () => {
  return (
    <>
      <ServiceHeader
        title="Search Engine Optimization"
        desc="We help businesses climb search rankings and attract qualified traffic. Our SEO strategies combine technical expertise, content optimization, and authority building to boost visibility, drive organic growth, and turn visitors into customers."
        images={[
          {
            src: keywords,
            alt: "Keyword Research",
            title: "Smart Keyword Strategies",
            desc: "Target the right keywords that bring in relevant traffic and long-term visibility.",
          },
          {
            src: seoLaptop,
            alt: "SEO Dashboard",
            title: "Trackable SEO Performance",
            desc: "Monitor rankings, traffic, and growth with transparent SEO reports and analytics.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        features={[
          {
            icon: <AiOutlineAudit />,
            title: "Comprehensive Audit",
            desc: "We identify strengths, weaknesses, and opportunities with in-depth SEO audits.",
          },
          {
            icon: <FaDisplay />,
            title: "On-Page Optimization",
            desc: "From meta tags to content structure, we optimize every element of your site for search engines.",
          },
          {
            icon: <MdOutlineMilitaryTech />,
            title: "Technical SEO",
            desc: "Improve crawlability, site speed, and mobile performance to ensure search engines can index your site efficiently.",
          },
          {
            icon: <MdContentPaste />,
            title: "Content Strategy",
            desc: "Create and optimize content that engages users while ranking higher for targeted keywords.",
          },
          {
            icon: <FaLink />,
            title: "Link Building",
            desc: "Build trust and authority with high-quality backlinks from relevant, credible sources.",
          },
          {
            icon: <LuGlobe />,
            title: "Local & Global SEO",
            desc: "Whether you want to rank in your local city or worldwide, we tailor strategies to fit your goals.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Visibility"
        title="Get Found Where Your Customers Search"
        desc="SEO ensures your business shows up when it matters most. We help you dominate search results so potential customers find you—not your competitors."
        iconbox={[
          {
            icon: <MdOutlineAirlineStops />,
            title: "Higher Rankings",
            desc: "Climb search engine results pages and stay ahead of the competition.",
          },
          {
            icon: <MdLocalFlorist />,
            title: "Local Presence",
            desc: "Reach more nearby customers with targeted local SEO strategies.",
          },
        ]}
        image={seoTeam}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Market Growth"
        title="Turning Organic Traffic Into Customers"
        desc="SEO is more than traffic—it’s about results. With the right strategy, we convert visitors into paying customers and long-term brand advocates."
        image1={businessGrowth}
        alt1={"team providing software support"}
        image2={keywordsResearch}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default SearchEngineOptimization;
