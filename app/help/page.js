'use client';

import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';
import MainNavbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I track my health journey?",
      answer: "You can track your health journey through our platform by logging your daily activities, health metrics, and wellness goals. Each day of consistent tracking contributes to your overall health score."
    },
    {
      question: "How do I earn health days?",
      answer: "You can earn health days by maintaining consistent health tracking, completing wellness challenges, participating in health assessments, and achieving your wellness goals. Each activity contributes to your daily health score."
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
    },
    {
      question: "What are the customer support hours?",
      answer: "Our customer support team is available Monday through Friday, from 9am to 5pm CST. You can reach us by phone at 888-324-6642 or through our contact form."
    },
    {
      question: "How do I connect my Snapchat account?",
      answer: "To connect your Snapchat account, go to your profile settings and click on the 'Connect Snapchat' button. Follow the prompts to authorize the connection and start sharing your health journey."
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
            <Col md={6}>
              <div className="help-option-card">
                <div className="help-icon"><FaPhone /></div>
                <h3>Call Us</h3>
                <p className="help-contact">888-324-6642</p>
                <p className="help-hours">Monday-Friday, 9am-5pm CST</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="help-option-card">
                <div className="help-icon"><FaEnvelope /></div>
                <h3>Email Us</h3>
                <p className="help-contact">support@saintdaniels.com</p>
                <p className="help-hours">Response within 24 hours</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageTransition>
  );
} 