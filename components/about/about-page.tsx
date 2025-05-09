'use client';

import { motion } from 'framer-motion';
import { Brain, Users, Target, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
            >
              About AINEXA<span className="text-indigo-600 dark:text-indigo-400">2.0</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-300"
            >
              Empowering students and professionals to discover and pursue their ideal career paths through AI-driven guidance and personalized mentorship.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                At AINEXA, we believe everyone deserves access to personalized career guidance that aligns with their unique skills, interests, and potential. Our mission is to revolutionize career development through the power of artificial intelligence and human expertise.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We're committed to bridging the gap between education and employment, ensuring every individual can make informed decisions about their professional future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Values</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: 'Innovation',
                description: 'Leveraging cutting-edge AI technology to provide personalized career guidance',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Community',
                description: 'Building a supportive network of mentors and learners',
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Precision',
                description: 'Delivering accurate, data-driven career recommendations',
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excellence',
                description: 'Maintaining the highest standards in everything we do',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Meet the experts behind AINEXA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Chief AI Officer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
                bio: 'Ph.D. in Machine Learning with 10+ years of experience in AI-driven career analytics',
              },
              {
                name: 'Michael Rodriguez',
                role: 'Head of Career Development',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
                bio: 'Former Career Counselor with expertise in professional development and mentorship',
              },
              {
                name: 'Emily Thompson',
                role: 'Director of Operations',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
                bio: 'MBA with extensive experience in EdTech and career services management',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}