import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Search, Zap, Shield, Sparkles, Database,
  Network, Lock, CheckCircle2, ArrowRight, FileText,
  MessageSquare, Calendar, Users, Globe, Filter,
  TrendingUp, Clock, Star, ExternalLink, ChevronRight,
  Image, Video, Code, Mail
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("What's our Q4 revenue target?");
  const [activeTab, setActiveTab] = useState<'all' | 'docs' | 'people' | 'messages'>('all');

  const searchResults = [
    {
      type: 'answer',
      title: 'Direct Answer',
      content: 'Based on the Q4 Planning document, the revenue target is $12.5M, representing 35% growth from Q3.',
      sources: ['Q4_Business_Plan.pdf', '#finance-team chat', 'Board Meeting Notes'],
      icon: Sparkles,
      color: 'accent-pink'
    },
    {
      type: 'document',
      title: 'Q4 Business Plan 2024',
      snippet: 'Our Q4 revenue target is set at $12.5M with a focus on enterprise clients. This represents a 35% increase from Q3...',
      source: 'Google Drive',
      author: 'Sarah Chen',
      date: 'Updated 3 days ago',
      icon: FileText,
      color: 'blue-500'
    },
    {
      type: 'message',
      title: 'Revenue targets confirmed',
      snippet: '@team Just confirmed with leadership - Q4 target is $12.5M. We need to close 8 enterprise deals to hit this.',
      source: 'Slack #revenue',
      author: 'Mike Johnson',
      date: '5 days ago',
      icon: MessageSquare,
      color: 'accent-orange'
    },
    {
      type: 'person',
      title: 'Sarah Chen',
      snippet: 'VP of Finance • Expert in revenue planning and forecasting',
      source: 'Directory',
      metadata: 'Available • San Francisco',
      icon: Users,
      color: 'accent-purple'
    }
  ];

  const dataSources = [
    { name: 'Slack', count: '2.4M messages', icon: MessageSquare, color: 'bg-[#E01E5A]' },
    { name: 'Google Drive', count: '45K files', icon: FileText, color: 'bg-[#4285F4]' },
    { name: 'Notion', count: '1.2K pages', icon: FileText, color: 'bg-black dark:bg-white' },
    { name: 'Salesforce', count: '15K records', icon: Database, color: 'bg-[#00A1E0]' },
    { name: 'Confluence', count: '3K pages', icon: FileText, color: 'bg-[#0052CC]' },
    { name: 'Jira', count: '8K issues', icon: CheckCircle2, color: 'bg-[#0052CC]' },
    { name: 'Gmail', count: '500K emails', icon: Mail, color: 'bg-[#EA4335]' },
    { name: 'GitHub', count: '2K repos', icon: Code, color: 'bg-[#181717] dark:bg-white' },
  ];

  const filters = [
    { label: 'Last 30 days', active: true },
    { label: 'Documents', active: false },
    { label: 'From: Sarah Chen', active: false },
    { label: 'Team: Finance', active: false },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md">
                <Search size={12} className="text-accent-pink" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">Enterprise Search</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                Find Anything Across<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-pink-500 to-accent-purple">Your Entire Organization</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                One search bar to find documents, conversations, people, and data across all your tools. Powered by AI that understands context.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative bg-white dark:bg-[#0A0A0A] rounded-2xl border-2 border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-white/10">
                  <Search className="text-accent-pink ml-2" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-gray-900 dark:text-white text-lg outline-none placeholder:text-gray-400"
                    placeholder="Ask anything about your company..."
                  />
                  <kbd className="hidden sm:block px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded">⌘K</kbd>
                </div>

                <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10 overflow-x-auto">
                  {filters.map((filter, i) => (
                    <button
                      key={i}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                        filter.active
                          ? 'bg-accent-pink text-white'
                          : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-accent-pink/30'
                      }`}
                    >
                      {filter.label}
                      {filter.active && <span className="text-white/60">×</span>}
                    </button>
                  ))}
                  <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 whitespace-nowrap">
                    <Filter size={12} />
                    More filters
                  </button>
                </div>

                <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                  {searchResults.map((result, i) => (
                    <div
                      key={i}
                      className="group relative p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 hover:bg-white dark:hover:bg-white/[0.05] transition-all cursor-pointer"
                    >
                      {result.type === 'answer' ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
                              <Sparkles size={16} className="text-white" />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">AI Answer</span>
                            <span className="ml-auto text-xs text-gray-500">Based on 3 sources</span>
                          </div>
                          <p className="text-gray-900 dark:text-white leading-relaxed">{result.content}</p>
                          <div className="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-white/10">
                            <span className="text-xs text-gray-500">Sources:</span>
                            {result.sources?.map((source, si) => (
                              <span key={si} className="text-xs text-accent-pink hover:underline cursor-pointer">
                                {source}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-${result.color}/10 border border-${result.color}/20`}>
                            <result.icon className={`text-${result.color}`} size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent-pink transition-colors">
                                {result.title}
                              </h3>
                              <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{result.snippet}</p>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-current"></span>
                                {result.source}
                              </span>
                              {result.author && (
                                <>
                                  <span>•</span>
                                  <span>{result.author}</span>
                                </>
                              )}
                              {result.date && (
                                <>
                                  <span>•</span>
                                  <span>{result.date}</span>
                                </>
                              )}
                              {result.metadata && (
                                <>
                                  <span>•</span>
                                  <span>{result.metadata}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="px-6 py-3 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs text-gray-500">
                  <span>Searched across 8 connected apps in 0.3s</span>
                  <div className="flex items-center gap-2">
                    <span>Navigate with</span>
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded">↑↓</kbd>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent-pink/20 blur-3xl -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Connected Data Sources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                ALVIO indexes content from 180+ tools your team already uses, making everything searchable from one place.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dataSources.map((source, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${source.color} flex items-center justify-center`}>
                      <source.icon className="text-white dark:text-black" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{source.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{source.count}</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-8">
              <button className="inline-flex items-center gap-2 text-sm font-medium text-accent-pink hover:gap-3 transition-all">
                View all 180+ integrations
                <ChevronRight size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Semantic Search That Understands Intent
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Unlike traditional keyword search, ALVIO understands what you mean, not just what you type.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="relative p-8 rounded-2xl bg-gray-100 dark:bg-white/[0.03] border border-gray-300 dark:border-white/10">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-300 dark:bg-white/10 text-xs font-medium text-gray-600 dark:text-gray-400">
                  Traditional Search
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-2">
                  "Q4 revenue target"
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">revenue_report_<span className="bg-yellow-200 dark:bg-yellow-500/30">Q4</span>_final.pdf</p>
                    <p className="text-xs text-gray-500">Contains keywords but no <span className="bg-yellow-200 dark:bg-yellow-500/30">target</span> info</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-900 dark:text-white font-medium mb-1"><span className="bg-yellow-200 dark:bg-yellow-500/30">Q4</span>_marketing_budget.xlsx</p>
                    <p className="text-xs text-gray-500">Wrong department, matches <span className="bg-yellow-200 dark:bg-yellow-500/30">Q4</span> only</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 opacity-50">
                    <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">No mention of actual target value</p>
                    <p className="text-xs text-gray-500">Requires manual reading of 10+ docs</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border-2 border-accent-pink/30">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-pink text-white text-xs font-medium">
                  ALVIO Search
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-2">
                  "Q4 revenue target"
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0A0A0A] border border-accent-pink/30 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="text-accent-pink" size={16} />
                      <span className="text-xs font-semibold text-accent-pink">Direct Answer</span>
                    </div>
                    <p className="text-sm text-gray-900 dark:text-white font-semibold mb-1">$12.5M revenue target for Q4 2024</p>
                    <p className="text-xs text-gray-500">From Business Plan, confirmed in #finance</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">Q4 Business Plan 2024</p>
                    <p className="text-xs text-gray-500">Exact target breakdown with context</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">Leadership confirms in Slack</p>
                    <p className="text-xs text-gray-500">Real-time validation from team</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>Understands intent, provides direct answer with sources</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Permission-Aware by Default
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Search results automatically respect your existing access controls. You only see what you're allowed to see.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                role: 'Engineering',
                results: ['GitHub repos', 'Technical docs', 'Jira tickets', 'Slack #eng'],
                restricted: ['Financial data', 'Sales pipeline'],
                icon: Code,
                color: 'blue-500'
              },
              {
                role: 'Sales',
                results: ['CRM data', 'Sales decks', 'Customer info', 'Slack #sales'],
                restricted: ['Source code', 'Security docs'],
                icon: TrendingUp,
                color: 'accent-orange'
              },
              {
                role: 'Finance',
                results: ['Financial reports', 'Budget docs', 'Board materials', 'Accounting'],
                restricted: ['Engineering docs', 'Customer support'],
                icon: Lock,
                color: 'accent-purple'
              }
            ].map((role, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${role.color}/10 border border-${role.color}/20 flex items-center justify-center`}>
                      <role.icon className={`text-${role.color}`} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{role.role} Team</h3>
                      <p className="text-xs text-gray-500">Sample user</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span className="text-xs font-semibold text-gray-900 dark:text-white">Can Search</span>
                      </div>
                      <div className="space-y-1">
                        {role.results.map((item, ri) => (
                          <div key={ri} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lock size={14} className="text-gray-400" />
                        <span className="text-xs font-semibold text-gray-900 dark:text-white">Restricted</span>
                      </div>
                      <div className="space-y-1">
                        {role.restricted.map((item, ri) => (
                          <div key={ri} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built for organizations with the strictest security and compliance requirements.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'SOC 2 Type II',
                desc: 'Certified security controls and regular audits'
              },
              {
                icon: Lock,
                title: 'Zero Trust',
                desc: 'Inherits existing permissions from source systems'
              },
              {
                icon: Globe,
                title: 'Data Residency',
                desc: 'Choose where your data is stored and processed'
              },
              {
                icon: Database,
                title: 'Encryption',
                desc: 'End-to-end encryption at rest and in transit'
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
              Stop searching. Start finding.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Join teams that reduced search time by 80% and unlocked their organization's collective knowledge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">14-day free trial • No credit card required • 5 minute setup</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
