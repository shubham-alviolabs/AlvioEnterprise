import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <>
      <Section className="bg-alvio-900 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <h3 className="text-2xl font-medium text-white mb-6">Who We're Building For</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium mb-2">Teams & Organizations</h4>
                <p className="text-gray-400">If your team uses lots of tools and struggles to find information, ALVIO was built for you. From startups to enterprises.</p>
              </div>
              <div>
                 <h4 className="text-white font-medium mb-2">Individual Professionals</h4>
                <p className="text-gray-400">If you manage complex projects, juggle multiple responsibilities, or just want AI that actually helps—ALVIO is for you too.</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 h-full">
              <h3 className="text-2xl font-medium text-white mb-6">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We believe AI should be accessible to everyone—not just tech giants. ALVIO democratizes intelligent systems by making them practical, secure, and genuinely helpful for real work.
              </p>
              <p className="text-white font-medium">
                We're not building hype. We're building infrastructure that helps people and teams do their best work.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};