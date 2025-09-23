import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import plumberImage from "@assets/generated_images/Professional_plumber_at_work_6a157825.png";
import electricianImage from "@assets/generated_images/Professional_electrician_at_work_097d465f.png";
import hvacImage from "@assets/generated_images/Professional_HVAC_technician_349997aa.png";
import garageDoorImage from "@assets/Generated Image September 23, 2025 - 1_15PM_1758647836652.png";
import locksmithImage from "@assets/Generated Image September 23, 2025 - 12_08PM_1758644350905.png";
import towingImage from "@assets/Generated Image September 23, 2025 - 12_10PM_1758644393501.png";
import roofingImage from "@assets/Generated Image September 23, 2025 - 12_15PM_1758644481898.png";
import restorationImage from "@assets/Generated Image September 23, 2025 - 12_25PM_1758644865767.png";
import veterinaryImage from "@assets/Screen Shot 2025-09-23 at 11.49.03 AM_1758644897232.png";
import propertyManagementImage from "@assets/Generated Image September 23, 2025 - 12_14PM_1758644417532.png";
import dentalImage from "@assets/Generated Image September 23, 2025 - 12_42PM_1758645778077.png";
import restaurantImage from "@assets/Generated Image September 23, 2025 - 12_31PM_1758645136427.png";
import eventPlannerImage from "@assets/Generated Image September 23, 2025 - 12_46PM_1758646030069.png";
import homeInspectorImage from "@assets/Generated Image September 23, 2025 - 12_52PM_1758646445130.png";
import poolServiceImage from "@assets/Generated Image September 23, 2025 - 1_12PM_1758647594527.png";
import funeralHomeImage from "@assets/Generated Image September 23, 2025 - 1_20PM_1758648069647.png";

interface Industry {
  title: string;
  description: string;
  emergencyExamples: string[];
  image: string;
  slug: string;
}

const industries: Industry[] = [
  {
    title: "Locksmiths",
    description: "Never miss an emergency lockout call again. We handle your after-hours calls so you can focus on unlocking doors, not answering phones.",
    emergencyExamples: ["Home lockouts", "Car lockouts", "Broken keys", "Security breaches"],
    image: locksmithImage,
    slug: "locksmiths"
  },
  {
    title: "Towing Companies",
    description: "We'll answer your calls 24/7 and connect you with stranded drivers. You only pay when you get a job.",
    emergencyExamples: ["Highway breakdowns", "Accidents", "Traffic blocking", "Roadside assistance"],
    image: towingImage,
    slug: "towing"
  },
  {
    title: "HVAC",
    description: "Don't let after-hours calls go to voicemail. AnswerPro24 ensures you're the first to respond to urgent HVAC issues.",
    emergencyExamples: ["No heat in winter", "AC failure in extreme heat", "Gas leaks", "Carbon monoxide alerts"],
    image: hvacImage,
    slug: "hvac"
  },
  {
    title: "Plumbers",
    description: "We'll answer your emergency plumbing calls 24/7, so you never miss a high-ticket job.",
    emergencyExamples: ["Burst pipes", "Active leaks", "No water supply", "Sewage backups"],
    image: plumberImage,
    slug: "plumbing"
  },
  {
    title: "Roofing Companies",
    description: "Be the first roofer they call after a storm. AnswerPro24 captures those urgent leads for you.",
    emergencyExamples: ["Storm damage", "Active leaks", "Missing shingles", "Emergency tarping"],
    image: roofingImage,
    slug: "roofing"
  },
  {
    title: "Restoration Companies",
    description: "We'll handle your emergency calls and connect you with homeowners in crisis.",
    emergencyExamples: ["Water damage", "Fire damage", "Mold contamination", "Flood damage"],
    image: restorationImage,
    slug: "restoration"
  },
  {
    title: "Electricians", 
    description: "Don't let after-hours calls go unanswered. AnswerPro24 keeps your phone lines open 24/7.",
    emergencyExamples: ["Power outages", "Electrical hazards", "Breaker issues", "Sparking outlets"],
    image: electricianImage,
    slug: "electrical"
  },
  {
    title: "Veterinary Clinics",
    description: "We'll answer your after-hours calls and connect pet owners with your clinic when they need you most.",
    emergencyExamples: ["Pet injuries", "Breathing difficulties", "Suspected poisoning", "Severe pain"],
    image: veterinaryImage,
    slug: "veterinary"
  },
  {
    title: "Property Management",
    description: "Let AnswerPro24 handle your tenant calls after hours. We'll triage issues and notify you only when it's urgent.",
    emergencyExamples: ["No utilities", "Security issues", "Major leaks", "Emergency lockouts"],
    image: propertyManagementImage,
    slug: "property-management"
  },
  {
    title: "Emergency Dental Care",
    description: "Capture every emergency dental lead with AnswerPro24. We'll make sure no patient slips through the cracks.",
    emergencyExamples: ["Severe tooth pain", "Dental trauma", "Breathing swelling", "Lost tooth"],
    image: dentalImage,
    slug: "dental"
  },
  {
    title: "Restaurants",
    description: "Let AnswerPro24 handle your calls during busy hours, so your staff can focus on serving customers.",
    emergencyExamples: ["Equipment failures", "Refrigeration issues", "POS outages", "Health inspections"],
    image: restaurantImage,
    slug: "restaurants"
  },
  {
    title: "Event Planners",
    description: "We'll answer your calls and book appointments, so you never miss a potential client.",
    emergencyExamples: ["Venue cancellations", "Vendor no-shows", "Weather changes", "Equipment failures"],
    image: eventPlannerImage,
    slug: "event-planning"
  },
  {
    title: "Home Inspectors",
    description: "AnswerPro24 ensures you're the first choice for home inspections, even after hours.",
    emergencyExamples: ["Pre-closing rush", "Safety hazards", "Time-sensitive requests", "Insurance claims"],
    image: homeInspectorImage,
    slug: "home-inspection"
  },
  {
    title: "Pool Services",
    description: "We'll answer your calls and schedule repairs, so you never miss a pool emergency.",
    emergencyExamples: ["Equipment failures", "Chemical hazards", "Pump breakdowns", "Safety malfunctions"],
    image: poolServiceImage,
    slug: "pool-services"
  },
  {
    title: "Funeral Homes",
    description: "Provide compassionate, 24/7 support to grieving families with AnswerPro24.",
    emergencyExamples: ["Death notifications", "Transport needs", "Crisis support", "Time-sensitive arrangements"],
    image: funeralHomeImage,
    slug: "funeral-homes"
  },
  {
    title: "Garage Door Services",
    description: "Emergency access issues escalate; noisy door inquiries get morning slots.",
    emergencyExamples: ["Stuck doors", "Broken springs", "Off-track doors", "Safety sensor failures"],
    image: garageDoorImage,
    slug: "garage-doors"
  }
];

interface IndustriesCardsProps {
  onLearnMore?: (slug: string) => void;
}

export default function IndustriesCards({ onLearnMore }: IndustriesCardsProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-industries-title">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-industries-subtitle">
            Specialized call handling designed for the unique needs of home service professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group overflow-hidden hover-elevate" data-testid={`card-industry-${industry.slug}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image}
                  alt={`${industry.title} professional at work`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Emergency Escalations:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {industry.emergencyExamples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onLearnMore?.(industry.slug)}
                  data-testid={`button-learn-more-${industry.slug}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}