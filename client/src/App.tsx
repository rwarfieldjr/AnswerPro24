import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Industries from "@/pages/Industries";
import HowItWorks from "@/pages/HowItWorks";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SignupSuccess from "@/pages/SignupSuccess";
import SignupCancel from "@/pages/SignupCancel";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import NotFound from "@/pages/not-found";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/industries" component={Industries} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup/success" component={SignupSuccess} />
      <Route path="/signup/cancel" component={SignupCancel} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/terms" component={Terms} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="answerpro24-theme">
        <TooltipProvider>
          <ScrollToTop />
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
