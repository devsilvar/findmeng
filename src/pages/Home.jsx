import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import BusinessBoosterKit from '../components/GetFound';
import WhatYouGetSection from '../components/WhatYouGet';
import BenefitsSection from '../components/WhyitWorks';
import { SampleWorksSection } from '../components/SampleWork';
import PricingPage from '../components/Pricing';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <BusinessBoosterKit />
      {/* <WhatYouGetSection /> */}
      <PricingPage />
      <BenefitsSection />
      {/* <OurWorkSection /> */}
      {/* <BeforeAfter /> */}
      <SampleWorksSection />
    </div>
  );
};

export default Home;
