'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium"
            >
              <Sparkles size={16} className="mr-2" />
              AI-Powered Career Guidance
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white"
            >
              Discover Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-indigo-400 dark:to-teal-300">
                Perfect Career
              </span>{' '}
              Path Using AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-lg"
            >
              Get personalized career guidance, custom learning roadmaps, and connect with mentors 
              who can help you achieve your professional goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/test/aptitude">
                <Button size="lg" className="group">
                  Take the Free Career Test
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-sm text-slate-500 dark:text-slate-400"
            >
              Join 50,000+ students and professionals who found their ideal career
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl shadow-xl">
              <div className="rounded-xl overflow-hidden aspect-video mb-4">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Career guidance session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="h-3 w-3/4 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="h-10 w-20 bg-indigo-500 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                  <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                  <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                  <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}