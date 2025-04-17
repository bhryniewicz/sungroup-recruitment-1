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
        "flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-[180px] h-auto md:h-[550px]",
        isReversed && "md:[&>*:first-child]:order-2"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start justify-center gap-6",
          isReversed && "md:order-2"
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

      <div className="relative w-full h-[300px] md:h-full">
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
