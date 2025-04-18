import { Button } from "../ui/button";
import { Subtitle } from "../ui/subtitle";
import { Title } from "../ui/title";

export const CTASection = () => {
  return (
    <section className="flex justify-center px-8 py-20 text-white bg-gray-dark rounded-lg mb-8 md:mb-[128px]">
      <div className="flex flex-col justify-center items-center gap-6 max-w-[555px]">
        <Subtitle variant={"secondary"}>Overline</Subtitle>
        <Title className="text-center" variant={"secondary"}>
          Przekonujący nagłowek w CTA
        </Title>
        <p className="font-inter text-center leading-7">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born.
        </p>
        <Button>Napisz do nas</Button>
      </div>
    </section>
  );
};
