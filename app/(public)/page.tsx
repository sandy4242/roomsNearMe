import HeroSection from "@/components/landing/HeroSection";
import CategorySection from "@/components/landing/CategorySection";
import PopularLocations from "@/components/landing/PopularLocations";
import FeaturedListings from "@/components/landing/FeaturedListings";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import WhySection from "@/components/landing/WhySection";
import Footer from "@/components/landing/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <WhySection/>
      </Reveal>
      <Reveal delay={100}>
        <CategorySection />
      </Reveal>
        <Reveal delay={200}>
       <PopularLocations /> 
        </Reveal>
        <Reveal delay={300}>
       <FeaturedListings /> 
        </Reveal>
        
       <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}