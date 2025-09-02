import { TestimonialCard } from "@/components/cards/cards";
import { DownImageHeader } from "@/components/headers/DownImageHeader";
import { ZoomOnScrollHeader } from "@/components/headers/ZoomOnScrollHeader";
import { ImageBox } from "@/components/layouts/ImageBox";
import { CgProfile } from "react-icons/cg";
import { FaDisplay, FaRegCreditCard } from "react-icons/fa6";
import { MdOutlinePhoneAndroid, MdOutlineQueryStats } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import productSSMob from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-1-mob.png";
import productSSTab from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-1-tab.png";
import productSS from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-1.png";
import productSS2 from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-2.jpg";
import productSS3 from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-3.png";
import productSS4 from "../../../../public/images/case-studies/gymnasium-website/gym-web-srcnshot-4.jpg";
import mazhar from "../../../../public/images/testimonials/mazhar.jpg";

export const metadata = {
  title: "Case Study: Gym Center Business Website | Devion Ark",
  description:
    "Devion Ark designed a responsive gym business website with modern UI and booking features, helping the fitness brand attract more clients.",
};

export default function GymCenterBusinessWebsite() {
  return (
    <>
      <ZoomOnScrollHeader
        image={productSS}
        imageMob={productSSMob}
        imageTab={productSSTab}
        alt="Propsuit Application Screenshot"
        title={<>Transforming Fitness with a Modern Responsive Website</>}
        desc="This project was built to help a local gymnasium establish a strong digital presence and attract new members through a sleek and responsive website. The goal was to showcase the gym’s facilities, trainers, membership plans, and classes while providing an easy way for users to engage online. With a mobile-first design, the website ensures that fitness enthusiasts can explore services and join programs from any device."
        primaryButton="View Demo"
        secondaryButton="Github"
      />
      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 text-neutral-300">
        <p className="text-white md:font-semibold text-md md:text-xl lg:text-4xl indent-20 lg:indent-32 leading-[1.2]">
          The Gymnasium Business Website was designed to modernize the
          gym&apos;s brand identity and improve customer acquisition. It acts as
          both a digital brochure and a lead-generation tool, allowing users to
          view class schedules, learn about trainers, explore facilities, and
          sign up for memberships with just a few clicks.
        </p>
      </div>
      <ImageBox
        tagline="Fitness Enthusiasts"
        title={
          <>
            A Modern Website <br />
            to Explore
          </>
        }
        desc="The website provides an engaging digital front door for the gymnasium, where visitors can explore classes, trainers, and membership options. It was built to inspire action by showcasing vibrant visuals, dynamic layouts, and clear calls-to-action that motivate users to register or visit the gym."
        iconbox={[
          {
            title: "Schedule Display",
            desc: "Users can easily view weekly schedules for yoga, cardio, strength training, and special sessions. This helps them plan their workouts without confusion.",
            icon: <SlCalender />,
          },
          {
            title: "Trainer Profiles",
            desc: "Each trainer has a dedicated profile highlighting expertise, certifications, and specializations. This builds trust and helps members find the right trainer for their fitness goals.",
            icon: <CgProfile />,
          },
        ]}
        image={productSS2}
        alt="Propsuit Application Mockup"
        buttons={false}
      />
      <DownImageHeader
        title="Seamless Membership Sign-Up Experience"
        desc="The website was designed to make the membership journey simple and frictionless. From exploring membership tiers to completing online registration, the process is smooth, transparent, and user-friendly. Integrated forms and payment options encourage faster sign-ups while reducing manual paperwork for the business."
        image={productSS3}
        alt="Propsuit app screenshot"
        iconbox={[
          {
            title: "Membership Plans",
            desc: "Visitors can browse flexible membership packages and enroll directly through the website. This removes the need for in-person registration and speeds up the onboarding process.",
            icon: <FaRegCreditCard />,
          },
          {
            title: "Mobile-First Design",
            desc: "Whether accessed from a laptop or smartphone, the website delivers a consistent and optimized experience. Members can join, explore, and contact the gym with ease anytime.",
            icon: <MdOutlinePhoneAndroid />,
          },
        ]}
      />
      <ImageBox
        tagline="Gym Management"
        title={
          <>
            Easy Updates and
            <br />
            Marketing Capabilities
          </>
        }
        desc="The website empowers the gym’s management team with simple tools to update content and run campaigns. They can publish promotions, upload new class details, or share success stories without technical knowledge. This ensures the business stays relevant and continuously engages its community."
        iconbox={[
          {
            title: "CMS Integration",
            desc: "A headless CMS makes it easy to update schedules, trainer details, or announcements in real time. The gym staff doesn’t need technical expertise to keep content fresh.",
            icon: <FaDisplay />,
          },
          {
            title: "SEO & Analytics",
            desc: "Built-in SEO practices and analytics tools help the gym attract new members through search engines. Tracking visitor data also provides valuable insights for marketing strategies.",
            icon: <MdOutlineQueryStats />,
          },
        ]}
        image={productSS4}
        alt="Propsuit Application Mockup"
        buttons={false}
        align="left"
      />

      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20  text-neutral-600">
        <p className="md:font-semibold text-md md:text-xl lg:text-4xl text-center leading-[1.2]">
          The Gymnasium Business Website helped the client increase online
          visibility, attract more sign-ups, and strengthen their brand image.
          Within the first three months, the gym saw a 45% increase in inquiries
          through the website and a noticeable rise in memberships. The
          responsive design and modern interface made the website a vital
          extension of the gym’s customer experience.
        </p>
      </div>
      <div className="w-full px-[5%] pb-10 md:pb-16 lg:pb-20 flex flex-row justify-center ">
        <div className="max-w-3xl">
          <TestimonialCard
            name="Rabbil Hassan Sumon"
            feedback="The new website gave our gym a professional look and made it so much easier to connect with potential members. We’ve had so many compliments from visitors about how easy it is to navigate. This has truly boosted our business."
            designation="Owner, Pulse Fitness"
            img={mazhar}
            align="center"
          />
        </div>
      </div>
    </>
  );
}
