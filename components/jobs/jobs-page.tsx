'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Building2, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    type: 'Full-time',
    experience: '3-5 years',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences.',
    postedAt: '2 days ago',
    matchScore: 95
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignLabs',
    location: 'Remote',
    salary: '$90k - $120k',
    type: 'Full-time',
    experience: '2-4 years',
    skills: ['Figma', 'UI/UX', 'Design Systems'],
    description: 'Join our design team to create beautiful and intuitive interfaces for our products.',
    postedAt: '1 week ago',
    matchScore: 88
  },
  {
    id: 3,
    title: 'Data Scientist Intern',
    company: 'AI Solutions',
    location: 'New York, NY',
    salary: '$40/hr',
    type: 'Internship',
    experience: '0-1 year',
    skills: ['Python', 'Machine Learning', 'SQL'],
    description: 'Great opportunity for students to gain hands-on experience in data science and AI.',
    postedAt: '3 days ago',
    matchScore: 82
  }
];

export function JobsPage() {
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
              Find Your Dream Job
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Discover opportunities that match your skills and career goals
            </p>
          </motion.div>

          {/* Search and Filters */}
          <Card className="p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-9"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                            {job.title}
                          </h2>
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1" />
                              {job.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="hidden md:block">
                          {job.matchScore}% Match
                        </Badge>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Posted {job.postedAt}
                        </span>
                        <Badge variant="secondary" className="md:hidden">
                          {job.matchScore}% Match
                        </Badge>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2 md:min-w-[120px]">
                      <Button className="flex-1" asChild>
                        <Link href={`/jobs/${job.id}`}>
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Save Job
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