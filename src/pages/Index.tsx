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
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <WaveDivider to="bg-background" />
      <FeaturesSection />
      <WaveDivider to="bg-dark" />
      <VideoSection />
      <WaveDivider from="bg-dark" to="bg-primary" />
      <CTABanner />
      <WaveDivider from="bg-primary" to="bg-background" />
      <InstitutionalSection />
      <WaveDivider to="bg-muted" />
      <ProductsSection />
      <WaveDivider from="bg-muted" to="bg-background" />
      <DistributorsSection />
      <WaveDivider to="bg-muted" />
      <RecipesSection />
      <WaveDivider from="bg-muted" to="bg-background" />
      <ContactSection />
      <WaveDivider to="bg-dark" />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
