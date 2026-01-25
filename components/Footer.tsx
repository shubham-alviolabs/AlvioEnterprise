import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-black/5 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
          The Future of AI<br />Is Unified.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
          ALVIO replaces fragmented tools with a single intelligence system - designed for organisations and individuals alike.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-24 lg:mb-32">
          <Button variant="primary" size="lg">Explore the Platform</Button>
          <Button variant="outline" size="lg">Get in Touch</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left border-t border-black/5 dark:border-white/10 pt-12 sm:pt-16">
          <div>
             <span className="text-xl font-bold text-gray-900 dark:text-white block mb-6">ALVIO</span>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-500">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Individuals</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Developers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-500">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About Labs</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-gray-900 dark:text-white font-medium mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-500">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16 text-gray-400 dark:text-gray-600 text-sm">
          © {new Date().getFullYear()} Alvio Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};