import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Zap, GitBranch, Clock, Sparkles, Play,
  CheckCircle2, ArrowRight, AlertCircle, Mail,
  Database, FileText, MessageSquare, Calendar,
  Users, RefreshCw, Target, Workflow
} from 'lucide-react';

export const AgentsPage: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'lead' | 'support' | 'onboarding'>('lead');

  const workflows = {
    lead: {
      title: 'Lead Qualification',
      desc: 'Automatically qualify and route new leads',
      steps: ['New lead arrives', 'Check company size & industry', 'Enrich with data', 'Score lead', 'Assign to rep', 'Send welcome email']
    },
    support: {
      title: 'Support Ticket Triage',
      desc: 'Route tickets to the right team instantly',
      steps: ['Ticket created', 'Analyze content', 'Check priority', 'Find similar issues', 'Route to team', 'Notify customer']
    },
    onboarding: {
      title: 'Customer Onboarding',
      desc: 'Guide new customers through setup',
      steps: ['Customer signs up', 'Send welcome email', 'Create workspace', 'Schedule kickoff', 'Assign success manager', 'Track progress']
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-purple/20 bg-accent-purple/5 backdrop-blur-md">
              <Zap size={12} className="text-accent-purple" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-purple">Workflow Agents</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Automate Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-blue-500 to-accent-pink">Without Flowcharts</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Just describe what should happen. ALVIO's AI agents build and run complex workflows—no coding or diagram drawing required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Create Your First Agent
                <Sparkles size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-[#050505] py-24 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                The Automation Problem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Traditional automation tools require technical expertise and break easily.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GitBranch,
                title: 'Complex Builders',
                desc: 'Drag-and-drop tools still require understanding logic and flow diagrams.',
                color: 'gray'
              },
              {
                icon: AlertCircle,
                title: 'Brittle Workflows',
                desc: 'One API change breaks everything. Constant maintenance required.',
                color: 'gray'
              },
              {
                icon: Sparkles,
                title: 'ALVIO Agents',
                desc: 'Describe what you want. AI handles the complexity and adapts to changes.',
                color: 'accent-purple'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`relative p-6 rounded-2xl border transition-all ${
                  item.color === 'accent-purple'
                    ? 'bg-gradient-to-br from-accent-purple/10 to-blue-500/10 border-accent-purple/30'
                    : 'bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/10'
                }`}>
                  <div className={`w-12 h-12 rounded-xl ${
                    item.color === 'accent-purple'
                      ? 'bg-accent-purple/20 border-accent-purple/30'
                      : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10'
                  } border flex items-center justify-center mb-4`}>
                    <item.icon className={item.color === 'accent-purple' ? 'text-accent-purple' : 'text-gray-500 dark:text-gray-400'} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                How ALVIO Agents Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Building workflows is as simple as describing what should happen when something triggers.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple font-bold">1</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Describe the Workflow</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Tell ALVIO what should happen in plain English. No need to map out every step or decision point.
                </p>
                <div className="space-y-3">
                  {[
                    'Define the trigger (when should it start?)',
                    'Explain what should happen',
                    'Mention any conditions or rules'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent-purple mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-blue-500/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs">
                    <MessageSquare size={16} />
                    <span>Tell ALVIO what to do</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <p className="text-white text-sm leading-relaxed">
                      "When a new lead fills out our contact form, check if their company has more than 100 employees. If yes, immediately notify the sales team and create a high-priority deal in Salesforce."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-accent-purple text-sm">
                    <Sparkles size={16} className="animate-pulse" />
                    <span>Building workflow...</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 p-8 aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-lg bg-gray-400 dark:bg-white" />
                  </div>
                </div>
                <Workflow size={64} className="text-accent-purple relative z-10" />
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold">2</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Builds the Flow</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  ALVIO's AI interprets your description and constructs the entire workflow logic, including all decision points, data fetching, and actions.
                </p>
                <ul className="space-y-3">
                  {[
                    'Automatically maps out all steps',
                    'Handles edge cases and errors',
                    'Optimizes for reliability and speed'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-accent-pink font-bold">3</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Runs Automatically</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Once activated, your agent monitors for triggers and executes workflows instantly. It adapts to changes and handles exceptions intelligently.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <RefreshCw className="text-accent-pink" size={20} />
                      <span className="font-medium text-gray-900 dark:text-white">Always Running</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">24/7 monitoring and instant execution</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="text-accent-purple" size={20} />
                      <span className="font-medium text-gray-900 dark:text-white">Self-Healing</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Adapts when APIs or tools change</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 h-full min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-accent-purple/10" />
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-gray-400">Agent Active</span>
                    </div>
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1 space-y-3">
                    {[
                      { icon: Mail, text: 'Lead received: Acme Corp', time: '2m ago', status: 'complete' },
                      { icon: Database, text: 'Enriched company data', time: '2m ago', status: 'complete' },
                      { icon: CheckCircle2, text: 'Lead qualified (Score: 85)', time: '1m ago', status: 'complete' },
                      { icon: Users, text: 'Assigned to Sarah', time: 'just now', status: 'active' }
                    ].map((log, i) => (
                      <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                        log.status === 'active' ? 'bg-accent-pink/20 border border-accent-pink/30' : 'bg-white/5'
                      }`}>
                        <log.icon size={16} className={log.status === 'active' ? 'text-accent-pink' : 'text-gray-500'} />
                        <div className="flex-1">
                          <p className="text-sm text-white">{log.text}</p>
                          <p className="text-xs text-gray-500">{log.time}</p>
                        </div>
                        {log.status === 'complete' && <CheckCircle2 size={16} className="text-green-500" />}
                        {log.status === 'active' && <div className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-[#050505] py-24 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Common Workflows
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See how teams automate their most repetitive tasks with ALVIO Agents.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.entries(workflows).map(([key, wf]) => (
              <button
                key={key}
                onClick={() => setActiveFlow(key as any)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeFlow === key
                    ? 'bg-accent-purple text-white shadow-lg'
                    : 'bg-white dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-accent-purple/30'
                }`}
              >
                {wf.title}
              </button>
            ))}
          </div>

          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {workflows[activeFlow].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {workflows[activeFlow].desc}
                </p>
                <div className="bg-white dark:bg-white/[0.03] rounded-xl p-6 border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-accent-purple text-sm font-medium">
                    <Play size={16} />
                    <span>Workflow Steps</span>
                  </div>
                  <div className="space-y-3">
                    {workflows[activeFlow].steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center flex-shrink-0 text-xs font-medium text-accent-purple">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 p-8 overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 p-8">
                  {workflows[activeFlow].steps.slice(0, 4).map((_, i) => (
                    <div key={i} className="w-full flex items-center gap-4">
                      <div className="flex-1 h-12 rounded-lg bg-gray-300 dark:bg-white/10 flex items-center px-4">
                        <div className="h-2 w-3/4 bg-gray-400 dark:bg-white/20 rounded" />
                      </div>
                      {i < 3 && <ArrowRight className="text-gray-400 dark:text-white/40" size={20} />}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-accent-purple/20 to-transparent">
                  <GitBranch size={48} className="text-accent-purple opacity-50" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Why ALVIO Agents Are Different
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                More intelligent, more reliable, and infinitely easier to build.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Natural Language',
                desc: 'Describe workflows in plain English. No visual builders or code required.'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                desc: 'Agents understand intent and adapt to changes automatically.'
              },
              {
                icon: RefreshCw,
                title: 'Self-Healing',
                desc: 'When APIs change, agents adjust without breaking.'
              },
              {
                icon: Target,
                title: 'Context Aware',
                desc: 'Access all your organization\'s data to make smart decisions.'
              },
              {
                icon: CheckCircle2,
                title: 'Error Handling',
                desc: 'Built-in retry logic and fallback paths for reliability.'
              },
              {
                icon: Clock,
                title: 'Real-time Execution',
                desc: 'Workflows run instantly when triggered, not on schedules.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-purple/30 transition-all">
                  <item.icon className="text-accent-purple mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
              Ready to automate your workflows?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop spending time on repetitive tasks. Let ALVIO Agents handle the work so your team can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Create Your First Agent
              </Button>
              <Button variant="outline" size="lg">
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
