import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import LeadFormModal from "@/components/LeadFormModal";

export default function SignupCancel() {
  const [, setLocation] = useLocation();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Checkout Cancelled - AnswerPro 24"
        description="Return to complete your signup"
      />
      <Header onStartTrial={() => setIsLeadFormOpen(true)} />
      
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-amber-100 dark:bg-amber-950 rounded-full">
                  <XCircle className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <CardTitle className="text-center text-3xl" data-testid="text-cancel-title">
                Checkout Cancelled
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-lg text-foreground">
                  Your checkout was cancelled. No charges were made.
                </p>
                <p className="text-muted-foreground">
                  We understand that sometimes you need more time to think. When you're ready, we'll be here to help you get started with your 14-day free trial.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground">Why Choose AnswerPro 24?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>14-day free trial with 100 answered minutes included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Cancel anytime during your trial - no questions asked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Industry-first AI technology that actually works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>27% of service calls go unanswered - we capture them all</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => setIsLeadFormOpen(true)} 
                  size="lg" 
                  className="flex-1"
                  data-testid="button-try-again"
                >
                  Try Again - Start Free Trial
                </Button>
                <Button 
                  onClick={() => setLocation("/")} 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  data-testid="button-return-home"
                >
                  Return Home
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Have questions? Call us at{" "}
                  <a href="tel:770-404-9750" className="text-primary font-semibold hover:underline">
                    (770) 404-9750
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />

      <LeadFormModal 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />
    </div>
  );
}
