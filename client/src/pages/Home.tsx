import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
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
  const [, setLocation] = useLocation();

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndustryLearnMore = (slug: string) => {
    setLocation("/contact");
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

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AnswerPro 24",
    "description": "AI-powered after-hours call answering service for home service businesses",
    "provider": {
      "@type": "Organization",
      "name": "AnswerPro 24",
      "telephone": "(770) 404-9750",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Boulevard, Suite 400",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
        "addressCountry": "US"
      }
    },
    "serviceType": "Call Answering Service",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AnswerPro 24 Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Plan"
          },
          "price": "49",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Plan"
          },
          "price": "149",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AnswerPro 24 - AI After-Hours Call Answering for Home Service Businesses"
        description="Never miss another emergency call. AnswerPro 24's AI identifies real emergencies and routes them instantly to your on-call technician. Perfect for plumbers, electricians, HVAC, and garage door companies."
        keywords={["after hours answering service", "home service call answering", "emergency call routing", "plumber answering service", "electrician call service", "HVAC answering service", "garage door call answering", "AI call screening"]}
        canonicalUrl="https://answerpro24.com/"
        structuredData={homeStructuredData}
      />
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