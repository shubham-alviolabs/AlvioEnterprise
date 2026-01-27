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
      desc: 'Real-time metrics with live database connections',
      prompt: '"Build an analytics dashboard showing revenue, user growth, and KPIs. Connect to Stripe API and our PostgreSQL database. Include charts, filters, and export features."',
      features: ['Live database queries', 'API integrations', 'Interactive charts', 'Real-time updates']
    },
    crm: {
      title: 'Custom CRM',
      desc: 'Full-stack sales management system',
      prompt: '"Create a CRM with contact management, deal pipeline, and email automation. Store data in PostgreSQL, integrate with Gmail API, and add custom fields for our workflow."',
      features: ['Database schema creation', 'Email integration', 'Custom workflows', 'Team collaboration']
    },
    portal: {
      title: 'Customer Portal',
      desc: 'Consumer-facing self-service app',
      prompt: '"Build a customer portal with authentication, order tracking, and support tickets. Connect to our database, Stripe for billing, and Zendesk API for support."',
      features: ['User authentication', 'Database CRUD', 'Payment processing', 'Third-party APIs']
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
              Build Full-Stack Apps<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple">In Minutes, Not Months</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              From internal dashboards to consumer apps—complete with databases, APIs, and beautiful interfaces. Just describe what you need.
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
                title: 'Off-The-Shelf SaaS',
                desc: 'Generic solutions that don\'t fit your workflow. Limited customization, expensive per seat.',
                color: 'gray'
              },
              {
                icon: Code,
                title: 'Custom Development',
                desc: 'Hire engineers, wait 6+ months, spend $100K+. Maintenance costs pile up forever.',
                color: 'gray'
              },
              {
                icon: Sparkles,
                title: 'ALVIO Apps',
                desc: 'Full-stack applications in minutes. Database, APIs, UI—all generated. Your exact requirements.',
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
                <div className="space-y-4">
                  {[
                    { title: 'Define the App', desc: 'Internal tool or customer-facing product?' },
                    { title: 'Specify Integrations', desc: 'Which databases, APIs, and services to connect' },
                    { title: 'Describe Features', desc: 'Authentication, payments, notifications, etc.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={14} className="text-accent-orange" />
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-light">{item.desc}</div>
                      </div>
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
                      "Build a sales analytics dashboard with charts showing monthly revenue, pipeline value, and conversion rates. Connect to our PostgreSQL database and Salesforce API. Include filters by team and date range. Add user authentication with team-based access."
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
                  ALVIO generates the complete application: database schema, API endpoints, authentication, and a beautiful responsive interface.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Database Schema', desc: 'Tables, relationships, and migrations' },
                    { title: 'Backend APIs', desc: 'CRUD endpoints, authentication, business logic' },
                    { title: 'Frontend UI', desc: 'Modern, responsive, accessible interfaces' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={14} className="text-accent-pink" />
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-semibold">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-light">{item.desc}</div>
                      </div>
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
                  Apps connect to any database, API, or service. PostgreSQL, MySQL, Stripe, Twilio, SendGrid—if it has an API, ALVIO can integrate it.
                </p>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-purple-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-purple/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 flex items-center justify-center">
                        <Database className="text-accent-purple" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">Any Database</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">PostgreSQL, MySQL, MongoDB—or let ALVIO create one</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-white/70 via-orange-50/50 to-white/70 dark:from-white/[0.05] dark:via-accent-orange/[0.05] dark:to-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 flex items-center justify-center">
                        <Zap className="text-accent-orange" size={20} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">API Integrations</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light pl-13">Connect to Stripe, Twilio, SendGrid, and 1000+ services</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#120A1A] to-[#0A0A0A] border-2 border-white/20 p-8 h-full flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/15 via-accent-orange/10 to-accent-pink/15 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />
                <div className="relative grid grid-cols-3 gap-3 w-full max-w-sm">
                  {[
                    { name: 'PostgreSQL', icon: '🐘' },
                    { name: 'Stripe', icon: '💳' },
                    { name: 'Twilio', icon: '📱' },
                    { name: 'SendGrid', icon: '✉️' },
                    { name: 'Slack', icon: '💬' },
                    { name: 'REST API', icon: '🔌' }
                  ].map((source, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/30 flex flex-col items-center justify-center backdrop-blur-md hover:scale-110 hover:bg-white/20 hover:border-accent-purple/50 transition-all duration-300 shadow-lg group">
                      <span className="text-2xl mb-1">{source.icon}</span>
                      <span className="text-[9px] text-gray-300 font-medium text-center px-1 opacity-80 group-hover:opacity-100">{source.name}</span>
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
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {examples[activeExample].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {examples[activeExample].desc}
                </p>

                <div className="bg-white/70 dark:bg-white/[0.05] rounded-3xl p-8 border border-gray-200 dark:border-white/10 backdrop-blur-2xl shadow-xl mb-6">
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

                <div className="space-y-3">
                  <div className="text-sm font-bold text-gray-900 dark:text-white mb-3">What Gets Generated:</div>
                  {examples[activeExample].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent-orange flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-gray-50 via-orange-50/30 to-pink-50/30 dark:from-white/[0.08] dark:via-accent-orange/[0.05] dark:to-accent-pink/[0.05] border-2 border-gray-200 dark:border-white/20 p-6 overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Mock App Interface */}
                <div className="absolute inset-0 p-6">
                  {/* Header bar */}
                  <div className="h-10 rounded-t-2xl bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-white/20 dark:to-white/10 border-b border-gray-300 dark:border-white/20 flex items-center px-4 gap-2 backdrop-blur-xl">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 h-5 rounded bg-gray-300/50 dark:bg-white/5 ml-4" />
                  </div>

                  {/* Content area */}
                  <div className="h-[calc(100%-2.5rem)] rounded-b-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border-x border-b border-gray-300 dark:border-white/20 p-4 grid grid-cols-3 gap-3">
                    {/* Sidebar */}
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`h-6 rounded-lg ${i === 0 ? 'bg-gradient-to-r from-accent-orange/30 to-accent-pink/30' : 'bg-gray-200 dark:bg-white/10'}`} />
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="col-span-2 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 border border-accent-purple/30" />
                        <div className="h-16 rounded-lg bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 border border-accent-orange/30" />
                      </div>
                      <div className="h-24 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-white/10 dark:to-white/5" />
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
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
                icon: Database,
                title: 'Database Management',
                desc: 'Create tables, relationships, and migrations. PostgreSQL, MySQL, or MongoDB.',
                color: 'purple'
              },
              {
                icon: Code,
                title: 'API Generation',
                desc: 'RESTful endpoints, authentication, validation—all generated automatically.',
                color: 'orange'
              },
              {
                icon: Palette,
                title: 'Modern UI',
                desc: 'Beautiful, responsive interfaces that work on any device.',
                color: 'pink'
              },
              {
                icon: Lock,
                title: 'Built-in Auth',
                desc: 'User authentication, roles, permissions, and session management.',
                color: 'purple'
              },
              {
                icon: Zap,
                title: 'Third-Party APIs',
                desc: 'Integrate Stripe, Twilio, SendGrid, and thousands of other services.',
                color: 'orange'
              },
              {
                icon: Layers,
                title: 'Fully Editable',
                desc: 'Modify and extend your app anytime. It\'s your code, your infrastructure.',
                color: 'pink'
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
              Ship Production Apps Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              From idea to deployed full-stack application in minutes. Complete with database, APIs, authentication, and a beautiful interface.
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
