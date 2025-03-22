'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import MainNavbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I earn points?",
      answer: "You can earn points through various activities such as regular check-ups, completing health assessments, participating in wellness programs, and maintaining a healthy lifestyle."
    },
    {
      question: "How do I redeem my points?",
      answer: "Points can be redeemed through our rewards portal for various health-related products and services, wellness programs, and medical service discounts."
    },
    {
      question: "What healthcare services are covered?",
      answer: "We cover a wide range of healthcare services including preventive care, specialist consultations, emergency care, and wellness programs. Check your specific plan for detailed coverage information."
    },
    {
      question: "How do I find a doctor in the network?",
      answer: "You can use our provider directory on the website or mobile app to find doctors, specialists, and healthcare facilities in your area that are part of our network."
    },
    {
      question: "How do I update my profile information?",
      answer: "Log in to your account, go to 'Profile Settings', and you can update your personal information, contact details, and communication preferences."
    }
  ];

  return (
    <PageTransition>
      <MainNavbar />
      <div className="help-center-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="help-title">Help Center</h1>
              <p className="help-subtitle">
                Find answers to common questions and get support when you need it.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <div className="search-box">
                <Form.Control
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="help-search"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col md={8}>
              <Accordion className="faq-accordion">
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={4}>
              <div className="help-option-card">
                <div className="help-icon">📞</div>
                <h3>Call Us</h3>
                <p className="help-contact">1-800-HEALTH-CARE</p>
                <p className="help-hours">Available 24/7</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="help-option-card">
                <div className="help-icon">✉️</div>
                <h3>Email Us</h3>
                <p className="help-contact">support@saintdaniels.com</p>
                <p className="help-hours">Response within 24 hours</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="help-option-card">
                <div className="help-icon">💬</div>
                <h3>Live Chat</h3>
                <Button className="dashboard-btn mt-3">Start Chat</Button>
                <p className="help-hours">Available 9 AM - 6 PM EST</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageTransition>
  );
} 