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
  Activity, FileWarning, ChevronRight, Zap, File, Clock
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const searchExamples = [
    {
      query: "What's our Q4 revenue target and how are we tracking?",
      answer: "Q4 2024 target is $12.5M (35% growth vs Q3). Currently at $8.2M with 6 weeks remaining. On track for 98% attainment based on weighted pipeline of $6.8M and historical close rates of 62%. Top risk: Enterprise deals averaging 2 weeks longer than forecast.",
      sources: [
        { name: "Q4 Business Plan.pdf", app: "Google Drive", icon: "📄", time: "Updated 2 days ago", relevance: 98 },
        { name: "#finance-team channel", app: "Slack", icon: "💬", time: "Message from Sarah Chen, 3 hours ago", relevance: 95 },
        { name: "Board Meeting Notes - Nov 2024", app: "Notion", icon: "📝", time: "Edited by Mike Torres yesterday", relevance: 92 },
        { name: "Q4 Sales Dashboard", app: "Salesforce", icon: "☁️", time: "Live data", relevance: 96 }
      ],
      relatedQuestions: [
        "Which deals are at risk of slipping to Q1?",
        "What was our Q3 actual revenue?",
        "Show me pipeline by sales rep"
      ]
    },
    {
      query: "Who knows about the Kubernetes migration and what decisions were made?",
      answer: "Sarah Chen (DevOps Lead) and Mike Torres (Senior Engineer) led the K8s migration from AWS ECS in Q3 2024. Key decisions: chose GKE over EKS for better autopilot capabilities, implemented Istio for service mesh, moved to ArgoCD for GitOps. Migration completed Oct 15th, reduced infrastructure costs by 32%. Main trade-off was increased operational complexity.",
      sources: [
        { name: "Team Directory", app: "BambooHR", icon: "👥", time: "Current roster", relevance: 88 },
        { name: "K8s Migration RFC", app: "GitHub", icon: "🐙", time: "Merged 8 weeks ago", relevance: 98 },
        { name: "Infrastructure Architecture Review", app: "Confluence", icon: "📘", time: "Last updated Oct 10", relevance: 94 },
        { name: "#devops channel discussion", app: "Slack", icon: "💬", time: "Thread from Sept 12-Oct 15", relevance: 91 }
      ],
      relatedQuestions: [
        "What's our current infrastructure cost?",
        "How do I deploy to production in K8s?",
        "Who can help with Istio configuration?"
      ]
    },
    {
      query: "Show me all contracts expiring this quarter and renewal risk level",
      answer: "8 contracts expire Q1 2024 totaling $2.58M ARR. High risk (3): Acme Corp ($840K, NPS 6, low engagement), TechFlow ($420K, executive sponsor left), DataViz ($180K, support ticket volume up 340%). Medium risk (2): CloudScale ($380K), DevTools Inc ($290K). Low risk (3): remaining $470K combined. Renewal team has action plans for all high-risk accounts.",
      sources: [
        { name: "Contracts Database - Q1 Renewals", app: "Salesforce", icon: "☁️", time: "Updated hourly", relevance: 99 },
        { name: "Customer Health Scores", app: "ChurnZero", icon: "📊", time: "Real-time", relevance: 96 },
        { name: "Legal Tracker - Renewal Status", app: "Google Sheets", icon: "📊", time: "Updated this morning", relevance: 93 },
        { name: "Renewal Pipeline Review", app: "HubSpot", icon: "🎯", time: "Meeting notes from yesterday", relevance: 89 }
      ],
      relatedQuestions: [
        "What's our overall renewal rate?",
        "Show me Acme Corp support tickets",
        "Who owns the TechFlow relationship?"
      ]
    },
    {
      query: "What was decided in yesterday's product sync about the mobile redesign?",
      answer: "Team approved new mobile dashboard design with 3 key changes: (1) Move navigation to bottom bar for thumb accessibility, (2) Implement dark mode as default with light mode toggle, (3) Add haptic feedback for key actions. Launch date set for March 15th. Action items: Alex (design system updates by Feb 1), Jordan (iOS implementation Feb 1-28), Casey (Android implementation Feb 1-28). Engineering flagged concern about haptic API inconsistencies on older Android devices—Alex to research fallback options.",
      sources: [
        { name: "Product Sync Recording (47:32)", app: "Zoom", icon: "🎥", time: "Yesterday 2:00 PM", relevance: 99 },
        { name: "Meeting Notes: Mobile Redesign", app: "Notion", icon: "📝", time: "Edited by Alex Kim yesterday", relevance: 97 },
        { name: "#product thread", app: "Slack", icon: "💬", time: "Follow-up discussion yesterday 3-5 PM", relevance: 94 },
        { name: "Mobile Redesign Figma", app: "Figma", icon: "🎨", time: "Updated yesterday", relevance: 92 }
      ],
      relatedQuestions: [
        "Show me the mobile redesign mockups",
        "What's Jordan's current sprint capacity?",
        "Previous mobile launch timelines"
      ]
    },
    {
      query: "What are our security guidelines for handling customer PII data?",
      answer: "PII must be: (1) Encrypted at rest using AES-256 with keys rotated every 90 days, (2) Encrypted in transit via TLS 1.3+, (3) Access logged with immutable audit trail, (4) Retained per GDPR requirements with automated 30-day deletion after customer request, (5) Never logged to application logs or analytics, (6) Accessible only via authenticated API with row-level security. Engineers must complete PII handling training (renewed annually). Database access requires VP approval and security team review. Last audit: Dec 2024 (zero findings).",
      sources: [
        { name: "Security Policy v4.2 - Data Protection", app: "Confluence", icon: "📘", time: "Last reviewed Nov 15", relevance: 99 },
        { name: "GDPR Compliance Handbook", app: "Google Drive", icon: "📄", time: "Updated Oct 2024", relevance: 96 },
        { name: "Security Training Materials", app: "Lessonly", icon: "🎓", time: "Course completion required", relevance: 91 },
        { name: "SOC 2 Audit Report", app: "Vanta", icon: "🔒", time: "Certified Dec 2024", relevance: 88 }
      ],
      relatedQuestions: [
        "How do I request database access?",
        "What qualifies as PII under GDPR?",
        "Show me the data breach response plan"
      ]
    },
    {
      query: "Find the API rate limit documentation for our public API",
      answer: "Public API rate limits: Free tier 100 req/hour, Pro tier 1,000 req/hour, Enterprise tier 10,000 req/hour (custom limits available). Rate limit headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset. Exceeding limits returns 429 with Retry-After header. WebSocket connections don't count toward HTTP limits. Implementation uses Redis with sliding window algorithm. Rate limits apply per API key. Enterprise customers can request increases via support ticket—average approval time 2 business days.",
      sources: [
        { name: "API Documentation - Rate Limits", app: "GitBook", icon: "📚", time: "Last updated 2 weeks ago", relevance: 99 },
        { name: "rate_limiter.ts implementation", app: "GitHub", icon: "🐙", time: "Committed 3 months ago", relevance: 95 },
        { name: "Enterprise Support Procedures", app: "Notion", icon: "📝", time: "Updated monthly", relevance: 87 },
        { name: "#api-questions discussion", app: "Slack", icon: "💬", time: "Ongoing", relevance: 84 }
      ],
      relatedQuestions: [
        "How do I upgrade to Enterprise tier?",
        "Show me API error codes",
        "What's the average API response time?"
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
        { name: "Gong", icon: "🎙️", connected: true },
        { name: "ChurnZero", icon: "📈", connected: true },
      ],
      examples: [
        "What's our win rate against Competitor X in enterprise deals over $100K this quarter?",
        "Show me all opportunities in legal review stage that have been stuck for more than 2 weeks",
        "Who has existing relationships at Microsoft's Azure division?",
        "What objections came up most frequently in lost enterprise deals in Q3?"
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
        { name: "Zoom", icon: "🎥", connected: true },
        { name: "Discord", icon: "🎮", connected: false },
      ],
      examples: [
        "What did Sarah say about the API latency issues in the engineering channel last week?",
        "Show me all discussions about the Q4 product roadmap across Slack and email",
        "Find the thread where we decided to sunset the legacy dashboard",
        "When did we last communicate with the design team about mobile app improvements?"
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
        { name: "Linear", icon: "⚡", connected: true },
        { name: "DataDog", icon: "🐕", connected: true },
        { name: "PagerDuty", icon: "🚨", connected: false },
      ],
      examples: [
        "Where is the authentication service deployed and what's its current health status?",
        "Show me all PRs related to the payments module that were merged in the last 30 days",
        "What's the architecture decision behind our real-time sync implementation?",
        "Who wrote the caching layer and what performance benchmarks did they achieve?"
      ]
    },
    {
      name: "Documentation & Knowledge",
      icon: FileSearch,
      color: "from-orange-500 to-red-500",
      connectors: [
        { name: "Confluence", icon: "📘", connected: true },
        { name: "Notion", icon: "📝", connected: true },
        { name: "Google Drive", icon: "📄", connected: true },
        { name: "Dropbox", icon: "📦", connected: true },
        { name: "GitBook", icon: "📚", connected: true },
        { name: "Sharepoint", icon: "🗂️", connected: false },
      ],
      examples: [
        "How do I process a refund for an enterprise customer who paid via wire transfer?",
        "What's our complete parental leave policy including state-specific variations?",
        "Show me the onboarding checklist and training materials for new backend engineers",
        "Find all documentation about our API rate limiting implementation and troubleshooting"
      ]
    },
    {
      name: "Finance & Legal",
      icon: Briefcase,
      color: "from-indigo-500 to-blue-500",
      connectors: [
        { name: "QuickBooks", icon: "📗", connected: true },
        { name: "NetSuite", icon: "💼", connected: true },
        { name: "DocuSign", icon: "✍️", connected: true },
        { name: "Carta", icon: "📈", connected: false },
        { name: "Expensify", icon: "💳", connected: true },
        { name: "Stripe", icon: "💰", connected: true },
      ],
      examples: [
        "What's our monthly burn rate for the last 6 months and what's the trend?",
        "Show me all vendor contracts over $50K that are up for renewal in Q1 2024",
        "What are our budget allocations by department and which teams are over budget?",
        "Find the standard MSA template for enterprise customers in the healthcare vertical"
      ]
    },
    {
      name: "HR & People Ops",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      connectors: [
        { name: "BambooHR", icon: "🎋", connected: true },
        { name: "Workday", icon: "💼", connected: true },
        { name: "Lever", icon: "🎯", connected: true },
        { name: "Greenhouse", icon: "🌱", connected: false },
        { name: "Lattice", icon: "⭐", connected: true },
        { name: "Gusto", icon: "💵", connected: true },
      ],
      examples: [
        "Who's planning to be in the San Francisco office next week and what teams are they on?",
        "What are the complete promotion criteria and compensation bands for Senior Engineer L5?",
        "Show me all open positions in the Product team and their current interview pipeline status",
        "What's the full performance review schedule for Q1 including calibration dates?"
      ]
    },
    {
      name: "Product & Design",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      connectors: [
        { name: "Figma", icon: "🎨", connected: true },
        { name: "Miro", icon: "🖼️", connected: true },
        { name: "Productboard", icon: "📊", connected: true },
        { name: "Amplitude", icon: "📈", connected: true },
        { name: "Mixpanel", icon: "📉", connected: true },
        { name: "UserTesting", icon: "👤", connected: false },
      ],
      examples: [
        "What features are committed for the Q2 release and what's their current development status?",
        "Show me all user research findings about the checkout flow from the last 3 months",
        "What's the long-term vision and 3-year roadmap for our mobile platform strategy?",
        "Find all customer feedback and internal discussion about the new dashboard redesign"
      ]
    },
    {
      name: "Customer Support",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-500",
      connectors: [
        { name: "Zendesk", icon: "🎫", connected: true },
        { name: "Intercom", icon: "💬", connected: true },
        { name: "Front", icon: "📮", connected: true },
        { name: "Help Scout", icon: "🐕", connected: false },
        { name: "Fullstory", icon: "📹", connected: true },
        { name: "Hotjar", icon: "🔥", connected: false },
      ],
      examples: [
        "Show me all tickets about login issues in the last 7 days and identify common patterns",
        "What's the complete SLA policy for Premium tier customers including escalation procedures?",
        "How many P1 incidents did we have this month and what was the average resolution time?",
        "Find all customer feedback and feature requests related to the mobile app experience"
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
    }, 5000);
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-pink/10 blur-[200px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 blur-[200px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent-pink/5 to-accent-purple/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md shadow-lg shadow-accent-pink/5 hover:shadow-accent-pink/10 transition-all duration-500">
                <Search size={14} className="text-accent-pink animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink font-semibold">Enterprise Search</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                Search That Understands<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-pink-500 to-accent-purple animate-gradient">
                  Your Business Context
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Ask questions naturally. Get instant answers from across your entire organization. Built for enterprises with the strictest security requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-purple-500 to-accent-purple rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-white dark:bg-[#0a0a0a] rounded-2xl border-2 border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden hover:border-accent-pink/30 transition-all duration-500 hover:shadow-accent-pink/10">
                    <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-200 dark:border-white/10 bg-gradient-to-r from-gray-50/50 dark:from-white/[0.02] to-transparent">
                      <Search className="text-gray-400 group-hover:text-accent-pink transition-colors duration-300" size={24} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentExample.query}
                        className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-400 placeholder:transition-all"
                      />
                      {isSearching && (
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-300">
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent-pink animate-ping"></div>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">Searching across 8 sources...</span>
                        </div>
                      )}
                    </div>

                    {(showResults || !searchQuery) && (
                      <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent-pink/5 via-purple-500/5 to-accent-purple/5 border border-accent-pink/20 hover:border-accent-pink/40 transition-all duration-500 shadow-lg hover:shadow-xl group/answer">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 opacity-0 group-hover/answer:opacity-100 transition-opacity duration-500" />
                          <div className="relative flex items-start gap-4 p-5">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-pink/30 group-hover/answer:scale-110 transition-transform duration-500">
                              <Sparkles className="text-white" size={22} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="text-xs font-bold text-accent-pink uppercase tracking-widest">AI Answer</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Clock size={12} />
                                  <span>0.3s</span>
                                </div>
                              </div>
                              <p className="text-gray-900 dark:text-white leading-relaxed mb-5 text-[15px]">
                                {currentExample.answer}
                              </p>

                              <div className="space-y-2 mb-5">
                                {currentExample.sources.map((source, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-accent-pink/40 hover:bg-gradient-to-r hover:from-accent-pink/5 hover:to-transparent transition-all duration-300 cursor-pointer group/source"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                  >
                                    <span className="text-2xl group-hover/source:scale-110 transition-transform duration-300">{source.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover/source:text-accent-pink transition-colors truncate">
                                          {source.name}
                                        </div>
                                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-pink/10 border border-accent-pink/20">
                                          <Sparkles size={10} className="text-accent-pink" />
                                          <span className="text-[10px] font-bold text-accent-pink">{source.relevance}%</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span className="font-medium">{source.app}</span>
                                        <span>•</span>
                                        <span>{source.time}</span>
                                      </div>
                                    </div>
                                    <ChevronRight size={18} className="text-gray-400 group-hover/source:text-accent-pink group-hover/source:translate-x-1 transition-all duration-300" />
                                  </div>
                                ))}
                              </div>

                              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Related Questions</div>
                                <div className="space-y-1">
                                  {currentExample.relatedQuestions.map((q, i) => (
                                    <button
                                      key={i}
                                      className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-accent-pink dark:hover:text-accent-pink transition-colors duration-300 group/related"
                                    >
                                      <Search size={12} className="text-gray-400 group-hover/related:text-accent-pink transition-colors" />
                                      <span>{q}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                            <Zap size={12} className="text-accent-pink" />
                            <span className="font-medium">Searched {currentExample.sources.length} sources</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                            <Sparkles size={12} className="text-accent-purple" />
                            <span className="font-medium">AI-powered answer</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                            <CheckCircle2 size={12} className="text-green-600 dark:text-green-400" />
                            <span className="font-medium text-green-700 dark:text-green-400">Permissions verified</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4 font-medium">Try asking a question or click an example below</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {searchExamples.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveExample(i);
                        setSearchQuery('');
                      }}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                        activeExample === i
                          ? 'bg-gradient-to-r from-accent-pink to-accent-purple text-white shadow-lg shadow-accent-pink/30 scale-105'
                          : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-105 hover:shadow-md'
                      }`}
                    >
                      {example.query.split(' ').slice(0, 4).join(' ')}...
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#050505] dark:to-black border-t border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
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

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 transition-all duration-500 group overflow-hidden hover:shadow-2xl hover:shadow-accent-pink/5"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <category.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-pink group-hover:to-accent-purple transition-all duration-500">
                        {category.name}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Connected Apps</div>
                      <div className="flex flex-wrap gap-2">
                        {category.connectors.map((connector, ci) => (
                          <div
                            key={ci}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300 hover:scale-105 ${
                              connector.connected
                                ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-400 shadow-sm hover:shadow-md hover:shadow-green-500/20'
                                : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-400 hover:border-gray-300 dark:hover:border-white/20'
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
                          <div
                            key={ei}
                            className="flex items-start gap-2 group/example cursor-pointer p-2 rounded-lg hover:bg-gradient-to-r hover:from-accent-pink/5 hover:to-transparent transition-all duration-300 border border-transparent hover:border-accent-pink/20"
                          >
                            <Search size={14} className="text-gray-400 group-hover/example:text-accent-pink mt-0.5 flex-shrink-0 transition-colors duration-300" />
                            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover/example:text-gray-900 dark:group-hover/example:text-white transition-colors duration-300 leading-snug">
                              "{example}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={800}>
            <div className="mt-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-accent-pink/10 via-purple-500/10 to-accent-purple/10 border border-accent-pink/20 hover:border-accent-pink/40 text-center transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-pink to-transparent" />
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {['📄', '💬', '📊', '🐙', '📝', '☁️', '🎨', '📧'].map((icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-white dark:bg-white/10 border-2 border-white dark:border-gray-900 flex items-center justify-center text-lg hover:scale-125 hover:z-10 transition-transform duration-300 cursor-pointer shadow-lg"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-purple">
                    50+ Integrations
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                  Connect to all your existing tools. New connectors added every month.
                </p>
                <Button variant="outline" size="sm" className="group/btn hover:scale-105 transition-transform duration-300">
                  View All Integrations
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-pink/20 bg-accent-pink/5 backdrop-blur-md shadow-lg">
                <Shield size={14} className="text-accent-pink" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent-pink font-semibold">Enterprise Security</span>
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
                <div className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 hover:shadow-xl hover:shadow-accent-pink/5 transition-all duration-500 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-pink/10 to-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="text-accent-pink" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-pink transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="relative p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Permission Inheritance</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Automatic Permission Sync", desc: "If you can't access a document in Google Drive, you won't see it in search results" },
                      { title: "Real-Time Updates", desc: "Permissions updated instantly when changed in source systems" },
                      { title: "Zero Configuration", desc: "No manual permission mapping or rules required" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-200 dark:border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={20} />
                          <div>
                            <div className="font-semibold text-green-900 dark:text-green-300 mb-1">{item.title}</div>
                            <p className="text-sm text-green-700 dark:text-green-400">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-accent-purple/30 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Compliance Ready</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'].map((cert, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center hover:border-accent-purple/30 hover:shadow-lg transition-all duration-300 group/cert">
                        <CheckCircle2 className="text-green-500 mx-auto mb-2 group-hover/cert:scale-110 transition-transform duration-300" size={24} />
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{cert}</div>
                        <div className="text-xs text-gray-500 mt-1">Compliant</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      "Complete audit logs for all access",
                      "Data residency controls (US, EU, UK)",
                      "Automated retention policies",
                      "DLP & sensitive data detection"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-pink group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#050505] border-t border-black/5 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-pink/10 via-transparent to-accent-purple/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-pink/10 to-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6">
              Ready to Transform Enterprise Search?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Join enterprises that cut search time by 80% while maintaining the highest security standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="primary" size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-pink/30 hover:shadow-xl hover:shadow-accent-pink/40">
                Start Free Trial
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                Schedule Security Review
              </Button>
            </div>
            <p className="text-sm text-gray-500">14-day free trial • Enterprise security • No credit card required</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
