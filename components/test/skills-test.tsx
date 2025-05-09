'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Timer, ArrowRight, CheckCircle2, BrainCircuit, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const skillQuestions = [
  {
    id: 1,
    type: 'coding',
    question: "Describe a coding project you've worked on. What was your role and what technologies did you use?",
    inputType: 'textarea'
  },
  {
    id: 2,
    type: 'technical',
    question: "Rate your experience with the following programming languages:",
    subQuestions: [
      { id: 'js', name: 'JavaScript' },
      { id: 'py', name: 'Python' },
      { id: 'java', name: 'Java' },
      { id: 'csharp', name: 'C#' }
    ],
    inputType: 'rating'
  },
  {
    id: 3,
    type: 'experience',
    question: "How many years of programming experience do you have?",
    options: [
      { id: 'a', text: "Less than 1 year" },
      { id: 'b', text: "1-2 years" },
      { id: 'c', text: "3-5 years" },
      { id: 'd', text: "More than 5 years" },
    ],
    inputType: 'radio'
  },
  {
    id: 4,
    type: 'github',
    question: "Do you have any GitHub repositories you'd like to share? (optional)",
    inputType: 'github'
  },
  {
    id: 5,
    type: 'preference',
    question: "What area of software development interests you the most?",
    options: [
      { id: 'a', text: "Frontend Development" },
      { id: 'b', text: "Backend Development" },
      { id: 'c', text: "Full Stack Development" },
      { id: 'd', text: "Mobile App Development" },
      { id: 'e', text: "Game Development" },
      { id: 'f', text: "AI/Machine Learning" },
      { id: 'g', text: "DevOps/Cloud Engineering" },
      { id: 'h', text: "Cybersecurity" },
    ],
    inputType: 'radio'
  }
];

export function SkillsTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [textAnswer, setTextAnswer] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  
  const totalQuestions = skillQuestions.length;
  const progress = (currentQuestion / totalQuestions) * 100;

  const question = skillQuestions[currentQuestion];

  const handleNext = () => {
    // Save the answer based on question type
    let isValid = true;
    let currentAnswer: any;

    switch (question.inputType) {
      case 'textarea':
        if (textAnswer.trim().length < 10) {
          toast.error('Please provide a more detailed response');
          isValid = false;
        } else {
          currentAnswer = textAnswer;
        }
        break;
      case 'github':
        // Github link is optional
        currentAnswer = githubLink;
        break;
      case 'rating':
        // Check if at least one rating is selected
        const hasRating = Object.values(ratings).some(val => val);
        if (!hasRating) {
          toast.error('Please rate at least one language');
          isValid = false;
        } else {
          currentAnswer = ratings;
        }
        break;
      case 'radio':
        if (!selectedOption) {
          toast.error('Please select an option');
          isValid = false;
        } else {
          currentAnswer = selectedOption;
        }
        break;
    }

    if (isValid) {
      setAnswers(prev => ({
        ...prev,
        [question.id]: currentAnswer
      }));

      // Move to next question or complete test
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
        // Reset form values
        setTextAnswer('');
        setGithubLink('');
        setSelectedOption(null);
      } else {
        setTestCompleted(true);
        toast.success('Skills test completed successfully!');
      }
    }
  };

  const handleRatingChange = (id: string, value: string) => {
    setRatings(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const renderQuestion = () => {
    switch (question.inputType) {
      case 'textarea':
        return (
          <Textarea 
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="min-h-32"
          />
        );
      case 'github':
        return (
          <div className="relative">
            <Github className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
            <Input
              type="url"
              placeholder="https://github.com/yourusername/repo"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="pl-10"
            />
          </div>
        );
      case 'rating':
        return (
          <div className="space-y-4">
            {question.subQuestions?.map((subQ) => (
              <div key={subQ.id} className="space-y-2">
                <Label>{subQ.name}</Label>
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Button
                      key={level}
                      type="button"
                      variant={ratings[subQ.id] === level.toString() ? "default" : "outline"}
                      className="w-12 h-10"
                      onClick={() => handleRatingChange(subQ.id, level.toString())}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 px-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <RadioGroup value={selectedOption || ''} onValueChange={setSelectedOption} className="space-y-3">
            {question.options?.map((option) => (
              <div key={option.id} className="flex items-start space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="font-normal">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
    }
  };

  if (testCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <CheckCircle2 size={40} className="text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Your Skills Assessment is Complete!
        </h2>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          We're analyzing your responses to generate your personalized career roadmap.
          This will help identify your strengths and areas for growth.
        </p>
        
        <div className="flex flex-col items-center space-y-4 mb-8">
          <BrainCircuit size={32} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
          <p className="text-sm text-slate-500 dark:text-slate-400">AI analyzing your technical skills...</p>
        </div>
        
        <Button size="lg" asChild>
          <Link href="/roadmap">
            View Your Results
          </Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Skills Assessment</h1>
          <p className="text-slate-600 dark:text-slate-300">
            Evaluate your technical skills and experience
          </p>
        </div>
        <div className="flex items-center text-slate-500 dark:text-slate-400">
          <Timer size={16} className="mr-1" />
          <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600 dark:text-slate-300">Question {currentQuestion + 1} of {totalQuestions}</span>
          <span className="text-slate-600 dark:text-slate-300">{progress.toFixed(0)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
          {question.question}
        </h2>
        
        {renderQuestion()}
      </Card>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        
        <Button onClick={handleNext} className="group">
          {currentQuestion === totalQuestions - 1 ? 'Complete Test' : 'Next'}
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}