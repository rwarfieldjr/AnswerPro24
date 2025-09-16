import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import LeadFormModal from "@/components/LeadFormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users, Phone } from "lucide-react";

export default function Pricing() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const handlePlanSelect = (planName: string) => {
    if (planName === "Scale") {
      console.log('Navigate to contact for custom pricing');
    } else {
      setIsLeadFormOpen(true);
    }
  };

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Coverage",
      description: "Round-the-clock AI answering with human backup escalation when needed"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage multiple technicians, on-call schedules, and escalation hierarchies"
    },
    {
      icon: Phone,
      title: "Smart Routing",
      description: "Intelligent call routing based on emergency criteria and technician availability"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-pricing-hero-title">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-hero-subtitle">
                Start with our 14-day free trial. No setup fees, no long-term contracts. 
                Scale as your business grows.
              </p>
              <Button size="lg" onClick={handleStartTrial} data-testid="button-pricing-hero-trial">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingCards onPlanSelect={handlePlanSelect} />

        {/* Usage Details */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-usage-details-title">
                Usage-Based Pricing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pay only for what you use. Our transparent pricing means no surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Call Charges</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Per minute rate:</span>
                      <span className="font-semibold">$2.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum charge:</span>
                      <span className="font-semibold">1 minute</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Billed in 1-minute increments. Average call duration is 3-5 minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Typical Monthly Costs</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">20 calls (4 min avg):</span>
                      <span className="font-semibold">~$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">50 calls (4 min avg):</span>
                      <span className="font-semibold">~$500</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus monthly plan fee. Most customers save 60-80% vs. hiring staff.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Everything You Need
              </h2>
              <p className="text-muted-foreground">
                All plans include these essential features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center space-y-4" data-testid={`feature-${index}`}>
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pricing Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Is there a setup fee?",
                  answer: "No. We provide free onboarding and setup assistance to get you started quickly."
                },
                {
                  question: "Can I change plans?",
                  answer: "Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle."
                },
                {
                  question: "What if I go over my included minutes?",
                  answer: "Additional minutes are billed at $2.50 per minute. You'll receive usage alerts as you approach limits."
                },
                {
                  question: "Do you offer discounts for annual billing?",
                  answer: "Yes, save 20% by paying annually. Contact our sales team for enterprise discounts."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <LeadFormModal 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />
    </div>
  );
}