import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { Database, ZapOff, Layers, AlertTriangle } from 'lucide-react';

export const Problem: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="problem" className="bg-gray-50 dark:bg-black relative overflow-hidden py-16 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/5 transition-colors duration-500">

      {/* Ambient Background - Deep Void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="order-2 lg:order-1">
            <FadeIn>
                 <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 sm:mb-8 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <AlertTriangle size={12} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">The Current Reality</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 sm:mb-8 leading-[1.1]">
                    Intelligence <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">Disconnected.</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 font-light leading-relaxed max-w-lg">
                    Before fusion, there is fragmentation. Your data, logic, and interface exist as isolated liquid islands—heavy, dark, and unable to communicate.
                </p>
            </FadeIn>

            <div className="space-y-6">
                 {[
                    {
                        id: 0,
                        title: "Frozen Data Lakes",
                        subtitle: "Inaccessible",
                        desc: "Your knowledge is trapped in static files and closed APIs, creating 'Dark Data' that AI cannot reach.",
                        icon: Database,
                        color: "bg-accent-pink" 
                    },
                    {
                        id: 1,
                        title: "Brittle Logic Scripts",
                        subtitle: "Unscalable",
                        desc: "Workflows are hard-coded. One change in a tool breaks the entire chain, requiring constant maintenance.",
                        icon: ZapOff,
                        color: "bg-accent-purple"
                    },
                    {
                        id: 2,
                        title: "Fragmented Interfaces",
                        subtitle: "Inefficient",
                        desc: "Users context-switch between 10+ dashboards daily. Information is visible but disconnected from action.",
                        icon: Layers,
                        color: "bg-accent-orange"
                    }
                 ].map((item, i) => (
                     <FadeIn key={i} delay={i * 100}>
                         <div 
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-black border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20 shadow-sm hover:shadow-md dark:shadow-none`}
                         >
                            {/* Metallic Liquid Hover Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.03] dark:via-white/[0.03] to-transparent -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }}></div>
                            </div>
                            
                            <div className="relative z-10 flex items-start gap-6">
                                <div className={`w-12 h-12 rounded-full ${item.color}/10 border border-${item.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`${item.color.replace('bg-', 'text-')} opacity-80`} size={20} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-full">{item.subtitle}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                         </div>
                     </FadeIn>
                 ))}
            </div>
        </div>

        {/* --- RIGHT COLUMN: THE LIQUID MERCURY VISUAL --- */}
        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center perspective-1000">
             
             {/* 
                THE LIQUID MERCURY DROPS
                Concept: Three separate blobs that look like dark liquid metal (Chrome/Steel).
                They morph and float but don't merge.
             */}

             {/* BLOB 1: DATA (Top Left) */}
             <FadeIn delay={200} className="absolute top-[10%] sm:top-[15%] left-[5%] sm:left-[10%]">
                 <div className={`relative w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 transition-transform duration-1000 ease-in-out ${hoveredIndex === 0 ? 'scale-110' : 'scale-100 opacity-60'}`}>
                     {/* The Liquid Metal Surface */}
                     <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 dark:from-[#444] dark:via-[#111] dark:to-black shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),inset_5px_5px_15px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_-10px_-10px_20px_black,inset_5px_5px_15px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.8)] animate-morph overflow-hidden">
                        {/* Specular Highlight (The "Wet" Look) */}
                        <div className="absolute top-[15%] left-[20%] w-16 h-8 bg-white/60 dark:bg-white/30 blur-md rounded-full transform -rotate-45"></div>
                        {/* Colored Reflection (Pink) */}
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent-pink/30 to-transparent mix-blend-overlay opacity-50"></div>
                     </div>
                     {/* Label */}
                     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 tracking-widest uppercase">Data Silo</div>
                 </div>
             </FadeIn>

             {/* BLOB 2: LOGIC (Right Center) */}
             <FadeIn delay={300} className="absolute top-[35%] sm:top-[40%] right-[5%]">
                 <div className={`relative w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 transition-transform duration-1000 ease-in-out ${hoveredIndex === 1 ? 'scale-110' : 'scale-100 opacity-60'}`}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-500 dark:from-[#444] dark:via-[#111] dark:to-black shadow-[inset_-10px_10px_20px_rgba(0,0,0,0.2),inset_10px_-5px_15px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_-10px_10px_20px_black,inset_10px_-5px_15px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.8)] animate-morph overflow-hidden" style={{ animationDelay: '-2s', animationDuration: '10s' }}>
                        <div className="absolute top-[20%] right-[20%] w-20 h-10 bg-white/60 dark:bg-white/30 blur-md rounded-full transform rotate-12"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-accent-purple/30 to-transparent mix-blend-overlay opacity-50"></div>
                     </div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 tracking-widest uppercase">Logic Silo</div>
                 </div>
             </FadeIn>

             {/* BLOB 3: UI (Bottom Left) */}
             <FadeIn delay={400} className="absolute bottom-[10%] left-[15%] sm:left-[20%]">
                 <div className={`relative w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 transition-transform duration-1000 ease-in-out ${hoveredIndex === 2 ? 'scale-110' : 'scale-100 opacity-60'}`}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-200 via-gray-400 to-gray-500 dark:from-[#444] dark:via-[#111] dark:to-black shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2),inset_0_10px_15px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-10px_20px_black,inset_0_10px_15px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.8)] animate-morph overflow-hidden" style={{ animationDelay: '-5s', animationDuration: '9s' }}>
                        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-12 h-6 bg-white/60 dark:bg-white/30 blur-md rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-accent-orange/30 to-transparent mix-blend-overlay opacity-50"></div>
                     </div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 tracking-widest uppercase">UI Silo</div>
                 </div>
             </FadeIn>

             {/* Repulsion Lines (The visual of them NOT connecting) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                 <line x1="30%" y1="30%" x2="70%" y2="50%" stroke="currentColor" className="text-gray-400 dark:text-white animate-pulse" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="70%" y1="50%" x2="40%" y2="80%" stroke="currentColor" className="text-gray-400 dark:text-white animate-pulse" strokeWidth="1" strokeDasharray="4 4" style={{ animationDelay: '1s' }} />
                 <line x1="40%" y1="80%" x2="30%" y2="30%" stroke="currentColor" className="text-gray-400 dark:text-white animate-pulse" strokeWidth="1" strokeDasharray="4 4" style={{ animationDelay: '0.5s' }} />
             </svg>
             
             {/* Background "Noise" of particles */}
             <div className="absolute inset-0 pointer-events-none">
                 {[...Array(5)].map((_, i) => (
                     <div key={i} className="absolute w-1 h-1 bg-gray-400 dark:bg-white/20 rounded-full animate-float-slow" style={{ 
                         top: `${Math.random() * 80 + 10}%`, 
                         left: `${Math.random() * 80 + 10}%`,
                         animationDelay: `${i}s`,
                         animationDuration: `${5 + Math.random() * 5}s`
                     }}></div>
                 ))}
             </div>

        </div>
      </div>
    </Section>
  );
};