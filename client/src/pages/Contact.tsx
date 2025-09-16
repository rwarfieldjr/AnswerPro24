import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team directly",
    contact: "(770) 404-9750",
    hours: "Mon-Fri 8 AM - 8 PM EST"
  },
  {
    icon: Mail,
    title: "Email Us", 
    description: "Send us a detailed message",
    contact: "hello@answerpro24.com",
    hours: "Response within 2 hours"
  },
  {
    icon: MessageSquare,
    title: "Start Free Trial",
    description: "Get started immediately",
    contact: "14-day free trial",
    hours: "Setup in 15 minutes"
  }
];

const offices = [
  {
    city: "Austin, TX",
    address: "123 Tech Boulevard, Suite 400",
    phone: "(512) 555-0123",
    timezone: "Central Time"
  },
  {
    city: "Denver, CO", 
    address: "456 Innovation Drive, Floor 12",
    phone: "(303) 555-0456",
    timezone: "Mountain Time"
  }
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most customers are up and running within 15-30 minutes. Our onboarding team will guide you through the simple setup process."
  },
  {
    question: "Do you offer custom pricing for large operations?",
    answer: "Yes! For businesses with 100+ calls per month or multiple locations, we offer custom pricing and dedicated account management."
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer: "Absolutely. We integrate with most popular CRMs including ServiceTitan, Jobber, Housecall Pro, and can set up custom webhooks for any system."
  },
  {
    question: "What if I need to speak with someone urgently?",
    answer: "Call our priority support line at (770) 404-9750. For existing customers, we offer 24/7 technical support."
  }
];

export default function Contact() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-contact-hero-title">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-hero-subtitle">
                Ready to transform your after-hours call handling? 
                Our team is here to help you get started or answer any questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover-elevate" data-testid={`contact-method-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                      <p className="text-lg font-medium text-primary">{method.contact}</p>
                      <p className="text-xs text-muted-foreground">{method.hours}</p>
                    </div>
                    {method.title === "Start Free Trial" && (
                      <Button onClick={handleStartTrial} className="w-full" data-testid="button-contact-trial">
                        Start Free Trial
                      </Button>
                    )}
                    {method.title === "Call Us" && (
                      <Button variant="outline" asChild className="w-full">
                        <a href="tel:770-404-9750" data-testid="button-call-us">Call Now</a>
                      </Button>
                    )}
                    {method.title === "Email Us" && (
                      <Button variant="outline" asChild className="w-full">
                        <a href="mailto:hello@answerpro24.com" data-testid="button-email-us">Send Email</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground">
                Find us in these cities, supporting home service professionals nationwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <Card key={index} className="hover-elevate" data-testid={`office-${index}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{office.city}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground font-medium">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{office.timezone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Support Hours
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Sales & General Support</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday:</span>
                          <span className="font-medium">8 AM - 8 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Saturday:</span>
                          <span className="font-medium">10 AM - 4 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday:</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Technical Support</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">For Customers:</span>
                          <span className="font-medium">24/7 Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Emergency Line:</span>
                          <span className="font-medium">(770) 404-9750</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Response Time:</span>
                          <span className="font-medium">&lt; 15 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Common Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to frequently asked questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} data-testid={`faq-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Don't wait for the next missed call. Start your free trial today 
                and see the difference professional call handling makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={handleStartTrial}
                  className="bg-background text-foreground hover:bg-background/90"
                  data-testid="button-contact-cta"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="tel:770-404-9750" data-testid="button-contact-call">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (770) 404-9750
                  </a>
                </Button>
              </div>
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