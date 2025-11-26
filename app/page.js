'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page">
        <Hero />
      </div>
      <Footer />
    </PageTransition>
  );
}
