import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What counts as an emergency?",
    answer: "We'll use your rules (and our defaults) — e.g., active leaks, no heat under 40°F, electrical danger. You can customize escalation criteria based on your specific service requirements and risk tolerance."
  },
  {
    question: "How do I forward calls after hours?",
    answer: "We'll send step-by-step instructions for your carrier or VoIP system. The process typically takes 5-10 minutes and works with any phone provider. You keep your existing number — just forward after business hours."
  },
  {
    question: "Do you work with teams?",
    answer: "Yes, round-robin and on-call trees are supported. You can set up multiple technicians, define rotation schedules, and create backup escalation paths. Perfect for teams of any size."
  },
  {
    question: "Can I start without switching providers?",
    answer: "Yes. Keep your existing number — just forward after hours. There's no need to change carriers, update marketing materials, or inform customers. The transition is completely seamless."
  },
  {
    question: "What if the AI can't understand the caller?",
    answer: "If our AI encounters difficulty, calls are automatically escalated to a live backup operator who can assist. We also continuously improve our AI based on real interactions in your industry."
  },
  {
    question: "How quickly do emergency calls get through?",
    answer: "Emergency calls that meet your criteria are immediately forwarded to your on-call technician, typically within 30 seconds of the AI assessment. You can also set up backup escalation paths."
  },
  {
    question: "Can I customize the greeting and questions?",
    answer: "Absolutely. You can personalize the greeting with your company name and customize the screening questions based on your services. We'll help you set this up during onboarding."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. We provide free onboarding assistance, including help with call forwarding setup and customizing your escalation rules. You can start your free trial immediately."
  }
];

export default function FAQAccordion() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-faq-subtitle">
            Get answers to common questions about our service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}