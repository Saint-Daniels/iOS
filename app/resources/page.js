'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBook, FaFilePdf, FaVideo, FaDownload, FaExternalLinkAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import Link from 'next/link';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Mental Health Guides",
      icon: <FaBook size={32} />,
      resources: [
        {
          title: "Understanding Depression",
          description: "Comprehensive guide to recognizing and managing depression symptoms",
          type: "PDF Guide",
          link: "#"
        },
        {
          title: "Anxiety Management Techniques",
          description: "Evidence-based strategies for managing anxiety and panic attacks",
          type: "PDF Guide",
          link: "#"
        },
        {
          title: "Trauma Recovery Workbook",
          description: "Step-by-step workbook for trauma healing and recovery",
          type: "PDF Guide",
          link: "#"
        }
      ]
    },
    {
      title: "Educational Videos",
      icon: <FaVideo size={32} />,
      resources: [
        {
          title: "Introduction to CBT",
          description: "Learn the basics of Cognitive Behavioral Therapy",
          type: "Video Series",
          link: "#"
        },
        {
          title: "Mindfulness Meditation",
          description: "Guided meditation sessions for stress relief",
          type: "Video Series",
          link: "#"
        },
        {
          title: "Family Therapy Sessions",
          description: "Educational content about family counseling approaches",
          type: "Video Series",
          link: "#"
        }
      ]
    },
    {
      title: "Forms & Documents",
      icon: <FaFilePdf size={32} />,
      resources: [
        {
          title: "Intake Forms",
          description: "Required forms for new patient registration",
          type: "PDF Form",
          link: "#"
        },
        {
          title: "Insurance Verification",
          description: "Forms to verify your insurance coverage",
          type: "PDF Form",
          link: "#"
        },
        {
          title: "Consent Forms",
          description: "HIPAA-compliant consent and authorization forms",
          type: "PDF Form",
          link: "#"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Crisis Resources",
      description: "24/7 crisis support and emergency contacts",
      icon: <FaPhone size={24} />,
      link: "/contact"
    },
    {
      title: "Insurance Information",
      description: "Learn about accepted insurance plans",
      icon: <FaFilePdf size={24} />,
      link: "/insurance"
    },
    {
      title: "Treatment Options",
      description: "Explore our comprehensive treatment services",
      icon: <FaBook size={24} />,
      link: "/services"
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      icon: <FaEnvelope size={24} />,
      link: "/contact"
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className="resources-page">
        {/* Hero Section */}
        <section className="resources-hero">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="resources-title">Mental Health Resources</h1>
                <p className="resources-subtitle">
                  Access comprehensive mental health resources, educational materials, and support tools 
                  to help you on your journey to wellness and recovery.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Resource Categories */}
        <section className="resource-categories-section">
          <Container>
            <Row className="g-4">
              {resourceCategories.map((category, index) => (
                <Col lg={4} key={index}>
                  <Card className="resource-category-card">
                    <Card.Body>
                      <div className="category-header">
                        <div className="category-icon">
                          {category.icon}
                        </div>
                        <h3 className="category-title">{category.title}</h3>
                      </div>
                      <div className="resource-list">
                        {category.resources.map((resource, resourceIndex) => (
                          <div key={resourceIndex} className="resource-item">
                            <h5 className="resource-item-title">{resource.title}</h5>
                            <p className="resource-item-description">{resource.description}</p>
                            <div className="resource-item-footer">
                              <span className="resource-type">{resource.type}</span>
                              <a href={resource.link} className="resource-link">
                                <FaDownload size={16} />
                                Download
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Quick Access</h2>
                <p className="section-subtitle">
                  Get quick access to important information and services
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {quickLinks.map((link, index) => (
                <Col lg={3} md={6} key={index}>
                  <Link href={link.link} className="quick-link-card">
                    <div className="quick-link-icon">
                      {link.icon}
                    </div>
                    <h4 className="quick-link-title">{link.title}</h4>
                    <p className="quick-link-description">{link.description}</p>
                    <div className="quick-link-arrow">
                      <FaExternalLinkAlt size={16} />
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Need More Resources?</h2>
                <p className="section-subtitle">
                  Our team is here to help you find the resources you need for your mental health journey.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaPhone size={20} />
                    <span>Call us at (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope size={20} />
                    <span>Email us at info@saintdaniels.com</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt size={20} />
                    <span>Visit our facility for in-person support</span>
                  </div>
                </div>
                <div className="contact-buttons">
                  <Link href="/contact" className="btn-primary-lonestar">
                    Contact Us
                  </Link>
                  <Link href="/appointment" className="btn-secondary-lonestar">
                    Schedule Appointment
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
}
