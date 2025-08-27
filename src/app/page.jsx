import { ImageGallery } from "@/components/gallery/ImageGallery";
import { Empower } from "@/components/home/Empower";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import FeaturesSection from "@/components/layouts/FeaturesSection";
import { MiddleImageIconBoxSection } from "@/components/layouts/MiddleImageIconBoxSection";
import { Portfolio } from "@/components/layouts/Portfolio";
import { Testimonials } from "@/components/testimonials/Testimonials";
import LogoCloud from "@/components/ui/logo-cloud";
import Head from "next/head";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaNetworkWired, FaTruckPickup } from "react-icons/fa6";
import { GiBinoculars } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { LuWrench } from "react-icons/lu";
import { MdOutlineCloudUpload, MdOutlinePeopleAlt } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import canteen from "../../public/images/Gallery/canteen.jpg";
import meeting from "../../public/images/Gallery/meeting.jpg";
import officeCollegue from "../../public/images/Gallery/office-collegues.jpg";
import officeOutside from "../../public/images/Gallery/office-outside.jpg";
import officeParty from "../../public/images/Gallery/office-party.jpg";
import playTime from "../../public/images/Gallery/play-time.jpg";
import workPlace from "../../public/images/Gallery/work-place.jpg";
import mutualTrustImg from "../../public/images/mutual-trust.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/" />
      </Head>
      <Hero description="We are a digital-first agency helping businesses grow through custom software, web development, and performance-driven marketing. From strategic planning to execution, we build tailored solutions that boost visibility, automate workflows, and drive real results." />

      <FeaturesSection
        title={<>Helping Businesses Overcome Digital Growth Challenges</>}
        features={[
          {
            icon: <AiOutlineThunderbolt />,
            title: "High Online Visibility",
            desc: "Struggling to get found? We help you rank higher with SEO and paid ads that drive real traffic.",
          },
          {
            icon: <MdOutlineCloudUpload />,
            title: "Connected Systems",
            desc: "Tired of juggling spreadsheets? Our custom software brings your business data into one centralized place.",
          },
          {
            icon: <TbPigMoney />,
            title: "Optimized Ad Spend",
            desc: "Don't burn your budget. We build performance-driven ad campaigns that deliver more for every dollar.",
          },
          {
            icon: <MdOutlinePeopleAlt />,
            title: "Strong Social Presence",
            desc: "We turn dull feeds into engaging content engines with strong visuals and consistent strategy.",
          },
          {
            icon: <CgWebsite />,
            title: "Professional Website",
            desc: "We redesign or rebuild fast, modern web apps and sites that keep users engaged and convert better.",
          },
          {
            icon: <GoGoal />,
            title: "Sharp Digital Strategy",
            desc: "If your digital growth feels directionless, we provide expert consulting to help you plan and scale.",
          },
        ]}
      />

      <Services />
      <LogoCloud />
      <Portfolio />
      <Empower />
      <ImageGallery
        images={[
          officeCollegue,
          officeOutside,
          workPlace,
          officeParty,
          meeting,
          playTime,
          canteen,
        ]}
      />

      <MiddleImageIconBoxSection
        tagline="Process"
        title={
          <>
            Our Seamless Project{" "}
            <span className="bg-gradient-to-t from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
              Development Journey
            </span>
          </>
        }
        desc="At Devion Ark, we follow a clear, collaborative, and efficient process to bring your digital vision to life. From idea to launch — every step is handled with precision and care to ensure results that truly make an impact. We begin with an in-depth consultation to understand your unique needs. Our team then crafts a tailored strategy to ensure your project's success."
        image={{
          src: mutualTrustImg,
          alt: "mutual trust between company and client",
        }}
        iconbox1={[
          {
            title: "We Listen, Learn, and Plan",
            desc: "Our journey begins with understanding your goals, target audience, and unique challenges. We conduct research and craft a strategy tailored to your business objectives.",
            icon: <FaNetworkWired />,
          },
          {
            title: "We Visualize Your Vision",
            desc: "From wireframes to interactive prototypes, our design process ensures an intuitive user experience, strong brand alignment, and visual appeal across all devices.",
            icon: <GiBinoculars />,
          },
        ]}
        iconbox2={[
          {
            title: "We Build Smart Solutions",
            desc: "Using modern tech stacks, we develop fast, secure, and scalable applications — seamlessly integrating all essential features and third-party tools you need.",
            icon: <LuWrench />,
          },
          {
            title: "We Deliver Support and Growth",
            desc: "After thorough testing, we deploy your project with confidence. But it doesn&apos;t end there — we provide ongoing support, performance monitoring, and optimization for long-term success.",
            icon: <FaTruckPickup />,
          },
        ]}
      />
      <Testimonials />
    </>
  );
}
