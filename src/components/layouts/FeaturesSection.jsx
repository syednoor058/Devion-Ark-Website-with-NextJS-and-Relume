import { IconCard } from "../cards/cards";
const FeaturesSection = ({ title, features = [], theme = "dark" }) => {
  return (
    <section
      className={`px-[5%] py-10 md:py-16 lg:py-20 ${
        theme === "dark" ? "text-neutral-300" : "text-neutral-600"
      }`}
    >
      <div className="container">
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
          <div className="w-full lg:w-[85%] grid grid-cols-1 items-start justify-center md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-neutral-400 border border-neutral-400">
            {features.map((feature, index) => (
              <IconCard
                theme={theme}
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
