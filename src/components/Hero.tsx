import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-bridge.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Bridge Your Skills to
            <span className="block text-primary"> New Opportunities</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We help refugees and migrants map their existing skills to local job markets, 
            generate professional CVs, and find resources to unlock their potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="warm" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skills Recognition</h3>
              <p className="text-muted-foreground text-center">
                Map your experience to local job opportunities, even without formal documentation
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">CV Generation</h3>
              <p className="text-muted-foreground text-center">
                Create professional CVs formatted for your host country's job market standards
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-soft">
              <div className="w-12 h-12 bg-accent-warm/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent-warm" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upskilling Resources</h3>
              <p className="text-muted-foreground text-center">
                Find relevant courses and certifications to enhance your career prospects
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-success/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent-warm/10 rounded-full blur-xl" />
    </div>
  );
};

export default Hero;