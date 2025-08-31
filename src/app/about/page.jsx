import { ImageGallery } from "@/components/gallery/ImageGallery";
import { FourImagesOnScrollHeader } from "@/components/headers/FourImagesOnScrollHeader";
import { ImageBox } from "@/components/layouts/ImageBox";
import { StatsSection } from "@/components/layouts/StatsSection";
import { TeamSection } from "@/components/layouts/TeamSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import LogoCloud from "@/components/ui/logo-cloud";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlineQueryStats } from "react-icons/md";
import canteen from "../../../public/images/Gallery/canteen.jpg";
import meeting from "../../../public/images/Gallery/meeting.jpg";
import officeCollegue from "../../../public/images/Gallery/office-collegues.jpg";
import officeOutside from "../../../public/images/Gallery/office-outside.jpg";
import officeParty from "../../../public/images/Gallery/office-party.jpg";
import playTime from "../../../public/images/Gallery/play-time.jpg";
import workPlace from "../../../public/images/Gallery/work-place.jpg";
import officeEnv2 from "../../../public/images/office-env-2.jpg";
import officeEnv3 from "../../../public/images/office-env-3.jpg";
import officeEnv4 from "../../../public/images/office-env-4.jpg";
import officeEnv5 from "../../../public/images/office-env-5.jpg";
import officeEnv from "../../../public/images/office-env.jpg";
import farhanFuad from "../../../public/images/team/farhan-fuad.png";
import kaziFarhana from "../../../public/images/team/kazi-farhana.png";
import naimRahman from "../../../public/images/team/naim-rahman.png";
import shaedNoor from "../../../public/images/team/shaed-noor.png";

const About = () => {
  return (
    <>
      <FourImagesOnScrollHeader
        title={
          <>
            Crafting Digital Experiences{" "}
            <span className="bg-gradient-to-t from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
              With Purpose
            </span>
          </>
        }
        desc="We believe in more than just delivering services—we build partnerships. Our mission is to help businesses of all sizes unlock their full digital potential, combining cutting-edge software with impactful marketing campaigns that drive measurable success."
        image1={{ img: officeEnv2, alt: "Office Environment 2" }}
        image2={{ img: officeEnv4, alt: "Office Environment 4" }}
        image3={{ img: officeEnv3, alt: "Office Environment 3" }}
        image4={{ img: officeEnv5, alt: "Office Environment 5" }}
      />
      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 text-neutral-300 relative">
        <p className="text-white md:font-semibold text-md md:text-xl lg:text-4xl indent-20 lg:indent-32 leading-[1.2] relative z-[2]">
          At our core, we are a team of passionate technologists, creative
          thinkers, and marketing strategists committed to helping businesses
          thrive in the digital era. From building custom software solutions and
          scalable web applications to delivering data-driven digital marketing
          strategies, we bridge the gap between technology and business growth.
          we provide end-to-end solutions that empower brands to achieve
          sustainable results. Every project we take on is guided by innovation,
          collaboration, and a relentless pursuit of excellence—ensuring that
          our clients stay ahead in a fast-changing digital landscape.
        </p>
      </div>
      <ImageBox
        image={officeEnv}
        alt="Office Ennvironment"
        title={
          <>
            Innovative Solutions,
            <br />
            Measurable Growth
          </>
        }
        desc="We don’t just provide services—we craft tailored solutions that align with your business goals. Our team combines technical expertise with creative marketing strategies to deliver results that matter. Whether you need a scalable web platform or a strong digital presence, we ensure every solution is built with growth, efficiency, and long-term impact in mind."
        tagline="What Makes Us Different"
        iconbox={[
          {
            title: "Digital Presence",
            desc: "We design and develop custom web applications that scale seamlessly with your business needs. Our focus is on usability, performance, and reliability, so you can stay ahead of the competition.",
            icon: <FaDisplay />,
          },
          {
            title: "Data-Driven Marketing",
            desc: "From SEO to paid campaigns, we build strategies backed by insights and analytics. Every decision is guided by measurable results, ensuring maximum ROI for your marketing efforts.",
            icon: <MdOutlineQueryStats />,
          },
        ]}
      />
      <LogoCloud />
      <StatsSection
        tagline="Proven Impact"
        title={
          <>
            Results That Speak
            <br />
            for Themselves
          </>
        }
        desc="Our success is measured by the growth and satisfaction of our clients. Over the years, we’ve consistently delivered projects that not only meet expectations but also exceed them. These numbers reflect our dedication, expertise, and the trust businesses place in us to power their digital transformation."
        percentageBox={[
          {
            number: 95,
            text: "Client satisfaction rate across software and marketing projects.",
          },
          {
            number: 80,
            text: "Average business growth achieved through our digital strategies.",
          },
          {
            number: 72,
            text: "Projects completed ahead of schedule without compromising quality.",
          },
        ]}
      />
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
      <TeamSection
        tagline="The Minds Behind"
        title={
          <>
            Meet Our
            <br />
            Dedicated Team
          </>
        }
        desc="At the heart of our agency is a group of passionate professionals who bring creativity, strategy, and technical expertise together. Each member contributes unique skills to ensure that every project is executed with precision, innovation, and a commitment to excellence."
        team={[
          {
            name: "Syed Shaeduzzaman Noor",
            desc: "Visionary leader and strategist, Shaed is the driving force behind the agency.",
            img: shaedNoor,
            position: "Founder & Chief Technology Officer",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
          },
          {
            name: "Farhan Fuad",
            desc: "Farhan specializes in full-stack development and scalable system architecture.",
            img: farhanFuad,
            position: "Chief Marketing Officer",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
          },
          {
            name: "Naim Rahman",
            desc: "Naim brings creativity and data-driven strategies together for the businesses.",
            img: naimRahman,
            position: "Marketing & Growth Strategist",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
          },
          {
            name: "Kazi Sanzida Islam",
            desc: "Sanzida combines aesthetics with functionality to design stunning user experiences.",
            img: kaziFarhana,
            position: "Lead Designer & Creative Head",
            linkedin: "#",
            facebook: "#",
            twitter: "#",
          },
        ]}
      />
      <Testimonials />
    </>
  );
};

export default About;
