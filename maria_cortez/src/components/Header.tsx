import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import clinicLogo from "@/assets/MariaCortezLogo.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/' || window.location.pathname === '' || window.location.hash === '#/') {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // We're on a different page, navigate to home first then scroll
      navigate("/");
      setIsMobileMenuOpen(false);
      // Wait for navigation to complete and DOM to update, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const goToHome = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const navigationItems = ["home", "tratamentos", "tecnologias", "contato"];

  return (
    <header 
      // AQUI ESTÁ A MUDANÇA:
      // Removemos a lógica condicional e aplicamos o estilo de fundo diretamente.
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-card transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            onClick={goToHome}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src={clinicLogo} 
              alt="Clínica Dra. Maria Cortez" 
              className="w-10 h-10 rounded-full"
            />
            <div className="text-2xl font-bold text-primary hidden sm:block">
              Dra. Maria Cortez
            </div>
          </div>
          
          <nav className="hidden xl:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => navigateToSection(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => navigateToSection("contato")}
            className="hidden xl:block bg-gradient-hero hover:shadow-medical transition-all duration-300"
          >
            Agendar Consulta
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden text-foreground hover:text-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div 
                  onClick={goToHome}
                  className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity mb-6"
                >
                  <img 
                    src={clinicLogo} 
                    alt="Clínica Dra. Maria Cortez" 
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-xl font-bold text-primary">
                    Dra. Maria Cortez
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => navigateToSection(item)}
                      className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 capitalize font-medium py-2 border-b border-border/50"
                    >
                      {item}
                    </button>
                  ))}
                </nav>

                <Button
                  onClick={() => navigateToSection("contato")}
                  className="bg-gradient-hero hover:shadow-medical transition-all duration-300 mt-6"
                >
                  Agendar Consulta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;