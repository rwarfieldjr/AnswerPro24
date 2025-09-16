import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImage from "@assets/generated_images/AnswerPro_24_main_logo_f019b18c.png";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Industries", href: "/industries" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header({ onStartTrial }: { onStartTrial: () => void }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <img src={logoImage} alt="AnswerPro 24" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:888-000-0247"
              className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80"
              data-testid="link-phone"
            >
              <Phone className="h-4 w-4" />
              <span>(888) 000-0247</span>
            </a>
            <ThemeToggle />
            <Button onClick={onStartTrial} data-testid="button-start-trial">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location === item.href ? "text-primary" : "text-foreground"
                    }`}
                    data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t space-y-4">
                  <a
                    href="tel:888-000-0247"
                    className="flex items-center space-x-2 text-lg font-medium text-primary"
                    data-testid="mobile-link-phone"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(888) 000-0247</span>
                  </a>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Theme:</span>
                    <ThemeToggle />
                  </div>
                  <Button onClick={() => { onStartTrial(); setIsOpen(false); }} className="w-full" data-testid="mobile-button-start-trial">
                    Start Free Trial
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}