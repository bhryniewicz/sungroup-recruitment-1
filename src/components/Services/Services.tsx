import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section className=" py-8 md:py-y-axis-layout">
      <div className="flex flex-col gap-14 lg:gap-[128px] w-full ">
        <ServiceCard />
        <ServiceCard isReversed />
        <ServiceCard />
      </div>
    </section>
  );
};
