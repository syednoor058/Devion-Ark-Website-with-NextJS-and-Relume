import { cn } from "@/lib/utils";

export const IconCard = ({ className, title, desc, icon }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center bg-black px-8 lg:px-12 py-12 lg:py-16",
        className
      )}
    >
      <div className="w-full flex flex-row items-center gap-2 text-white">
        <span className="">{icon}</span>
        <h3 className="font-semibold leading-none">{title}</h3>
      </div>
      <p className="text-neutral-300 mt-4 text-sm">{desc}</p>
    </div>
  );
};
