import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown, Layout, Bot, User, Sun, Moon, Search, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const [engineMenuOpen, setEngineMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const loginRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section for scroll spy
      const sections = ['problem', 'engine', 'solutions-enterprise', 'integrations', 'suite', 'solutions-individual'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }

      // Home section at top
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginMenuOpen(false);
      }
      if (engineRef.current && !engineRef.current.contains(event.target as Node)) {
        setEngineMenuOpen(false);
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

  const mainNavLinks = [
    { href: '/', id: 'home', label: 'Home', color: 'from-gray-400 to-gray-600', isRoute: true },
    { href: '#problem', id: 'problem', label: 'Problem', color: 'from-accent-orange to-red-500', isRoute: false },
    { href: '#solutions-enterprise', id: 'solutions-enterprise', label: 'Solutions', color: 'from-blue-500 to-cyan-500', isRoute: false },
    { href: '#integrations', id: 'integrations', label: 'Integrations', color: 'from-green-500 to-emerald-500', isRoute: false },
    { href: '#suite', id: 'suite', label: 'Architecture', color: 'from-accent-purple to-purple-600', isRoute: false },
  ];

  const engineSubItems = [
    { href: '/enterprise-search', id: 'search', label: 'Enterprise Search', color: 'from-accent-pink to-pink-600', icon: Search },
    { href: '/apps', id: 'apps', label: 'App Builder', color: 'from-accent-orange to-orange-600', icon: Layout },
    { href: '/agents', id: 'agents', label: 'Workflow Agents', color: 'from-accent-purple to-purple-600', icon: Zap },
  ];

  const location = useLocation();
  const isEngineActive = engineSubItems.some(item => location.pathname === item.href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-3xl border-black/5 dark:border-white/5 py-3 shadow-2xl shadow-black/5 dark:shadow-black/30'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center group cursor-pointer">
           <img
             src="/logo.png"
             alt="ALVIO Labs"
             className="h-8 md:h-10 w-auto hover:scale-105 transition-all duration-500 ease-out"
           />
        </Link>

        {/* Desktop Navigation - Apple-like Premium Design */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNavLinks.map((link) => {
            const isActive = link.isRoute ? location.pathname === link.href : activeSection === link.id;

            const content = (
              <>
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full transition-all duration-500 ease-out"></div>
                )}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-r ${link.color} blur-xl -z-10 scale-150`}></div>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 ease-out bg-gradient-to-r ${link.color} ${
                  isActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0'
                }`}></div>
              </>
            );

            const className = `group relative px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out rounded-full ${
              isActive
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`;

            return link.isRoute ? (
              <Link key={link.href} to={link.href} className={className}>
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={className}>
                {content}
              </a>
            );
          })}

          {/* Engine Dropdown */}
          <div className="relative" ref={engineRef}>
            <button
              onMouseEnter={() => setEngineMenuOpen(true)}
              onClick={() => setEngineMenuOpen(!engineMenuOpen)}
              className={`group relative px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out rounded-full flex items-center gap-1.5 ${
                isEngineActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="relative z-10">Engine</span>

              <ChevronDown
                size={14}
                className={`relative z-10 transition-all duration-500 ease-out ${
                  engineMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />

              {/* Active state background */}
              {isEngineActive && (
                <div className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full transition-all duration-500 ease-out"></div>
              )}

              {/* Hover gradient glow - multicolor for Engine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple blur-xl -z-10 scale-150"></div>

              {/* Bottom indicator for active state */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple ${
                isEngineActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </button>

            {/* Fancy Engine Dropdown Menu */}
            {engineMenuOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96"
                onMouseLeave={() => setEngineMenuOpen(false)}
              >
                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden p-3 animate-in fade-in slide-in-from-top-2 duration-500">
                  {engineSubItems.map((item, index) => {
                    const isActive = location.pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setEngineMenuOpen(false)}
                        className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ease-out ${
                          isActive
                            ? 'bg-gradient-to-r from-black/5 to-transparent dark:from-white/10 dark:to-transparent'
                            : 'hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {/* Gradient glow on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-r ${item.color} blur-2xl -z-10`}></div>

                        {/* Icon */}
                        <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} opacity-10 dark:opacity-20 flex items-center justify-center transition-all duration-500 ease-out group-hover:opacity-20 dark:group-hover:opacity-30`}>
                          <item.icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`} style={{
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text'
                          }} />
                        </div>

                        {/* Text */}
                        <div className="relative z-10 flex-1">
                          <div className={`text-base font-semibold transition-all duration-500 ease-out mb-1 ${
                            isActive
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                          }`}>
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {item.id === 'search' && 'Find anything across your tools'}
                            {item.id === 'apps' && 'Build custom apps with prompts'}
                            {item.id === 'agents' && 'Automate work with AI workflows'}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <div className={`relative z-10 transition-all duration-500 ease-out ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}>
                          <ChevronDown size={16} className="-rotate-90" />
                        </div>

                        {/* Left border highlight on active */}
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 rounded-r-full bg-gradient-to-b ${item.color} transition-all duration-500 ease-out ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="group p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-500 ease-out relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out blur-md"></div>
             <span className="relative z-10">
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </span>
          </button>

          {/* Creative Login Dropdown */}
          <div className="relative" ref={loginRef}>
            <button
                onClick={() => setLoginMenuOpen(!loginMenuOpen)}
                className={`group relative flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-500 ease-out border overflow-hidden ${
                    loginMenuOpen
                    ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white border-black/10 dark:border-white/10 shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover:opacity-5 transition-all duration-500 ease-out blur-xl"></div>
                <span className="relative z-10">Log in</span>
                <ChevronDown size={14} className={`relative z-10 transition-all duration-500 ease-out ${loginMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {loginMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-72 p-2 transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2 duration-500 z-50">
                    <div className="bg-white/95 dark:bg-black/95 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden">

                        <div className="p-2 space-y-1">
                            <a href="https://enterprise.alvio.io/auth/" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 ease-out group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                                <div className="relative z-10 w-10 h-10 rounded-lg bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent-purple shadow-sm">
                                    <Layout size={18} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Enterprise Core</div>
                                    <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Workspace & Search</div>
                                </div>
                            </a>

                            <a href="https://agent.alvio.io/sign-in" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 ease-out group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
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
                             <a href="https://alvio.io/auth" className="flex items-center gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-500 ease-out group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
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
          className="lg:hidden p-2 rounded-lg text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-500 ease-out"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-3xl border-b border-gray-200 dark:border-white/10 p-6 lg:hidden flex flex-col gap-4 animate-slide-up-fade shadow-2xl">
          {mainNavLinks.map((link) => {
            const isActive = link.isRoute ? location.pathname === link.href : activeSection === link.id;

            const content = (
              <span className={`relative text-lg font-medium py-2 pl-4 border-l-2 transition-all duration-500 ease-out block ${
                isActive
                  ? 'text-gray-900 dark:text-white border-current'
                  : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-gray-900 dark:hover:text-white hover:border-current'
              }`}>
                {link.label}
              </span>
            );

            return link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {content}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {content}
              </a>
            );
          })}

          <div className="pl-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Engine</div>
            {engineSubItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 text-base font-medium py-2 pl-4 border-l-2 transition-all duration-500 ease-out ${
                    isActive
                      ? 'text-gray-900 dark:text-white border-current'
                      : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-gray-900 dark:hover:text-white hover:border-current'
                  }`}
                >
                  <item.icon size={16} className={`${isActive ? 'opacity-100' : 'opacity-60'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent my-2"></div>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-500 ease-out py-2 pl-4"
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
