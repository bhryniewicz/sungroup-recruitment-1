import { Subtitle } from "../ui/subtitle";
import { Title } from "../ui/title";
import { InfoCard } from "./InfoCard";

export const Info = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-light px-8 md:px-x-axis-layout py-20 md:py-y-axis-layout">
      <Subtitle className="pb-3">Overline</Subtitle>
      <Title className="text-center md:text-left pb-10 md:pb-16">
        Nagłówek w kilku słowach
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </section>
  );
};
