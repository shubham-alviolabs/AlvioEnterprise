import React, { useState, useEffect, useRef } from 'react';
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

const typewriterPhrases = [
  "Find anything instantly.",
  "Search your entire stack.",
  "Knowledge at your fingertips."
];

export const EnterpriseSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeExample, setActiveExample] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [searchStage, setSearchStage] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [documentsFound, setDocumentsFound] = useState(0);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const orbRef = useRef<HTMLDivElement>(null);
  const [orbTilt, setOrbTilt] = useState({ x: 0, y: 0 });

  const handleOrbMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbRef.current) return;
    const rect = orbRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setOrbTilt({ x: y * -10, y: x * 10 });
  };

  const handleOrbLeave = () => {
    setOrbTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleType = () => {
      const fullPhrase = typewriterPhrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-24 lg:pt-32 overflow-hidden flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-radial from-accent-orange/20 via-accent-pink/10 to-transparent dark:from-accent-orange/10 dark:via-accent-pink/5 dark:to-transparent opacity-60 blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent-purple/10 dark:bg-accent-purple/5 blur-[150px] opacity-60 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 z-0 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT: Content */}
          <div className="text-left order-2 lg:order-1">
            <FadeIn delay={100}>
              <div className="mb-6 flex items-center gap-2">
                <div className="h-[1px] w-8 bg-accent-orange/50"></div>
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-accent-orange uppercase">
                  Enterprise Search
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4 leading-[1.05]">
                Search Everything.<br/>
                <span className="text-transparent bg-clip-text bg-brand-gradient">
                  {currentText}
                </span>
                <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-10 md:h-16 lg:h-20 bg-gray-900 dark:bg-white ml-1 sm:ml-2 align-middle animate-cursor-blink"></span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 font-light leading-relaxed">
                Connect your entire tech stack. Search Slack, GitHub, Google Drive, Notion, Salesforce, and 50+ tools from one intelligent interface powered by AI.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Button variant="primary" size="lg" className="h-12 px-8 text-base rounded-full shadow-lg dark:shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:scale-105 transition-all duration-300">
                  Start Free Trial <ChevronRight className="ml-2 w-4 h-4 opacity-50" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full backdrop-blur-md bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Liquid Mercury Orb */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-[600px] perspective-1000">
            <div
              ref={orbRef}
              onMouseMove={handleOrbMove}
              onMouseLeave={handleOrbLeave}
              className="relative w-full h-full flex items-center justify-center cursor-pointer z-20"
            >
              <FadeIn delay={400} className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                <div
                  className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] transition-transform duration-200 ease-out transform-style-3d"
                  style={{
                    transform: `rotateX(${orbTilt.x}deg) rotateY(${orbTilt.y}deg)`,
                  }}
                >
                  {/* Fusion Bloom */}
                  <div className="absolute inset-[-60px] rounded-full bg-gradient-to-r from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 blur-[80px] opacity-0 animate-fusion-bloom mix-blend-screen pointer-events-none z-0"></div>

                  {/* Liquid Metal Core */}
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 dark:from-gray-500 dark:via-gray-800 dark:to-black animate-scatter-1 opacity-100 mix-blend-normal z-10 shadow-[inset_0px_0px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0px_0px_30px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent opacity-80 mix-blend-overlay"></div>
                    <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-gray-400/20 to-transparent opacity-50 mix-blend-color-dodge"></div>
                  </div>

                  {/* Ethereal Essence */}
                  <div className="absolute inset-4 bg-gradient-to-br from-accent-orange/60 via-accent-pink/60 to-accent-purple/60 opacity-60 mix-blend-color-dodge blur-xl animate-scatter-2 z-20"></div>

                  {/* Crystal Glass Shell */}
                  <div className="absolute inset-0 border border-white/40 bg-white/[0.1] backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(255,255,255,0.2),0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.5)] animate-scatter-3 overflow-hidden z-30">
                    <div className="absolute top-[10%] left-[10%] w-20 h-10 bg-white/60 blur-md rounded-full transform -rotate-45"></div>
                  </div>

                  {/* Floating Search Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center shadow-2xl animate-float-medium">
                      <Search className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SEARCH DEMO */}
      <Section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4">
                See It In <span className="text-transparent bg-clip-text bg-brand-gradient">Action</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Ask natural language questions. Get instant, contextualized answers from your entire organization.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative mb-8 group">
              <div className="relative glass-card rounded-[28px] overflow-hidden shadow-2xl" style={{ boxShadow: '0 30px 90px -20px rgba(0, 0, 0, 0.4)' }}>
                <div className="flex items-center gap-4 px-6 py-5 border-b border-white/5">
                  <Search className="text-accent-orange transition-colors duration-300" size={22} strokeWidth={2} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentExample.query}
                    className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 font-light"
                  />
                  {isSearching && (
                    <div className="flex items-center gap-3 animate-in fade-in">
                      <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse"></div>
                    </div>
                  )}
                </div>

                {isSearching && (
                  <div className="p-6 space-y-4 animate-in fade-in">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center shadow-lg animate-pulse">
                        <CurrentStageIcon className="text-white" size={20} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          {searchStages[searchStage]?.label}
                        </div>
                        <div className="relative h-1.5 bg-gray-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full transition-all duration-200"
                            style={{ width: `${loadingProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl glass-panel">
                        <div className="flex items-center gap-2 mb-1">
                          <Database size={14} className="text-accent-orange" />
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Sources</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">12</div>
                      </div>
                      <div className="p-3 rounded-xl glass-panel">
                        <div className="flex items-center gap-2 mb-1">
                          <FileSearch size={14} className="text-accent-pink" />
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Documents</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{documentsFound}</div>
                      </div>
                      <div className="p-3 rounded-xl glass-panel">
                        <div className="flex items-center gap-2 mb-1">
                          <Zap size={14} className="text-accent-purple" />
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Speed</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{(loadingProgress / 50).toFixed(1)}s</div>
                      </div>
                    </div>
                  </div>
                )}

                {(showResults || !searchQuery) && !isSearching && (
                  <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 border border-accent-orange/20">
                      <div className="flex items-start gap-4 p-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center shadow-lg">
                          <Sparkles className="text-white" size={20} strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="text-xs font-bold text-accent-orange uppercase tracking-wider">AI Answer</div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <Clock size={11} />
                              <span>0.3s</span>
                            </div>
                          </div>
                          <p className="text-gray-900 dark:text-white leading-relaxed mb-6 text-[15px] font-light">
                            {currentExample.answer}
                          </p>

                          <div className="space-y-2 mb-6">
                            {currentExample.sources.map((source, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-xl glass-panel hover:border-accent-orange/30 transition-all duration-200 cursor-pointer group/source"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover/source:scale-110 transition-transform">
                                  <source.Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                      {source.name}
                                    </div>
                                    <div className="px-2 py-0.5 rounded-md bg-accent-orange/10 border border-accent-orange/20">
                                      <span className="text-[10px] font-bold text-accent-orange">{source.relevance}%</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <span>{source.app}</span>
                                    <span>•</span>
                                    <span>{source.time}</span>
                                  </div>
                                </div>
                                <ChevronRight size={16} className="text-gray-400 group-hover/source:text-accent-orange transition-colors" />
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Related Questions</div>
                            <div className="space-y-1.5">
                              {currentExample.relatedQuestions.map((q, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-orange transition-colors cursor-pointer group/related"
                                >
                                  <Search size={12} className="text-gray-400 group-hover/related:text-accent-orange transition-colors" strokeWidth={2} />
                                  <span className="font-light">{q}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
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
                        ? 'bg-gradient-to-r from-accent-orange to-accent-pink text-white shadow-lg'
                        : 'glass-panel text-gray-600 dark:text-gray-400 hover:border-accent-orange/30'
                    }`}
                  >
                    {example.query.split(' ').slice(0, 4).join(' ')}...
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FEATURES GRID */}
      <Section className="py-32 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 blur-[150px] opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4">
                Built for <span className="text-transparent bg-clip-text bg-brand-gradient">Enterprise</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                Security, speed, and intelligence at scale.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Bank-Grade Security",
                desc: "SOC 2 Type II certified with end-to-end encryption and automatic permission inheritance.",
                gradient: "from-accent-orange to-accent-pink"
              },
              {
                icon: Zap,
                title: "Sub-Second Search",
                desc: "Lightning fast responses across 50+ data sources with intelligent caching.",
                gradient: "from-accent-pink to-accent-purple"
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                desc: "Contextual understanding that connects information across your entire stack.",
                gradient: "from-accent-purple to-accent-orange"
              },
              {
                icon: Users,
                title: "Unlimited Users",
                desc: "No seat limits. Your entire organization can search without restrictions.",
                gradient: "from-accent-orange to-accent-purple"
              },
              {
                icon: Globe,
                title: "50+ Integrations",
                desc: "Native connections to Slack, GitHub, Google Workspace, Salesforce, and more.",
                gradient: "from-accent-pink to-accent-orange"
              },
              {
                icon: BarChart3,
                title: "Usage Analytics",
                desc: "Deep insights into search patterns, popular content, and knowledge gaps.",
                gradient: "from-accent-purple to-accent-pink"
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative p-8 rounded-3xl glass-card hover:border-accent-orange/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <div className="relative mb-6">
                    <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}></div>
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                      <feature.icon size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900/20 dark:to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 blur-[150px] opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6">
              Ready to Transform<br />
              <span className="text-transparent bg-clip-text bg-brand-gradient">How Your Team Works?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Join enterprises that cut search time by 80% while maintaining the highest security standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="h-12 px-8 text-base rounded-full shadow-lg dark:shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base rounded-full backdrop-blur-md bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 font-medium">14-day free trial • No credit card required • Setup in minutes</p>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
