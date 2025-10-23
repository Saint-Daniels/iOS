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
                Health Consultation: Empowering Your Career
              </h1>
              <p className="hero-description-lonestar">
                At Saint Daniels Healthcare, we believe in empowering professionals through comprehensive health consultation 
                services that enhance your career potential. Our mission is to provide personalized health and wellness 
                guidance combined with career-focused consultation to help you achieve peak professional performance. 
                From individual health assessments to workplace wellness strategies, we're committed to your career 
                success through optimal health and well-being.
              </p>
              <div className="hero-buttons-lonestar">
                <button 
                  className="btn-primary-lonestar"
                  onClick={() => router.push('/download')}
                >
                  Download App
                </button>
                <button 
                  className="btn-secondary-lonestar"
                  onClick={() => router.push('/learn-more')}
                >
                  Learn More
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