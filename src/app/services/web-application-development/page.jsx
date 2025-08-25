import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { IoCogSharp, IoSearch } from "react-icons/io5";
import { LuPaintbrushVertical, LuWrench } from "react-icons/lu";
import { MdOutlineLeaderboard } from "react-icons/md";
import wadHero2 from "../../../../public/images/services/web-app-development/ecommerce-web-app.jpg";
import wadHero1 from "../../../../public/images/services/web-app-development/gym-business-web.jpg";
import webDesign from "../../../../public/images/services/web-app-development/web-design.jpg";
import webDeveloper from "../../../../public/images/services/web-app-development/web-developer.jpg";
import websiteMock from "../../../../public/images/services/web-app-development/website-mock.jpg";

const WebApplicationDevelopment = () => {
  return (
    <>
      <ServiceHeader
        title="Website Development That Drives Results"
        desc="Your website is more than just a digital presence—it’s the face of your brand. At Devion Ark, we design and develop fast, responsive, and user-friendly websites that engage your audience, build trust, and convert visitors into loyal customers."
        images={[
          {
            src: wadHero1,
            alt: "Stunning & Functional Websites",
            title: "Stunning & Functional Websites",
            desc: "From corporate sites to creative portfolios, we craft visually striking websites tailored to your brand identity and goals.",
          },
          {
            src: wadHero2,
            alt: "eCommerce Website",
            title: "Comprehensive eCommerce Website",
            desc: "Sell smarter with feature-rich online stores that are secure, scalable, and optimized for growth.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        title="Smart Solutions with Smarter Features"
        features={[
          {
            icon: <FiLayout />,
            title: "Custom Design",
            desc: "We create websites tailored to your brand, ensuring a unique digital experience that sets you apart from the competition.",
          },
          {
            icon: <FaMobileAlt />,
            title: "Fully Responsive",
            desc: "Every website we build looks and performs beautifully across all devices—desktop, tablet, and mobile.",
          },
          {
            icon: <IoSearch />,
            title: "SEO-Friendly Structure",
            desc: "Our websites are optimized for search engines from the ground up, helping you rank higher and attract more visitors.",
          },
          {
            icon: <AiOutlineThunderbolt />,
            title: "Fast & Secure",
            desc: "Speed and security are priorities. We build lightweight, high-performance websites with strong protection against threats.",
          },
          {
            icon: <LuWrench />,
            title: "Scalable & Future-Ready",
            desc: "Whether you’re starting small or aiming big, our websites are built to grow with your business.",
          },
          {
            icon: <IoCogSharp />,
            title: "Easy to Manage",
            desc: "With intuitive content management systems (CMS), you can update your website easily—no coding required.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Innovation"
        title="Modern Websites for Modern Audiences"
        desc="We combine creativity with the latest technology to deliver websites that captivate visitors and provide seamless experiences. Your brand deserves a digital presence that feels both fresh and future-proof."
        iconbox={[
          {
            icon: <LuPaintbrushVertical />,
            title: "User-Centered Design",
            desc: "We craft interfaces that are intuitive and engaging, ensuring every visitor has a smooth journey.",
          },
          {
            icon: <MdOutlineLeaderboard />,
            title: "Conversion-Focused",
            desc: "Our websites are strategically designed to guide visitors toward action, boosting sales, leads, and inquiries.",
          },
        ]}
        image={webDeveloper}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Partnership"
        title="Digital Experiences That Inspire Trust"
        desc="We build websites that don’t just look great—they build credibility. With a balance of creativity, performance, and strategy, your website becomes a trusted hub for your audience."
        image1={webDesign}
        alt1={"team providing software support"}
        image2={websiteMock}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default WebApplicationDevelopment;
