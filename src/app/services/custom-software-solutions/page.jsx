import ServiceHeader from "@/components/headers/ServiceHeader";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { ImageBox } from "@/components/layouts/ImageBox";
import { OnScrollSlideText } from "@/components/layouts/OnScrollSlideText";
import { TwoSideImageBox } from "@/components/layouts/TwoSideImageBox";
import { FaMedapps } from "react-icons/fa6";
import { FiCloudLightning, FiLayout } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { LuBriefcaseBusiness, LuShieldCheck } from "react-icons/lu";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import cssHero1 from "../../../../public/images/services/custom-software-solutions/css-hero-1.jpg";
import cssHero2 from "../../../../public/images/services/custom-software-solutions/css-hero-2.jpg";
import softwareDeveloper from "../../../../public/images/services/custom-software-solutions/software-developer.jpg";
import softwareMaintanance from "../../../../public/images/services/custom-software-solutions/software-maintainance.jpg";
import softwareSupport from "../../../../public/images/services/custom-software-solutions/software-support.jpg";

const CustomSoftwareSolutions = () => {
  return (
    <>
      <ServiceHeader
        title="Custom Software Solutions"
        desc="At Devion Ark, we design and build custom software tailored to your business needs. From scalable web and mobile applications to robust admin dashboards, we deliver solutions that streamline operations, boost efficiency, and accelerate growth."
        images={[
          {
            src: cssHero1,
            alt: "Custom Software Solutions",
            title: "Smart and Scalable Mobile Apps",
            desc: "Engage your audience with intuitive, high-performance mobile apps built to deliver seamless user experiences across iOS and Android.",
          },
          {
            src: cssHero2,
            alt: "Custom Software Development",
            title: "Customizable Admin Dashboard",
            desc: "Gain complete control and real-time insights with custom dashboards designed for efficiency, security, and easy management.",
          },
        ]}
      />
      <FeaturesSection
        theme="light"
        title="Smart Solutions with Smarter Features"
        features={[
          {
            icon: <LuBriefcaseBusiness />,
            title: "Tailored to Your Business",
            desc: "Every business is unique, so your software should be too. We design customized solutions.",
          },
          {
            icon: <PiTreeStructure />,
            title: "Scalable Architecture",
            desc: "Our software grows with your business. From startups to enterprises, we build flexible and scalable systems.",
          },
          {
            icon: <FiLayout />,
            title: "Seamless User Experience",
            desc: "We prioritize user-friendly design to ensure smooth navigation and engagement. Whether it’s a mobile app, or web app.",
          },
          {
            icon: <LuShieldCheck />,
            title: "Secure & Reliable",
            desc: "Security is built into every layer of our development process. With advanced authentication, data protection, and compliance standards.",
          },
          {
            icon: <FaMedapps />,
            title: "Integration Ready",
            desc: "We make your software work smarter by connecting it with your existing tools—such as CRMs, ERPs, and payment gateways.",
          },
          {
            icon: <HiOutlineSupport />,
            title: "Support & Maintenance",
            desc: "Our partnership doesn’t end at launch. We provide continuous support, updates, and maintenance.",
          },
        ]}
      />
      <OnScrollSlideText />
      <ImageBox
        tagline="Innovation"
        title="Future-Ready Software for Modern Businesses"
        desc="At Devion Ark, we don’t just build software—we craft solutions that keep your business ahead of the curve. Our custom software combines cutting-edge technology with business-focused strategies to help you scale smarter and faster."
        iconbox={[
          {
            icon: <MdOutlineDeveloperBoard />,
            title: "Agile Development",
            desc: "We follow agile methodologies to deliver projects quickly and efficiently, ensuring flexibility and continuous improvement at every stage.",
          },
          {
            icon: <FiCloudLightning />,
            title: "Cloud-Powered Solutions",
            desc: "From SaaS platforms to enterprise tools, we leverage cloud technology to provide scalable, secure, and easily accessible software.",
          },
        ]}
        image={softwareDeveloper}
        alt="software developer working on a project"
      />
      <TwoSideImageBox
        tagline="Excellence"
        title="Software That Scales With Your Vision"
        desc="We design software with growth in mind. Whether you’re a startup building your first product or an established enterprise expanding operations, our solutions are built to adapt, evolve, and deliver long-term value."
        image1={softwareSupport}
        alt1={"team providing software support"}
        image2={softwareMaintanance}
        alt2={"software maintenance and updates team"}
      />
    </>
  );
};

export default CustomSoftwareSolutions;
