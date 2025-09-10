import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { SkillsData } from "./SkillsForm";
import { JobMatch } from "@/data/skillsData";

interface CVGeneratorProps {
  skillsData: SkillsData;
  jobMatches: JobMatch[];
  onBack: () => void;
  onDownload: () => void;
}

const CVGenerator = ({ skillsData, jobMatches, onBack, onDownload }: CVGeneratorProps) => {
  // Generate CV content based on user data
  const generateCVContent = () => {
    const relevantSkills = jobMatches.flatMap(job => job.requirements).slice(0, 8);
    const uniqueSkills = [...new Set(relevantSkills)];
    
    return {
      personalInfo: {
        name: skillsData.name,
        email: skillsData.email,
        location: skillsData.location,
        phone: "+1 (555) 123-4567" // Placeholder
      },
      professionalSummary: `Dedicated professional with diverse experience in ${skillsData.skills.split(',')[0]?.trim() || 'various fields'}. Proven ability to adapt quickly to new environments and contribute effectively to team goals. Seeking opportunities to leverage my skills and experience in ${skillsData.location}'s job market.`,
      skills: uniqueSkills,
      experience: skillsData.experience,
      targetRoles: jobMatches.slice(0, 3).map(job => job.title)
    };
  };

  const cvData = generateCVContent();

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Professional CV
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Formatted for {skillsData.location}'s job market standards
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="success" size="lg" onClick={onDownload} className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download PDF
            </Button>
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Results
            </Button>
          </div>
        </div>

        {/* CV Preview */}
        <Card className="shadow-warm bg-background">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center border-b border-border pb-6 mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">{cvData.personalInfo.name}</h1>
              
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {cvData.personalInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {cvData.personalInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {cvData.personalInfo.phone}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Professional Summary
              </h2>
              <p className="text-foreground leading-relaxed">
                {cvData.professionalSummary}
              </p>
            </div>

            {/* Target Roles */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Target Positions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {cvData.targetRoles.map((role, index) => (
                  <div key={index} className="bg-primary-light/20 rounded-lg p-3 text-center">
                    <span className="text-primary font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Key Skills & Competencies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cvData.skills.map((skill, index) => (
                  <div key={index} className="bg-success-light/20 rounded-lg p-2 text-center">
                    <span className="text-success-foreground text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Skills & Abilities
              </h2>
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {skillsData.skills}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Experience & Background
              </h2>
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {skillsData.experience}
              </p>
            </div>

            {/* Additional Information */}
            <div className="bg-accent/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                Additional Information
              </h3>
              <ul className="text-accent-foreground space-y-2">
                <li>• Multilingual professional with strong cross-cultural communication skills</li>
                <li>• Adaptable and quick to learn new systems and processes</li>
                <li>• Strong work ethic and commitment to professional development</li>
                <li>• Authorized to work in {skillsData.location}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mt-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">CV Tips for Success</CardTitle>
            <CardDescription>
              Make your application stand out with these local market insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Application Strategy</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tailor your CV for each specific job application</li>
                  <li>• Highlight transferable skills prominently</li>
                  <li>• Include any local certifications or training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Interview Preparation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Research company culture and values</li>
                  <li>• Prepare specific examples of your achievements</li>
                  <li>• Practice explaining how your skills transfer</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CVGenerator;