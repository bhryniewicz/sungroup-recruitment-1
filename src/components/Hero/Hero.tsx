import { Button } from "../ui/button";
import { Title } from "../ui/title";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[90vh]">
      <div className="flex flex-col gap-10 justify-center items-start bg-[#242529] px-8 md:pl-x-axis-layout py-16 md:py-0">
        <Title
          size={"lg"}
          variant={"secondary"}
          className="leading-[48px] md:leading-[64px]"
        >
          Nagłówek traktujący <br className="hidden md:block" />o działalności
          firmy
        </Title>
        <p className="text-white font-normal text-base md:text-lg pr-0 md:pr-16 text-wrap font-inter">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </p>
        <Button>Dowiedz się więcej</Button>
      </div>
      <div className="h-[300px] md:h-full bg-[url('/heroSection.jpg')] bg-cover bg-center" />
    </section>
  );
};
