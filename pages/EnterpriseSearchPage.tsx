import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Search, Zap, Shield, Sparkles, Database,
  Network, Lock, CheckCircle2, ArrowRight, FileText,
  MessageSquare, Calendar, Users, Globe
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'semantic' | 'filters' | 'permissions'>('semantic');

  const integrations = [
    { name: 'Slack', color: '#E01E5A' },
    { name: 'Notion', color: '#000000' },
    { name: 'Google Drive', color: '#1FA463' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Jira', color: '#0052CC' },
    { name: 'Confluence', color: '#0052CC' },
    { name: 'Microsoft 365', color: '#0078D4' },
    { name: 'GitHub', color: '#181717' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md">
              <Search size={12} className="text-accent-pink" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">Enterprise Search</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Your Organization's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-pink-500 to-accent-purple">Single Source of Truth</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop searching through dozens of tools. ALVIO connects everything and finds exactly what you need—instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Try Search Now
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
                The Problem With Search Today
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Your team's knowledge is scattered. Finding information means searching 10 different places.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: 'Data Silos',
                desc: 'Important information trapped in Slack, emails, docs, and databases.',
                color: 'accent-pink'
              },
              {
                icon: Search,
                title: 'Wasted Time',
                desc: 'Teams spend 2+ hours daily just searching for information.',
                color: 'accent-orange'
              },
              {
                icon: Users,
                title: 'Knowledge Loss',
                desc: 'When people leave, their expertise and context disappears.',
                color: 'accent-purple'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all group">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 border border-${item.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`text-${item.color}`} size={24} />
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
                How ALVIO Search Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Connect once. Search everywhere. Get answers that understand context.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center text-accent-pink font-bold">1</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Connect Your Tools</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  ALVIO connects to 180+ tools including Slack, Google Drive, Notion, Salesforce, and more. One-click integration with enterprise-grade security.
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {integrations.map((int, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{int.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/[0.05] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 p-6 flex items-center justify-center">
                <Network size={64} className="text-accent-pink opacity-20 absolute" />
                <div className="relative z-10 text-center">
                  <Sparkles className="text-accent-pink mx-auto mb-4" size={48} />
                  <p className="text-sm text-gray-600 dark:text-gray-400">All your tools, connected in minutes</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-accent-purple/5 pointer-events-none" />
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <FileText size={20} className="text-accent-pink flex-shrink-0" />
                    <span className="text-sm text-gray-300">Q3_Strategy.pdf</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <MessageSquare size={20} className="text-accent-orange flex-shrink-0" />
                    <span className="text-sm text-gray-300">#product-team discussion</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Calendar size={20} className="text-accent-purple flex-shrink-0" />
                    <span className="text-sm text-gray-300">Meeting notes from...</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple font-bold">2</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Indexes Everything</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  ALVIO creates a secure, intelligent index of all your content. It understands context, relationships, and meaning—not just keywords.
                </p>
                <ul className="space-y-3">
                  {[
                    'Processes documents, messages, and structured data',
                    'Builds knowledge graph of relationships',
                    'Respects all existing permissions automatically'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-accent-purple mt-0.5 flex-shrink-0" />
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
                  <div className="w-10 h-10 rounded-full bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange font-bold">3</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Search Naturally</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Ask questions like you would to a colleague. ALVIO understands intent, not just keywords. Get direct answers with sources.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Instead of searching:</div>
                    <div className="text-gray-900 dark:text-white font-medium">"contract titan Q3"</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-accent-orange/10 to-accent-pink/10 border border-accent-orange/20">
                    <div className="text-sm text-accent-orange mb-2">Just ask:</div>
                    <div className="text-gray-900 dark:text-white font-medium">"What was the final contract value for Project Titan in Q3?"</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative aspect-square rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 to-accent-pink/10 pointer-events-none" />
                <Search size={120} className="text-accent-pink opacity-20 absolute" />
                <div className="relative z-10 w-full">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4">
                    <p className="text-white text-sm">What was the final contract value for Project Titan in Q3?</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent-pink/20 to-accent-orange/20 backdrop-blur-md rounded-xl p-4 border border-accent-pink/30 animate-pulse">
                    <p className="text-white/80 text-xs">Finding answer across 47 sources...</p>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built for organizations that can't compromise on security or compliance.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: 'Permission Aware',
                desc: 'Only see what you have access to. Permissions inherited automatically.'
              },
              {
                icon: Shield,
                title: 'SOC 2 Type II',
                desc: 'Certified security controls and audited data handling.'
              },
              {
                icon: Globe,
                title: 'Data Residency',
                desc: 'Choose where your data lives. EU, US, or your own cloud.'
              },
              {
                icon: Zap,
                title: 'Zero Retention',
                desc: 'Source data never leaves your systems. Only metadata indexed.'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 transition-all">
                  <item.icon className="text-accent-pink mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-accent-purple/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
              Ready to stop searching and start finding?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Join teams that have cut search time by 80% and unlocked knowledge across their entire organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
