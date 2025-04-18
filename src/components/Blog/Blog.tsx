import { BlogCard } from "./BlogCard";
import { Button } from "../ui/button";
import { Title } from "../ui/title";

export const Blog = () => {
  return (
    <section className="flex flex-col gap-16 py-8 md:py-y-axis-layout">
      <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">
        <Title>Blog</Title>
        <Button variant={"secondary"}>Zobacz więcej</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};
