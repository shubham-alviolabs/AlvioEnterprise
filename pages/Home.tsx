import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { Hero } from '../components/Hero';
import { Search, Database, Lock, Layout, Zap, Bot, MessageSquare, ArrowRight, Layers, FileText, Share2, Globe, Command } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />

      {/* 1. ENTERPRISE SEARCH (Pink Theme) */}
      <section id="solutions-enterprise" className="py-32 px-6 border-b border-white/5 relative overflow-hidden">
        {/* Pink Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <FadeIn>
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-accent-pink/30 bg-accent-pink/10 text-xs font-mono uppercase tracking-widest text-accent-pink">
                        01. The Foundation
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                        Enterprise Search
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                        The single source of truth. Alvio connects to every corner of your company—Slack, Drive, Jira, Notion—creating a unified neural index.
                    </p>
                    <div className="flex flex-col gap-4 mb-8">
                         <div className="flex items-center gap-4 text-gray-300">
                            <Database size={20} className="text-accent-pink" /> <span>Connectors for 50+ Enterprise Apps</span>
                         </div>
                         <div className="flex items-center gap-4 text-gray-300">
                            <Lock size={20} className="text-accent-pink" /> <span>Permission-Aware (SOC2 Compliant)</span>
                         </div>
                    </div>
                    <Link to="/enterprise">
                        <Button variant="secondary" className="group border-accent-pink/20 hover:border-accent-pink/50">
                            Explore Search <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform text-accent-pink"/>
                        </Button>
                    </Link>
                </FadeIn>

                <FadeIn delay={200} className="relative">
                    {/* Abstract Search Interface Visualization */}
                    <div className="glass-card rounded-2xl p-8 aspect-[4/3] flex flex-col justify-center relative overflow-hidden shadow-[0_0_50px_rgba(255,0,128,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                        
                        {/* Search Bar */}
                        <div className="relative z-10 w-full bg-[#150510] border border-accent-pink/30 rounded-xl p-4 flex items-center gap-4 shadow-2xl mb-12">
                            <Search className="text-accent-pink w-5 h-5" />
                            <div className="h-4 bg-white/10 rounded w-1/3 animate-pulse"></div>
                        </div>

                        {/* Floating Sources */}
                        <div className="relative z-10 flex justify-center gap-6">
                            {[<FileText/>, <Share2/>, <Layers/>, <Globe/>].map((icon, i) => (
                                <div key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 animate-float hover:text-accent-pink hover:border-accent-pink/50 transition-colors" style={{ animationDelay: `${i * 0.2}s` }}>
                                    {icon}
                                </div>
                            ))}
                        </div>
                        
                        {/* Connecting beams */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                             <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-accent-pink/50 to-transparent"></div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* 2. ALVIO APPS (Orange Theme) */}
      <section id="apps" className="py-32 px-6 border-b border-white/5 bg-[#050505] relative">
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
                <div className="text-center mb-20">
                     <div className="inline-block px-3 py-1 mb-6 rounded-full border border-accent-orange/30 bg-accent-orange/10 text-xs font-mono uppercase tracking-widest text-accent-orange">
                        02. The Interface
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">Alvio Apps</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Don't just search data. Build on it. Generate internal tools, dashboards, and portals instantly.
                    </p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Bento Grid Layout */}
                <FadeIn delay={100} className="md:col-span-2 glass-card rounded-3xl p-8 min-h-[300px] flex flex-col relative overflow-hidden group hover:border-accent-orange/30 transition-colors">
                     <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                        <Layout className="w-12 h-12 text-accent-orange" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Internal Tools</h3>
                     <p className="text-gray-400 mb-8 max-w-sm">Create admin panels and approval queues connected to your DBs.</p>
                     {/* Mini UI Mockup */}
                     <div className="mt-auto bg-[#1a0a05] border border-accent-orange/20 rounded-t-xl h-32 w-full p-4 grid grid-cols-3 gap-4 shadow-inner">
                        <div className="bg-accent-orange/20 h-full rounded border border-accent-orange/10"></div>
                        <div className="bg-white/5 h-full rounded col-span-2 border border-white/5"></div>
                     </div>
                </FadeIn>

                <FadeIn delay={200} className="glass-card rounded-3xl p-8 min-h-[300px] flex flex-col justify-between group hover:border-accent-orange/30 transition-colors">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Customer Portals</h3>
                        <p className="text-gray-400 text-sm">Secure external views for your clients.</p>
                    </div>
                    <div className="flex justify-end">
                        <Globe className="w-12 h-12 text-gray-600 group-hover:text-accent-orange transition-colors" />
                    </div>
                </FadeIn>
            </div>
            
            <div className="flex justify-center mt-12">
                 <Link to="/enterprise">
                    <Button variant="primary">Start Building Apps</Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 3. ENTERPRISE AGENTS (Purple Theme) */}
      <section id="agents" className="py-32 px-6 border-b border-white/5 relative">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <FadeIn className="order-2 lg:order-1 relative">
                    {/* Visual Logic Builder Mockup */}
                    <div className="glass-card rounded-2xl p-1 aspect-square md:aspect-video flex items-center justify-center bg-grid-white/[0.02] shadow-[0_0_50px_rgba(121,40,202,0.1)]">
                        <div className="relative w-full h-full p-8">
                             {/* Node 1 */}
                             <div className="absolute top-10 left-10 w-40 p-3 bg-[#150A1F] border border-accent-purple text-white rounded-lg shadow-[0_0_15px_rgba(121,40,202,0.4)] font-bold text-xs flex items-center gap-2">
                                <Zap size={12} className="text-accent-purple"/> New Lead
                             </div>
                             {/* Node 2 */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 p-3 bg-black border border-white/20 text-white rounded-lg shadow-lg font-bold text-xs flex items-center gap-2">
                                <Bot size={12}/> AI Research
                             </div>
                             {/* Node 3 */}
                             <div className="absolute bottom-10 right-10 w-40 p-3 bg-black border border-white/20 text-gray-300 rounded-lg shadow-lg font-bold text-xs flex items-center gap-2">
                                <Share2 size={12}/> Slack Ping
                             </div>
                             
                             {/* Lines */}
                             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <path d="M 90 60 L 50% 50%" stroke="#7928CA" strokeWidth="2" strokeDasharray="4"/>
                                <path d="M 50% 50% L 80% 80%" stroke="#555" strokeWidth="2"/>
                             </svg>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={200} className="order-1 lg:order-2">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs font-mono uppercase tracking-widest text-accent-purple">
                        03. The Automation
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                        Enterprise Agents
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Logic, visualized. Build autonomous workers that trigger off events, reason through data, and execute actions without human input.
                    </p>
                    <Link to="/agents">
                        <Button variant="secondary" className="group hover:border-accent-purple/50">
                            View Agent Builder <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform text-accent-purple"/>
                        </Button>
                    </Link>
                </FadeIn>
            </div>
         </div>
      </section>

      {/* 4. ALVIO CHAT (Gradient Theme) */}
      <section className="py-40 px-6 bg-gradient-to-b from-black to-[#0A0A0A] relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-gradient opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    <MessageSquare className="text-black w-8 h-8" />
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Alvio Chat
                </h2>
                <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    The interface that brings it all together. Chat with your data, your apps, and your agents in one stream.
                </p>
                
                {/* Chat Mockup - Minimalist */}
                <div className="max-w-2xl mx-auto glass-card rounded-2xl p-4 border border-white/10 text-left">
                    <div className="flex gap-4 mb-6">
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex-shrink-0"></div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 text-gray-300 text-sm">
                            Summarize the Q3 roadmap and tell the Marketing Agent to draft a launch post.
                        </div>
                    </div>
                     <div className="flex gap-4 flex-row-reverse">
                        <div className="w-8 h-8 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                            <Command size={14} className="text-black"/>
                        </div>
                        <div className="space-y-2 w-full max-w-lg">
                            <div className="bg-white text-black rounded-2xl rounded-tr-none p-4 text-sm shadow-lg">
                                Done. I've analyzed 4 documents from Notion. Here is the summary...
                            </div>
                            <div className="flex gap-2">
                                <span className="text-[10px] uppercase border border-accent-purple/40 text-accent-purple px-2 py-1 rounded bg-accent-purple/5">Agent Active</span>
                                <span className="text-[10px] uppercase border border-white/20 px-2 py-1 rounded text-gray-500">Drafting Post...</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12">
                     <Button variant="primary" size="lg" onClick={() => window.location.href='https://alvio.io/auth'}>
                        Open Chat
                     </Button>
                </div>
            </FadeIn>
         </div>
      </section>

    </div>
  );
};