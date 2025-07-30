import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import GlareHover from "../ui/GlareHover";
import TextAnimation from "../ui/TextAnimation";

export function PrimaryButton({ text = "", url = "#", className = "", icon }) {
  return (
    <Link
      href={url}
      className="inline-block transition-all duration-300 ease-in group overflow-hidden relative rounded-xs bg-gradient-to-bl from-accentColor1 to-accentColor2 text-white"
    >
      <GlareHover
        glareOpacity={0.4}
        className={cn(
          "relative z-[5] flex flex-row items-center whitespace-nowrap px-6 py-4 leading-none",
          className
        )}
      >
        <TextAnimation text={text} />
        {icon && <span className="ml-3">{icon}</span>}
      </GlareHover>
    </Link>
  );
}

export function SecondaryButton({ text = "", url = "#", className = "" }) {
  return (
    <Link
      href={url}
      className={cn(
        "inline-block border border-borderColor text-foreground leading-none px-6 py-4 rounded-xs group",
        className
      )}
    >
      <TextAnimation text={text} />
    </Link>
  );
}

export function LinkButton({
  url = "#",
  text = "",
  className = "",
  icon = true,
}) {
  return (
    <Link
      href={url}
      className={cn(
        "inline-block text-foreground hover:text-accentColor1 transition-colors duration-300 ease-in relative overflow-hidden group pb-[1px]",
        className
      )}
    >
      <span className="flex flex-row items-center">
        <TextAnimation text={text} />
        <FaArrowRight
          className={`-rotate-45 ml-2 ${icon ? "flex" : "hidden"} mt-0.5`}
        />
      </span>
      <div className="w-full h-[1px] bg-accentColor1 absolute bottom-0 left-0 -translate-x-100 group-hover:translate-x-0 transition-all duration-[350ms]"></div>
    </Link>
  );
}
