'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import { Clock, ArrowRight, BarChart as BarChartIcon, Target, CalendarIcon, BriefcaseIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample data for the dashboard
const upcomingMentorships = [
  {
    id: 1,
    mentorName: 'Sarah Johnson',
    role: 'Senior Full Stack Developer',
    date: 'Tomorrow',
    time: '3:00 PM - 4:00 PM',
    topic: 'React Performance Optimization'
  },
  {
    id: 2,
    mentorName: 'Michael Chen',
    role: 'Lead Frontend Engineer',
    date: 'Sep 22, 2025',
    time: '11:00 AM - 12:00 PM',
    topic: 'Career Advancement in Tech'
  }
];

const cqScoreData = [
  { name: 'Technical', value: 75 },
  { name: 'Soft Skills', value: 85 },
  { name: 'Portfolio', value: 60 },
  { name: 'Experience', value: 40 }
];

const COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899'];

const roadmapProgressData = [
  { name: 'Foundation', completed: 80, total: 100 },
  { name: 'Frontend', completed: 30, total: 100 },
  { name: 'Backend', completed: 10, total: 100 },
  { name: 'DevOps', completed: 5, total: 100 }
];

const recommendedJobs = [
  {
    id: 1,
    title: 'Junior Frontend Developer',
    company: 'TechStart Inc.',
    location: 'Remote',
    match: 85
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'InnovateCorp',
    location: 'New York, NY',
    match: 78
  },
  {
    id: 3,
    title: 'React Developer',
    company: 'Digital Solutions',
    location: 'San Francisco, CA',
    match: 72
  }
];

export function DashboardOverview() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-300">
              Welcome back, James! Here's an overview of your progress.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/test/skills">
                Take Skills Test
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/roadmap">
                View Full Roadmap
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center">
                  <Target size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Career Quotient (CQ)
                </CardTitle>
                <CardDescription>Overall career readiness score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cqScoreData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {cqScoreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl font-bold fill-slate-900 dark:fill-white"
                      >
                        68
                      </text>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {cqScoreData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-xs text-slate-600 dark:text-slate-300 mr-1">
                        {item.name}:
                      </span>
                      <span className="text-xs font-medium text-slate-900 dark:text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-1 md:col-span-2"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center">
                  <BarChartIcon size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Roadmap Progress
                </CardTitle>
                <CardDescription>Full Stack Development pathway</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={roadmapProgressData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="completed" fill="#6366f1" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Overall completion: 35%</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/roadmap" className="flex items-center">
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="col-span-1 md:col-span-2"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center">
                  <CalendarIcon size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Upcoming Mentorship Sessions
                </CardTitle>
                <CardDescription>Scheduled sessions with industry experts</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingMentorships.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingMentorships.map((session) => (
                      <div 
                        key={session.id}
                        className="rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div>
                            <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                              {session.topic}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                              with {session.mentorName} • {session.role}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                              <div className="flex items-center">
                                <CalendarIcon size={14} className="mr-1" />
                                {session.date}
                              </div>
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {session.time}
                              </div>
                            </div>
                          </div>
                          <Button className="mt-3 sm:mt-0" variant="outline" size="sm">
                            Join Call
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button variant="ghost" size="sm" className="mt-2" asChild>
                      <Link href="/mentorship" className="flex items-center">
                        View All Sessions
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                      No upcoming mentorship sessions
                    </p>
                    <Button asChild>
                      <Link href="/mentorship">Book a Session</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center">
                  <BriefcaseIcon size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Recommended Jobs
                </CardTitle>
                <CardDescription>Based on your profile and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendedJobs.map((job) => (
                    <div 
                      key={job.id}
                      className="rounded-lg border border-slate-200 dark:border-slate-700 p-3"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {job.company}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {job.location}
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">
                          {job.match}% Match
                        </Badge>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="ghost" size="sm" className="w-full mt-2" asChild>
                    <Link href="/jobs" className="flex items-center justify-center">
                      View All Jobs
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}