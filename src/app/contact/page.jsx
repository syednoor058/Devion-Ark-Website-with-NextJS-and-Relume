import { DownImageHeader } from "@/components/headers/DownImageHeader";
import { ContactForm } from "@/components/layouts/ContactForm";
import { OfficeAddress } from "@/components/layouts/OfficeAddress";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import contactHeader from "../../../public/images/contact-hero.jpg";
import map from "../../../public/images/map.jpg";

export const metadata = {
  title: "Contact Devion Ark | Let’s Build Something Amazing",
  description:
    "Get in touch with Devion Ark for custom software development and digital marketing. Let’s discuss how we can take your business to the next level.",
};

const Contact = () => {
  return (
    <>
      <DownImageHeader
        title={
          <>
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-t from-accentColor1 to-accentColor2 bg-clip-text text-transparent">
              Great Together
            </span>
          </>
        }
        desc="We’re here to answer your questions, discuss your ideas, and help your business grow with tailored digital and software solutions. Whether you’re looking for a complete brand transformation or a cutting-edge web application, our team is just one message away."
        image={contactHeader}
        alt="a man and a woman working together on support desk"
        iconbox={[
          {
            icon: <MdOutlineCall />,
            title: "Direct Communication",
            desc: "Connect with our team instantly through calls, emails, or live chat. We value quick and clear communication to keep things moving smoothly.",
          },
          {
            icon: <FaRegClock />,
            title: "Fast Response Time",
            desc: "Our support team ensures your queries are answered promptly. We believe in proactive communication so you never feel left waiting.",
          },
        ]}
        header={true}
      />
      <ContactForm />
      <OfficeAddress />
      <div className="pb-10 md:pb-14 lg:pb-20 px-[5%] w-full relative overflow-hidden rounded-[15px]">
        <Image
          src={map}
          alt="Head office location google map"
          className="w-full h-full object-cover rounded-[15px]"
        />
      </div>
    </>
  );
};

export default Contact;
