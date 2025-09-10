// Mock data for skills mapping and job suggestions
export interface JobMatch {
  id: string;
  title: string;
  description: string;
  relevanceScore: number;
  requirements: string[];
  averageSalary: string;
  demandLevel: 'High' | 'Medium' | 'Low';
  location?: string;
}

export interface UpskillResource {
  id: string;
  title: string;
  provider: string;
  duration: string;
  type: 'Course' | 'Certification' | 'Workshop' | 'Free Resource';
  url: string;
  description: string;
}

export const skillsToJobsMapping: Record<string, JobMatch[]> = {
  // Construction & Manual Labor
  construction: [
    {
      id: 'construction-1',
      title: 'Construction Worker',
      description: 'General construction work including building, renovation, and maintenance.',
      relevanceScore: 95,
      requirements: ['Physical fitness', 'Safety awareness', 'Basic tool usage'],
      averageSalary: '$35,000 - $50,000',
      demandLevel: 'High'
    },
    {
      id: 'construction-2',
      title: 'Maintenance Technician',
      description: 'Facility maintenance and repair work.',
      relevanceScore: 85,
      requirements: ['Basic electrical knowledge', 'Plumbing basics', 'Problem-solving'],
      averageSalary: '$40,000 - $55,000',
      demandLevel: 'High'
    }
  ],
  
  // Cooking & Food Service
  cooking: [
    {
      id: 'cooking-1',
      title: 'Line Cook',
      description: 'Prepare food in restaurant kitchens following recipes and food safety standards.',
      relevanceScore: 90,
      requirements: ['Food safety knowledge', 'Speed and accuracy', 'Team collaboration'],
      averageSalary: '$30,000 - $40,000',
      demandLevel: 'High'
    },
    {
      id: 'cooking-2',
      title: 'Kitchen Assistant',
      description: 'Support kitchen operations with food prep and cleaning.',
      relevanceScore: 85,
      requirements: ['Basic food handling', 'Cleanliness', 'Following instructions'],
      averageSalary: '$25,000 - $35,000',
      demandLevel: 'High'
    }
  ],

  // Healthcare & Care
  healthcare: [
    {
      id: 'healthcare-1',
      title: 'Certified Nursing Assistant (CNA)',
      description: 'Provide basic patient care under supervision of nurses.',
      relevanceScore: 85,
      requirements: ['CNA certification', 'Compassion', 'Physical stamina'],
      averageSalary: '$35,000 - $45,000',
      demandLevel: 'High'
    },
    {
      id: 'healthcare-2',
      title: 'Home Health Aide',
      description: 'Assist elderly or disabled individuals with daily activities.',
      relevanceScore: 90,
      requirements: ['First aid certification', 'Patience', 'Communication skills'],
      averageSalary: '$30,000 - $40,000',
      demandLevel: 'High'
    }
  ],

  // Teaching & Education
  teaching: [
    {
      id: 'teaching-1',
      title: 'Teaching Assistant',
      description: 'Support classroom teachers with instruction and student supervision.',
      relevanceScore: 80,
      requirements: ['High school diploma', 'Patience with children', 'Communication skills'],
      averageSalary: '$25,000 - $35,000',
      demandLevel: 'Medium'
    },
    {
      id: 'teaching-2',
      title: 'Language Tutor',
      description: 'Provide one-on-one or small group language instruction.',
      relevanceScore: 95,
      requirements: ['Fluency in multiple languages', 'Teaching experience', 'Cultural sensitivity'],
      averageSalary: '$20 - $50 per hour',
      demandLevel: 'Medium'
    }
  ],

  // Technology & Computers
  technology: [
    {
      id: 'tech-1',
      title: 'IT Support Specialist',
      description: 'Provide technical support and troubleshoot computer issues.',
      relevanceScore: 85,
      requirements: ['Basic computer knowledge', 'Problem-solving', 'Customer service'],
      averageSalary: '$40,000 - $55,000',
      demandLevel: 'High'
    },
    {
      id: 'tech-2',
      title: 'Data Entry Clerk',
      description: 'Input and maintain data in computer systems.',
      relevanceScore: 75,
      requirements: ['Typing skills', 'Attention to detail', 'Basic computer skills'],
      averageSalary: '$30,000 - $40,000',
      demandLevel: 'Medium'
    }
  ]
};

export const upskillResources: Record<string, UpskillResource[]> = {
  construction: [
    {
      id: 'osha-10',
      title: 'OSHA 10-Hour Construction Safety',
      provider: 'OSHA Training Institute',
      duration: '2 days',
      type: 'Certification',
      url: 'https://www.osha.gov/training',
      description: 'Essential workplace safety training for construction workers.'
    },
    {
      id: 'basic-carpentry',
      title: 'Basic Carpentry Skills',
      provider: 'Local Community College',
      duration: '6 weeks',
      type: 'Course',
      url: '#',
      description: 'Learn fundamental carpentry techniques and tool usage.'
    }
  ],
  
  cooking: [
    {
      id: 'servsafe',
      title: 'ServSafe Food Handler Certification',
      provider: 'National Restaurant Association',
      duration: '1 day',
      type: 'Certification',
      url: 'https://www.servsafe.com',
      description: 'Food safety certification required by most employers.'
    },
    {
      id: 'culinary-basics',
      title: 'Culinary Arts Fundamentals',
      provider: 'Local Culinary School',
      duration: '8 weeks',
      type: 'Course',
      url: '#',
      description: 'Basic cooking techniques and kitchen management.'
    }
  ],
  
  healthcare: [
    {
      id: 'cna-program',
      title: 'Certified Nursing Assistant Program',
      provider: 'American Red Cross',
      duration: '4-12 weeks',
      type: 'Certification',
      url: 'https://www.redcross.org',
      description: 'Complete CNA training and certification program.'
    },
    {
      id: 'first-aid',
      title: 'First Aid & CPR Certification',
      provider: 'American Heart Association',
      duration: '1 day',
      type: 'Certification',
      url: 'https://www.heart.org',
      description: 'Essential life-saving skills for healthcare workers.'
    }
  ],
  
  teaching: [
    {
      id: 'esl-certification',
      title: 'ESL Teaching Certification',
      provider: 'TESOL International',
      duration: '120 hours',
      type: 'Certification',
      url: 'https://www.tesol.org',
      description: 'Certification to teach English as a Second Language.'
    },
    {
      id: 'child-development',
      title: 'Child Development Basics',
      provider: 'Local Community College',
      duration: '6 weeks',
      type: 'Course',
      url: '#',
      description: 'Understanding child psychology and development.'
    }
  ],
  
  technology: [
    {
      id: 'comptia-a-plus',
      title: 'CompTIA A+ Certification',
      provider: 'CompTIA',
      duration: '3-6 months',
      type: 'Certification',
      url: 'https://www.comptia.org',
      description: 'Entry-level IT certification for support specialists.'
    },
    {
      id: 'microsoft-office',
      title: 'Microsoft Office Specialist',
      provider: 'Microsoft',
      duration: '4 weeks',
      type: 'Certification',
      url: 'https://www.microsoft.com/learning',
      description: 'Certification in Microsoft Office applications.'
    }
  ]
};

// Function to analyze skills and return relevant jobs
export function analyzeSkills(skillsText: string): JobMatch[] {
  const normalizedText = skillsText.toLowerCase();
  const allMatches: JobMatch[] = [];
  
  // Simple keyword matching - in a real app, this would use AI/ML
  Object.entries(skillsToJobsMapping).forEach(([skillCategory, jobs]) => {
    if (normalizedText.includes(skillCategory) || 
        normalizedText.includes(skillCategory.slice(0, -3)) || // Remove 'ing' suffix
        (skillCategory === 'construction' && (normalizedText.includes('build') || normalizedText.includes('repair'))) ||
        (skillCategory === 'cooking' && (normalizedText.includes('food') || normalizedText.includes('kitchen'))) ||
        (skillCategory === 'healthcare' && (normalizedText.includes('care') || normalizedText.includes('medical'))) ||
        (skillCategory === 'teaching' && (normalizedText.includes('teach') || normalizedText.includes('education'))) ||
        (skillCategory === 'technology' && (normalizedText.includes('computer') || normalizedText.includes('tech')))
    ) {
      allMatches.push(...jobs);
    }
  });
  
  // If no specific matches, return some general entry-level positions
  if (allMatches.length === 0) {
    return [
      {
        id: 'general-1',
        title: 'Customer Service Representative',
        description: 'Handle customer inquiries and provide support via phone, email, or chat.',
        relevanceScore: 70,
        requirements: ['Communication skills', 'Patience', 'Problem-solving'],
        averageSalary: '$30,000 - $40,000',
        demandLevel: 'High'
      },
      {
        id: 'general-2',
        title: 'Retail Associate',
        description: 'Assist customers, handle transactions, and maintain store appearance.',
        relevanceScore: 65,
        requirements: ['Customer service', 'Cash handling', 'Product knowledge'],
        averageSalary: '$25,000 - $35,000',
        demandLevel: 'High'
      }
    ];
  }
  
  // Sort by relevance score and return top matches
  return allMatches.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 4);
}

// Function to get upskilling resources based on job matches
export function getUpskillResources(jobMatches: JobMatch[]): UpskillResource[] {
  const resources: UpskillResource[] = [];
  
  jobMatches.forEach(job => {
    // Map job to skill category
    const skillCategory = Object.keys(skillsToJobsMapping).find(category =>
      skillsToJobsMapping[category].some(j => j.id === job.id)
    );
    
    if (skillCategory && upskillResources[skillCategory]) {
      resources.push(...upskillResources[skillCategory]);
    }
  });
  
  // Remove duplicates and return top 3
  const uniqueResources = resources.filter((resource, index, self) =>
    index === self.findIndex(r => r.id === resource.id)
  );
  
  return uniqueResources.slice(0, 3);
}