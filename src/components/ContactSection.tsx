import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, Send, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "youssef.magdi@example.com",
      link: "mailto:youssef.magdi@example.com",
      description: "Professional inquiries and collaborations"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/youssef-magdi",
      link: "https://linkedin.com/in/youssef-magdi",
      description: "Professional network and career updates"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Egypt",
      description: "Available for remote and on-site opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how my analytical 
            expertise can drive your business forward.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="font-display font-semibold text-2xl mb-8 text-foreground">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <Card key={contact.label} className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium flex items-center group"
                          >
                            {contact.value}
                            <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-accent">
                <h4 className="font-semibold text-lg mb-3">Available for Opportunities</h4>
                <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                  Currently seeking new challenges in data analysis, business intelligence, 
                  and analytics consulting. Open to both full-time positions and project-based work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Data Analysis", "Business Intelligence", "Consulting", "Remote Work"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary-foreground/20 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-gradient-card shadow-elegant sticky top-8">
                <h3 className="font-display font-semibold text-2xl mb-6 text-foreground">
                  Ready to Collaborate?
                </h3>
                
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🎯 For Employers</h4>
                      <p className="text-sm text-muted-foreground">
                        Looking for a data analyst who can transform complex datasets into clear, 
                        actionable business insights.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🤝 For Collaborations</h4>
                      <p className="text-sm text-muted-foreground">
                        Interested in partnering on data analysis projects or knowledge sharing initiatives.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">📊 For Consulting</h4>
                      <p className="text-sm text-muted-foreground">
                        Need expert analysis for specific projects or want to improve your data processes.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:shadow-accent transition-all duration-300 group w-full"
                      onClick={() => window.location.href = 'mailto:youssef.magdi@example.com?subject=Professional Inquiry&body=Hello Youssef, I am interested in discussing...'}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="hover:shadow-card transition-all duration-300 w-full"
                      onClick={() => window.open('https://linkedin.com/in/youssef-magdi', '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground">
                    Response time: <span className="text-primary font-medium">Within 24 hours</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;