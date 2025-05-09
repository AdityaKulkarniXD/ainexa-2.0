'use client';

import { motion } from 'framer-motion';
import { Brain, Compass, BarChart3, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Brain size={24} />,
    title: 'AI Skill Assessment',
    description: 'Discover your natural abilities and strengths with our advanced AI assessment tools.',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    icon: <Compass size={24} />,
    title: 'Personalized Roadmaps',
    description: 'Get a custom career path designed specifically for your skills and interests.',
    color: 'from-teal-600 to-teal-400',
  },
  {
    icon: <Calendar size={24} />,
    title: '1-on-1 Mentorship',
    description: 'Connect with industry experts for guidance and personalized advice.',
    color: 'from-amber-600 to-amber-400',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Job Recommendations',
    description: 'Receive curated job and internship opportunities that match your profile.',
    color: 'from-pink-600 to-pink-400',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Career Quotient (CQ)',
    description: 'Track your progress with our proprietary career readiness scoring system.',
    color: 'from-violet-600 to-violet-400',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Learning Resources',
    description: 'Access curated courses, projects, and certifications to upskill.',
    color: 'from-blue-600 to-blue-400',
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Features Designed for Career Success
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our platform combines AI technology with expert guidance to help you navigate your career journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}