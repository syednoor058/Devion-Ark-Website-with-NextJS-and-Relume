import { cn } from "@/lib/utils";

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
