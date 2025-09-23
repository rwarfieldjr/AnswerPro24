import { useState } from "react";
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
  locksmiths: {
    title: "Locksmith Services",
    emergencies: [
      "Lockouts from home or car",
      "Broken keys in locks",
      "Security breaches and break-ins",
      "Safe lockouts with important documents"
    ],
    morningCalls: [
      "Key duplication requests",
      "Lock installation",
      "Security upgrades",
      "Routine lock maintenance"
    ],
    rules: [
      "Lockouts after 10 PM → Immediate escalation",
      "Security breach → Emergency",
      "Car lockout with emergency → Priority",
      "Key duplication → Morning appointment"
    ]
  },
  towing: {
    title: "Towing Services",
    emergencies: [
      "Car breakdowns on highways",
      "Accident towing",
      "Vehicle blocking traffic",
      "Emergency roadside assistance"
    ],
    morningCalls: [
      "Scheduled vehicle transport",
      "Non-emergency towing",
      "Vehicle recovery from private property",
      "Jump start services"
    ],
    rules: [
      "Highway breakdown → Immediate escalation",
      "Accident scene → Emergency",
      "Traffic blocking → Priority",
      "Scheduled tow → Morning appointment"
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
  roofing: {
    title: "Roofing Services",
    emergencies: [
      "Storm damage with active leaks",
      "Missing shingles during bad weather",
      "Structural damage from fallen trees",
      "Emergency tarping needs"
    ],
    morningCalls: [
      "Roof inspections",
      "Gutter cleaning",
      "Minor repairs",
      "Estimate requests"
    ],
    rules: [
      "Active leak + storm → Immediate escalation",
      "Structural damage → Emergency",
      "Storm damage → Priority",
      "Inspections → Morning appointment"
    ]
  },
  restoration: {
    title: "Restoration Services",
    emergencies: [
      "Active water damage",
      "Fire damage assessment",
      "Mold contamination",
      "Flood damage"
    ],
    morningCalls: [
      "Estimate appointments",
      "Insurance consultations",
      "Preventive inspections",
      "Routine assessments"
    ],
    rules: [
      "Active water damage → Immediate escalation",
      "Fire damage → Emergency",
      "Mold discovery → Priority",
      "Estimates → Morning appointment"
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
  veterinary: {
    title: "Veterinary Services",
    emergencies: [
      "Pet injuries or trauma",
      "Difficulty breathing in animals",
      "Suspected poisoning",
      "Severe pain or distress"
    ],
    morningCalls: [
      "Routine checkups",
      "Vaccination appointments",
      "Grooming services",
      "Prescription refills"
    ],
    rules: [
      "Life-threatening symptoms → Immediate escalation",
      "Severe injury → Emergency",
      "Poisoning → Priority",
      "Routine care → Morning appointment"
    ]
  },
  "property-management": {
    title: "Property Management",
    emergencies: [
      "No heat or water in units",
      "Security issues",
      "Major leaks affecting multiple units",
      "Emergency lockouts"
    ],
    morningCalls: [
      "Maintenance requests",
      "Noise complaints",
      "Rent inquiries",
      "Lease questions"
    ],
    rules: [
      "No utilities → Immediate escalation",
      "Security breach → Emergency",
      "Major leak → Priority",
      "Noise complaints → Morning appointment"
    ]
  },
  dental: {
    title: "Emergency Dental Care",
    emergencies: [
      "Severe tooth pain",
      "Dental trauma or injury",
      "Swelling affecting breathing",
      "Lost permanent tooth"
    ],
    morningCalls: [
      "Routine cleanings",
      "Check-up appointments",
      "Cosmetic consultations",
      "Insurance questions"
    ],
    rules: [
      "Severe pain → Immediate escalation",
      "Trauma → Emergency",
      "Swelling → Priority",
      "Routine care → Morning appointment"
    ]
  },
  restaurants: {
    title: "Restaurant Services",
    emergencies: [
      "Kitchen equipment failures during service",
      "Refrigeration breakdowns",
      "POS system outages",
      "Health inspection issues"
    ],
    morningCalls: [
      "Reservation inquiries",
      "Catering requests",
      "Menu questions",
      "Private party bookings"
    ],
    rules: [
      "Equipment failure during service → Immediate escalation",
      "Refrigeration failure → Emergency",
      "POS issues → Priority",
      "Reservations → Morning appointment"
    ]
  },
  "event-planning": {
    title: "Event Planning Services",
    emergencies: [
      "Venue cancellations day-of",
      "Vendor no-shows",
      "Weather-related changes",
      "Equipment failures during events"
    ],
    morningCalls: [
      "Consultation requests",
      "Vendor questions",
      "Package information",
      "Availability inquiries"
    ],
    rules: [
      "Day-of emergencies → Immediate escalation",
      "Vendor issues → Emergency",
      "Weather changes → Priority",
      "Consultations → Morning appointment"
    ]
  },
  "home-inspection": {
    title: "Home Inspection Services",
    emergencies: [
      "Pre-closing urgent inspections",
      "Safety hazard discoveries",
      "Time-sensitive buyer requests",
      "Insurance claim inspections"
    ],
    morningCalls: [
      "Routine inspection scheduling",
      "Report clarifications",
      "Price quotes",
      "Service area questions"
    ],
    rules: [
      "Pre-closing rush → Immediate escalation",
      "Safety hazards → Emergency",
      "Time-sensitive → Priority",
      "Routine scheduling → Morning appointment"
    ]
  },
  "pool-services": {
    title: "Pool Services",
    emergencies: [
      "Equipment failures during events",
      "Chemical imbalance health risks",
      "Pump or filter breakdowns",
      "Safety equipment malfunctions"
    ],
    morningCalls: [
      "Routine maintenance",
      "Chemical delivery",
      "Equipment upgrades",
      "Seasonal services"
    ],
    rules: [
      "Safety hazards → Immediate escalation",
      "Equipment failure → Emergency",
      "Chemical issues → Priority",
      "Routine maintenance → Morning appointment"
    ]
  },
  "funeral-homes": {
    title: "Funeral Services",
    emergencies: [
      "Death notifications",
      "Immediate transport needs",
      "Time-sensitive arrangements",
      "Family crisis support"
    ],
    morningCalls: [
      "Pre-planning consultations",
      "Price inquiries",
      "Service questions",
      "Memorial options"
    ],
    rules: [
      "Death notifications → Immediate escalation",
      "Transport needs → Emergency",
      "Crisis support → Priority",
      "Pre-planning → Morning appointment"
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
        <section className="pt-16 lg:pt-24 pb-8 lg:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-8">
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
          const element = document.getElementById(slug);
          if (element) {
            // Use manual scroll calculation for reliable positioning
            const targetTop = element.offsetTop - 100; // 100px offset for header
            window.scrollTo({
              top: targetTop,
              behavior: 'smooth'
            });
          }
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