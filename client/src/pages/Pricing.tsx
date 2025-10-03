import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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
    setIsLeadFormOpen(true);
  };

  const valuePropositions = [
    {
      icon: Clock,
      title: "Quick Set Up",
      description: "Custom greeting script, escalation rules, and calendar integration ready within hours"
    },
    {
      icon: Users,
      title: "Professional Triage",
      description: "Trained operators distinguish emergencies from routine calls, protecting your downtime"
    },
    {
      icon: Phone,
      title: "Morning Intelligence",
      description: "9AM summary with call recordings, transcripts, and booked appointments"
    }
  ];

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AnswerPro 24 After-Hours Call Service",
    "description": "Professional after-hours call management for home service professionals at $499/month",
    "offers": {
      "@type": "Offer",
      "name": "AnswerPro 24 Complete Service",
      "price": "499",
      "priceCurrency": "USD",
      "description": "Complete after-hours call management with 14-day free trial and 30-day success guarantee",
      "priceValidUntil": "2025-12-31",
      "itemOffered": {
        "@type": "Service",
        "name": "After-Hours Call Answering Service",
        "description": "Professional call handling, emergency triage, appointment scheduling, and morning summaries"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pricing - AnswerPro 24 | $499/Month After-Hours Call Service"
        description="Professional after-hours call management for $499/month. 14-day free trial with 100 minutes included. Quick Set Up, no contracts. 30-day success guarantee."
        keywords={["after hours answering service $499", "professional call service pricing", "home service after hours", "call answering service cost", "14 day free trial answering service"]}
        canonicalUrl="https://answerpro24.com/pricing"
        structuredData={pricingStructuredData}
      />
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-pricing-hero-title">
                $499/Month. Everything Included.
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-pricing-hero-subtitle">
                What are missed calls — during business hours or after hours — costing your business?
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                <span className="font-semibold text-foreground">27% of service calls go unanswered.*</span> Professional after-hours call management that pays for itself with just one captured job. 
                Start your 14-day free trial today with 100 answered minutes included.
              </p>
              <p className="text-xs text-muted-foreground italic">
                *Source: Invoca's Home Services Call Report
              </p>
              <Button size="lg" onClick={handleStartTrial} data-testid="button-pricing-hero-trial">
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingCards onPlanSelect={handlePlanSelect} />

        {/* Value Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-value-comparison-title">
                Compare the Value
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AnswerPro 24 pays for itself with just one captured after-hours job.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Part-Time Receptionist</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hourly wage:</span>
                      <span className="font-semibold">$15-20/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">After-hours coverage:</span>
                      <span className="font-semibold">$2,400+/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Training & benefits:</span>
                      <span className="font-semibold">$500+/month</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plus vacation coverage, sick days, and turnover costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground text-primary">AnswerPro 24</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly fee:</span>
                      <span className="font-semibold">$499</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Setup & training:</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">24/7 reliability:</span>
                      <span className="font-semibold">Guaranteed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional service, instant setup, no HR headaches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Missed Calls</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average job value:</span>
                      <span className="font-semibold">$300-800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Just 1 missed job:</span>
                      <span className="font-semibold text-red-500">-$500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer goes elsewhere:</span>
                      <span className="font-semibold text-red-500">Forever</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Every missed call is lost revenue and damaged reputation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Home Service Pros Choose Us
              </h2>
              <p className="text-muted-foreground">
                Built specifically for plumbers, electricians, HVAC techs, and other service professionals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {valuePropositions.map((feature, index) => (
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
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about our $499/month service
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What happens during my 14-day free trial?",
                  answer: "You get 100 answered minutes, same-day setup with custom greeting script, daily SMS summaries, and a day 10 review call. Credit card required but you can cancel anytime online."
                },
                {
                  question: "What if I exceed 300 minutes per month?",
                  answer: "Additional minutes are billed at $0.75 each. Most customers stay well within the limit, but we'll alert you if you're approaching it."
                },
                {
                  question: "How does the 30-day success guarantee work?",
                  answer: "If we don't generate at least 3 qualified after-hours opportunities in your first 30 days, we'll credit your next month. We're confident our service will capture valuable leads."
                },
                {
                  question: "Can I add features like 24/7 coverage or bilingual support?",
                  answer: "Yes! Add 24/7 coverage for +$300/month, bilingual support for +$100/month, or other features from our add-ons menu. Changes take effect immediately."
                },
                {
                  question: "Is there a setup fee or contract?",
                  answer: "No setup fees and no long-term contracts. We provide same-day setup and you can cancel anytime. Most customers see ROI within the first week."
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