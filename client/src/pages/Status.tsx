import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock, Activity } from "lucide-react";

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "outage";
  lastUpdated: string;
  description?: string;
}

const services: ServiceStatus[] = [
  {
    name: "AI Voice Processing",
    status: "operational",
    lastUpdated: "2 minutes ago",
    description: "All voice recognition and processing systems running normally"
  },
  {
    name: "Call Routing",
    status: "operational", 
    lastUpdated: "5 minutes ago",
    description: "Emergency escalation and morning scheduling working properly"
  },
  {
    name: "CRM Integrations",
    status: "operational",
    lastUpdated: "1 minute ago",
    description: "All webhook and API integrations functioning normally"
  },
  {
    name: "Customer Portal",
    status: "operational",
    lastUpdated: "3 minutes ago",
    description: "Dashboard and reporting systems available"
  }
];

const metrics = [
  { label: "Uptime (30 days)", value: "99.98%", icon: Activity },
  { label: "Avg Response Time", value: "< 2s", icon: Clock },
  { label: "Calls Processed Today", value: "2,847", icon: CheckCircle },
  { label: "Emergency Escalations", value: "23", icon: AlertCircle }
];

const incidents = [
  {
    date: "January 15, 2025",
    title: "Brief API Latency",
    status: "Resolved",
    duration: "12 minutes",
    description: "Temporary increase in response times for CRM webhook deliveries. All calls were processed normally."
  },
  {
    date: "January 10, 2025", 
    title: "Scheduled Maintenance",
    status: "Completed",
    duration: "2 hours",
    description: "Planned infrastructure upgrades to improve performance. Zero impact on call processing."
  }
];

export default function Status() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusBadge = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Operational</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Degraded Performance</Badge>;
      case 'outage':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Service Outage</Badge>;
    }
  };

  const allOperational = services.every(service => service.status === 'operational');

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-status-hero-title">
                System Status
              </h1>
              <div className="flex items-center justify-center space-x-2">
                {allOperational ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-xl text-green-600 font-medium">All Systems Operational</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-6 w-6 text-yellow-500" />
                    <span className="text-xl text-yellow-600 font-medium">Some Services Experiencing Issues</span>
                  </>
                )}
              </div>
              <p className="text-muted-foreground" data-testid="text-status-subtitle">
                Real-time status of all AnswerPro 24 services and infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Status</h2>
              <p className="text-muted-foreground">Current operational status of all core services</p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} data-testid={`service-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          {service.description && (
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">Updated {service.lastUpdated}</span>
                        {getStatusBadge(service.status)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Performance Metrics</h2>
              <p className="text-muted-foreground">Key performance indicators for our services</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center" data-testid={`metric-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Incident History */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Recent Incidents</h2>
              <p className="text-muted-foreground">Past 30 days of service incidents and maintenance</p>
            </div>

            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <Card key={index} data-testid={`incident-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{incident.title}</h3>
                          <Badge variant="secondary">{incident.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{incident.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{incident.date}</span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {incidents.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Recent Incidents</h3>
                  <p className="text-muted-foreground">All systems have been running smoothly for the past 30 days.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Subscribe for Updates */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Get notified about service updates and planned maintenance windows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:hello@answerpro24.com?subject=Status Updates Subscription"
                    className="text-primary hover:underline"
                    data-testid="link-status-updates"
                  >
                    Subscribe to Email Updates
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a 
                    href="/contact"
                    className="text-primary hover:underline"
                    data-testid="link-status-contact"
                  >
                    Contact Support
                  </a>
                </div>
              </CardContent>
            </Card>
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