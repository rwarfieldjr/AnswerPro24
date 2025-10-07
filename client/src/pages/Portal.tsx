import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import LeadFormModal from "@/components/LeadFormModal";

export default function Portal() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleStartTrial = () => {
    setIsLeadFormOpen(true);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLocation("/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        setLocation("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setLocation]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-foreground" data-testid="text-portal-title">
                Client Portal
              </h1>
              <Button 
                onClick={handleLogout} 
                variant="outline"
                data-testid="button-logout"
              >
                Logout
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Welcome Back!</CardTitle>
                <CardDescription>
                  You are logged in as: <strong>{user?.email}</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This is your client portal dashboard. Here you can manage your AnswerPro24 service, view call reports, and access your account settings.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Call Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    View detailed reports of all your after-hours calls
                  </p>
                  <Button variant="outline" className="w-full" data-testid="button-view-reports">
                    View Reports
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage your account preferences and settings
                  </p>
                  <Button variant="outline" className="w-full" data-testid="button-settings">
                    Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Billing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    View invoices and manage your subscription
                  </p>
                  <Button variant="outline" className="w-full" data-testid="button-billing">
                    View Billing
                  </Button>
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
