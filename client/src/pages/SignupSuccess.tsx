import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function SignupSuccess() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [checkoutData, setCheckoutData] = useState<any>(null);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    
    if (!sessionId) {
      setError("No session found");
      setLoading(false);
      return;
    }

    async function processCheckout() {
      try {
        const response = await apiRequest("GET", `/api/checkout-success?session_id=${sessionId}`);
        const data = await response.json();
        setCheckoutData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error processing checkout:", err);
        setError("Failed to complete signup. Please contact support at (770) 404-9750");
        setLoading(false);
      }
    }

    processCheckout();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Welcome to AnswerPro 24 - Signup Successful"
        description="Your 14-day free trial has started"
      />
      <Header onStartTrial={() => {}} />
      
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          {loading ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-lg text-muted-foreground">Processing your subscription...</p>
              </CardContent>
            </Card>
          ) : error ? (
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Something Went Wrong</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{error}</p>
                <Button onClick={() => setLocation("/")} data-testid="button-go-home">
                  Return Home
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-green-100 dark:bg-green-950 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <CardTitle className="text-center text-3xl" data-testid="text-success-title">
                  Welcome to AnswerPro 24!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-lg text-foreground">
                    Your 14-day free trial has started successfully.
                  </p>
                  {checkoutData?.trialEnd && (
                    <p className="text-sm text-muted-foreground">
                      Your free trial ends on{" "}
                      <span className="font-semibold text-foreground">
                        {new Date(checkoutData.trialEnd).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </p>
                  )}
                  <p className="text-muted-foreground">
                    We'll be in touch within 24 hours to complete your setup and get your AI-powered after-hours answering service running.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">What Happens Next?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold text-foreground mr-2">1.</span>
                      <span>Our team will contact you to set up your custom greeting and call handling preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-foreground mr-2">2.</span>
                      <span>You'll receive your dedicated phone number within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-foreground mr-2">3.</span>
                      <span>Start using the service immediately - your 14-day trial begins today</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-foreground mr-2">4.</span>
                      <span>No charges until after your trial ends (you can cancel anytime)</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center space-y-4 pt-4">
                  {checkoutData?.customerId && (
                    <div className="flex flex-col items-center gap-3">
                      <Button 
                        variant="outline"
                        onClick={async () => {
                          try {
                            const response = await apiRequest("POST", "/billing/portal", {
                              stripeCustomerId: checkoutData.customerId
                            });
                            const data = await response.json();
                            if (data.url) {
                              window.location.href = data.url;
                            }
                          } catch (err) {
                            console.error("Error opening portal:", err);
                          }
                        }}
                        data-testid="button-manage-membership"
                      >
                        Manage Membership
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Update payment method, view invoices, or cancel anytime
                      </p>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Questions? Call us anytime at{" "}
                    <a href="tel:770-404-9750" className="text-primary font-semibold hover:underline">
                      (770) 404-9750
                    </a>
                  </p>
                  <Button onClick={() => setLocation("/")} size="lg" data-testid="button-return-home">
                    Return to Homepage
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
