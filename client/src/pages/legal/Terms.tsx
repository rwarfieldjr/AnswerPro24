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
                Last updated: January 15, 2025
              </p>
            </div>

            <Card>
              <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        By accessing or using AnswerPro 24 services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        AnswerPro 24 provides AI-powered after-hours call answering and routing services specifically designed for home service businesses. Our service includes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>24/7 AI voice call screening and customer data collection</li>
                        <li>Intelligent call routing based on emergency criteria</li>
                        <li>Integration with customer relationship management (CRM) systems</li>
                        <li>Call recording, transcription, and reporting services</li>
                        <li>Real-time notifications and morning summary reports</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Responsibilities</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Account Setup:</strong> You must provide accurate, current, and complete information during registration and maintain the security of your account credentials.
                      </p>
                      <p>
                        <strong>Phone Number Setup:</strong> You are responsible for configuring call forwarding from your business line to our service number according to our provided instructions.
                      </p>
                      <p>
                        <strong>Escalation Rules:</strong> You must define appropriate emergency escalation criteria for your business. We are not liable for consequences resulting from misconfigured or inappropriate escalation rules.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability and Performance</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Uptime Commitment:</strong> We strive to maintain 99.9% service availability. Planned maintenance will be communicated in advance when possible.
                      </p>
                      <p>
                        <strong>AI Accuracy:</strong> While our AI system is highly accurate, no automated system is 100% perfect. You acknowledge that occasional misclassification of calls may occur.
                      </p>
                      <p>
                        <strong>Service Limitations:</strong> Our service is designed for business-to-business communication in English. We do not guarantee service for emergency services coordination or life-threatening situations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Billing and Payment Terms</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Subscription Fees:</strong> Monthly subscription fees are billed in advance and are non-refundable except as specifically stated in our refund policy.
                      </p>
                      <p>
                        <strong>Usage Charges:</strong> Per-minute call charges are billed monthly in arrears based on actual usage. Calls are billed in one-minute increments with a one-minute minimum.
                      </p>
                      <p>
                        <strong>Payment Terms:</strong> Payment is due within 30 days of invoice date. Service may be suspended for accounts with overdue balances exceeding 60 days.
                      </p>
                      <p>
                        <strong>Price Changes:</strong> We reserve the right to modify pricing with 30 days written notice to existing customers.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data and Privacy</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Call Recording:</strong> All calls may be recorded for quality assurance and AI training purposes. Recordings are automatically deleted after 90 days unless longer retention is specifically requested.
                      </p>
                      <p>
                        <strong>Data Usage:</strong> Anonymized and aggregated call data may be used to improve our AI models and service quality.
                      </p>
                      <p>
                        <strong>Privacy Compliance:</strong> Our handling of personal information is governed by our Privacy Policy, which is incorporated by reference into these terms.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Prohibited Uses</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>You agree not to use our service for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Illegal activities or violation of any applicable laws</li>
                        <li>Handling emergency services calls (911, medical emergencies)</li>
                        <li>Processing calls containing harassment, threats, or abusive content</li>
                        <li>Telemarketing, spam, or unsolicited promotional activities</li>
                        <li>Any activity that could damage, disable, or impair our service infrastructure</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANSWERPRO 24 SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOST PROFITS, LOST REVENUES, OR BUSINESS INTERRUPTION.
                      </p>
                      <p>
                        Our total liability for any claim relating to our services shall not exceed the amount paid by you to AnswerPro 24 in the twelve months preceding the claim.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Service Level Agreement</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Response Time:</strong> Emergency escalations will be processed within 30 seconds during normal operations.
                      </p>
                      <p>
                        <strong>Accuracy Commitment:</strong> We maintain a call classification accuracy rate of 95% or higher as measured over monthly periods.
                      </p>
                      <p>
                        <strong>Service Credits:</strong> If we fail to meet our uptime commitment, eligible customers may receive service credits as detailed in our Service Level Agreement document.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>By Customer:</strong> You may terminate your account at any time with 30 days written notice. No refunds will be provided for prepaid subscription fees.
                      </p>
                      <p>
                        <strong>By AnswerPro 24:</strong> We may terminate accounts for violation of these terms, non-payment, or if we discontinue the service with 60 days notice.
                      </p>
                      <p>
                        <strong>Data Export:</strong> Upon termination, you have 30 days to export your data before it is permanently deleted from our systems.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">11. Dispute Resolution</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Governing Law:</strong> These terms are governed by the laws of the State of Texas, without regard to conflict of law principles.
                      </p>
                      <p>
                        <strong>Arbitration:</strong> Any disputes arising from these terms or our services shall be resolved through binding arbitration in Austin, Texas, under the rules of the American Arbitration Association.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We reserve the right to modify these terms at any time. Significant changes will be communicated via email at least 30 days before they take effect. Continued use of our services after changes constitutes acceptance of the new terms.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        For questions about these Terms of Service, please contact us:
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p><strong>AnswerPro 24</strong></p>
                        <p>123 Tech Boulevard, Suite 400</p>
                        <p>Austin, TX 78701</p>
                        <p>Email: legal@answerpro24.com</p>
                        <p>Phone: (888) 000-0247</p>
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