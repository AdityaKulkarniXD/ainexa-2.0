'use client';

import { motion } from 'framer-motion';
import { Navbar } from './navbar';
import { HeroSection } from './hero-section';
import { FeaturesSection } from './features-section';
import { TestimonialsSection } from './testimonials-section';
import { HowItWorksSection } from './how-it-works-section';
import { CareerDomainsSection } from './career-domains-section';
import { CTASection } from './cta-section';
import { Footer } from './footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CareerDomainsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </motion.div>
    </div>
  );
}