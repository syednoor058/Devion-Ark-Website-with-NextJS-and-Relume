import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export const IconCard = ({ className, title, desc, icon, theme = "dark" }) => {
  return (
    <div
      className={cn(
        `w-full h-full flex flex-col items-center ${
          theme === "dark" ? "bg-black" : "bg-white"
        } px-8 lg:px-12 py-12`,
        className
      )}
    >
      <div
        className={`w-full flex flex-row items-center gap-2 ${
          theme === "dark" ? "text-white" : "text-neutral-800"
        }`}
      >
        <span>{icon}</span>
        <h3 className="font-semibold leading-none">{title}</h3>
      </div>
      <p
        className={`${
          theme === "dark" ? "text-neutral-300" : "text-neutral-600"
        } mt-4 text-sm`}
      >
        {desc}
      </p>
    </div>
  );
};

export const TestimonialCard = ({
  name = "",
  feedback = "",
  designation = "",
  img,
  align = "left",
}) => {
  return (
    <div
      className={`p-4 md:p-6 flex flex-col ${
        align === "center" && "items-center"
      }`}
    >
      <div
        className={`flex flex-row gap-1 ${
          align === "center" && "justify-center"
        } items-center text-yellow-500`}
      >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p
        className={`md:text-md mt-5 md:mt-6 font-semibold ${
          align === "center" && "text-center"
        }`}
      >
        "{feedback}"
      </p>
      <div className="w-12 aspect-square rounded-full overflow-hidden relative mt-5 md:mt-6">
        <Image src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h5
        className={`mt-2 mb-1 text-titleColor ${
          align === "center" && "text-center"
        }`}
      >
        {name}
      </h5>
      <p className={`${align === "center" && "text-center"}`}>{designation}</p>
    </div>
  );
};
