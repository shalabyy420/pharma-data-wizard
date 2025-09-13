import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      
      <section id="about" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As a dedicated Data Analysis Specialist with a strong foundation in pharmacy and analytical sciences, 
              I bring a unique perspective to data interpretation and business intelligence. My expertise spans 
              across multiple analytical tools and methodologies, enabling me to transform complex datasets into 
              clear, actionable insights that drive strategic decision-making.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in Excel advanced functions, SQL database management, Python programming, 
              and Tableau visualization, I specialize in creating comprehensive dashboards and KPI reporting 
              systems that empower organizations to make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </section>
      
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Youssef Magdi Shalaby. All rights reserved. | Data Analysis Specialist
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;