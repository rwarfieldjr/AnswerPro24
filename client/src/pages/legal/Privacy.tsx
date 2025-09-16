import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import LeadFormModal from "@/components/LeadFormModal";

export default function Privacy() {
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
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-privacy-title">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: January 15, 2025
              </p>
            </div>

            <Card>
              <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Business Information:</strong> When you sign up for AnswerPro 24, we collect business contact information including company name, contact person details, phone numbers, email addresses, and service area information.
                      </p>
                      <p>
                        <strong>Call Data:</strong> We process and temporarily store call recordings, transcripts, and metadata to provide our AI-powered call screening and routing services. This includes caller information, call duration, classification results, and routing decisions.
                      </p>
                      <p>
                        <strong>Usage Information:</strong> We collect data about how you use our services, including call volumes, escalation patterns, and system interactions to improve our service quality.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Service Delivery:</strong> We use your information to provide call answering, screening, and routing services as described in our service agreement.
                      </p>
                      <p>
                        <strong>AI Training:</strong> Call data is used to train and improve our AI models to better serve home service businesses. All data is anonymized and aggregated for this purpose.
                      </p>
                      <p>
                        <strong>Communication:</strong> We use contact information to provide customer support, send service updates, and deliver monthly usage reports.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Service Providers:</strong> We work with trusted third-party providers for hosting, payment processing, and analytics. These providers are bound by strict confidentiality agreements.
                      </p>
                      <p>
                        <strong>CRM Integrations:</strong> When you choose to integrate with CRM systems, we share lead and call data as directed by you to fulfill the integration functionality.
                      </p>
                      <p>
                        <strong>Legal Requirements:</strong> We may disclose information when required by law, regulation, or legal process.
                      </p>
                      <p>
                        <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We implement industry-standard security measures to protect your information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>All data is encrypted in transit and at rest using AES-256 encryption</li>
                        <li>Access to customer data is restricted to authorized personnel only</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>SOC 2 Type II compliance for data handling procedures</li>
                        <li>Call recordings are automatically deleted after 90 days unless otherwise specified</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong>Call Recordings:</strong> Deleted automatically after 90 days unless longer retention is requested for quality assurance purposes.
                      </p>
                      <p>
                        <strong>Call Transcripts and Metadata:</strong> Retained for 12 months to provide reporting and analytics services.
                      </p>
                      <p>
                        <strong>Account Information:</strong> Maintained for the duration of our business relationship and up to 7 years afterward for legal and accounting purposes.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access and review the personal information we have about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your information (subject to legal retention requirements)</li>
                        <li>Opt out of non-essential communications</li>
                        <li>Export your data in a portable format</li>
                        <li>Withdraw consent for data processing where applicable</li>
                      </ul>
                      <p>
                        To exercise these rights, contact us at privacy@answerpro24.com or (888) 000-0247.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Our website uses essential cookies for functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Our services are designed for businesses and are not intended for individuals under 18. We do not knowingly collect personal information from children.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our service dashboard. Continued use of our services after changes constitutes acceptance of the updated policy.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        If you have questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p><strong>AnswerPro 24</strong></p>
                        <p>123 Tech Boulevard, Suite 400</p>
                        <p>Austin, TX 78701</p>
                        <p>Email: privacy@answerpro24.com</p>
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