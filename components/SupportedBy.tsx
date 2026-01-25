import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ShieldCheck } from 'lucide-react';

export const SupportedBy: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-black border-y border-black/5 dark:border-white/5 py-16 relative z-20 transition-colors duration-500">
      
      {/* Background sheen */}
      <div className="absolute inset-0 bg-white/[0.01] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        
        {/* --- ROW 1: COMPLIANCE --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pb-12 border-b border-black/5 dark:border-white/5">
            
            <FadeIn delay={0} className="hidden md:block">
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap flex items-center gap-2">
                    <ShieldCheck size={14} className="text-accent-purple" /> Trusted & Verified
                </span>
            </FadeIn>
            
            <div className="h-8 w-px bg-black/10 dark:bg-white/10 hidden md:block"></div>

            <FadeIn delay={100} className="w-full">
                <a href="https://alvio.eu.trust.site" target="_blank" rel="noopener noreferrer" className="group/link flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-16 w-full">
                    
                    {/* GDPR */}
                    <div className="flex items-center gap-3 opacity-60 dark:opacity-50 group-hover/link:opacity-100 transition-all duration-500 hover:scale-105">
                        <div className="w-10 h-10 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center">
                            <span className="font-bold text-[10px] text-gray-700 dark:text-gray-300">GDPR</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Compliant</span>
                           <span className="text-[9px] text-gray-500 uppercase tracking-wider">Europe</span>
                        </div>
                    </div>

                    {/* SOC 2 */}
                    <div className="flex items-center gap-3 opacity-60 dark:opacity-50 group-hover/link:opacity-100 transition-all duration-500 hover:scale-105">
                        <div className="w-10 h-10 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center">
                            <span className="font-black text-xs text-gray-700 dark:text-gray-300">SOC</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-700 dark:text-gray-300">SOC 2</span>
                           <span className="text-[9px] text-gray-500 uppercase tracking-wider">Type II Ready</span>
                        </div>
                    </div>

                    {/* ISO 27001 */}
                    <div className="flex items-center gap-3 opacity-60 dark:opacity-50 group-hover/link:opacity-100 transition-all duration-500 hover:scale-105">
                         <div className="relative">
                            <span className="text-sm font-black text-gray-700 dark:text-gray-300 tracking-tighter">ISO</span>
                            <div className="h-[1px] w-full bg-gray-400 dark:bg-gray-500 my-0.5"></div>
                            <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400">27001</span>
                         </div>
                         <span className="text-[9px] text-gray-500 uppercase tracking-wider border-l border-gray-300 dark:border-gray-700 pl-2">Info<br/>Sec</span>
                    </div>

                     {/* ISO 42001 */}
                    <div className="flex items-center gap-3 opacity-60 dark:opacity-50 group-hover/link:opacity-100 transition-all duration-500 hover:scale-105">
                         <div className="relative">
                            <span className="text-sm font-black text-gray-700 dark:text-gray-300 tracking-tighter">ISO</span>
                            <div className="h-[1px] w-full bg-accent-purple/50 my-0.5"></div>
                            <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400">42001</span>
                         </div>
                         <span className="text-[9px] text-gray-500 uppercase tracking-wider border-l border-gray-300 dark:border-gray-700 pl-2">AI<br/>Mgmt</span>
                    </div>

                    {/* EU AI Act */}
                    <div className="flex items-center gap-3 opacity-60 dark:opacity-50 group-hover/link:opacity-100 transition-all duration-500 hover:scale-105">
                        <div className="w-10 h-8 border border-gray-400 dark:border-gray-600 rounded flex items-center justify-center relative overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-30">
                                <div className="w-0.5 h-0.5 rounded-full bg-black dark:bg-white"></div>
                                <div className="w-0.5 h-0.5 rounded-full bg-black dark:bg-white"></div>
                                <div className="w-0.5 h-0.5 rounded-full bg-black dark:bg-white"></div>
                             </div>
                             <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 relative z-10">EU</span>
                        </div>
                         <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-700 dark:text-gray-300">AI Act</span>
                           <span className="text-[9px] text-gray-500 uppercase tracking-wider">Compliant</span>
                        </div>
                    </div>

                </a>
            </FadeIn>
        </div>


        {/* --- ROW 2: INFRASTRUCTURE --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
            <FadeIn delay={200} className="hidden md:block">
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-gray-600 uppercase whitespace-nowrap">
                    Trusted By
                </span>
            </FadeIn>
            
            <div className="h-8 w-px bg-black/10 dark:bg-white/10 hidden md:block"></div>

            <FadeIn delay={300} className="w-full">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-16 w-full">
                    
                    {/* NVIDIA */}
                    <div className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default">
                        <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current text-black dark:text-white group-hover:text-[#76B900] transition-colors" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 9.5c-0.1 0-0.2 0-0.3 0 -1.9 3.5-5.3 5.3-9.1 4.7 0.9-0.5 1.5-1 1.7-1.4 0.9-1.5 0.5-2.8-0.9-3.2 -2.8-0.8-5.3 1.1-5.1 4.6 0.1 1.3 0.6 2.3 1.6 3 -4.3-0.5-6.5-3.3-5.2-7.4 0.6-2 1.9-3.3 3.5-4.2 -1.5 0.3-2.8 1-3.7 2.1 -1.9 2.4-2 5.5-0.2 8.1 1.6 2.3 3.9 3.4 6.9 3.3 4.8-0.1 8.2-3 9.4-7.5C23.1 11.2 23.9 10.4 24 9.5z"/>
                            <path d="M8.2 8.3c-2.3 0.8-3.7 3.3-3.2 5.7 0.1 0.5 0.3 0.9 0.5 1.4 -1.3-0.5-2.1-1.3-2.4-2.5 -0.6-2.2 0.4-4.5 2.5-5.5C6.3 7.1 7.2 7.7 8.2 8.3z"/>
                            <path d="M12.9 6.2c-2.6 0.5-4.4 3-4 5.6 0.1 0.4 0.2 0.8 0.4 1.2 -1.1-0.5-1.9-1.4-2.1-2.6 -0.5-2.5 1-4.9 3.3-5.5C11.3 4.7 12.1 5.3 12.9 6.2z"/>
                        </svg>
                        <span className="text-lg font-bold text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white tracking-wide">NVIDIA</span>
                    </div>

                    {/* AWS */}
                    <div className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default">
                        <svg viewBox="0 0 24 24" className="h-8 w-auto fill-current text-black dark:text-white group-hover:text-[#FF9900] transition-colors" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6 13.9c0.4 0.5 0.9 0.7 1.5 0.7 1.4 0 2.2-1.5 2.2-3.8V4.1h-2.3v6.3c0 1.3-0.3 2-0.9 2 -0.5 0-0.8-0.3-0.8-1V4.1h-2.3v6.8C14 12.7 15.1 13.9 16.6 13.9zM7.2 13.9c1.6 0 2.8-1.1 2.8-3.1V9.2l-1.6 0.4c-1.9 0.5-2.4 1-2.4 2 0 0.8 0.5 1.1 1.2 1.1 0.9 0 1.7-0.7 2.1-1.8v1.8c-0.2 0.1-0.5 0.1-0.8 0.1 -1.6 0-2.8-0.8-2.8-2.2 0-1.8 1.4-2.6 4-3.1V7.2c0-1-0.5-1.4-1.6-1.4 -1 0-1.7 0.3-2.3 1L4.8 5.7c0.8-1 2.2-1.6 4.1-1.6 2.6 0 3.8 1.1 3.8 3.3v6.5h-2.1v-1.4C10.2 13.5 8.9 13.9 7.2 13.9zM19 15.6c0.8 0.6 3 1.1 4.5 0.2l0.4 1.5c-1.7 1.4-5 1.2-6.6-0.1L19 15.6z M5.5 15.9c-0.6 0.3-1.2 0.5-2 0.5 -1.2 0-1.8-0.5-2.5-1.6l-1 0.7C1 17.1 2 18 3.6 18c1.1 0 2-0.3 2.8-0.7L5.5 15.9z"/>
                        </svg>
                    </div>

                    {/* GOOGLE CLOUD */}
                    <div className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default">
                        <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current text-black dark:text-white group-hover:text-[#4285F4] transition-colors" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 9.5v2.8h4.5c-0.2 1.1-0.7 2-1.5 2.5 -0.8 0.6-1.9 1.1-3 1.1 -2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.2 0 2.3 0.5 3.1 1.2l2.2-2.2C16.4 4.6 14.6 3.7 12.5 3.7c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5c2.5 0 4.6-0.8 6.1-2.4 1.7-1.7 2.2-4.2 2.2-6.2 0-0.4 0-1.1-0.1-1.6H12.5z"/>
                        </svg>
                        <span className="text-lg font-medium text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">Google Cloud</span>
                    </div>

                    {/* ELEVEN LABS */}
                    <div className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default">
                        <div className="flex gap-0.5 h-5 items-end">
                            <div className="w-1 h-3 bg-black dark:bg-white group-hover:bg-black dark:group-hover:bg-white transition-all"></div>
                            <div className="w-1 h-5 bg-black dark:bg-white group-hover:bg-black dark:group-hover:bg-white transition-all"></div>
                            <div className="w-1 h-2 bg-black dark:bg-white group-hover:bg-black dark:group-hover:bg-white transition-all"></div>
                            <div className="w-1 h-4 bg-black dark:bg-white group-hover:bg-black dark:group-hover:bg-white transition-all"></div>
                        </div>
                        <span className="text-lg font-medium text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">ElevenLabs</span>
                    </div>

                </div>
            </FadeIn>
        </div>
      </div>
    </div>
  );
};