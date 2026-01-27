import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EnterpriseSearchPage } from './pages/EnterpriseSearchPage';
import { AppsPage } from './pages/AppsPage';
import { AgentsPage } from './pages/AgentsPage';
import { WorkflowsPage } from './pages/WorkflowsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-accent-purple/20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise-search" element={<EnterpriseSearchPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/workflows" element={<WorkflowsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  );
};

export default App;