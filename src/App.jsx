import './App.css';
import BusinessBoosterKit from './components/GetFound';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
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
