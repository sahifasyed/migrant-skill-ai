import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";

interface SkillsFormProps {
  onSubmit: (data: SkillsData) => void;
  onBack: () => void;
}

export interface SkillsData {
  name: string;
  email: string;
  location: string;
  skills: string;
  experience: string;
}

const SkillsForm = ({ onSubmit, onBack }: SkillsFormProps) => {
  const [formData, setFormData] = useState<SkillsData>({
    name: '',
    email: '',
    location: '',
    skills: '',
    experience: ''
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && formData.email.trim() !== '' && formData.location.trim() !== '';
      case 2:
        return formData.skills.trim() !== '';
      case 3:
        return formData.experience.trim() !== '';
      default:
        return false;
    }
  };

  const skillsExamples = [
    "Construction work, carpentry, electrical repairs",
    "Cooking, restaurant experience, food preparation",
    "Teaching, childcare, language instruction",
    "Healthcare, nursing, patient care",
    "Computer skills, data entry, customer service"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-warm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Tell Us About Yourself</CardTitle>
          <CardDescription className="text-lg">
            Step {step} of {totalSteps} - Help us understand your background and skills
          </CardDescription>
          
          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, Country"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="skills">Your Skills & Abilities</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="Describe your skills, abilities, and things you're good at. Include any work you've done, even if informal..."
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="bg-primary-light/20 border border-primary-light rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary mb-2">Examples to get you started:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {skillsExamples.map((example, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Work Experience & Background</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Tell us about your work history, education, or any other relevant background. Don't worry if you don't have formal documentation - all experience counts!"
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="bg-success-light/20 border border-success-light rounded-lg p-4">
                  <p className="text-sm text-success-foreground">
                    <span className="font-medium">Remember:</span> All experience is valuable. 
                    Whether formal or informal, paid or volunteer, your background helps us 
                    understand how your skills can translate to new opportunities.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={step === 1 ? onBack : handlePrevious}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {step === 1 ? 'Back to Home' : 'Previous'}
              </Button>

              {step < totalSteps ? (
                <Button
                  type="button"
                  variant="hero"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="success"
                  disabled={!isStepValid()}
                  className="flex items-center gap-2"
                >
                  Find My Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsForm;