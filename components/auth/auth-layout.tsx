import Link from 'next/link';
import { Brain } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Auth form */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center mb-8 space-x-2">
            <Brain size={28} className="text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              AINEXA<span className="text-indigo-600 dark:text-indigo-400">2.0</span>
            </span>
          </Link>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {description}
          </p>
          
          {children}
        </div>
      </div>
      
      {/* Right side - Image/Pattern */}
      <div className="hidden md:block w-1/2 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDM2Wm0tMTggNDJjOS45NCAwIDE4LTguMDYgMTgtMThINTRjMCA5Ljk0LTguMDYgMTgtMTggMThWNjBaTTAgMEgwWiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md text-white border border-white/20">
            <blockquote className="mb-4 text-lg">
              "AINEXA helped me discover my passion for web development and provided a clear roadmap to success. I'm now working at my dream company!"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-sm text-white/70">Frontend Developer at Netflix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}