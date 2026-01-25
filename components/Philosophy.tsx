import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <>
      <Section className="bg-alvio-900 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <h3 className="text-2xl font-medium text-white mb-6">Who ALVIO Is For</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-medium mb-2">Organisations</h4>
                <p className="text-gray-400">Enterprises managing complex systems, teams overwhelmed by information, and leaders seeking leverage.</p>
              </div>
              <div>
                 <h4 className="text-white font-medium mb-2">Individuals</h4>
                <p className="text-gray-400">Knowledge workers, founders, operators, and anyone who wants AI that can actually execute work.</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 h-full">
              <h3 className="text-2xl font-medium text-white mb-6">Built by Alvio Labs</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Alvio Labs builds AI systems with a long-term view. We focus on foundational intelligence, not surface features.
                Systems that compound over time. AI that works in the real world.
              </p>
              <p className="text-white font-medium">
                ALVIO is not an experiment. It is infrastructure for the future of work.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
};