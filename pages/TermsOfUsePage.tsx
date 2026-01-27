import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText, Shield, AlertCircle, Users, Ban, Gavel } from 'lucide-react';

export default function TermsOfUsePage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using ALVIO's services, you agree to be bound by these Terms of Use and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "We reserve the right to update these terms at any time. Your continued use of the service constitutes acceptance of any changes."
      ]
    },
    {
      icon: Shield,
      title: "2. Use License",
      content: [
        "Permission is granted to temporarily use ALVIO's services for personal or commercial use in accordance with these terms.",
        "This license does not include:",
        "• Modifying or copying service materials without authorization",
        "• Using materials for commercial purposes without proper licensing",
        "• Attempting to reverse engineer any software or systems",
        "• Removing any copyright or proprietary notations",
        "• Transferring materials to another person or mirroring on other servers"
      ]
    },
    {
      icon: Users,
      title: "3. User Accounts",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate these terms."
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Acceptable Use",
      content: [
        "You agree not to use our services to:",
        "• Violate any applicable laws or regulations",
        "• Infringe upon intellectual property rights",
        "• Transmit harmful code, viruses, or malware",
        "• Engage in unauthorized data collection or scraping",
        "• Interfere with or disrupt service integrity or performance",
        "• Impersonate any person or entity",
        "• Harass, abuse, or harm others"
      ]
    },
    {
      icon: Shield,
      title: "5. Intellectual Property",
      content: [
        "All content, features, and functionality of ALVIO services are owned by ALVIO Labs Limited and protected by international copyright, trademark, and other intellectual property laws.",
        "Our trademarks and trade dress may not be used without prior written consent.",
        "User-generated content remains the property of the user, but you grant ALVIO a license to use, modify, and display such content as necessary to provide services."
      ]
    },
    {
      icon: Ban,
      title: "6. Disclaimer",
      content: [
        "ALVIO services are provided 'as is' without warranties of any kind, either express or implied.",
        "We do not warrant that:",
        "• Services will be uninterrupted or error-free",
        "• Defects will be corrected",
        "• Services are free of viruses or harmful components",
        "• Results from service use will be accurate or reliable",
        "You use our services at your own risk."
      ]
    },
    {
      icon: Gavel,
      title: "7. Limitation of Liability",
      content: [
        "ALVIO Labs Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:",
        "• Your use or inability to use our services",
        "• Unauthorized access to or alteration of your data",
        "• Statements or conduct of third parties on the service",
        "• Any other matter relating to the service",
        "In no event shall our total liability exceed the amount paid by you for the services in the past 12 months."
      ]
    },
    {
      icon: Shield,
      title: "8. Indemnification",
      content: [
        "You agree to indemnify and hold harmless ALVIO Labs Limited, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from:",
        "• Your use of our services",
        "• Your violation of these terms",
        "• Your violation of any rights of another party",
        "• Your violation of any applicable laws or regulations"
      ]
    },
    {
      icon: FileText,
      title: "9. Termination",
      content: [
        "We may terminate or suspend your account and access to services immediately, without prior notice, for:",
        "• Breach of these Terms of Use",
        "• Request by law enforcement or government agencies",
        "• Unexpected technical issues or problems",
        "• Extended periods of inactivity",
        "Upon termination, your right to use the services will immediately cease."
      ]
    },
    {
      icon: Gavel,
      title: "10. Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of the United Kingdom.",
        "Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of the United Kingdom.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect."
      ]
    },
    {
      icon: FileText,
      title: "11. Contact Information",
      content: [
        "For questions about these Terms of Use, please contact us:",
        "Email: info@alvio.io",
        "Legal inquiries: legal@alvio.io"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Please read these terms carefully before using ALVIO services
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last Updated: January 27, 2026
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 flex-1">
                      {section.title}
                    </h2>
                  </div>
                  <div className="ml-16 space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-sm text-slate-600 text-center">
              By using ALVIO services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
