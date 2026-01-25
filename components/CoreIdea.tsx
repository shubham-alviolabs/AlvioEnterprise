import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { Database, FileText, Globe, Cpu, Search, Layout, MessageSquare, Zap, Network } from 'lucide-react';

export const CoreIdea: React.FC = () => {
  const [hovered, setHovered] = useState<{ side: 'left' | 'right', index: number, color: string } | null>(null);

  const inputs = [
    { label: "Connectors", icon: Network, desc: "SaaS & DBs" },
    { label: "Unstructured", icon: FileText, desc: "Docs & PDFs" },
    { label: "Real-time API", icon: Globe, desc: "Live Streams" },
    { label: "Knowledge", icon: Database, desc: "Vectors" },
  ];

  const outputs = [
    { label: "Enterprise Search", sub: "Neural Index", icon: Search, color: "text-accent-pink", border: "border-accent-pink/50", shadow: "shadow-accent-pink/20", bg: "bg-accent-pink/10" },
    { label: "Web Apps", sub: "Generative UI", icon: Layout, color: "text-accent-orange", border: "border-accent-orange/50", shadow: "shadow-accent-orange/20", bg: "bg-accent-orange/10" },
    { label: "Workflow Agents", sub: "Auto-Execution", icon: Zap, color: "text-accent-purple", border: "border-accent-purple/50", shadow: "shadow-accent-purple/20", bg: "bg-accent-purple/10" },
    { label: "Assistants", sub: "Personal AI", icon: MessageSquare, color: "text-blue-500", border: "border-blue-500/50", shadow: "shadow-blue-500/20", bg: "bg-blue-500/10" },
  ];

  return (
    <Section id="engine" className="bg-white dark:bg-black relative overflow-hidden py-32 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
       {/* Ambient Background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_70%)] pointer-events-none"></div>
       
       <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
             <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <Cpu size={12} className="text-gray-900 dark:text-white" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white">The Central Nervous System</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">
                  The Alvio <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-600 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500">Engine.</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                   Raw data flows in. Intelligence flows out. <br/>
                   One core to power your search, apps, and agents.
                </p>
             </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0 relative">
             
             {/* LEFT: INPUTS (Raw Data) */}
             <div className="flex flex-col gap-6 relative z-20 px-4">
                {inputs.map((item, i) => (
                    <FadeIn key={i} delay={i * 100}>
                       <div 
                          onMouseEnter={() => setHovered({ side: 'left', index: i, color: 'text-gray-900 dark:text-white' })}
                          onMouseLeave={() => setHovered(null)}
                          className={`group relative flex items-center justify-between p-4 rounded-xl border transition-all duration-500 cursor-default backdrop-blur-md overflow-hidden ${
                             hovered?.side === 'left' && hovered.index === i 
                             ? 'bg-black/5 dark:bg-white/10 border-black/20 dark:border-white/40 translate-x-4' 
                             : 'bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 shadow-sm dark:shadow-none'
                          }`}
                       >
                           {/* Highlight Glint */}
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

                           <div className="flex items-center gap-4 relative z-10">
                              <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                  <item.icon size={18} />
                              </div>
                              <div>
                                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">{item.label}</div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-wide uppercase">{item.desc}</div>
                              </div>
                           </div>
                           
                           {/* Connection Dot */}
                           <div className={`w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300 ${hovered?.side === 'left' && hovered.index === i ? 'bg-black dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_10px_white] scale-150' : ''}`}></div>
                       </div>
                    </FadeIn>
                ))}
             </div>

             {/* CENTER: THE ENGINE (Liquid Mercury) */}
             <div className="relative h-[500px] flex items-center justify-center z-10 perspective-1000">
                
                <FadeIn delay={200} className="relative w-full h-full flex items-center justify-center">
                    
                    {/* Orbital Rings */}
                    <div className="absolute w-[400px] h-[400px] border border-black/5 dark:border-white/5 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-[300px] h-[300px] border border-black/5 dark:border-white/5 rounded-full animate-spin-reverse-slow opacity-50"></div>
                    
                    {/* THE LIQUID CORE */}
                    <div className={`relative w-64 h-64 transition-transform duration-700 ease-out ${hovered ? 'scale-110' : 'scale-100'}`}>
                        
                        {/* Base Dark Metal */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 dark:from-[#333] dark:via-[#000] dark:to-[#111] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.1),0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[inset_-20px_-20px_50px_rgba(0,0,0,1),0_0_50px_rgba(255,255,255,0.05)] animate-morph z-10"></div>
                        
                        {/* Liquid Chrome Reflection */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 dark:via-white/20 to-transparent opacity-50 mix-blend-overlay animate-morph z-20" style={{ animationDelay: '-3s' }}></div>

                        {/* Interactive Color Glow (Changes based on hover) */}
                        <div className={`absolute inset-4 rounded-full blur-2xl transition-all duration-500 z-30 opacity-60 mix-blend-screen animate-pulse
                            ${hovered?.color.includes('pink') ? 'bg-accent-pink' : 
                              hovered?.color.includes('purple') ? 'bg-accent-purple' : 
                              hovered?.color.includes('orange') ? 'bg-accent-orange' : 
                              hovered?.color.includes('blue') ? 'bg-blue-500' : 'bg-black/5 dark:bg-white/10'
                            }
                        `}></div>

                        {/* Core Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
                             <div className="text-4xl font-bold text-black/10 dark:text-white/10 tracking-tighter">ALVIO</div>
                             <div className="text-[10px] font-mono text-black/20 dark:text-white/20 tracking-[0.3em] uppercase mt-1">Engine</div>
                        </div>

                    </div>
                </FadeIn>
             </div>

             {/* RIGHT: OUTPUTS (Products) */}
             <div className="flex flex-col gap-6 relative z-20 px-4">
                {outputs.map((item, i) => (
                    <FadeIn key={i} delay={400 + i * 100}>
                       <div 
                          onMouseEnter={() => setHovered({ side: 'right', index: i, color: item.color })}
                          onMouseLeave={() => setHovered(null)}
                          className={`group relative flex items-center justify-between p-4 rounded-xl border transition-all duration-500 cursor-default backdrop-blur-md overflow-hidden ${
                             hovered?.side === 'right' && hovered.index === i 
                             ? `${item.bg} ${item.border} -translate-x-4` 
                             : 'bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 shadow-sm dark:shadow-none'
                          }`}
                       >
                           {/* Highlight Glint */}
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

                           {/* Connection Dot (Left side for output) */}
                           <div className={`w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300 ${hovered?.side === 'right' && hovered.index === i ? `${item.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor] scale-150` : ''}`}></div>

                           <div className="flex items-center gap-4 relative z-10 text-right flex-row-reverse w-full">
                              <div className={`p-2.5 rounded-lg bg-gray-100 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 transition-colors ${hovered?.side === 'right' && hovered.index === i ? item.color : 'text-gray-500 dark:text-gray-400'}`}>
                                  <item.icon size={18} />
                              </div>
                              <div>
                                  <div className={`text-sm font-semibold transition-colors ${hovered?.side === 'right' && hovered.index === i ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>{item.label}</div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-wide uppercase">{item.sub}</div>
                              </div>
                           </div>
                           
                       </div>
                    </FadeIn>
                ))}
             </div>

             {/* Dynamic Beams (CSS) */}
             {hovered && (
                 <>
                    {/* Left to Center Beam */}
                    {hovered.side === 'left' && (
                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[30%] h-[2px] bg-gradient-to-r from-black dark:from-white to-transparent opacity-50 pointer-events-none blur-[1px]"></div>
                    )}
                    {/* Center to Right Beam */}
                     {hovered.side === 'right' && (
                        <div className={`absolute right-[20%] top-1/2 -translate-y-1/2 w-[30%] h-[2px] bg-gradient-to-l from-current to-transparent opacity-50 pointer-events-none blur-[1px] ${outputs[hovered.index].color}`}></div>
                    )}
                 </>
             )}

          </div>
       </div>
    </Section>
  );
};