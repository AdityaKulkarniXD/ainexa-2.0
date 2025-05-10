'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, GraduationCap, Calendar, DollarSign, ArrowRight } from 'lucide-react';

export function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Scholarships
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Find scholarships that match your profile and career goals
            </p>
          </motion.div>

          <Card className="p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search scholarships..."
                  className="pl-9"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Field of Study" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000+">$10,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Deadline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <div className="space-y-6">
            {[
              {
                title: 'Tech Innovation Scholarship',
                organization: 'Future Tech Foundation',
                amount: '$10,000',
                deadline: 'April 15, 2025',
                field: 'Computer Science',
                description: 'For students pursuing innovative projects in technology and computer science.',
                requirements: ['GPA 3.5+', 'Computer Science Major', 'Innovation Project']
              },
              {
                title: 'Women in STEM Scholarship',
                organization: 'Women Tech Network',
                amount: '$5,000',
                deadline: 'May 1, 2025',
                field: 'Engineering',
                description: 'Supporting women pursuing careers in Science, Technology, Engineering, and Mathematics.',
                requirements: ['Female Students', 'STEM Major', 'Leadership Experience']
              },
              {
                title: 'Digital Arts Excellence Award',
                organization: 'Creative Arts Foundation',
                amount: '$7,500',
                deadline: 'June 30, 2025',
                field: 'Digital Arts',
                description: 'For students showing exceptional talent in digital arts and design.',
                requirements: ['Portfolio Required', 'Arts Major', 'Previous Awards']
              }
            ].map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {scholarship.title}
                        </h3>
                        <Badge variant="secondary">{scholarship.field}</Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {scholarship.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {scholarship.organization}
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {scholarship.amount}
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-slate-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          Deadline: {scholarship.deadline}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {scholarship.requirements.map((req) => (
                          <Badge key={req} variant="outline">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2">
                      <Button className="flex-1">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}