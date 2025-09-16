import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksStepper from "@/components/HowItWorksStepper";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Settings, MessageSquare, BarChart3, CheckCircle } from "lucide-react";

const setupSteps = [
  {
    icon: Phone,
    title: "Phone Setup (5 minutes)",
    description: "Forward your after-hours calls to our dedicated number",
    details: ["Call your phone provider", "Set up conditional forwarding", "Test the forwarding", "We'll guide you through each step"]
  },
  {
    icon: Settings,
    title: "Configure Rules (10 minutes)",
    description: "Customize your emergency escalation criteria",
    details: ["Define what counts as emergency", "Set technician on-call schedule", "Configure backup escalation", "Test with sample scenarios"]
  },
  {
    icon: MessageSquare,
    title: "AI Training (Automatic)",
    description: "Our AI learns your specific service terminology",
    details: ["Upload service menu/pricing", "Review common customer issues", "Customize greeting message", "AI adapts to your business"]
  },
  {
    icon: BarChart3,
    title: "Go Live (Immediate)",
    description: "Start receiving professionally handled calls",
    details: ["Monitor first few calls", "Adjust rules as needed", "Review morning summaries", "Scale with confidence"]
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

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-how-it-works-hero-title">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-it-works-hero-subtitle">
                Get started in minutes with our simple 4-step process. 
                No technical expertise required.
              </p>
              <div className="flex justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Average setup time: 15 minutes
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Process */}
        <HowItWorksStepper />

        {/* Detailed Setup */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Setup Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We'll guide you through each step with personal onboarding support
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
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
                    <h3 className="text-xl font-semibold mb-2">Scenario: Plumbing Emergency</h3>
                    <p className="opacity-90">Customer calls at 2 AM about a burst pipe</p>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {[
                      {
                        step: "1. AI Greeting",
                        content: "\"Thank you for calling ABC Plumbing. I'm here to help with your emergency. Can you tell me your name and the nature of your plumbing issue?\""
                      },
                      {
                        step: "2. Information Gathering", 
                        content: "AI collects: Customer details, location, issue description (\"burst pipe in basement\"), urgency assessment, photos if possible"
                      },
                      {
                        step: "3. Emergency Assessment",
                        content: "AI determines: Active water damage = Emergency. Triggers immediate escalation to on-call technician."
                      },
                      {
                        step: "4. Immediate Action",
                        content: "\"This is an emergency. I'm connecting you to our on-call technician right now. They'll be with you within 2 rings.\""
                      },
                      {
                        step: "5. Technician Notification",
                        content: "On-call tech receives call with full context: customer info, issue details, photos, urgency level"
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