import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  ExternalLink, 
  Database, 
  TrendingUp, 
  FileSpreadsheet,
  Filter
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sales Analysis Dashboard",
      description: "Comprehensive sales performance dashboard analyzing revenue trends, customer segments, and product performance across multiple regions.",
      technologies: ["Excel", "Power Query", "Power Pivot", "Data Visualization"],
      features: [
        "Data cleaning and transformation from multiple sources",
        "Interactive Power Query data modeling",
        "Advanced Power Pivot calculations and KPIs",
        "Dynamic dashboard with drill-down capabilities",
        "Automated reporting for stakeholder presentations"
      ],
      metrics: [
        { label: "Data Points Processed", value: "50K+" },
        { label: "Time Saved", value: "15 hours/week" },
        { label: "Accuracy Improvement", value: "95%" }
      ],
      icon: BarChart3,
      color: "primary"
    },
    {
      title: "KPI Reporting System",
      description: "Automated KPI monitoring system tracking key business metrics with real-time alerts and performance indicators.",
      technologies: ["SQL", "Tableau", "Data Modeling", "Business Intelligence"],
      features: [
        "Real-time data connection and refresh",
        "Custom KPI calculations and benchmarks",
        "Alert system for metric thresholds",
        "Executive-level reporting templates",
        "Mobile-responsive dashboard design"
      ],
      metrics: [
        { label: "KPIs Tracked", value: "25+" },
        { label: "Report Generation", value: "Automated" },
        { label: "User Adoption", value: "100%" }
      ],
      icon: TrendingUp,
      color: "accent"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced customer segmentation project using Python and machine learning to identify high-value customer groups and predict churn.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQL"],
      features: [
        "RFM analysis for customer segmentation",
        "Churn prediction using machine learning",
        "Customer lifetime value calculation",
        "Behavioral pattern analysis",
        "Automated customer scoring system"
      ],
      metrics: [
        { label: "Customers Analyzed", value: "100K+" },
        { label: "Churn Prediction Accuracy", value: "87%" },
        { label: "Revenue Impact", value: "+23%" }
      ],
      icon: Database,
      color: "primary"
    },
    {
      title: "Financial Performance Analytics",
      description: "Comprehensive financial analysis tool for tracking revenue, expenses, and profitability metrics with interactive visualizations.",
      technologies: ["Tableau", "SQL", "Excel", "Power BI"],
      features: [
        "Multi-dimensional profit & loss analysis",
        "Budget vs actual variance reporting",
        "Cash flow forecasting models",
        "Cost center performance tracking",
        "Executive financial dashboards"
      ],
      metrics: [
        { label: "Financial Models", value: "12" },
        { label: "Forecast Accuracy", value: "92%" },
        { label: "Reporting Time Reduction", value: "60%" }
      ],
      icon: TrendingUp,
      color: "accent"
    }
  ];

  const upcomingProjects = [
    {
      title: "Python Analytics Pipeline",
      description: "Developing automated data pipeline using Python for advanced statistical analysis and machine learning insights.",
      status: "In Development",
      technologies: ["Python", "Pandas", "NumPy", "Machine Learning"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of data analysis expertise, demonstrating problem-solving 
            capabilities and technical proficiency in delivering business value.
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className={`p-6 bg-gradient-card shadow-elegant hover:shadow-accent transition-all duration-500 transform hover:-translate-y-2 animate-slide-up flex flex-col h-full`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg mr-3`}>
                      <project.icon className={`h-6 w-6 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className={`text-xs ${project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-foreground flex items-center text-sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <h4 className="font-semibold text-foreground flex items-center text-sm">
                    <Database className="h-4 w-4 mr-2" />
                    Project Metrics
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-background/50 rounded-lg p-3 border border-border text-center">
                        <div className="text-lg font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-accent flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    Docs
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-display font-semibold text-2xl mb-8 text-foreground text-center">
            Upcoming Projects
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => (
              <Card key={project.title} className="p-6 bg-gradient-card shadow-card border-2 border-dashed border-primary/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h4 className="font-semibold text-foreground mr-3">{project.title}</h4>
                      <Badge variant="outline" className="text-primary border-primary">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-muted text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;