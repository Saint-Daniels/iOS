'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="hero-title">
              ROYAL<br />HEALTHCARE
            </h1>
            <p className="lead mb-4">
              Take control of your healthcare journey with rewards fit for royalty. 
              Sign up today and begin earning points towards a healthier, more rewarding future.
            </p>
            <Button className="btn-royal-gold">
              BEGIN YOUR ROYAL JOURNEY
            </Button>
          </Col>
          <Col lg={6}>
            <div className="hero-image-container">
              <Image 
                src="/images/Poland.jpeg"
                alt="Royal Healthcare"
                width={600}
                height={600}
                className="hero-image"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 