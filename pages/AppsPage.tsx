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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-orange/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-pink/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-orange/20 bg-accent-orange/5 backdrop-blur-md">
              <Layout size={12} className="text-accent-orange" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-orange">ALVIO Apps</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Build Apps by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple">Describing Them</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              No code. No designers. Just tell ALVIO what you need and watch it build custom applications connected to your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Start Building
                <Sparkles size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                See Examples
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
                Why Build Custom Apps?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                <div className={`relative p-6 rounded-2xl border transition-all ${
                  item.color === 'accent-orange'
                    ? 'bg-gradient-to-br from-accent-orange/10 to-accent-pink/10 border-accent-orange/30'
                    : 'bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/10'
                }`}>
                  <div className={`w-12 h-12 rounded-xl ${
                    item.color === 'accent-orange'
                      ? 'bg-accent-orange/20 border-accent-orange/30'
                      : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10'
                  } border flex items-center justify-center mb-4`}>
                    <item.icon className={item.color === 'accent-orange' ? 'text-accent-orange' : 'text-gray-500 dark:text-gray-400'} size={24} />
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
                How It Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Building apps with ALVIO is as simple as describing what you need.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange font-bold">1</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Describe What You Need</h3>
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
              <div className="relative rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-accent-pink/5" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs">
                    <MessageSquare size={16} />
                    <span>Chat with ALVIO</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <p className="text-white text-sm leading-relaxed">
                      "Build me a sales dashboard that shows this month's revenue, pipeline value, and conversion rates. Pull data from Salesforce and display it with charts."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-accent-orange text-sm">
                    <Sparkles size={16} className="animate-pulse" />
                    <span>ALVIO is building your app...</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 p-8 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-20">
                  <div className="rounded-lg bg-gray-400 dark:bg-white" />
                  <div className="rounded-lg bg-gray-400 dark:bg-white col-span-2" />
                  <div className="rounded-lg bg-gray-400 dark:bg-white col-span-2 row-span-2" />
                  <div className="rounded-lg bg-gray-400 dark:bg-white" />
                  <div className="rounded-lg bg-gray-400 dark:bg-white col-span-3" />
                </div>
                <Wand2 size={64} className="text-accent-orange relative z-10" />
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-accent-pink font-bold">2</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Builds the Interface</h3>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple font-bold">3</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Connects to Your Data</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  The app automatically connects to your existing data sources. Everything stays in sync. Changes in your tools reflect instantly in the app.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="text-accent-purple" size={20} />
                      <span className="font-medium text-gray-900 dark:text-white">Live Data Connection</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Always shows current information from your systems</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="text-accent-orange" size={20} />
                      <span className="font-medium text-gray-900 dark:text-white">Real-time Sync</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Updates automatically when data changes</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-orange/10" />
                <div className="relative grid grid-cols-3 gap-4 w-full max-w-sm">
                  {['Salesforce', 'Database', 'Stripe', 'Google Drive', 'Slack', 'API'].map((source, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-[10px] text-gray-300 text-center px-2">{source}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full bg-accent-purple/20 blur-3xl" />
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
                What Can You Build?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Teams use ALVIO Apps to create custom solutions for their unique needs.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(examples).map(([key, ex]) => (
              <button
                key={key}
                onClick={() => setActiveExample(key as any)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeExample === key
                    ? 'bg-accent-orange text-white shadow-lg'
                    : 'bg-white dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-accent-orange/30'
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
                <div className="bg-white dark:bg-white/[0.03] rounded-xl p-6 border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-3 text-accent-orange text-sm font-medium">
                    <MessageSquare size={16} />
                    <span>Example Prompt</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
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

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Built-In AI Assistant
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Every app you build includes an intelligent assistant that helps users interact with your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Natural Conversations',
                desc: 'Users can ask questions about data instead of clicking through menus.'
              },
              {
                icon: Sparkles,
                title: 'Smart Suggestions',
                desc: 'AI recommends actions and insights based on the current context.'
              },
              {
                icon: Zap,
                title: 'Quick Actions',
                desc: 'Common tasks can be completed by just asking the assistant.'
              },
              {
                icon: Globe,
                title: 'Works Anywhere',
                desc: 'Apps work on desktop, tablet, and mobile automatically.'
              },
              {
                icon: Layers,
                title: 'Customizable',
                desc: 'Modify and extend apps anytime by talking to ALVIO.'
              },
              {
                icon: Database,
                title: 'Secure by Default',
                desc: 'All apps respect existing permissions and access controls.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-orange/30 transition-all">
                  <item.icon className="text-accent-orange mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 via-transparent to-accent-pink/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
              Ready to build your first app?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Start creating custom applications that perfectly fit your workflows—in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Start Building Free
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
