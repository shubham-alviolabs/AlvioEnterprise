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
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/20 to-pink-50/30 dark:from-black dark:via-[#0a0505] dark:to-[#050a0a] text-gray-900 dark:text-white transition-colors duration-700">
      <Navbar />

      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-purple/20 via-accent-pink/15 to-transparent blur-[200px] rounded-full pointer-events-none animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-orange/20 via-accent-pink/10 to-transparent blur-[180px] rounded-full pointer-events-none animate-blob-delay" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-purple/30 bg-gradient-to-r from-accent-purple/10 via-accent-pink/10 to-accent-purple/10 backdrop-blur-xl shadow-lg shadow-accent-purple/10">
              <Zap size={14} className="text-accent-purple animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple bg-clip-text text-transparent">Workflow Agents</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Automate Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple">Without Flowcharts</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Just describe what should happen. ALVIO's AI agents build and run complex workflows—no coding or diagram drawing required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group rounded-full shadow-2xl shadow-accent-purple/30 hover:shadow-accent-pink/40 transition-all duration-500 hover:scale-105">
                Create Your First Agent
                <Sparkles size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white/50 via-pink-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-pink/[0.02] dark:to-white/[0.02] py-24 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                The Automation Problem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
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
                <div className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
                  item.color === 'accent-purple'
                    ? 'bg-gradient-to-br from-accent-purple/10 via-accent-pink/10 to-accent-orange/10 border-accent-purple/40 shadow-2xl shadow-accent-purple/20 backdrop-blur-xl'
                    : 'bg-white/60 dark:bg-white/[0.03] border-gray-200/50 dark:border-white/10 backdrop-blur-2xl hover:bg-white/80 dark:hover:bg-white/[0.05] hover:shadow-xl'
                }`}>
                  <div className={`w-14 h-14 rounded-2xl ${
                    item.color === 'accent-purple'
                      ? 'bg-gradient-to-br from-accent-purple/30 to-accent-pink/30 border-accent-purple/50 shadow-lg shadow-accent-purple/30'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 border-gray-300 dark:border-white/20'
                  } border-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={item.color === 'accent-purple' ? 'text-accent-purple' : 'text-gray-600 dark:text-gray-400'} size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                How ALVIO Agents Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Building workflows is as simple as describing what should happen when something triggers.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border-2 border-accent-purple/40 flex items-center justify-center text-accent-purple font-bold text-lg shadow-lg shadow-accent-purple/20">1</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Describe the Workflow</h3>
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
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-[#1A0A1A] border border-white/20 p-8 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-pink/10 to-accent-orange/10 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5 text-gray-400 text-xs font-medium">
                    <MessageSquare size={18} />
                    <span>Tell ALVIO what to do</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-lg">
                    <p className="text-white text-sm sm:text-base leading-relaxed font-light">
                      "When a new lead fills out our contact form, check if their company has more than 100 employees. If yes, immediately notify the sales team and create a high-priority deal in Salesforce."
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-accent-purple text-sm font-medium">
                    <Sparkles size={18} className="animate-pulse" />
                    <span>Building workflow...</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-50 via-pink-50/50 to-orange-50/50 dark:from-white/[0.05] dark:via-accent-pink/[0.03] dark:to-accent-orange/[0.03] border-2 border-gray-200/50 dark:border-white/10 p-8 aspect-square flex items-center justify-center overflow-hidden backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                    <ArrowRight className="text-gray-400 dark:text-white" />
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink/10 via-transparent to-accent-purple/10 rounded-3xl" />
                <Workflow size={72} className="text-accent-pink relative z-10 drop-shadow-2xl" />
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-orange/20 border-2 border-accent-pink/40 flex items-center justify-center text-accent-pink font-bold text-lg shadow-lg shadow-accent-pink/20">2</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">AI Builds the Flow</h3>
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 border-2 border-accent-orange/40 flex items-center justify-center text-accent-orange font-bold text-lg shadow-lg shadow-accent-orange/20">3</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Runs Automatically</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Once activated, your agent monitors for triggers and executes workflows instantly. It adapts to changes and handles exceptions intelligently.
                </p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-pink-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-pink/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-pink/10 flex items-center justify-center">
                        <RefreshCw className="text-accent-pink" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">Always Running</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">24/7 monitoring and instant execution</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 flex items-center justify-center">
                        <Target className="text-accent-purple" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">Self-Healing</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">Adapts when APIs or tools change</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#1A0512] to-[#0A0A0A] border-2 border-white/20 p-8 h-full min-h-[400px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/15 via-accent-orange/10 to-accent-purple/15 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                      <span className="text-sm text-green-400 font-medium">Agent Active</span>
                    </div>
                    <Clock size={18} className="text-gray-500" />
                  </div>
                  <div className="flex-1 space-y-3">
                    {[
                      { icon: Mail, text: 'Lead received: Acme Corp', time: '2m ago', status: 'complete' },
                      { icon: Database, text: 'Enriched company data', time: '2m ago', status: 'complete' },
                      { icon: CheckCircle2, text: 'Lead qualified (Score: 85)', time: '1m ago', status: 'complete' },
                      { icon: Users, text: 'Assigned to Sarah', time: 'just now', status: 'active' }
                    ].map((log, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl transition-all duration-300 ${
                        log.status === 'active'
                          ? 'bg-gradient-to-r from-accent-pink/20 via-accent-orange/20 to-accent-pink/20 border-2 border-accent-pink/40 shadow-lg shadow-accent-pink/20 scale-[1.02]'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          log.status === 'active' ? 'bg-accent-pink/30' : 'bg-white/10'
                        }`}>
                          <log.icon size={16} className={log.status === 'active' ? 'text-accent-pink' : 'text-gray-400'} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white font-medium">{log.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{log.time}</p>
                        </div>
                        {log.status === 'complete' && <CheckCircle2 size={18} className="text-green-500" />}
                        {log.status === 'active' && <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse shadow-lg shadow-accent-pink/50" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white/50 via-orange-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-orange/[0.02] dark:to-white/[0.02] py-24 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Common Workflows
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                See how teams automate their most repetitive tasks with ALVIO Agents.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {Object.entries(workflows).map(([key, wf]) => (
              <button
                key={key}
                onClick={() => setActiveFlow(key as any)}
                className={`px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeFlow === key
                    ? 'bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange text-white shadow-2xl shadow-accent-purple/40 scale-105'
                    : 'bg-white/70 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-accent-purple/40 hover:bg-white dark:hover:bg-white/[0.08] backdrop-blur-xl hover:scale-105'
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
                <div className="bg-white/70 dark:bg-white/[0.05] rounded-3xl p-8 border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-xl">
                  <div className="flex items-center gap-2 mb-6 text-accent-purple text-sm font-bold">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 flex items-center justify-center">
                      <Play size={16} />
                    </div>
                    <span>Workflow Steps</span>
                  </div>
                  <div className="space-y-3">
                    {workflows[activeFlow].steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border-2 border-accent-purple/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-accent-purple group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-purple/10">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 pt-1 font-light">{step}</p>
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

      <Section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Why ALVIO Agents Are Different
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                More intelligent, more reliable, and infinitely easier to build.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Natural Language',
                desc: 'Describe workflows in plain English. No visual builders or code required.',
                color: 'purple'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                desc: 'Agents understand intent and adapt to changes automatically.',
                color: 'pink'
              },
              {
                icon: RefreshCw,
                title: 'Self-Healing',
                desc: 'When APIs change, agents adjust without breaking.',
                color: 'orange'
              },
              {
                icon: Target,
                title: 'Context Aware',
                desc: 'Access all your organization\'s data to make smart decisions.',
                color: 'purple'
              },
              {
                icon: CheckCircle2,
                title: 'Error Handling',
                desc: 'Built-in retry logic and fallback paths for reliability.',
                color: 'pink'
              },
              {
                icon: Clock,
                title: 'Real-time Execution',
                desc: 'Workflows run instantly when triggered, not on schedules.',
                color: 'orange'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`group relative p-8 rounded-3xl bg-gradient-to-br ${
                  item.color === 'purple' ? 'from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05]' :
                  item.color === 'pink' ? 'from-white/70 via-pink-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-pink/[0.05] dark:to-white/[0.05]' :
                  'from-white/70 via-orange-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-orange/[0.05] dark:to-white/[0.05]'
                } border border-gray-200 dark:border-white/10 backdrop-blur-2xl hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl`}>
                  <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${
                    item.color === 'purple' ? 'bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 shadow-accent-purple/20' :
                    item.color === 'pink' ? 'bg-gradient-to-br from-accent-pink/20 to-accent-pink/10 shadow-accent-pink/20' :
                    'bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 shadow-accent-orange/20'
                  }`}>
                    <item.icon className={
                      item.color === 'purple' ? 'text-accent-purple' :
                      item.color === 'pink' ? 'text-accent-pink' :
                      'text-accent-orange'
                    } size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-pink/10 to-accent-orange/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Ready to automate your workflows?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Stop spending time on repetitive tasks. Let ALVIO Agents handle the work so your team can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="rounded-full shadow-2xl shadow-accent-purple/30 hover:shadow-accent-pink/40 transition-all duration-500 hover:scale-105">
                Create Your First Agent
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
