'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, Code, Award, BriefcaseIcon, CheckCircle2, 
  ChevronDown, ChevronRight, ExternalLink, PlayCircle, Github
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Sample data for the roadmap
const roadmapData = {
  domain: 'Full Stack Development',
  progress: 35,
  timeRequirement: '6-8 months',
  sections: [
    {
      id: 'foundation',
      title: 'Programming Foundations',
      description: 'Master the core concepts of programming and web development',
      progress: 80,
      items: [
        {
          id: 'item-1',
          title: 'HTML & CSS Fundamentals',
          type: 'course',
          source: 'YouTube',
          url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
          duration: '2 hours',
          status: 'completed'
        },
        {
          id: 'item-2',
          title: 'JavaScript Basics',
          type: 'course',
          source: 'Udemy',
          url: 'https://www.udemy.com',
          duration: '8 hours',
          status: 'completed'
        },
        {
          id: 'item-3',
          title: 'Build a Personal Portfolio',
          type: 'project',
          description: 'Create a responsive portfolio website using HTML, CSS and basic JavaScript',
          status: 'in-progress'
        },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Learn modern frontend frameworks and responsive design',
      progress: 30,
      items: [
        {
          id: 'item-4',
          title: 'React Fundamentals',
          type: 'course',
          source: 'Coursera',
          url: 'https://www.coursera.org',
          duration: '12 hours',
          status: 'in-progress'
        },
        {
          id: 'item-5',
          title: 'Advanced CSS & Sass',
          type: 'course',
          source: 'Udemy',
          url: 'https://www.udemy.com',
          duration: '15 hours',
          status: 'not-started'
        },
        {
          id: 'item-6',
          title: 'E-commerce Product Page',
          type: 'project',
          description: 'Build an interactive product page with React and CSS',
          status: 'not-started'
        },
        {
          id: 'item-7',
          title: 'Frontend Developer Certification',
          type: 'certification',
          organization: 'freeCodeCamp',
          url: 'https://www.freecodecamp.org',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Build server-side applications and APIs',
      progress: 0,
      items: [
        {
          id: 'item-8',
          title: 'Node.js Basics',
          type: 'course',
          source: 'Udemy',
          url: 'https://www.udemy.com',
          duration: '10 hours',
          status: 'not-started'
        },
        {
          id: 'item-9',
          title: 'RESTful API Development',
          type: 'course',
          source: 'Pluralsight',
          url: 'https://www.pluralsight.com',
          duration: '8 hours',
          status: 'not-started'
        },
        {
          id: 'item-10',
          title: 'Task Manager API',
          type: 'project',
          description: 'Create a RESTful API for a task management application',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      description: 'Learn to deploy applications and manage development workflows',
      progress: 0,
      items: [
        {
          id: 'item-11',
          title: 'Git & GitHub Fundamentals',
          type: 'course',
          source: 'YouTube',
          url: 'https://www.youtube.com',
          duration: '3 hours',
          status: 'not-started'
        },
        {
          id: 'item-12',
          title: 'Deploy Full-Stack App',
          type: 'project',
          description: 'Deploy a full-stack application to a cloud provider',
          status: 'not-started'
        }
      ]
    },
    {
      id: 'career',
      title: 'Career Preparation',
      description: 'Prepare for job applications and interviews',
      progress: 0,
      items: [
        {
          id: 'item-13',
          title: 'Build Professional Resume',
          type: 'task',
          description: 'Create a technical resume highlighting your skills and projects',
          status: 'not-started'
        },
        {
          id: 'item-14',
          title: 'Technical Interview Prep',
          type: 'course',
          source: 'LeetCode',
          url: 'https://leetcode.com',
          duration: 'Ongoing',
          status: 'not-started'
        },
        {
          id: 'item-15',
          title: 'Internship Application',
          type: 'milestone',
          description: 'Apply for at least 5 relevant internships',
          status: 'not-started'
        }
      ]
    }
  ]
};

export function Roadmap() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['foundation']);
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getIconForItemType = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen size={16} />;
      case 'project':
        return <Code size={16} />;
      case 'certification':
        return <Award size={16} />;
      case 'task':
      case 'milestone':
        return <BriefcaseIcon size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-amber-500';
      case 'not-started':
      default:
        return 'bg-slate-300 dark:bg-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-12">
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Your Personalized Career Roadmap
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Based on your assessment, we've created a custom learning path to help you become a {roadmapData.domain} expert.
            </p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Career Path</h3>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{roadmapData.domain}</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Time to Complete</h3>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{roadmapData.timeRequirement}</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Overall Progress</h3>
                <div className="flex items-center">
                  <div className="flex-1 mr-4">
                    <Progress value={roadmapData.progress} className="h-2" />
                  </div>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{roadmapData.progress}%</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="roadmap">
            <TabsList className="mb-6">
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              <TabsTrigger value="metrics">Skill Metrics</TabsTrigger>
              <TabsTrigger value="mentors">Recommended Mentors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmap">
              <div className="space-y-6">
                {roadmapData.sections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden">
                      <div 
                        className="p-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection(section.id)}
                      >
                        <div>
                          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {section.title}
                          </h2>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {section.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mr-2">
                              <div 
                                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full" 
                                style={{ width: `${section.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {section.progress}%
                            </span>
                          </div>
                          {expandedSections.includes(section.id) ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </div>
                      </div>
                      
                      {expandedSections.includes(section.id) && (
                        <div className="p-4">
                          <ul className="space-y-4">
                            {section.items.map((item) => (
                              <li key={item.id} className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                                <div className="flex items-start">
                                  <div className={`w-3 h-3 mt-1.5 rounded-full ${getStatusColor(item.status)} mr-3 flex-shrink-0`}></div>
                                  <div className="flex-1">
                                    <div className="flex items-center mb-1">
                                      <span className="bg-slate-100 dark:bg-slate-800 p-1 rounded mr-2">
                                        {getIconForItemType(item.type)}
                                      </span>
                                      <h3 className="font-medium text-slate-900 dark:text-white">
                                        {item.title}
                                      </h3>
                                      <Badge variant="outline" className="ml-2 text-xs">
                                        {item.type}
                                      </Badge>
                                    </div>
                                    
                                    {item.description && (
                                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                        {item.description}
                                      </p>
                                    )}
                                    
                                    <div className="flex flex-wrap gap-3 mt-2">
                                      {item.source && (
                                        <Badge variant="secondary" className="text-xs">
                                          {item.source}
                                        </Badge>
                                      )}
                                      
                                      {item.organization && (
                                        <Badge variant="secondary" className="text-xs">
                                          {item.organization}
                                        </Badge>
                                      )}
                                      
                                      {item.duration && (
                                        <Badge variant="outline" className="text-xs">
                                          {item.duration}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="ml-4 flex-shrink-0">
                                    {item.url && (
                                      <Button variant="ghost" size="sm" asChild>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                          {item.type === 'course' ? (
                                            <PlayCircle size={16} className="mr-1" />
                                          ) : item.type === 'project' ? (
                                            <Github size={16} className="mr-1" />
                                          ) : (
                                            <ExternalLink size={16} className="mr-1" />
                                          )}
                                          {item.type === 'course' ? 'Start' : 'View'}
                                        </a>
                                      </Button>
                                    )}
                                    
                                    {item.status === 'not-started' ? (
                                      <Button size="sm" className="ml-2">
                                        Mark Started
                                      </Button>
                                    ) : item.status === 'in-progress' ? (
                                      <Button size="sm" className="ml-2">
                                        <CheckCircle2 size={16} className="mr-1" />
                                        Complete
                                      </Button>
                                    ) : (
                                      <Button size="sm" variant="ghost" className="ml-2" disabled>
                                        <CheckCircle2 size={16} className="mr-1" />
                                        Completed
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button>
                  Download Roadmap as PDF
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Your Skill Assessment Results
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                      Programming Languages
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'JavaScript', value: 65 },
                        { name: 'HTML/CSS', value: 80 },
                        { name: 'Python', value: 25 },
                        { name: 'SQL', value: 40 },
                      ].map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.value}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full" 
                              style={{ width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                      Frameworks & Libraries
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'React', value: 45 },
                        { name: 'Node.js', value: 30 },
                        { name: 'Express', value: 20 },
                        { name: 'Tailwind CSS', value: 60 },
                      ].map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.value}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-teal-600 dark:bg-teal-500 rounded-full" 
                              style={{ width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                      Soft Skills
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Problem Solving', value: 75 },
                        { name: 'Communication', value: 85 },
                        { name: 'Teamwork', value: 70 },
                        { name: 'Time Management', value: 60 },
                      ].map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.value}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-amber-600 dark:bg-amber-500 rounded-full" 
                              style={{ width: `${skill.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="mentors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'Senior Full Stack Developer at Google',
                    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
                    expertise: ['React', 'Node.js', 'JavaScript'],
                    availability: '2 slots this week',
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Lead Frontend Engineer at Meta',
                    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
                    expertise: ['React', 'TypeScript', 'UI/UX'],
                    availability: '1 slot next week',
                  },
                  {
                    name: 'Jessica Rodriguez',
                    role: 'Backend Developer at Amazon',
                    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
                    expertise: ['Node.js', 'Express', 'MongoDB'],
                    availability: '3 slots this week',
                  },
                  {
                    name: 'David Kim',
                    role: 'Full Stack Instructor at Udemy',
                    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
                    expertise: ['Teaching', 'React', 'Node.js'],
                    availability: '4 slots this week',
                  },
                ].map((mentor, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="flex">
                      <div className="w-1/3">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {mentor.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {mentor.role}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {mentor.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {mentor.availability}
                        </div>
                        <Button size="sm" asChild>
                          <Link href="/mentorship">
                            Book Session
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}