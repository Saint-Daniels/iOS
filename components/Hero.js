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
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="hero-content-lonestar">
              <h1 className="hero-title-lonestar">
                Healthcare Rewards: Earn Well. Live Well
              </h1>
              <p className="hero-description-lonestar">
                Saint Daniels Healthcare Rewards converts every qualified sponsor interaction into a private subsidy you can
                deploy at trusted pharmacies or allow to grow through our compound network. Download the app to track each
                reward, authorize spending with a secure virtual card, and build a long-term wellness balance with complete
                transparency.
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
                  onClick={() => router.push('/learnmore')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2">
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