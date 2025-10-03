import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import LeadFormModal from "@/components/LeadFormModal";
import SEOHead from "@/components/SEOHead";

export default function FAQ() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ - AnswerPro 24 | Common Questions About AI Call Answering"
        description="Get answers to frequently asked questions about AnswerPro 24's AI-powered after-hours call answering service. Learn about emergency handling, setup, customization, and pricing."
        keywords={["FAQ", "answering service questions", "call service help", "emergency call handling", "after hours support"]}
        canonicalUrl="https://answerpro24.com/faq"
      />
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        <FAQAccordion />
      </main>

      <Footer />
      
      <LeadFormModal 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />
    </div>
  );
}
