import React from 'react';
import { Button } from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-black overflow-hidden transition-colors duration-500">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gray-100/50 dark:from-white/5 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 border-t border-black/5 dark:border-white/10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 lg:pt-32 pb-8">

          <div className="relative mb-16 sm:mb-24 lg:mb-32">

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-800 dark:to-black animate-morph blur-xl"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-white/60 to-transparent dark:from-white/10 mix-blend-overlay animate-morph" style={{ animationDelay: '-2s' }}></div>
              </div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                The Future of AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-white">Is Unified.</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                ALVIO replaces fragmented tools with a single intelligence system designed for organisations and individuals alike.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore the Platform
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  Get in Touch
                  <ArrowUpRight size={14} className="ml-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100/50 dark:from-white/[0.03] dark:to-white/[0.01] pointer-events-none"></div>
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-black/5 dark:border-white/10 pointer-events-none"></div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

                <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col items-start">
                  <a href="/" className="relative mb-4 group cursor-pointer">
                    <img src="/logo copy.png" alt="ALVIO" className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-all duration-500 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm animate-shimmer pointer-events-none dark:opacity-50" style={{ animationDuration: '3s' }}></div>
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 leading-relaxed max-w-[200px]">
                    The unified intelligence system for modern enterprises.
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-xs uppercase tracking-wider">Platform</h4>
                  <ul className="space-y-2.5">
                    {['Enterprise', 'Individuals', 'Security', 'Integrations'].map((item) => (
                      <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                          <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-xs uppercase tracking-wider">Company</h4>
                  <ul className="space-y-2.5">
                    {['About Labs', 'Careers', 'Blog', 'Contact'].map((item) => (
                      <li key={item}>
                        <a href="#" className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                          <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-xs uppercase tracking-wider">Legal</h4>
                  <ul className="space-y-2.5">
                    <li>
                      <a href="/privacy-policy" className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                        <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-of-use" className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                        <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="/cookie-policy" className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                        <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-xs uppercase tracking-wider">Connect</h4>
                  <ul className="space-y-2.5">
                    {['Twitter', 'LinkedIn', 'GitHub'].map((item) => (
                      <li key={item}>
                        <a href="#" className="group text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                          <span className="w-0 h-px bg-gray-900 dark:bg-white group-hover:w-2 transition-all duration-300"></span>
                          {item}
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 dark:text-gray-600">
                  © {new Date().getFullYear()} Alvio Labs. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
