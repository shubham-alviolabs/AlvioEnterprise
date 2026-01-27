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

      {/* Hero Section */}
      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-pink/20 via-accent-orange/15 to-transparent blur-[200px] rounded-full pointer-events-none animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-purple/20 via-accent-pink/10 to-transparent blur-[180px] rounded-full pointer-events-none animate-blob-delay" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-pink/30 bg-gradient-to-r from-accent-pink/10 via-accent-orange/10 to-accent-pink/10 backdrop-blur-xl shadow-lg shadow-accent-pink/10">
              <Workflow size={14} className="text-accent-pink animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] bg-gradient-to-r from-accent-pink via-accent-orange to-accent-pink bg-clip-text text-transparent">ALVIO Workflows</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Just Describe It.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-accent-orange to-accent-purple">AI Builds The Workflow.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              No flowcharts. No node connections. No engineering knowledge required. Describe your workflow in plain English—ALVIO creates it, connects your tools, and handles the logic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group rounded-full shadow-2xl shadow-accent-pink/30 hover:shadow-accent-orange/40 transition-all duration-500 hover:scale-105">
                Create Workflow
                <Sparkles size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                See Examples
              </Button>
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

                {/* Visual Mockup */}
                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-300 dark:border-white/10">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Typical Workflow Builder:</div>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    {['Trigger', 'Filter', 'API Call', 'Condition', 'Action'].map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="px-3 py-2 rounded-lg bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/20 text-[10px] font-mono text-gray-700 dark:text-gray-300">
                          {node}
                        </div>
                        {i < 4 && <ArrowRight size={12} className="text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-3 text-[10px] text-center text-gray-500 dark:text-gray-400 italic">You need to wire all this together manually</div>
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

                  {/* Prompt Example */}
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 dark:from-white/[0.08] dark:to-white/[0.04] border-2 border-accent-orange/30 backdrop-blur-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center">
                        <MessageSquare size={12} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">Example Prompt:</span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "When a high-value Salesforce deal goes quiet for 2 weeks, check Gmail and Fireflies for context, then alert me on Slack."
                    </p>
                    <div className="mt-3 pt-3 border-t border-accent-orange/20 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span className="text-[10px] text-gray-600 dark:text-gray-400">✨ That's it. AI builds everything.</span>
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

          {/* Prompt to Workflow Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-3xl bg-gradient-to-br from-white/70 via-pink-50/50 to-white/70 dark:from-white/[0.08] dark:via-accent-pink/[0.05] dark:to-white/[0.08] border-2 border-gray-200 dark:border-white/20 p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink to-accent-orange flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Prompt</h3>
                </div>

                <div className="relative p-5 rounded-2xl bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-white/20 min-h-[200px] font-light">
                  <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                    {promptText}
                    <span className="inline-block w-0.5 h-4 bg-accent-pink animate-cursor-blink ml-1" />
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-pink/20 to-accent-orange/20 border border-accent-pink/30">
                    <Sparkles size={14} className="text-accent-pink animate-pulse" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">AI Processing...</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-3xl bg-gradient-to-br from-white/70 via-orange-50/50 to-white/70 dark:from-white/[0.08] dark:via-accent-orange/[0.05] dark:to-white/[0.08] border-2 border-gray-200 dark:border-white/20 p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center">
                    <Workflow size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Generated Workflow</h3>
                </div>

                <div className="space-y-3">
                  {workflows[activeWorkflow].steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xs font-bold text-accent-orange">{i + 1}</span>
                      </div>
                      <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">{step}</span>
                      <CheckCircle2 size={16} className="text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {workflows[activeWorkflow].integrations.map((integration, i) => (
                    <div key={i} className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-white/90 to-white/70 dark:from-white/10 dark:to-white/5 border border-accent-orange/30 text-xs font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-xl hover:scale-105 transition-transform duration-300 shadow-sm">
                      {integration}
                    </div>
                  ))}
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

                {/* Workflow Visualization */}
                <div className="relative">
                  <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-white/[0.08] dark:to-white/[0.04] border-2 border-gray-200 dark:border-white/20 p-6 overflow-hidden">
                    <div className="space-y-4">
                      {workflows[activeWorkflow].integrations.map((integration, i) => (
                        <div
                          key={i}
                          className="relative"
                        >
                          <div className={`p-4 rounded-xl border-2 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 ${
                            i === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-300 dark:border-blue-600/40' :
                            i === 1 ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-300 dark:border-green-600/40' :
                            i === 2 ? 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-300 dark:border-purple-600/40' :
                            'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-300 dark:border-orange-600/40'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                i === 0 ? 'bg-blue-500/20' :
                                i === 1 ? 'bg-green-500/20' :
                                i === 2 ? 'bg-purple-500/20' :
                                'bg-orange-500/20'
                              }`}>
                                <Globe size={18} className={
                                  i === 0 ? 'text-blue-600 dark:text-blue-400' :
                                  i === 1 ? 'text-green-600 dark:text-green-400' :
                                  i === 2 ? 'text-purple-600 dark:text-purple-400' :
                                  'text-orange-600 dark:text-orange-400'
                                } />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900 dark:text-white">{integration}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">{workflows[activeWorkflow].steps[i]}</div>
                              </div>
                            </div>
                          </div>
                          {i < workflows[activeWorkflow].integrations.length - 1 && (
                            <div className="flex justify-center py-2">
                              <ArrowRight size={20} className="text-gray-400 rotate-90" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* AI Badge */}
                    <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-accent-pink to-accent-orange shadow-lg flex items-center gap-2">
                      <Bot size={14} className="text-white" />
                      <span className="text-xs font-bold text-white">AI-Powered</span>
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
