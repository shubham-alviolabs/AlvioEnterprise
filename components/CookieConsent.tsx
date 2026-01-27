import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, BarChart, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConsent, CookiePreferences } from '../contexts/ConsentContext';

export default function CookieConsent() {
  const { hasConsent, updatePreferences, showPreferencesModal, closePreferences, openPreferences, preferences: savedPreferences } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    if (!hasConsent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, [hasConsent]);

  useEffect(() => {
    if (showPreferencesModal && savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, [showPreferencesModal, savedPreferences]);

  const savePreferences = (prefs: CookiePreferences) => {
    updatePreferences(prefs);
    setShowBanner(false);
    closePreferences();
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

  if (!showBanner && !showPreferencesModal) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/70 via-pink-950/60 to-orange-950/70 z-50 backdrop-blur-md animate-fade-in" style={{ display: showBanner ? 'block' : 'none' }} />

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none animate-slide-up">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-950/95 to-pink-950/95 dark:from-slate-950/98 dark:via-purple-950/98 dark:to-pink-950/98 rounded-3xl shadow-2xl border border-orange-500/30 dark:border-pink-500/40 overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-pink-500/5" />

            <div className="relative p-6 md:p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl blur-xl opacity-60 animate-pulse" />
                  <div className="relative p-3.5 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-lg shadow-pink-500/50">
                    <Cookie className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      We Value Your Privacy
                    </h3>
                    <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                  </div>
                  <p className="text-slate-300 dark:text-slate-200 leading-relaxed mb-3">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 dark:text-slate-300">
                    <span>Read our</span>
                    <Link to="/cookie-policy" className="inline-flex items-center gap-1 text-orange-400 dark:text-orange-300 hover:text-pink-400 dark:hover:text-pink-300 font-semibold transition-colors">
                      Cookie Policy
                    </Link>
                    <span>and</span>
                    <Link to="/privacy-policy" className="inline-flex items-center gap-1 text-orange-400 dark:text-orange-300 hover:text-pink-400 dark:hover:text-pink-300 font-semibold transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="group relative flex-1 px-6 py-3.5 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white rounded-xl font-bold hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Accept All Cookies
                  </span>
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 px-6 py-3.5 bg-slate-800/50 dark:bg-slate-900/50 text-slate-200 dark:text-slate-200 rounded-xl font-bold border border-slate-700 dark:border-slate-700 hover:bg-slate-700/50 dark:hover:bg-slate-800/50 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20 hover:scale-[1.02]"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => {
                    setShowBanner(false);
                    setTimeout(() => {
                      openPreferences();
                    }, 100);
                  }}
                  className="flex-1 px-6 py-3.5 bg-slate-800/30 dark:bg-slate-900/30 text-slate-200 dark:text-slate-200 rounded-xl font-bold border border-purple-500/50 dark:border-pink-500/50 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-slate-800/50 dark:hover:bg-slate-900/50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-500/20 hover:scale-[1.02]"
                >
                  <Settings className="w-5 h-5" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPreferencesModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-pink-950/70 to-orange-950/80 backdrop-blur-md" onClick={closePreferences} />
          <div className="relative bg-gradient-to-br from-slate-900/98 via-purple-950/98 to-pink-950/98 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-pink-500/40 animate-scale-in">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 via-pink-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="sticky top-0 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-pink-900/95 border-b border-orange-500/30 p-6 flex items-center justify-between backdrop-blur-xl z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl shadow-lg shadow-pink-500/50">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Cookie Preferences</h3>
                  <p className="text-sm text-slate-300">Customize your privacy settings</p>
                </div>
              </div>
              <button
                onClick={closePreferences}
                className="p-2.5 hover:bg-pink-900/30 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-slate-300" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="p-6 space-y-4">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 via-slate-800/40 to-slate-900/50 border border-slate-700/50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800/70 rounded-xl shadow-md border border-slate-700/50">
                      <Shield className="w-7 h-7 text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-100">Essential Cookies</h4>
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-700/70 text-slate-200 border border-slate-600/50">Always Active</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Required for the website to function. These cookies enable core functionality such as security,
                        network management, and accessibility. You cannot disable these cookies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50 p-5 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-900/30 rounded-xl shadow-md group-hover:scale-110 transition-transform border border-purple-700/40">
                      <Cookie className="w-7 h-7 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-100">Functional Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-600 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-pink-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Enable enhanced functionality and personalization, such as remembering your preferences and settings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50 p-5 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-900/30 rounded-xl shadow-md group-hover:scale-110 transition-transform border border-pink-700/40">
                      <BarChart className="w-7 h-7 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-100">Analytics Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-600 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-600 peer-checked:to-purple-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700/50 p-5 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-900/30 rounded-xl shadow-md group-hover:scale-110 transition-transform border border-orange-700/40">
                      <Megaphone className="w-7 h-7 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-100">Marketing Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-500/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-600 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-orange-600 peer-checked:to-pink-600 shadow-inner"></div>
                        </label>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Used to track visitors across websites to display relevant and engaging advertisements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-pink-900/95 border-t border-orange-500/30 p-6 flex gap-3 backdrop-blur-xl">
              <button
                onClick={saveCustomPreferences}
                className="group relative flex-1 px-6 py-3.5 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white rounded-xl font-bold hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Save Preferences
                </span>
              </button>
              <button
                onClick={closePreferences}
                className="px-6 py-3.5 bg-slate-800/50 text-slate-200 rounded-xl font-bold border border-slate-700 hover:bg-slate-700/50 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20 hover:scale-[1.02]"
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
