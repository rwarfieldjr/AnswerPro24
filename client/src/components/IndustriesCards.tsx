import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import plumberImage from "@assets/generated_images/Professional_plumber_at_work_6a157825.png";
import electricianImage from "@assets/generated_images/Professional_electrician_at_work_097d465f.png";
import hvacImage from "@assets/generated_images/Professional_HVAC_technician_349997aa.png";
import garageDoorImage from "@assets/generated_images/Garage_door_technician_working_56fb8c7b.png";

interface Industry {
  title: string;
  description: string;
  emergencyExamples: string[];
  image: string;
  slug: string;
}

const industries: Industry[] = [
  {
    title: "Plumbers",
    description: "Stop 2am chaos. We escalate only true emergencies like active leaks or no water. Everything else is booked for morning — fully documented.",
    emergencyExamples: ["Burst pipes", "Active leaks", "No water supply", "Sewage backups"],
    image: plumberImage,
    slug: "plumbing"
  },
  {
    title: "Electricians", 
    description: "Safety first. Potential hazards escalate to on-call; nuisance calls are queued with notes.",
    emergencyExamples: ["Power outages", "Electrical hazards", "Breaker issues", "Sparking outlets"],
    image: electricianImage,
    slug: "electrical"
  },
  {
    title: "HVAC",
    description: "No-heat/no-cool rules based on your thresholds (e.g., <40°F or >90°F).",
    emergencyExamples: ["No heat in winter", "AC failure in extreme heat", "Gas leaks", "Carbon monoxide alerts"],
    image: hvacImage,
    slug: "hvac"
  },
  {
    title: "Garage Doors",
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
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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