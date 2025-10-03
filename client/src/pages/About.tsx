import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Shield, Clock, Heart, Phone } from "lucide-react";

const stats = [
  { label: "Calls Handled", value: "500K+", icon: Phone },
  { label: "Home Service Businesses", value: "1,200+", icon: Users },
  { label: "Emergency Response Time", value: "<30s", icon: Clock },
  { label: "Customer Satisfaction", value: "98%", icon: Heart }
];

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

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of Operations at ServiceTitan. 15 years in home services technology.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Mike Chen", 
    role: "CTO & Co-Founder",
    bio: "AI researcher from Google. Led voice recognition teams for 8 years.",
    image: "/api/placeholder/200/200"
  },
  {
    name: "David Rodriguez",
    role: "VP of Customer Success", 
    bio: "20+ years as plumbing contractor. Understands your challenges firsthand.",
    image: "/api/placeholder/200/200"
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
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Founded by Home Service Veterans
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-about-hero-title">
                We Understand Your Challenges
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
                AnswerPro 24 was born from real frustration with after-hours calls. 
                Our founders spent years in the home services industry, experiencing the same challenges you face every day.
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

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by the Industry
              </h2>
              <p className="text-muted-foreground">
                Numbers that show our impact on home service businesses
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`stat-${index}`}>
                  <CardContent className="p-6 space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
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

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground">
                Industry veterans who understand your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`team-member-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
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