import { useState } from "react";
import Header from "@/components/Header";
import HeroWithCTA from "@/components/HeroWithCTA";
import FeatureGrid from "@/components/FeatureGrid";
import IndustriesCards from "@/components/IndustriesCards";
import HowItWorksStepper from "@/components/HowItWorksStepper";
import PricingCards from "@/components/PricingCards";
import FAQAccordion from "@/components/FAQAccordion";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndustryLearnMore = (slug: string) => {
    console.log(`Navigate to industry: ${slug}`);
    // TODO: Navigate to /industries/${slug}
  };

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    if (planName === "Scale") {
      // TODO: Navigate to contact page
      console.log('Navigate to contact for custom pricing');
    } else {
      setIsLeadFormOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        <HeroWithCTA 
          onStartTrial={handleStartTrial}
          onSeeHowItWorks={handleSeeHowItWorks}
        />
        
        <FeatureGrid />
        
        <div id="how-it-works">
          <HowItWorksStepper />
        </div>
        
        <IndustriesCards onLearnMore={handleIndustryLearnMore} />
        
        <PricingCards onPlanSelect={handlePlanSelect} />
        
        <FAQAccordion />
        
        <CallToAction onStartTrial={handleStartTrial} />
      </main>

      <Footer />

      <LeadFormModal 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />
    </div>
  );
}