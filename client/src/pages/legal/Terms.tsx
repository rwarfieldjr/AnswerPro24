import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import LeadFormModal from "@/components/LeadFormModal";

export default function Terms() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-terms-title">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Effective Date: October 6, 2025
              </p>
            </div>

            <Card>
              <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        By accessing or using AnswerPro24 ("AnswerPro24," "we," "our," or the "Service"), you agree to be bound by these Terms of Service ("Terms") and all applicable laws and regulations. If you do not agree, do not use the Service.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        AnswerPro24 provides AI-powered after-hours call answering and routing for home-service businesses. Features may include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>24/7 AI voice screening and customer data capture</li>
                        <li>Intelligent call routing and escalation per your rules</li>
                        <li>CRM integration and lead forwarding</li>
                        <li>Call recording, transcription, analytics, and reporting</li>
                        <li>Real-time notifications and daily summaries</li>
                      </ul>
                      <p>
                        We may enhance or modify features to improve reliability or performance.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Responsibilities</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Accuracy:</strong> Provide accurate, complete, and current registration information and keep credentials secure.
                      </p>
                      <p>
                        <strong>Call Forwarding:</strong> Configure forwarding from your business line(s) to our assigned number(s).
                      </p>
                      <p>
                        <strong>Escalation Rules:</strong> Define and maintain your emergency/escalation criteria. You are responsible for results arising from your configuration.
                      </p>
                      <p>
                        <strong>Authority:</strong> You represent that you are authorized to bind your business to these Terms.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability and Performance</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Uptime Target:</strong> 99.9% monthly uptime target (scheduled maintenance and force majeure excluded).
                      </p>
                      <p>
                        <strong>AI Accuracy:</strong> While continuously trained, AI and transcriptions may occasionally misclassify or contain errors.
                      </p>
                      <p>
                        <strong>Limitations:</strong> The Service is not a substitute for 911 or emergency dispatch and is intended for business communications in English.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Billing and Payment</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Subscription Fees:</strong> Billed in advance; non-refundable except as stated in our refund policy.
                      </p>
                      <p>
                        <strong>Usage Fees:</strong> Per-minute charges billed monthly in arrears, one-minute increments with a one-minute minimum.
                      </p>
                      <p>
                        <strong>Payment Terms:</strong> Net 30 from invoice date. Overdue accounts (&gt;60 days) may be suspended or terminated.
                      </p>
                      <p>
                        <strong>Price Changes:</strong> We may modify pricing with 30 days' written notice. Continued use after the effective date constitutes acceptance.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data and Privacy</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Recording/Transcription:</strong> Calls may be recorded and transcribed for quality assurance, service improvement, and dispute resolution. Retained for 90 days unless you request longer retention in writing.
                      </p>
                      <p>
                        <strong>Data Use:</strong> We may use aggregated, anonymized data to enhance models and service quality.
                      </p>
                      <p>
                        <strong>Privacy Policy:</strong> Personal information is handled per our Privacy Policy (incorporated by reference): <a href="/legal/privacy" className="text-primary hover:underline">https://answerpro24.com/privacy</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Prohibited Uses</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>You agree not to use the Service for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Illegal or fraudulent activity</li>
                        <li>Emergency or life-threatening situations</li>
                        <li>Harassing, abusive, or threatening communications</li>
                        <li>Telemarketing, spam, or unsolicited promotions</li>
                        <li>Interfering with or degrading our systems or security</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANSWERPRO24 AND ITS AFFILIATES WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR BUSINESS INTERRUPTION.
                      </p>
                      <p>
                        Our aggregate liability arising out of or related to the Service shall not exceed the amounts you paid to AnswerPro24 in the twelve (12) months preceding the claim.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Service Level Commitments</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Escalation Handling:</strong> Emergency/escalation calls processed in ~30 seconds during normal operations.
                      </p>
                      <p>
                        <strong>Accuracy:</strong> Target ≥95% call-classification accuracy measured monthly.
                      </p>
                      <p>
                        <strong>Service Credits:</strong> If uptime falls below target, customers may be eligible for credits as described in our Service Level Agreement (SLA): <a href="https://answerpro24.com/sla" className="text-primary hover:underline">https://answerpro24.com/sla</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>By You:</strong> Cancel at any time with 30 days' written notice. Prepaid fees are non-refundable.
                      </p>
                      <p>
                        <strong>By Us:</strong> We may suspend or terminate for breach, non-payment, or service discontinuation (60 days' notice for discontinuation where practicable).
                      </p>
                      <p>
                        <strong>Data Export:</strong> You have 30 days after termination to export your data. After that, it may be permanently deleted.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">11. Dispute Resolution</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Governing Law:</strong> Texas law governs these Terms, excluding conflict-of-law rules.
                      </p>
                      <p>
                        <strong>Arbitration:</strong> Disputes will be resolved exclusively by binding arbitration in Austin, Texas, under the American Arbitration Association rules.
                      </p>
                      <p>
                        <strong>Class Action Waiver:</strong> Disputes must be brought on an individual basis, not as a class or representative action.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifications</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We may update these Terms from time to time. Material changes will be communicated at least 30 days before taking effect. Your continued use after the effective date constitutes acceptance.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div className="bg-muted p-4 rounded-lg">
                        <p><strong>AnswerPro24</strong></p>
                        <p>403 Woods Lake Rd, Suite 100</p>
                        <p>Greenville, SC 29607</p>
                        <p>Email: legal@answerpro24.com</p>
                        <p>Phone: (864) 404-9606</p>
                      </div>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
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
