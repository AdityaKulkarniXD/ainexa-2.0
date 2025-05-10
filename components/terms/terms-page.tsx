'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: March 20, 2025
            </p>
          </motion.div>

          <Card className="p-6 prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to AINEXA ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by AINEXA.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2>2. Communications</h2>
            <p>
              By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
            </p>

            <h2>3. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service.
            </p>

            <h2>4. Accounts</h2>
            <p>
              When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of AINEXA and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>

            <h2>6. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third party web sites or services that are not owned or controlled by AINEXA. AINEXA has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2>8. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: terms@ainexa.com</li>
              <li>By visiting this page on our website: www.ainexa.com/contact</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}