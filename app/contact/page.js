'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaBuilding, FaEnvelope, FaHospital, FaNetworkWired, FaHeadset, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn } from '../../components/ScrollAnimation';

export default function Contact() {
  const offices = [
    {
      title: "Corporate Headquarters",
      icon: <FaBuilding />,
      address: "6000 Ross Perot Blvd",
      city: "Dallas, TX 75201",
      phone: "888-324-6642",
      email: "corporate@saintdanielshealthcare.com",
      description: "Main administrative offices and executive leadership"
    },
    {
      title: "Pharmacy Network Operations",
      icon: <FaHospital />,
      address: "1245 Healthcare Drive",
      city: "Austin, TX 78701",
      phone: "888-324-6643",
      email: "pharmacy@saintdanielshealthcare.com",
      description: "Pharmacy partner relations and network management"
    },
    {
      title: "Member Support Center",
      icon: <FaHeadset />,
      address: "890 Member Services Plaza",
      city: "Houston, TX 77002",
      phone: "888-324-6642",
      email: "support@saintdanielshealthcare.com",
      description: "24/7 member support and customer service"
    },
    {
      title: "Ad Network Operations",
      icon: <FaNetworkWired />,
      address: "2345 Digital Commerce Blvd",
      city: "Dallas, TX 75202",
      phone: "888-324-6644",
      email: "adnetwork@saintdanielshealthcare.com",
      description: "Healthcare ad network and campaign management"
    },
    {
      title: "Financial Services",
      icon: <FaChartLine />,
      address: "5678 Finance Tower",
      city: "Dallas, TX 75203",
      phone: "888-324-6645",
      email: "finance@saintdanielshealthcare.com",
      description: "Subsidy treasury and compound interest operations"
    },
    {
      title: "Privacy & Compliance",
      icon: <FaShieldAlt />,
      address: "901 Security Center",
      city: "Austin, TX 78702",
      phone: "888-324-6646",
      email: "privacy@saintdanielshealthcare.com",
      description: "HIPAA compliance and data protection"
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={10}>
                  <h1 className="mission-title-professional" style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
                    Contact Us
                  </h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto', background: '#C4A962' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Reach out to our team across our network of offices dedicated to serving your healthcare rewards needs
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>

        <Container style={{ padding: '4rem 0' }}>
          {/* Offices Grid */}
          <Row className="g-4">
            {offices.map((office, index) => (
              <Col lg={4} md={6} key={index}>
                <ScrollFadeIn delay={index * 0.1}>
                  <Card style={{
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                  }}
                  >
                    <Card.Body style={{ padding: '2rem' }}>
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        fontSize: '1.75rem'
                      }}>
                        {office.icon}
                      </div>
                      <h4 style={{
                        color: '#1B392F',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        fontSize: '1.35rem'
                      }}>
                        {office.title}
                      </h4>
                      <p style={{
                        color: '#666',
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                      }}>
                        {office.description}
                      </p>
                      <div style={{
                        borderTop: '1px solid #e9ecef',
                        paddingTop: '1.5rem',
                        marginTop: '1.5rem'
                      }}>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#8e8e93',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: '0.25rem',
                            fontWeight: 600
                          }}>
                            Address
                          </div>
                          <div style={{ color: '#1B392F', fontWeight: 500 }}>
                            {office.address}
                          </div>
                          <div style={{ color: '#666', fontSize: '0.9rem' }}>
                            {office.city}
                          </div>
                        </div>
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#8e8e93',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: '0.25rem',
                            fontWeight: 600
                          }}>
                            Phone
                          </div>
                          <a href={`tel:${office.phone}`} style={{
                            color: '#2c5530',
                            textDecoration: 'none',
                            fontWeight: 500
                          }}>
                            {office.phone}
                          </a>
                        </div>
                        <div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#8e8e93',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            marginBottom: '0.25rem',
                            fontWeight: 600
                          }}>
                            Email
                          </div>
                          <a href={`mailto:${office.email}`} style={{
                            color: '#2c5530',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                          }}>
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
} 