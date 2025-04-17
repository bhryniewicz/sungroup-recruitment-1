import Image from "next/image";
import { InfoIcon } from "@/assets/icons";

export const InfoCard = () => {
  return (
    <div className="flex items-start gap-6">
      <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#e5eeff] rounded-full shrink-0">
        <Image src={InfoIcon} width={24} height={24} alt="info icon" />
      </div>
      <div className="flex flex-col gap-3 pt-1">
        <h2 className="text-gray-dark text-lg font-medium">
          Nagłówek w kilku słowach
        </h2>
        <p className="text-gray font-inter leading-7">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born.
        </p>
      </div>
    </div>
  );
};
