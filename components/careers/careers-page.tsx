'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Users, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

const careers = [
  {
    id: 1,
    title: 'AI Research Intern',
    department: 'Research & Development',
    location: 'Remote',
    type: 'Internship',
    description: 'Join our AI team to help develop and improve our career guidance algorithms.',
    requirements: [
      'Currently pursuing MS/PhD in Computer Science or related field',
      'Strong background in Machine Learning and AI',
      'Experience with Python and PyTorch/TensorFlow',
      'Excellent research and analytical skills'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build and maintain our web platform using modern technologies.',
    requirements: [
      '3+ years of experience with React and Node.js',
      'Experience with TypeScript and Next.js',
      'Strong understanding of web performance and optimization',
      'Experience with cloud platforms (AWS/GCP)'
    ]
  },
  {
    id: 3,
    title: 'Career Coach',
    department: 'Mentorship',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Guide students and professionals in their career development journey.',
    requirements: [
      '5+ years of career counseling experience',
      'Strong understanding of various industries and job markets',
      'Excellent communication and interpersonal skills',
      'Experience with career assessment tools'
    ]
  }
];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-950 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Join Our Mission
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Help us revolutionize career guidance and empower millions to find their ideal career path.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="#openings">View Open Positions</a>
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Culture
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
                stat: '5+',
                label: 'Global Offices'
              },
              {
                icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
                stat: '100+',
                label: 'Team Members'
              },
              {
                icon: <MapPin className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
                stat: '20+',
                label: 'Countries'
              },
              {
                icon: <Briefcase className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
                stat: '50+',
                label: 'Open Positions'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">
                    {item.stat}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">{item.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Join our team and help shape the future of career guidance
            </p>
          </motion.div>

          <div className="space-y-6">
            {careers.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {career.title}
                        </h3>
                        <Badge variant="secondary">{career.type}</Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          {career.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            {career.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {career.location}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                          {career.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:min-w-[120px]">
                      <Button className="flex-1" asChild>
                        <Link href={`/careers/${career.id}`}>
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Why Join AINEXA?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We offer competitive benefits and a culture that promotes growth and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Competitive Compensation',
                description: 'Competitive salary, equity options, and performance bonuses'
              },
              {
                title: 'Health & Wellness',
                description: 'Comprehensive health coverage, mental health support, and wellness programs'
              },
              {
                title: 'Learning & Development',
                description: 'Professional development budget and continuous learning opportunities'
              },
              {
                title: 'Flexible Work',
                description: 'Remote-first culture with flexible working hours'
              },
              {
                title: 'Team Events',
                description: 'Regular team building activities and annual company retreats'
              },
              {
                title: 'Impact',
                description: 'Work on meaningful projects that help millions of people'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}