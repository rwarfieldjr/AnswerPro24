import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, Target, Clock, Phone, FileText, Settings, Zap } from "lucide-react";

interface Feature {
  icon: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Screening That Protects Your Time",
    description: "AI captures name, number, address, issue, photos/video link, urgency, warranty status."
  },
  {
    icon: Brain,
    title: "Smart Escalation",
    description: "If criteria met (e.g., active water leak, no heat in freezing temps), we ring your on-call tech. Otherwise we schedule for morning."
  },
  {
    icon: Target,
    title: "Zero Missed Leads",
    description: "Every call becomes a ticket with summary + transcript + recording link (optional)."
  },
  {
    icon: FileText,
    title: "Call Recording + Transcript",
    description: "Complete documentation of every interaction with optional call recording and AI-generated transcripts."
  },
  {
    icon: Settings,
    title: "Custom Escalation Rules",
    description: "Define your own criteria for what constitutes an emergency based on your service requirements."
  },
  {
    icon: Clock,
    title: "Appointment Booking",
    description: "Calendar integration with automated appointment scheduling and SMS confirmations."
  },
  {
    icon: Zap,
    title: "CRM & Webhook Integration",
    description: "Seamless integration with your existing CRM, Zapier, and Make.com workflows."
  },
  {
    icon: Phone,
    title: "Spam Filtering",
    description: "Advanced solicitor and spam call detection protects you from unwanted interruptions."
  }
];

export default function FeatureGrid() {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-features-title">
            Complete After-Hours Call Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle">
            From intelligent screening to smart escalation, we handle every aspect of your after-hours communications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}