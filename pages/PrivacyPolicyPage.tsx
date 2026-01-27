import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/Section';
import { FadeIn } from '../components/ui/FadeIn';
import { Shield, Lock, Eye, FileText, Mail, Globe, Database, UserCheck, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "January 27, 2026";

  const sections = [
    {
      icon: FileText,
      title: "1. Introduction",
      content: [
        "ALVIO Labs Limited ('we', 'us', 'our') is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.",
        "This policy complies with the EU General Data Protection Regulation (GDPR) and other applicable data protection laws. By using ALVIO, you agree to the collection and use of information in accordance with this policy."
      ]
    },
    {
      icon: Database,
      title: "2. Data Controller",
      content: [
        "ALVIO Labs Limited is the data controller responsible for your personal data.",
        "Registered Office: [Address]",
        "Email: privacy@alvio.ai",
        "Data Protection Officer: dpo@alvio.ai"
      ]
    },
    {
      icon: Eye,
      title: "3. Information We Collect",
      subsections: [
        {
          subtitle: "3.1 Personal Information",
          items: [
            "Account information (name, email address, company name)",
            "Contact details and communication preferences",
            "Billing information (processed securely through third-party payment processors)",
            "Profile information and preferences"
          ]
        },
        {
          subtitle: "3.2 Usage Data",
          items: [
            "Log data (IP address, browser type, operating system)",
            "Device information and unique identifiers",
            "Workflow configurations and automation settings",
            "Analytics data about how you interact with our platform"
          ]
        },
        {
          subtitle: "3.3 Integration Data",
          items: [
            "Data from connected third-party services (with your explicit consent)",
            "OAuth tokens and API credentials (encrypted and stored securely)",
            "Workflow execution logs and performance metrics"
          ]
        },
        {
          subtitle: "3.4 Communications Data",
          items: [
            "Support tickets and correspondence",
            "Feedback and survey responses",
            "Marketing communication preferences"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "4. Legal Basis for Processing (GDPR)",
      content: [
        "We process your personal data under the following legal bases:",
        "• Contract Performance: To provide our services and fulfill our contractual obligations",
        "• Legitimate Interests: To improve our services, prevent fraud, and ensure security",
        "• Consent: For marketing communications and non-essential cookies (which you can withdraw at any time)",
        "• Legal Obligation: To comply with applicable laws and regulations"
      ]
    },
    {
      icon: Globe,
      title: "5. How We Use Your Information",
      content: [
        "We use collected information for the following purposes:",
        "• Provide, maintain, and improve our services",
        "• Process transactions and send transaction notifications",
        "• Respond to your comments, questions, and customer service requests",
        "• Send administrative information and service updates",
        "• Monitor and analyze usage patterns and trends",
        "• Detect, prevent, and address technical issues and security threats",
        "• Personalize your experience and deliver targeted content",
        "• Send marketing communications (with your consent, which can be withdrawn)",
        "• Comply with legal obligations and enforce our terms"
      ]
    },
    {
      icon: Shield,
      title: "6. Data Sharing and Disclosure",
      content: [
        "We do not sell your personal data. We may share your information in the following circumstances:",
        "• Service Providers: Third-party vendors who perform services on our behalf (hosting, analytics, customer support) under strict confidentiality agreements",
        "• Business Transfers: In connection with mergers, acquisitions, or sale of assets (with notice to you)",
        "• Legal Requirements: When required by law or to protect our rights and safety",
        "• With Your Consent: When you explicitly authorize us to share specific information",
        "• Integration Partners: Data necessary for connected third-party services to function (as configured by you)"
      ]
    },
    {
      icon: Database,
      title: "7. Data Retention",
      content: [
        "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:",
        "• Account Data: Retained while your account is active and for 30 days after deletion (unless legal requirements mandate longer retention)",
        "• Usage Logs: Retained for 12 months for security and analytics purposes",
        "• Financial Records: Retained for 7 years to comply with accounting and tax regulations",
        "• Marketing Data: Retained until you withdraw consent or request deletion"
      ]
    },
    {
      icon: Globe,
      title: "8. International Data Transfers",
      content: [
        "Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place:",
        "• Standard Contractual Clauses (SCCs) approved by the European Commission",
        "• Adequacy decisions recognizing equivalent data protection standards",
        "• Your explicit consent for specific transfers",
        "All transfers comply with GDPR Chapter V requirements."
      ]
    },
    {
      icon: Lock,
      title: "9. Data Security",
      content: [
        "We implement industry-standard security measures to protect your data:",
        "• Encryption in transit (TLS/SSL) and at rest (AES-256)",
        "• Regular security audits and penetration testing",
        "• Access controls and authentication mechanisms",
        "• Employee training on data protection and security practices",
        "• Incident response procedures and breach notification protocols",
        "While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security."
      ]
    },
    {
      icon: UserCheck,
      title: "10. Your Rights (GDPR)",
      content: [
        "Under GDPR, you have the following rights regarding your personal data:",
        "• Right to Access: Request a copy of your personal data",
        "• Right to Rectification: Correct inaccurate or incomplete data",
        "• Right to Erasure ('Right to be Forgotten'): Request deletion of your data",
        "• Right to Restriction: Limit how we use your data",
        "• Right to Data Portability: Receive your data in a structured, machine-readable format",
        "• Right to Object: Object to processing based on legitimate interests or for direct marketing",
        "• Right to Withdraw Consent: Withdraw consent at any time (without affecting prior processing)",
        "• Right to Lodge a Complaint: File a complaint with your local data protection authority",
        "To exercise these rights, contact us at privacy@alvio.ai. We will respond within 30 days."
      ]
    },
    {
      icon: Eye,
      title: "11. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience:",
        "• Essential Cookies: Necessary for platform functionality (no consent required)",
        "• Analytics Cookies: Help us understand how you use our platform (consent required)",
        "• Marketing Cookies: Used for targeted advertising (consent required)",
        "You can manage cookie preferences through your browser settings or our cookie consent tool. Note that disabling certain cookies may limit platform functionality."
      ]
    },
    {
      icon: UserCheck,
      title: "12. Children's Privacy",
      content: [
        "Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information immediately."
      ]
    },
    {
      icon: FileText,
      title: "13. Automated Decision-Making",
      content: [
        "We may use automated decision-making, including profiling, to:",
        "• Personalize your experience and recommend relevant features",
        "• Detect and prevent fraud or security threats",
        "• Optimize workflow performance and suggestions",
        "You have the right to request human intervention, express your point of view, and contest automated decisions. Contact us at privacy@alvio.ai for more information."
      ]
    },
    {
      icon: Mail,
      title: "14. Marketing Communications",
      content: [
        "With your consent, we may send marketing emails about new features, updates, and promotions. You can opt out at any time by:",
        "• Clicking the 'unsubscribe' link in any marketing email",
        "• Updating your preferences in your account settings",
        "• Contacting us at privacy@alvio.ai",
        "Note that you will continue to receive essential service-related communications."
      ]
    },
    {
      icon: AlertCircle,
      title: "15. Data Breach Notification",
      content: [
        "In the event of a data breach that poses a risk to your rights and freedoms, we will:",
        "• Notify the relevant supervisory authority within 72 hours",
        "• Inform affected individuals without undue delay",
        "• Provide information about the breach, potential consequences, and mitigation measures"
      ]
    },
    {
      icon: FileText,
      title: "16. Third-Party Links",
      content: [
        "Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information."
      ]
    },
    {
      icon: Shield,
      title: "17. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by:",
        "• Posting the updated policy on our website with a new 'Last Updated' date",
        "• Sending an email notification to your registered email address",
        "• Displaying a prominent notice on our platform",
        "Your continued use of our services after changes become effective constitutes acceptance of the updated policy."
      ]
    },
    {
      icon: Mail,
      title: "18. Contact Us",
      content: [
        "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@alvio.ai",
        "Data Protection Officer: dpo@alvio.ai",
        "Address: ALVIO Labs Limited, [Full Address]",
        "EU Representative (if applicable): [Representative Details]",
        "You also have the right to lodge a complaint with your local supervisory authority if you believe we have not complied with applicable data protection laws."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-black dark:via-slate-950 dark:to-gray-950 text-gray-900 dark:text-white">
      <Navbar />

      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full border-2 border-blue-500/40 bg-gradient-to-r from-blue-500/15 via-blue-600/15 to-blue-500/15 backdrop-blur-xl shadow-xl shadow-blue-500/20">
                <Shield size={16} className="text-blue-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Privacy & Data Protection</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
                Privacy Policy
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Your privacy and data protection rights matter to us
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <FileText size={14} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-12">
                <div className="flex items-start gap-3">
                  <AlertCircle size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mt-0 mb-2">GDPR Compliant</h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                      This privacy policy is designed to comply with the EU General Data Protection Regulation (GDPR) and provides transparency about how we collect, use, and protect your personal data. You have comprehensive rights over your data, which are detailed below.
                    </p>
                  </div>
                </div>
              </div>

              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} className="mb-12 scroll-mt-24" id={`section-${index + 1}`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-orange/20 dark:from-accent-pink/10 dark:to-accent-orange/10 flex items-center justify-center flex-shrink-0 border border-accent-orange/30">
                        <IconComponent size={24} className="text-accent-orange" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mt-0 mb-4 text-gray-900 dark:text-white">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {section.content && (
                      <div className="ml-16 space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.subsections && (
                      <div className="ml-16 space-y-6">
                        {section.subsections.map((subsection, sIndex) => (
                          <div key={sIndex}>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-2 list-none pl-0">
                              {subsection.items.map((item, iIndex) => (
                                <li key={iIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-accent-orange flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-pink/30">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Questions About Your Privacy?</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We're here to help. Contact our privacy team for any questions, concerns, or to exercise your data protection rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="mailto:privacy@alvio.ai"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-pink to-accent-orange text-white font-semibold shadow-lg shadow-accent-pink/30 hover:shadow-accent-orange/40 hover:scale-105 transition-all duration-300"
                      >
                        <Mail size={18} />
                        <span>privacy@alvio.ai</span>
                      </a>
                      <a
                        href="mailto:dpo@alvio.ai"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-accent-orange dark:hover:border-accent-orange hover:scale-105 transition-all duration-300"
                      >
                        <Shield size={18} />
                        <span>Data Protection Officer</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
};
