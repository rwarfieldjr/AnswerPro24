import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface CallToActionProps {
  onStartTrial: () => void;
}

export default function CallToAction({ onStartTrial }: CallToActionProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-cta-title">
              Stop Losing Sleep — and Leads
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Join hundreds of home service professionals who trust AnswerPro 24 
              to handle their after-hours calls intelligently.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onStartTrial}
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
              data-testid="button-cta-start-trial"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2 text-sm opacity-75">
              <Clock className="h-4 w-4" />
              <span>Setup takes less than 10 minutes</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 border-t border-primary-foreground/20">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold">14-Day</div>
              <div className="text-sm opacity-75">Free Trial</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold">No Setup</div>
              <div className="text-sm opacity-75">Fees</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold">Cancel</div>
              <div className="text-sm opacity-75">Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}