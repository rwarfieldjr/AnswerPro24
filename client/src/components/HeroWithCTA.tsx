import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Phone, CheckCircle, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Service_technician_hero_image_1ccde34c.png";
import AudioPlayer from "@/components/AudioPlayer";
import urgentAudio from "@assets/AnswerPro24 Urgent - Pipe Leak_1759775874741.m4a";
import nonUrgentAudio from "@assets/AnswerPro24 - Non-Urgent - Garage Door_1759775889205.m4a";

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
    <section className="py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                Industry-First AI Call Screening Technology
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                After-Hours Answering{" "}
                <span className="text-primary">Powered by AI Voice</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
                What are missed calls — during business hours or after hours — costing your business?
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                <span className="font-semibold text-foreground">27% of service calls go unanswered.*</span> We screen every call, collect details, and escalate only true emergencies. You wake up to organized service requests — not chaos.
              </p>
              <p className="text-xs text-muted-foreground italic">
                *Source: Invoca's Home Services Call Report
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" onClick={onStartTrial} data-testid="button-hero-start-trial" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={onSeeHowItWorks} data-testid="button-hero-see-how" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional service technician with smartphone"
                  className="w-full h-full object-cover"
                  data-testid="img-hero"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">Live 24/7</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2" data-testid={`badge-trust-${index}`}>
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                    <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Drive Section - Full Width */}
        <div className="max-w-5xl mx-auto mt-8 sm:mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Hear It To Believe It</h3>
            </div>
            <p className="text-base sm:text-lg text-foreground font-medium">
              Don't take our word for it - Call now to experience the future of after-hours call handling!
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Call our live demo line and have a real conversation with our AI. You'll be amazed at how natural it sounds and how intelligently it handles service calls. This is the same technology that will protect your sleep and capture your leads.
            </p>
            <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 pt-2">
              <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <a 
                    href="tel:770-404-9750"
                    className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                    data-testid="link-test-drive-phone"
                  >
                    (770) 404-9750
                  </a>
                  <span className="text-sm font-medium text-muted-foreground">Demo Line</span>
                </div>
                <div className="space-y-2 w-full">
                  <AudioPlayer 
                    src={urgentAudio} 
                    title="🚨 Urgent: Pipe Leak Demo"
                    testId="audio-urgent-demo"
                  />
                  <AudioPlayer 
                    src={nonUrgentAudio} 
                    title="⏰ Non-Urgent: Garage Door Demo"
                    testId="audio-non-urgent-demo"
                  />
                </div>
              </div>
              <div className="text-sm text-muted-foreground space-y-1 w-full lg:w-auto">
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground mb-2">
                  <Phone className="h-4 w-4" />
                  Call anytime, 24/7
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground mb-2">Try real world scenarios:</div>
                <div className="text-xs sm:text-sm">1. Urgent: "I have a burst pipe and water is flooding my house!"</div>
                <div className="text-xs sm:text-sm">2. Non Urgent: "My garage door is stuck, but it can wait until tomorrow morning"</div>
                <div className="text-xs sm:text-sm">3. Come up with your own!</div>
                <div className="text-xs italic mt-2">No spam. Just an incredible demo experience.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}