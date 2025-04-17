import Image, { StaticImageData } from "next/image";

export const Icon = ({ icon }: { icon: StaticImageData }) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white hover:bg-primary/30 active:bg-primary/60 transition-all duration-300">
      <Image src={icon} alt="social logo" width={20} height={20} />
    </div>
  );
};
