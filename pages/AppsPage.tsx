import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Layout, Sparkles, Code, Palette, Database,
  Zap, MessageSquare, ArrowRight, CheckCircle2,
  Layers, Box, Wand2, Globe, Smartphone
} from 'lucide-react';

export const AppsPage: React.FC = () => {
  const [activeExample, setActiveExample] = useState<'dashboard' | 'crm' | 'portal'>('dashboard');

  const examples = {
    dashboard: {
      title: 'Analytics Dashboard',
      desc: 'Real-time metrics from all your data sources',
      prompt: '"Build me a dashboard that shows our key metrics: revenue, user growth, and customer satisfaction. Pull data from Stripe, our database, and support tickets."'
    },
    crm: {
      title: 'Custom CRM',
      desc: 'Tailored to your sales process',
      prompt: '"Create a CRM that tracks deals through our 5-stage process. Include automated follow-ups and integrate with our email and calendar."'
    },
    portal: {
      title: 'Customer Portal',
      desc: 'Self-service hub for your customers',
      prompt: '"Build a customer portal where users can check order status, download invoices, and submit support tickets. Connect to our order database and Zendesk."'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-orange-50/30 dark:from-black dark:via-[#050a0a] dark:to-[#0a0505] text-gray-900 dark:text-white transition-colors duration-700">
      <Navbar />

      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-orange/20 via-accent-pink/15 to-transparent blur-[200px] rounded-full pointer-events-none animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-purple/20 via-accent-pink/10 to-transparent blur-[180px] rounded-full pointer-events-none animate-blob-delay" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent-orange/30 bg-gradient-to-r from-accent-orange/10 via-accent-pink/10 to-accent-orange/10 backdrop-blur-xl shadow-lg shadow-accent-orange/10">
              <Layout size={14} className="text-accent-orange animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] bg-gradient-to-r from-accent-orange via-accent-pink to-accent-orange bg-clip-text text-transparent">ALVIO Apps</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Build Apps by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple">Describing Them</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              No code. No designers. Just tell ALVIO what you need and watch it build custom applications connected to your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group rounded-full shadow-2xl shadow-accent-orange/30 hover:shadow-accent-pink/40 transition-all duration-500 hover:scale-105">
                Start Building
                <Sparkles size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full backdrop-blur-xl bg-white/10 dark:bg-white/5 border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                See Examples
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white/50 via-orange-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-orange/[0.02] dark:to-white/[0.02] py-24 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Why Build Custom Apps?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Off-the-shelf software doesn't fit your unique workflows. But custom development is expensive and slow.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Box,
                title: 'Generic Tools',
                desc: 'SaaS products force you to adapt to their way of working.',
                color: 'gray'
              },
              {
                icon: Code,
                title: 'Custom Code',
                desc: 'Building from scratch takes months and costs six figures.',
                color: 'gray'
              },
              {
                icon: Sparkles,
                title: 'ALVIO Apps',
                desc: 'Get custom apps built in minutes that perfectly fit your needs.',
                color: 'accent-orange'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
                  item.color === 'accent-orange'
                    ? 'bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 border-accent-orange/40 shadow-2xl shadow-accent-orange/20 backdrop-blur-xl'
                    : 'bg-white/60 dark:bg-white/[0.03] border-gray-200/50 dark:border-white/10 backdrop-blur-2xl hover:bg-white/80 dark:hover:bg-white/[0.05] hover:shadow-xl'
                }`}>
                  <div className={`w-14 h-14 rounded-2xl ${
                    item.color === 'accent-orange'
                      ? 'bg-gradient-to-br from-accent-orange/30 to-accent-pink/30 border-accent-orange/50 shadow-lg shadow-accent-orange/30'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 border-gray-300 dark:border-white/20'
                  } border-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={item.color === 'accent-orange' ? 'text-accent-orange' : 'text-gray-600 dark:text-gray-400'} size={26} />
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
                How It Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Building apps with ALVIO is as simple as describing what you need.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 border-2 border-accent-orange/40 flex items-center justify-center text-accent-orange font-bold text-lg shadow-lg shadow-accent-orange/20">1</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Describe What You Need</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Just tell ALVIO what the app should do. No need to draw wireframes or write specs. Use natural language like you're talking to a developer.
                </p>
                <div className="space-y-3">
                  {[
                    'Describe the functionality',
                    'Specify which data sources to connect',
                    'Mention any specific features you need'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-[#1A0A12] border border-white/20 p-8 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5 text-gray-400 text-xs font-medium">
                    <MessageSquare size={18} />
                    <span>Chat with ALVIO</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-lg">
                    <p className="text-white text-sm sm:text-base leading-relaxed font-light">
                      "Build me a sales dashboard that shows this month's revenue, pipeline value, and conversion rates. Pull data from Salesforce and display it with charts."
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-accent-orange text-sm font-medium">
                    <Sparkles size={18} className="animate-pulse" />
                    <span>ALVIO is building your app...</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-50 via-pink-50/50 to-purple-50/50 dark:from-white/[0.05] dark:via-accent-pink/[0.03] dark:to-accent-purple/[0.03] border-2 border-gray-200/50 dark:border-white/10 p-8 aspect-video flex items-center justify-center backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-15">
                  <div className="rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                  <div className="rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 col-span-2 shadow-lg" />
                  <div className="rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 col-span-2 row-span-2 shadow-lg" />
                  <div className="rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 shadow-lg" />
                  <div className="rounded-2xl bg-gradient-to-br from-gray-300 to-gray-400 dark:from-white/40 dark:to-white/20 col-span-3 shadow-lg" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 via-transparent to-accent-pink/10 rounded-3xl" />
                <Wand2 size={72} className="text-accent-orange relative z-10 drop-shadow-2xl" />
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 border-2 border-accent-pink/40 flex items-center justify-center text-accent-pink font-bold text-lg shadow-lg shadow-accent-pink/20">2</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">AI Builds the Interface</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  ALVIO's AI understands your requirements and creates a beautiful, functional interface. It handles the design, layout, and interactions automatically.
                </p>
                <ul className="space-y-3">
                  {[
                    'Generates clean, modern UI automatically',
                    'Responsive design that works everywhere',
                    'Professional look without designers'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent-pink mt-0.5 flex-shrink-0" />
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border-2 border-accent-purple/40 flex items-center justify-center text-accent-purple font-bold text-lg shadow-lg shadow-accent-purple/20">3</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Connects to Your Data</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  The app automatically connects to your existing data sources. Everything stays in sync. Changes in your tools reflect instantly in the app.
                </p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 flex items-center justify-center">
                        <Database className="text-accent-purple" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">Live Data Connection</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">Always shows current information from your systems</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-orange-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-orange/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 flex items-center justify-center">
                        <Zap className="text-accent-orange" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">Real-time Sync</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">Updates automatically when data changes</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#120A1A] to-[#0A0A0A] border-2 border-white/20 p-8 h-full flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/15 via-accent-orange/10 to-accent-pink/15 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />
                <div className="relative grid grid-cols-3 gap-4 w-full max-w-sm">
                  {['Salesforce', 'Database', 'Stripe', 'Google Drive', 'Slack', 'API'].map((source, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-white/10 border-2 border-white/30 flex items-center justify-center backdrop-blur-md hover:scale-110 hover:bg-white/20 transition-all duration-300 shadow-lg">
                      <span className="text-[10px] sm:text-xs text-gray-200 font-medium text-center px-2">{source}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-accent-purple/30 via-accent-pink/30 to-accent-orange/30 blur-3xl animate-pulse" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white/50 via-pink-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-pink/[0.02] dark:to-white/[0.02] py-24 border-t border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                What Can You Build?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Teams use ALVIO Apps to create custom solutions for their unique needs.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {Object.entries(examples).map(([key, ex]) => (
              <button
                key={key}
                onClick={() => setActiveExample(key as any)}
                className={`px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeExample === key
                    ? 'bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple text-white shadow-2xl shadow-accent-orange/40 scale-105'
                    : 'bg-white/70 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-accent-orange/40 hover:bg-white dark:hover:bg-white/[0.08] backdrop-blur-xl hover:scale-105'
                }`}
              >
                {ex.title}
              </button>
            ))}
          </div>

          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {examples[activeExample].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {examples[activeExample].desc}
                </p>
                <div className="bg-white/70 dark:bg-white/[0.05] rounded-3xl p-8 border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-xl">
                  <div className="flex items-center gap-2 mb-4 text-accent-orange text-sm font-bold">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center">
                      <MessageSquare size={16} />
                    </div>
                    <span>Example Prompt</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic font-light text-base leading-relaxed">
                    {examples[activeExample].prompt}
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 p-8">
                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                  <div className="rounded-lg bg-gray-300 dark:bg-white/10 col-span-2 h-16" />
                  <div className="rounded-lg bg-gray-300 dark:bg-white/10" />
                  <div className="rounded-lg bg-gray-300 dark:bg-white/10" />
                  <div className="rounded-lg bg-gray-300 dark:bg-white/10 col-span-2 h-24" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-accent-orange/20 to-transparent">
                  <Layout size={48} className="text-accent-orange opacity-50" />
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
                Built-In AI Assistant
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Every app you build includes an intelligent assistant that helps users interact with your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Natural Conversations',
                desc: 'Users can ask questions about data instead of clicking through menus.',
                color: 'orange'
              },
              {
                icon: Sparkles,
                title: 'Smart Suggestions',
                desc: 'AI recommends actions and insights based on the current context.',
                color: 'pink'
              },
              {
                icon: Zap,
                title: 'Quick Actions',
                desc: 'Common tasks can be completed by just asking the assistant.',
                color: 'purple'
              },
              {
                icon: Globe,
                title: 'Works Anywhere',
                desc: 'Apps work on desktop, tablet, and mobile automatically.',
                color: 'orange'
              },
              {
                icon: Layers,
                title: 'Customizable',
                desc: 'Modify and extend apps anytime by talking to ALVIO.',
                color: 'pink'
              },
              {
                icon: Database,
                title: 'Secure by Default',
                desc: 'All apps respect existing permissions and access controls.',
                color: 'purple'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`group relative p-8 rounded-3xl bg-gradient-to-br ${
                  item.color === 'orange' ? 'from-white/70 via-orange-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-orange/[0.05] dark:to-white/[0.05]' :
                  item.color === 'pink' ? 'from-white/70 via-pink-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-pink/[0.05] dark:to-white/[0.05]' :
                  'from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05]'
                } border border-gray-200 dark:border-white/10 backdrop-blur-2xl hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl`}>
                  <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${
                    item.color === 'orange' ? 'bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 shadow-accent-orange/20' :
                    item.color === 'pink' ? 'bg-gradient-to-br from-accent-pink/20 to-accent-pink/10 shadow-accent-pink/20' :
                    'bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 shadow-accent-purple/20'
                  }`}>
                    <item.icon className={
                      item.color === 'orange' ? 'text-accent-orange' :
                      item.color === 'pink' ? 'text-accent-pink' :
                      'text-accent-purple'
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Ready to build your first app?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Start creating custom applications that perfectly fit your workflows—in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="rounded-full shadow-2xl shadow-accent-orange/30 hover:shadow-accent-pink/40 transition-all duration-500 hover:scale-105">
                Start Building Free
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
