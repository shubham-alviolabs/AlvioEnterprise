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
      <div className="fixed inset-0 bg-black/20 z-50 backdrop-blur-[2px] animate-fade-in" style={{ display: showBanner ? 'block' : 'none' }} />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-slide-up px-4">
        <div className="pointer-events-auto max-w-3xl">
          <div className="relative bg-white/80 dark:bg-black/80 rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 via-accent-pink/5 to-accent-purple/5"></div>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>

            <div className="relative px-5 py-3">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-pink blur-md opacity-40"></div>
                  <div className="relative p-2 bg-gradient-to-r from-accent-orange to-accent-pink rounded-xl">
                    <Cookie className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
                    We use cookies to enhance your experience.
                    <Link to="/cookie-policy" className="ml-1.5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple hover:opacity-80 transition-opacity">
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
                    className="group relative px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Customize</span>
                  </button>

                  <button
                    onClick={rejectNonEssential}
                    className="group relative px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-all overflow-hidden border border-black/10 dark:border-white/10"
                  >
                    <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Reject</span>
                  </button>

                  <button
                    onClick={acceptAll}
                    className="group relative px-4 py-1.5 text-xs font-semibold text-white rounded-lg transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">Accept All</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPreferencesModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={closePreferences} />
          <div className="relative bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-black/10 dark:border-white/10 animate-scale-in backdrop-blur-2xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>

            <div className="sticky top-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-5 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-purple blur-md opacity-30"></div>
                  <div className="relative p-2 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple rounded-xl">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cookie Preferences</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Manage your privacy settings</p>
                </div>
              </div>
              <button
                onClick={closePreferences}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-140px)]">
              <div className="p-5 space-y-3">
                <div className="group relative rounded-xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent"></div>
                  <div className="flex items-start gap-3">
                    <div className="relative p-2 bg-white dark:bg-black rounded-lg border border-black/10 dark:border-white/10">
                      <Shield className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Essential Cookies</h4>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">Always Active</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 hover:border-accent-orange/50 dark:hover:border-accent-orange/30 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-3 relative">
                    <div className="p-2 bg-white dark:bg-black rounded-lg border border-black/10 dark:border-white/10 group-hover:border-accent-orange/30 transition-colors">
                      <Cookie className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-accent-orange transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Functional Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-orange/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-accent-orange peer-checked:to-accent-pink"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 hover:border-accent-pink/50 dark:hover:border-accent-pink/30 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-3 relative">
                    <div className="p-2 bg-white dark:bg-black rounded-lg border border-black/10 dark:border-white/10 group-hover:border-accent-pink/30 transition-colors">
                      <BarChart className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-accent-pink transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Analytics Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-pink/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-accent-pink peer-checked:to-accent-purple"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Help us understand visitor interactions anonymously.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 hover:border-accent-purple/50 dark:hover:border-accent-purple/30 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-3 relative">
                    <div className="p-2 bg-white dark:bg-black rounded-lg border border-black/10 dark:border-white/10 group-hover:border-accent-purple/30 transition-colors">
                      <Megaphone className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-accent-purple transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Marketing Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-purple/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-accent-purple peer-checked:to-accent-orange"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Track visitors for relevant advertisements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-t border-black/5 dark:border-white/5 px-5 py-4 flex gap-3">
              <button
                onClick={saveCustomPreferences}
                className="group relative flex-1 px-4 py-2.5 text-white rounded-lg text-sm font-semibold transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Save Preferences</span>
              </button>
              <button
                onClick={closePreferences}
                className="px-4 py-2.5 bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10"
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
