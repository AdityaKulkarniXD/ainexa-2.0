'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { 
  Brain, LayoutDashboard, BookOpen, Calendar, User, 
  Briefcase, BarChart, MessagesSquare, GraduationCap, 
  Settings, Menu, X, Bell, Search, ChevronsLeft, ChevronsRight
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: 'My Roadmap',
    href: '/roadmap',
    icon: <BookOpen size={20} />,
  },
  {
    title: 'Mentorship',
    href: '/mentorship',
    icon: <Calendar size={20} />,
  },
  {
    title: 'Jobs & Internships',
    href: '/jobs',
    icon: <Briefcase size={20} />,
  },
  {
    title: 'My Portfolio',
    href: '/portfolio',
    icon: <User size={20} />,
  },
  {
    title: 'CQ Score',
    href: '/cq-score',
    icon: <BarChart size={20} />,
  },
  {
    title: 'AI Assistant',
    href: '/ai-assistant',
    icon: <MessagesSquare size={20} />,
  },
  {
    title: 'Scholarships',
    href: '/scholarships',
    icon: <GraduationCap size={20} />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <Settings size={20} />,
  },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 z-50 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-300 ease-in-out',
          isSidebarCollapsed ? 'w-20' : 'w-64',
          isMobileMenuOpen ? 'left-0' : '-left-full md:left-0'
        )}
      >
        <div className="flex items-center h-16 px-4 border-b border-slate-200 dark:border-slate-800">
          <Link href="/" className="flex items-center space-x-2 w-full">
            <Brain size={28} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            {!isSidebarCollapsed && (
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                AINEXA<span className="text-indigo-600 dark:text-indigo-400">2.0</span>
              </span>
            )}
          </Link>
        </div>
        
        <div className="flex-1 overflow-auto py-4">
          <nav className="px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60',
                  isSidebarCollapsed ? 'justify-center' : 'space-x-3'
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isSidebarCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 p-4">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="hidden md:flex items-center justify-center w-full py-2 text-sm text-slate-500 dark:text-slate-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            {isSidebarCollapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
            {!isSidebarCollapsed && <span className="ml-2">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div 
        className={cn(
          'flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out',
          isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center h-16 px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden mr-4 text-slate-500 dark:text-slate-400"
          >
            <Menu size={24} />
          </button>
          
          <div className="relative w-full max-w-md hidden sm:block">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search..."
              className="w-full pl-10 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
            />
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <ModeToggle />
            
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}