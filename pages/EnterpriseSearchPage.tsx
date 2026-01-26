import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Search, Zap, Shield, Sparkles, Database,
  Lock, CheckCircle2, ArrowRight, FileText,
  MessageSquare, Calendar, Users, Globe, Filter,
  TrendingUp, Clock, Star, ExternalLink, ChevronRight,
  Code, Mail, AlertTriangle, Eye, History, FileSearch,
  Brain, Lightbulb, BookOpen, Briefcase, UserCheck,
  BarChart3, Settings, Key, Scan, ShieldCheck, ClipboardCheck,
  Activity, FileWarning
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);

  const searchExamples = [
    {
      query: "What's our Q4 revenue target?",
      category: "Business Questions",
      answer: "$12.5M revenue target for Q4 2024, representing 35% growth from Q3",
      sources: ["Q4 Business Plan", "#finance-team", "Board Meeting Notes"],
      icon: TrendingUp
    },
    {
      query: "Who knows about Kubernetes migration?",
      category: "Find Experts",
      answer: "Sarah Chen (DevOps Lead) and Mike Torres (Senior Engineer) both worked on the K8s migration project",
      sources: ["Team Directory", "Project History", "Slack discussions"],
      icon: Users
    },
    {
      query: "What was decided in yesterday's product meeting?",
      category: "Meeting Context",
      answer: "Team approved the new dashboard design and set launch date for March 15th. Action items assigned to 3 team members.",
      sources: ["Meeting Recording", "Notes", "Follow-up thread"],
      icon: MessageSquare
    },
    {
      query: "How do I reset a customer's password?",
      category: "Process Documentation",
      answer: "Use the admin panel → Users → Select user → Reset Password. Detailed steps in Customer Support Guide page 14.",
      sources: ["Support Handbook", "Training Video", "FAQ"],
      icon: BookOpen
    },
    {
      query: "Show me contracts expiring this quarter",
      category: "Data Queries",
      answer: "8 contracts expire in Q1: 3 enterprise (total $2.4M), 5 SMB (total $180K). List with renewal status attached.",
      sources: ["Salesforce", "Legal Database", "Finance Tracker"],
      icon: FileSearch
    },
    {
      query: "What's our API rate limit policy?",
      category: "Technical Docs",
      answer: "Standard: 1000 req/min, Enterprise: 5000 req/min, Custom available. Documented in API Guidelines v3.2.",
      sources: ["Developer Docs", "Engineering Wiki", "API Config"],
      icon: Code
    },
    {
      query: "Customer feedback on mobile app",
      category: "Insights & Analysis",
      answer: "Latest NPS: 42 (↑8). Top issues: slow loading (23%), login bugs (18%). Positive: new UI (87% approval).",
      sources: ["Support Tickets", "App Reviews", "User Surveys"],
      icon: BarChart3
    },
    {
      query: "When is Sarah Chen available for a meeting?",
      category: "Calendar & People",
      answer: "Sarah has availability Tuesday 2-4pm and Thursday 10-11am this week. Currently in San Francisco office.",
      sources: ["Calendar", "Directory", "Slack Status"],
      icon: Calendar
    },
    {
      query: "Show me all Titan project documents",
      category: "Project Knowledge",
      answer: "Found 47 documents: proposals, contracts, design files, meeting notes, and status reports from Jan-Dec 2023.",
      sources: ["Google Drive", "Notion", "Confluence"],
      icon: Briefcase
    },
    {
      query: "What were the issues with last week's deployment?",
      category: "Troubleshooting",
      answer: "Database migration timeout caused 15min downtime. Root cause: missing index. Fix applied, monitoring improved.",
      sources: ["Incident Report", "GitHub Issues", "Slack #incidents"],
      icon: AlertTriangle
    },
    {
      query: "Security guidelines for handling PII",
      category: "Compliance & Policy",
      answer: "PII must be encrypted at rest, access logged, retained per GDPR (30 days notice). Full policy in Security Handbook.",
      sources: ["Security Policy", "Compliance Docs", "Training Materials"],
      icon: ShieldCheck
    },
    {
      query: "Competitive analysis on Acme Corp",
      category: "Strategic Intelligence",
      answer: "Acme raised $50M Series B, launched Enterprise tier, pricing 20% below ours. Analysis doc updated Jan 2024.",
      sources: ["Market Research", "Sales Intelligence", "News Mentions"],
      icon: Lightbulb
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Automatic Permission Inheritance",
      desc: "Every search result respects source system permissions. Users only see what they already have access to.",
      detail: "If you can't see it in Slack, you won't see it in search results. Zero configuration required."
    },
    {
      icon: History,
      title: "Complete Audit Trail",
      desc: "Track every search query, result access, and user action with immutable audit logs.",
      detail: "Meet compliance requirements with detailed logs: who searched what, when, and which results were accessed."
    },
    {
      icon: Eye,
      title: "Content-Level Security",
      desc: "Security applied at document, message, and field level—not just folder or channel.",
      detail: "Even within a shared document, sensitive sections remain protected based on your access level."
    },
    {
      icon: Key,
      title: "SSO & Identity Federation",
      desc: "Integrate with Okta, Azure AD, Google Workspace, and other identity providers.",
      detail: "Single sign-on ensures user permissions are always synchronized with your identity source."
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      desc: "Independently audited security controls and data handling processes.",
      detail: "Annual audits verify our security, availability, confidentiality, and privacy controls."
    },
    {
      icon: Database,
      title: "Data Encryption",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit. Keys managed in secure hardware (HSM).",
      detail: "Your data is protected with military-grade encryption at every stage."
    },
    {
      icon: Globe,
      title: "Data Residency Controls",
      desc: "Choose where your data lives: US, EU, UK, or deploy in your own cloud (VPC).",
      detail: "Meet regional compliance requirements and data sovereignty laws."
    },
    {
      icon: Scan,
      title: "DLP & Sensitive Data Detection",
      desc: "Automatically detect and protect credit cards, SSNs, API keys, and custom patterns.",
      detail: "Built-in Data Loss Prevention scans and redacts sensitive information in search results."
    },
    {
      icon: FileWarning,
      title: "Retention & Deletion Policies",
      desc: "Automated data lifecycle management aligned with your compliance requirements.",
      detail: "Set retention periods, auto-delete after specified time, and respond to deletion requests."
    },
    {
      icon: Activity,
      title: "Real-Time Threat Detection",
      desc: "Monitor for unusual access patterns, bulk downloads, and suspicious behavior.",
      detail: "AI-powered anomaly detection alerts security teams to potential insider threats."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Frameworks",
      desc: "Pre-built controls for GDPR, HIPAA, SOC 2, ISO 27001, and more.",
      detail: "Compliance dashboards show your adherence status and generate audit reports."
    },
    {
      icon: Settings,
      title: "Admin Controls & Policies",
      desc: "Granular controls over what's indexed, who can search, and retention policies.",
      detail: "IT admins can exclude sensitive repositories, restrict search scope, and set organization-wide policies."
    }
  ];

  const useCaseCategories = [
    {
      title: "Customer Support",
      icon: MessageSquare,
      examples: [
        "How do I process a refund for enterprise customers?",
        "What's the SLA for Premium tier?",
        "Show me similar tickets about login issues",
        "Who handled the Acme Corp escalation last month?"
      ]
    },
    {
      title: "Sales & Revenue",
      icon: TrendingUp,
      examples: [
        "What's our win rate against competitors?",
        "Show me all opportunities over $100K",
        "Who has relationships at Microsoft?",
        "What objections came up in recent demos?"
      ]
    },
    {
      title: "Engineering",
      icon: Code,
      examples: [
        "Where is the authentication service deployed?",
        "Show me PRs related to the payments module",
        "What's the architecture for real-time sync?",
        "Who wrote the caching layer?"
      ]
    },
    {
      title: "HR & People Ops",
      icon: Users,
      examples: [
        "What's our parental leave policy?",
        "Show me onboarding docs for new engineers",
        "Who's in the San Francisco office this week?",
        "What are the promotion criteria for Senior?"
      ]
    },
    {
      title: "Finance & Legal",
      icon: Briefcase,
      examples: [
        "What's our burn rate this quarter?",
        "Show me all vendor contracts up for renewal",
        "What are our budget allocations by department?",
        "MSA template for enterprise customers"
      ]
    },
    {
      title: "Product & Design",
      icon: Lightbulb,
      examples: [
        "What features are planned for Q2 release?",
        "Show me user research about the checkout flow",
        "What's the vision for our mobile strategy?",
        "Feedback on the new dashboard design"
      ]
    }
  ];

  const comparisonPoints = [
    {
      feature: "Traditional Search",
      examples: [
        "Keyword matching only",
        "Must know exact filename",
        "Search each tool separately",
        "No context or relationships",
        "Can't answer questions"
      ],
      color: "gray"
    },
    {
      feature: "ALVIO Enterprise Search",
      examples: [
        "Understands intent & meaning",
        "Natural language queries",
        "Unified search across all tools",
        "Shows relationships & context",
        "Provides direct answers with sources"
      ],
      color: "accent-pink"
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
            <div className="text-center mb-16">
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Book Security Review
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Ask Anything. Get Answers.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Real examples of questions ALVIO answers instantly across your organization
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {searchExamples.map((example, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div
                  onClick={() => setActiveExample(i)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all ${
                    activeExample === i
                      ? 'bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border-2 border-accent-pink/30 shadow-lg'
                      : 'bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/20'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeExample === i ? 'bg-accent-pink/20 border-2 border-accent-pink' : 'bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10'
                    }`}>
                      <example.icon className={activeExample === i ? 'text-accent-pink' : 'text-gray-600 dark:text-gray-400'} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{example.category}</div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                        "{example.query}"
                      </h3>
                    </div>
                  </div>

                  {activeExample === i && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
                      <div className="flex items-start gap-2">
                        <Sparkles className="text-accent-pink mt-0.5 flex-shrink-0" size={14} />
                        <div>
                          <div className="text-xs font-semibold text-accent-pink mb-1">AI Answer</div>
                          <p className="text-sm text-gray-900 dark:text-white leading-relaxed">{example.answer}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {example.sources.map((source, si) => (
                          <span key={si} className="text-xs px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">These are just a few examples. ALVIO can answer thousands of different question types.</p>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-accent-pink hover:gap-3 transition-all">
                See more examples
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Use Cases Across Every Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From support to sales to engineering, every team finds what they need faster
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCaseCategories.map((category, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-pink/10 border border-accent-pink/20 flex items-center justify-center">
                      <category.icon className="text-accent-pink" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.examples.map((example, ei) => (
                      <div key={ei} className="flex items-start gap-2 group cursor-pointer">
                        <Search size={14} className="text-gray-400 group-hover:text-accent-pink mt-0.5 flex-shrink-0 transition-colors" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-snug">
                          "{example}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
                Semantic Search vs Traditional Search
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See the difference between keyword matching and true understanding
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {comparisonPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 200}>
                <div className={`relative p-8 rounded-2xl ${
                  point.color === 'accent-pink'
                    ? 'bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border-2 border-accent-pink/30'
                    : 'bg-gray-100 dark:bg-white/[0.03] border border-gray-300 dark:border-white/10'
                }`}>
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                    point.color === 'accent-pink'
                      ? 'bg-accent-pink text-white'
                      : 'bg-gray-300 dark:bg-white/10 text-gray-600 dark:text-gray-400'
                  }`}>
                    {point.feature}
                  </div>
                  <div className="space-y-3">
                    {point.examples.map((example, ei) => (
                      <div key={ei} className="flex items-start gap-3">
                        {point.color === 'accent-pink' ? (
                          <CheckCircle2 size={18} className="text-accent-pink mt-0.5 flex-shrink-0" />
                        ) : (
                          <div className="w-[18px] h-[18px] mt-0.5 rounded-full border-2 border-gray-400 flex-shrink-0"></div>
                        )}
                        <p className="text-sm text-gray-900 dark:text-white leading-relaxed">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-12 p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How Semantic Search Works</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ALVIO uses advanced AI to understand the meaning behind your questions, not just match keywords. It comprehends context, relationships, synonyms, and intent—then synthesizes information from multiple sources to give you direct answers.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Understands synonyms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Grasps context</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Finds relationships</span>
                    </div>
                  </div>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{feature.desc}</p>
                  <div className="pt-3 border-t border-gray-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{feature.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50 dark:bg-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Permission-Aware Search
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Search results automatically respect all existing permissions. Users only see what they're authorized to access.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                role: 'Engineering Team',
                avatar: '👨‍💻',
                accessible: [
                  'GitHub repositories & code',
                  'Technical documentation',
                  'Jira tickets & sprints',
                  'Engineering Slack channels',
                  'Infrastructure configs',
                  'API documentation'
                ],
                restricted: [
                  'Financial reports & budgets',
                  'Sales pipeline & CRM',
                  'HR & personnel files',
                  'Legal contracts'
                ],
                color: 'blue-500'
              },
              {
                role: 'Sales Team',
                avatar: '💼',
                accessible: [
                  'CRM & customer data',
                  'Sales decks & proposals',
                  'Competitive intelligence',
                  'Sales Slack channels',
                  'Customer contracts',
                  'Pricing & quotes'
                ],
                restricted: [
                  'Source code & repos',
                  'Security documentation',
                  'Infrastructure details',
                  'HR compensation'
                ],
                color: 'accent-orange'
              },
              {
                role: 'Finance Team',
                avatar: '💰',
                accessible: [
                  'Financial statements',
                  'Budget & forecasts',
                  'Vendor contracts',
                  'Board materials',
                  'Payroll data',
                  'Audit reports'
                ],
                restricted: [
                  'Engineering systems',
                  'Product roadmaps',
                  'Customer support tickets',
                  'Sales strategies'
                ],
                color: 'accent-purple'
              }
            ].map((role, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">{role.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{role.role}</h3>
                      <p className="text-xs text-gray-500">Sample user permissions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Can Search & Access</span>
                      </div>
                      <div className="space-y-2">
                        {role.accessible.map((item, ri) => (
                          <div key={ri} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock size={14} className="text-gray-400" />
                        <span className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Restricted Access</span>
                      </div>
                      <div className="space-y-2">
                        {role.restricted.map((item, ri) => (
                          <div key={ri} className="flex items-start gap-2 text-xs text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 border border-accent-pink/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-pink flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Zero Configuration Required</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    ALVIO automatically inherits permissions from every connected source system. If a user can't access a document in Google Drive or a channel in Slack, they won't see it in search results. No manual permission mapping needed—security is built in from day one.
                  </p>
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
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-4">
                Compliance & Governance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Meet regulatory requirements and maintain complete control over your organization's data
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Audit & Monitoring</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <History className="text-accent-pink mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Complete Audit Trail</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Every search, access, and action logged with timestamp, user, and query details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="text-accent-pink mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Anomaly Detection</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AI identifies unusual patterns like bulk downloads or off-hours access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="text-accent-pink mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Usage Analytics</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Track search patterns, popular queries, and content access trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Data Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Settings className="text-accent-purple mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Granular Policies</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Control what gets indexed, retention periods, and who can search what</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileWarning className="text-accent-purple mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Data Lifecycle</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Automated retention and deletion aligned with compliance requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scan className="text-accent-purple mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white mb-1">DLP Protection</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Detect and redact sensitive data like SSNs, credit cards, API keys</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'].map((cert, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center">
                  <CheckCircle2 className="text-green-500 mx-auto mb-2" size={24} />
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{cert}</div>
                  <div className="text-xs text-gray-500 mt-1">Compliant</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden">
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
