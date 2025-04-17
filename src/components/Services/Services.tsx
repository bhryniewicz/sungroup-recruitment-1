import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-[128px] py-8 md:py-y-axis-layout">
      <ServiceCard />
      <ServiceCard isReversed />
      <ServiceCard />
    </section>
  );
};
