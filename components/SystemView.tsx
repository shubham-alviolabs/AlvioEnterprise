import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { Shield, Lock, Scale, Eye } from 'lucide-react';

export const SystemView: React.FC = () => {
  return (
    <div className="bg-alvio-950">
      {/* Connection Section */}
      <Section id="connection" className="border-t border-white/5">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">One System. Different Constraints.</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Both organisational and individual experiences are powered by the same intelligence core. 
              The intelligence does not change. Only the constraints do.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-white font-medium mb-2">Organisations require</h4>
                <p className="text-gray-500">Governance, permissions, scale, and auditability.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                 <h4 className="text-white font-medium mb-2">Individuals require</h4>
                <p className="text-gray-500">Speed, autonomy, flexibility, and privacy.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Trust Section */}
      <Section id="trust" className="py-24 bg-black">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Built for Real-World Use</h2>
            <p className="text-gray-400">Reliable, explainable, and secure by design.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Lock className="w-6 h-6" />, label: "Access Control" },
              { icon: <Shield className="w-6 h-6" />, label: "Data Boundaries" },
              { icon: <Scale className="w-6 h-6" />, label: "Organisational Structure" },
              { icon: <Eye className="w-6 h-6" />, label: "Auditability" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-gray-300">{item.icon}</div>
                <span className="text-sm font-medium text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};