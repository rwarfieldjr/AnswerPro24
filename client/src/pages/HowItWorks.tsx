import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HowItWorksStepper from "@/components/HowItWorksStepper";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Calendar, PhoneForwarded, CheckCircle } from "lucide-react";

const setupSteps = [
  {
    icon: CreditCard,
    title: "Start Your 14-Day Free Trial",
    description: "Quick signup with no long-term commitment",
    details: ["Enter payment information - no charge during trial", "No contracts - cancel anytime", "Month-to-month service after trial", "Full access to all features immediately"]
  },
  {
    icon: Calendar,
    title: "Schedule Your Onboarding Call",
    description: "We'll personalize your AI assistant in 15 minutes",
    details: ["Gather company information and preferences", "Configure how you want after-hours calls handled", "Set urgent vs. non-urgent criteria", "Train AI on business-specific details"]
  },
  {
    icon: PhoneForwarded,
    title: "Forward & Go Live",
    description: "When ready, we forward your after-hours number to our AI",
    details: ["Simple call forwarding - works with any carrier", "Keep your existing phone number", "AI starts answering after-hours immediately", "Start capturing leads the same night"]
  }
];

const benefits = [
  {
    title: "Instant ROI",
    description: "Start capturing leads immediately while reducing after-hours stress",
    metric: "First week"
  },
  {
    title: "High Accuracy",
    description: "Our AI correctly classifies 95%+ of calls on the first attempt",
    metric: "95%+ accuracy"
  },
  {
    title: "Quick Setup",
    description: "Most customers are fully operational within 30 minutes",
    metric: "< 30 minutes"
  },
  {
    title: "Cost Savings",
    description: "Save 60-80% compared to hiring dedicated after-hours staff",
    metric: "60-80% savings"
  }
];

export default function HowItWorks() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const howItWorksStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Set Up AnswerPro 24 Call Answering Service",
    "description": "Simple 3-step process to get AI call answering for your home service business",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Start Your 14-Day Free Trial",
        "text": "Quick signup with payment information. No contracts, cancel anytime.",
        "url": "https://answerpro24.com/how-it-works#start-trial"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule Your Onboarding Call",
        "text": "15-minute call to configure your AI with company details and preferences", 
        "url": "https://answerpro24.com/how-it-works#onboarding-call"
      },
      {
        "@type": "HowToStep",
        "name": "Forward & Go Live",
        "text": "Simple call forwarding to start receiving AI-handled calls immediately",
        "url": "https://answerpro24.com/how-it-works#go-live"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How It Works - AnswerPro 24 | Start Your Free Trial Today"
        description="Get started in 3 simple steps: Start your 14-day free trial, schedule a quick onboarding call, then forward your after-hours calls. No contracts, cancel anytime."
        keywords={["how answering service works", "call service setup", "after hours setup process", "AI call answering setup", "free trial answering service"]}
        canonicalUrl="https://answerpro24.com/how-it-works"
        structuredData={howItWorksStructuredData}
      />
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Industry-First Technology
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-how-it-works-hero-title">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-it-works-hero-subtitle">
                Start your 14-day free trial, schedule a quick onboarding call to personalize your AI, 
                then forward your after-hours calls. You'll be capturing leads the same night.
              </p>
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Get started in 3 simple steps
                </Badge>
              </div>
            </div>
          </div>
        </section>


        {/* Detailed Setup */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Simple Onboarding Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We'll guide you through each step with personal support
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {setupSteps.map((step, index) => (
                <Card key={index} className="hover-elevate" data-testid={`setup-step-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 ml-11">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Call Flow */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Sample Call Scenario
              </h2>
              <p className="text-muted-foreground">
                See how AnswerPro 24 handles a typical after-hours call
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary text-primary-foreground p-6">
                    <h3 className="text-xl font-semibold mb-2">Scenario: Urgent Pipe Leak</h3>
                    <p className="opacity-90">Customer calls at 2 AM about a leaking pipe</p>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {[
                      {
                        step: "1. AI Greeting",
                        content: "\"Thank you for calling! I'm an automated phone agent, you can speak to me in full sentences. What's the issue you're calling about?\""
                      },
                      {
                        step: "2. Information Gathering", 
                        content: "AI collects customer name, full address, and detailed issue description. Uses natural confirmation: \"Just to confirm, that's J-O-H-N for your first name...\""
                      },
                      {
                        step: "3. Urgency Assessment",
                        content: "\"Since you mentioned the leak is pretty bad, do you feel this is an urgent matter that needs a team member to respond right away?\" Customer confirms it's urgent."
                      },
                      {
                        step: "4. Confirmation & Recap",
                        content: "AI summarizes all collected information (name, address, issue, urgency level) and asks for confirmation to ensure accuracy."
                      },
                      {
                        step: "5. Immediate Escalation",
                        content: "\"Please stay close to your phone—a team member will reach out to you right away.\" Team member receives complete call context and responds immediately."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{item.step}</h4>
                          <p className="text-muted-foreground text-sm">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why It Works So Well
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`benefit-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of home service professionals who trust AnswerPro 24.
                Setup takes just 15 minutes.
              </p>
              <Button size="lg" onClick={handleStartTrial} data-testid="button-how-it-works-cta">
                Start Free Trial
              </Button>
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