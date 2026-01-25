import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown, Layout, Bot, User, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-black/5 dark:border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO - Pure Text, Modern, Apple-like */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.location.href = '/'}>
           <span className="text-2xl md:text-3xl font-sans font-bold tracking-tighter text-gray-900 dark:text-white leading-none hover:opacity-80 transition-opacity">
             ALVIO
           </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#engine" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Engine</a>
          <a href="#solutions-enterprise" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Enterprise</a>
          <a href="#integrations" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Integrations</a>
          <a href="#suite" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Architecture</a>
          <a href="#solutions-individual" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Personal</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          >
             {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Liquid Mercury Dropdown */}
          <div className="relative" ref={loginRef}>
            <button 
                onClick={() => setLoginMenuOpen(!loginMenuOpen)}
                className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 border ${
                    loginMenuOpen 
                    ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white border-black/10 dark:border-white/10' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
            >
                Log in <ChevronDown size={14} className={`transition-transform duration-300 ${loginMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {loginMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-72 p-2 transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2 z-50">
                    {/* Glass Container */}
                    <div className="bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                        
                        <div className="p-2 space-y-1">
                            <a href="https://enterprise.alvio.io/auth/" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent-purple shadow-sm">
                                    <Layout size={18} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Enterprise Core</div>
                                    <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Workspace & Search</div>
                                </div>
                            </a>

                            <a href="https://agent.alvio.io/sign-in" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent-pink shadow-sm">
                                    <Bot size={18} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Alvio Agents</div>
                                    <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Workflows & Auto</div>
                                </div>
                            </a>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent mx-4"></div>

                        <div className="p-2">
                             <a href="https://alvio.io/auth" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent-orange shadow-sm">
                                    <User size={18} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Personal Suite</div>
                                    <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Individual Account</div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            )}
          </div>

          <Button variant="primary" size="sm" onClick={() => window.location.href = 'https://enterprise.alvio.io/auth/'}>Start Enterprise</Button>
        </div>

        <button 
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 md:hidden flex flex-col gap-6 animate-slide-up-fade">
          <a href="#engine" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">Engine</a>
          <a href="#solutions-enterprise" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">Enterprise</a>
          <a href="#integrations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">Integrations</a>
          <a href="#suite" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">Architecture</a>
          <a href="#solutions-individual" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 dark:text-white">Personal</a>
          <div className="h-px bg-gray-200 dark:bg-white/10"></div>
          <button onClick={toggleTheme} className="flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-400">
             {isDark ? <Sun size={20} /> : <Moon size={20} />} Switch Theme
          </button>
          <div className="grid grid-cols-2 gap-4 pt-4">
              <Button variant="outline" fullWidth onClick={() => window.location.href = 'https://alvio.io/auth'}>Login</Button>
              <Button variant="primary" fullWidth onClick={() => window.location.href = 'https://enterprise.alvio.io/auth/'}>Start</Button>
          </div>
        </div>
      )}
    </nav>
  );
};