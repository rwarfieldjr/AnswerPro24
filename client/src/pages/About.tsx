import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to help home service professionals sleep better while never missing important business opportunities."
  },
  {
    icon: Shield,
    title: "Reliability First", 
    description: "Your business depends on us. We maintain 99.9% uptime with redundant systems and 24/7 monitoring."
  },
  {
    icon: Users,
    title: "Industry Focus",
    description: "We're specialists, not generalists. Everything we build is designed specifically for home service professionals."
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "Our AI gets smarter every day, learning from millions of real calls to better serve your customers."
  }
];


export default function About() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-about-hero-title">
                We Understand Your Challenges
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
                AnswerPro24 was born from hearing real frustration from home services business owners. After a long day, the last thing they wanted to do was to take another call.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  The Problem We Solve
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    <span className="font-semibold text-foreground">27% of service calls go unanswered.</span> Every home service business faces the same dilemma: miss after-hours calls and lose revenue, 
                    or answer every call and lose sleep to non-emergencies.
                  </p>
                  <p>
                    Traditional answering services don't understand your business. They can't tell the difference 
                    between a dripping faucet and a burst pipe. They either wake you up for everything or miss 
                    real emergencies.
                  </p>
                  <p>
                    That's why we built AnswerPro 24 — <span className="font-semibold text-foreground">the industry's first AI that actually understands home services</span>, 
                    trained on millions of real calls to make smart decisions about what needs immediate attention.
                  </p>
                  <p className="text-sm italic">
                    *Source: Invoca's Home Services Call Report
                  </p>
                </div>
              </div>
              <Card className="lg:order-first">
                <CardContent className="p-8 text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                      <p className="text-sm font-medium text-amber-600 dark:text-amber-500">Traditional Problem</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Answer all calls → Lose sleep to non-emergencies
                      </p>
                    </div>
                    <div className="text-muted-foreground">OR</div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                      <p className="text-sm font-medium text-amber-600 dark:text-amber-500">Traditional Problem</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Miss calls → Lose revenue and customers
                      </p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm font-medium text-primary">Our Solution</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Smart AI screening → Right calls at right time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate" data-testid={`value-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">
                Join Our Mission
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Help us revolutionize after-hours support for home service professionals. 
                Experience the difference intelligent call handling makes.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleStartTrial}
                className="bg-background text-foreground hover:bg-background/90"
                data-testid="button-about-cta"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <LeadFormModal 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />
    </div>
  );
}