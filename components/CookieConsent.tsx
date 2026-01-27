import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, BarChart, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('alvio_cookie_consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('alvio_cookie_consent', JSON.stringify(prefs));
    localStorage.setItem('alvio_consent_date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 z-50 backdrop-blur-md animate-fade-in" style={{ display: showBanner ? 'block' : 'none' }} />

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none animate-slide-up">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="relative bg-gradient-to-br from-white via-white to-slate-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200/60 dark:border-slate-700/60 overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 via-emerald-100/30 to-transparent dark:from-blue-500/10 dark:via-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-100/40 via-blue-100/30 to-transparent dark:from-emerald-500/10 dark:via-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-6 md:p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-40 animate-pulse" />
                  <div className="relative p-3.5 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl shadow-lg">
                    <Cookie className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      We Value Your Privacy
                    </h3>
                    <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>Read our</span>
                    <Link to="/cookie-policy" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                      Cookie Policy
                    </Link>
                    <span>and</span>
                    <Link to="/privacy-policy" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="group relative flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Accept All Cookies
                  </span>
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 px-6 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold border-2 border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.02]"
                >
                  <Settings className="w-5 h-5" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md" onClick={() => setShowSettings(false)} />
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border-2 border-slate-200 dark:border-slate-700 animate-scale-in">
            <div className="sticky top-0 bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border-b-2 border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between backdrop-blur-xl z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Cookie Preferences</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Customize your privacy settings</p>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="p-6 space-y-4">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 border-2 border-slate-200 dark:border-slate-600 p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-md">
                      <Shield className="w-7 h-7 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Essential Cookies</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200">Always Active</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Required for the website to function. These cookies enable core functionality such as security,
                        network management, and accessibility. You cannot disable these cookies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-5 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                      <Cookie className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Functional Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-emerald-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Enable enhanced functionality and personalization, such as remembering your preferences and settings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-5 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                      <BarChart className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Analytics Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-200 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-emerald-600 peer-checked:to-blue-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-5 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                      <Megaphone className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Marketing Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-200 dark:peer-focus:ring-orange-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-orange-600 peer-checked:to-emerald-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Used to track visitors across websites to display relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 border-t-2 border-slate-200 dark:border-slate-700 p-6 flex gap-3 backdrop-blur-xl">
              <button
                onClick={saveCustomPreferences}
                className="group relative flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Save Preferences
                </span>
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-3.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
