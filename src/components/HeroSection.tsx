import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Youssef Magdi Shalaby
          </h1>
          <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl mb-8 text-foreground">
            Data Analysis Specialist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights with expertise in 
            <span className="text-primary font-medium"> Excel, SQL, Python, and Tableau</span>. 
            Specialized in KPI reporting, dashboard development, and delivering analytical solutions 
            that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-accent transition-all duration-300 group"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="hover:shadow-card transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-6 animate-slide-up">
            <a 
              href="mailto:youssef.magdi@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/youssef-magdi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;