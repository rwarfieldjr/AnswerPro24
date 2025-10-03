import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const step1Schema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  industry: z.string().min(1, "Please select an industry"),
  serviceArea: z.string().min(1, "Service area is required"),
  transactionalConsent: z.boolean().refine(val => val === true, "You must consent to receive transactional messages"),
  marketingConsent: z.boolean().optional(),
});

const step2Schema = z.object({
  website: z.string().min(1, "Company website is required"),
  onCallScheduleLink: z.string().optional(),
  currentVolume: z.string().min(1, "Please select call volume"),
  afterHoursTimeFrame: z.string().min(1, "Please select after-hours time frame"),
  afterHoursNumber: z.string().min(10, "Please enter a valid phone number"),
  urgentPhoneNumber: z.string().optional(),
  notes: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

interface LeadFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadFormModal({ open, onOpenChange }: LeadFormModalProps) {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { toast } = useToast();

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      industry: "",
      serviceArea: "",
      transactionalConsent: false,
      marketingConsent: false,
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      website: "",
      onCallScheduleLink: "",
      currentVolume: "",
      afterHoursTimeFrame: "",
      afterHoursNumber: "",
      urgentPhoneNumber: "",
      notes: "",
    },
  });

  const onStep1Submit = (data: Step1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2Submit = async (data: Step2Data) => {
    setStep2Data(data);
    setIsRedirecting(true);
    
    try {
      const leadData = {
        ...step1Data,
        ...data,
        transactionalConsent: step1Data?.transactionalConsent ? "true" : "false",
        marketingConsent: step1Data?.marketingConsent ? "true" : "false",
      };

      const response = await apiRequest("POST", "/api/create-checkout-session", {
        email: step1Data?.email,
        companyName: step1Data?.companyName,
        leadData,
      });
      const result = await response.json();
      
      window.location.href = result.url;
    } catch (error) {
      setIsRedirecting(false);
      toast({
        title: "Error",
        description: "Failed to initialize checkout. Please try again or call (770) 404-9750",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setStep(1);
    setStep1Data(null);
    setStep2Data(null);
    setIsRedirecting(false);
    step1Form.reset();
    step2Form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-lead-form">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Start Your Free Trial"}
            {step === 2 && "Tell Us About Your Company"}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && "Tell us about your business and we'll get you set up with AI-powered after-hours answering."}
            {step === 2 && "Provide details about your company operations and preferences. You'll then complete payment through Stripe Checkout."}
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={step1Form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="ABC Plumbing" {...field} data-testid="input-company-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step1Form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} data-testid="input-contact-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={step1Form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step1Form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@abcplumbing.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={step1Form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-industry">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="hvac">HVAC</SelectItem>
                        <SelectItem value="garage-door">Garage Door</SelectItem>
                        <SelectItem value="locksmith">Locksmith</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step1Form.control}
                name="serviceArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Area *</FormLabel>
                    <FormControl>
                      <Input placeholder="City, ZIP" {...field} data-testid="input-service-area" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step1Form.control}
                name="transactionalConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-transactional-consent"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out. *
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step1Form.control}
                name="marketingConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-marketing-consent"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1"
                  data-testid="button-next-step-1"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-4">
              <FormField
                control={step2Form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Website *</FormLabel>
                    <FormControl>
                      <Input placeholder="https://abcplumbing.com" {...field} data-testid="input-website" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="onCallScheduleLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>On-Call Schedule Link (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://calendly.com/your-schedule" {...field} data-testid="input-schedule-link" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="currentVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>After-Hours Call Volume *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-volume">
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-20">0-20 calls/month</SelectItem>
                        <SelectItem value="21-100">21-100 calls/month</SelectItem>
                        <SelectItem value="100+">100+ calls/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="afterHoursTimeFrame"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>After-Hours Time Frame *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-timeframe">
                          <SelectValue placeholder="Select time frame" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="6pm-9am">6pm to 9am</SelectItem>
                        <SelectItem value="5pm-8am">5pm to 8am</SelectItem>
                        <SelectItem value="24hr">24 Hour Coverage</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={step2Form.control}
                  name="afterHoursNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>After-Hours Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} data-testid="input-after-hours-number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={step2Form.control}
                  name="urgentPhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Urgent Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 987-6543" {...field} data-testid="input-urgent-number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={step2Form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (Knowledge Base not on your website)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional information we should know..." 
                        {...field} 
                        data-testid="textarea-notes"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={isRedirecting}
                  data-testid="button-next-step-2"
                >
                  {isRedirecting ? "Redirecting to Checkout..." : "Continue to Checkout"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}