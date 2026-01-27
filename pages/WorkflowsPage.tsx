import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Workflow, Sparkles, MessageSquare, ArrowRight, CheckCircle2,
  Zap, Database, Mail, Calendar, FileText, DollarSign,
  Users, Globe, Code, Wand2, GitBranch, Play, Settings,
  Clock, TrendingUp, AlertCircle, Bot, Brain, Layers
} from 'lucide-react';

export const WorkflowsPage: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'sales' | 'support' | 'operations'>('sales');
  const [buildingStep, setBuildingStep] = useState(0);
  const [promptText, setPromptText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const workflows = {
    sales: {
      title: 'Sales Follow-up Automation',
      desc: 'AI-powered deal monitoring across Salesforce, Gmail, and Fireflies',
      prompt: 'Monitor my Salesforce deals. If a contact hasn\'t replied to email in 2 weeks AND their last Fireflies call mentioned "budget concerns", send me a Slack alert with AI-generated talking points.',
      steps: ['Check Salesforce deals daily', 'Analyze Gmail responses', 'Review Fireflies transcripts', 'Generate insights', 'Send Slack alert'],
      integrations: ['Salesforce', 'Gmail', 'Fireflies', 'Slack'],
      color: 'orange'
    },
    support: {
      title: 'Customer Support Intelligence',
      desc: 'Smart ticket routing powered by past conversations and knowledge base',
      prompt: 'When a Zendesk ticket comes in, check our Notion knowledge base and past ticket history. If it\'s similar to previously escalated issues, auto-assign to senior support and summarize context.',
      steps: ['Receive new ticket', 'Search Notion KB', 'Analyze similar tickets', 'AI categorization', 'Smart routing'],
      integrations: ['Zendesk', 'Notion', 'Jira', 'Slack'],
      color: 'pink'
    },
    operations: {
      title: 'Invoice & Payment Tracking',
      desc: 'Cross-platform financial intelligence',
      prompt: 'Track invoices in Xero. If an invoice is overdue 7 days, check Gmail for any communication about it, then create a Notion task with full context and send a summary to our #finance Slack channel.',
      steps: ['Monitor Xero invoices', 'Check overdue status', 'Search email history', 'Create Notion task', 'Notify via Slack'],
      integrations: ['Xero', 'Gmail', 'Notion', 'Slack'],
      color: 'purple'
    }
  };

  const buildSteps = [
    { title: 'Understanding Intent', desc: 'AI parses your workflow description', icon: Brain },
    { title: 'Mapping Integrations', desc: 'Identifying required data sources', icon: Globe },
    { title: 'Building Logic', desc: 'Creating conditions and actions', icon: GitBranch },
    { title: 'Testing & Deploying', desc: 'Validating and activating workflow', icon: Play }
  ];

  // Animated build process
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingStep((prev) => (prev + 1) % buildSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const fullText = workflows[activeWorkflow].prompt;
    if (isTyping && promptText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setPromptText(fullText.slice(0, promptText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (promptText.length === fullText.length) {
      setTimeout(() => setIsTyping(false), 2000);
      setTimeout(() => {
        setPromptText('');
        setIsTyping(true);
      }, 4000);
    }
  }, [promptText, isTyping, activeWorkflow]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/20 to-pink-50/30 dark:from-black dark:via-[#0a0505] dark:to-[#050a0a] text-gray-900 dark:text-white transition-colors duration-700">
      <Navbar />

      {/* Hero Section - Enhanced with Live Demo */}
      <Section className="pt-32 pb-40 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-br from-accent-pink/20 via-accent-orange/15 to-transparent blur-[250px] rounded-full pointer-events-none animate-blob" />
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-tr from-accent-purple/20 via-accent-pink/10 to-transparent blur-[200px] rounded-full pointer-events-none animate-blob-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-orange/10 to-accent-pink/10 blur-[180px] rounded-full pointer-events-none animate-blob-slower" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            {/* Header Content */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border-2 border-accent-pink/40 bg-gradient-to-r from-accent-pink/15 via-accent-orange/15 to-accent-pink/15 backdrop-blur-2xl shadow-2xl shadow-accent-pink/20 hover:scale-105 transition-all duration-500 cursor-pointer">
                <Workflow size={16} className="text-accent-pink animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink bg-clip-text text-transparent">ALVIO Workflows</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-ping"></div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-8 leading-[1.05]">
                Just Describe It.<br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple" style={{backgroundSize: '200% 200%', animation: 'gradient 8s linear infinite'}}>
                    AI Builds The Workflow.
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple blur-sm opacity-50 animate-pulse"></div>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                No flowcharts. No node connections. No engineering knowledge required.<br />
                <span className="font-semibold text-gray-800 dark:text-gray-200">Describe your workflow in plain English</span>—ALVIO creates it instantly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button variant="primary" size="lg" className="group rounded-full shadow-2xl shadow-accent-pink/40 hover:shadow-accent-orange/50 transition-all duration-500 hover:scale-105 text-lg px-8 py-4">
                  <Sparkles size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                  Create Workflow
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border-2 border-white/20 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-lg px-8 py-4">
                  See Examples
                </Button>
              </div>
            </div>

            {/* Interactive Workflow Demo */}
            <div className="relative max-w-6xl mx-auto">
              {/* Main Demo Container */}
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-2 border-slate-700 dark:border-slate-800 shadow-2xl overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  animation: 'grid-move 20s linear infinite'
                }}></div>

                {/* Glowing corners */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-accent-pink/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-orange/20 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>

                <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  {/* Left: Prompt Input */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-pink via-accent-orange to-accent-pink flex items-center justify-center shadow-lg shadow-accent-pink/50 animate-pulse-slow">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Your Description</div>
                        <div className="text-xs text-slate-400">Plain English input</div>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
                      <div className="relative p-6 rounded-2xl bg-slate-800 border-2 border-slate-700 backdrop-blur-xl">
                        <p className="text-sm text-slate-200 leading-relaxed font-light">
                          "When a high-value Salesforce deal goes quiet for 2 weeks, check Gmail and Fireflies for context, then alert me on Slack"
                          <span className="inline-block w-0.5 h-4 bg-accent-pink animate-cursor-blink ml-1"></span>
                        </p>
                      </div>
                    </div>

                    {/* Input Stats */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30">
                        <Database size={12} className="text-blue-400" />
                        <span className="text-xs text-blue-300 font-semibold">4 integrations detected</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30">
                        <CheckCircle2 size={12} className="text-green-400" />
                        <span className="text-xs text-green-300 font-semibold">Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Center: AI Processing Animation */}
                  <div className="flex flex-col items-center gap-4 lg:px-8">
                    <div className="relative">
                      {/* Orbiting particles */}
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink via-accent-orange to-accent-purple animate-spin-slow opacity-20 blur-xl"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple animate-spin-reverse-slow opacity-30 blur-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-pink via-accent-orange to-accent-purple flex items-center justify-center shadow-2xl shadow-accent-pink/50 animate-pulse-glow">
                            <Sparkles size={28} className="text-white animate-pulse" />
                          </div>
                        </div>

                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-orbit-1">
                          <div className="w-2 h-2 rounded-full bg-accent-pink shadow-lg shadow-accent-pink/50"></div>
                        </div>
                        <div className="absolute inset-0 animate-orbit-2">
                          <div className="w-2 h-2 rounded-full bg-accent-orange shadow-lg shadow-accent-orange/50"></div>
                        </div>
                        <div className="absolute inset-0 animate-orbit-3">
                          <div className="w-2 h-2 rounded-full bg-accent-purple shadow-lg shadow-accent-purple/50"></div>
                        </div>
                      </div>
                    </div>

                    {/* Processing indicator */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-accent-pink/30 backdrop-blur-xl">
                        <Bot size={14} className="text-accent-pink animate-pulse" />
                        <span className="text-xs font-bold text-white">AI Building...</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">2.1s elapsed</div>
                    </div>

                    {/* Animated arrow */}
                    <div className="hidden lg:block">
                      <ArrowRight size={24} className="text-accent-orange animate-pulse" />
                    </div>
                  </div>

                  {/* Right: Generated Workflow */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50">
                        <Workflow size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Generated Workflow</div>
                        <div className="text-xs text-slate-400">Ready to deploy</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { icon: Database, label: 'Monitor Salesforce deals', color: 'blue' },
                        { icon: Clock, label: 'Check 2-week timeline', color: 'purple' },
                        { icon: Globe, label: 'Scan Gmail & Fireflies', color: 'orange' },
                        { icon: Zap, label: 'Alert on Slack', color: 'green' }
                      ].map((step, i) => (
                        <div key={i} className="relative group" style={{animationDelay: `${i * 0.2}s`}}>
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                            step.color === 'blue' ? 'from-blue-500 to-blue-600' :
                            step.color === 'purple' ? 'from-purple-500 to-purple-600' :
                            step.color === 'orange' ? 'from-orange-500 to-orange-600' :
                            'from-green-500 to-green-600'
                          } rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity`}></div>

                          <div className={`relative flex items-center gap-3 p-4 rounded-xl border-2 backdrop-blur-xl ${
                            step.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                            step.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
                            step.color === 'orange' ? 'bg-orange-500/10 border-orange-500/30' :
                            'bg-green-500/10 border-green-500/30'
                          } hover:scale-[1.02] transition-all duration-300`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              step.color === 'blue' ? 'bg-blue-500/20' :
                              step.color === 'purple' ? 'bg-purple-500/20' :
                              step.color === 'orange' ? 'bg-orange-500/20' :
                              'bg-green-500/20'
                            }`}>
                              <step.icon size={18} className={
                                step.color === 'blue' ? 'text-blue-400' :
                                step.color === 'purple' ? 'text-purple-400' :
                                step.color === 'orange' ? 'text-orange-400' :
                                'text-green-400'
                              } />
                            </div>
                            <span className="text-sm font-semibold text-white flex-1">{step.label}</span>
                            <div className={`w-2 h-2 rounded-full animate-pulse ${
                              step.color === 'blue' ? 'bg-blue-400 shadow-lg shadow-blue-400/50' :
                              step.color === 'purple' ? 'bg-purple-400 shadow-lg shadow-purple-400/50' :
                              step.color === 'orange' ? 'bg-orange-400 shadow-lg shadow-orange-400/50' :
                              'bg-green-400 shadow-lg shadow-green-400/50'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Deploy button */}
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-[1.02] transition-all duration-300 group">
                      <Play size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Deploy Workflow</span>
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="relative mt-8 pt-6 border-t border-slate-700/50 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-yellow-400" />
                    <span className="text-xs text-slate-300 font-semibold">Built in 2.1s</span>
                  </div>
                  <div className="w-px h-4 bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-blue-400" />
                    <span className="text-xs text-slate-300 font-semibold">4 Integrations</span>
                  </div>
                  <div className="w-px h-4 bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-400" />
                    <span className="text-xs text-slate-300 font-semibold">100% Automated</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink text-white text-xs font-bold shadow-2xl shadow-accent-pink/50 flex items-center gap-2 border-2 border-white/10">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Live Demo</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Traditional vs ALVIO Workflows */}
      <Section className="bg-gradient-to-b from-white/50 via-orange-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-orange/[0.02] dark:to-white/[0.02] py-24 border-y border-black/5 dark:border-white/5 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-orange/30 bg-gradient-to-r from-accent-orange/10 to-accent-pink/10 backdrop-blur-xl">
                <Zap size={14} className="text-accent-orange animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-orange">The Prompt Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                No Flowcharts. No Node Wiring.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                Traditional workflow tools still require engineering thinking. ALVIO speaks human—you describe, AI builds.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Workflow Builders */}
            <FadeIn>
              <div className="relative p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    <GitBranch className="text-gray-600 dark:text-gray-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Traditional Workflow Builders</h3>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  Visual builders that still require technical understanding and manual configuration.
                </p>

                <div className="space-y-3">
                  {[
                    { text: 'Drag nodes, draw connections', icon: GitBranch },
                    { text: 'Understand triggers, conditions, loops', icon: Settings },
                    { text: 'Manually configure each integration', icon: Code },
                    { text: 'Debug flow logic yourself', icon: AlertCircle }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5">
                      <item.icon size={16} className="text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-900 dark:text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Mockup - Traditional Builder */}
                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 border-2 border-slate-700 dark:border-slate-800 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono ml-2">workflow-builder.app</div>
                  </div>

                  <div className="text-xs text-slate-400 mb-4 font-semibold">Traditional Flow Builder:</div>

                  {/* Complex node diagram */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-[10px] font-mono text-slate-300 flex-shrink-0">
                        1. Webhook Trigger
                      </div>
                      <ArrowRight size={10} className="text-slate-600" />
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-[10px] font-mono text-slate-300 flex-shrink-0">
                        2. Filter
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <ArrowRight size={10} className="text-slate-600 rotate-90" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-[10px] font-mono text-slate-300 flex-shrink-0">
                        3. API: GET data
                      </div>
                      <ArrowRight size={10} className="text-slate-600" />
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-[10px] font-mono text-slate-300 flex-shrink-0">
                        4. Condition
                      </div>
                    </div>
                    <div className="flex gap-8 ml-4">
                      <div className="flex flex-col items-center gap-2">
                        <ArrowRight size={10} className="text-slate-600 rotate-90" />
                        <div className="px-2 py-1 rounded bg-green-900/30 border border-green-700/50 text-[9px] font-mono text-green-400">TRUE</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ArrowRight size={10} className="text-slate-600 rotate-90" />
                        <div className="px-2 py-1 rounded bg-red-900/30 border border-red-700/50 text-[9px] font-mono text-red-400">FALSE</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2">
                    <AlertCircle size={12} className="text-orange-400" />
                    <div className="text-[10px] text-slate-400 italic">Manual configuration, API setup, error handling all required</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ALVIO Workflows */}
            <FadeIn delay={200}>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-accent-pink/5 via-accent-orange/5 to-accent-pink/5 border border-accent-pink/30 backdrop-blur-xl shadow-lg overflow-hidden">
                {/* Floating gradient orbs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent-orange/30 to-transparent rounded-full blur-2xl animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent-pink/30 to-transparent rounded-full blur-2xl animate-blob-delay"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink via-accent-orange to-accent-pink flex items-center justify-center">
                      <Sparkles className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">ALVIO Workflows</h3>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">Prompt-based creation.</strong> Describe what you want, AI builds and connects everything.
                  </p>

                  <div className="space-y-3">
                    {[
                      { text: 'Write what you want in plain English', icon: MessageSquare, color: 'pink' },
                      { text: 'AI designs the entire flow for you', icon: Brain, color: 'orange' },
                      { text: 'Integrations auto-connected & configured', icon: Zap, color: 'pink' },
                      { text: 'Refine with follow-up prompts', icon: Wand2, color: 'orange' }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${
                        item.color === 'pink'
                          ? 'bg-gradient-to-br from-accent-pink/10 to-accent-pink/5 border border-accent-pink/20'
                          : 'bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border border-accent-orange/20'
                      }`}>
                        <item.icon size={16} className={item.color === 'pink' ? 'text-accent-pink' : 'text-accent-orange'} />
                        <span className="text-sm text-gray-900 dark:text-white font-semibold">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Prompt Example - Premium Mock */}
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 border-2 border-accent-orange/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-accent-orange/20">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/50">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <Sparkles size={10} className="text-accent-orange" />
                        <div className="text-[10px] text-slate-300 font-semibold">alvio.io/workflows</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center shadow-lg shadow-accent-pink/30">
                        <MessageSquare size={14} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-white">ALVIO Prompt Builder</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-600 backdrop-blur-xl">
                      <p className="text-xs text-slate-200 leading-relaxed font-light">
                        "When a high-value Salesforce deal goes quiet for 2 weeks, check Gmail and Fireflies for context, then alert me on Slack."
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-accent-pink/30">
                        <Wand2 size={12} />
                        Build Flow
                      </button>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-300">Ready</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-400" />
                      <span className="text-[10px] text-slate-400">AI handles all connections, logic, and error handling automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                From Prompt to Production
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Watch AI transform your description into a working workflow in seconds.
              </p>
            </div>
          </FadeIn>

          {/* Build Steps */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple opacity-20 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {buildSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className={`relative transition-all duration-700 ${
                    i === buildingStep ? 'scale-105' : 'scale-100'
                  }`}>
                    <div className={`p-6 rounded-3xl border-2 transition-all duration-700 ${
                      i === buildingStep
                        ? 'bg-gradient-to-br from-accent-pink/10 via-accent-orange/10 to-accent-pink/10 border-accent-pink/40 shadow-2xl shadow-accent-pink/20'
                        : i < buildingStep
                        ? 'bg-white/70 dark:bg-white/[0.05] border-green-500/40'
                        : 'bg-white/50 dark:bg-white/[0.02] border-gray-200 dark:border-white/10'
                    } backdrop-blur-xl`}>
                      <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center mx-auto transition-all duration-700 ${
                        i === buildingStep
                          ? 'bg-gradient-to-br from-accent-pink/30 to-accent-orange/30 shadow-lg shadow-accent-pink/30 scale-110'
                          : i < buildingStep
                          ? 'bg-green-500/20 border-2 border-green-500/40'
                          : 'bg-gray-100 dark:bg-white/5'
                      }`}>
                        {i < buildingStep ? (
                          <CheckCircle2 className="text-green-500" size={32} />
                        ) : (
                          <step.icon className={i === buildingStep ? 'text-accent-pink animate-pulse' : 'text-gray-400'} size={32} />
                        )}
                      </div>

                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-light">{step.desc}</p>
                      </div>

                      {i === buildingStep && (
                        <div className="mt-4 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple animate-pulse" style={{ width: '70%' }} />
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Prompt to Workflow Visualization - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-white/90 via-pink-50/70 to-white/90 dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-900/90 border-2 border-gray-200 dark:border-slate-700 p-8 backdrop-blur-2xl shadow-2xl">
                {/* Browser-like Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-gray-300 dark:border-slate-600">
                      <Sparkles size={12} className="text-accent-pink" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">ALVIO Workflow Builder</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-pink via-accent-orange to-accent-pink flex items-center justify-center shadow-lg shadow-accent-pink/30">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Describe Your Workflow</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">In plain English</p>
                  </div>
                </div>

                {/* Prompt Input Area */}
                <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 min-h-[200px] font-light shadow-inner">
                  <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {promptText}
                    <span className="inline-block w-0.5 h-4 bg-accent-pink animate-cursor-blink ml-1" />
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex items-center gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink text-white font-bold shadow-2xl shadow-accent-pink/40 hover:shadow-accent-orange/50 hover:scale-[1.02] transition-all duration-300">
                    <Wand2 size={18} />
                    <span>Generate Workflow</span>
                    <Sparkles size={14} className="animate-pulse" />
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-500/10 dark:to-blue-500/5 border border-blue-200 dark:border-blue-500/20 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2.1s</div>
                    <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">Build Time</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-500/10 dark:to-green-500/5 border border-green-200 dark:border-green-500/20 text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{workflows[activeWorkflow].integrations.length}</div>
                    <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">Connected</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-500/10 dark:to-purple-500/5 border border-purple-200 dark:border-purple-500/20 text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{workflows[activeWorkflow].steps.length}</div>
                    <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">Steps</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6">
                {/* Generated Workflow Header */}
                <div className="rounded-3xl bg-gradient-to-br from-white/90 via-orange-50/70 to-white/90 dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-900/90 border-2 border-gray-200 dark:border-slate-700 p-8 backdrop-blur-2xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange via-accent-pink to-accent-orange flex items-center justify-center shadow-lg shadow-accent-orange/30 animate-pulse-slow">
                      <Workflow size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Generated Workflow</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Ready to deploy</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-green-700 dark:text-green-400">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {workflows[activeWorkflow].steps.map((step, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:scale-[1.02] hover:border-accent-orange/40 hover:shadow-lg hover:shadow-accent-orange/20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange/20 via-accent-pink/20 to-accent-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                          <span className="text-sm font-bold text-accent-orange">{i + 1}</span>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-gray-800 dark:text-gray-200 font-semibold block">{step}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Automated step</span>
                        </div>
                        <CheckCircle2 size={18} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  {/* Connected Integrations */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">Connected Services</div>
                    <div className="flex flex-wrap gap-2">
                      {workflows[activeWorkflow].integrations.map((integration, i) => (
                        <div key={i} className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 border-2 border-gray-300 dark:border-slate-600 hover:border-accent-orange/50 text-xs font-bold text-gray-700 dark:text-gray-300 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              i === 0 ? 'bg-blue-500' :
                              i === 1 ? 'bg-green-500' :
                              i === 2 ? 'bg-purple-500' :
                              'bg-orange-500'
                            } animate-pulse`}></div>
                            {integration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deploy Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-pink/10 via-accent-orange/10 to-accent-pink/10 border-2 border-accent-orange/30 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Play size={20} className="text-white ml-0.5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">Ready to Deploy</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Workflow will run automatically based on triggers</div>
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-green-500/30">
                      Deploy
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Example Workflows */}
      <Section className="bg-gradient-to-b from-white/50 via-pink-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-pink/[0.02] dark:to-white/[0.02] py-24 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Real Workflow Examples
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Teams automate complex processes by simply describing them.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {Object.entries(workflows).map(([key, workflow]) => (
              <button
                key={key}
                onClick={() => setActiveWorkflow(key as any)}
                className={`px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeWorkflow === key
                    ? 'bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink text-white shadow-2xl shadow-accent-pink/40 scale-105'
                    : 'bg-white/70 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-accent-pink/40 hover:bg-white dark:hover:bg-white/[0.08] backdrop-blur-xl hover:scale-105'
                }`}
              >
                {workflow.title}
              </button>
            ))}
          </div>

          <FadeIn>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-white/80 via-orange-50/60 to-pink-50/60 dark:from-white/[0.05] dark:via-accent-orange/[0.03] dark:to-accent-pink/[0.03] border-2 border-gray-200 dark:border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {workflows[activeWorkflow].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {workflows[activeWorkflow].desc}
                  </p>

                  <div className="p-6 rounded-2xl bg-white/90 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare size={16} className="text-accent-pink" />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Prompt Used:</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{workflows[activeWorkflow].prompt}"
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-3">What Gets Automated:</div>
                    {workflows[activeWorkflow].steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-accent-pink flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow Visual Flow */}
                <div className="relative">
                  <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-2 border-slate-700 dark:border-slate-800 p-8 overflow-hidden shadow-2xl">
                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>

                    {/* Workflow Flow */}
                    <div className="relative space-y-6">
                      {workflows[activeWorkflow].integrations.map((integration, i) => (
                        <div key={i} className="relative">
                          {/* Connection Line */}
                          {i > 0 && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-slate-600 via-accent-pink/60 to-transparent"></div>
                          )}

                          {/* Node */}
                          <div className="relative group">
                            <div className={`relative p-5 rounded-2xl border-2 backdrop-blur-xl transform transition-all duration-500 hover:scale-[1.02] hover:z-10 ${
                              i === 0 ? 'bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent border-blue-400/50 shadow-lg shadow-blue-500/20' :
                              i === 1 ? 'bg-gradient-to-br from-green-500/20 via-green-600/10 to-transparent border-green-400/50 shadow-lg shadow-green-500/20' :
                              i === 2 ? 'bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-transparent border-purple-400/50 shadow-lg shadow-purple-500/20' :
                              'bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent border-orange-400/50 shadow-lg shadow-orange-500/20'
                            }`}>
                              <div className="flex items-center gap-4">
                                {/* Icon */}
                                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                  i === 0 ? 'bg-blue-500/30 shadow-lg shadow-blue-500/30' :
                                  i === 1 ? 'bg-green-500/30 shadow-lg shadow-green-500/30' :
                                  i === 2 ? 'bg-purple-500/30 shadow-lg shadow-purple-500/30' :
                                  'bg-orange-500/30 shadow-lg shadow-orange-500/30'
                                }`}>
                                  <Database size={24} className={
                                    i === 0 ? 'text-blue-300' :
                                    i === 1 ? 'text-green-300' :
                                    i === 2 ? 'text-purple-300' :
                                    'text-orange-300'
                                  } />
                                  {/* Pulse effect */}
                                  <div className={`absolute inset-0 rounded-xl animate-ping opacity-20 ${
                                    i === 0 ? 'bg-blue-400' :
                                    i === 1 ? 'bg-green-400' :
                                    i === 2 ? 'bg-purple-400' :
                                    'bg-orange-400'
                                  }`}></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="text-base font-bold text-white">{integration}</div>
                                    <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                      i === 0 ? 'bg-blue-400/20 text-blue-300' :
                                      i === 1 ? 'bg-green-400/20 text-green-300' :
                                      i === 2 ? 'bg-purple-400/20 text-purple-300' :
                                      'bg-orange-400/20 text-orange-300'
                                    }`}>
                                      Step {i + 1}
                                    </div>
                                  </div>
                                  <div className="text-xs text-slate-400 font-medium">{workflows[activeWorkflow].steps[i]}</div>
                                </div>

                                {/* Status Indicator */}
                                <div className="flex-shrink-0">
                                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                                    i === 0 ? 'bg-blue-400 shadow-lg shadow-blue-400/50' :
                                    i === 1 ? 'bg-green-400 shadow-lg shadow-green-400/50' :
                                    i === 2 ? 'bg-purple-400 shadow-lg shadow-purple-400/50' :
                                    'bg-orange-400 shadow-lg shadow-orange-400/50'
                                  }`}></div>
                                </div>
                              </div>

                              {/* Data Flow Animation */}
                              {i < workflows[activeWorkflow].integrations.length - 1 && (
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                                  <ArrowRight size={16} className="text-accent-pink rotate-90 animate-bounce" style={{ animationDuration: '2s' }} />
                                </div>
                              )}
                            </div>

                            {/* Hover Card - Shows additional info */}
                            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-20 hidden xl:block">
                              <div className="px-4 py-2 rounded-xl bg-slate-800/95 border border-slate-600 backdrop-blur-xl shadow-2xl whitespace-nowrap">
                                <div className="text-xs text-slate-300">AI Processing</div>
                                <div className="text-[10px] text-slate-500 mt-0.5">Connected & Active</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Final Output */}
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-accent-pink/20 via-accent-orange/20 to-accent-pink/20 border-2 border-accent-pink/40 backdrop-blur-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-pink to-accent-orange flex items-center justify-center shadow-lg shadow-accent-pink/50">
                            <CheckCircle2 size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-bold text-white mb-1">Workflow Complete</div>
                            <div className="text-xs text-slate-300">Alert sent with AI-generated insights</div>
                          </div>
                          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                        </div>
                      </div>
                    </div>

                    {/* AI Badge */}
                    <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink shadow-2xl shadow-accent-pink/50 flex items-center gap-2 border-2 border-white/10">
                      <Bot size={14} className="text-white animate-pulse" />
                      <span className="text-xs font-bold text-white">AI-Powered Flow</span>
                    </div>

                    {/* Execution Stats */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 rounded-full bg-slate-800/95 border border-slate-600 backdrop-blur-xl shadow-xl">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-green-400" />
                        <span className="text-[10px] font-bold text-slate-300">~2.3s</span>
                      </div>
                      <div className="w-px h-3 bg-slate-600"></div>
                      <div className="flex items-center gap-1.5">
                        <Zap size={12} className="text-yellow-400" />
                        <span className="text-[10px] font-bold text-slate-300">Auto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Powered by Intelligence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Workflows that understand your business context and adapt intelligently.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: '200+ Pre-Indexed Integrations',
                desc: 'All your business tools already connected. Salesforce, Gmail, Notion, Xero, QuickBooks—ready to use.',
                color: 'orange',
                highlight: true
              },
              {
                icon: Brain,
                title: 'AI That Understands Context',
                desc: 'Workflows reason across your tools. "If Salesforce deal is stuck AND email went unanswered..."',
                color: 'pink'
              },
              {
                icon: MessageSquare,
                title: 'Natural Language Refinement',
                desc: 'Modify workflows by chatting. "Also check Fireflies for budget concerns."',
                color: 'purple'
              },
              {
                icon: Clock,
                title: 'Smart Scheduling',
                desc: 'AI determines optimal timing. Daily checks, real-time triggers, or custom schedules.',
                color: 'blue'
              },
              {
                icon: AlertCircle,
                title: 'Intelligent Alerts',
                desc: 'Get notified when it matters. AI prioritizes and summarizes for you.',
                color: 'green'
              },
              {
                icon: Layers,
                title: 'Fully Editable',
                desc: 'Refine anytime with prompts. Or dive into the underlying logic if you want.',
                color: 'pink'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`group relative p-8 rounded-3xl border backdrop-blur-2xl hover:scale-[1.03] transition-all duration-500 overflow-hidden ${
                  item.highlight
                    ? 'bg-gradient-to-br from-accent-orange/15 via-accent-pink/10 to-accent-orange/15 border-accent-orange/40 shadow-2xl shadow-accent-orange/20 hover:shadow-accent-orange/30'
                    : item.color === 'pink'
                    ? 'bg-gradient-to-br from-white/70 via-pink-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-pink/[0.05] dark:to-white/[0.05] border-gray-200 dark:border-white/10 hover:shadow-xl hover:border-accent-pink/30'
                    : item.color === 'purple'
                    ? 'bg-gradient-to-br from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05] border-gray-200 dark:border-white/10 hover:shadow-xl hover:border-accent-purple/30'
                    : item.color === 'blue'
                    ? 'bg-gradient-to-br from-white/70 via-blue-50/50 to-white/70 dark:from-white/[0.05] dark:via-blue-500/[0.05] dark:to-white/[0.05] border-gray-200 dark:border-white/10 hover:shadow-xl hover:border-blue-400/30'
                    : 'bg-gradient-to-br from-white/70 via-green-50/50 to-white/70 dark:from-white/[0.05] dark:via-green-500/[0.05] dark:to-white/[0.05] border-gray-200 dark:border-white/10 hover:shadow-xl hover:border-green-400/30'
                }`}>
                  {item.highlight && (
                    <>
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent-orange/30 to-transparent rounded-full blur-2xl animate-blob"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent-pink/30 to-transparent rounded-full blur-2xl animate-blob-delay"></div>
                    </>
                  )}

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ${
                      item.highlight
                        ? 'bg-gradient-to-br from-accent-orange via-accent-pink to-accent-orange shadow-accent-orange/30 animate-pulse-slow'
                        : item.color === 'pink'
                        ? 'bg-gradient-to-br from-accent-pink/20 to-accent-pink/10 shadow-accent-pink/20'
                        : item.color === 'purple'
                        ? 'bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 shadow-accent-purple/20'
                        : item.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/10 shadow-blue-200/20'
                        : 'bg-gradient-to-br from-green-100 to-green-50 dark:from-green-500/20 dark:to-green-500/10 shadow-green-200/20'
                    }`}>
                      <item.icon className={
                        item.highlight ? 'text-white' :
                        item.color === 'pink' ? 'text-accent-pink' :
                        item.color === 'purple' ? 'text-accent-purple' :
                        item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        'text-green-600 dark:text-green-400'
                      } size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 via-accent-orange/10 to-accent-pink/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Stop Building Flowcharts.<br />Start Describing Workflows.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Your business logic in plain English. AI handles the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="rounded-full shadow-2xl shadow-accent-pink/30 hover:shadow-accent-orange/40 transition-all duration-500 hover:scale-105">
                Create Your First Workflow
              </Button>
              <Button variant="outline" size="lg" className="rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                See More Examples
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
