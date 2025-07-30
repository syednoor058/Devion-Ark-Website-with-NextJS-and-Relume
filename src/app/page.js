import { ImageGallery } from "@/components/gallery/ImageGallery";
import { Empower } from "@/components/home/Empower";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { LogoList } from "@/components/home/LogoList";
import { Portfolio } from "@/components/home/Portfolio";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/testimonials/Testimonials";
import Head from "next/head";
import canteen from "../../public/images/Gallery/canteen.jpg";
import meeting from "../../public/images/Gallery/meeting.jpg";
import officeCollegue from "../../public/images/Gallery/office-collegues.jpg";
import officeOutside from "../../public/images/Gallery/office-outside.jpg";
import officeParty from "../../public/images/Gallery/office-party.jpg";
import playTime from "../../public/images/Gallery/play-time.jpg";
import workPlace from "../../public/images/Gallery/work-place.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/" />
      </Head>
      <Hero
        title="Transforming Your Ideas Into Digital Reality"
        description="We are a digital-first agency helping businesses grow through custom software, web development, and performance-driven marketing. From strategic planning to execution, we build tailored solutions that boost visibility, automate workflows, and drive real results."
      />
      <Features />
      <Services />
      <Portfolio />
      <Empower />
      <ImageGallery images={[officeCollegue, officeOutside, workPlace, officeParty, meeting, playTime, canteen]} />
      <LogoList />
      <Process />
      <Testimonials />
    </>
  );
}
