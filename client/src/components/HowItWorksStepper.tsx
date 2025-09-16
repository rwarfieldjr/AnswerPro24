import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Brain, GitBranch, Mail } from "lucide-react";

interface Step {
  number: number;
  icon: any;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: 1,
    icon: Phone,
    title: "Forward Your Number After Hours",
    description: "Simple setup with your existing phone system",
    details: [
      "We provide a dedicated number and setup instructions",
      "Works with any carrier or VoIP system", 
      "Keep your existing number",
      "Forward only after business hours"
    ]
  },
  {
    number: 2,
    icon: Brain,
    title: "AI Answers & Assesses",
    description: "Intelligent call screening and data collection",
    details: [
      "Collects caller details and issue description",
      "Classifies urgency based on your criteria",
      "Gathers photos/videos if needed",
      "Records call and generates transcript"
    ]
  },
  {
    number: 3,
    icon: GitBranch,
    title: "Smart Routing Decision",
    description: "Schedule for morning or escalate immediately",
    details: [
      "True emergencies ring your on-call tech",
      "Regular requests scheduled for morning",
      "Custom rules based on your business",
      "Automatic backup escalation if needed"
    ]
  },
  {
    number: 4,
    icon: Mail,
    title: "Deliver Results",
    description: "Organized information when you need it",
    details: [
      "Morning digest with all scheduled calls",
      "Real-time alerts for escalations",
      "Complete ticket with all details",
      "Integration with your CRM system"
    ]
  }
];

export default function HowItWorksStepper() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-how-it-works-subtitle">
            Get started in minutes, see results immediately
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${step.number}`}>
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0 transform translate-x-4"></div>
              )}
              
              <Card className="relative z-10 hover-elevate">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.number}
                    </Badge>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>

                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile connector */}
        <div className="lg:hidden flex justify-center mt-8">
          <div className="flex flex-col items-center space-y-2">
            {Array.from({ length: steps.length - 1 }).map((_, index) => (
              <div key={index} className="w-0.5 h-8 bg-border"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}