'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, BarChart, Lightbulb, Users } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck size={28} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Take the Assessment',
    description: 'Complete our skill and aptitude tests to discover your strengths and interests.',
    delay: 0.1,
  },
  {
    icon: <Lightbulb size={28} className="text-teal-600 dark:text-teal-400" />,
    title: 'Get Personalized Roadmap',
    description: 'Receive a custom career plan with learning resources and milestones.',
    delay: 0.2,
  },
  {
    icon: <Users size={28} className="text-amber-600 dark:text-amber-400" />,
    title: 'Connect with Mentors',
    description: 'Book sessions with industry professionals for guidance and networking.',
    delay: 0.3,
  },
  {
    icon: <BarChart size={28} className="text-pink-600 dark:text-pink-400" />,
    title: 'Track Your Progress',
    description: 'Monitor your improvement and update your path as you grow.',
    delay: 0.4,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            How AINEXA Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our simple process guides you from assessment to career success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-teal-500 to-amber-500 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative z-10"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}