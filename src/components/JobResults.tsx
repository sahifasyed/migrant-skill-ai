import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, TrendingUp, DollarSign, FileText, BookOpen } from "lucide-react";
import { JobMatch, UpskillResource } from "@/data/skillsData";
import { SkillsData } from "./SkillsForm";

interface JobResultsProps {
  skillsData: SkillsData;
  jobMatches: JobMatch[];
  resources: UpskillResource[];
  onBack: () => void;
  onGenerateCV: () => void;
}

const JobResults = ({ skillsData, jobMatches, resources, onBack, onGenerateCV }: JobResultsProps) => {
  const getDemandColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-accent-warm text-accent-foreground';
      case 'Low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch (type) {
      case 'Certification': return 'bg-primary text-primary-foreground';
      case 'Course': return 'bg-success text-success-foreground';
      case 'Workshop': return 'bg-accent-warm text-accent-foreground';
      case 'Free Resource': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Great news, {skillsData.name.split(' ')[0]}! 
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            We found {jobMatches.length} job opportunities that match your skills in {skillsData.location}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="success" size="lg" onClick={onGenerateCV} className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate Professional CV
            </Button>
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Form
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Matches */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Job Opportunities
            </h2>
            
            <div className="space-y-6">
              {jobMatches.map((job) => (
                <Card key={job.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {job.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getDemandColor(job.demandLevel)}>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {job.demandLevel} Demand
                        </Badge>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Relevance</div>
                          <div className="text-lg font-semibold text-primary">{job.relevanceScore}%</div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-success" />
                          Average Salary
                        </h4>
                        <p className="text-success font-semibold">{job.averageSalary}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Requirements</h4>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upskilling Resources */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-success" />
              Recommended Training
            </h2>
            
            <div className="space-y-4">
              {resources.map((resource) => (
                <Card key={resource.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                      <Badge className={getResourceTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">{resource.provider}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration: {resource.duration}</span>
                      <Button variant="link" className="h-auto p-0 text-sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {resources.length === 0 && (
                <Card className="shadow-soft">
                  <CardContent className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No specific training recommendations found. 
                      Check back as we add more resources!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="shadow-warm bg-gradient-success">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold text-success-foreground mb-4">
                Ready to take the next step?
              </h3>
              <p className="text-success-foreground/90 mb-6 max-w-2xl mx-auto">
                Generate a professional CV tailored to these opportunities and start applying with confidence.
              </p>
              <Button variant="outline" size="lg" onClick={onGenerateCV} className="bg-background/90 hover:bg-background">
                <FileText className="h-5 w-5 mr-2" />
                Create Your Professional CV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobResults;