import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  preferences: CookiePreferences | null;
  hasConsent: boolean;
  updatePreferences: (prefs: CookiePreferences) => void;
  checkConsent: (category: keyof CookiePreferences) => boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  showPreferencesModal: boolean;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('alvio_cookie_consent');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setHasConsent(true);
      } catch (e) {
        console.error('Failed to parse cookie preferences', e);
        setPreferences(DEFAULT_PREFERENCES);
      }
    }
  }, []);

  const updatePreferences = (prefs: CookiePreferences) => {
    const validatedPrefs = { ...prefs, essential: true };
    setPreferences(validatedPrefs);
    setHasConsent(true);
    localStorage.setItem('alvio_cookie_consent', JSON.stringify(validatedPrefs));
    localStorage.setItem('alvio_consent_date', new Date().toISOString());

    if (!validatedPrefs.analytics) {
      cleanupAnalytics();
    }
    if (!validatedPrefs.marketing) {
      cleanupMarketing();
    }
  };

  const checkConsent = (category: keyof CookiePreferences): boolean => {
    if (!hasConsent || !preferences) {
      return category === 'essential';
    }
    return preferences[category] === true;
  };

  const openPreferences = () => {
    setShowPreferencesModal(true);
  };

  const closePreferences = () => {
    setShowPreferencesModal(false);
  };

  const cleanupAnalytics = () => {
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name] = cookie.split('=');
        const trimmedName = name.trim();
        if (trimmedName.startsWith('_ga') || trimmedName.startsWith('_gid')) {
          document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }

      if ((window as any).gtag) {
        (window as any)['ga-disable-GA_MEASUREMENT_ID'] = true;
      }
    }
  };

  const cleanupMarketing = () => {
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name] = cookie.split('=');
        const trimmedName = name.trim();
        if (
          trimmedName.startsWith('_fb') ||
          trimmedName.startsWith('fr') ||
          trimmedName.includes('pixel')
        ) {
          document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }
    }
  };

  return (
    <ConsentContext.Provider
      value={{
        preferences,
        hasConsent,
        updatePreferences,
        checkConsent,
        openPreferences,
        closePreferences,
        showPreferencesModal,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
