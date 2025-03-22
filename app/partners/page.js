'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import MainNavbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

export default function Partners() {
  const partners = [
    {
      name: "HealthCare Plus",
      logo: "/images/partner1.png",
      description: "Leading healthcare provider offering comprehensive medical services.",
      benefits: [
        "24/7 access to medical professionals",
        "Discounted health screenings",
        "Priority appointment booking",
        "Exclusive member rates"
      ]
    },
    {
      name: "MediCare Solutions",
      logo: "/images/partner2.png",
      description: "Innovative healthcare solutions for modern wellness needs.",
      benefits: [
        "Telemedicine consultations",
        "Personalized health plans",
        "Digital health records",
        "Wellness workshops"
      ]
    },
    {
      name: "Wellness Partners",
      logo: "/images/partner3.png",
      description: "Holistic wellness services for complete health coverage.",
      benefits: [
        "Mental health support",
        "Nutrition counseling",
        "Fitness programs",
        "Preventive care services"
      ]
    }
  ];

  return (
    <PageTransition>
      <MainNavbar />
      <div className="partners-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="partners-title">Our Healthcare Partners</h1>
              <p className="partners-subtitle">
                We collaborate with leading healthcare providers to offer you the best medical services and benefits.
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            {partners.map((partner, index) => (
              <Col md={4} key={index} className="mb-4">
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="about-image-placeholder">
                      {partner.name[0]}
                    </div>
                  </div>
                  <h3 className="partner-title">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                  <ul className="partner-benefits">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                  <Link href="#" className="partner-link">
                    Learn More →
                  </Link>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center mt-5">
            <Col md={10}>
              <div className="partner-cta text-center">
                <h2 className="mb-4">Become a Healthcare Partner</h2>
                <p className="mb-4">
                  Join our network of healthcare providers and help us deliver quality healthcare services to our members.
                </p>
                <Button className="dashboard-btn">Contact Us to Partner</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageTransition>
  );
} 