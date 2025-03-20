'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Benefits() {
  const benefits = [
    {
      title: "Premium Rewards",
      icon: "🎁",
      description: "Unlock exclusive healthcare services, products, and experiences with your earned points."
    },
    {
      title: "Royal Treatment",
      icon: "👑",
      description: "Priority scheduling, personalized care plans, and VIP healthcare experiences await you."
    },
    {
      title: "Wellness Incentives",
      icon: "❤️",
      description: "Earn rewards for maintaining your health and wellness goals. Our program encourages and celebrates your commitment to a healthier lifestyle."
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
                <div className="display-4 mb-3">{benefit.icon}</div>
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