'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="section-title">ROYAL ACCLAIM</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="testimonial-card text-center">
              <div className="mb-4">
                <img 
                  src="/images/testimonial-avatar.jpg" 
                  alt="Member" 
                  className="rounded-circle"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </div>
              <blockquote className="mb-4">
                <p className="font-serif" style={{ fontSize: '1.25rem', fontStyle: 'italic' }}>
                  "Saint Daniels has transformed how I approach my healthcare. The rewards program motivates me to stay on top of my health, and the benefits I've received have been truly exceptional. I feel like royalty every time I use my points!"
                </p>
              </blockquote>
              <p className="font-serif mb-1">Elizabeth W.</p>
              <small className="text-muted">Member since 2023</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 