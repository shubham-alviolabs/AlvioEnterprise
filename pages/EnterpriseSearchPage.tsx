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
  Activity, FileWarning, ChevronRight, Zap, File, Clock, Filter,
  Star, Bookmark, Share2, MoreHorizontal, PlayCircle, FileText,
  Image as ImageIcon, Video, Music, Folder, Terminal, GitBranch,
  Package, Layers, Box, Command
} from 'lucide-react';

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'code' | 'docs' | 'people' | 'data'>('all');
  const [activeView, setActiveView] = useState(0);

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
    }
  ];

  const enterpriseViews = [
    {
      title: "Unified Search Interface",
      description: "One search bar for your entire organization",
      searches: [
        { query: "authentication service deployment", type: "Code", results: 847 },
        { query: "Q4 revenue targets", type: "Finance", results: 23 },
        { query: "Sarah Chen kubernetes", type: "People", results: 156 }
      ]
    },
    {
      title: "Intelligent Filtering",
      description: "Smart filters that understand context",
      searches: [
        { query: "contracts expiring", filters: ["Date: This Quarter", "Type: Legal", "Risk: High"], results: 8 },
        { query: "API documentation", filters: ["Source: GitHub", "Language: TypeScript", "Updated: Last 30 days"], results: 342 }
      ]
    },
    {
      title: "Cross-Platform Context",
      description: "See the full story across all your tools",
      searches: [
        { query: "mobile redesign decision", contexts: ["Slack (12 messages)", "Zoom (2 recordings)", "Figma (4 designs)", "Notion (3 docs)"], results: 21 }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % enterpriseViews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#000000] text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-400/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-400/5 dark:bg-gray-600/5 blur-[200px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-100/80 dark:bg-white/[0.08] backdrop-blur-xl border border-gray-300/50 dark:border-white/[0.12] shadow-sm">
                <Search size={14} className="text-gray-600 dark:text-gray-300" />
                <span className="text-xs font-medium tracking-wide text-gray-700 dark:text-gray-200">Enterprise Search</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]" style={{ fontWeight: 600 }}>
                Search That Understands<br />
                <span className="text-gray-500 dark:text-gray-400">
                  Your Business
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
                Ask questions naturally. Get instant answers from across your entire organization. Built for enterprises with the strictest security requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/[0.02] rounded-[20px] blur-2xl"></div>
                  <div className="relative bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-2xl rounded-[20px] border border-gray-200/80 dark:border-white/[0.12] shadow-2xl overflow-hidden" style={{ boxShadow: '0 20px 70px -10px rgba(0, 0, 0, 0.3)' }}>
                    <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-200/50 dark:border-white/[0.08]">
                      <Search className="text-gray-400 dark:text-gray-500 transition-colors duration-300" size={22} strokeWidth={2} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentExample.query}
                        className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 font-normal"
                        style={{ caretColor: '#007AFF' }}
                      />
                      {isSearching && (
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-300">
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Searching...</span>
                        </div>
                      )}
                    </div>

                    {(showResults || !searchQuery) && (
                      <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/50 to-gray-50/30 dark:from-blue-500/5 dark:to-transparent border border-blue-100/50 dark:border-blue-400/10">
                          <div className="flex items-start gap-4 p-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                              <Sparkles className="text-white" size={20} strokeWidth={2} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">AI Answer</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                  <Clock size={11} />
                                  <span>0.3s</span>
                                </div>
                              </div>
                              <p className="text-gray-900 dark:text-white leading-relaxed mb-6 text-[15px] font-normal">
                                {currentExample.answer}
                              </p>

                              <div className="space-y-2 mb-6">
                                {currentExample.sources.map((source, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/[0.05] backdrop-blur-sm border border-gray-200/50 dark:border-white/[0.08] hover:bg-gray-50/80 dark:hover:bg-white/[0.08] hover:border-gray-300/50 dark:hover:border-white/[0.12] transition-all duration-200 cursor-pointer group/source"
                                  >
                                    <span className="text-xl group-hover/source:scale-110 transition-transform duration-200">{source.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                          {source.name}
                                        </div>
                                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-400/20">
                                          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">{source.relevance}%</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="font-medium">{source.app}</span>
                                        <span>•</span>
                                        <span>{source.time}</span>
                                      </div>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-400 dark:text-gray-500 group-hover/source:text-gray-600 dark:group-hover/source:text-gray-300 group-hover/source:translate-x-0.5 transition-all duration-200" />
                                  </div>
                                ))}
                              </div>

                              <div className="pt-4 border-t border-gray-200/50 dark:border-white/[0.08]">
                                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">Related Questions</div>
                                <div className="space-y-1.5">
                                  {currentExample.relatedQuestions.map((q, i) => (
                                    <button
                                      key={i}
                                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group/related"
                                    >
                                      <Search size={12} className="text-gray-400 dark:text-gray-500 group-hover/related:text-blue-500 dark:group-hover/related:text-blue-400 transition-colors" strokeWidth={2} />
                                      <span className="font-normal">{q}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100/80 dark:bg-white/[0.05] backdrop-blur-sm border border-gray-200/50 dark:border-white/[0.08]">
                            <Zap size={11} className="text-blue-500" />
                            <span className="font-medium">{currentExample.sources.length} sources</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100/80 dark:bg-white/[0.05] backdrop-blur-sm border border-gray-200/50 dark:border-white/[0.08]">
                            <Sparkles size={11} className="text-blue-500" />
                            <span className="font-medium">AI-powered</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50/80 dark:bg-green-500/10 backdrop-blur-sm border border-green-200/50 dark:border-green-500/20">
                            <CheckCircle2 size={11} className="text-green-600 dark:text-green-400" />
                            <span className="font-medium text-green-700 dark:text-green-400">Secure</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Try an example</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {searchExamples.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveExample(i);
                        setSearchQuery('');
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                        activeExample === i
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                          : 'bg-gray-100/80 dark:bg-white/[0.05] text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-white/[0.08] border border-gray-200/50 dark:border-white/[0.08]'
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

      <Section className="py-32 bg-white dark:bg-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontWeight: 600 }}>
                Enterprise-Grade<br />
                <span className="text-gray-500 dark:text-gray-400">Search Intelligence</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal">
                A search experience designed for how modern enterprises actually work.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-32">
            <FadeIn delay={200}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-100/80 dark:bg-white/[0.08] backdrop-blur-xl border border-gray-300/50 dark:border-white/[0.12]">
                    <Command size={12} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Unified Interface</span>
                  </div>
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                    One search bar for everything
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-normal">
                    Stop switching between tools. Search across Slack, GitHub, Google Drive, Notion, Salesforce, and 50+ other apps from a single interface. Natural language queries that understand context and intent.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Brain, text: "Natural language understanding", desc: "Ask questions like you would to a colleague" },
                      { icon: Zap, text: "Instant results", desc: "Sub-second response time across all sources" },
                      { icon: Sparkles, text: "AI-powered relevance", desc: "Results ranked by business context, not just keywords" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-white/[0.08] transition-colors duration-200">
                          <item.icon size={18} className="text-gray-700 dark:text-gray-300" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.text}</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/5 blur-3xl rounded-full"></div>
                  <div className="relative bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-2xl rounded-[28px] border border-gray-200/80 dark:border-white/[0.12] shadow-2xl overflow-hidden p-8" style={{ boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.3)' }}>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center gap-3 px-4 py-3 mb-6 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/[0.08]">
                        <Search size={18} className="text-gray-400" strokeWidth={2} />
                        <input
                          type="text"
                          value="kubernetes migration decision"
                          readOnly
                          className="flex-1 bg-transparent text-sm outline-none text-gray-900 dark:text-white font-medium"
                        />
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-400 bg-white dark:bg-black/30 border border-gray-300 dark:border-white/[0.12] rounded-md">⌘K</kbd>
                      </div>

                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50 dark:border-white/[0.08]">
                        {['All', 'Code', 'Docs', 'People', 'Messages'].map((tab, i) => (
                          <button
                            key={i}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                              i === 0
                                ? 'bg-blue-500 text-white shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05]'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                        <div className="flex-1"></div>
                        <button className="p-1.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors">
                          <Filter size={14} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        {[
                          { icon: "🐙", title: "K8s Migration RFC", app: "GitHub", time: "8 weeks ago", relevance: 98 },
                          { icon: "📘", title: "Infrastructure Architecture Review", app: "Confluence", time: "Oct 10", relevance: 94 },
                          { icon: "💬", title: "#devops: Migration discussion thread", app: "Slack", time: "Sept 12-Oct 15", relevance: 91 },
                          { icon: "👥", title: "Sarah Chen - DevOps Lead", app: "BambooHR", time: "Active", relevance: 88 }
                        ].map((result, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] hover:bg-gray-100/80 dark:hover:bg-white/[0.06] border border-transparent hover:border-gray-200/50 dark:hover:border-white/[0.08] transition-all duration-200 cursor-pointer group"
                          >
                            <span className="text-2xl">{result.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">{result.title}</div>
                                <div className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-400/20">
                                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">{result.relevance}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span>{result.app}</span>
                                <span>•</span>
                                <span>{result.time}</span>
                              </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/10 dark:bg-green-400/5 blur-3xl rounded-full"></div>
                    <div className="relative bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-2xl rounded-[28px] border border-gray-200/80 dark:border-white/[0.12] shadow-2xl overflow-hidden p-8" style={{ boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.3)' }}>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50/50 to-gray-50/30 dark:from-blue-500/5 dark:to-transparent border border-blue-100/50 dark:border-blue-400/10">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                              <Sparkles className="text-white" size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">AI Summary</div>
                              <p className="text-sm text-gray-900 dark:text-white leading-relaxed font-normal">
                                8 contracts expire Q1 2024 totaling $2.58M ARR. 3 high-risk accounts need immediate attention.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors">
                              <FileText size={12} />
                              View Details
                            </button>
                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors">
                              <Share2 size={12} />
                              Share
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Sources Across Your Stack</div>
                          {[
                            { name: "Salesforce", icon: "☁️", files: 3, color: "blue" },
                            { name: "HubSpot", icon: "🎯", files: 2, color: "orange" },
                            { name: "Google Sheets", icon: "📊", files: 1, color: "green" },
                            { name: "Slack", icon: "💬", files: 8, color: "purple" }
                          ].map((source, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] hover:bg-gray-100/80 dark:hover:bg-white/[0.06] border border-transparent hover:border-gray-200/50 dark:hover:border-white/[0.08] transition-all duration-200 cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{source.icon}</span>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{source.name}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{source.files} relevant items</div>
                                </div>
                              </div>
                              <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-100/80 dark:bg-white/[0.08] backdrop-blur-xl border border-gray-300/50 dark:border-white/[0.12]">
                    <Layers size={12} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Cross-Platform Intelligence</span>
                  </div>
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                    See the full context
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-normal">
                    Don't just find documents. Understand the complete story. Our AI connects dots across meetings, messages, code, and data to give you answers, not just links.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: GitBranch, text: "Connected insights", desc: "Link related information across all platforms automatically" },
                      { icon: Brain, text: "Contextual understanding", desc: "AI that knows your org structure, projects, and relationships" },
                      { icon: History, text: "Timeline reconstruction", desc: "See how decisions evolved across channels and tools" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-white/[0.08] transition-colors duration-200">
                          <item.icon size={18} className="text-gray-700 dark:text-gray-300" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.text}</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-100/80 dark:bg-white/[0.08] backdrop-blur-xl border border-gray-300/50 dark:border-white/[0.12]">
                    <Shield size={12} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Enterprise Security</span>
                  </div>
                  <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight" style={{ fontWeight: 600 }}>
                    Security you can trust
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-normal">
                    Built from the ground up for enterprises with the strictest security requirements. SOC 2 Type II certified with automatic permission inheritance from all source systems.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Lock, text: "Permission inheritance", desc: "Users only see what they already have access to" },
                      { icon: Eye, text: "Complete audit logs", desc: "Track every query, access, and action with immutable logs" },
                      { icon: Database, text: "End-to-end encryption", desc: "AES-256 at rest, TLS 1.3 in transit, HSM key management" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-white/[0.08] transition-colors duration-200">
                          <item.icon size={18} className="text-gray-700 dark:text-gray-300" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.text}</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gray-500/10 dark:bg-gray-400/5 blur-3xl rounded-full"></div>
                  <div className="relative bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-2xl rounded-[28px] border border-gray-200/80 dark:border-white/[0.12] shadow-2xl overflow-hidden p-8" style={{ boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.3)' }}>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-green-50/50 dark:bg-green-500/5 border border-green-200/50 dark:border-green-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                            <CheckCircle2 className="text-white" size={18} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">SOC 2 Type II</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Certified Dec 2024</div>
                          </div>
                        </div>
                        <button className="text-xs font-semibold text-green-600 dark:text-green-400">View Report</button>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Compliance Certifications</div>
                        <div className="grid grid-cols-2 gap-2">
                          {['GDPR', 'HIPAA', 'ISO 27001', 'CCPA'].map((cert, i) => (
                            <div key={i} className="p-3 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] text-center">
                              <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-2">
                                <CheckCircle2 size={12} className="text-green-600 dark:text-green-400" />
                              </div>
                              <div className="text-xs font-semibold text-gray-900 dark:text-white">{cert}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Security Features</div>
                        <div className="space-y-2">
                          {[
                            { icon: Key, text: "SSO & SAML Integration" },
                            { icon: History, text: "Immutable Audit Logs" },
                            { icon: Globe, text: "Data Residency Controls" },
                            { icon: Scan, text: "DLP & Sensitive Data Detection" }
                          ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                              <feature.icon size={14} className="text-gray-500 dark:text-gray-400" />
                              <span className="font-medium">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-[#000000] border-t border-gray-200/50 dark:border-white/[0.08]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-400/5" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontWeight: 600 }}>
              Ready to transform<br />
              <span className="text-gray-500 dark:text-gray-400">how your team works?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
              Join enterprises that cut search time by 80% while maintaining the highest security standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-sm border-2 border-gray-300 dark:border-white/[0.12] hover:border-gray-400 dark:hover:border-white/[0.2] px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">14-day free trial • No credit card required • Setup in minutes</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
