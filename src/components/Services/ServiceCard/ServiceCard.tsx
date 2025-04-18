import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ServiceImage } from "@/assets/images";
import { Subtitle } from "@/components/ui/subtitle";
import { Title } from "@/components/ui/title";

export const ServiceCard = ({
  isReversed = false,
}: {
  isReversed?: boolean;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-[100px] xl:gap-[180px] 2xl:gap-[264px] h-auto lg:h-[550px]"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start justify-center gap-6",
          isReversed && "lg:order-2"
        )}
      >
        <Subtitle>Overline</Subtitle>
        <Title>
          Usługa oferowana <br /> przez firmę
        </Title>
        <p className="text-dark-gray font-inter">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system.
        </p>
        <Button className="w-full md:w-auto">Skontaktuj się z nami</Button>
      </div>
      <div
        className={cn(
          "relative w-full h-[300px] md:h-[400px] lg:h-full",
          isReversed && "lg:order-1"
        )}
      >
        <Image
          src={ServiceImage}
          alt="service image"
          fill
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};
