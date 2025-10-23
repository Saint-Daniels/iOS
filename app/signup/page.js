'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';
import { extractMarketingID } from '../utils/leadTracking';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    agreeToTerms: false,
    agentid: '',
    convertedtoapplication: true,
    lastcontacted: '',
    leadid: '',
    leadsource: '',
    linkedclientid: '',
    marketingid: '',
    notes: '',
    status: 'New',
    timestamp: new Date().toISOString(),
    submittedat: new Date().toISOString()
  });
  const [marketingID, setMarketingID] = useState('UNKNOWN');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Extract marketing ID from URL when component mounts
  useEffect(() => {
    const extractedID = extractMarketingID();
    setMarketingID(extractedID);
    setFormData(prev => ({
      ...prev,
      marketingid: extractedID
    }));
  }, []);

  // Add a validation function for the form
  const validateForm = () => {
    // Check required fields
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!formData.phonenumber.trim()) {
      setError('Phone number is required');
      return false;
    }
    
    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return false;
    }
    
    return true;
  };

  // Update handleSubmit to use validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format the submittedat date in the required format
      const now = new Date();
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3,
        hour12: true,
        timeZoneName: 'short'
      };
      const formattedDate = now.toLocaleString('en-US', options);
      
      // Prepare the data for submission
      const submissionData = {
        ...formData,
        submittedat: formattedDate,
        lastcontacted: formattedDate,
        timestamp: now.toISOString()
      };
      
      // For demo purposes, log the form data
      console.log('Form submitted:', submissionData);
      
      // Immediately redirect to the application page without waiting for API
      // This ensures the user isn't stuck on a loading screen
      router.push('/application');
      
      // Try to send the data in the background
      fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      }).catch(err => {
        // Silent failure - user has already been redirected
        console.error('Background submission error:', err);
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <PageTransition>
      <div className="page-content">
        <Navbar />
        <div className="enrollment-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="enrollment-card">
                  <h1 className="enrollment-title">Create Your Royal Account</h1>
                  <p className="enrollment-subtitle">Join our exclusive career development and healthcare program</p>
                  
                  {error && (
                    <div className="alert alert-danger mb-4" role="alert">
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="enrollment-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="checkbox-container">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required 
                      />
                      <label htmlFor="terms">
                        I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className={`signup-button relative ${isSubmitting ? 'opacity-70' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
                          Creating Account...
                        </>
                      ) : (
                        'Create Your Royal Account'
                      )}
                    </button>

                    <div className="login-text">
                      Already have an account? <Link href="/login">Login here</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
} 