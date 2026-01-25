import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

export const Individual: React.FC = () => {
  return (
    <Section id="solutions-individual" className="bg-white dark:bg-[#050505] py-0 border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="relative px-4 sm:px-6">
         {/* Decorative background for Individual section - Orange theme */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-accent-orange/5 dark:bg-accent-orange/5 blur-[150px] rounded-full pointer-events-none" />

         <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-16 sm:py-24 lg:py-32">
            <FadeIn>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-accent-orange rounded-full shadow-[0_0_10px_#F97316]"></span>
                <span className="text-accent-orange font-medium tracking-widest text-xs uppercase">ALVIO for Individuals</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-6">A personal AI system that <br className="hidden sm:block"/>plans, executes, and remembers.</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Designed for deep thinking, long-running tasks, and personal workflows. Not just conversational — operational.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Understands your goals and context",
                  "Breaks complex work into steps",
                  "Uses tools to execute actions",
                  "Maintains continuity over time"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-orange mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative group">
              <div className="glass-panel rounded-2xl p-4 sm:p-6 md:p-8 aspect-[4/3] sm:aspect-[4/3] flex flex-col relative z-10 shadow-xl dark:shadow-[0_0_50px_rgba(249,115,22,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
                 {/* UI Mockup for Individual Interface - Dark Themed inside */}
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full opacity-60" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-60" />
                        <div className="w-3 h-3 bg-green-500 rounded-full opacity-60" />
                    </div>
                    <div className="text-xs text-accent-orange/80 font-mono tracking-widest">ALVIO PERSONAL</div>
                 </div>
                 
                 <div className="flex-1 space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex-shrink-0 border border-black/5 dark:border-white/10" />
                        <div className="bg-gray-100 dark:bg-white/5 rounded-lg rounded-tl-none p-4 text-sm text-gray-700 dark:text-gray-300 w-3/4 border border-black/5 dark:border-white/5">
                            Analyze my schedule for next week and draft a prep doc for the quarterly review.
                        </div>
                    </div>
                     <div className="flex gap-4 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-orange to-accent-pink flex-shrink-0 shadow-lg" />
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 text-gray-900 dark:text-white rounded-lg rounded-tr-none p-5 text-sm w-3/4 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-md dark:shadow-none">
                           <p className="font-semibold mb-3 text-accent-orange">Plan initiated.</p>
                           <ul className="space-y-2 opacity-90">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
                                  Scanning calendar (14 events)
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
                                  Retrieving Q3 data
                                </li>
                                <li className="flex items-center gap-2 animate-pulse">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
                                  Drafting structure...
                                </li>
                           </ul>
                        </div>
                    </div>
                 </div>
              </div>
              
              {/* Vibrant Glow behind the card */}
              <div className="absolute inset-0 bg-accent-orange/10 dark:bg-accent-orange/20 blur-[80px] -z-10 rounded-full transform translate-y-10 group-hover:bg-accent-orange/20 dark:group-hover:bg-accent-orange/30 transition-colors duration-700" />
            </FadeIn>
         </div>
      </div>
    </Section>
  );
};