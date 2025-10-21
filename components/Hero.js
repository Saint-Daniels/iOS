'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero-section-lonestar">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content-lonestar">
              <h1 className="hero-title-lonestar">
                Mental Health Treatment in Texas: Comprehensive Care Approaches
              </h1>
              <p className="hero-description-lonestar">
                At Saint Daniels Healthcare, we believe in a life full of hope, health, and happiness for all. 
                Our mission is to continue our empathetic services of mental health care with the purpose of 
                helping our residents get back to living independently. From evidence-based therapies to 
                professional support from our multidisciplinary team, we're by your side in every way.
              </p>
              <div className="hero-buttons-lonestar">
                <button 
                  className="btn-primary-lonestar"
                  onClick={() => router.push('/contact')}
                >
                  Contact Us
                </button>
                <button 
                  className="btn-secondary-lonestar"
                  onClick={() => router.push('/insurance')}
                >
                  Verify Insurance
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-image-lonestar">
              <Image 
                src="/images/Poland.jpeg"
                alt="Saint Daniels Healthcare"
                width={800}
                height={500}
                className="hero-image-main"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 