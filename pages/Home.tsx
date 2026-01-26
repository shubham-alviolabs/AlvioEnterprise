import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SupportedBy } from '../components/SupportedBy';
import { Problem } from '../components/Problem';
import { CoreIdea } from '../components/CoreIdea';
import { AlvioSuite } from '../components/AlvioSuite';
import { Enterprise } from '../components/Enterprise';
import { Integrations } from '../components/Integrations';
import { Individual } from '../components/Individual';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};
