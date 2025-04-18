import { Calendar1Icon } from "lucide-react";
import Image from "next/image";
import { BlogPostImage } from "@/assets/images";
import { Subtitle } from "@/components/ui/subtitle";

export const BlogCard = () => {
  return (
    <article className="flex flex-col gap-8">
      <div className="relative w-full h-[280px] md:h-[320px] rounded-lg overflow-hidden">
        <Image
          src={BlogPostImage}
          alt="blog post image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Subtitle>Kategoria</Subtitle>
        <h2 className="text-md text-gray-dark font-medium leading-7">
          Intrygujący tytuł artykułu do przeczytania przez użytkownika
        </h2>
        <p className="text-gray leading-7 font-inter text-sm line-clamp-2">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain.
        </p>
        <p className="flex items-center gap-2">
          <Calendar1Icon color="#9ba0ac" size={16} />
          <span className="text-xs text-[#9ba0ac] font-medium">13.12.2021</span>
        </p>
      </div>
    </article>
  );
};
