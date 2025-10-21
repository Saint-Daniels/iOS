'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaDollarSign, FaClipboardList, FaBullseye, FaGamepad, FaTrophy, FaGift, FaBook, FaLightbulb, FaBullseye as FaTarget, FaMobile, FaGamepad as FaGames, FaListUl } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page">
        <Hero />
        {/* Mission Section */}
        <section className="mission-section-lonestar">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="section-title-lonestar">Our Mission</h2>
                <p className="mission-description-lonestar">
                  Saint Daniels Healthcare is committed to providing holistic and compassionate support in mental health 
                  for the empowerment of individuals toward lifelong wellness. We believe in personalized attention, 
                  evidence-based practice, and creating a warm atmosphere where recovery actually starts. Let us help 
                  our clients navigate life's challenges, build resilience, and enjoy life in balance. Empathy, trust, 
                  and great respect for the individual mind guide us at every interaction and each step of our process.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Who Are We Section */}
        <section className="who-we-are-section-lonestar">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="who-we-content">
                  <h2 className="section-title-lonestar">Who Are We?</h2>
                  <p className="who-we-description">
                    Saint Daniels Healthcare is a source of trust and safety regarding mental health treatment. 
                    We offer individualized attention and care for our patients in need of help with their mental health. 
                    Anchor the evidence-based treatment program with compassion, holistic care, and individualized attention. 
                    From therapy to wellness programs, we nurture growth and healing toward empowerment.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="team-content">
                  <h3 className="team-title">About Our Team</h3>
                  <p className="team-description">
                    With over 10 years of experience, the team at Saint Daniels Healthcare aims at care with compassion, 
                    tailored to the peculiar journey of each individual. We have licensed therapists, counselors, and 
                    mental health specialists collectively working to help deliver Evidence-Based Treatment. We are driven 
                    by one goal: to inspire growth, healing, and lasting wellness for every individual we are privileged to serve.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Section */}
        <section className="services-section-lonestar">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title-lonestar">Comprehensive Mental Health Services</h2>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaGamepad size={48} />
                  </div>
                  <h4 className="service-title">Group Therapy</h4>
                  <p className="service-description">
                    Connect with others and draw support from a similar journey. Group Therapy with our Licensed Therapist 
                    allows experiences to be exchanged in a safe environment.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaClipboardList size={48} />
                  </div>
                  <h4 className="service-title">Individual Therapy</h4>
                  <p className="service-description">
                    Personalized one-on-one therapy sessions tailored to your unique challenges and goals. Our licensed 
                    therapists provide a confidential, supportive space for self-reflection, healing, and growth.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaGift size={48} />
                  </div>
                  <h4 className="service-title">Family Counseling</h4>
                  <p className="service-description">
                    Problems in mental health can impact the entire family, not just one person. Family therapy aims 
                    to restore family harmony, rebuild trust, and strengthen family relationships.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaMobile size={48} />
                  </div>
                  <h4 className="service-title">Residential Treatment</h4>
                  <p className="service-description">
                    A structured and immersive program offering 24/7 care in a safe, supportive environment. 
                    Residential treatment focuses on intensive therapy and holistic healing.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaBook size={48} />
                  </div>
                  <h4 className="service-title">Cognitive Behavioral Therapy</h4>
                  <p className="service-description">
                    CBT is a proven methodology for changing negative thought patterns and behaviors. Our therapists 
                    skillfully guide our clients through evidence-based techniques.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="service-card-lonestar">
                  <div className="service-icon">
                    <FaTarget size={48} />
                  </div>
                  <h4 className="service-title">Trauma-Focused Therapy</h4>
                  <p className="service-description">
                    Overcoming past trauma can lead to profound emotional healing. Our trauma-focused therapy covers 
                    PTSD, childhood traumas, and other emotional scars from the past.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section-lonestar">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title-lonestar">Why Choose Saint Daniels Healthcare?</h2>
                <p className="why-choose-subtitle">
                  Sometimes, all it takes is the proper setting and support. Saint Daniels Healthcare takes a holistic 
                  path to healing: mind, body, and spirit in one inclusive treatment approach.
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Holistic Approach to Recovery</h4>
                  <p className="why-choose-description">
                    We firmly believe in caring for the whole person: mind, body, and spirit. Our holistic approach 
                    to care gets to the root of mental health challenges and empowers clients to achieve balance and well-being.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Safe and Secure Environment</h4>
                  <p className="why-choose-description">
                    We value the privacy and safety of every individual. Our facility is designed to provide a safe, 
                    confidential environment where one can work on recovery without bias or pressure from the outside world.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Licensed Medical Staff</h4>
                  <p className="why-choose-description">
                    Our licensed therapists and medical professionals have specialized training and many years of 
                    experience, so that each treatment session is held with concern and attention during the process.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Insurance and Cost Management</h4>
                  <p className="why-choose-description">
                    We know that care can be expensive. Our team can help guide you through your options for insurance, 
                    explaining what may be covered, while developing a cost plan that will work for you.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Personalized Treatment</h4>
                  <p className="why-choose-description">
                    Your path to mental health is unique, and your treatment plan is designed with that in mind. 
                    Our personalized approach to care ensures that everyone gets exactly what they need to heal long-term.
                  </p>
                </div>
              </Col>
              
              <Col lg={4} md={6}>
                <div className="why-choose-card-lonestar">
                  <h4 className="why-choose-title">Medication Management</h4>
                  <p className="why-choose-description">
                    Medications may have an important place in your treatment with regard to your mental health. 
                    They can be prescribed and monitored by our medical professionals throughout the course of your treatment.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


      </div>
      <Footer>
        <div className="footer-links">
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Connect</h5>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </Footer>
    </PageTransition>
  );
} 