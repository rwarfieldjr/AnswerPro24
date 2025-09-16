import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import IndustriesCards from "@/components/IndustriesCards";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

const industryDetails = {
  plumbing: {
    title: "Plumbing Services",
    emergencies: [
      "Burst pipes and major leaks",
      "No water supply to property", 
      "Sewage backups and overflows",
      "Water heater failures in winter"
    ],
    morningCalls: [
      "Dripping faucets",
      "Slow drains", 
      "Toilet repairs",
      "Fixture installations"
    ],
    rules: [
      "Active water damage → Immediate escalation",
      "No water + freezing temps → Emergency",
      "Sewer backup → Priority escalation",
      "Minor leaks → Morning appointment"
    ]
  },
  electrical: {
    title: "Electrical Services", 
    emergencies: [
      "Power outages affecting entire property",
      "Sparking outlets or panels",
      "Burning smells from electrical",
      "Exposed live wires"
    ],
    morningCalls: [
      "Light fixture issues",
      "Outlet not working",
      "Circuit breaker trips",
      "Installation requests"
    ],
    rules: [
      "Safety hazards → Immediate escalation", 
      "Total power loss → Emergency",
      "Burning smell → Priority escalation",
      "Single outlet issue → Morning appointment"
    ]
  },
  hvac: {
    title: "HVAC Services",
    emergencies: [
      "No heat when outdoor temp < 40°F",
      "No AC when outdoor temp > 90°F", 
      "Gas leak detection",
      "Carbon monoxide alarms"
    ],
    morningCalls: [
      "Unit making noise",
      "Poor air flow",
      "Thermostat issues", 
      "Routine maintenance"
    ],
    rules: [
      "No heat + freezing → Immediate escalation",
      "No AC + extreme heat → Emergency",
      "Gas smell → Priority escalation", 
      "Minor issues → Morning appointment"
    ]
  },
  "garage-doors": {
    title: "Garage Door Services",
    emergencies: [
      "Door stuck open (security risk)",
      "Broken spring with door down",
      "Door off track blocking access",
      "Opener malfunction trapping car"
    ],
    morningCalls: [
      "Noisy operation",
      "Remote not working",
      "Minor alignment issues",
      "Routine maintenance"
    ],
    rules: [
      "Security risk → Immediate escalation",
      "Access blocked → Emergency", 
      "Safety sensor issues → Priority",
      "Noise complaints → Morning appointment"
    ]
  }
};

export default function Industries() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const industriesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industry-Specific Call Handling",
    "description": "Specialized AI call answering for plumbing, electrical, HVAC, and garage door services",
    "serviceType": "Industry-Specific Call Answering",
    "audience": [
      {
        "@type": "Audience",
        "audienceType": "Plumbing Services"
      },
      {
        "@type": "Audience", 
        "audienceType": "Electrical Services"
      },
      {
        "@type": "Audience",
        "audienceType": "HVAC Services"
      },
      {
        "@type": "Audience",
        "audienceType": "Garage Door Services"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Industries - AnswerPro 24 | Specialized Call Handling for Home Services"
        description="Industry-specific AI call handling for plumbers, electricians, HVAC, and garage door companies. Smart emergency detection with custom escalation rules for each trade."
        keywords={["plumber answering service", "electrician call service", "HVAC answering service", "garage door call answering", "home service industries", "trade-specific call handling"]}
        canonicalUrl="https://answerpro24.com/industries"
        structuredData={industriesStructuredData}
      />
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-industries-hero-title">
                Industry-Specific Call Handling
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-industries-hero-subtitle">
                Our AI understands the unique needs of home service professionals. 
                Customized escalation rules ensure the right calls reach you at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Overview */}
        <IndustriesCards onLearnMore={(slug) => {
          setLocation("/contact");
        }} />

        {/* Detailed Industry Sections */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {Object.entries(industryDetails).map(([slug, details]) => (
              <div key={slug} id={slug} className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-foreground" data-testid={`text-${slug}-title`}>
                    {details.title}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Smart call routing designed for {details.title.toLowerCase()} professionals
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Emergency Escalations */}
                  <Card className="border-destructive/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <h3 className="text-xl font-semibold text-foreground">Emergency Escalations</h3>
                        <Badge variant="destructive">Immediate</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        These calls ring your on-call technician immediately
                      </p>
                      <ul className="space-y-2">
                        {details.emergencies.map((emergency, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{emergency}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Morning Appointments */}
                  <Card className="border-primary/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">Morning Appointments</h3>
                        <Badge>Scheduled</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        These calls are scheduled for your next business day
                      </p>
                      <ul className="space-y-2">
                        {details.morningCalls.map((call, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{call}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Escalation Rules */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Smart Routing Rules</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.rules.map((rule, index) => (
                        <div key={index} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 bg-primary text-primary-foreground rounded-2xl p-12">
              <h2 className="text-3xl font-bold">
                Ready to Protect Your After-Hours?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join professionals who trust AnswerPro 24 to handle their industry-specific emergencies intelligently.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleStartTrial}
                className="bg-background text-foreground hover:bg-background/90"
                data-testid="button-industries-cta"
              >
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