import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
// import Portfolio from '@/components/Portfolio'; // "Success Stories & Case Studies" — hidden for now
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';

// Header and Footer are rendered once by the shared Layout in App.tsx.
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Industries />
      {/* <Portfolio /> — hidden for now; uncomment the import and this line to show it again */}
      <Process />
      <Testimonials />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Index;
