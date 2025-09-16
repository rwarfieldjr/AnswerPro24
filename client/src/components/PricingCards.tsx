import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

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

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo + usage",
    description: "Perfect for small teams getting started",
    features: [
      "After-hours AI answering",
      "Morning summary email",
      "Basic escalation rules",
      "1 on-call number",
      "Call recording & transcript",
      "Email support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline"
  },
  {
    name: "Pro",
    price: "$299", 
    period: "/mo + usage",
    description: "Most popular for growing businesses",
    features: [
      "Everything in Starter",
      "Custom escalation rules",
      "Appointment booking + SMS",
      "CRM/webhook integration",
      "Round-robin on-call teams",
      "Priority phone support",
      "Custom caller ID",
      "Advanced reporting"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default"
  },
  {
    name: "Scale", 
    price: "Custom",
    period: "pricing",
    description: "For large operations and franchises",
    features: [
      "Everything in Pro",
      "Multi-location support",
      "Multi-brand management", 
      "Dedicated success manager",
      "Custom SLAs & reporting",
      "White-label options",
      "Advanced analytics",
      "24/7 phone support"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline"
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            All plans include after-hours coverage, call screening, and morning digest. Scale as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="flex items-end justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-lg mb-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                  onClick={() => onPlanSelect?.(plan.name)}
                  data-testid={`button-select-${plan.name.toLowerCase()}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage note */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-muted-foreground">
            Usage charges: $2.50 per minute of call time
          </p>
          <p className="text-xs text-muted-foreground">
            No contracts • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}