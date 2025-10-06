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
          <div className="space-y-12">
            {/* Privacy Policy */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-foreground" data-testid="text-privacy-title">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground">
                  Effective Date: October 6, 2025
                </p>
              </div>

              <Card>
                <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
                  <section className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          AnswerPro24 ("AnswerPro24," "we," "us") provides AI-powered after-hours call answering and routing for home-service businesses. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our services, sites, and related tools (the "Service").
                        </p>
                        <p>
                          By using the Service, you agree to this Policy and our Terms of Service.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">2. Roles and Definitions</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Customer:</strong> the business that signs up for the Service.
                        </p>
                        <p>
                          <strong>End Caller:</strong> the individual who calls or is called on behalf of a Customer.
                        </p>
                        <p>
                          <strong>Controller vs. Processor:</strong> For Customer contact data and call content, the Customer is the data controller and AnswerPro24 is the data processor. For our own marketing, billing, fraud prevention, and analytics, AnswerPro24 is the controller.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information We Collect</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Account & Billing:</strong> business name, contact person, email, phone, address, payment method, invoices.
                        </p>
                        <p>
                          <strong>Service Data:</strong> phone numbers, call metadata (timestamps, duration), call audio, recordings, transcriptions, routing/escalation settings, CRM integration data, message logs, support tickets.
                        </p>
                        <p>
                          <strong>Technical Data:</strong> device/browser info, IP address, cookies, usage logs, event logs, diagnostics.
                        </p>
                        <p>
                          <strong>Communications:</strong> emails, chats, support interactions, surveys, testimonials (with permission).
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Information</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Provide, operate, and improve the Service.</li>
                          <li>Screen, route, record, transcribe, and analyze calls.</li>
                          <li>Send real-time alerts and daily summaries.</li>
                          <li>Detect abuse, secure the Service, and debug issues.</li>
                          <li>Train and evaluate models using aggregated and/or de-identified data.</li>
                          <li>Billing, account management, and compliance with law.</li>
                        </ul>
                        <p>
                          We do not sell personal information.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">5. Call Recording & Consent</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Calls may be recorded and/or transcribed. Customer is responsible for obtaining all legally required consents from End Callers (including two-party consent jurisdictions). If you use SMS/A2P messaging with us or your CRM, you must obtain valid opt-in/consent and honor opt-out requests.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Recordings/Transcripts:</strong> retained 90 days by default, unless Customer requests a longer period in writing.
                        </p>
                        <p>
                          <strong>Logs/Metadata:</strong> retained as needed for security, operations, and legal requirements.
                        </p>
                        <p>
                          <strong>Deletion:</strong> upon verified request and subject to legal holds/backups, we delete or anonymize data.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sharing & Disclosure</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>We may share information with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Service Providers/Subprocessors (e.g., cloud hosting, telephony, storage, analytics, support).</li>
                          <li>CRM/Integrations at Customer's direction.</li>
                          <li>Legal/Compliance: to comply with law, enforce agreements, or protect rights and safety.</li>
                          <li>Corporate Transactions: merger, acquisition, or asset transfer (with continued protections).</li>
                        </ul>
                        <p>
                          A current list of subprocessors is available on request.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">8. Security</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          We use administrative, technical, and physical safeguards (encryption in transit, access controls, monitoring, least-privilege). No system is 100% secure; Customers must secure their own credentials, seats, and integrations.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          If data is transferred across borders, we use legally recognized mechanisms (e.g., SCCs) where required.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">10. Your Choices & Rights</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Depending on your location, you may have rights to access, correct, delete, or restrict processing.
                        </p>
                        <p>
                          <strong>Customers:</strong> manage your data in the dashboard or contact us.
                        </p>
                        <p>
                          <strong>End Callers:</strong> please contact the relevant Customer (data controller). We will assist the Customer as the processor.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">11. Children</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          The Service is for business use and not directed to children under 13 (or other local minimum age). We do not knowingly collect such data.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to this Policy</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          We may update this Policy. Material changes will be notified at least 30 days before taking effect.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact</h2>
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

            {/* Service Level Agreement */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-foreground">
                  Service Level Agreement (SLA)
                </h1>
                <p className="text-muted-foreground">
                  Effective Date: October 6, 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  This SLA forms part of the Terms of Service.
                </p>
              </div>

              <Card>
                <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
                  <section className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">1. Scope</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          This SLA defines uptime, support targets, service credits, and exclusions for the AnswerPro24 platform and core telephony features we control.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uptime Target</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Monthly Uptime Target:</strong> 99.9%
                        </p>
                        <p>
                          <strong>Measurement:</strong> calendar-month availability of the Service endpoints, excluding Exclusions (below).
                        </p>
                        <p>
                          <strong>Downtime:</strong> minutes when the Service is unavailable for all Customers due to AnswerPro24-controlled systems.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">3. Exclusions</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>No credits for downtime caused by:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Force majeure (natural disasters, war, labor actions, internet backbone issues).</li>
                          <li>Carrier outages or third-party telephony/CRM providers.</li>
                          <li>Customer networks, call-forwarding misconfigurations, number porting issues, or credential misuse.</li>
                          <li>Scheduled maintenance (with prior notice where practicable).</li>
                          <li>Security events requiring emergency action.</li>
                          <li>Beta or experimental features.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">4. Maintenance</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Planned Maintenance:</strong> typically scheduled during low-traffic windows with advance notice.
                        </p>
                        <p>
                          <strong>Emergency Maintenance:</strong> performed as needed for security/stability.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">5. Support & Response Targets</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Standard Support Hours:</strong> 9am–6pm ET, Mon–Fri (excluding U.S. holidays).
                        </p>
                        <p>
                          <strong>Sev-1 (Critical Outage):</strong> target initial response &lt; 1 hour during Support Hours; best-effort outside hours.
                        </p>
                        <p>
                          <strong>Sev-2 (Degraded Service / Major Feature Impact):</strong> target initial response &lt; 4 hours.
                        </p>
                        <p>
                          <strong>Sev-3 (General Issue/Question):</strong> target initial response next business day.
                        </p>
                        <p>
                          Submit tickets via <a href="mailto:support@answerpro24.com" className="text-primary hover:underline">support@answerpro24.com</a> or your portal.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">6. Escalation Handling</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Emergency Escalations processed in ~30 seconds during normal operations (non-binding target).
                        </p>
                        <p>
                          Customers must keep escalation rules, on-call contacts, and numbers accurate.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">7. Accuracy Target</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>Classification Accuracy:</strong> monthly target ≥ 95% across sufficiently large sample sizes.
                        </p>
                        <p>
                          Variance may occur by industry, audio quality, caller behavior, and configuration.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">8. Service Credits (Uptime)</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          If Monthly Uptime falls below target, you may request a credit within 30 days after the month ends:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>99.0%–99.89%: 5% of monthly subscription fee</li>
                          <li>98.0%–98.99%: 10% of monthly subscription fee</li>
                          <li>&lt;98.0%: 20% of monthly subscription fee</li>
                        </ul>
                        <p>
                          Credits apply to future invoices only and exclude usage charges, taxes, and third-party fees. Credits are the sole and exclusive remedy for uptime shortfalls.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">9. Claim Process</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Email <a href="mailto:billing@answerpro24.com" className="text-primary hover:underline">billing@answerpro24.com</a> with: account ID, month impacted, and incident details. We will verify metrics using our logs and monitoring systems.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          We may update this SLA; material changes will be notified at least 30 days before taking effect.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
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
