import './App.css';
import BeforeAfter from './components/BeforeAfter';
import BusinessBoosterKit from './components/GetFOund';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import { SampleWorksSection } from './components/SampleWork';
import WhatYouGetSection from './components/WhatYouGet';
import BenefitsSection from './components/WhyitWorks';

function App() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <BusinessBoosterKit />
      <WhatYouGetSection />
      <BenefitsSection />
      {/* <BeforeAfter /> */}
      {/* <SampleWorksSection /> */}
    </>
  );
}

export default App;
