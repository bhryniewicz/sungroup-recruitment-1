import Image from "next/image";
import { JanKowalskiImage } from "@/assets/images";
import { QuoteIcon } from "@/assets/icons";
import { Title } from "../ui/title";
import { Subtitle } from "../ui/subtitle";

export const Testimonial = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center py-8 md:py-y-axis-layout">
      <Subtitle>Referencje</Subtitle>
      <Title className="text-center mb-2">Poznaj opinie naszych klientow</Title>
      <Image src={QuoteIcon} alt="quote icon" width={30} height={20} />
      <p className="text-center px-0 md:px-16 lg:px-24 text-gray-dark xl:px-48 pb-2">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system. But I must explain to you how all this mistaken
        idea of denouncing pleasure and praising pain was born and I will give
        you a complete account of the system.
      </p>
      <div className="flex flex-col items-center gap-3 font-inter">
        <Image
          src={JanKowalskiImage}
          height={48}
          width={48}
          alt="testimonial profile picture"
        />
        <h3 className="text-lg text-gray-dark">Jan Kowalski</h3>
        <p className="text-gray">Firma Jana Kowalskiego</p>
      </div>
    </section>
  );
};
