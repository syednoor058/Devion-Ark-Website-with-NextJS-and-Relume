import { IconCard } from "../cards/cards";
const FeaturesSection = ({
  title = (
    <>
      Smart Solutions
      <br />
      with Smarter Features
    </>
  ),
  features = [],
  theme = "dark",
}) => {
  return (
    <section
      className={`w-full px-[5%] py-10 md:py-16 lg:py-20 ${
        theme === "dark"
          ? "text-neutral-300 bg-neutral-950"
          : "text-neutral-600 bg-white"
      }`}
    >
      <div className="w-full">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full">
            <h2
              className={`w-full lg:w-[60%] mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl ${
                theme === "dark" ? "text-white" : "text-neutral-800"
              }`}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full lg:w-[85%] grid grid-cols-1 items-start justify-center md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-500">
            {features.map((feature, index) => (
              <IconCard
                theme={theme}
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                className={`border-gray-500 ${
                  index === 0 && "border-l border-t"
                } ${index === 1 && "border-l md:border-l-0 md:border-t"} ${
                  index === 2 && "border-l lg:border-l-0 lg:border-t"
                } ${index === 3 && "border-l md:border-l-0 lg:border-l"} ${
                  index === 4 && "border-l lg:border-l-0"
                } ${index === 5 && "border-l md:border-l-0 border-r border-b"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
