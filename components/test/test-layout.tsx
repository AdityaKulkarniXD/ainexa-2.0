'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TestLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const testType = pathname.includes('aptitude') ? 'aptitude' : 'skills';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain size={28} className="text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              AINEXA<span className="text-indigo-600 dark:text-indigo-400">2.0</span>
            </span>
          </Link>
          
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4 mb-6">
            <Link href="/test/aptitude">
              <Button 
                variant={testType === 'aptitude' ? 'default' : 'outline'}
                className="w-36"
              >
                Aptitude Test
              </Button>
            </Link>
            <Link href="/test/skills">
              <Button 
                variant={testType === 'skills' ? 'default' : 'outline'}
                className="w-36"
              >
                Skills Test
              </Button>
            </Link>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}