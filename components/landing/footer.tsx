import Link from 'next/link';
import { Brain, Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Brain size={28} className="text-indigo-600 dark:text-indigo-400" />
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                AINEXA<span className="text-indigo-600 dark:text-indigo-400">2.0</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md">
              Using AI to help students and professionals discover and pursue their ideal career paths through personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/test/aptitude" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Jobs & Internships
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} AINEXA. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="mailto:contact@ainexa.com" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 text-sm flex items-center">
              <Mail size={16} className="mr-2" />
              contact@ainexa.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}