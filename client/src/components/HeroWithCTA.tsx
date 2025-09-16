import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Phone, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Service_technician_hero_image_1ccde34c.png";

interface HeroWithCTAProps {
  onStartTrial: () => void;
  onSeeHowItWorks: () => void;
}

export default function HeroWithCTA({ onStartTrial, onSeeHowItWorks }: HeroWithCTAProps) {
  const trustBadges = [
    { icon: Clock, text: "24/7 Coverage" },
    { icon: Shield, text: "Emergency Escalation" },
    { icon: CheckCircle, text: "Vendor-Friendly" },
    { icon: Phone, text: "U.S.-Based On-Call Options" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                After-Hours Answering{" "}
                <span className="text-primary">Powered by AI Voice</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
                We screen every call, collect details, and escalate only true emergencies. 
                You wake up to organized service requests — not chaos.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onStartTrial} className="text-lg px-8 py-6" data-testid="button-hero-start-trial">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={onSeeHowItWorks} className="text-lg px-8 py-6" data-testid="button-hero-see-how">
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2" data-testid={`badge-trust-${index}`}>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <badge.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional service technician with smartphone"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}