import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, Phone } from "lucide-react";

interface AddOn {
  name: string;
  price: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

const corePlan: PricingPlan = {
  name: "AnswerPro 24",
  price: "$499",
  period: "/month",
  description: "Complete after-hours call management for home service professionals",
  features: [
    "After-hours coverage (5pm–8am + weekends)",
    "Unique tracking number",
    "Triage + emergency escalation",
    "Appointment scheduling (Optional)",
    "Call recording & transcripts",
    "Next-morning summary by 9am",
    "Missed-call text-back",
    "Monthly analytics",
    "Up to 300 answered minutes/month"
  ],
  popular: true,
  buttonText: "Start 14-Day Free Trial",
  buttonVariant: "default"
};

const addOns: AddOn[] = [
  {
    name: "24/7 Coverage",
    price: "+$300",
    description: "Extended coverage to full 24/7 operation"
  },
  {
    name: "Overflow During Business Hours",
    price: "+$199",
    description: "Handle overflow calls during your business hours"
  },
  {
    name: "Bilingual Line",
    price: "+$100",
    description: "Spanish/English bilingual call handling"
  },
  {
    name: "Google Review Request Workflow",
    price: "+$49",
    description: "Automated review requests after service completion"
  },
  {
    name: "Priority Hot-Transfer",
    price: "+$49",
    description: "Direct transfer to technicians for urgent calls"
  },
  {
    name: "Extra Numbers/Locations",
    price: "+$15 each",
    description: "Additional phone numbers for multiple locations"
  }
];

interface PricingCardsProps {
  onPlanSelect?: (planName: string) => void;
}

export default function PricingCards({ onPlanSelect }: PricingCardsProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-pricing-title">
            One Simple Plan, Everything Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            Professional after-hours call management that pays for itself with just one captured job.
          </p>
        </div>

        {/* Core Plan */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="relative hover-elevate border-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Complete Solution
              </Badge>
            </div>
            
            <CardHeader className="text-center space-y-4 pb-8">
              <h3 className="text-3xl font-bold text-foreground">{corePlan.name}</h3>
              <div className="space-y-1">
                <div className="flex items-end justify-center space-x-1">
                  <span className="text-5xl font-bold text-foreground">{corePlan.price}</span>
                  <span className="text-muted-foreground text-xl mb-2">{corePlan.period}</span>
                </div>
                <p className="text-lg text-muted-foreground">{corePlan.description}</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {corePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={corePlan.buttonVariant}
                size="lg"
                className="w-full"
                onClick={() => onPlanSelect?.(corePlan.name)}
                data-testid="button-select-core-plan"
              >
                {corePlan.buttonText}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 14-Day Free Trial Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-muted/30 border-2 border-dashed border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">14-Day Free Trial</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Test our service risk-free with 100 answered minutes included
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Trial Includes:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>100 answered minutes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Quick Set Up</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Custom greeting script</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Daily SMS summaries</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Trial Terms:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Credit card required</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Cancel anytime online</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Auto-converts to $499/month</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Day 10 review call included</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add-ons Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl font-bold text-foreground">Optional Add-Ons</h3>
            <p className="text-muted-foreground">Customize your service with additional features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-addon-${addon.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground text-sm">{addon.name}</h4>
                      <Badge variant="outline" className="text-primary border-primary">
                        {addon.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-foreground">30-Day Success Guarantee</h3>
                </div>
                <p className="text-lg text-foreground">
                  If we don't generate at least <strong>3 qualified after-hours opportunities</strong> in your first 30 days, we'll credit your next month.
                </p>
                <p className="text-sm text-muted-foreground">
                  We're confident our service will capture valuable leads while you're off the clock.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Information */}
        <div className="text-center mt-12 space-y-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Usage & Billing</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Included:</strong> Up to 300 answered minutes/month
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Overage:</strong> $0.75 per additional minute
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Contract:</strong> Month-to-month, cancel anytime
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Setup:</strong> Same day, no setup fees
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}