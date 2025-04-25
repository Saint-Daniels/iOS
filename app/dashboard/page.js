'use client';

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, ProgressBar, Modal } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ReceiptScanner from '../components/ReceiptScanner';
import PersonalTrainerModal from '../components/PersonalTrainerModal';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showReceiptScanner, setShowReceiptScanner] = useState(false);
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [pointsBalance, setPointsBalance] = useState(1250);
  const [userName, setUserName] = useState('User');
  const [activities, setActivities] = useState([
    {
      date: 'March 22, 2024',
      description: 'Earned 100 points - Health Check-up'
    },
    {
      date: 'March 15, 2024',
      description: 'Redeemed 200 points - Gift Card'
    },
    {
      date: 'March 10, 2024',
      description: 'Earned 150 points - Dental Visit'
    }
  ]);

  // Check if user is logged in and get user email
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      // Get user email from session storage
      const userEmail = sessionStorage.getItem('userEmail');
      if (userEmail) {
        // Extract name from email (before @ symbol)
        const namePart = userEmail.split('@')[0];
        // Capitalize first letter
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        setUserName(formattedName);
      }
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    router.push('/login');
  };

  const handleOfferClick = (offerId) => {
    // Handle offer click - could navigate to offer details or show modal
    console.log('Offer clicked:', offerId);
  };

  const handleScanSuccess = (result) => {
    // Update points balance
    setPointsBalance(prev => prev + result.pointsAwarded);
    
    // Add to activity list
    const today = new Date();
    const formattedDate = today.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    setActivities(prev => [
      {
        date: formattedDate,
        description: `Earned ${result.pointsAwarded} points - Organic Food Rebate`
      },
      ...prev
    ]);
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
          <h1>Welcome Back, {userName}!</h1>
          <p className="text-muted">Manage your healthcare rewards and track your progress</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6} lg={4}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Points Balance</Card.Title>
                <div className="points-display">{pointsBalance}</div>
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
                  {activities.map((activity, index) => (
                    <li key={index} className="activity-item">
                      <div className="activity-date">{activity.date}</div>
                      <p className="activity-description">{activity.description}</p>
                    </li>
                  ))}
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

        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Grocery Points</Card.Title>
                <div className="p-3 text-center">
                  <div className="mb-3">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21C5.89543 21 5 20.1046 5 19V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V19C19 20.1046 18.1046 21 17 21H7Z" stroke="#4CAF50" strokeWidth="2"/>
                      <path d="M9 7H15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 11H15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 15H13" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Grocery Rewards</h4>
                  <p className="text-muted mb-4">Earn 1 point for every dollar spent on USDA food. Upload your receipt to redeem!</p>
                  <Button 
                    className="dashboard-btn" 
                    onClick={() => setShowReceiptScanner(true)}
                  >
                    Scan Receipt
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>Personal Trainer</Card.Title>
                <div className="p-3 text-center">
                  <div className="mb-3">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 6.5C6.5 8.98528 8.51472 11 11 11C13.4853 11 15.5 8.98528 15.5 6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5Z" stroke="#3A77FF" strokeWidth="2"/>
                      <path d="M3 19C3 15.6863 5.68629 13 9 13H13C16.3137 13 19 15.6863 19 19V22H3V19Z" stroke="#3A77FF" strokeWidth="2"/>
                      <path d="M16.5 7.5H21.5" stroke="#3A77FF" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M19 5V10" stroke="#3A77FF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4>Connect with a Trainer</h4>
                  <p className="text-muted mb-4">Get personalized fitness plans and coaching from certified trainers.</p>
                  <Button 
                    className="dashboard-btn" 
                    onClick={() => setShowTrainerModal(true)}
                  >
                    Connect Now
                  </Button>
                </div>
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

      {/* Modals */}
      <ReceiptScanner 
        show={showReceiptScanner} 
        onHide={() => setShowReceiptScanner(false)} 
        onSuccess={handleScanSuccess}
      />
      
      <PersonalTrainerModal
        show={showTrainerModal}
        onHide={() => setShowTrainerModal(false)}
      />
    </div>
  );
} 