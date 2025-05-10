'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Tell us about yourself'
  },
  {
    id: 'education',
    title: 'Education & Skills',
    description: 'Your academic background and expertise'
  },
  {
    id: 'career',
    title: 'Career Goals',
    description: 'What you want to achieve'
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Customize your experience'
  }
];

export function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, Country" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="education">Highest Education</Label>
              <RadioGroup defaultValue="bachelors">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="highschool" id="highschool" />
                  <Label htmlFor="highschool">High School</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bachelors" id="bachelors" />
                  <Label htmlFor="bachelors">Bachelor's Degree</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masters" id="masters" />
                  <Label htmlFor="masters">Master's Degree</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phd" id="phd" />
                  <Label htmlFor="phd">Ph.D.</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Input id="field" placeholder="e.g., Computer Science" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                id="skills"
                placeholder="List your key skills, separated by commas"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="goals">Career Goals</Label>
              <Textarea
                id="goals"
                placeholder="What are your short-term and long-term career goals?"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label>Preferred Industries</Label>
              <RadioGroup defaultValue="tech">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tech" id="tech" />
                  <Label htmlFor="tech">Technology</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="finance" id="finance" />
                  <Label htmlFor="finance">Finance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="healthcare" id="healthcare" />
                  <Label htmlFor="healthcare">Healthcare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="education" id="education" />
                  <Label htmlFor="education">Education</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" min="0" placeholder="0" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Mentorship Preferences</Label>
              <RadioGroup defaultValue="both">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both">Both Online & In-person</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online">Online Only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inperson" id="inperson" />
                  <Label htmlFor="inperson">In-person Only</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Communication Preferences</Label>
              <RadioGroup defaultValue="email">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-pref" />
                  <Label htmlFor="email-pref">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-pref" />
                  <Label htmlFor="phone-pref">Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="app" id="app-pref" />
                  <Label htmlFor="app-pref">In-app Messages</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="availability">Availability</Label>
              <Textarea
                id="availability"
                placeholder="When are you typically available for mentorship sessions?"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Welcome to AINEXA
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Let's set up your profile to get personalized career guidance
            </p>
          </motion.div>

          <Card className="p-6">
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 dark:text-slate-300">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span className="text-slate-600 dark:text-slate-300">
                  {progress}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {steps[currentStep].title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {steps[currentStep].description}
                </p>
              </div>

              {renderStepContent()}

              <div className="flex justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Complete
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}