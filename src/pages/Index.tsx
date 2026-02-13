import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import CTABanner from "@/components/CTABanner";
import InstitutionalSection from "@/components/InstitutionalSection";
import ProductsSection from "@/components/ProductsSection";
import DistributorsSection from "@/components/DistributorsSection";
import RecipesSection from "@/components/RecipesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <CTABanner />
      <InstitutionalSection />
      <ProductsSection />
      <DistributorsSection />
      <RecipesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
