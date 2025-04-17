import { Blog } from "@/components/Blog";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";

export const HomeScreen = () => {
  return (
    <main>
      <Hero />
      <Info />
      <div className="flex flex-col px-8 md:px-x-axis-layout bg-white">
        <Services />
        <div className="w-full h-[1px] bg-[#dee1e6]" />
        <Testimonial />
      </div>
      <div className="flex flex-col px-8 md:px-x-axis-layout bg-gray-light">
        <Blog />
        <CTASection />
      </div>
      <Form />
      <Footer />
    </main>
  );
};
