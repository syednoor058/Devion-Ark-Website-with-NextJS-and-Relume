import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { AiOutlineSolution } from "react-icons/ai";
import { GrSupport } from "react-icons/gr";
import { LuBriefcaseBusiness, LuDatabaseZap } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTransform } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import businessPlanning from "../../../../public/images/services/business-consultancy/business-planning.jpg";
import consulting from "../../../../public/images/services/business-consultancy/consulting.jpg";
import conversation from "../../../../public/images/services/business-consultancy/conversation.jpg";
import handShake from "../../../../public/images/services/business-consultancy/hand-shake.jpg";
import mutualTrust from "../../../../public/images/services/business-consultancy/mutual-trust.jpg";

const SearchEngineOptimization = () => {
  return (
    <>
      <ServiceHeader
        title="Business Consultancy"
        desc="We provide expert business consultancy to help companies scale, innovate, and thrive. From strategy and operations to digital transformation, our tailored consulting services empower you to make smarter decisions and achieve sustainable success."
        images={[
          {
            src: handShake,
            alt: "Strategic Planning",
            title: "Tailored Growth Strategies",
            desc: "We analyze your business and industry to create strategies that align with your long-term goals.",
          },
          {
            src: businessPlanning,
            alt: "Process Optimization",
            title: "Smarter, Leaner Operations",
            desc: "Streamline workflows and boost efficiency with solutions designed to cut costs and maximize productivity.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        title="Smart Solutions with Smarter Features"
        features={[
          {
            icon: <MdOutlineAnalytics />,
            title: "Market Analysis",
            desc: "Gain insights into your industry landscape and position your business for competitive advantage.",
          },
          {
            icon: <LuBriefcaseBusiness />,
            title: "Business Planning",
            desc: "Develop clear, actionable roadmaps that set your business up for sustainable growth.",
          },
          {
            icon: <VscServerProcess />,
            title: "Process Improvement",
            desc: "Identify inefficiencies and implement systems to optimize operations and performance.",
          },
          {
            icon: <TbTransform />,
            title: "Digital Transformation",
            desc: "Leverage modern technologies to improve customer experiences and business scalability.",
          },
          {
            icon: <RiMoneyDollarCircleLine />,
            title: "Financial & Risk Advisory",
            desc: "Make confident decisions with expert guidance on budgeting, investments, and risk management.",
          },
          {
            icon: <GrSupport />,
            title: "Growth Support",
            desc: "Whether you’re entering new markets or scaling operations, we help you grow strategically.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Strategy"
        title="Insights That Drive Smarter Decisions"
        desc="We help you uncover opportunities and make informed decisions that move your business forward. Our consultancy goes beyond advice—we provide actionable solutions that work. We believe in collaboration. Our consultants work closely with your team to understand challenges, identify solutions, and implement strategies together."
        iconbox={[
          {
            icon: <LuDatabaseZap />,
            title: "Data-Driven Insights",
            desc: "We combine analytics with market expertise to provide clarity in complex situations.",
          },
          {
            icon: <AiOutlineSolution />,
            title: "Practical Solutions",
            desc: "Our recommendations are designed for real-world application, not just theory.",
          },
        ]}
        image={mutualTrust}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Business Growth"
        title="Building Stronger, Smarter Businesses"
        desc="With the right strategies in place, your business can scale confidently. Our consultancy equips you with the tools, systems, and insights needed to grow sustainably and stay competitive."
        image1={consulting}
        alt1={"team providing software support"}
        image2={conversation}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default SearchEngineOptimization;
