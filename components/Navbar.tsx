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

  const navLinks = [
    { href: '#', label: 'Home', color: 'from-white to-gray-300' },
    { href: '#problem', label: 'Problem', color: 'from-accent-orange to-red-500' },
    { href: '#engine', label: 'Engine', color: 'from-blue-500 to-cyan-500' },
    { href: '#solutions-enterprise', label: 'Enterprise', color: 'from-accent-pink to-pink-600' },
    { href: '#integrations', label: 'Integrations', color: 'from-green-500 to-emerald-500' },
    { href: '#suite', label: 'Architecture', color: 'from-accent-purple to-purple-600' },
    { href: '#solutions-individual', label: 'Personal', color: 'from-accent-orange to-yellow-500' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-black/5 dark:border-white/5 py-3 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <img
             src="/logo.png"
             alt="ALVIO Labs"
             className="h-8 md:h-10 w-auto hover:scale-105 transition-transform duration-300"
           />
        </div>

        {/* Desktop Navigation - Creative Gradient Pills */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-full overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Gradient underline on hover */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-[80%] transition-all duration-300 bg-gradient-to-r ${link.color} rounded-full`}></div>
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${link.color} blur-xl`}></div>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">

          <button
            onClick={toggleTheme}
            className="group p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity blur-md"></div>
             <span className="relative z-10">
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </span>
          </button>

          {/* Creative Dropdown */}
          <div className="relative" ref={loginRef}>
            <button
                onClick={() => setLoginMenuOpen(!loginMenuOpen)}
                className={`group relative flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border overflow-hidden ${
                    loginMenuOpen
                    ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white border-black/10 dark:border-white/10 shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover:opacity-5 transition-opacity blur-xl"></div>
                <span className="relative z-10">Log in</span>
                <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${loginMenuOpen ? 'rotate-180' : ''}`} />
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
          className="lg:hidden p-2 rounded-lg text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Creative Gradient Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 p-6 lg:hidden flex flex-col gap-4 animate-slide-up-fade shadow-2xl">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group relative text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 py-2 pl-4 border-l-2 border-transparent hover:border-current"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent my-2"></div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2 pl-4"
          >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
             <span>Switch to {isDark ? 'Light' : 'Dark'} Mode</span>
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