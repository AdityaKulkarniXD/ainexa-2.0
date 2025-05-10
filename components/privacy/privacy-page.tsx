'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: March 20, 2025
            </p>
          </motion.div>

          <Card className="p-6 prose dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              AINEXA ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect several different types of information for various purposes:</p>
            <ul>
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Educational and professional background</li>
              <li>Assessment results and career preferences</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>You have the following data protection rights:</p>
            <ul>
              <li>The right to access, update or delete your information</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@ainexa.com</li>
              <li>By visiting this page on our website: www.ainexa.com/contact</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}