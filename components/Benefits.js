'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function Benefits() {
  const benefits = [
    {
      title: "Premium Rewards",
      description: "Get paid to watch ads and take surveys. Earn money while you browse and share your opinions.",
      icon: "/images/crown-silhouette.svg"
    },
    {
      title: "Royal Treatment",
      description: "Discover exciting games available on the app. Play, compete, and earn rewards while having fun.",
      icon: "/images/shield-silhouette.svg"
    },
    {
      title: "Wellness Incentives",
      description: "Explore your personalized For You feed featuring curated content, health tips, and exclusive offers.",
      icon: "/images/heart-silhouette.svg"
    }
  ];

  return (
    <section className="benefits-section">
      <Container>
        <h2 className="section-title">ROYAL BENEFITS</h2>
        <Row>
          {benefits.map((benefit, index) => (
            <Col md={4} key={index}>
              <div className="benefit-card text-center">
                <div className="benefit-icon-wrapper mb-4">
                  <Image 
                    src={benefit.icon}
                    alt={benefit.title}
                    width={50}
                    height={50}
                    className="benefit-icon"
                  />
                </div>
                <h3 className="font-serif mb-3">{benefit.title}</h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
} 