'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import MainNavbar from '@/components/Navbar';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    // Here you would typically send the email to your backend
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="newsletter-page">
      <MainNavbar />
      <div className="page-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="newsletter-title">Stay Updated</h1>
              <p className="newsletter-subtitle">
                Subscribe to our newsletter for the latest healthcare rewards, tips, and updates.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={6}>
              <div className="newsletter-card">
                {subscribed ? (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h3>Thank You!</h3>
                    <p>You've successfully subscribed to our newsletter.</p>
                    <Link href="/" className="dashboard-btn">
                      Return to Home
                    </Link>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input"
                      />
                      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        label="I agree to receive marketing emails"
                        className="newsletter-checkbox"
                      />
                    </Form.Group>

                    <Button type="submit" className="dashboard-btn w-100">
                      Subscribe Now
                    </Button>
                  </Form>
                )}
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={4}>
              <div className="newsletter-feature">
                <div className="feature-icon">📱</div>
                <h4>Mobile Updates</h4>
                <p>Get instant notifications about your rewards and points.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="newsletter-feature">
                <div className="feature-icon">🎁</div>
                <h4>Exclusive Offers</h4>
                <p>Access special rewards and limited-time promotions.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="newsletter-feature">
                <div className="feature-icon">💡</div>
                <h4>Health Tips</h4>
                <p>Receive valuable healthcare tips and wellness advice.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
} 