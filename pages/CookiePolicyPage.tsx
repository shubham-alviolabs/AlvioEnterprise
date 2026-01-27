import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Cookie, Shield, Settings, Info, Database, CheckCircle } from 'lucide-react';

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: Info,
      title: "1. What Are Cookies",
      content: [
        "Cookies are small text files that are placed on your device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.",
        "Cookies help us understand how you use our services, remember your preferences, and improve your experience."
      ]
    },
    {
      icon: Database,
      title: "2. Types of Cookies We Use",
      subsections: [
        {
          name: "Essential Cookies",
          description: "Required for the website to function properly. These cannot be disabled.",
          examples: [
            "Authentication and session management",
            "Security and fraud prevention",
            "Load balancing and performance optimization"
          ]
        },
        {
          name: "Functional Cookies",
          description: "Enable enhanced functionality and personalization.",
          examples: [
            "Language preferences",
            "User interface customization",
            "Remember your settings and preferences"
          ]
        },
        {
          name: "Analytics Cookies",
          description: "Help us understand how visitors interact with our website.",
          examples: [
            "Page view tracking",
            "User behavior analysis",
            "Performance metrics",
            "Error tracking and debugging"
          ]
        },
        {
          name: "Marketing Cookies",
          description: "Used to track visitors across websites to display relevant advertisements.",
          examples: [
            "Advertising campaign performance",
            "Remarketing and retargeting",
            "Social media integration"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "3. Third-Party Cookies",
      content: [
        "We may use third-party services that set cookies on your device:",
        "• Analytics providers (e.g., Google Analytics)",
        "• Advertising networks",
        "• Social media platforms",
        "• Customer support tools",
        "These third parties have their own privacy policies and we have no control over their cookies."
      ]
    },
    {
      icon: Settings,
      title: "4. Managing Your Cookie Preferences",
      content: [
        "You have the right to decide whether to accept or reject cookies. You can:",
        "• Use our cookie consent banner to set your preferences",
        "• Modify your browser settings to block or delete cookies",
        "• Opt out of third-party advertising cookies",
        "Please note that blocking essential cookies may affect website functionality."
      ]
    },
    {
      icon: CheckCircle,
      title: "5. Cookie Duration",
      content: [
        "Session Cookies: Temporary cookies that are deleted when you close your browser.",
        "Persistent Cookies: Remain on your device for a set period or until you delete them.",
        "Most of our cookies are persistent and expire after 12 months, though some may last longer."
      ]
    },
    {
      icon: Info,
      title: "6. Updates to This Policy",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices.",
        "The 'Last Updated' date at the top of this page indicates when the policy was last revised.",
        "We encourage you to review this policy periodically."
      ]
    },
    {
      icon: Shield,
      title: "7. Contact Us",
      content: [
        "If you have questions about our use of cookies, please contact us:",
        "Email: info@alvio.io",
        "Privacy Team: privacy@alvio.io"
      ]
    }
  ];

  const cookieTable = [
    { name: "alvio_session", purpose: "Authentication", type: "Essential", duration: "Session" },
    { name: "alvio_consent", purpose: "Cookie preferences", type: "Essential", duration: "12 months" },
    { name: "alvio_lang", purpose: "Language preference", type: "Functional", duration: "12 months" },
    { name: "_ga", purpose: "Analytics", type: "Analytics", duration: "24 months" },
    { name: "_gid", purpose: "Analytics", type: "Analytics", duration: "24 hours" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              How we use cookies and similar technologies to improve your experience
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
                  <div className="ml-16 space-y-4">
                    {section.content && section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.subsections && section.subsections.map((subsection, sIndex) => (
                      <div key={sIndex} className="mt-4">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {subsection.name}
                        </h3>
                        <p className="text-slate-600 mb-2">{subsection.description}</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {subsection.examples.map((example, eIndex) => (
                            <li key={eIndex}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Purpose</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-3 px-4 text-sm font-mono text-slate-900">{cookie.name}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{cookie.type}</td>
                      <td className="py-3 px-4 text-sm text-slate-600">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-sm text-slate-600 text-center">
              By continuing to use our website, you consent to our use of cookies in accordance with this policy.
              You can change your cookie preferences at any time using our cookie consent tool.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
