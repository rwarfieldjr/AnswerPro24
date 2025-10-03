import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Phone, CheckCircle, Sparkles } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Industry-First AI Call Screening Technology
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                After-Hours Answering{" "}
                <span className="text-primary">Powered by AI Voice</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
                What are missed calls — during business hours or after hours — costing your business?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                <span className="font-semibold text-foreground">27% of service calls go unanswered.*</span> We screen every call, collect details, and escalate only true emergencies. You wake up to organized service requests — not chaos.
              </p>
              <p className="text-xs text-muted-foreground italic">
                *Source: Invoca's Home Services Call Report
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onStartTrial} data-testid="button-hero-start-trial">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={onSeeHowItWorks} data-testid="button-hero-see-how">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="space-y-6">
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

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
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
        </div>

        {/* Test Drive Section - Full Width */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Hear It To Believe It</h3>
            </div>
            <p className="text-lg text-foreground font-medium">
              Don't just read about it — experience the future of after-hours call handling right now!
            </p>
            <p className="text-muted-foreground">
              Call our live demo line and have a real conversation with our AI. You'll be amazed at how natural it sounds and how intelligently it handles service calls. This is the same technology that will protect your sleep and capture your leads.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a 
                href="tel:770-404-9750"
                className="flex items-center space-x-3 text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                data-testid="link-test-drive-phone"
              >
                <Phone className="h-7 w-7" />
                <span>(770) 404-9750</span>
              </a>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Phone className="h-4 w-4" />
                  Call anytime, 24/7
                </div>
                <div>Try real plumbing, HVAC, or electrical scenarios</div>
                <div className="text-xs italic mt-1">No spam. Just an incredible demo experience.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}