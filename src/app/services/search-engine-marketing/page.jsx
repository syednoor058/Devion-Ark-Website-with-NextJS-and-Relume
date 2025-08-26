import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { FaDisplay } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LuSwords } from "react-icons/lu";
import { MdLocalFlorist, MdOutlineAirlineStops } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import semHero2 from "../../../../public/images/services/search-engine-marketing/ads-analysis.jpg";
import semHero1 from "../../../../public/images/services/search-engine-marketing/ads-results.jpg";
import magnifyGlass from "../../../../public/images/services/search-engine-marketing/magnify-glass.jpg";
import searchingMan from "../../../../public/images/services/search-engine-marketing/searching.jpg";
import searchMarketer from "../../../../public/images/services/search-engine-marketing/serach-marketer.jpg";
const SearchEngineMarketing = () => {
  return (
    <>
      <ServiceHeader
        title="Search Engine Marketing"
        desc="We create high-performing SEM campaigns that put your business in front of the right audience at the right time. From keyword strategy and ad creation to campaign optimization and performance tracking, we help you generate more leads, conversions, and sales."
        images={[
          {
            src: semHero1,
            alt: "Paid Search Ads",
            title: "Targeted Google Ads Campaigns",
            desc: "Reach customers when they’re actively searching for your products or services with highly optimized ads.",
          },
          {
            src: semHero2,
            alt: "Analytics Dashboard",
            title: "Data-Driven Advertising",
            desc: "Track ROI, optimize performance, and scale campaigns with real-time analytics and insights.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        title="Smart Solutions with Smarter Features"
        features={[
          {
            icon: <LuSwords />,
            title: "Keyword Research",
            desc: "We analyze your market to identify the right keywords that drive traffic and conversions for your business.",
          },
          {
            icon: <FaDisplay />,
            title: "Compelling Ad Creatives",
            desc: "Our team creates engaging ads designed to capture attention and drive clicks.",
          },
          {
            icon: <GiArcheryTarget />,
            title: "Targeted Campaign",
            desc: "From location-based targeting to audience segmentation, we ensure your ads reach the people who matter most.",
          },
          {
            icon: <SiConvertio />,
            title: "Conversion Tracking",
            desc: "We set up advanced tracking to measure campaign performance, helping you understand where your ROI comes from.",
          },
          {
            icon: <GrOptimize />,
            title: "Continuous Optimization",
            desc: "We don’t set and forget—we monitor, test, and refine campaigns to maximize results at the lowest possible cost.",
          },
          {
            icon: <HiOutlineDocumentReport />,
            title: "Transparent Reporting",
            desc: "Get detailed reports with clear insights on performance, spend, and growth opportunities.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Visibility"
        title="Be Seen Where It Matters Most"
        desc="Search engine marketing ensures your business shows up at the top when customers are searching for solutions. We help you dominate search results and stay ahead of competitors."
        iconbox={[
          {
            icon: <MdOutlineAirlineStops />,
            title: "Top-of-Page Ads",
            desc: "Appear above organic results and capture immediate attention with highly visible ads.",
          },
          {
            icon: <MdLocalFlorist />,
            title: "Local Targeting",
            desc: "Reach customers in your specific service areas and drive traffic that converts.",
          },
        ]}
        image={searchingMan}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Market Growth"
        title="Turning Clicks Into Customers"
        desc="With the right strategy, SEM becomes more than just advertising—it becomes a growth engine. We help you turn search intent into real business results."
        image1={searchMarketer}
        alt1={"team providing software support"}
        image2={magnifyGlass}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default SearchEngineMarketing;
