import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { 
  Layout, Users, AppWindow, Cpu, 
  Hammer, Zap, Activity, Library, 
  Network, Search, ShieldCheck, 
  Database, Plug, ArrowDown, Share2,
  BrainCircuit, Server
} from 'lucide-react';

export const AlvioSuite: React.FC = () => {
  return (
    <Section id="suite" className="bg-white dark:bg-black relative overflow-hidden py-32 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-accent-purple/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <BrainCircuit size={12} className="text-gray-900 dark:text-white" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white">System Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">
                  The Alvio OS.
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                   A complete operating system for enterprise intelligence, powered by our proprietary Nexus models and governed by Alvio Protect.
                </p>
            </FadeIn>
        </div>

        <div className="flex flex-col gap-4 relative">
            
            {/* Connecting Line (Spine) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 dark:via-white/20 to-transparent -z-10 hidden lg:block"></div>

            {/* --- LAYER 1: USER SURFACES --- */}
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SuiteCard 
                        icon={<Layout />} 
                        title="Alvio Assistant" 
                        desc="Unified UI for search, chat & actions." 
                        color="text-gray-900 dark:text-white"
                        label="Surface"
                    />
                    <SuiteCard 
                        icon={<Users />} 
                        title="Business Agents" 
                        desc="Role-based: Sales, HR, DevOps, Finance." 
                        color="text-gray-900 dark:text-white"
                    />
                    <SuiteCard 
                        icon={<AppWindow />} 
                        title="Agents in Tools" 
                        desc="Embedded in Slack, Teams, Chrome." 
                        color="text-gray-900 dark:text-white"
                    />
                    <SuiteCard 
                        icon={<Share2 />} 
                        title="3rd Party (MCP)" 
                        desc="External tools via MCP protocol." 
                        color="text-gray-900 dark:text-white"
                    />
                </div>
            </FadeIn>

            {/* Connector */}
            <LayerConnector />

            {/* --- LAYER 2: AGENT PLATFORM --- */}
            <FadeIn delay={100}>
                <div className="relative p-1 rounded-2xl bg-gradient-to-b from-accent-purple/10 dark:from-accent-purple/20 to-transparent">
                    <div className="absolute top-4 left-[-120px] text-xs font-mono text-accent-purple uppercase tracking-widest hidden xl:block text-right w-[100px]">
                        Agent<br/>Runtime
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-accent-purple/20">
                        <SuiteCard 
                            icon={<Hammer />} 
                            title="Agent Builder" 
                            desc="No-code flow builder, triggers & approvals." 
                            variant="glass"
                            color="text-accent-purple"
                        />
                        <SuiteCard 
                            icon={<Zap />} 
                            title="Orchestration" 
                            desc="Plan → Execute → Verify → Retry loops." 
                            variant="glass"
                            color="text-accent-purple"
                        />
                        <SuiteCard 
                            icon={<Activity />} 
                            title="Observability" 
                            desc="Traces, cost tracking & eval harness." 
                            variant="glass"
                            color="text-accent-purple"
                        />
                        <SuiteCard 
                            icon={<Library />} 
                            title="Agent Library" 
                            desc="Template marketplace & versioning." 
                            variant="glass"
                            color="text-accent-purple"
                        />
                    </div>
                </div>
            </FadeIn>

            {/* Connector */}
            <LayerConnector />

            {/* --- LAYER 3: INTELLIGENCE (NEXUS + MODEL GARDEN) --- */}
            <FadeIn delay={200}>
                <div className="border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                     <div className="absolute top-1/2 left-[-120px] -translate-y-1/2 text-xs font-mono text-blue-500 uppercase tracking-widest hidden xl:block text-right w-[100px]">
                        Intelligence
                    </div>
                    {/* Background sheen */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-6 w-full">
                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <Cpu size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                                Alvio Nexus 
                                <span className="text-xs bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 font-normal">Native Models</span>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">+</span>
                                <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Model Garden</span>
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong className="text-blue-500 block mb-1">Proprietary:</strong>
                                    Nexus-7B (Reasoning), Nexus-Flash (Speed)
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 pl-4 border-l border-black/10 dark:border-white/10">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Supported:</strong>
                                    Google Vertex, AWS, Azure, OpenAI, Claude, OpenRouter, Together AI
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Connector */}
            <LayerConnector />

            {/* --- LAYER 4: KNOWLEDGE & SEARCH --- */}
            <FadeIn delay={300}>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
                     <div className="absolute top-4 left-[-120px] text-xs font-mono text-accent-orange uppercase tracking-widest hidden xl:block text-right w-[100px]">
                        Knowledge<br/>Layer
                    </div>

                    {/* Graph */}
                    <div className="border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A] rounded-xl p-6 relative overflow-hidden group hover:border-accent-orange/30 transition-colors">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-accent-orange group-hover:opacity-20 transition-opacity">
                            <Network size={64} />
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <Network className="text-accent-orange" size={20} />
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Enterprise Graph</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="text-gray-900 dark:text-white font-medium">Entities:</span> People, Projects, Customers, Docs
                            </div>
                            <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="text-gray-900 dark:text-white font-medium">Relations:</span> "Owns", "Worked On", "Approved By"
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0A0A0A] rounded-xl p-6 relative overflow-hidden group hover:border-accent-pink/30 transition-colors">
                         <div className="absolute top-0 right-0 p-6 opacity-10 text-accent-pink group-hover:opacity-20 transition-opacity">
                            <Search size={64} />
                        </div>
                         <div className="flex items-center gap-3 mb-4">
                            <Search className="text-accent-pink" size={20} />
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Neural Search</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="text-gray-900 dark:text-white font-medium">Method:</span> Hybrid (Keyword + Vector + Graph)
                            </div>
                            <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="text-gray-900 dark:text-white font-medium">Loop:</span> Self-learning ranking from usage
                            </div>
                        </div>
                    </div>
                 </div>
            </FadeIn>

            {/* Connector */}
            <LayerConnector />

            {/* --- LAYER 5: ALVIO PROTECT (TRUST) --- */}
            <FadeIn delay={400}>
                <div className="border border-green-500/20 dark:border-green-900/30 bg-green-50/50 dark:bg-gradient-to-r dark:from-green-950/30 dark:to-black rounded-xl p-6 relative overflow-hidden">
                     <div className="absolute top-1/2 left-[-120px] -translate-y-1/2 text-xs font-mono text-green-600 dark:text-green-500 uppercase tracking-widest hidden xl:block text-right w-[100px]">
                        Security
                    </div>
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,100,0.02)_50%)] bg-[size:100%_4px] pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Alvio Protect</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">The immune system of your enterprise intelligence.</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge color="green">Guardrails</Badge>
                            <Badge color="green">PII Redaction</Badge>
                            <Badge color="green">Prompt Defense</Badge>
                            <Badge color="green">SOC 2 / ISO Compliance</Badge>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Connector */}
            <LayerConnector />

            {/* --- LAYER 6: ALVIO INTEGRATIONS --- */}
            <FadeIn delay={500}>
                 <div className="relative">
                    <div className="absolute top-4 left-[-120px] text-xs font-mono text-gray-500 uppercase tracking-widest hidden xl:block text-right w-[100px]">
                        IO Layer
                    </div>
                    <div className="border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111] rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
                        
                        <div className="flex items-center gap-4 min-w-[200px]">
                             <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-300">
                                <Server size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Alvio Integrations</h3>
                                <p className="text-sm text-gray-500">Connectors & Actions</p>
                            </div>
                        </div>

                        <div className="h-full w-px bg-black/10 dark:bg-white/10 hidden md:block min-h-[50px]"></div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="flex items-start gap-3">
                                <Database size={16} className="text-gray-500 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">Native Connectors</div>
                                    <div className="text-xs text-gray-500 mt-1">Salesforce, Slack, Drive, SQL, S3, Notion, Jira...</div>
                                </div>
                            </div>
                             <div className="flex items-start gap-3">
                                <Plug size={16} className="text-gray-500 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">Actions & MCP</div>
                                    <div className="text-xs text-gray-500 mt-1">Write-back capabilities & Model Context Protocol support.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                 </div>
            </FadeIn>

        </div>
      </div>
    </Section>
  );
};

// --- Sub Components ---

const SuiteCard = ({ icon, title, desc, variant = 'solid', color, label }: any) => (
    <div className={`relative group p-6 rounded-xl border transition-all duration-300 h-full flex flex-col justify-between
        ${variant === 'glass' ? 'bg-white/40 dark:bg-white/5 border-black/5 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10' : 'bg-white dark:bg-[#111] border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 shadow-sm dark:shadow-none'}
    `}>
        {label && (
             <div className="absolute top-1/2 left-[-135px] -translate-y-1/2 text-xs font-mono text-gray-500 uppercase tracking-widest hidden xl:block text-right w-[100px]">
                {label}
            </div>
        )}
        <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            <div className={`${color} mb-4`}>{React.cloneElement(icon, { size: 24 })}</div>
            <h3 className={`text-base font-bold text-gray-900 dark:text-white mb-2`}>{title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
        </div>
        
        {/* Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity rounded-xl bg-gradient-to-br from-transparent to-${color.replace('text-', '')}/30 pointer-events-none`}></div>
    </div>
);

const LayerConnector = () => (
    <div className="flex justify-center py-2 relative z-0">
        <ArrowDown size={16} className="text-black/10 dark:text-white/20 animate-pulse" />
    </div>
);

const Badge = ({ children, color = 'gray' }: { children: React.ReactNode, color?: string }) => {
    const colorClasses = color === 'green' 
        ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' 
        : 'bg-white/5 border-white/10 text-gray-600 dark:text-gray-400';

    return (
        <span className={`px-2.5 py-1 rounded border text-[10px] uppercase tracking-wider font-medium ${colorClasses}`}>
            {children}
        </span>
    );
};