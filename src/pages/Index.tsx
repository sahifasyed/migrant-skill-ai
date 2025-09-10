import { useState } from "react";
import Hero from "@/components/Hero";
import SkillsForm, { SkillsData } from "@/components/SkillsForm";
import JobResults from "@/components/JobResults";
import CVGenerator from "@/components/CVGenerator";
import { analyzeSkills, getUpskillResources, JobMatch, UpskillResource } from "@/data/skillsData";
import { useToast } from "@/hooks/use-toast";

type AppState = 'hero' | 'form' | 'results' | 'cv';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('hero');
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [resources, setResources] = useState<UpskillResource[]>([]);
  const { toast } = useToast();

  const handleGetStarted = () => {
    setCurrentState('form');
  };

  const handleSkillsSubmit = (data: SkillsData) => {
    setSkillsData(data);
    
    // Analyze skills and get job matches
    const matches = analyzeSkills(data.skills);
    const upskillResources = getUpskillResources(matches);
    
    setJobMatches(matches);
    setResources(upskillResources);
    setCurrentState('results');
    
    toast({
      title: "Analysis Complete!",
      description: `Found ${matches.length} relevant job opportunities for you.`,
    });
  };

  const handleBackToHero = () => {
    setCurrentState('hero');
  };

  const handleBackToResults = () => {
    setCurrentState('results');
  };

  const handleGenerateCV = () => {
    setCurrentState('cv');
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "CV download functionality will be available soon. Your professional CV is ready for review!",
    });
  };

  if (currentState === 'form') {
    return <SkillsForm onSubmit={handleSkillsSubmit} onBack={handleBackToHero} />;
  }

  if (currentState === 'results' && skillsData) {
    return (
      <JobResults
        skillsData={skillsData}
        jobMatches={jobMatches}
        resources={resources}
        onBack={() => setCurrentState('form')}
        onGenerateCV={handleGenerateCV}
      />
    );
  }

  if (currentState === 'cv' && skillsData) {
    return (
      <CVGenerator
        skillsData={skillsData}
        jobMatches={jobMatches}
        onBack={handleBackToResults}
        onDownload={handleDownloadCV}
      />
    );
  }

  return <Hero onGetStarted={handleGetStarted} />;
};

export default Index;
