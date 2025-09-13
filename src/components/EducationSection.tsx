import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Pharmacy",
      institution: "Minufiya University",
      location: "Egypt",
      year: "2018-2022",
      description: "Strong foundation in analytical thinking, research methodology, and attention to detail.",
      highlights: ["Analytical Chemistry", "Research Methods", "Statistical Analysis"]
    }
  ];

  const certifications = [
    {
      name: "DEPI Scholarship",
      issuer: "Digital Egypt Platform Initiative",
      year: "2024",
      type: "Data Analysis Program",
      description: "Comprehensive training in data analysis tools and methodologies"
    },
    {
      name: "Advanced Excel Analytics",
      issuer: "Professional Development",
      year: "2023",
      type: "Technical Certification",
      description: "Power Query, Power Pivot, and advanced dashboard creation"
    },
    {
      name: "SQL for Data Analysis",
      issuer: "Database Certification",
      year: "2023",
      type: "Technical Certification",
      description: "Advanced querying, data manipulation, and database optimization"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A solid educational foundation complemented by specialized training in data analysis 
            and business intelligence technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16 animate-slide-up">
            <h3 className="font-display font-semibold text-2xl mb-8 text-foreground flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Academic Background
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="font-display font-semibold text-xl text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display font-semibold text-2xl mb-8 text-foreground flex items-center">
              <Award className="mr-3 text-accent" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {cert.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;