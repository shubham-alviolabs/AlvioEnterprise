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
import {
  GitHubIcon, SlackIcon, GoogleDriveIcon, NotionIcon, SalesforceIcon,
  ConfluenceIcon, FigmaIcon, ZoomIcon, HubSpotIcon, BambooHRIcon,
  ChurnZeroIcon, VantaIcon, LessonlyIcon, GoogleSheetsIcon
} from '../components/BrandIcons';

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'code' | 'docs' | 'people' | 'data'>('all');
  const [searchStage, setSearchStage] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [documentsFound, setDocumentsFound] = useState(0);

  const searchStages = [
    { label: 'Connecting to sources...', icon: Globe },
    { label: 'Searching documents...', icon: FileSearch },
    { label: 'Analyzing content...', icon: Brain },
    { label: 'Generating answer...', icon: Sparkles }
  ];

  const searchExamples = [
    {
      query: "What's our Q4 revenue target and how are we tracking?",
      answer: "Q4 2024 target is $12.5M (35% growth vs Q3). Currently at $8.2M with 6 weeks remaining. On track for 98% attainment based on weighted pipeline of $6.8M and historical close rates of 62%. Top risk: Enterprise deals averaging 2 weeks longer than forecast.",
      sources: [
        { name: "Q4 Business Plan.pdf", app: "Google Drive", Icon: GoogleDriveIcon, time: "Updated 2 days ago", relevance: 98 },
        { name: "#finance-team channel", app: "Slack", Icon: SlackIcon, time: "Message from Sarah Chen, 3 hours ago", relevance: 95 },
        { name: "Board Meeting Notes - Nov 2024", app: "Notion", Icon: NotionIcon, time: "Edited by Mike Torres yesterday", relevance: 92 },
        { name: "Q4 Sales Dashboard", app: "Salesforce", Icon: SalesforceIcon, time: "Live data", relevance: 96 }
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
        { name: "Team Directory", app: "BambooHR", Icon: BambooHRIcon, time: "Current roster", relevance: 88 },
        { name: "K8s Migration RFC", app: "GitHub", Icon: GitHubIcon, time: "Merged 8 weeks ago", relevance: 98 },
        { name: "Infrastructure Architecture Review", app: "Confluence", Icon: ConfluenceIcon, time: "Last updated Oct 10", relevance: 94 },
        { name: "#devops channel discussion", app: "Slack", Icon: SlackIcon, time: "Thread from Sept 12-Oct 15", relevance: 91 }
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
        { name: "Contracts Database - Q1 Renewals", app: "Salesforce", Icon: SalesforceIcon, time: "Updated hourly", relevance: 99 },
        { name: "Customer Health Scores", app: "ChurnZero", Icon: ChurnZeroIcon, time: "Real-time", relevance: 96 },
        { name: "Legal Tracker - Renewal Status", app: "Google Sheets", Icon: GoogleSheetsIcon, time: "Updated this morning", relevance: 93 },
        { name: "Renewal Pipeline Review", app: "HubSpot", Icon: HubSpotIcon, time: "Meeting notes from yesterday", relevance: 89 }
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
        { name: "Product Sync Recording (47:32)", app: "Zoom", Icon: ZoomIcon, time: "Yesterday 2:00 PM", relevance: 99 },
        { name: "Meeting Notes: Mobile Redesign", app: "Notion", Icon: NotionIcon, time: "Edited by Alex Kim yesterday", relevance: 97 },
        { name: "#product thread", app: "Slack", Icon: SlackIcon, time: "Follow-up discussion yesterday 3-5 PM", relevance: 94 },
        { name: "Mobile Redesign Figma", app: "Figma", Icon: FigmaIcon, time: "Updated yesterday", relevance: 92 }
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
        { name: "Security Policy v4.2 - Data Protection", app: "Confluence", Icon: ConfluenceIcon, time: "Last reviewed Nov 15", relevance: 99 },
        { name: "GDPR Compliance Handbook", app: "Google Drive", Icon: GoogleDriveIcon, time: "Updated Oct 2024", relevance: 96 },
        { name: "Security Training Materials", app: "Lessonly", Icon: LessonlyIcon, time: "Course completion required", relevance: 91 },
        { name: "SOC 2 Audit Report", app: "Vanta", Icon: VantaIcon, time: "Certified Dec 2024", relevance: 88 }
      ],
      relatedQuestions: [
        "How do I request database access?",
        "What qualifies as PII under GDPR?",
        "Show me the data breach response plan"
      ]
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      setShowResults(false);
      setSearchStage(0);
      setLoadingProgress(0);
      setDocumentsFound(0);

      const stageInterval = setInterval(() => {
        setSearchStage((prev) => {
          if (prev >= searchStages.length - 1) {
            clearInterval(stageInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 400);

      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 8;
        });
      }, 50);

      const docsInterval = setInterval(() => {
        setDocumentsFound((prev) => {
          if (prev >= 847) {
            clearInterval(docsInterval);
            return 847;
          }
          return prev + 42;
        });
      }, 60);

      const timer = setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
        clearInterval(stageInterval);
        clearInterval(progressInterval);
        clearInterval(docsInterval);
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearInterval(stageInterval);
        clearInterval(progressInterval);
        clearInterval(docsInterval);
      };
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
  const CurrentStageIcon = searchStages[searchStage]?.icon || Sparkles;

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
                        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-2 duration-300">
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {isSearching && (
                      <div className="p-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 animate-pulse">
                            <CurrentStageIcon className="text-white" size={20} strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              {searchStages[searchStage]?.label}
                            </div>
                            <div className="relative h-1.5 bg-gray-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                              <div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full transition-all duration-200 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                            <div className="flex items-center gap-2 mb-1">
                              <Database size={14} className="text-blue-500" />
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Sources</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">12</div>
                          </div>
                          <div className="p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                            <div className="flex items-center gap-2 mb-1">
                              <FileSearch size={14} className="text-green-500" />
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Documents</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{documentsFound}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                            <div className="flex items-center gap-2 mb-1">
                              <Zap size={14} className="text-orange-500" />
                              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Speed</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{(loadingProgress / 50).toFixed(1)}s</div>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Scanning platforms</div>
                          <div className="flex flex-wrap gap-2">
                            {[
                              { Icon: SlackIcon, name: 'Slack', color: 'text-[#E01E5A]' },
                              { Icon: GitHubIcon, name: 'GitHub', color: 'text-gray-900 dark:text-white' },
                              { Icon: GoogleDriveIcon, name: 'Drive', color: 'text-[#0066DA]' },
                              { Icon: NotionIcon, name: 'Notion', color: 'text-gray-900 dark:text-white' },
                              { Icon: SalesforceIcon, name: 'Salesforce', color: 'text-[#00A1E0]' },
                              { Icon: ConfluenceIcon, name: 'Confluence', color: 'text-[#0052CC]' }
                            ].map((platform, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] animate-in fade-in zoom-in-95 duration-300"
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <platform.Icon className={`w-4 h-4 ${platform.color}`} />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {(showResults || !searchQuery) && !isSearching && (
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
                                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-black/30 border border-gray-200/50 dark:border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover/source:scale-110 group-hover/source:shadow-md transition-all duration-200">
                                      <source.Icon className="w-5 h-5" />
                                    </div>
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
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-gray-100/90 to-gray-50/90 dark:from-white/[0.12] dark:to-white/[0.08] backdrop-blur-2xl border border-gray-200/60 dark:border-white/[0.15] shadow-sm shadow-gray-200/50 dark:shadow-black/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-100" style={{ letterSpacing: '0.05em' }}>UNIFIED INTERFACE</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                    One search bar<br />
                    <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">for everything</span>
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-normal" style={{ lineHeight: '1.7' }}>
                    Stop switching between tools. Search across Slack, GitHub, Google Drive, Notion, Salesforce, and 50+ other apps from a single, beautiful interface.
                  </p>
                  <div className="space-y-5">
                    {[
                      { icon: Brain, text: "Natural language", desc: "Ask questions like you would to a colleague", gradient: "from-blue-500 to-cyan-500" },
                      { icon: Zap, text: "Instant results", desc: "Sub-second response across all sources", gradient: "from-orange-500 to-amber-500" },
                      { icon: Sparkles, text: "Context-aware AI", desc: "Ranked by relevance to your work", gradient: "from-violet-500 to-purple-500" }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-white/[0.03] dark:to-white/[0.01] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                            <item.icon size={20} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5" style={{ letterSpacing: '-0.01em' }}>{item.text}</div>
                          <p className="text-[15px] text-gray-600 dark:text-gray-400 font-normal leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <ArrowRight size={18} className="text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group/demo">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 dark:from-blue-400/10 dark:via-cyan-400/10 dark:to-blue-400/10 blur-3xl opacity-0 group-hover/demo:opacity-100 transition-opacity duration-1000 rounded-full"></div>

                  <div className="relative bg-white/70 dark:bg-[#1a1a1c]/70 backdrop-blur-3xl rounded-[32px] border border-gray-200/60 dark:border-white/[0.15] shadow-2xl overflow-hidden" style={{ boxShadow: '0 30px 90px -20px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0, 0, 0, 0.3)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.05] dark:via-transparent pointer-events-none"></div>

                    <div className="relative">
                      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-white/[0.08] backdrop-blur-xl">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400" style={{ letterSpacing: '0.05em' }}>SEARCH</div>
                        <div className="w-16"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="relative group/search">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 dark:from-blue-400/5 dark:via-cyan-400/5 dark:to-blue-400/5 blur-xl opacity-0 group-hover/search:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          <div className="relative flex items-center gap-4 px-5 py-4 rounded-2xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.08] dark:to-white/[0.05] border border-gray-200/60 dark:border-white/[0.12] shadow-sm group-hover/search:shadow-lg group-hover/search:border-gray-300/80 dark:group-hover/search:border-white/[0.18] transition-all duration-500">
                            <div className="relative">
                              <Search size={20} className="text-gray-400 dark:text-gray-500 group-hover/search:text-blue-500 dark:group-hover/search:text-blue-400 transition-colors duration-500" strokeWidth={2.5} />
                              <div className="absolute inset-0 blur-md bg-blue-500/30 opacity-0 group-hover/search:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="flex-1">
                              <input
                                type="text"
                                value="kubernetes migration decision"
                                readOnly
                                className="w-full bg-transparent text-[15px] outline-none text-gray-900 dark:text-white font-medium"
                                style={{ caretColor: '#007AFF' }}
                              />
                            </div>
                            <kbd className="px-3 py-1.5 text-xs font-bold text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-black/40 border border-gray-300/60 dark:border-white/[0.15] rounded-lg shadow-sm backdrop-blur-xl" style={{ letterSpacing: '0.05em' }}>⌘K</kbd>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pb-4 border-b border-gray-200/40 dark:border-white/[0.06]">
                          {[
                            { label: 'All', active: true },
                            { label: 'Code', active: false },
                            { label: 'Docs', active: false },
                            { label: 'People', active: false },
                            { label: 'Messages', active: false }
                          ].map((tab, i) => (
                            <button
                              key={i}
                              className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-500 ${
                                tab.active
                                  ? 'text-white shadow-lg'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-white/[0.05]'
                              }`}
                              style={{ letterSpacing: '0.03em' }}
                            >
                              {tab.active && (
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"></div>
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-md opacity-50"></div>
                                </>
                              )}
                              <span className="relative">{tab.label}</span>
                            </button>
                          ))}
                          <div className="flex-1"></div>
                          <button className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-white/[0.05] hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300">
                            <Filter size={14} strokeWidth={2.5} />
                          </button>
                        </div>

                        <div className="space-y-2.5">
                          {[
                            { Icon: GitHubIcon, title: "K8s Migration RFC", app: "GitHub", time: "8 weeks ago", relevance: 98, color: "blue" },
                            { Icon: ConfluenceIcon, title: "Infrastructure Architecture Review", app: "Confluence", time: "Oct 10", relevance: 94, color: "cyan" },
                            { Icon: SlackIcon, title: "#devops: Migration discussion", app: "Slack", time: "Sept 12-Oct 15", relevance: 91, color: "green" },
                            { Icon: BambooHRIcon, title: "Sarah Chen - DevOps Lead", app: "BambooHR", time: "Active", relevance: 88, color: "orange" }
                          ].map((result, i) => (
                            <div
                              key={i}
                              className="group/item relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-white/[0.04] dark:to-white/[0.02] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-500 cursor-pointer hover:-translate-y-0.5"
                              style={{
                                animationDelay: `${i * 100}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                opacity: 0
                              }}
                            >
                              <div className="relative">
                                <div className={`absolute inset-0 bg-${result.color}-500/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative w-10 h-10 rounded-xl bg-white dark:bg-black/30 border border-gray-200/50 dark:border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-500 backdrop-blur-xl">
                                  <result.Icon className="w-5 h-5" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2.5 mb-1.5">
                                  <div className="text-[15px] font-semibold text-gray-900 dark:text-white truncate" style={{ letterSpacing: '-0.01em' }}>{result.title}</div>
                                  <div className="relative px-2.5 py-1 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-100/50 dark:border-blue-400/20 backdrop-blur-xl">
                                    <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{result.relevance}%</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                  <span>{result.app}</span>
                                  <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                                  <span>{result.time}</span>
                                </div>
                              </div>
                              <ChevronRight size={16} className="text-gray-400 dark:text-gray-500 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-500" strokeWidth={2.5} />
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-gray-200/40 dark:border-white/[0.06]">
                          <div className="flex items-center gap-3">
                            {[
                              { Icon: SlackIcon, label: 'Slack', count: 847 },
                              { Icon: GitHubIcon, label: 'GitHub', count: 234 },
                              { Icon: NotionIcon, label: 'Notion', count: 156 },
                              { Icon: GoogleDriveIcon, label: 'Drive', count: 423 }
                            ].map((source, i) => (
                              <div
                                key={i}
                                className="group/source flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-gray-50/60 to-white/60 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-md transition-all duration-500 cursor-pointer hover:-translate-y-0.5"
                              >
                                <source.Icon className="w-4 h-4 group-hover/source:scale-110 transition-transform duration-500" />
                                <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300" style={{ letterSpacing: '0.03em' }}>{source.count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

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
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] text-xs font-semibold text-gray-700 dark:text-gray-300">
                              <FileText size={12} />
                              <span>View Details</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] text-xs font-semibold text-gray-700 dark:text-gray-300">
                              <Share2 size={12} />
                              <span>Share</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Sources Across Your Stack</div>
                          {[
                            { Icon: SalesforceIcon, name: "Salesforce", files: 3 },
                            { Icon: HubSpotIcon, name: "HubSpot", files: 2 },
                            { Icon: GoogleSheetsIcon, name: "Google Sheets", files: 1 },
                            { Icon: SlackIcon, name: "Slack", files: 8 }
                          ].map((source, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 dark:bg-white/[0.03] hover:bg-gray-100/80 dark:hover:bg-white/[0.06] border border-transparent hover:border-gray-200/50 dark:hover:border-white/[0.08] transition-all duration-200 cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white dark:bg-black/30 border border-gray-200/50 dark:border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <source.Icon className="w-5 h-5" />
                                </div>
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
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-green-100/90 to-emerald-50/90 dark:from-green-500/[0.15] dark:to-emerald-500/[0.1] backdrop-blur-2xl border border-green-200/60 dark:border-green-400/[0.2] shadow-sm shadow-green-200/50 dark:shadow-black/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-semibold tracking-wider text-green-800 dark:text-green-100" style={{ letterSpacing: '0.05em' }}>ENTERPRISE SECURITY</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                    Built for the most<br />
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">secure enterprises</span>
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-normal" style={{ lineHeight: '1.7' }}>
                    Zero-trust architecture with automatic permission inheritance. Every user sees only what they're already authorized to access across all connected systems.
                  </p>
                  <div className="space-y-5">
                    {[
                      { icon: Lock, text: "Permission inheritance", desc: "Respects existing ACLs from every source system automatically", gradient: "from-green-500 to-emerald-500" },
                      { icon: Eye, text: "Complete audit trail", desc: "Immutable logs for every query, access, and data interaction", gradient: "from-blue-500 to-cyan-500" },
                      { icon: Database, text: "Military-grade encryption", desc: "AES-256 at rest, TLS 1.3 in transit, HSM-backed key management", gradient: "from-violet-500 to-purple-500" },
                      { icon: ShieldCheck, text: "SOC 2 Type II certified", desc: "Annual audits with continuous compliance monitoring", gradient: "from-orange-500 to-amber-500" }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-white/[0.03] dark:to-white/[0.01] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                            <item.icon size={20} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5" style={{ letterSpacing: '-0.01em' }}>{item.text}</div>
                          <p className="text-[15px] text-gray-600 dark:text-gray-400 font-normal leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group/security">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 dark:from-green-400/10 dark:via-emerald-400/10 dark:to-green-400/10 blur-3xl opacity-0 group-hover/security:opacity-100 transition-opacity duration-1000 rounded-full"></div>

                  <div className="relative bg-white/70 dark:bg-[#1a1a1c]/70 backdrop-blur-3xl rounded-[32px] border border-gray-200/60 dark:border-white/[0.15] shadow-2xl overflow-hidden" style={{ boxShadow: '0 30px 90px -20px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0, 0, 0, 0.3)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.05] dark:via-transparent pointer-events-none"></div>

                    <div className="relative">
                      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-white/[0.08] backdrop-blur-xl">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400" style={{ letterSpacing: '0.05em' }}>SECURITY CENTER</div>
                        <div className="w-16"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50/80 to-emerald-50/60 dark:from-green-500/10 dark:to-emerald-500/5 border border-green-200/60 dark:border-green-400/20 backdrop-blur-xl">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                              <CheckCircle2 className="text-white" size={20} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-sm font-bold text-gray-900 dark:text-white">SOC 2 Type II Certified</div>
                                <div className="px-2 py-1 rounded-lg bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-400/30">
                                  <span className="text-[10px] font-bold text-green-700 dark:text-green-300">ACTIVE</span>
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">Annual third-party audits ensuring the highest security standards for data protection and privacy.</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <Clock size={11} />
                                <span>Last audit: December 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08] backdrop-blur-xl">
                          <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4" style={{ letterSpacing: '0.08em' }}>Compliance Framework</div>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { name: 'GDPR', desc: 'EU Data Protection', icon: Globe },
                              { name: 'HIPAA', desc: 'Healthcare Privacy', icon: Shield },
                              { name: 'ISO 27001', desc: 'Info Security', icon: Lock },
                              { name: 'CCPA', desc: 'CA Consumer Privacy', icon: Eye }
                            ].map((cert, i) => (
                              <div key={i} className="group/cert p-4 rounded-xl bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-md transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <cert.icon size={14} className="text-green-600 dark:text-green-400" strokeWidth={2.5} />
                                  </div>
                                  <div className="text-sm font-bold text-gray-900 dark:text-white">{cert.name}</div>
                                </div>
                                <div className="text-[11px] text-gray-600 dark:text-gray-400 font-medium">{cert.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08] backdrop-blur-xl">
                          <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4" style={{ letterSpacing: '0.08em' }}>Security Architecture</div>
                          <div className="space-y-3">
                            {[
                              { icon: Key, text: "Enterprise SSO & SAML 2.0", detail: "Okta, Azure AD, Google Workspace" },
                              { icon: Database, text: "Data Residency Controls", detail: "US, EU, APAC regions available" },
                              { icon: Scan, text: "DLP & Sensitive Data Detection", detail: "PII, PCI, PHI auto-detection" },
                              { icon: Activity, text: "Real-time Threat Monitoring", detail: "24/7 SOC with automated response" }
                            ].map((feature, i) => (
                              <div key={i} className="group/feature flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/50 dark:hover:bg-white/[0.03] transition-all duration-300">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/[0.08] dark:to-white/[0.05] border border-gray-200/50 dark:border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                                  <feature.icon size={14} className="text-gray-600 dark:text-gray-400" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5" style={{ letterSpacing: '-0.01em' }}>{feature.text}</div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{feature.detail}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-200/50 dark:border-blue-400/20">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <div className="text-xs font-bold text-gray-900 dark:text-white">Zero security incidents in 2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={800}>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group/analytics">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 dark:from-violet-400/10 dark:via-purple-400/10 dark:to-violet-400/10 blur-3xl opacity-0 group-hover/analytics:opacity-100 transition-opacity duration-1000 rounded-full"></div>

                  <div className="relative bg-white/70 dark:bg-[#1a1a1c]/70 backdrop-blur-3xl rounded-[32px] border border-gray-200/60 dark:border-white/[0.15] shadow-2xl overflow-hidden" style={{ boxShadow: '0 30px 90px -20px rgba(0, 0, 0, 0.35), 0 0 1px rgba(0, 0, 0, 0.3)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.05] dark:via-transparent pointer-events-none"></div>

                    <div className="relative">
                      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-white/[0.08] backdrop-blur-xl">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
                        </div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400" style={{ letterSpacing: '0.05em' }}>ANALYTICS</div>
                        <div className="w-16"></div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: 'Queries Today', value: '12,847', change: '+23%', trend: 'up', color: 'blue' },
                            { label: 'Avg Response', value: '0.3s', change: '-18%', trend: 'down', color: 'green' },
                            { label: 'Satisfaction', value: '94%', change: '+5%', trend: 'up', color: 'violet' }
                          ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                              <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{stat.label}</div>
                              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                <TrendingUp size={12} />
                                <span>{stat.change}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Top Search Categories</div>
                            <div className="text-[10px] text-gray-500 dark:text-gray-400">Last 7 days</div>
                          </div>
                          <div className="space-y-3">
                            {[
                              { category: 'Code & Documentation', percentage: 38, color: 'from-blue-500 to-cyan-500', count: '4.8K' },
                              { category: 'Customer Data', percentage: 28, color: 'from-green-500 to-emerald-500', count: '3.6K' },
                              { category: 'Financial Reports', percentage: 19, color: 'from-violet-500 to-purple-500', count: '2.4K' },
                              { category: 'HR & People', percentage: 15, color: 'from-orange-500 to-amber-500', count: '1.9K' }
                            ].map((item, i) => (
                              <div key={i}>
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-xs font-semibold text-gray-900 dark:text-white">{item.category}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.count}</span>
                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.percentage}%</span>
                                  </div>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percentage}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: Users, label: 'Active Users', value: '2,847' },
                            { icon: FileSearch, label: 'Documents Indexed', value: '847K' }
                          ].map((metric, i) => (
                            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08]">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                                  <metric.icon size={12} className="text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{metric.label}</span>
                              </div>
                              <div className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-violet-100/90 to-purple-50/90 dark:from-violet-500/[0.15] dark:to-purple-500/[0.1] backdrop-blur-2xl border border-violet-200/60 dark:border-violet-400/[0.2] shadow-sm shadow-violet-200/50 dark:shadow-black/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></div>
                    <span className="text-xs font-semibold tracking-wider text-violet-800 dark:text-violet-100" style={{ letterSpacing: '0.05em' }}>ANALYTICS & INSIGHTS</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                    Understand how<br />
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">knowledge flows</span>
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-normal" style={{ lineHeight: '1.7' }}>
                    Deep insights into how your organization searches, discovers, and uses information. Identify knowledge gaps and optimize content strategy.
                  </p>
                  <div className="space-y-5">
                    {[
                      { icon: BarChart3, text: "Search analytics", desc: "Track query patterns, popular content, and user behavior", gradient: "from-violet-500 to-purple-500" },
                      { icon: TrendingUp, text: "Usage insights", desc: "Monitor adoption, engagement, and ROI across teams", gradient: "from-blue-500 to-cyan-500" },
                      { icon: Lightbulb, text: "Content gaps", desc: "AI identifies missing documentation and knowledge silos", gradient: "from-orange-500 to-amber-500" },
                      { icon: Settings, text: "Admin controls", desc: "Granular permissions and team management dashboard", gradient: "from-green-500 to-emerald-500" }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-white/[0.03] dark:to-white/[0.01] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20 transition-all duration-500 cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                            <item.icon size={20} className="text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5" style={{ letterSpacing: '-0.01em' }}>{item.text}</div>
                          <p className="text-[15px] text-gray-600 dark:text-gray-400 font-normal leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={1000}>
              <div className="mt-32 pt-32 border-t border-gray-200/50 dark:border-white/[0.08]">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-gray-100/90 to-gray-50/90 dark:from-white/[0.12] dark:to-white/[0.08] backdrop-blur-2xl border border-gray-200/60 dark:border-white/[0.15] shadow-sm">
                    <Zap size={14} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-100" style={{ letterSpacing: '0.05em' }}>PERFORMANCE</span>
                  </div>
                  <h3 className="text-5xl sm:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                    Lightning fast,<br />
                    <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">globally distributed</span>
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
                    Sub-second response times across all data sources with intelligent caching and edge computing.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Zap, label: 'Average Response', value: '< 300ms', detail: 'P95 under 800ms', gradient: 'from-yellow-500 to-orange-500' },
                    { icon: Database, label: 'Data Sources', value: '50+', detail: 'Native integrations', gradient: 'from-blue-500 to-cyan-500' },
                    { icon: Globe, label: 'Uptime', value: '99.99%', detail: 'SLA guarantee', gradient: 'from-green-500 to-emerald-500' },
                    { icon: Users, label: 'Concurrent Users', value: 'Unlimited', detail: 'No seat limits', gradient: 'from-violet-500 to-purple-500' }
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl"
                    >
                      <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`}></div>
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 mb-6`}>
                          <metric.icon size={24} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2" style={{ letterSpacing: '-0.02em' }}>{metric.value}</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{metric.label}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{metric.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={1200}>
              <div className="mt-32 pt-32 border-t border-gray-200/50 dark:border-white/[0.08]">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100/90 to-cyan-50/90 dark:from-blue-500/[0.15] dark:to-cyan-500/[0.1] backdrop-blur-2xl border border-blue-200/60 dark:border-blue-400/[0.2] shadow-sm">
                    <Package size={14} className="text-blue-600 dark:text-blue-300" />
                    <span className="text-xs font-semibold tracking-wider text-blue-800 dark:text-blue-100" style={{ letterSpacing: '0.05em' }}>INTEGRATIONS</span>
                  </div>
                  <h3 className="text-5xl sm:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
                    Connect your entire<br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">tech stack</span>
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
                    Native integrations with 50+ enterprise platforms. One-click setup with OAuth 2.0 authentication.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
                  {[
                    { Icon: SlackIcon, name: 'Slack', connected: true },
                    { Icon: GitHubIcon, name: 'GitHub', connected: true },
                    { Icon: GoogleDriveIcon, name: 'Google Drive', connected: true },
                    { Icon: NotionIcon, name: 'Notion', connected: true },
                    { Icon: SalesforceIcon, name: 'Salesforce', connected: true },
                    { Icon: ConfluenceIcon, name: 'Confluence', connected: true },
                    { Icon: FigmaIcon, name: 'Figma', connected: true },
                    { Icon: ZoomIcon, name: 'Zoom', connected: true },
                    { Icon: HubSpotIcon, name: 'HubSpot', connected: true },
                    { Icon: BambooHRIcon, name: 'BambooHR', connected: true },
                    { Icon: GoogleSheetsIcon, name: 'Google Sheets', connected: true },
                    { Icon: ChurnZeroIcon, name: 'ChurnZero', connected: true }
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 backdrop-blur-xl"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl bg-white dark:bg-black/20 border border-gray-200/50 dark:border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                          <app.Icon className="w-7 h-7" />
                          {app.connected && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                              <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-white text-center">{app.name}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {[
                    { icon: Zap, title: 'One-click setup', desc: 'OAuth 2.0 authentication with automatic permission syncing', gradient: 'from-yellow-500 to-orange-500' },
                    { icon: History, title: 'Real-time sync', desc: 'Changes appear in search within seconds across all platforms', gradient: 'from-blue-500 to-cyan-500' },
                    { icon: Code, title: 'Custom integrations', desc: 'REST API and webhooks for proprietary systems', gradient: 'from-violet-500 to-purple-500' }
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="group p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-white/[0.05] dark:to-white/[0.03] border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="relative mb-6">
                        <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}></div>
                        <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                          <feature.icon size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" style={{ letterSpacing: '-0.01em' }}>{feature.title}</h4>
                      <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#000000] dark:via-[#0a0a0a] dark:to-[#000000] border-t border-gray-200/50 dark:border-white/[0.08]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-400/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 dark:bg-white/[0.08] backdrop-blur-2xl border border-gray-200/60 dark:border-white/[0.15] shadow-lg">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-100" style={{ letterSpacing: '0.05em' }}>ENTERPRISE READY</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]" style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
              Transform how your<br />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 dark:from-blue-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">organization finds answers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-normal leading-relaxed" style={{ lineHeight: '1.7' }}>
              Leading enterprises trust Alvio Enterprise Search to eliminate information silos, accelerate decision-making, and boost team productivity by 10x.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { value: '80%', label: 'Reduction in search time', desc: 'Teams find what they need instantly' },
                { value: '10x', label: 'Faster onboarding', desc: 'New hires access tribal knowledge' },
                { value: '99.99%', label: 'Uptime SLA', desc: 'Enterprise reliability guaranteed' }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200/50 dark:border-white/[0.08] hover:border-gray-300/70 dark:hover:border-white/[0.15] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white mb-3" style={{ letterSpacing: '-0.03em' }}>{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Trusted by Fortune 500 companies and high-growth startups worldwide</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
