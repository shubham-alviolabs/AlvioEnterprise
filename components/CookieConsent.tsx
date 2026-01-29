import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, BarChart, Megaphone, Sparkles, ChefHat } from 'lucide-react';
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
      {showBanner && !showPreferencesModal && (
        <>
          <div className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm animate-fade-in" />
          <div className="fixed bottom-6 right-6 z-[60] pointer-events-auto animate-slide-in-bounce group">
            <div className="relative">
              <div className="absolute -top-8 -right-2 animate-float-fast">
                <Sparkles className="w-4 h-4 text-accent-orange" />
              </div>
              <div className="absolute -top-6 -left-3 animate-float-medium">
                <Sparkles className="w-3 h-3 text-accent-pink" />
              </div>

              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-black/95 dark:via-black/90 dark:to-black/95 rounded-3xl shadow-2xl border-2 border-black/10 dark:border-white/10 overflow-hidden backdrop-blur-2xl w-80 transform transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-orange/20 via-accent-pink/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative group-hover:animate-wiggle">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-pink blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple p-3 rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-accent-purple rounded-full p-1">
                      <ChefHat className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Cookie Time!
                      <span className="inline-block animate-wave ml-1">🍪</span>
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      We've baked some fresh cookies to make your visit sweeter. Take all, pick your favorites, or skip the jar!
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <button
                    onClick={acceptAll}
                    className="group/btn relative w-full px-4 py-3 text-sm font-bold text-white rounded-xl transition-all overflow-hidden hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 animate-shimmer"></div>
                    </div>
                    <span className="relative flex items-center justify-center gap-2">
                      Take All Cookies
                      <span className="text-lg animate-bounce">🎉</span>
                    </span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={openPreferences}
                      className="group/btn relative px-3 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-xl transition-all border-2 border-black/10 dark:border-white/10 hover:border-accent-purple/50 dark:hover:border-accent-purple/40 overflow-hidden hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center justify-center gap-1">
                        <Settings className="w-3.5 h-3.5" />
                        Pick Some
                      </span>
                    </button>

                    <button
                      onClick={rejectNonEssential}
                      className="group/btn relative px-3 py-2.5 text-xs font-semibold text-gray-600 dark:text-gray-400 rounded-xl transition-all border-2 border-black/10 dark:border-white/10 hover:border-gray-400 dark:hover:border-gray-600 overflow-hidden hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center justify-center gap-1">
                        No Thanks
                      </span>
                    </button>
                  </div>
                </div>

                <Link
                  to="/cookie-policy"
                  className="block text-center text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple hover:opacity-70 transition-opacity"
                >
                  What's in the jar? →
                </Link>
              </div>
            </div>
          </div>
        </div>
        </>
      )}

      {showPreferencesModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div className="relative bg-white/95 dark:bg-black/95 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-black/10 dark:border-white/10 animate-scale-in backdrop-blur-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>

            <div className="sticky top-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-purple blur-xl opacity-40 animate-pulse"></div>
                  <div className="relative p-3 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-2xl transform rotate-6">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    The Cookie Jar
                    <span className="text-2xl">🍪</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pick your favorite flavors</p>
                </div>
              </div>
              <button
                onClick={() => {
                  closePreferences();
                  setShowBanner(true);
                }}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all hover:rotate-90 duration-300"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-180px)]">
              <div className="p-6 space-y-4">
                <div className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/5 border-2 border-black/10 dark:border-white/10 p-5 overflow-hidden">
                  <div className="absolute top-0 right-0 text-6xl opacity-10 select-none">🛡️</div>
                  <div className="flex items-start gap-4 relative">
                    <div className="p-3 bg-white dark:bg-black rounded-xl border-2 border-black/10 dark:border-white/10 shadow-sm">
                      <Shield className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">Essential Cookies</h4>
                        <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-black/10 dark:bg-white/10 text-gray-700 dark:text-gray-300">Always Fresh</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        The basic recipe - these keep the site running. Non-negotiable!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 p-5 hover:border-accent-orange/60 dark:hover:border-accent-orange/40 transition-all overflow-hidden hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 text-6xl opacity-10 select-none group-hover:scale-110 transition-transform">🍪</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4 relative">
                    <div className="p-3 bg-white dark:bg-black rounded-xl border-2 border-black/10 dark:border-white/10 group-hover:border-accent-orange/30 transition-all shadow-sm">
                      <Cookie className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-accent-orange transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">Functional Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer group/toggle">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-orange/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md peer-checked:bg-gradient-to-r peer-checked:from-accent-orange peer-checked:to-accent-pink"></div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Extra flavor - remember your preferences and settings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 p-5 hover:border-accent-pink/60 dark:hover:border-accent-pink/40 transition-all overflow-hidden hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 text-6xl opacity-10 select-none group-hover:scale-110 transition-transform">📊</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4 relative">
                    <div className="p-3 bg-white dark:bg-black rounded-xl border-2 border-black/10 dark:border-white/10 group-hover:border-accent-pink/30 transition-all shadow-sm">
                      <BarChart className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-accent-pink transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">Analytics Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-pink/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md peer-checked:bg-gradient-to-r peer-checked:from-accent-pink peer-checked:to-accent-purple"></div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Help us perfect the recipe - understand what works best.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 p-5 hover:border-accent-purple/60 dark:hover:border-accent-purple/40 transition-all overflow-hidden hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 text-6xl opacity-10 select-none group-hover:scale-110 transition-transform">📢</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-4 relative">
                    <div className="p-3 bg-white dark:bg-black rounded-xl border-2 border-black/10 dark:border-white/10 group-hover:border-accent-purple/30 transition-all shadow-sm">
                      <Megaphone className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-accent-purple transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">Marketing Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-purple/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-md peer-checked:bg-gradient-to-r peer-checked:from-accent-purple peer-checked:to-accent-orange"></div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Share the love - show you relevant content and offers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 px-6 py-5 flex gap-3">
              <button
                onClick={saveCustomPreferences}
                className="group relative flex-1 px-5 py-3 text-white rounded-xl text-sm font-bold transition-all overflow-hidden hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-pink to-accent-purple"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Save My Mix
                  <span className="text-lg">✨</span>
                </span>
              </button>
              <button
                onClick={() => {
                  closePreferences();
                  setShowBanner(true);
                }}
                className="px-5 py-3 bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all border-2 border-black/10 dark:border-white/10 hover:scale-105"
              >
                Back
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
        @keyframes slide-in-bounce {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateX(-10px) scale(1.05);
          }
          80% {
            transform: translateX(5px) scale(0.98);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(12deg); }
          25% { transform: rotate(18deg) scale(1.1); }
          50% { transform: rotate(6deg) scale(1.05); }
          75% { transform: rotate(15deg) scale(1.08); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        .animate-slide-in-bounce {
          animation: slide-in-bounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
}
