import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { 
  Search, Layout, Zap, MessageSquare, 
  ArrowRight, ShieldCheck, MoreHorizontal, Paperclip
} from 'lucide-react';

// --- LOGO ASSETS (Reused for realism) ---
const logos = {
  salesforce: <svg viewBox="0 0 24 24" className="w-full h-full fill-[#00A1E0]"><path d="M16.4 13.9c0.4 0 0.8-0.1 1.2-0.2 0.3-0.8 0.5-1.7 0.5-2.6 0-3.6-2.5-6.6-5.9-7.5 -0.6-2.2-2.7-3.8-5.1-3.8 -2.4 0-4.5 1.5-5.3 3.7C1.3 4.2 0.8 5.4 0.8 6.7c0 0.4 0 0.7 0.1 1.1C0.4 8 0.1 8.3 0.1 8.7c0 0.7 0.6 1.3 1.3 1.3 0.1 0 0.2 0 0.2 0 0 3 2.5 5.5 5.5 5.5 1.7 0 3.3-0.8 4.3-2.1 0.7 0.8 1.8 1.4 2.9 1.4 1.3 0 2.5-0.6 3.3-1.6 0.6 0.5 1.3 0.7 2.1 0.7 1.8 0 3.3-1.5 3.3-3.3S21.6 7.3 19.8 7.3c-0.3 0-0.7 0.1-1 0.2C18.6 5.2 16.6 3.6 14.3 3.6c-0.2 0-0.4 0-0.6 0 0-0.1 0-0.1 0-0.2 0-1.8-1.5-3.3-3.3-3.3 -1.8 0-3.3 1.5-3.3 3.3 0 0.1 0 0.1 0 0.2 -0.2 0-0.4 0-0.6 0 -2.3 0-4.3 1.6-4.9 3.8 -0.3-0.1-0.7-0.2-1-0.2 -1.8 0-3.3 1.5-3.3 3.3 0 0.2 0 0.4 0.1 0.6C1.1 11.2 1 11.4 1 11.6c0 0.5 0.4 0.9 0.9 0.9 0.1 0 0.2 0 0.3-0.1 0.3 2.1 2.1 3.7 4.3 3.7 1.2 0 2.3-0.5 3.1-1.3 0.7 1.3 2 2.1 3.5 2.1 0.8 0 1.5-0.2 2.2-0.6 0.6 0.9 1.6 1.4 2.7 1.4 1.8 0 3.3-1.5 3.3-3.3S19.7 11.1 17.9 11.1c-0.6 0-1.1 0.2-1.6 0.5 -0.4-1.2-1.5-2.1-2.9-2.1 -0.9 0-1.6 0.4-2.2 1 -0.5-1.4-1.9-2.4-3.4-2.4 -1.4 0-2.6 0.8-3.2 2 -0.2-0.1-0.5-0.1-0.7-0.1 -1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c0.2 0 0.5-0.1 0.7-0.1 0.6 1.2 1.8 2 3.2 2 1.5 0 2.9-1 3.4-2.4 0.5 0.6 1.3 1 2.2 1 1.3 0 2.5-0.9 2.9-2.1 0.4 0.3 1 0.5 1.6 0.5 1.5 0 2.7-1.2 2.7-2.7S17.9 13.9 16.4 13.9z"/></svg>,
  slack: <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#E01E5A" d="M5.4 16.4c0 1.5-1.2 2.7-2.7 2.7S0 17.9 0 16.4s1.2-2.7 2.7-2.7h2.7V16.4z"/><path fill="#36C5F0" d="M6.8 16.4c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v6.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V16.4z"/><path fill="#2EB67D" d="M9.5 5.4C9.5 3.9 10.7 2.7 12.2 2.7s2.7 1.2 2.7 2.7v2.7H9.5V5.4z"/><path fill="#ECB22E" d="M9.5 6.8c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H2.7C1.2 12.2 0 11 0 9.5s1.2-2.7 2.7-2.7H9.5z"/><path fill="#E01E5A" d="M16.4 19.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7v-2.7h5.4V19.1z"/><path fill="#36C5F0" d="M16.4 17.7c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h6.8c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H16.4z"/><path fill="#2EB67D" d="M22.1 8.2c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7 -1.2 2.7-2.7 2.7h-2.7V8.2z"/><path fill="#ECB22E" d="M20.7 8.2c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V1.4c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V8.2z"/></svg>,
  jira: <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0052CC]"><path d="M11.5 0C11.5 0 11.5 0 11.5 0 11.5 0L11.5 8.1 5.7 13.9 0 8.1 5.7 2.4C7.3 0.8 9.9 0 11.5 0zM11.5 11.3L11.5 19.4 17.2 13.7 11.5 8 11.5 11.3zM13.2 0L13.2 8.1 19 13.9 24.7 8.1 19 2.4C17.4 0.8 14.8 0 13.2 0z"/></svg>,
  drive: <svg viewBox="0 0 24 24" className="w-full h-full fill-[#1FA463]"><path d="M7.9 0L2.6 9.2l5.3 9.2 13.4-9.2L15.8 0H7.9z M14.8 12L20.1 2.8 25.3 12 14.8 12z M14.2 13.3l-5.3 9.2h10.5l5.3-9.2H14.2z" transform="scale(0.9) translate(1,1)"/></svg>,
  notion: <svg viewBox="0 0 24 24" className="w-full h-full fill-white"><path d="M4.6 3.4l11.6 13.8V3.4h2.5v17.2h-2.1L4.9 6.8v13.8H2.4V3.4H4.6z M1.6 1.8h17.8v0.8H1.6V1.8z"/></svg>,
  hubspot: <svg viewBox="0 0 24 24" className="w-full h-full fill-[#FF7A59]"><path d="M18.8 12.8c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1zM5.2 12.8c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1S2.1 15.9 2.1 14.2s1.4-3.1 3.1-3.1zm6.8-5.7c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1zm0-7.1v5h2.1v2.1H12v6c0 1 .6 1.6 1.7 1.6.4 0 .7 0 1.1-.1v2c-2.2.3-4.9-.7-4.9-3.4v-6H7.8V12.1h2.1V0h2.1z"/></svg>,
};

export const Enterprise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'apps' | 'agents' | 'assistants'>('search');

  const tabs = [
    { id: 'search', label: 'Enterprise Search', icon: Search, color: 'text-accent-pink', bg: 'bg-accent-pink', border: 'border-accent-pink' },
    { id: 'apps', label: 'Alvio Apps', icon: Layout, color: 'text-accent-orange', bg: 'bg-accent-orange', border: 'border-accent-orange' },
    { id: 'agents', label: 'Workflow Agents', icon: Zap, color: 'text-accent-purple', bg: 'bg-accent-purple', border: 'border-accent-purple' },
    { id: 'assistants', label: 'Custom Assistants', icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500' },
  ];

  return (
    <Section id="solutions-enterprise" className="bg-gray-50 dark:bg-black relative z-10 overflow-hidden py-32 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Ambience based on Tab */}
      <div className="absolute inset-0 transition-colors duration-1000 bg-gray-50 dark:bg-black">
          <div className={`absolute top-[-20%] right-[-10%] w-[800px] h-[800px] blur-[150px] rounded-full transition-opacity duration-1000 pointer-events-none ${activeTab === 'search' ? 'bg-accent-pink/5 dark:bg-accent-pink/10 opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute top-[20%] left-[-10%] w-[800px] h-[800px] blur-[150px] rounded-full transition-opacity duration-1000 pointer-events-none ${activeTab === 'apps' ? 'bg-accent-orange/5 dark:bg-accent-orange/10 opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-[-20%] right-[10%] w-[800px] h-[800px] blur-[150px] rounded-full transition-opacity duration-1000 pointer-events-none ${activeTab === 'agents' ? 'bg-accent-purple/5 dark:bg-accent-purple/10 opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute top-[10%] left-[20%] w-[800px] h-[800px] blur-[150px] rounded-full transition-opacity duration-1000 pointer-events-none ${activeTab === 'assistants' ? 'bg-blue-500/5 dark:bg-blue-500/10 opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md mb-6">
                    <ShieldCheck size={12} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">Enterprise OS • SOC2 Type II</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">
                    One OS. <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-600 to-gray-400 dark:from-white dark:via-gray-400 dark:to-gray-600">Four Engines.</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                    Fluid intelligence that adapts to your organization's shape.
                </p>
            </div>
        </FadeIn>

        {/* Liquid Tabs Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-24 px-2">
            <div className="grid grid-cols-2 sm:flex gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] backdrop-blur-xl shadow-sm dark:shadow-none w-full sm:w-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`group relative px-3 sm:px-4 lg:px-6 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs lg:text-sm font-medium transition-all duration-500 overflow-hidden flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                            activeTab === tab.id
                            ? 'text-black dark:text-white shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                        }`}
                    >
                        {activeTab === tab.id && (
                             <div className={`absolute inset-0 opacity-10 dark:opacity-20 ${tab.bg}`}></div>
                        )}
                        {activeTab === tab.id && (
                             <div className={`absolute inset-0 rounded-xl sm:rounded-full border ${tab.border} opacity-20 dark:opacity-50`}></div>
                        )}

                        <tab.icon size={14} className={`relative z-10 flex-shrink-0 ${activeTab === tab.id ? tab.color : 'group-hover:text-black dark:group-hover:text-white transition-colors'}`} />
                        <span className="relative z-10 truncate">{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px] relative">
            
            {/* --- TAB 1: SEARCH (Real Interface Mockup) --- */}
            {activeTab === 'search' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
                            The Neural Index. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-pink-600 dark:to-white">Total Recall.</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                            Alvio connects to Salesforce, Jira, Slack, Drive, and 180+ other enterprise tools. 
                            It ingests unstructured data and creates a secure, permission-aware neural index.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Native integrations for SaaS & SQL databases",
                                "Real-time permission inheritance (RBAC/ACL)",
                                "Vector + Keyword hybrid search"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-pink shadow-[0_0_5px_#FF0080]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                         <button className="group flex items-center gap-2 text-gray-900 dark:text-white border-b border-black/10 dark:border-white/20 pb-1 hover:border-accent-pink transition-colors">
                            <span>Explore Integrations</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* VISUAL: Realistic Spotlight Search UI - Kept Dark for visual pop */}
                    <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[500px] w-full perspective-1000 group">
                         <div className="absolute inset-0 bg-[#0A0A0A] rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col">
                              {/* Top Bar - Spotlight Search */}
                              <div className="p-6 border-b border-white/5 bg-[#111]">
                                  <div className="flex items-center gap-4 bg-black border border-accent-pink/50 rounded-lg px-4 py-3 shadow-[0_0_15px_rgba(255,0,128,0.1)]">
                                      <Search className="text-accent-pink w-5 h-5" />
                                      <span className="text-white text-sm font-medium">Q3 Project Titan contracts {'>'} $50k</span>
                                      <span className="ml-auto text-xs text-gray-600 border border-gray-800 rounded px-1.5">ESC</span>
                                  </div>
                              </div>
                              
                              {/* Search Results */}
                              <div className="flex-1 p-4 space-y-2 overflow-hidden relative">
                                  {/* Result 1: PDF */}
                                  <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/item">
                                      <div className="w-8 h-8 rounded bg-[#1FA463]/10 flex items-center justify-center p-1.5">{logos.drive}</div>
                                      <div className="flex-1">
                                          <div className="flex items-center justify-between">
                                              <span className="text-sm font-medium text-gray-200 group-hover/item:text-white">Master Services Agreement - Titan.pdf</span>
                                              <span className="text-[10px] text-gray-500">Updated 2h ago</span>
                                          </div>
                                          <div className="text-xs text-gray-500 flex gap-2 mt-1">
                                              <span className="bg-gray-800 px-1.5 rounded text-[10px]">Legal</span>
                                              <span className="bg-gray-800 px-1.5 rounded text-[10px] text-accent-pink">Matched Content</span>
                                          </div>
                                      </div>
                                  </div>

                                  {/* Result 2: Slack Thread */}
                                  <div className="flex items-center gap-4 p-3 rounded-lg bg-transparent hover:bg-white/5 transition-colors cursor-pointer group/item">
                                      <div className="w-8 h-8 rounded bg-[#E01E5A]/10 flex items-center justify-center p-1.5">{logos.slack}</div>
                                      <div className="flex-1">
                                          <div className="flex items-center justify-between">
                                              <span className="text-sm font-medium text-gray-300 group-hover/item:text-white">#proj-titan-finance</span>
                                              <span className="text-[10px] text-gray-500">Yesterday</span>
                                          </div>
                                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                              <span className="text-gray-300 font-bold">@sarah</span>: We need to review the $50k cap on the new vendor contract...
                                          </p>
                                      </div>
                                  </div>

                                  {/* Result 3: Jira Ticket */}
                                  <div className="flex items-center gap-4 p-3 rounded-lg bg-transparent hover:bg-white/5 transition-colors cursor-pointer group/item">
                                      <div className="w-8 h-8 rounded bg-[#0052CC]/10 flex items-center justify-center p-1.5">{logos.jira}</div>
                                      <div className="flex-1">
                                           <div className="flex items-center justify-between">
                                              <span className="text-sm font-medium text-gray-300 group-hover/item:text-white">TITAN-429: Contract Approval</span>
                                              <span className="text-[10px] text-blue-400 bg-blue-900/20 px-1.5 rounded border border-blue-900/50">In Progress</span>
                                          </div>
                                          <p className="text-xs text-gray-500 mt-1">Assigned to: Legal Team</p>
                                      </div>
                                  </div>
                                  
                                  {/* Gradient Fade at bottom */}
                                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
                              </div>

                              {/* Footer Status */}
                              <div className="p-3 bg-[#111] border-t border-white/5 flex items-center gap-4 text-xs text-gray-500">
                                  <span>48 Results found</span>
                                  <div className="h-3 w-px bg-gray-700"></div>
                                  <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-green-500"/> Permission Check Passed</span>
                              </div>
                         </div>
                    </div>
                </div>
            )}

            {/* --- TAB 2: APPS (Dashboard Mockup) --- */}
             {activeTab === 'apps' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
                            "Lovable" for Enterprise. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-600 dark:to-white">Generative Dashboards.</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                            Build beautiful, functional apps instantly just by describing them. Alvio Apps 
                            connect directly to live enterprise data (Salesforce, Stripe, SQL) and are powered by AI.
                        </p>
                         <ul className="space-y-4 mb-10">
                            {[
                                "Prompt-to-App: Generate React interfaces from text",
                                "Live Data Binding: Connects to SQL/NoSQL instantly",
                                "Not just dashboards: Full CRUD interactive tools"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_5px_#FF6B00]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                         <button className="group flex items-center gap-2 text-gray-900 dark:text-white border-b border-black/10 dark:border-white/20 pb-1 hover:border-accent-orange transition-colors">
                            <span>Build an App</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                     {/* VISUAL: Realistic Dashboard Mockup - Dark UI */}
                     <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[500px] perspective-1000 group">
                        <div className="absolute inset-0 bg-[#0F0F0F] rounded-xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col">
                             {/* App Header */}
                             <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-[#141414]">
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded bg-gradient-to-br from-accent-orange to-red-500 flex items-center justify-center text-white font-bold text-xs">RC</div>
                                     <span className="font-medium text-white text-sm">Revenue Commander</span>
                                 </div>
                                 <div className="flex gap-2">
                                     <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                                 </div>
                             </div>
                             
                             <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                                 {/* Metrics Row */}
                                 <div className="grid grid-cols-3 gap-4">
                                     <div className="bg-[#1A1A1A] p-4 rounded-lg border border-white/5">
                                         <div className="text-xs text-gray-500 mb-1">Total Pipeline</div>
                                         <div className="text-xl font-bold text-white">$4.2M</div>
                                         <div className="text-[10px] text-green-500 flex items-center gap-1 mt-1">▲ 12% vs last month</div>
                                     </div>
                                     <div className="bg-[#1A1A1A] p-4 rounded-lg border border-white/5">
                                         <div className="text-xs text-gray-500 mb-1">Win Rate</div>
                                         <div className="text-xl font-bold text-white">32%</div>
                                     </div>
                                     <div className="bg-[#1A1A1A] p-4 rounded-lg border border-white/5 flex items-center justify-center">
                                          <div className="text-center">
                                              <div className="text-xs text-gray-500 mb-1">Source</div>
                                              <div className="w-6 h-6 mx-auto opacity-80">{logos.salesforce}</div>
                                          </div>
                                     </div>
                                 </div>

                                 {/* Main Chart Area */}
                                 <div className="bg-[#1A1A1A] p-4 rounded-lg border border-white/5 h-40 relative overflow-hidden">
                                      <div className="flex justify-between items-center mb-4">
                                          <span className="text-xs font-medium text-gray-400">Revenue Forecast (Q3)</span>
                                          <MoreHorizontal size={14} className="text-gray-600" />
                                      </div>
                                      {/* CSS Chart */}
                                      <div className="flex items-end gap-2 h-24 w-full px-2">
                                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                              <div key={i} className="flex-1 bg-accent-orange/20 hover:bg-accent-orange/50 transition-colors rounded-t-sm relative group/bar" style={{ height: `${h}%` }}>
                                                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-[9px] px-1 rounded text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">${h}k</div>
                                              </div>
                                          ))}
                                      </div>
                                 </div>

                                 {/* Data Table */}
                                 <div className="bg-[#1A1A1A] rounded-lg border border-white/5 overflow-hidden">
                                     <div className="px-4 py-2 border-b border-white/5 text-[10px] text-gray-500 flex justify-between">
                                         <span>Recent Deals</span>
                                         <span>Stage</span>
                                     </div>
                                     <div className="p-2 space-y-1">
                                         {[
                                             { name: "Acme Corp", val: "$120k", stage: "Negotiation", color: "text-blue-400" },
                                             { name: "Stark Ind", val: "$850k", stage: "Closed Won", color: "text-green-500" },
                                         ].map((deal, i) => (
                                             <div key={i} className="flex items-center justify-between px-2 py-2 hover:bg-white/5 rounded">
                                                 <div className="flex items-center gap-2">
                                                     <div className="w-4 h-4 rounded bg-gray-700"></div>
                                                     <span className="text-xs text-gray-300">{deal.name}</span>
                                                 </div>
                                                 <span className="text-[10px] text-blue-400">{deal.stage}</span>
                                             </div>
                                         ))}
                                     </div>
                                 </div>

                                 {/* Prompt Input (The 'Generative' part) */}
                                 <div className="absolute bottom-6 left-6 right-6">
                                     <div className="bg-[#000]/90 backdrop-blur-xl border border-accent-orange/50 rounded-lg p-3 flex items-center gap-3 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                                          <div className="w-2 h-2 bg-accent-orange animate-pulse rounded-full"></div>
                                          <span className="text-xs font-mono text-gray-300">"Add a column for 'Last Contacted' from Gmail..."</span>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- TAB 3: AGENTS (Automation Canvas) --- */}
             {activeTab === 'agents' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
                            Workflow Agents. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-purple-600 dark:to-white">Logic Visualized.</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                            Describe a process, get a workflow. Alvio Agents trigger from real-time events, reason through complex logic, 
                            and execute actions across your stack without human intervention.
                        </p>
                         <ul className="space-y-4 mb-10">
                            {[
                                "Natural Language Triggers: 'When a high-value lead signs up...'",
                                "Human-in-the-loop approval gates",
                                "Self-healing execution paths for error handling"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple shadow-[0_0_5px_#7928CA]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                         <button className="group flex items-center gap-2 text-gray-900 dark:text-white border-b border-black/10 dark:border-white/20 pb-1 hover:border-accent-purple transition-colors">
                            <span>Design Automation</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                     {/* VISUAL: Automation Node Graph - Dark UI */}
                     <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px] perspective-1000 group">
                        <div className="absolute inset-0 bg-[#0B0B0E] rounded-xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                             
                             {/* Background Grid */}
                             <div className="absolute inset-0 bg-[radial-gradient(#1a0b2e_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>

                             {/* Workflow Nodes */}
                             <div className="relative w-full h-full p-8">
                                  
                                  {/* Line Connections (SVG) */}
                                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                      {/* Trigger to Enrich */}
                                      <path d="M 80 80 L 160 150" stroke="#333" strokeWidth="2" />
                                      <path d="M 80 80 L 160 150" stroke="#7928CA" strokeWidth="2" strokeDasharray="4 4" className="animate-[beam-flow_1s_linear_infinite]" />
                                      
                                      {/* Enrich to Router */}
                                      <path d="M 220 150 L 300 150" stroke="#333" strokeWidth="2" />
                                      
                                      {/* Router to Action 1 */}
                                      <path d="M 330 150 C 350 150, 350 80, 420 80" stroke="#333" strokeWidth="2" />
                                      
                                      {/* Router to Action 2 */}
                                      <path d="M 330 150 C 350 150, 350 220, 420 220" stroke="#333" strokeWidth="2" />
                                  </svg>

                                  {/* Node 1: Trigger (HubSpot) */}
                                  <div className="absolute top-[80px] left-[60px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
                                      <div className="w-12 h-12 bg-[#1A1A1A] border border-accent-purple/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(121,40,202,0.2)] p-2.5">
                                          {logos.hubspot}
                                      </div>
                                      <div className="bg-black/50 px-2 py-1 rounded text-[10px] text-gray-300 border border-white/10">New Lead</div>
                                  </div>

                                  {/* Node 2: Enrich (Logic) */}
                                  <div className="absolute top-[150px] left-[190px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
                                      <div className="w-12 h-12 bg-[#1A1A1A] border border-white/20 rounded-xl flex items-center justify-center p-2.5">
                                          <Zap className="text-yellow-400 w-6 h-6" />
                                      </div>
                                      <div className="bg-black/50 px-2 py-1 rounded text-[10px] text-gray-300 border border-white/10">Enrich Data</div>
                                  </div>

                                  {/* Node 3: Router */}
                                  <div className="absolute top-[150px] left-[315px] -translate-x-1/2 -translate-y-1/2 z-10">
                                      <div className="w-8 h-8 bg-gray-800 rounded-full border border-white/20 flex items-center justify-center rotate-45">
                                          <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
                                      </div>
                                  </div>

                                  {/* Node 4: Action (Salesforce) */}
                                  <div className="absolute top-[80px] left-[450px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
                                      <div className="w-12 h-12 bg-[#1A1A1A] border border-blue-400/50 rounded-xl flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                          {logos.salesforce}
                                      </div>
                                      <div className="bg-black/50 px-2 py-1 rounded text-[10px] text-gray-300 border border-white/10">Create Deal</div>
                                  </div>

                                  {/* Node 5: Action (Slack) */}
                                  <div className="absolute top-[220px] left-[450px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
                                      <div className="w-12 h-12 bg-[#1A1A1A] border border-pink-400/50 rounded-xl flex items-center justify-center p-2.5">
                                          {logos.slack}
                                      </div>
                                      <div className="bg-black/50 px-2 py-1 rounded text-[10px] text-gray-300 border border-white/10">Alert Sales</div>
                                  </div>

                                  {/* Status Overlay */}
                                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur border border-green-900/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 shadow-lg">
                                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                      Agent Active
                                  </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}

             {/* --- TAB 4: ASSISTANTS (Chat & Citation) --- */}
             {activeTab === 'assistants' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
                            Custom Assistants. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 dark:to-white">Expert at Every Role.</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                            Deploy custom chat assistants for every department. Trained on your specific knowledge base, 
                            adhering to your brand voice, and secure by design.
                        </p>
                         <ul className="space-y-4 mb-10">
                            {[
                                "HR Bot: Answers policy questions from Handbook",
                                "Engineering Bot: Searches codebase & docs",
                                "Sales Bot: Preps meeting briefs from CRM data"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3B82F6]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                         <button className="group flex items-center gap-2 text-gray-900 dark:text-white border-b border-black/10 dark:border-white/20 pb-1 hover:border-blue-500 transition-colors">
                            <span>Create Assistant</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                     {/* VISUAL: Chat Interface with Citations - Dark UI */}
                     <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[500px] perspective-1000 group">
                        <div className="absolute inset-0 bg-[#0F0F0F] rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl flex flex-col">
                             {/* Chat Header */}
                             <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#141414]">
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><ShieldCheck size={16}/></div>
                                     <div>
                                         <div className="text-sm font-medium text-white">SecOps Assistant</div>
                                         <div className="text-[10px] text-green-400 flex items-center gap-1">● Online</div>
                                     </div>
                                 </div>
                             </div>

                             {/* Chat Area */}
                             <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                                 
                                 {/* User Message */}
                                 <div className="flex justify-end">
                                     <div className="bg-[#222] text-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm border border-white/5">
                                         What is the protocol for a Level 2 data breach involving PII?
                                     </div>
                                 </div>

                                 {/* Bot Message */}
                                 <div className="flex gap-4">
                                     <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/20"><MessageSquare size={14}/></div>
                                     <div className="space-y-4 max-w-[90%]">
                                         <div className="text-gray-300 text-sm leading-relaxed">
                                             According to our <span className="text-blue-400 font-medium">Incident Response Plan</span>, a Level 2 breach requires immediate escalation to the CISO within 1 hour.
                                             <br/><br/>
                                             Required Actions:
                                             <ul className="list-disc pl-4 mt-2 space-y-1 text-gray-400">
                                                 <li>Isolate affected systems (Section 4.2)</li>
                                                 <li>Notify Legal Counsel via Slack #legal-emergency</li>
                                             </ul>
                                         </div>
                                         
                                         {/* Citation Cards */}
                                         <div className="flex gap-3 mt-2">
                                             <div className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded px-3 py-2 hover:bg-[#222] transition-colors cursor-pointer group/card">
                                                 <div className="w-4 h-4 rounded bg-white/10 p-0.5">{logos.notion}</div>
                                                 <span className="text-xs text-gray-400 group-hover/card:text-white">IR_Playbook_2024</span>
                                             </div>
                                             <div className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded px-3 py-2 hover:bg-[#222] transition-colors cursor-pointer group/card">
                                                 <div className="w-4 h-4 rounded bg-[#1FA463]/10 p-0.5">{logos.drive}</div>
                                                 <span className="text-xs text-gray-400 group-hover/card:text-white">GDPR_Policy_Final.pdf</span>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>

                             {/* Input Area */}
                             <div className="p-4 border-t border-white/5">
                                 <div className="bg-[#111] border border-white/10 rounded-lg h-10 flex items-center px-4 justify-between">
                                     <span className="text-sm text-gray-600">Ask a follow-up...</span>
                                     <div className="p-1 rounded hover:bg-white/10 cursor-pointer"><Paperclip size={14} className="text-gray-500"/></div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

      </div>
    </Section>
  );
};