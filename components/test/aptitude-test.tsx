'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Timer, ArrowRight, CheckCircle2, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Sample questions for the aptitude test
const questions = [
  {
    id: 1,
    question: "Which activity do you enjoy most during your free time?",
    options: [
      { id: 'a', text: "Reading or writing" },
      { id: 'b', text: "Building or fixing things" },
      { id: 'c', text: "Solving puzzles or playing strategy games" },
      { id: 'd', text: "Socializing with friends or meeting new people" },
    ],
    category: "interests"
  },
  {
    id: 2,
    question: "When solving a complex problem, what is your approach?",
    options: [
      { id: 'a', text: "Break it down into manageable steps" },
      { id: 'b', text: "Gather all available data and analyze patterns" },
      { id: 'c', text: "Discuss it with others to get different perspectives" },
      { id: 'd', text: "Trust your intuition and experience" },
    ],
    category: "problem-solving"
  },
  {
    id: 3,
    question: "How do you prefer to learn something new?",
    options: [
      { id: 'a', text: "Through hands-on experience" },
      { id: 'b', text: "By watching a demonstration or tutorial" },
      { id: 'c', text: "Reading detailed explanations or instructions" },
      { id: 'd', text: "Discussing concepts with a mentor or peer" },
    ],
    category: "learning-style"
  },
  {
    id: 4,
    question: "In a team setting, which role do you naturally gravitate towards?",
    options: [
      { id: 'a', text: "Leader who coordinates the team's efforts" },
      { id: 'b', text: "Creative who generates innovative ideas" },
      { id: 'c', text: "Analyst who evaluates options and identifies issues" },
      { id: 'd', text: "Supporter who helps others and maintains harmony" },
    ],
    category: "team-dynamics"
  },
  {
    id: 5,
    question: "Which aspect of a project gives you the most satisfaction?",
    options: [
      { id: 'a', text: "Planning and organizing the workflow" },
      { id: 'b', text: "Solving technical challenges" },
      { id: 'c', text: "Creating something visually appealing" },
      { id: 'd', text: "Seeing how it positively impacts users" },
    ],
    category: "work-preferences"
  },
];

export function AptitudeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  const totalQuestions = questions.length;
  const progress = (currentQuestion / totalQuestions) * 100;

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers(prev => ({
        ...prev,
        [question.id]: selectedOption
      }));

      // Move to next question or complete test
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setTestCompleted(true);
        toast.success('Test completed successfully!');
      }
    } else {
      toast.error('Please select an answer to continue');
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
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
          Your Aptitude Test is Complete!
        </h2>
        
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          We're analyzing your responses to generate your personalized career recommendations.
          This process typically takes a few moments.
        </p>
        
        <div className="flex flex-col items-center space-y-4 mb-8">
          <BrainCircuit size={32} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
          <p className="text-sm text-slate-500 dark:text-slate-400">AI analyzing your responses...</p>
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Aptitude Assessment</h1>
          <p className="text-slate-600 dark:text-slate-300">
            Discover your natural strengths and career matches
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
        
        <RadioGroup value={selectedOption || ''} onValueChange={handleOptionChange} className="space-y-4">
          {question.options.map((option) => (
            <div key={option.id} className="flex items-start space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="font-normal">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
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