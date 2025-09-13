import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Code, 
  FileSpreadsheet, 
  Users, 
  MessageSquare,
  Lightbulb,
  Target
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Excel", icon: FileSpreadsheet, level: "Expert", color: "bg-green-500" },
    { name: "SQL", icon: Database, level: "Advanced", color: "bg-blue-500" },
    { name: "Python", icon: Code, level: "Intermediate", color: "bg-yellow-500" },
    { name: "Tableau", icon: BarChart3, level: "Advanced", color: "bg-purple-500" },
    { name: "KPI Reporting", icon: Target, level: "Expert", color: "bg-green-500" },
    { name: "Dashboard Development", icon: BarChart3, level: "Advanced", color: "bg-blue-500" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare, description: "Clear presentation of complex data insights" },
    { name: "Collaboration", icon: Users, description: "Cross-functional teamwork and stakeholder engagement" },
    { name: "Problem Solving", icon: Lightbulb, description: "Creative approach to analytical challenges" },
    { name: "Analytical Thinking", icon: Target, description: "Strategic data-driven decision making" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set combining technical proficiency with strong analytical capabilities 
            to deliver impactful business solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <h3 className="font-display font-semibold text-2xl mb-8 text-foreground flex items-center">
              <Code className="mr-3 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <Card key={skill.name} className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display font-semibold text-2xl mb-8 text-foreground flex items-center">
              <Users className="mr-3 text-accent" />
              Professional Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <Card key={skill.name} className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;