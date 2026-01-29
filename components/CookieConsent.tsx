import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, BarChart, Megaphone } from 'lucide-react';
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
      <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm animate-fade-in" style={{ display: showBanner ? 'block' : 'none' }} />

      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 pointer-events-none animate-slide-up">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <div className="relative bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 overflow-hidden backdrop-blur-xl">
            <div className="relative px-4 py-3 md:px-5 md:py-3.5">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex-shrink-0 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Cookie className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-snug">
                    We use cookies to enhance your experience.
                    <Link to="/cookie-policy" className="ml-1 text-slate-900 dark:text-white font-medium hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      setShowBanner(false);
                      setTimeout(() => {
                        openPreferences();
                      }, 100);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Customize
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPreferencesModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closePreferences} />
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-slate-200 dark:border-slate-700 animate-scale-in">
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-5 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Settings className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cookie Preferences</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Manage your privacy settings</p>
                </div>
              </div>
              <button
                onClick={closePreferences}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-140px)]">
              <div className="p-5 space-y-3">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Shield className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Essential Cookies</h4>
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">Always Active</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Cookie className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Functional Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-400 dark:peer-focus:ring-slate-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900 dark:peer-checked:bg-white"></div>
                        </label>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <BarChart className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Analytics Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-400 dark:peer-focus:ring-slate-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900 dark:peer-checked:bg-white"></div>
                        </label>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Help us understand visitor interactions anonymously.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <Megaphone className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Marketing Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-400 dark:peer-focus:ring-slate-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900 dark:peer-checked:bg-white"></div>
                        </label>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Track visitors for relevant advertisements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-5 py-4 flex gap-3">
              <button
                onClick={saveCustomPreferences}
                className="flex-1 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={closePreferences}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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
