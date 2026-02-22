import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons"; 
import ReviewsSection from "@/components/ReviewsSection"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <TreatmentsSection />
      <TechnologySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
