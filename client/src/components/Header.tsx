import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, User, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { supabase } from "@/lib/supabase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User as SupabaseUser } from "@supabase/supabase-js";
import logoImage from "@assets/AnswerPro Logo_1758032356924.jpeg";
import phoneLogoImage from "@assets/Screen Shot 2025-10-06 at 3.00.31 PM_1759779415399.png";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "Industries", href: "/industries" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header({ onStartTrial }: { onStartTrial: () => void }) {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLocation("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="bg-primary/10 rounded-lg p-1.5">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-foreground">AnswerPro</span>
              <span className="text-primary"> 24</span>
            </span>
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
            <ThemeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" data-testid="button-user-menu">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Logged in as</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLocation("/portal")} data-testid="menu-portal">
                    <User className="mr-2 h-4 w-4" />
                    Portal
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} data-testid="menu-logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => setLocation("/login")}
                  data-testid="button-login"
                >
                  Login
                </Button>
                <Button onClick={onStartTrial} data-testid="button-start-trial">
                  Start Free Trial
                </Button>
              </>
            )}
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Theme:</span>
                    <ThemeToggle />
                  </div>
                  {user ? (
                    <>
                      <div className="text-sm text-muted-foreground">
                        Logged in as: <span className="font-medium text-foreground">{user.email}</span>
                      </div>
                      <Button 
                        onClick={() => { setLocation("/portal"); setIsOpen(false); }} 
                        variant="outline" 
                        className="w-full"
                        data-testid="mobile-button-portal"
                      >
                        Portal
                      </Button>
                      <Button 
                        onClick={() => { handleLogout(); setIsOpen(false); }} 
                        variant="outline" 
                        className="w-full"
                        data-testid="mobile-button-logout"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        onClick={() => { setLocation("/login"); setIsOpen(false); }} 
                        variant="outline" 
                        className="w-full"
                        data-testid="mobile-button-login"
                      >
                        Login
                      </Button>
                      <Button 
                        onClick={() => { onStartTrial(); setIsOpen(false); }} 
                        className="w-full" 
                        data-testid="mobile-button-start-trial"
                      >
                        Start Free Trial
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
