'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDownload, FaFileAlt, FaClipboardList, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';
import Link from 'next/link';

export default function ResourcesPage() {
  const documentCategories = [
    {
      title: "Program Documentation",
      icon: <FaFileAlt size={32} />,
      resources: [
        {
          title: "Healthcare Rewards Program Guide",
          description: "Complete guide to understanding how private subsidies work, earning rewards, and spending at pharmacies",
          type: "PDF Guide",
          link: "#"
        },
        {
          title: "Compound Interest Vault Guide",
          description: "Detailed explanation of how unused rewards grow through our compound network treasury",
          type: "PDF Guide",
          link: "#"
        },
        {
          title: "Pharmacy Network Directory",
          description: "Comprehensive list of participating pharmacies where you can redeem your private subsidy",
          type: "PDF Directory",
          link: "#"
        }
      ]
    },
    {
      title: "Application Forms",
      icon: <FaClipboardList size={32} />,
      resources: [
        {
          title: "Rewards Application Form",
          description: "Complete application form to enroll in the healthcare rewards program",
          type: "PDF Form",
          link: "/application"
        },
        {
          title: "Pharmacy Verification Form",
          description: "Form to verify and connect your preferred pharmacy to your account",
          type: "PDF Form",
          link: "#"
        },
        {
          title: "Account Update Form",
          description: "Update your personal information, pharmacy preferences, or vault settings",
          type: "PDF Form",
          link: "#"
        }
      ]
    },
    {
      title: "Legal & Privacy Documents",
      icon: <FaShieldAlt size={32} />,
      resources: [
        {
          title: "Privacy Policy",
          description: "How we protect your health data and maintain HIPAA-safe architecture",
          type: "PDF Document",
          link: "/privacy"
        },
        {
          title: "Terms of Service",
          description: "Terms and conditions for using the healthcare rewards platform",
          type: "PDF Document",
          link: "/terms"
        },
        {
          title: "Data Protection Notice",
          description: "Information about our blockchain-based privacy protections and data handling",
          type: "PDF Document",
          link: "#"
        }
      ]
    }
  ];


  return (
    <PageTransition>
      <Navbar />
      <div className="resources-page">
        {/* Hero Section */}
        <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={10}>
                  <h1 className="mission-title-professional">Documents</h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Access all program documentation, application forms, and legal documents for the Healthcare Rewards program. 
                    Find everything you need to understand, enroll in, and manage your private subsidy account.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>

        {/* Document Categories */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="service-header">
                    <h2 className="service-title-large">Document Categories</h2>
                    <div className="service-divider"></div>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="g-4">
              {documentCategories.map((category, index) => (
                <Col lg={4} md={6} key={index}>
                  <ScrollFadeIn delay={index * 0.2}>
                    <Card className="resource-category-card" style={{
                      height: '100%',
                      border: '1px solid #e9ecef',
                      borderRadius: '15px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Card.Body style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div className="category-header" style={{ 
                          textAlign: 'center', 
                          marginBottom: '2rem',
                          paddingBottom: '2rem',
                          borderBottom: '2px solid #f0f0f0'
                        }}>
                          <div className="category-icon" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                            color: 'white',
                            marginBottom: '1.25rem'
                          }}>
                            {category.icon}
                          </div>
                          <h3 className="category-title" style={{
                            fontSize: '1.75rem',
                            fontWeight: 600,
                            color: '#2c5530',
                            margin: 0,
                            lineHeight: '1.3'
                          }}>{category.title}</h3>
                        </div>
                        <div className="resource-list" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          {category.resources.map((resource, resourceIndex) => (
                            <div key={resourceIndex} className="resource-item" style={{
                              marginBottom: resourceIndex < category.resources.length - 1 ? '2rem' : '0',
                              paddingBottom: resourceIndex < category.resources.length - 1 ? '2rem' : '0',
                              borderBottom: resourceIndex < category.resources.length - 1 ? '1px solid #e9ecef' : 'none',
                              flex: resourceIndex === category.resources.length - 1 ? 1 : 'none',
                              textAlign: 'center',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center'
                            }}>
                              <h5 className="resource-item-title" style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                marginBottom: '0.75rem',
                                color: '#1B392F',
                                lineHeight: '1.4',
                                textAlign: 'center'
                              }}>{resource.title}</h5>
                              <p className="resource-item-description" style={{
                                fontSize: '0.95rem',
                                color: '#666',
                                marginBottom: '1rem',
                                lineHeight: '1.6',
                                minHeight: '3rem',
                                textAlign: 'center',
                                maxWidth: '100%'
                              }}>{resource.description}</p>
                              <div className="resource-item-footer" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 'auto'
                              }}>
                                <a href={resource.link} className="resource-link" style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  color: '#2c5530',
                                  textDecoration: 'none',
                                  fontWeight: 600,
                                  fontSize: '0.95rem',
                                  transition: 'all 0.3s ease',
                                  padding: '0.5rem 1rem',
                                  borderRadius: '6px',
                                  background: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.color = '#C4A962';
                                  e.target.style.background = 'rgba(196, 169, 98, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = '#2c5530';
                                  e.target.style.background = 'transparent';
                                }}
                                >
                                  <FaDownload size={16} />
                                  Download
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </ScrollFadeIn>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                  <h2 className="section-title-professional">Need Help Finding Documents?</h2>
                  <p className="mission-description-professional" style={{ marginBottom: '2rem' }}>
                    Our support team is here to help you locate the documents you need for your healthcare rewards account.
                  </p>
                  <div className="contact-buttons" style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <Link href="/contact" className="btn-primary-lonestar" style={{
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Contact Support
                    </Link>
                    <Link href="/help" className="btn-secondary-lonestar" style={{
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Help Center
                    </Link>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>
      </div>
      
      <Footer />
    </PageTransition>
  );
}

