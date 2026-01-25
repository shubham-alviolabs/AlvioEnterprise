import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { 
  CreditCard, Link2, 
  Layers, Database, Shield, Zap,
  Server
} from 'lucide-react';

// --- PREMIUM SVG PATHS ---
const icons = {
  // Knowledge
  confluence: <path d="M10.9 0L1.7 8.1c-0.6 0.5-0.9 1.3-0.9 2.1v10.6c0 1.2 1 2.2 2.2 2.2h10.6c0.8 0 1.6-0.3 2.1-0.9L24 13.1 10.9 0z" />,
  sharepoint: <path d="M12.5 12.5c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9 -3.8 0-6.9-3.1-6.9-6.9zM7.5 7.5c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5 -2.8 0-5-2.2-5-5zM4.4 12.5c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1 -1.7 0-3.1-1.4-3.1-3.1z" />,
  notion: <path d="M4.6 3.4l11.6 13.8V3.4h2.5v17.2h-2.1L4.9 6.8v13.8H2.4V3.4H4.6z M1.6 1.8h17.8v0.8H1.6V1.8z" />,
  gitbook: <path d="M10.5 0C4.7 0 0 4.7 0 10.5c0 5.8 4.7 10.5 10.5 10.5 5.8 0 10.5-4.7 10.5-10.5C21 4.7 16.3 0 10.5 0z M16.8 14.7H8.4v-2.1h8.4V14.7z M16.8 8.4H8.4V6.3h8.4V8.4z" />,
  
  // Storage
  drive: <path d="M7.9 0L2.6 9.2l5.3 9.2 13.4-9.2L15.8 0H7.9z M14.8 12L20.1 2.8 25.3 12 14.8 12z M14.2 13.3l-5.3 9.2h10.5l5.3-9.2H14.2z" transform="scale(0.9) translate(1,1)" />,
  dropbox: <path d="M6 1.5L0.8 4.9 6 8.3 11.2 4.9 6 1.5zM18 1.5l-5.2 3.4 5.2 3.4 5.2-3.4L18 1.5zM0.8 11.7l5.2 3.4 5.2-3.4 -5.2-3.4L0.8 11.7zM18 8.3l-5.2 3.4 5.2 3.4 5.2-3.4L18 8.3zM6 16.2l-5.2 3.4L6 23l5.2-3.4L6 16.2z" />,
  s3: <path d="M12 0L2.1 5.6v12.8L12 24l9.9-5.6V5.6L12 0zM12 19.8l-6.6-3.8V8l6.6 3.8V19.8z" />,
  box: <path d="M12 0L0 6.5v11L12 24l12-6.5v-11L12 0zM12 17.5c-3 0-5.5-2.5-5.5-5.5S9 6.5 12 6.5s5.5 2.5 5.5 5.5S15 17.5 12 17.5z" />,

  // Sales
  salesforce: <path d="M16.4 13.9c0.4 0 0.8-0.1 1.2-0.2 0.3-0.8 0.5-1.7 0.5-2.6 0-3.6-2.5-6.6-5.9-7.5 -0.6-2.2-2.7-3.8-5.1-3.8 -2.4 0-4.5 1.5-5.3 3.7C1.3 4.2 0.8 5.4 0.8 6.7c0 0.4 0 0.7 0.1 1.1C0.4 8 0.1 8.3 0.1 8.7c0 0.7 0.6 1.3 1.3 1.3 0.1 0 0.2 0 0.2 0 0 3 2.5 5.5 5.5 5.5 1.7 0 3.3-0.8 4.3-2.1 0.7 0.8 1.8 1.4 2.9 1.4 1.3 0 2.5-0.6 3.3-1.6 0.6 0.5 1.3 0.7 2.1 0.7 1.8 0 3.3-1.5 3.3-3.3S21.6 7.3 19.8 7.3c-0.3 0-0.7 0.1-1 0.2C18.6 5.2 16.6 3.6 14.3 3.6c-0.2 0-0.4 0-0.6 0 0-0.1 0-0.1 0-0.2 0-1.8-1.5-3.3-3.3-3.3 -1.8 0-3.3 1.5-3.3 3.3 0 0.1 0 0.1 0 0.2 -0.2 0-0.4 0-0.6 0 -2.3 0-4.3 1.6-4.9 3.8 -0.3-0.1-0.7-0.2-1-0.2 -1.8 0-3.3 1.5-3.3 3.3 0 0.2 0 0.4 0.1 0.6C1.1 11.2 1 11.4 1 11.6c0 0.5 0.4 0.9 0.9 0.9 0.1 0 0.2 0 0.3-0.1 0.3 2.1 2.1 3.7 4.3 3.7 1.2 0 2.3-0.5 3.1-1.3 0.7 1.3 2 2.1 3.5 2.1 0.8 0 1.5-0.2 2.2-0.6 0.6 0.9 1.6 1.4 2.7 1.4 1.8 0 3.3-1.5 3.3-3.3S19.7 11.1 17.9 11.1c-0.6 0-1.1 0.2-1.6 0.5 -0.4-1.2-1.5-2.1-2.9-2.1 -0.9 0-1.6 0.4-2.2 1 -0.5-1.4-1.9-2.4-3.4-2.4 -1.4 0-2.6 0.8-3.2 2 -0.2-0.1-0.5-0.1-0.7-0.1 -1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c0.2 0 0.5-0.1 0.7-0.1 0.6 1.2 1.8 2 3.2 2 1.5 0 2.9-1 3.4-2.4 0.5 0.6 1.3 1 2.2 1 1.3 0 2.5-0.9 2.9-2.1 0.4 0.3 1 0.5 1.6 0.5 1.5 0 2.7-1.2 2.7-2.7S17.9 13.9 16.4 13.9z" />,
  hubspot: <path d="M18.8 12.8c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1zM5.2 12.8c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1S2.1 15.9 2.1 14.2s1.4-3.1 3.1-3.1zm6.8-5.7c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1zm0-7.1v5h2.1v2.1H12v6c0 1 .6 1.6 1.7 1.6.4 0 .7 0 1.1-.1v2c-2.2.3-4.9-.7-4.9-3.4v-6H7.8V12.1h2.1V0h2.1z"/>,
  gong: <path d="M12 0L2.5 5.5v13L12 24l9.5-5.5v-13L12 0zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />,

  // Dev
  jira: <path d="M11.5 0C11.5 0 11.5 0 11.5 0 11.5 0L11.5 8.1 5.7 13.9 0 8.1 5.7 2.4C7.3 0.8 9.9 0 11.5 0zM11.5 11.3L11.5 19.4 17.2 13.7 11.5 8 11.5 11.3zM13.2 0L13.2 8.1 19 13.9 24.7 8.1 19 2.4C17.4 0.8 14.8 0 13.2 0z" />,
  github: <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4 0.6 0.1 0.8-0.3 0.8-0.6 0-0.3 0-1.1 0-2.1 -3.3 0.7-4-1.6-4-1.6 -0.5-1.4-1.3-1.8-1.3-1.8 -1.1-0.7 0.1-0.7 0.1-0.7 1.2 0.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 0.1-0.8 0.4-1.3 0.8-1.6 -2.7-0.3-5.5-1.3-5.5-5.9 0-1.3 0.5-2.4 1.2-3.2 -0.1-0.3-0.5-1.5 0.1-3.2 0 0 1-0.3 3.3 1.2 1-0.3 2-0.4 3-0.4 1 0 2 0.1 3 0.4 2.3-1.6 3.3-1.2 3.3-1.2 0.6 1.7 0.2 2.9 0.1 3.2 0.8 0.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9 0.4 0.4 0.8 1.1 0.8 2.2 0 1.6 0 2.9 0 3.3 0 0.3 0.2 0.7 0.8 0.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0z" />,
  zendesk: <path d="M22.9 6.2H10.1l-2.6 4.2h12.8L22.9 6.2zM21.1 13.6H8.3l-2.6 4.2h12.8L21.1 13.6zM2.9 6.2H1.1l2.6 4.2h1.8L2.9 6.2zM4.7 13.6H2.9l2.6 4.2h1.8L4.7 13.6z" />,
  linear: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6 0-5.3 4.3-9.6 9.6-9.6 5.3 0 9.6 4.3 9.6 9.6 0 5.3-4.3 9.6-9.6 9.6zM17.1 12c0 2.8-2.3 5.1-5.1 5.1 -2.8 0-5.1-2.3-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1 2.8 0 5.1 2.3 5.1 5.1z" />,

  // Finance
  xero: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5L12 12l-4.5 4.5-1.5-1.5L10.5 10.5 6 6l1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5-4.5 4.5 4.5 4.5-1.5 1.5z" />,
  quickbooks: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-1 18c-2.8 0-5-2.2-5-5V7h2v6c0 1.7 1.3 3 3 3s3-1.3 3-3V7h2v6c0 2.8-2.2 5-5 5z" />,
  sage: <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4 16h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V6h8v2z" />,
  netsuite: <path d="M3 2v20l18-20v20L3 2z" />,
  zoho: <path d="M5 5h6v6H5V5zm0 8h6v6H5v-6zm8-8h6v6h-6V5zm0 8h6v6h-6v-6z" />, 
  supabase: <path d="M11.9 0L2.1 10.6h7.5l-2.6 13.4L18.9 11.4h-7.5l3.5-11.4z" />,

  // Msg
  slack: <path d="M5.4 16.4c0 1.5-1.2 2.7-2.7 2.7S0 17.9 0 16.4s1.2-2.7 2.7-2.7h2.7V16.4zM6.8 16.4c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v6.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V16.4zM9.5 5.4C9.5 3.9 10.7 2.7 12.2 2.7s2.7 1.2 2.7 2.7v2.7H9.5V5.4zM9.5 6.8c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H2.7C1.2 12.2 0 11 0 9.5s1.2-2.7 2.7-2.7H9.5zM16.4 19.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7v-2.7h5.4V19.1zM16.4 17.7c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7h6.8c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H16.4zM22.1 8.2c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7 -1.2 2.7-2.7 2.7h-2.7V8.2zM20.7 8.2c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V1.4c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V8.2z" />,
  teams: <path d="M12.9 0L0 5v14l12.9 5V0zM25.7 6.4L14.3 8.6v6.8l11.4 2.1V6.4z" />,
  discord: <path d="M20.4 4.5C18.8 3.7 17.1 3.2 15.3 3c-0.2 0.4-0.5 0.9-0.6 1.4 -1.9-0.3-3.7-0.3-5.5 0 -0.2-0.5-0.4-1-0.7-1.4 -1.8 0.3-3.5 0.7-5 1.6 -3.2 4.7-4.1 9.3-3.6 13.7 2.1 1.6 4.2 2.5 6.2 3.1 0.5-0.7 0.9-1.4 1.3-2.2 -0.7-0.3-1.4-0.6-2-1 0.2-0.1 0.4-0.3 0.6-0.4 4.3 2 9 2 13.3 0 0.2 0.1 0.3 0.3 0.5 0.4 -0.7 0.4-1.3 0.7-2 1 0.4 0.7 0.9 1.5 1.3 2.2 2-0.6 4.1-1.6 6.2-3.1 0.6-4.9-0.7-9.6-4.5-13.8zM8.5 15.6c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c1.3 0 2.3 1.1 2.3 2.5S9.8 15.6 8.5 15.6zM15.5 15.6c-1.3 0-2.3-1.1-2.3-2.5s1-2.5 2.3-2.5c1.3 0 2.3 1.1 2.3 2.5S16.8 15.6 15.5 15.6z" />,
};

// Reusable Logo Item Component
const IntegrationItem: React.FC<{ 
  name: string; 
  svg: React.ReactNode; 
  color: string; 
  size?: number 
}> = ({ name, svg, color, size = 6 }) => (
  <div className="group flex items-center gap-3 p-2 -ml-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 cursor-default">
    <div className={`w-${size} h-${size} flex items-center justify-center`}>
         <svg viewBox="0 0 24 24" className={`w-full h-full fill-current transition-all duration-300 text-gray-500 opacity-60 group-hover:opacity-100 ${color}`}>
            {svg}
         </svg>
    </div>
    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">{name}</span>
  </div>
);

export const Integrations: React.FC = () => {
  return (
    <Section id="integrations" className="bg-white dark:bg-black relative overflow-hidden py-32 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* --- FLUID BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-white dark:bg-[#020202] pointer-events-none"></div>
      
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-accent-blue/5 dark:bg-accent-blue/10 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-[100px] animate-blob-delay pointer-events-none"></div>
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
            <div className="text-center mb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Link2 size={12} className="text-gray-900 dark:text-white" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white">The Neural Grid</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">
                  180+ Native Integrations. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">One Neural Index.</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                   Alvio ingests, normalizes, and permissions data from every silo in your stack.
                </p>
            </div>
        </FadeIn>

        {/* --- THE INTEGRATION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* 1. KNOWLEDGE */}
            <FadeIn delay={100}>
                <div className="h-full bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-[#050505] border border-gray-200 dark:border-white/10 hover:border-blue-500/30 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden shadow-lg dark:shadow-2xl">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-spin-slow"></div>
                    
                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                             <Database size={18} />
                        </div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-blue-500 dark:text-blue-400">Knowledge Base</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                        <IntegrationItem name="Confluence" svg={icons.confluence} color="group-hover:text-[#0052CC]" />
                        <IntegrationItem name="SharePoint" svg={icons.sharepoint} color="group-hover:text-[#0078D4]" />
                        <IntegrationItem name="Notion" svg={icons.notion} color="group-hover:text-black dark:group-hover:text-white" />
                        <IntegrationItem name="GitBook" svg={icons.gitbook} color="group-hover:text-blue-500" />
                        <IntegrationItem name="Google Drive" svg={icons.drive} color="group-hover:text-[#34A853]" />
                        <IntegrationItem name="Dropbox" svg={icons.dropbox} color="group-hover:text-[#0061FF]" />
                        <IntegrationItem name="AWS S3" svg={icons.s3} color="group-hover:text-[#FF9900]" />
                        <IntegrationItem name="Box" svg={icons.box} color="group-hover:text-[#0061D5]" />
                    </div>
                </div>
            </FadeIn>

            {/* 2. SALES & CRM */}
            <FadeIn delay={200}>
                <div className="h-full bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-[#050505] border border-gray-200 dark:border-white/10 hover:border-accent-orange/30 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden shadow-lg dark:shadow-2xl">
                     <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-accent-orange/10 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-spin-reverse-slow"></div>

                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-2 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange shadow-[0_0_15px_rgba(255,107,0,0.1)]">
                             <Zap size={18} />
                        </div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-orange">Sales & CRM</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                        <IntegrationItem name="Salesforce" svg={icons.salesforce} color="group-hover:text-[#00A1E0]" />
                        <IntegrationItem name="HubSpot" svg={icons.hubspot} color="group-hover:text-[#FF7A59]" />
                        <IntegrationItem name="Gong" svg={icons.gong} color="group-hover:text-[#8833FF]" />
                        <IntegrationItem name="Highspot" svg={icons.drive} color="group-hover:text-red-500" />
                        <IntegrationItem name="Intercom" svg={icons.notion} color="group-hover:text-blue-500" />
                        <IntegrationItem name="Pipedrive" svg={icons.gitbook} color="group-hover:text-green-500" />
                    </div>
                </div>
            </FadeIn>

            {/* 3. ENGINEERING */}
            <FadeIn delay={300}>
                 <div className="h-full bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-[#050505] border border-gray-200 dark:border-white/10 hover:border-accent-purple/30 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden shadow-lg dark:shadow-2xl">
                     <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-accent-purple/10 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-spin-slow"></div>

                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-2 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-accent-purple shadow-[0_0_15px_rgba(121,40,202,0.1)]">
                             <Shield size={18} />
                        </div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-purple">Engineering</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                        <IntegrationItem name="Jira" svg={icons.jira} color="group-hover:text-[#0052CC]" />
                        <IntegrationItem name="GitHub" svg={icons.github} color="group-hover:text-black dark:group-hover:text-white" />
                        <IntegrationItem name="GitLab" svg={icons.gitbook} color="group-hover:text-[#FC6D26]" />
                        <IntegrationItem name="Linear" svg={icons.linear} color="group-hover:text-[#5E6AD2]" />
                        <IntegrationItem name="Zendesk" svg={icons.zendesk} color="group-hover:text-[#03363D]" />
                        <IntegrationItem name="PagerDuty" svg={icons.s3} color="group-hover:text-[#00B336]" />
                    </div>
                </div>
            </FadeIn>

            {/* 4. MESSAGING */}
            <FadeIn delay={400}>
                <div className="h-full bg-white dark:bg-gradient-to-b dark:from-[#111] dark:to-[#050505] border border-gray-200 dark:border-white/10 hover:border-accent-pink/30 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden shadow-lg dark:shadow-2xl">
                     <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-accent-pink/10 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-spin-reverse-slow"></div>

                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="p-2 rounded-lg bg-accent-pink/10 border border-accent-pink/20 text-accent-pink shadow-[0_0_15px_rgba(255,0,128,0.1)]">
                             <Layers size={18} />
                        </div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-pink">Messaging</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                        <IntegrationItem name="Slack" svg={icons.slack} color="group-hover:text-[#E01E5A]" />
                        <IntegrationItem name="Teams" svg={icons.teams} color="group-hover:text-[#6264A7]" />
                        <IntegrationItem name="Discord" svg={icons.discord} color="group-hover:text-[#5865F2]" />
                        <IntegrationItem name="Gmail" svg={icons.drive} color="group-hover:text-[#EA4335]" />
                        <IntegrationItem name="Outlook" svg={icons.sharepoint} color="group-hover:text-[#0078D4]" />
                        <IntegrationItem name="Zulip" svg={icons.notion} color="group-hover:text-emerald-500" />
                    </div>
                </div>
            </FadeIn>

            {/* 5. FINANCIAL INTELLIGENCE (FEATURED METALLIC LIQUID GOLD CARD) */}
            <FadeIn delay={500} className="md:col-span-2">
                 <div className="h-full relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#1c1c1c] dark:via-[#0a0a0a] dark:to-black border border-gray-200 dark:border-white/10 rounded-3xl p-10 flex flex-col md:flex-row gap-10 group shadow-lg dark:shadow-2xl">
                     
                     {/* METALLIC LIQUID MERCURY EFFECT - GOLD/SILVER (Dark Mode Only) */}
                     <div className="absolute inset-0 opacity-0 dark:opacity-40 group-hover:dark:opacity-60 transition-opacity duration-1000">
                         <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-b from-gray-200 via-gray-500 to-gray-800 rounded-full blur-[100px] mix-blend-overlay animate-blob"></div>
                         <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-gradient-to-t from-gray-500 via-gray-700 to-black rounded-full blur-[80px] mix-blend-color-dodge animate-blob-delay"></div>
                     </div>
                     
                     {/* Liquid Chrome Surface Shine */}
                     <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>

                     {/* Content Left */}
                     <div className="flex-1 relative z-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-100 dark:to-gray-400 text-black border border-gray-200 dark:border-white/50 shadow-md">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Financial Intelligence</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg text-lg font-light">
                            <span className="text-black dark:text-white font-medium">The only AI engine with native accounting connectors.</span><br/>
                            Most AI stops at text. Alvio understands ledgers, invoices, and cash flow, enabling financial agents that actually work.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest border border-black/10 dark:border-white/10 px-3 py-1.5 rounded-full w-fit bg-gray-100 dark:bg-black/40 backdrop-blur-md">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                            Read & Write Access
                        </div>
                     </div>

                     {/* Content Right (Accounting Logos including Zoho) */}
                     <div className="flex-1 relative z-10 flex flex-col justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24">
                                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-400 group-hover/item:text-[#13B5EA] transition-colors">{icons.xero}</svg>
                                  <span className="text-gray-600 dark:text-gray-200 font-medium text-xs">Xero</span>
                             </div>
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24">
                                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-400 group-hover/item:text-[#2CA01C] transition-colors">{icons.quickbooks}</svg>
                                  <span className="text-gray-600 dark:text-gray-200 font-medium text-xs">QuickBooks</span>
                             </div>
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24">
                                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-400 group-hover/item:text-[#00D639] transition-colors">{icons.sage}</svg>
                                  <span className="text-gray-600 dark:text-gray-200 font-medium text-xs">Sage</span>
                             </div>
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24">
                                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-400 group-hover/item:text-blue-400 transition-colors">{icons.netsuite}</svg>
                                  <span className="text-gray-600 dark:text-gray-200 font-medium text-xs">NetSuite</span>
                             </div>
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24">
                                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-400 group-hover/item:text-[#FFC107] transition-colors">{icons.zoho}</svg>
                                  <span className="text-gray-600 dark:text-gray-200 font-medium text-xs">Zoho</span>
                             </div>
                             <div className="bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group/item backdrop-blur-md shadow-sm dark:shadow-lg text-center h-24 opacity-60">
                                  <div className="w-8 h-8 rounded-full border border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center text-gray-500 text-xs">+</div>
                                  <span className="text-gray-500 dark:text-gray-400 font-medium text-xs">More</span>
                             </div>
                        </div>
                     </div>

                 </div>
            </FadeIn>

        </div>

      </div>
    </Section>
  );
};