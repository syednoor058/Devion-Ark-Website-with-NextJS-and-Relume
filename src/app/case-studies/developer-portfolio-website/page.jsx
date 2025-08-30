import { TestimonialCard } from "@/components/cards/cards";
import { DownImageHeader } from "@/components/headers/DownImageHeader";
import { ZoomOnScrollHeader } from "@/components/headers/ZoomOnScrollHeader";
import { ImageBox } from "@/components/layouts/ImageBox";
import { CgProfile } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";
import { IoCallOutline, IoGlobeOutline } from "react-icons/io5";
import productSS2 from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot--2.jpg";
import productSSMob from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot-1-mob.png";
import productSSTab from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot-1-tab.png";
import productSS from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot-1.png";
import productSS3 from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot-3.png";
import productSS4 from "../../../../public/images/case-studies/developer-portfolio-website/portfolio-site-scrnshot-4.jpg";
import mazhar from "../../../../public/images/testimonials/mazhar.jpg";

export default function DeveloperPortfolioWebsite() {
  return (
    <>
      <ZoomOnScrollHeader
        image={productSS}
        imageMob={productSSMob}
        imageTab={productSSTab}
        alt="Developer Portfolio Website Screenshot"
        title={<>Digital Identity with a Personal Portfolio Website</>}
        desc="This project focused on creating a personal portfolio website for a creative professional looking to showcase their work, skills, and achievements. The website was designed to act as a digital résumé, an online showcase, and a lead-generation tool all at once. With a clean design, intuitive navigation, and responsive layout, it enables potential employers, clients, and collaborators to connect effortlessly."
        primaryButton="Visit Website"
        secondaryButton="Github"
      />
      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20 bg-neutral-950 text-neutral-300">
        <p className="text-white md:font-semibold text-md md:text-xl lg:text-4xl indent-20 lg:indent-32 leading-[1.2]">
          The Personal Portfolio Website was developed to establish a strong
          online presence for an individual professional. In today’s
          digital-first world, personal branding plays a critical role in career
          success, and the website serves as a hub where visitors can explore
          work samples, testimonials, and contact information.
        </p>
      </div>
      <ImageBox
        tagline="Creative Professionals"
        title={
          <>
            Showcasing Work and
            <br />
            Skills with Elegance
          </>
        }
        desc="The portfolio website acts as a visual storytelling tool, highlighting the professional’s expertise and achievements. Visitors can quickly view featured projects, explore skillsets, and understand the unique value the professional brings to the table."
        iconbox={[
          {
            title: "Project Showcase",
            desc: "A visually engaging gallery of past projects, each with detailed descriptions. This allows potential clients or employers to understand the scope, creativity, and technical skills demonstrated in each project.",
            icon: <GoBriefcase />,
          },
          {
            title: "Skills Highlight",
            desc: "Clearly presented skills and technologies ensure that recruiters or collaborators can instantly identify areas of expertise. This builds credibility and helps the professional stand out in their industry.",
            icon: <GiArcheryTarget />,
          },
        ]}
        image={productSS2}
        alt="Developer Portfolio Website Mockup"
        buttons={false}
      />
      <DownImageHeader
        title="Simplifying Discovery and Engagement"
        desc="The website was designed to make it easy for recruiters, collaborators, and potential clients to learn more and connect. By combining a clean interface with clear CTAs, the website ensures visitors stay engaged and are encouraged to take action."
        image={productSS3}
        alt="Developer Portfolio Website screenshot"
        iconbox={[
          {
            title: "Contact Form",
            desc: "A simple and effective form enables potential employers and clients to get in touch directly. This reduces friction and ensures every opportunity is captured.",
            icon: <IoCallOutline />,
          },
          {
            title: "About Section",
            desc: "A professional yet personal introduction builds trust and helps visitors relate on a human level. It adds depth to the portfolio by sharing background, career story, and aspirations.",
            icon: <CgProfile />,
          },
        ]}
      />
      <ImageBox
        tagline="Personal Branding"
        title={<>Boosting Online Presence and Professional Image</>}
        desc="The portfolio goes beyond just showcasing work—it strengthens the professional’s personal brand. By integrating modern design with SEO best practices, it ensures the portfolio is discoverable by search engines while presenting a polished and professional online image."
        iconbox={[
          {
            title: "SEO Optimization",
            desc: "Carefully structured metadata and content ensure the portfolio ranks well in search results. This improves visibility and attracts opportunities from a wider audience.",
            icon: <IoGlobeOutline />,
          },
          {
            title: "Responsive Design",
            desc: "The website adapts perfectly to any screen size, from desktops to smartphones. This guarantees a seamless browsing experience for visitors, whether they’re exploring at work or on the go.",
            icon: <FaMobileAlt />,
          },
        ]}
        image={productSS4}
        alt="Developer Portfolio Website Mockup"
        buttons={false}
        align="left"
      />

      <div className="w-full px-[5%] py-10 md:py-16 lg:py-20  text-neutral-600">
        <p className="md:font-semibold text-md md:text-xl lg:text-4xl text-center leading-[1.2]">
          The Personal Portfolio Website helped the client establish a strong
          digital identity, attract new opportunities, and build credibility in
          their field. Since launch, the portfolio has driven increased
          inquiries from potential clients and recruiters, while also serving as
          a professional showcase in networking and interviews. The result is a
          lasting online presence that represents the professional’s skills and
          achievements with clarity and impact.
        </p>
      </div>
      <div className="w-full px-[5%] pb-10 md:pb-16 lg:pb-20 flex flex-row justify-center ">
        <div className="max-w-3xl">
          <TestimonialCard
            name="Shaed Noor"
            feedback="This portfolio website has completely changed how I present myself professionally. I now feel confident sharing my work online, and I’ve already received positive feedback and new opportunities thanks to the website’s design and functionality."
            designation="Software Developer"
            img={mazhar}
            align="center"
          />
        </div>
      </div>
    </>
  );
}
