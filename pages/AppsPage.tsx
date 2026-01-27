import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import {
  Layout, Sparkles, Code, Palette, Database,
  Zap, MessageSquare, ArrowRight, CheckCircle2,
  Layers, Box, Wand2, Globe, Smartphone, Lock,
  Users, TrendingUp, ShoppingCart, FileText, BarChart3
} from 'lucide-react';

export const AppsPage: React.FC = () => {
  const [activeExample, setActiveExample] = useState<'dashboard' | 'crm' | 'portal'>('dashboard');
  const [buildingStep, setBuildingStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [animatedStats, setAnimatedStats] = useState({ revenue: 0, users: 0, conversion: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const examples = {
    dashboard: {
      title: 'Analytics Dashboard',
      desc: 'Real-time metrics with live database connections',
      prompt: '"Build an analytics dashboard showing revenue, user growth, and KPIs. Connect to Stripe API and our PostgreSQL database. Include charts, filters, and export features."',
      features: ['Live database queries', 'API integrations', 'Interactive charts', 'Real-time updates'],
      stats: [
        { label: 'Monthly Revenue', value: '$847,392', change: '+23.5%', color: 'purple' },
        { label: 'Active Users', value: '12,483', change: '+18.2%', color: 'orange' },
        { label: 'Conversion Rate', value: '3.24%', change: '+0.8%', color: 'pink' }
      ],
      code: `// Auto-generated API endpoint
app.get('/api/analytics', async (req, res) => {
  const revenue = await db.query(
    'SELECT SUM(amount) FROM payments WHERE date >= $1',
    [startDate]
  );
  const users = await db.query(
    'SELECT COUNT(*) FROM users WHERE active = true'
  );
  return res.json({ revenue, users });
});`
    },
    crm: {
      title: 'Custom CRM',
      desc: 'Full-stack sales management system',
      prompt: '"Create a CRM with contact management, deal pipeline, and email automation. Store data in PostgreSQL, integrate with Gmail API, and add custom fields for our workflow."',
      features: ['Database schema creation', 'Email integration', 'Custom workflows', 'Team collaboration'],
      stats: [
        { label: 'Active Deals', value: '47', change: '+12', color: 'purple' },
        { label: 'Pipeline Value', value: '$2.3M', change: '+340K', color: 'orange' },
        { label: 'Close Rate', value: '28%', change: '+5%', color: 'pink' }
      ],
      code: `// Database schema
CREATE TABLE deals (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  value DECIMAL(10,2),
  stage TEXT CHECK (stage IN ('lead', 'qualified', 'proposal', 'negotiation', 'closed')),
  owner_id INTEGER REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);`
    },
    portal: {
      title: 'Customer Portal',
      desc: 'Consumer-facing self-service app',
      prompt: '"Build a customer portal with authentication, order tracking, and support tickets. Connect to our database, Stripe for billing, and Zendesk API for support."',
      features: ['User authentication', 'Database CRUD', 'Payment processing', 'Third-party APIs'],
      stats: [
        { label: 'Total Orders', value: '8,291', change: '+1,203', color: 'purple' },
        { label: 'Active Tickets', value: '34', change: '-12', color: 'orange' },
        { label: 'Satisfaction', value: '4.8/5', change: '+0.3', color: 'pink' }
      ],
      code: `// Authentication middleware
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = await verifyToken(token);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  req.user = user;
  next();
};`
    }
  };

  const buildSteps = [
    {
      title: 'Understanding Requirements',
      desc: 'AI analyzes your description and identifies components',
      icon: MessageSquare,
      duration: 1500
    },
    {
      title: 'Generating Database Schema',
      desc: 'Creating tables, relationships, and migrations',
      icon: Database,
      duration: 2000
    },
    {
      title: 'Building API Endpoints',
      desc: 'RESTful APIs with authentication and validation',
      icon: Code,
      duration: 1800
    },
    {
      title: 'Creating UI Components',
      desc: 'Responsive interface with modern design',
      icon: Palette,
      duration: 2200
    }
  ];

  // Animated build process
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingStep((prev) => (prev + 1) % buildSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for code
  useEffect(() => {
    const fullText = examples[activeExample].code;
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      setTimeout(() => {
        setTypedText('');
        setIsTyping(true);
      }, 4000);
    }
  }, [typedText, isTyping, activeExample]);

  // Animated counter for stats
  useEffect(() => {
    const targetStats = examples[activeExample].stats;
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        revenue: Math.floor(847392 * progress),
        users: Math.floor(12483 * progress),
        conversion: parseFloat((3.24 * progress).toFixed(2))
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, increment);

    return () => clearInterval(interval);
  }, [activeExample]);

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

      {/* Before/After Comparison Section */}
      <Section className="bg-gradient-to-b from-white/50 via-pink-50/30 to-white/50 dark:from-white/[0.02] dark:via-accent-pink/[0.02] dark:to-white/[0.02] py-24 border-y border-black/5 dark:border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-pink/30 bg-gradient-to-r from-accent-pink/10 to-accent-orange/10 backdrop-blur-xl">
                <Zap size={14} className="text-accent-pink animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-pink">Speed Comparison</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Traditional vs ALVIO
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                See how ALVIO compresses months of work into minutes without sacrificing quality.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Development */}
            <FadeIn>
              <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-white/[0.02] border-2 border-gray-300 dark:border-white/10 backdrop-blur-xl">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold">
                  6+ Months
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Code className="text-gray-500" size={24} />
                  Traditional Development
                </h3>

                <div className="space-y-6">
                  {[
                    { week: 'Weeks 1-2', task: 'Requirements & Planning', team: '3 people', cost: '$15K' },
                    { week: 'Weeks 3-6', task: 'Database Design', team: '2 people', cost: '$30K' },
                    { week: 'Weeks 7-12', task: 'Backend Development', team: '3 people', cost: '$45K' },
                    { week: 'Weeks 13-20', task: 'Frontend Development', team: '4 people', cost: '$60K' },
                    { week: 'Weeks 21-24', task: 'Testing & Bug Fixes', team: '5 people', cost: '$30K' },
                    { week: 'Week 25+', task: 'Deployment & Maintenance', team: '2 people', cost: 'Ongoing' }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gray-300 dark:bg-white/10 flex items-center justify-center flex-shrink-0 font-bold text-sm text-gray-600 dark:text-gray-400">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white text-sm">{phase.task}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{phase.week}</div>
                        <div className="flex items-center gap-4 mt-2 text-xs">
                          <span className="flex items-center gap-1">
                            <Users size={10} />
                            {phase.team}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-red-600 dark:text-red-400">
                            💰 {phase.cost}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t-2 border-gray-300 dark:border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Total Cost:</span>
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">$180K+</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Time to Market:</span>
                      <span className="text-xl font-bold text-red-600 dark:text-red-400">25+ weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ALVIO Way */}
            <FadeIn delay={200}>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 border-2 border-accent-purple/40 backdrop-blur-xl shadow-2xl shadow-accent-purple/20">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-500 text-xs font-bold animate-pulse">
                  ~15 Minutes
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Sparkles className="text-accent-purple" size={24} />
                  ALVIO Apps
                </h3>

                <div className="space-y-6">
                  {[
                    { time: 'Minutes 1-5', task: 'Describe Your App', detail: 'Natural language prompt', icon: '💬' },
                    { time: 'Minutes 6-8', task: 'AI Generates Schema', detail: 'Tables, relationships, migrations', icon: '🗄️' },
                    { time: 'Minutes 9-11', task: 'API Creation', detail: 'RESTful endpoints with auth', icon: '⚡' },
                    { time: 'Minutes 12-14', task: 'UI Generation', detail: 'Responsive, accessible interface', icon: '🎨' },
                    { time: 'Minute 15', task: 'Ready to Deploy', detail: 'Production-ready code', icon: '🚀' }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="text-3xl">{phase.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white text-sm">{phase.task}</div>
                        <div className="text-xs text-accent-purple dark:text-accent-purple mt-1 font-semibold">{phase.time}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{phase.detail}</div>
                      </div>
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    </div>
                  ))}

                  <div className="pt-4 border-t-2 border-accent-purple/40">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Total Cost:</span>
                      <span className="text-2xl font-bold text-green-500 flex items-center gap-2">
                        Starting at $0
                        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">(free tier)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">Time to Market:</span>
                      <span className="text-xl font-bold text-green-500">~15 minutes</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/30">
                    <div className="flex items-center gap-2 text-green-500 font-bold mb-2">
                      <TrendingUp size={20} />
                      <span className="text-sm">You Save</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-green-500">$180K+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">in costs</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-500">99.6%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">faster delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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

          {/* Progressive Build Animation */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple opacity-20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {buildSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className={`relative transition-all duration-700 ${
                    i === buildingStep ? 'scale-105' : 'scale-100'
                  }`}>
                    {/* Connection Line */}
                    {i < buildSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 -z-10">
                        <div className={`h-full transition-all duration-1000 ${
                          i < buildingStep ? 'bg-gradient-to-r from-accent-orange to-accent-pink' : 'bg-gray-300 dark:bg-white/10'
                        }`} style={{ width: i < buildingStep ? '100%' : '0%' }} />
                      </div>
                    )}

                    <div className={`p-6 rounded-3xl border-2 transition-all duration-700 ${
                      i === buildingStep
                        ? 'bg-gradient-to-br from-accent-orange/10 via-accent-pink/10 to-accent-purple/10 border-accent-orange/40 shadow-2xl shadow-accent-orange/20'
                        : i < buildingStep
                        ? 'bg-white/70 dark:bg-white/[0.05] border-green-500/40'
                        : 'bg-white/50 dark:bg-white/[0.02] border-gray-200 dark:border-white/10'
                    } backdrop-blur-xl`}>
                      <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center mx-auto transition-all duration-700 ${
                        i === buildingStep
                          ? 'bg-gradient-to-br from-accent-orange/30 to-accent-pink/30 shadow-lg shadow-accent-orange/30 scale-110'
                          : i < buildingStep
                          ? 'bg-green-500/20 border-2 border-green-500/40'
                          : 'bg-gray-100 dark:bg-white/5'
                      }`}>
                        {i < buildingStep ? (
                          <CheckCircle2 className="text-green-500" size={32} />
                        ) : (
                          <step.icon className={i === buildingStep ? 'text-accent-orange animate-pulse' : 'text-gray-400'} size={32} />
                        )}
                      </div>

                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-light">{step.desc}</p>
                      </div>

                      {i === buildingStep && (
                        <div className="mt-4 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple animate-pulse" style={{ width: '70%' }} />
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Live Code Generation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative rounded-3xl bg-[#0D1117] border-2 border-white/20 overflow-hidden shadow-2xl">
                {/* VS Code Header */}
                <div className="bg-[#161B22] border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-gray-400 text-xs">
                    <Code size={14} />
                    <span>server.js</span>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="p-6 font-mono text-xs sm:text-sm overflow-hidden" style={{ minHeight: '300px' }}>
                  <div className="text-gray-300">
                    <pre className="whitespace-pre-wrap">
                      <code>
                        {typedText}
                        <span className="inline-block w-2 h-4 bg-accent-orange animate-pulse ml-1" />
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-accent-purple/90 px-4 py-2 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>AI Generating...</span>
                    </div>
                    <span className="opacity-60">Line {typedText.split('\n').length}</span>
                  </div>
                  <div className="text-white opacity-60">TypeScript • Node.js</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 border-2 border-accent-pink/40 flex items-center justify-center text-accent-pink font-bold text-lg shadow-lg shadow-accent-pink/20">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Watch It Build Live</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  See your application come to life in real-time. ALVIO generates production-ready code, complete with error handling, validation, and best practices.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: 'Database Migrations', desc: 'PostgreSQL schemas with relationships', icon: Database },
                    { title: 'REST API Endpoints', desc: 'CRUD operations with authentication', icon: Code },
                    { title: 'React Components', desc: 'Modern UI with TypeScript', icon: Palette }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent-pink" />
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-bold text-lg">{item.title}</div>
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border-2 border-accent-purple/40 flex items-center justify-center text-accent-purple font-bold text-lg shadow-lg shadow-accent-purple/20">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Connects to Anything</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
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
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#120A1A] to-[#0A0A0A] border-2 border-white/20 p-8 h-full min-h-[400px] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/15 via-accent-orange/10 to-accent-pink/15 opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl" />

                {/* Data Flow Visualization */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Center App Icon */}
                  <div className="absolute z-20 w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-purple via-accent-pink to-accent-orange flex items-center justify-center shadow-2xl border-2 border-white/30">
                    <Layout size={40} className="text-white" />
                  </div>

                  {/* Orbiting Services */}
                  {[
                    { name: 'PostgreSQL', icon: '🐘', angle: 0, color: 'purple' },
                    { name: 'Stripe', icon: '💳', angle: 60, color: 'orange' },
                    { name: 'Twilio', icon: '📱', angle: 120, color: 'pink' },
                    { name: 'SendGrid', icon: '✉️', angle: 180, color: 'purple' },
                    { name: 'Slack', icon: '💬', angle: 240, color: 'orange' },
                    { name: 'REST API', icon: '🔌', angle: 300, color: 'pink' }
                  ].map((source, i) => {
                    const radius = 140;
                    const x = Math.cos((source.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((source.angle * Math.PI) / 180) * radius;

                    return (
                      <div key={i} className="absolute z-10" style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animation: `orbit-${(i % 3) + 1} ${15 + i * 2}s linear infinite`
                      }}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          source.color === 'purple' ? 'from-accent-purple/30 to-accent-purple/10 border-accent-purple/50' :
                          source.color === 'orange' ? 'from-accent-orange/30 to-accent-orange/10 border-accent-orange/50' :
                          'from-accent-pink/30 to-accent-pink/10 border-accent-pink/50'
                        } border-2 flex flex-col items-center justify-center backdrop-blur-md shadow-lg hover:scale-125 transition-transform duration-300 group cursor-pointer`}>
                          <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{source.icon}</span>
                          <span className="text-[7px] text-gray-300 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity">{source.name}</span>
                        </div>

                        {/* Connection Lines */}
                        <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{
                          width: Math.abs(x) * 2,
                          height: Math.abs(y) * 2,
                          transform: `translate(-50%, -50%)`,
                          overflow: 'visible'
                        }}>
                          <line
                            x1={x < 0 ? Math.abs(x) * 2 : 0}
                            y1={y < 0 ? Math.abs(y) * 2 : 0}
                            x2={x < 0 ? 0 : Math.abs(x) * 2}
                            y2={y < 0 ? 0 : Math.abs(y) * 2}
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            className={`${
                              source.color === 'purple' ? 'text-accent-purple/30' :
                              source.color === 'orange' ? 'text-accent-orange/30' :
                              'text-accent-pink/30'
                            } animate-pulse`}
                          />
                          {/* Animated Data Particle */}
                          <circle
                            r="3"
                            fill="currentColor"
                            className={source.color === 'purple' ? 'text-accent-purple' :
                              source.color === 'orange' ? 'text-accent-orange' :
                              'text-accent-pink'}
                          >
                            <animateMotion
                              dur={`${3 + i * 0.5}s`}
                              repeatCount="indefinite"
                              path={`M ${x < 0 ? Math.abs(x) * 2 : 0} ${y < 0 ? Math.abs(y) * 2 : 0} L ${x < 0 ? 0 : Math.abs(x) * 2} ${y < 0 ? 0 : Math.abs(y) * 2}`}
                            />
                          </circle>
                        </svg>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-orange/20 blur-3xl animate-pulse" />
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

                {/* Live Stats Grid with Animation */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {examples[activeExample].stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`group relative p-4 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer ${
                        stat.color === 'purple' ? 'bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border-accent-purple/30 hover:shadow-2xl hover:shadow-accent-purple/30' :
                        stat.color === 'orange' ? 'bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border-accent-orange/30 hover:shadow-2xl hover:shadow-accent-orange/30' :
                        'bg-gradient-to-br from-accent-pink/10 to-accent-pink/5 border-accent-pink/30 hover:shadow-2xl hover:shadow-accent-pink/30'
                      }`}
                    >
                      {/* Pulsing indicator */}
                      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse ${
                        stat.color === 'purple' ? 'bg-accent-purple' :
                        stat.color === 'orange' ? 'bg-accent-orange' :
                        'bg-accent-pink'
                      }`} />

                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                        {stat.label}
                        {i === 0 && <BarChart3 size={10} className="opacity-50" />}
                        {i === 1 && <Users size={10} className="opacity-50" />}
                        {i === 2 && <TrendingUp size={10} className="opacity-50" />}
                      </div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="flex items-center gap-1">
                        <div className={`text-xs font-semibold flex items-center gap-0.5 ${
                          stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {stat.change.startsWith('+') ? '↗' : '↘'} {stat.change}
                        </div>
                        <div className="text-[8px] text-gray-500 dark:text-gray-400">vs last month</div>
                      </div>

                      {/* Sparkline */}
                      <div className="absolute bottom-1 left-2 right-2 h-4 flex items-end gap-0.5 opacity-30 group-hover:opacity-60 transition-opacity">
                        {[...Array(8)].map((_, idx) => (
                          <div
                            key={idx}
                            className={`flex-1 rounded-t ${
                              stat.color === 'purple' ? 'bg-accent-purple' :
                              stat.color === 'orange' ? 'bg-accent-orange' :
                              'bg-accent-pink'
                            }`}
                            style={{ height: `${Math.random() * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
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

              <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-gray-50 via-orange-50/30 to-pink-50/30 dark:from-white/[0.08] dark:via-accent-orange/[0.05] dark:to-accent-pink/[0.05] border-2 border-gray-200 dark:border-white/20 p-6 overflow-hidden shadow-2xl backdrop-blur-xl group">
                {/* Mock App Interface */}
                <div className="absolute inset-0 p-6 transition-transform duration-700 group-hover:scale-[1.02]">
                  {/* Header bar */}
                  <div className="h-10 rounded-t-2xl bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-white/20 dark:to-white/10 border-b border-gray-300 dark:border-white/20 flex items-center px-4 gap-2 backdrop-blur-xl">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:scale-125 transition-transform cursor-pointer" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:scale-125 transition-transform cursor-pointer" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:scale-125 transition-transform cursor-pointer" />
                    </div>
                    <div className="flex-1 h-5 rounded bg-gray-300/50 dark:bg-white/5 ml-4 flex items-center px-2">
                      <span className="text-[8px] text-gray-500 dark:text-gray-400">app.alvio.io/{activeExample}</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="h-[calc(100%-2.5rem)] rounded-b-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border-x border-b border-gray-300 dark:border-white/20 p-4 grid grid-cols-3 gap-3">
                    {/* Sidebar */}
                    <div className="space-y-2">
                      {[
                        { icon: '📊', label: 'Dashboard', active: true },
                        { icon: '📈', label: 'Analytics', active: false },
                        { icon: '👥', label: 'Users', active: false },
                        { icon: '⚙️', label: 'Settings', active: false }
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded-lg flex items-center gap-2 px-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                            item.active
                              ? 'bg-gradient-to-r from-accent-orange/30 to-accent-pink/30 shadow-lg'
                              : 'bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20'
                          }`}
                          onMouseEnter={() => setHoveredCard(i)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <span className="text-xs">{item.icon}</span>
                          <span className={`text-[8px] font-medium transition-opacity ${hoveredCard === i ? 'opacity-100' : 'opacity-60'}`}>
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Main content */}
                    <div className="col-span-2 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 border border-accent-purple/30 p-2 flex flex-col justify-between">
                          <div className="text-[8px] text-gray-600 dark:text-gray-400">Revenue</div>
                          <div className="text-xs font-bold text-accent-purple">${(animatedStats.revenue / 1000).toFixed(0)}K</div>
                          <div className="flex items-center gap-1">
                            <TrendingUp size={8} className="text-green-500" />
                            <span className="text-[6px] text-green-500">+23%</span>
                          </div>
                        </div>
                        <div className="h-16 rounded-lg bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 border border-accent-orange/30 p-2 flex flex-col justify-between">
                          <div className="text-[8px] text-gray-600 dark:text-gray-400">Users</div>
                          <div className="text-xs font-bold text-accent-orange">{(animatedStats.users / 1000).toFixed(1)}K</div>
                          <div className="flex items-center gap-1">
                            <TrendingUp size={8} className="text-green-500" />
                            <span className="text-[6px] text-green-500">+18%</span>
                          </div>
                        </div>
                      </div>

                      {/* Mini chart */}
                      <div className="h-24 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-white/10 dark:to-white/5 p-2 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-around px-1">
                          {[40, 65, 45, 80, 60, 95, 70].map((height, i) => (
                            <div
                              key={i}
                              className="w-2 bg-gradient-to-t from-accent-purple to-accent-pink rounded-t transition-all duration-500"
                              style={{
                                height: `${height}%`,
                                animationDelay: `${i * 100}ms`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{ transform: 'translateX(-100%) translateY(-100%)', animation: 'shimmer 3s infinite' }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Database Schema Visualization */}
      <Section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-black dark:via-[#0a050a] dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(121,40,202,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(121,40,202,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-accent-purple/30 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 backdrop-blur-xl">
                <Database size={14} className="text-accent-purple animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-purple">Database Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Intelligent Schema Generation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Watch ALVIO design your database structure with relationships, indexes, and constraints automatically.
              </p>
            </div>
          </FadeIn>

          {/* Database Tables with Relationships */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'users',
                icon: '👤',
                color: 'purple',
                fields: [
                  { name: 'id', type: 'UUID', key: true },
                  { name: 'email', type: 'TEXT', unique: true },
                  { name: 'name', type: 'TEXT' },
                  { name: 'created_at', type: 'TIMESTAMP' }
                ]
              },
              {
                name: 'orders',
                icon: '🛒',
                color: 'orange',
                fields: [
                  { name: 'id', type: 'SERIAL', key: true },
                  { name: 'user_id', type: 'UUID', foreign: true },
                  { name: 'total', type: 'DECIMAL' },
                  { name: 'status', type: 'TEXT' }
                ]
              },
              {
                name: 'products',
                icon: '📦',
                color: 'pink',
                fields: [
                  { name: 'id', type: 'SERIAL', key: true },
                  { name: 'name', type: 'TEXT' },
                  { name: 'price', type: 'DECIMAL' },
                  { name: 'stock', type: 'INTEGER' }
                ]
              }
            ].map((table, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className={`relative rounded-2xl border-2 backdrop-blur-xl overflow-hidden group hover:scale-105 transition-all duration-500 ${
                  table.color === 'purple' ? 'bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border-accent-purple/30 hover:shadow-2xl hover:shadow-accent-purple/30' :
                  table.color === 'orange' ? 'bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border-accent-orange/30 hover:shadow-2xl hover:shadow-accent-orange/30' :
                  'bg-gradient-to-br from-accent-pink/10 to-accent-pink/5 border-accent-pink/30 hover:shadow-2xl hover:shadow-accent-pink/30'
                }`}>
                  {/* Table Header */}
                  <div className={`px-4 py-3 border-b-2 flex items-center gap-2 ${
                    table.color === 'purple' ? 'bg-accent-purple/20 border-accent-purple/30' :
                    table.color === 'orange' ? 'bg-accent-orange/20 border-accent-orange/30' :
                    'bg-accent-pink/20 border-accent-pink/30'
                  }`}>
                    <span className="text-xl">{table.icon}</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-white">{table.name}</span>
                    <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${
                      table.color === 'purple' ? 'bg-accent-purple' :
                      table.color === 'orange' ? 'bg-accent-orange' :
                      'bg-accent-pink'
                    }`} />
                  </div>

                  {/* Table Fields */}
                  <div className="p-4 space-y-2">
                    {table.fields.map((field, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-mono group/field hover:bg-white/10 dark:hover:bg-white/5 p-2 rounded transition-all">
                        {field.key && <span className="text-yellow-500 text-xs">🔑</span>}
                        {field.foreign && <span className="text-blue-500 text-xs">🔗</span>}
                        {field.unique && <span className="text-green-500 text-xs">⭐</span>}
                        <span className="text-gray-900 dark:text-white font-semibold">{field.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs ml-auto">{field.type}</span>
                      </div>
                    ))}
                  </div>

                  {/* Relationship Lines */}
                  {table.name === 'orders' && (
                    <>
                      <svg className="absolute -left-8 top-1/2 w-8 h-0.5 pointer-events-none hidden lg:block" style={{ transform: 'translateY(-50%)' }}>
                        <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent-purple animate-pulse" />
                      </svg>
                      <svg className="absolute -right-8 top-1/2 w-8 h-0.5 pointer-events-none hidden lg:block" style={{ transform: 'translateY(-50%)' }}>
                        <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent-orange animate-pulse" />
                      </svg>
                    </>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Build Log Terminal */}
          <FadeIn delay={400}>
            <div className="rounded-3xl bg-[#0D1117] border-2 border-white/20 overflow-hidden shadow-2xl">
              <div className="bg-[#161B22] border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-gray-400 text-xs">
                    <Code size={14} />
                    <span>Build Output</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400 text-xs">
                  <CheckCircle2 size={14} />
                  <span>Build Successful</span>
                </div>
              </div>

              <div className="p-6 font-mono text-xs space-y-2 max-h-64 overflow-hidden">
                {[
                  { icon: '✓', text: 'Creating database schema...', color: 'text-green-400', delay: 0 },
                  { icon: '→', text: 'Generated users table with 4 columns', color: 'text-blue-400', delay: 200 },
                  { icon: '→', text: 'Generated orders table with foreign key to users', color: 'text-blue-400', delay: 400 },
                  { icon: '→', text: 'Generated products table with price validation', color: 'text-blue-400', delay: 600 },
                  { icon: '✓', text: 'Running migrations...', color: 'text-green-400', delay: 800 },
                  { icon: '→', text: 'Applied 20241127_create_users.sql', color: 'text-purple-400', delay: 1000 },
                  { icon: '→', text: 'Applied 20241127_create_orders.sql', color: 'text-purple-400', delay: 1200 },
                  { icon: '→', text: 'Applied 20241127_create_products.sql', color: 'text-purple-400', delay: 1400 },
                  { icon: '✓', text: 'Generating API endpoints...', color: 'text-green-400', delay: 1600 },
                  { icon: '→', text: 'Created GET /api/users', color: 'text-orange-400', delay: 1800 },
                  { icon: '→', text: 'Created POST /api/orders', color: 'text-orange-400', delay: 2000 },
                  { icon: '✓', text: 'Building frontend components...', color: 'text-green-400', delay: 2200 },
                  { icon: '🎉', text: 'Your app is ready to deploy!', color: 'text-pink-400 font-bold', delay: 2400 }
                ].map((log, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 ${log.color} opacity-0 animate-slide-up-fade`}
                    style={{ animationDelay: `${log.delay}ms`, animationFillMode: 'forwards' }}
                  >
                    <span>{log.icon}</span>
                    <span>{log.text}</span>
                  </div>
                ))}
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
                Everything You Need, Built-In
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                Production-ready features from day one. No setup, no configuration, just works.
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
