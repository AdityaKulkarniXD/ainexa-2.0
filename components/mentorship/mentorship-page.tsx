'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Clock, Video, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Senior AI Researcher at Google',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    expertise: ['Machine Learning', 'AI Ethics', 'Career Development'],
    rating: 4.9,
    reviews: 128,
    rate: '$150/hour',
    availability: 'Next available: Tomorrow',
    bio: 'With over 10 years of experience in AI and machine learning, I help professionals navigate their tech careers.'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Product Manager at Meta',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    expertise: ['Product Strategy', 'UX Design', 'Team Leadership'],
    rating: 4.8,
    reviews: 95,
    rate: '$120/hour',
    availability: 'Next available: This week',
    bio: 'Passionate about helping aspiring product managers develop their skills and advance their careers.'
  },
  {
    id: 3,
    name: 'Emily Thompson',
    role: 'Senior Frontend Engineer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    expertise: ['React', 'Web Performance', 'Career Transition'],
    rating: 4.7,
    reviews: 73,
    rate: '$100/hour',
    availability: 'Next available: Today',
    bio: 'Specialized in helping developers improve their frontend skills and navigate tech interviews.'
  }
];

export function MentorshipPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Connect with Expert Mentors
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Get personalized guidance from industry professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-48">
                          <Avatar className="w-32 h-32">
                            <AvatarImage src={mentor.image} alt={mentor.name} />
                            <AvatarFallback>
                              {mentor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                {mentor.name}
                              </h2>
                              <p className="text-slate-600 dark:text-slate-300">
                                {mentor.role}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center mb-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                                <span className="font-medium text-slate-900 dark:text-white">
                                  {mentor.rating}
                                </span>
                                <span className="text-slate-500 dark:text-slate-400 ml-1">
                                  ({mentor.reviews} reviews)
                                </span>
                              </div>
                              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                                {mentor.rate}
                              </p>
                            </div>
                          </div>

                          <p className="text-slate-600 dark:text-slate-300 mb-4">
                            {mentor.bio}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {mentor.expertise.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                              <Clock className="w-4 h-4 mr-1" />
                              {mentor.availability}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Message
                              </Button>
                              <Button>
                                <Video className="w-4 h-4 mr-2" />
                                Book Session
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 sticky top-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Schedule a Session
                    </h2>
                    <CalendarIcon className="w-5 h-5 text-slate-400" />
                  </div>

                  <Calendar
                    mode="single"
                    className="rounded-md border mb-6"
                  />

                  <div className="space-y-2 mb-6">
                    {['9:00 AM', '10:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {time}
                      </Button>
                    ))}
                  </div>

                  <Button className="w-full">
                    Book Consultation
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}