import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Search, Shield, Sparkles, Database,
  Lock, CheckCircle2, ArrowRight,
  MessageSquare, Calendar, Users, Globe,
  TrendingUp, Code, AlertTriangle, Eye, History, FileSearch,
  Brain, Lightbulb, BookOpen, Briefcase,
  BarChart3, Settings, Key, Scan, ShieldCheck, ClipboardCheck,
  Activity, FileWarning, ChevronRight, Zap, File
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const searchExamples = [
    {
      query: "What's our Q4 revenue target?",
      answer: "$12.5M revenue target for Q4 2024, representing 35% growth from Q3",
      sources: [
        { name: "Q4 Business Plan.pdf", app: "Google Drive", icon: "📄" },
        { name: "#finance-team", app: "Slack", icon: "💬" },
        { name: "Board Meeting Notes", app: "Notion", icon: "📝" }
      ]
    },
    {
      query: "Who knows about Kubernetes migration?",
      answer: "Sarah Chen (DevOps Lead) and Mike Torres (Senior Engineer) both worked on the K8s migration project last quarter",
      sources: [
        { name: "Team Directory", app: "BambooHR", icon: "👥" },
        { name: "K8s Migration Project", app: "Jira", icon: "📋" },
        { name: "#devops channel", app: "Slack", icon: "💬" }
      ]
    },
    {
      query: "Show me contracts expiring this quarter",
      answer: "8 contracts expire in Q1 2024: 3 enterprise (total $2.4M ARR), 5 SMB (total $180K ARR)",
      sources: [
        { name: "Contracts Database", app: "Salesforce", icon: "☁️" },
        { name: "Legal Tracker", app: "Google Sheets", icon: "📊" },
        { name: "Renewal Pipeline", app: "HubSpot", icon: "🎯" }
      ]
    },
    {
      query: "What was decided in yesterday's product meeting?",
      answer: "Team approved new dashboard design, set launch date for March 15th. Action items assigned to 3 team members.",
      sources: [
        { name: "Product Sync Recording", app: "Zoom", icon: "🎥" },
        { name: "Meeting Notes", app: "Notion", icon: "📝" },
        { name: "#product thread", app: "Slack", icon: "💬" }
      ]
    },
    {
      query: "Security guidelines for handling PII",
      answer: "PII must be encrypted at rest (AES-256), access logged, retained per GDPR requirements (30 days notice for deletion)",
      sources: [
        { name: "Security Policy v4.2", app: "Confluence", icon: "📘" },
        { name: "Compliance Handbook", app: "Google Drive", icon: "📄" },
        { name: "Training Materials", app: "Lessonly", icon: "🎓" }
      ]
    }
  ];

  const categories = [
    {
      name: "Sales & CRM",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      connectors: [
        { name: "Salesforce", icon: "☁️", connected: true },
        { name: "HubSpot", icon: "🎯", connected: true },
        { name: "Pipedrive", icon: "📊", connected: true },
        { name: "Outreach", icon: "📧", connected: false },
      ],
      examples: [
        "What's our win rate against competitors this quarter?",
        "Show me all opportunities over $100K",
        "Who has relationships at Microsoft?",
        "What objections came up in recent enterprise demos?"
      ]
    },
    {
      name: "Communication",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      connectors: [
        { name: "Slack", icon: "💬", connected: true },
        { name: "Microsoft Teams", icon: "👥", connected: true },
        { name: "Gmail", icon: "✉️", connected: true },
        { name: "Outlook", icon: "📨", connected: true },
      ],
      examples: [
        "What did Sarah say about the API changes?",
        "Show me discussions about the Q4 roadmap",
        "Find the thread about customer onboarding issues",
        "When did we last talk to the design team about mobile?"
      ]
    },
    {
      name: "Engineering & Code",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      connectors: [
        { name: "GitHub", icon: "🐙", connected: true },
        { name: "GitLab", icon: "🦊", connected: true },
        { name: "Jira", icon: "📋", connected: true },
        { name: "Linear", icon: "⚡", connected: false },
      ],
      examples: [
        "Where is the authentication service deployed?",
        "Show me PRs related to the payments module",
        "What's the architecture for real-time sync?",
        "Who wrote the caching layer?"
      ]
    },
    {
      name: "Documentation",
      icon: FileSearch,
      color: "from-orange-500 to-red-500",
      connectors: [
        { name: "Confluence", icon: "📘", connected: true },
        { name: "Notion", icon: "📝", connected: true },
        { name: "Google Drive", icon: "📄", connected: true },
        { name: "Dropbox", icon: "📦", connected: true },
      ],
      examples: [
        "How do I process a refund for enterprise customers?",
        "What's our parental leave policy?",
        "Show me onboarding docs for new engineers",
        "API rate limit documentation"
      ]
    },
    {
      name: "Finance & Legal",
      icon: Briefcase,
      color: "from-indigo-500 to-blue-500",
      connectors: [
        { name: "QuickBooks", icon: "📗", connected: true },
        { name: "NetSuite", icon: "💼", connected: false },
        { name: "DocuSign", icon: "✍️", connected: true },
        { name: "Carta", icon: "📈", connected: false },
      ],
      examples: [
        "What's our burn rate this quarter?",
        "Show me all vendor contracts up for renewal",
        "What are our budget allocations by department?",
        "MSA template for enterprise customers"
      ]
    },
    {
      name: "HR & People",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      connectors: [
        { name: "BambooHR", icon: "🎋", connected: true },
        { name: "Workday", icon: "💼", connected: false },
        { name: "Lever", icon: "🎯", connected: true },
        { name: "Greenhouse", icon: "🌱", connected: false },
      ],
      examples: [
        "Who's in the San Francisco office this week?",
        "What are the promotion criteria for Senior Engineer?",
        "Show me open positions in the Product team",
        "Performance review schedule for Q1"
      ]
    },
    {
      name: "Product & Design",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      connectors: [
        { name: "Figma", icon: "🎨", connected: true },
        { name: "Miro", icon: "🖼️", connected: true },
        { name: "Productboard", icon: "📊", connected: false },
        { name: "Amplitude", icon: "📈", connected: true },
      ],
      examples: [
        "What features are planned for Q2 release?",
        "Show me user research about the checkout flow",
        "What's the vision for our mobile strategy?",
        "Feedback on the new dashboard design"
      ]
    },
    {
      name: "Customer Support",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-500",
      connectors: [
        { name: "Zendesk", icon: "🎫", connected: true },
        { name: "Intercom", icon: "💬", connected: true },
        { name: "Front", icon: "📮", connected: false },
        { name: "Help Scout", icon: "🐕", connected: false },
      ],
      examples: [
        "Show me similar tickets about login issues",
        "What's the SLA for Premium tier customers?",
        "How many P1 incidents this month?",
        "Customer feedback on the mobile app"
      ]
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!searchQuery) {
        setActiveExample((prev) => (prev + 1) % searchExamples.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [searchQuery]);

  const currentExample = searchExamples[activeExample];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Automatic Permission Inheritance",
      desc: "Every search result respects source system permissions. Users only see what they already have access to."
    },
    {
      icon: History,
      title: "Complete Audit Trail",
      desc: "Track every search query, result access, and user action with immutable audit logs."
    },
    {
      icon: Eye,
      title: "Content-Level Security",
      desc: "Security applied at document, message, and field level—not just folder or channel."
    },
    {
      icon: Key,
      title: "SSO & Identity Federation",
      desc: "Integrate with Okta, Azure AD, Google Workspace, and other identity providers."
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      desc: "Independently audited security controls and data handling processes."
    },
    {
      icon: Database,
      title: "Data Encryption",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit. Keys managed in secure hardware (HSM)."
    },
    {
      icon: Globe,
      title: "Data Residency Controls",
      desc: "Choose where your data lives: US, EU, UK, or deploy in your own cloud (VPC)."
    },
    {
      icon: Scan,
      title: "DLP & Sensitive Data Detection",
      desc: "Automatically detect and protect credit cards, SSNs, API keys, and custom patterns."
    },
    {
      icon: FileWarning,
      title: "Retention & Deletion Policies",
      desc: "Automated data lifecycle management aligned with your compliance requirements."
    },
    {
      icon: Activity,
      title: "Real-Time Threat Detection",
      desc: "Monitor for unusual access patterns, bulk downloads, and suspicious behavior."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Frameworks",
      desc: "Pre-built controls for GDPR, HIPAA, SOC 2, ISO 27001, and more."
    },
    {
      icon: Settings,
      title: "Admin Controls & Policies",
      desc: "Granular controls over what's indexed, who can search, and retention policies."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md">
                <Search size={12} className="text-accent-pink" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">Enterprise Search</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                Search That Understands<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-pink-500 to-accent-purple">Your Business Context</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Ask questions naturally. Get instant answers from across your entire organization. Built for enterprises with the strictest security requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl blur-xl opacity-20"></div>
                  <div className="relative bg-white dark:bg-[#0a0a0a] rounded-2xl border-2 border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-white/10">
                      <Search className="text-gray-400" size={24} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentExample.query}
                        className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                      />
                      {isSearching && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse"></div>
                          <span className="text-sm text-gray-500">Searching...</span>
                        </div>
                      )}
                    </div>

                    {(showResults || !searchQuery) && (
                      <div className="p-6 space-y-6">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-accent-pink/5 to-accent-purple/5 border border-accent-pink/20">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center flex-shrink-0">
                            <Sparkles className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-accent-pink mb-2 uppercase tracking-wider">AI Answer</div>
                            <p className="text-gray-900 dark:text-white leading-relaxed mb-4">
                              {currentExample.answer}
                            </p>
                            <div className="space-y-2">
                              {currentExample.sources.map((source, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 transition-all cursor-pointer group">
                                  <span className="text-2xl">{source.icon}</span>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-accent-pink transition-colors">
                                      {source.name}
                                    </div>
                                    <div className="text-xs text-gray-500">{source.app}</div>
                                  </div>
                                  <ChevronRight size={16} className="text-gray-400 group-hover:text-accent-pink group-hover:translate-x-1 transition-all" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Zap size={12} className="text-accent-pink" />
                          <span>Results from {currentExample.sources.length} sources • Answered in 0.3s</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">Try asking a question or click an example below</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {searchExamples.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveExample(i);
                        setSearchQuery('');
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeExample === i
                          ? 'bg-accent-pink text-white'
                          : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                      }`}
                    >
                      {example.query}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Search Across Your Entire Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Connect all your tools. Ask questions in plain English. Get answers from everywhere.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Connected Apps</div>
                    <div className="flex flex-wrap gap-2">
                      {category.connectors.map((connector, ci) => (
                        <div
                          key={ci}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${
                            connector.connected
                              ? 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400'
                              : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-400'
                          }`}
                        >
                          <span className="text-base">{connector.icon}</span>
                          <span>{connector.name}</span>
                          {connector.connected && (
                            <CheckCircle2 size={12} className="text-green-600 dark:text-green-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Example Queries</div>
                    <div className="space-y-2">
                      {category.examples.map((example, ei) => (
                        <div key={ei} className="flex items-start gap-2 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                          <Search size={14} className="text-gray-400 group-hover:text-accent-pink mt-0.5 flex-shrink-0 transition-colors" />
                          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-snug">
                            "{example}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={800}>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border border-accent-pink/20 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {['📄', '💬', '📊', '🐙', '📝', '☁️'].map((icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white dark:bg-white/10 border-2 border-white dark:border-gray-900 flex items-center justify-center text-lg">
                      {icon}
                    </div>
                  ))}
                </div>
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">50+ Integrations</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect to all your existing tools. New connectors added every month.
              </p>
              <Button variant="outline" size="sm">
                View All Integrations
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md">
                <Shield size={12} className="text-accent-pink" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink">Enterprise Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Security & Compliance First
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Built for enterprises with the most demanding security, compliance, and governance requirements. Every feature designed with security at its core.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 hover:shadow-lg transition-all group">
                  <feature.icon className="text-accent-pink mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Permission Inheritance</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5" size={20} />
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-300 mb-1">Automatic Permission Sync</div>
                        <p className="text-sm text-green-700 dark:text-green-400">If you can't access a document in Google Drive, you won't see it in search results</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5" size={20} />
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-300 mb-1">Real-Time Updates</div>
                        <p className="text-sm text-green-700 dark:text-green-400">Permissions updated instantly when changed in source systems</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5" size={20} />
                      <div>
                        <div className="font-medium text-green-900 dark:text-green-300 mb-1">Zero Configuration</div>
                        <p className="text-sm text-green-700 dark:text-green-400">No manual permission mapping or rules required</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Compliance Ready</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'].map((cert, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center">
                      <CheckCircle2 className="text-green-500 mx-auto mb-2" size={24} />
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{cert}</div>
                      <div className="text-xs text-gray-500 mt-1">Compliant</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-pink"></div>
                    <span>Complete audit logs for all access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-pink"></div>
                    <span>Data residency controls (US, EU, UK)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-pink"></div>
                    <span>Automated retention policies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-pink"></div>
                    <span>DLP & sensitive data detection</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-accent-purple/5 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
              Ready to Transform Enterprise Search?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Join enterprises that cut search time by 80% while maintaining the highest security standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Security Review
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">14-day free trial • Enterprise security • No credit card required</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
