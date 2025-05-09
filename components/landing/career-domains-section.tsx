'use client';

import { motion } from 'framer-motion';
import { Cpu, PenTool, Code, LineChart, Layers, Database, Globe, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const domains = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Artificial Intelligence',
    description: 'Machine Learning, Data Science, AI Ethics',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Frontend, Backend, Full-Stack',
    color: 'bg-gradient-to-br from-teal-500 to-teal-600',
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: 'UI/UX Design',
    description: 'User Experience, Visual Design, Research',
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile Development',
    description: 'iOS, Android, Cross-Platform',
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Data Engineering',
    description: 'ETL, Data Architecture, Big Data',
    color: 'bg-gradient-to-br from-violet-500 to-violet-600',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Product Management',
    description: 'Strategy, Roadmapping, Execution',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'DevOps & Cloud',
    description: 'CI/CD, Infrastructure, Platform Engineering',
    color: 'bg-gradient-to-br from-rose-500 to-rose-600',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Digital Marketing',
    description: 'SEO, Content Marketing, Analytics',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
  },
];

export function CareerDomainsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="domains" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Explore Career Domains
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Discover opportunities across diverse and in-demand professional fields
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Link href={`/domains/${domain.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="h-full overflow-hidden border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                  <div className={`${domain.color} text-white p-4 flex items-center justify-between`}>
                    {domain.icon}
                    <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {domain.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}