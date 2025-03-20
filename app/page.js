'use client';

import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Rewards from '../components/Rewards';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Rewards />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
} 