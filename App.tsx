import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SupportedBy } from './components/SupportedBy';
import { Problem } from './components/Problem';
import { CoreIdea } from './components/CoreIdea';
import { AlvioSuite } from './components/AlvioSuite';
import { Enterprise } from './components/Enterprise';
import { Integrations } from './components/Integrations';
import { Individual } from './components/Individual';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-accent-purple/20">
      <Navbar />
      <main>
        <Hero />
        <SupportedBy />
        <Problem />
        <CoreIdea />
        <Enterprise />
        <Integrations />
        <AlvioSuite />
        <Individual />
      </main>
      <Footer />
    </div>
  );
};

export default App;