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

export const AgentsPage: React.FC = () => {
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
    <div className="min-h-screen bg-white dark:from-black dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-700">
      <Navbar />

      {/* Hero Section - Premium Apple-style */}
      <Section className="pt-40 pb-24 relative overflow-hidden">
        {/* Subtle Mesh Gradient Background - iOS style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 via-orange-200/20 to-transparent blur-3xl rounded-full opacity-40 animate-blob" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/25 via-purple-200/15 to-transparent blur-3xl rounded-full opacity-40 animate-blob-delay" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-200/20 to-pink-200/20 blur-3xl rounded-full opacity-30 animate-blob-slower" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            {/* Header Content - Clean Apple style */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                <span className="text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-300">ALVIO Workflows</span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.05]">
                Just describe it.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                  AI builds it.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-normal">
                No flowcharts. No node connections.<br />
                <span className="text-gray-700 dark:text-gray-200">Plain English to production-ready workflows.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="group rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] text-base px-8 py-4">
                  <Sparkles size={18} className="mr-2" />
                  Create Workflow
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 text-base px-8 py-4">
                  See Examples
                </Button>
              </div>
            </div>

            {/* Interactive Workflow Demo - Glass Morphic */}
            <div className="relative max-w-6xl mx-auto">
              {/* Main Demo Container - Clean glass design */}
              <div className="relative p-12 rounded-[2.5rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 shadow-2xl overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-orange-50/20 to-pink-50/30 dark:from-purple-900/10 dark:via-orange-900/5 dark:to-pink-900/10 pointer-events-none"></div>

                {/* Subtle mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>

                <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
                  {/* Left: Prompt Input - Clean design */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Your Description</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Plain English</div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-6 rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                          "When a high-value Salesforce deal goes quiet for 2 weeks, check Gmail and Fireflies for context, then alert me on Slack"
                          <span className="inline-block w-0.5 h-4 bg-purple-500 animate-cursor-blink ml-1"></span>
                        </p>
                      </div>
                    </div>

                    {/* Input Stats - Clean pills */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                        <Database size={13} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">4 integrations</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                        <CheckCircle2 size={13} className="text-green-600 dark:text-green-400" />
                        <span className="text-xs text-green-700 dark:text-green-300 font-medium">Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Center: AI Processing - Clean minimal animation */}
                  <div className="flex flex-col items-center gap-5 lg:px-6">
                    <div className="relative w-20 h-20">
                      {/* Simple elegant glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-orange-400 to-pink-400 blur-xl opacity-40 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                          <Sparkles size={24} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Processing indicator - Clean */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 backdrop-blur-xl shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-gray-700 dark:text-white">AI Building</span>
                      </div>
                      <div className="text-[10px] text-gray-400 dark:text-slate-500 font-mono">2.1s</div>
                    </div>

                    {/* Animated arrow */}
                    <div className="hidden lg:block">
                      <ArrowRight size={22} className="text-gray-400 dark:text-slate-600" />
                    </div>
                  </div>

                  {/* Right: Generated Workflow - Clean cards */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-sm">
                        <Workflow size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Generated Workflow</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Ready to deploy</div>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { icon: Database, label: 'Monitor Salesforce deals', color: 'blue' },
                        { icon: Clock, label: 'Check 2-week timeline', color: 'purple' },
                        { icon: Globe, label: 'Scan Gmail & Fireflies', color: 'orange' },
                        { icon: Zap, label: 'Alert on Slack', color: 'green' }
                      ].map((step, i) => (
                        <div key={i} className="relative group">
                          <div className={`relative flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border ${
                            step.color === 'blue' ? 'border-blue-200 dark:border-blue-500/20' :
                            step.color === 'purple' ? 'border-purple-200 dark:border-purple-500/20' :
                            step.color === 'orange' ? 'border-orange-200 dark:border-orange-500/20' :
                            'border-green-200 dark:border-green-500/20'
                          } hover:shadow-md transition-all duration-200`}>
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                              step.color === 'blue' ? 'bg-blue-50 dark:bg-blue-500/10' :
                              step.color === 'purple' ? 'bg-purple-50 dark:bg-purple-500/10' :
                              step.color === 'orange' ? 'bg-orange-50 dark:bg-orange-500/10' :
                              'bg-green-50 dark:bg-green-500/10'
                            }`}>
                              <step.icon size={16} className={
                                step.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                step.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                step.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                                'text-green-600 dark:text-green-400'
                              } />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex-1">{step.label}</span>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              step.color === 'blue' ? 'bg-blue-500' :
                              step.color === 'purple' ? 'bg-purple-500' :
                              step.color === 'orange' ? 'bg-orange-500' :
                              'bg-green-500'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Deploy button - Clean */}
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.01] transition-all duration-200 group">
                      <Play size={16} className="ml-0.5" />
                      <span>Deploy Workflow</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Stats Bar - Clean */}
                <div className="relative mt-10 pt-6 border-t border-gray-200 dark:border-slate-700/50 flex items-center justify-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Zap size={13} className="text-yellow-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Built in 2.1s</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300 dark:bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <Database size={13} className="text-blue-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">4 Integrations</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300 dark:bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-green-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">100% Automated</span>
                  </div>
                </div>

                {/* Floating badge - Clean */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-white text-xs font-semibold shadow-lg border border-gray-200 dark:border-slate-700 flex items-center gap-2 backdrop-blur-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <span>Live Demo</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Traditional vs ALVIO Workflows */}
      <Section className="bg-gray-50/50 dark:from-white/[0.02] dark:via-accent-orange/[0.02] dark:to-white/[0.02] py-28 border-y border-gray-200/50 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"></div>
                <span className="text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-300">The Prompt Advantage</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5 leading-tight">
                No flowcharts.<br />No node wiring.
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Traditional workflow tools still require engineering thinking.<br />
                <span className="text-gray-700 dark:text-gray-300">ALVIO speaks human—you describe, AI builds.</span>
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Traditional Workflow Builders */}
            <FadeIn>
              <div className="relative p-10 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    <GitBranch className="text-gray-500 dark:text-gray-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Traditional Workflow Builders</h3>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  Visual builders that still require technical understanding and manual configuration.
                </p>

                <div className="space-y-2.5">
                  {[
                    { text: 'Drag nodes, draw connections', icon: GitBranch },
                    { text: 'Understand triggers, conditions, loops', icon: Settings },
                    { text: 'Manually configure each integration', icon: Code },
                    { text: 'Debug flow logic yourself', icon: AlertCircle }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5">
                      <item.icon size={15} className="text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{item.text}</span>
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
              <div className="relative p-10 rounded-[2rem] bg-gradient-to-br from-purple-50/50 via-orange-50/30 to-pink-50/50 dark:from-purple-500/5 dark:via-orange-500/5 dark:to-pink-500/5 border border-purple-200/50 dark:border-purple-500/20 backdrop-blur-2xl shadow-lg overflow-hidden">
                {/* Subtle glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/40 to-transparent dark:from-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200/40 to-transparent dark:from-pink-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 via-orange-500 to-pink-500 flex items-center justify-center shadow-sm">
                      <Sparkles className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">ALVIO Workflows</h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    <strong className="text-gray-900 dark:text-white font-semibold">Prompt-based creation.</strong> Describe what you want, AI builds and connects everything.
                  </p>

                  <div className="space-y-2.5">
                    {[
                      { text: 'Write what you want in plain English', icon: MessageSquare, color: 'purple' },
                      { text: 'AI designs the entire flow for you', icon: Brain, color: 'orange' },
                      { text: 'Integrations auto-connected & configured', icon: Zap, color: 'pink' },
                      { text: 'Refine with follow-up prompts', icon: Wand2, color: 'purple' }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl bg-white/70 dark:bg-white/5 border ${
                        item.color === 'purple' ? 'border-purple-200 dark:border-purple-500/20' :
                        item.color === 'orange' ? 'border-orange-200 dark:border-orange-500/20' :
                        'border-pink-200 dark:border-pink-500/20'
                      }`}>
                        <item.icon size={15} className={
                          item.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          item.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                          'text-pink-600 dark:text-pink-400'
                        } />
                        <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">{item.text}</span>
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
      <Section className="py-28 relative bg-white dark:bg-black">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
                Powered by Intelligence
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Workflows that understand your business context and adapt intelligently.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: '200+ Integrations',
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
              <FadeIn key={i} delay={i * 50}>
                <div className={`group relative p-8 rounded-[2rem] border backdrop-blur-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden ${
                  item.highlight
                    ? 'bg-gradient-to-br from-orange-50/80 via-pink-50/50 to-purple-50/80 dark:from-orange-500/10 dark:via-pink-500/5 dark:to-purple-500/10 border-orange-200/50 dark:border-orange-500/20 shadow-lg hover:shadow-xl'
                    : 'bg-white/70 dark:from-white/[0.03] border-gray-200 dark:border-white/10 hover:shadow-lg'
                }`}>
                  {item.highlight && (
                    <>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-transparent dark:from-orange-500/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/40 to-transparent dark:from-pink-500/20 rounded-full blur-3xl"></div>
                    </>
                  )}

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300 ${
                      item.highlight
                        ? 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500'
                        : item.color === 'pink'
                        ? 'bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-500/20 dark:to-pink-500/10'
                        : item.color === 'purple'
                        ? 'bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-500/20 dark:to-purple-500/10'
                        : item.color === 'blue'
                        ? 'bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/10'
                        : 'bg-gradient-to-br from-green-100 to-green-50 dark:from-green-500/20 dark:to-green-500/10'
                    }`}>
                      <item.icon className={
                        item.highlight ? 'text-white' :
                        item.color === 'pink' ? 'text-pink-600 dark:text-pink-400' :
                        item.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                        item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        'text-green-600 dark:text-green-400'
                      } size={26} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-black dark:via-purple-950/10 dark:to-black">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-7 leading-[1.1]">
              Stop building flowcharts.<br />
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                Start describing workflows.
              </span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed">
              Your business logic in plain English. AI handles the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
                Create Your First Workflow
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300">
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
