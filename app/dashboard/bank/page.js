'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { FaWallet, FaArrowLeft, FaDollarSign, FaChartLine, FaCreditCard, FaHistory } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageTransition from '../../../components/PageTransition';

export default function BankPage() {
  const router = useRouter();
  const [balance] = useState(1247.50);
  const [monthlyEarnings] = useState(89.25);
  const [totalEarned] = useState(2456.80);
  const [totalSpent] = useState(1209.30);

  const recentTransactions = [
    {
      id: 1,
      type: 'earned',
      amount: 12.50,
      description: 'Ad Network Engagement - Health Brand Campaign',
      date: '2 hours ago',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'spent',
      amount: 45.30,
      description: 'CVS Pharmacy - Prescription & OTC Items',
      date: '1 day ago',
      status: 'Completed'
    },
    {
      id: 3,
      type: 'earned',
      amount: 8.75,
      description: 'Ad Network Engagement - Wellness Content',
      date: '2 days ago',
      status: 'Completed'
    },
    {
      id: 4,
      type: 'interest',
      amount: 3.42,
      description: 'Daily Compound Interest',
      date: '3 days ago',
      status: 'Completed'
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)', padding: '4rem 0' }}>
        <Container>
          <Row>
            <Col xs={12}>
              <div style={{ marginBottom: '2rem' }}>
                <Link href="/dashboard" style={{ textDecoration: 'none', color: '#2c5530' }}>
                  <Button variant="link" style={{ color: '#2c5530', padding: 0, marginBottom: '1rem' }}>
                    <FaArrowLeft className="me-2" />
                    Back to Dashboard
                  </Button>
                </Link>
                <h1 style={{ color: '#2c5530', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Bank
                </h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  Manage your subsidy balance and financial transactions
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mb-4">
            <Col md={3}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)', color: 'white' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <FaWallet style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Current Balance</div>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>${balance.toFixed(2)}</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <FaDollarSign style={{ fontSize: '2.5rem', color: '#28a745', marginBottom: '1rem' }} />
                  <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Monthly Earnings</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#28a745' }}>${monthlyEarnings.toFixed(2)}</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <FaChartLine style={{ fontSize: '2.5rem', color: '#28a745', marginBottom: '1rem' }} />
                  <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Total Earned</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#28a745' }}>${totalEarned.toFixed(2)}</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body style={{ padding: '2rem', textAlign: 'center' }}>
                  <FaCreditCard style={{ fontSize: '2.5rem', color: '#dc3545', marginBottom: '1rem' }} />
                  <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Total Spent</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#dc3545' }}>${totalSpent.toFixed(2)}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Card style={{ border: 'none', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Card.Header style={{ background: 'white', borderBottom: '2px solid #f0f0f0', padding: '1.5rem' }}>
                  <h4 style={{ margin: 0, color: '#2c5530', fontWeight: 600 }}>
                    <FaHistory className="me-2" />
                    Recent Transactions
                  </h4>
                </Card.Header>
                <Card.Body style={{ padding: 0 }}>
                  <Table responsive hover style={{ margin: 0 }}>
                    <thead style={{ background: '#f8f9fa' }}>
                      <tr>
                        <th style={{ padding: '1rem', color: '#2c5530', fontWeight: 600 }}>Description</th>
                        <th style={{ padding: '1rem', color: '#2c5530', fontWeight: 600 }}>Date</th>
                        <th style={{ padding: '1rem', color: '#2c5530', fontWeight: 600 }}>Amount</th>
                        <th style={{ padding: '1rem', color: '#2c5530', fontWeight: 600 }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td style={{ padding: '1rem' }}>{transaction.description}</td>
                          <td style={{ padding: '1rem', color: '#666' }}>{transaction.date}</td>
                          <td style={{ 
                            padding: '1rem', 
                            fontWeight: 700,
                            color: transaction.type === 'earned' ? '#28a745' : transaction.type === 'spent' ? '#dc3545' : '#17a2b8'
                          }}>
                            {transaction.type === 'earned' ? '+' : transaction.type === 'spent' ? '-' : '+'}${transaction.amount.toFixed(2)}
                          </td>
                          <td style={{ padding: '1rem' }}>
                            <Badge bg="success">{transaction.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
}

