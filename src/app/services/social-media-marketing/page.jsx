import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { BiBookContent } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { LuJoystick } from "react-icons/lu";
import { MdOutlineAnalytics, MdOutlinePeopleAlt } from "react-icons/md";
import { PiBinocularsFill, PiStrategyBold } from "react-icons/pi";
import ssmHero1 from "../../../../public/images/services/social-media-marketing/insta-filter.jpg";
import ssmHero2 from "../../../../public/images/services/social-media-marketing/message-conversion.jpg";
import socialInfluncer from "../../../../public/images/services/social-media-marketing/social-influencer.jpg";
import socialMarketer from "../../../../public/images/services/social-media-marketing/social-marketer.jpg";
import checkingMobile from "../../../../public/images/services/social-media-marketing/user-checking-phone.jpg";

const SocialMediaMarketing = () => {
  return (
    <>
      <ServiceHeader
        title="Social Media Marketing"
        desc="At Devion Ark, we help businesses create meaningful connections with their audience. From strategy and content creation to paid campaigns and analytics, our social media marketing services are designed to increase reach, engagement, and conversions."
        images={[
          {
            src: ssmHero1,
            alt: "Creative Campaigns",
            title: "Engaging Content That Connects",
            desc: "Captivating visuals and creative storytelling that keep your audience scrolling, sharing, and engaging.",
          },
          {
            src: ssmHero2,
            alt: "Ads & Analytics",
            title: "Data-Driven Campaigns",
            desc: "Sell smarter with feature-rich online stores that are secure, scalable, and optimized for growth.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        title="Smart Solutions with Smarter Features"
        features={[
          {
            icon: <PiStrategyBold />,
            title: "Custom Strategy",
            desc: "Every business is unique. We create tailored social media strategies that align with your goals, audience, and industry.",
          },
          {
            icon: <BiBookContent />,
            title: "Content Management",
            desc: "From eye-catching graphics to compelling captions, we produce content that engages and resonates with your followers.",
          },
          {
            icon: <BsCoin />,
            title: "Paid Advertising Campaigns",
            desc: "Reach the right audience with targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok.",
          },
          {
            icon: <MdOutlinePeopleAlt />,
            title: "Community Engagement",
            desc: "We help you build a loyal following by actively engaging with comments, messages, and audience interactions.",
          },
          {
            icon: <MdOutlineAnalytics />,
            title: "Analytics & Reporting",
            desc: "Get clear insights into campaign performance with detailed reports to track growth, engagement, and ROI.",
          },
          {
            icon: <LuJoystick />,
            title: "Cross-Platform Expertise",
            desc: "From Instagram reels to LinkedIn campaigns, we handle multiple platforms with strategies tailored to each.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Creativity"
        title="Content That Captures Attention"
        desc="Social media thrives on creativity. We craft high-quality visuals, videos, and copy that grab attention, inspire action, and keep your brand top of mind."
        iconbox={[
          {
            icon: <PiBinocularsFill />,
            title: "Eye-Catching Visuals",
            desc: "Our designers create graphics and videos that stop the scroll and amplify your message.",
          },
          {
            icon: <FiBookOpen />,
            title: "Storytelling That Sells",
            desc: "We use storytelling techniques to make your brand relatable, memorable, and share-worthy.",
          },
        ]}
        image={socialMarketer}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Business Growth"
        title="Turning Followers Into Customers"
        desc="It’s not just about likes—it’s about results. We help convert your social media presence into a powerful growth engine for your business."
        image1={socialInfluncer}
        alt1={"team providing software support"}
        image2={checkingMobile}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default SocialMediaMarketing;
