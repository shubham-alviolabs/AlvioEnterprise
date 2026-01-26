import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-black/5 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4">
          The Future of AI<br />Is Unified.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          ALVIO replaces fragmented tools with a single intelligence system - designed for organisations and individuals alike.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-24 lg:mb-32 px-4">
          <Button variant="primary" size="lg">Explore the Platform</Button>
          <Button variant="outline" size="lg">Get in Touch</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-12 text-left border-t border-black/5 dark:border-white/10 pt-12 sm:pt-16 px-4">
          <div className="flex flex-col items-start">
             <img src="/logo.png" alt="ALVIO" className="h-8 w-auto mb-6 brightness-0 dark:brightness-100" />
             <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
               The unified intelligence system for modern enterprises.
             </p>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-sm">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#solutions-enterprise" className="hover:text-black dark:hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#solutions-individual" className="hover:text-black dark:hover:text-white transition-colors">Individuals</a></li>
              <li><a href="#trust" className="hover:text-black dark:hover:text-white transition-colors">Security</a></li>
              <li><a href="#integrations" className="hover:text-black dark:hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About Labs</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-sm">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-16 pt-8 border-t border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-500 text-sm px-4 gap-4">
          <div>© {new Date().getFullYear()} Alvio Labs. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};