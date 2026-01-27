import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EnterpriseSearchPage } from './pages/EnterpriseSearchPage';
import { AppsPage } from './pages/AppsPage';
import { AgentsPage } from './pages/AgentsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CookieConsent from './components/CookieConsent';
import { ConsentProvider } from './contexts/ConsentContext';
import { ScriptLoader } from './components/ScriptLoader';

const App: React.FC = () => {
  return (
    <ConsentProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-accent-purple/20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise-search" element={<EnterpriseSearchPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
        <CookieConsent />
        <ScriptLoader />
      </div>
    </ConsentProvider>
  );
};

export default App;