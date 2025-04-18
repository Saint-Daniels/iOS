'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Partners() {
  return (
    <>
      <Navbar />
      <div className="partners-page">
        <Container>
          <h1 className="partners-title">Our Partners</h1>
          <p className="partners-subtitle">
            We collaborate with industry leaders to provide comprehensive healthcare and financial solutions.
          </p>

          <Row className="g-4">
            <Col md={6} className="mx-auto">
              <Card className="partner-card">
                <div className="partner-image">
                  <Image
                    src="/images/brokerage.jpeg"
                    alt="Centuries Mutual Insurance Brokerage"
                    width={400}
                    height={400}
                    className="card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Centuries Mutual Insurance Brokerage</Card.Title>
                  <Card.Text>
                    A comprehensive wealth management firm specializing in tax planning, life insurance, and health insurance solutions. Our expert advisors help you secure your financial future while ensuring optimal healthcare coverage.
                  </Card.Text>
                  <ul className="partner-features">
                    <li>Tax Planning & Wealth Management</li>
                    <li>Life Insurance Solutions</li>
                    <li>Health Insurance Coverage</li>
                    <li>Financial Advisory Services</li>
                  </ul>
                  <Link href="/contact" className="learn-more">
                    Learn More →
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
} 