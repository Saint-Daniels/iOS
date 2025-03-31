'use client';

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, ProgressBar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  const handleOfferClick = (offerId) => {
    // Handle offer click - could navigate to offer details or show modal
    console.log('Offer clicked:', offerId);
  };

  if (loading) {
    return (
      <div className="dashboard-page d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border text-gold" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <Navbar className="dashboard-navbar px-4 py-3">
        <Container>
          <Link href="/" className="navbar-brand">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              width={60} 
              height={60} 
              className="header-logo"
            />
          </Link>
          <Button className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>

      <Container>
        <div className="dashboard-welcome">
          <h1>Welcome Back, User!</h1>
          <p className="text-muted">Manage your healthcare rewards and track your progress</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6} lg={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Points Balance</Card.Title>
                <div className="points-display">1,250</div>
                <p className="text-muted mb-4">Available Rewards Points</p>
                <div className="progress-section">
                  <div className="progress mb-3" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      style={{ width: '75%' }}
                      aria-valuenow="75" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                  <p className="text-muted small">Next tier: 500 points away</p>
                </div>
                <Button className="dashboard-btn">
                  View Rewards
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Recent Activity</Card.Title>
                <ul className="activity-list">
                  <li className="activity-item">
                    <div className="activity-date">March 22, 2024</div>
                    <p className="activity-description">Earned 100 points - Health Check-up</p>
                  </li>
                  <li className="activity-item">
                    <div className="activity-date">March 15, 2024</div>
                    <p className="activity-description">Redeemed 200 points - Gift Card</p>
                  </li>
                  <li className="activity-item">
                    <div className="activity-date">March 10, 2024</div>
                    <p className="activity-description">Earned 150 points - Dental Visit</p>
                  </li>
                </ul>
                <Button className="dashboard-btn mt-3">
                  View All Activities
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Coverage Level</Card.Title>
                <div className="coverage-info">
                  <div className="coverage-level mb-3">
                    <h3 className="text-success mb-2">Premium Plus</h3>
                    <p className="text-muted mb-0">Active until December 31, 2024</p>
                  </div>
                  <div className="coverage-details">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Deductible</span>
                      <span className="text-success">$500</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Co-pay</span>
                      <span className="text-success">$20</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Out-of-pocket Max</span>
                      <span className="text-success">$2,000</span>
                    </div>
                  </div>
                </div>
                <Button className="dashboard-btn mt-3">
                  View Coverage Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={8}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Available Offers</Card.Title>
                <div className="offers-list">
                  <div className="offer-item mb-3 p-3 border rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">$50 Gift Card</h5>
                        <p className="text-muted mb-0">Complete your annual physical</p>
                      </div>
                      <Button 
                        className="dashboard-btn"
                        onClick={() => handleOfferClick('gift-card')}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                  <div className="offer-item mb-3 p-3 border rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Free Dental Cleaning</h5>
                        <p className="text-muted mb-0">Schedule within 30 days</p>
                      </div>
                      <Button 
                        className="dashboard-btn"
                        onClick={() => handleOfferClick('dental')}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                  <div className="offer-item p-3 border rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Vision Discount</h5>
                        <p className="text-muted mb-0">20% off eyewear</p>
                      </div>
                      <Button 
                        className="dashboard-btn"
                        onClick={() => handleOfferClick('vision')}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Quick Actions</Card.Title>
                <div className="d-grid gap-3">
                  <Button className="dashboard-btn">
                    Find a Doctor
                  </Button>
                  <Button className="dashboard-btn">
                    Contact Support
                  </Button>
                  <Button className="dashboard-btn">
                    Account Settings
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
} 