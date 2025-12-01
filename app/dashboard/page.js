'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, ProgressBar, Tab, Tabs, Alert } from 'react-bootstrap';
import { FaDollarSign, FaCreditCard, FaChartLine, FaGift, FaHospital, FaMobile, FaEye, FaLock, FaDownload, FaArrowUp, FaArrowDown, FaCalendarAlt, FaReceipt, FaStore, FaPercent, FaWallet, FaUser, FaCog, FaSignOutAlt, FaBell, FaHandshake, FaBullseye, FaUsers, FaShieldAlt, FaCheckCircle, FaClock, FaHistory, FaEnvelope, FaStar, FaTag } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import PageTransition from '../../components/PageTransition';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('inbox');
  const [showSettings, setShowSettings] = useState(false);
  const [showVirtualCard, setShowVirtualCard] = useState(false);
  const [chartPeriod, setChartPeriod] = useState('1W');
  const [transactionPage, setTransactionPage] = useState(1);
  const transactionsPerPage = 10;
  const [readPage, setReadPage] = useState(1);
  const [unreadPage, setUnreadPage] = useState(1);
  const adsPerPage = 5;
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationConsent, setLocationConsent] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [localPharmacies, setLocalPharmacies] = useState([]);
  const [locationError, setLocationError] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [showPharmacyMap, setShowPharmacyMap] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Check authentication with enhanced security
  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    const userEmail = Cookies.get('userEmail');
    
    // Enhanced security check
    if (!isLoggedIn || isLoggedIn !== 'true' || !userEmail) {
      // Clear any invalid cookies
      Cookies.remove('isLoggedIn');
      Cookies.remove('userEmail');
      router.push('/login');
      return;
    }

    // Additional security: verify session is still valid
    // In production, you would verify with your backend
    const checkSession = async () => {
      try {
        // Add session validation logic here if needed
        // For now, we'll just ensure cookies are valid
        if (!Cookies.get('isLoggedIn')) {
          router.push('/login');
        }
      } catch (error) {
        console.error('Session validation error:', error);
        Cookies.remove('isLoggedIn');
        Cookies.remove('userEmail');
        router.push('/login');
      }
    };

    checkSession();
  }, [router]);

  // Dashboard data
  const subsidyBalance = 1247.50;
  const compoundInterest = 18;
  const monthlyEarnings = 89.25;
  const totalEarned = 2456.80;
  const totalSpent = 1209.30;
  const pharmacyCount = 3;

  // Balance history data for different time periods
  const getBalanceHistory = (period) => {
    switch(period) {
      case '1D':
        // Today - hourly data
        return [
          { time: 0, balance: 1240 },
          { time: 1, balance: 1242 },
          { time: 2, balance: 1243 },
          { time: 3, balance: 1244.5 },
          { time: 4, balance: 1245.5 },
          { time: 5, balance: 1246 },
          { time: 6, balance: 1247.50 }
        ];
      case '1W':
        // Last 7 days
        return [
          { time: 0, balance: 1100 },
          { time: 1, balance: 1125 },
          { time: 2, balance: 1150 },
          { time: 3, balance: 1180 },
          { time: 4, balance: 1200 },
          { time: 5, balance: 1225 },
          { time: 6, balance: 1247.50 }
        ];
      case '1M':
        // Last 30 days (weekly points)
        return [
          { time: 0, balance: 850 },
          { time: 1, balance: 920 },
          { time: 2, balance: 980 },
          { time: 3, balance: 1050 },
          { time: 4, balance: 1120 },
          { time: 5, balance: 1180 },
          { time: 6, balance: 1247.50 }
        ];
      case '3M':
        // Last 3 months (monthly points)
        return [
          { time: 0, balance: 600 },
          { time: 1, balance: 750 },
          { time: 2, balance: 900 },
          { time: 3, balance: 1100 },
          { time: 4, balance: 1247.50 }
        ];
      case '1Y':
        // Last year (monthly points)
        return [
          { time: 0, balance: 200 },
          { time: 1, balance: 350 },
          { time: 2, balance: 500 },
          { time: 3, balance: 650 },
          { time: 4, balance: 800 },
          { time: 5, balance: 950 },
          { time: 6, balance: 1100 },
          { time: 7, balance: 1150 },
          { time: 8, balance: 1200 },
          { time: 9, balance: 1220 },
          { time: 10, balance: 1235 },
          { time: 11, balance: 1247.50 }
        ];
      case '5Y':
        // Last 5 years (yearly points)
        return [
          { time: 0, balance: 0 },
          { time: 1, balance: 150 },
          { time: 2, balance: 400 },
          { time: 3, balance: 750 },
          { time: 4, balance: 1100 },
          { time: 5, balance: 1247.50 }
        ];
      case 'MAX':
        // All time (yearly points)
        return [
          { time: 0, balance: 0 },
          { time: 1, balance: 150 },
          { time: 2, balance: 400 },
          { time: 3, balance: 750 },
          { time: 4, balance: 1100 },
          { time: 5, balance: 1247.50 }
        ];
      default:
        return [
          { time: 0, balance: 1100 },
          { time: 1, balance: 1125 },
          { time: 2, balance: 1150 },
          { time: 3, balance: 1180 },
          { time: 4, balance: 1200 },
          { time: 5, balance: 1225 },
          { time: 6, balance: 1247.50 }
        ];
    }
  };

  const balanceHistory = getBalanceHistory(chartPeriod);

  // Ad data for mailbox
  const seenAds = [
    {
      id: 1,
      brand: 'Health Brand A',
      subject: 'Cardiovascular Health Education',
      preview: 'Learn about heart health and earn $12.50 in your private subsidy',
      earnings: 12.50,
      date: '2 hours ago',
      read: true,
      category: 'Cardiovascular'
    },
    {
      id: 2,
      brand: 'Wellness Brand B',
      subject: 'Nutrition & Metabolism Insights',
      preview: 'Discover how nutrition affects your metabolism and unlock $8.75',
      earnings: 8.75,
      date: '1 day ago',
      read: true,
      category: 'Nutrition'
    },
    {
      id: 3,
      brand: 'Pharma Brand C',
      subject: 'Mental Health Awareness Campaign',
      preview: 'Support mental health awareness and earn rewards',
      earnings: 15.00,
      date: '2 days ago',
      read: false,
      category: 'Mental Health'
    },
    {
      id: 4,
      brand: 'Health Brand D',
      subject: 'Preventive Care Information',
      preview: 'Learn about preventive care strategies and earn $10.25',
      earnings: 10.25,
      date: '3 days ago',
      read: true,
      category: 'Preventive Care'
    }
  ];

  const qualifiedAds = [
    {
      id: 5,
      brand: 'Pharma Brand E',
      subject: 'Diabetes Management Program',
      preview: 'Join our diabetes management program and earn $20.00',
      earnings: 20.00,
      category: 'Diabetes',
      expires: '3 days'
    },
    {
      id: 6,
      brand: 'Wellness Brand F',
      subject: 'Fitness & Exercise Guide',
      preview: 'Get personalized fitness recommendations and earn $15.50',
      earnings: 15.50,
      category: 'Fitness',
      expires: '5 days'
    },
    {
      id: 7,
      brand: 'Health Brand G',
      subject: 'Women\'s Health Initiative',
      preview: 'Access women\'s health resources and earn $18.75',
      earnings: 18.75,
      category: 'Women\'s Health',
      expires: '7 days'
    },
    {
      id: 8,
      brand: 'Pharma Brand H',
      subject: 'Chronic Pain Management',
      preview: 'Learn about chronic pain management and earn $22.00',
      earnings: 22.00,
      category: 'Pain Management',
      expires: '2 days'
    }
  ];

  const allTransactions = [
    {
      id: 1,
      type: 'earned',
      amount: 12.50,
      description: 'Ad Network Engagement - Health Brand Campaign',
      date: '2 hours ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Health Brand A',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'spent',
      amount: 45.30,
      description: 'CVS Pharmacy - Prescription & OTC Items',
      date: '1 day ago',
      category: 'Pharmacy',
      icon: <FaHospital />,
      merchant: 'CVS Pharmacy',
      status: 'Completed'
    },
    {
      id: 3,
      type: 'earned',
      amount: 8.75,
      description: 'Ad Network Engagement - Wellness Content',
      date: '2 days ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Wellness Brand B',
      status: 'Completed'
    },
    {
      id: 4,
      type: 'interest',
      amount: 3.42,
      description: 'Daily Compound Interest',
      date: '3 days ago',
      category: 'Growth',
      icon: <FaChartLine />,
      merchant: 'Compound Treasury',
      status: 'Completed'
    },
    {
      id: 5,
      type: 'spent',
      amount: 28.90,
      description: 'Walgreens - Preventative Care Kit',
      date: '5 days ago',
      category: 'Pharmacy',
      icon: <FaHospital />,
      merchant: 'Walgreens',
      status: 'Completed'
    },
    {
      id: 6,
      type: 'earned',
      amount: 15.00,
      description: 'Ad Network Engagement - Mental Health Awareness',
      date: '1 week ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Pharma Brand C',
      status: 'Completed'
    },
    {
      id: 7,
      type: 'spent',
      amount: 67.50,
      description: 'Rite Aid - Prescription Medications',
      date: '1 week ago',
      category: 'Pharmacy',
      icon: <FaHospital />,
      merchant: 'Rite Aid',
      status: 'Completed'
    },
    {
      id: 8,
      type: 'interest',
      amount: 2.85,
      description: 'Daily Compound Interest',
      date: '1 week ago',
      category: 'Growth',
      icon: <FaChartLine />,
      merchant: 'Compound Treasury',
      status: 'Completed'
    },
    {
      id: 9,
      type: 'earned',
      amount: 10.25,
      description: 'Ad Network Engagement - Preventive Care',
      date: '2 weeks ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Health Brand D',
      status: 'Completed'
    },
    {
      id: 10,
      type: 'spent',
      amount: 34.20,
      description: 'CVS Pharmacy - OTC Supplements',
      date: '2 weeks ago',
      category: 'Pharmacy',
      icon: <FaHospital />,
      merchant: 'CVS Pharmacy',
      status: 'Completed'
    },
    {
      id: 11,
      type: 'interest',
      amount: 2.10,
      description: 'Daily Compound Interest',
      date: '2 weeks ago',
      category: 'Growth',
      icon: <FaChartLine />,
      merchant: 'Compound Treasury',
      status: 'Completed'
    },
    {
      id: 12,
      type: 'earned',
      amount: 18.50,
      description: 'Ad Network Engagement - Wellness Program',
      date: '3 weeks ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Wellness Brand E',
      status: 'Completed'
    },
    {
      id: 13,
      type: 'spent',
      amount: 52.75,
      description: 'Walgreens - Prescription Refill',
      date: '3 weeks ago',
      category: 'Pharmacy',
      icon: <FaHospital />,
      merchant: 'Walgreens',
      status: 'Completed'
    },
    {
      id: 14,
      type: 'interest',
      amount: 1.95,
      description: 'Daily Compound Interest',
      date: '3 weeks ago',
      category: 'Growth',
      icon: <FaChartLine />,
      merchant: 'Compound Treasury',
      status: 'Completed'
    },
    {
      id: 15,
      type: 'earned',
      amount: 22.00,
      description: 'Ad Network Engagement - Health Education',
      date: '1 month ago',
      category: 'Earning',
      icon: <FaGift />,
      merchant: 'Health Brand F',
      status: 'Completed'
    }
  ];

  const recentTransactions = allTransactions.slice(0, 5);
  
  // Pagination for transaction history
  const totalTransactionPages = Math.ceil(allTransactions.length / transactionsPerPage);
  const paginatedTransactions = allTransactions.slice(
    (transactionPage - 1) * transactionsPerPage,
    transactionPage * transactionsPerPage
  );

  const adNetworkActivity = [
    {
      id: 1,
      brand: 'Health Brand A',
      campaign: 'Cardiovascular Health',
      earnings: 12.50,
      status: 'completed',
      date: 'Today'
    },
    {
      id: 2,
      brand: 'Wellness Brand B',
      campaign: 'Nutrition & Metabolism',
      earnings: 8.75,
      status: 'completed',
      date: '2 days ago'
    },
    {
      id: 3,
      brand: 'Pharma Brand C',
      campaign: 'Mental Health Awareness',
      earnings: 15.00,
      status: 'available',
      date: 'Available Now'
    },
    {
      id: 4,
      brand: 'Health Brand D',
      campaign: 'Preventive Care',
      earnings: 10.25,
      status: 'available',
      date: 'Available Now'
    }
  ];

  const pharmacyNetwork = [
    {
      id: 1,
      name: 'CVS Pharmacy',
      address: '123 Main St, Your City',
      lastUsed: '1 day ago',
      totalSpent: 234.50,
      status: 'connected'
    },
    {
      id: 2,
      name: 'Walgreens',
      address: '456 Oak Ave, Your City',
      lastUsed: '5 days ago',
      totalSpent: 156.80,
      status: 'connected'
    },
    {
      id: 3,
      name: 'Rite Aid',
      address: '789 Pine Rd, Your City',
      lastUsed: '2 weeks ago',
      totalSpent: 89.20,
      status: 'connected'
    }
  ];

  const quickStats = [
    {
      label: 'Private Subsidy Balance',
      value: `$${subsidyBalance.toFixed(2)}`,
      icon: <FaWallet />,
      color: '#2c5530',
      change: '+$12.50',
      changeType: 'positive'
    },
    {
      label: 'Compound Interest Rate',
      value: `${compoundInterest}%`,
      icon: <FaPercent />,
      color: '#C4A962',
      change: 'Daily',
      changeType: 'neutral'
    },
    {
      label: 'Monthly Earnings',
      value: `$${monthlyEarnings.toFixed(2)}`,
      icon: <FaDollarSign />,
      color: '#2c5530',
      change: '+$8.75',
      changeType: 'positive'
    },
    {
      label: 'Connected Pharmacies',
      value: pharmacyCount.toString(),
      icon: <FaHospital />,
      color: '#C4A962',
      change: 'Active',
      changeType: 'neutral'
    }
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('userEmail');
    setShowLogoutModal(false);
    router.push('/login');
  };

  // Get user's current location using geolocation API
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          fetchNearbyPharmacies(location);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationError('Unable to get your location. Using default location.');
          // Default location: Dallas, TX
          const defaultLocation = {
            lat: 32.7767,
            lng: -96.7970
          };
          setUserLocation(defaultLocation);
          fetchNearbyPharmacies(defaultLocation);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      // Default location: Dallas, TX
      const defaultLocation = {
        lat: 32.7767,
        lng: -96.7970
      };
      setUserLocation(defaultLocation);
      fetchNearbyPharmacies(defaultLocation);
    }
  };

  // Initialize with geolocation
  useEffect(() => {
    if (!userLocation) {
      getCurrentLocation();
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('[data-dropdown]')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // Check if location consent was given (only when pharmacy tab is accessed)
  const checkLocationOnPharmacyTab = () => {
    if (!userLocation) {
      getCurrentLocation();
    }
  };

  // Fetch nearby pharmacies (mock data for now - in production, use actual API)
  const fetchNearbyPharmacies = (location) => {
    // Mock pharmacy data - in production, call your API endpoint
    const mockPharmacies = [
      {
        id: 1,
        name: 'CVS Pharmacy',
        address: '123 Main St, Your City, ST 12345',
        lat: location.lat + 0.01,
        lng: location.lng + 0.01,
        distance: '0.5 mi',
        phone: '(555) 123-4567',
        hours: 'Mon-Sun: 8am-10pm',
        acceptsSubsidy: true
      },
      {
        id: 2,
        name: 'Walgreens',
        address: '456 Oak Ave, Your City, ST 12345',
        lat: location.lat - 0.015,
        lng: location.lng + 0.02,
        distance: '0.8 mi',
        phone: '(555) 234-5678',
        hours: 'Mon-Sun: 7am-11pm',
        acceptsSubsidy: true
      },
      {
        id: 3,
        name: 'Rite Aid',
        address: '789 Pine Rd, Your City, ST 12345',
        lat: location.lat + 0.02,
        lng: location.lng - 0.01,
        distance: '1.2 mi',
        phone: '(555) 345-6789',
        hours: 'Mon-Sun: 9am-9pm',
        acceptsSubsidy: true
      },
      {
        id: 4,
        name: 'Walmart Pharmacy',
        address: '321 Elm St, Your City, ST 12345',
        lat: location.lat - 0.025,
        lng: location.lng - 0.015,
        distance: '1.5 mi',
        phone: '(555) 456-7890',
        hours: 'Mon-Sun: 8am-9pm',
        acceptsSubsidy: true
      },
      {
        id: 5,
        name: 'Target Pharmacy',
        address: '654 Maple Dr, Your City, ST 12345',
        lat: location.lat + 0.03,
        lng: location.lng + 0.025,
        distance: '2.0 mi',
        phone: '(555) 567-8901',
        hours: 'Mon-Sun: 8am-10pm',
        acceptsSubsidy: true
      }
    ];
    setLocalPharmacies(mockPharmacies);
  };

  // Handle location consent
  const handleLocationConsent = () => {
    if (locationConsent) {
      localStorage.setItem('locationConsent', 'true');
      setShowLocationModal(false);
      getCurrentLocation();
    }
  };

  return (
    <PageTransition>
      <div className="professional-dashboard" style={{ position: 'relative', minHeight: '100vh', background: '#f8f9fa' }}>
        {/* Top Bar with Account Dropdown */}
        <div style={{
          background: 'white',
          borderBottom: '1px solid #e5e5e5',
          padding: '0.75rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={6} sm={6} md={6}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    src="/images/saintdanielslogo.jpeg"
                    alt="Saint Daniels Healthcare"
                    width={100}
                    height={32}
                    style={{ objectFit: 'contain', maxWidth: '100%' }}
                  />
                </div>
              </Col>
              <Col xs={6} sm={6} md={6} className="text-end">
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
                  {/* Account Settings Button with Dropdown */}
                  <div style={{ position: 'relative' }} data-dropdown>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1.2rem',
                        background: '#28a745',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '0.9rem',
                        color: 'white',
                        fontWeight: 600,
                        boxShadow: '0 2px 4px rgba(40, 167, 69, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#218838';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#28a745';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(40, 167, 69, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <FaCog />
                      <span className="d-none d-sm-inline">Account</span>
                    </button>
                    {showDropdown && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '0.5rem',
                        background: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        minWidth: '200px',
                        zIndex: 1000,
                        border: '1px solid #e0e0e0'
                      }}>
                        <Link href="/dashboard/enrollment" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div
                            style={{
                              padding: '0.75rem 1rem',
                              cursor: 'pointer',
                              borderBottom: '1px solid #f0f0f0',
                              transition: 'background 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            onClick={() => setShowDropdown(false)}
                          >
                            <FaUser />
                            Enrollment
                          </div>
                        </Link>
                        <Link href="/dashboard/bank" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div
                            style={{
                              padding: '0.75rem 1rem',
                              cursor: 'pointer',
                              borderBottom: '1px solid #f0f0f0',
                              transition: 'background 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            onClick={() => setShowDropdown(false)}
                          >
                            <FaWallet />
                            Bank
                          </div>
                        </Link>
                        <Link href="/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <div
                            style={{
                              padding: '0.75rem 1rem',
                              cursor: 'pointer',
                              borderBottom: '1px solid #f0f0f0',
                              transition: 'background 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            onClick={() => setShowDropdown(false)}
                          >
                            <FaUser />
                            Profile
                          </div>
                        </Link>
                        <div
                          onClick={() => {
                            setShowDropdown(false);
                            setShowSettings(true);
                          }}
                          style={{
                            padding: '0.75rem 1rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease',
                            borderTop: '1px solid #f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                        >
                          <FaCog />
                          Settings
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.2rem',
                      background: 'transparent',
                      border: '2px solid #dc3545',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: '0.9rem',
                      color: '#dc3545',
                      fontWeight: 600,
                      boxShadow: '0 2px 4px rgba(220, 53, 69, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#dc3545';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(220, 53, 69, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#dc3545';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(220, 53, 69, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaSignOutAlt />
                    <span className="d-none d-sm-inline">Logout</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container fluid style={{ padding: '1rem 0.5rem' }}>
          {/* Balance Widget in Header */}
          <Row className="mb-3">
            <Col xs={12} className="d-flex justify-content-end align-items-center gap-3">
              <div 
                onClick={() => setShowBalanceModal(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <FaWallet style={{ fontSize: '1.5rem', color: '#2c5530' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: 500 }}>Balance</div>
                  <div style={{ fontSize: '1.25rem', color: '#2c5530', fontWeight: 700 }}>
                    ${subsidyBalance.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowPharmacyMap(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  border: '2px solid #2c5530',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: '#2c5530',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2c5530';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#2c5530';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaHospital style={{ fontSize: '1.5rem' }} />
                <span className="d-none d-sm-inline">Pharmacies</span>
              </button>
            </Col>
          </Row>

          {/* Mailbox Inbox View */}
          <Row>
            <Col xs={12}>
              <Card style={{
                border: 'none',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                background: 'white',
                minHeight: '600px'
              }}>
                <Card.Header style={{
                  background: 'white',
                  borderBottom: '2px solid #f0f0f0',
                  padding: '1.5rem',
                  paddingBottom: '2rem',
                  borderRadius: '16px 16px 0 0'
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 style={{ margin: 0, color: '#2c5530', fontWeight: 600 }}>
                      <FaEnvelope className="me-2" />
                      Inbox - Available Ads
                    </h4>
                    <Badge bg="success" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                      {qualifiedAds.length} New
                    </Badge>
                  </div>
                </Card.Header>
                <Card.Body style={{ padding: 0 }}>
                  {/* Available Ads List */}
                  <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                    {qualifiedAds.map((ad, index) => (
                      <div
                        key={ad.id}
                        onClick={() => setSelectedAd(ad)}
                        style={{
                          padding: '1.5rem',
                          borderBottom: '1px solid #f0f0f0',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          background: selectedAd?.id === ad.id ? '#f8f9fa' : 'white'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedAd?.id !== ad.id) {
                            e.currentTarget.style.background = '#f8f9fa';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedAd?.id !== ad.id) {
                            e.currentTarget.style.background = 'white';
                          }
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start">
                          <div style={{ flex: 1 }}>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <Badge bg="primary" style={{ fontSize: '0.75rem' }}>
                                {ad.category}
                              </Badge>
                              <span style={{ fontSize: '0.875rem', color: '#666' }}>
                                {ad.brand}
                              </span>
                            </div>
                            <h5 style={{ 
                              margin: '0.5rem 0', 
                              color: '#2c5530', 
                              fontWeight: 600,
                              fontSize: '1.1rem'
                            }}>
                              {ad.subject}
                            </h5>
                            <p style={{ 
                              margin: '0.5rem 0', 
                              color: '#666', 
                              fontSize: '0.95rem',
                              lineHeight: '1.5'
                            }}>
                              {ad.preview}
                            </p>
                            <div className="d-flex align-items-center gap-3 mt-2">
                              <span style={{ 
                                color: '#2c5530', 
                                fontWeight: 700,
                                fontSize: '1.1rem'
                              }}>
                                +${ad.earnings.toFixed(2)}
                              </span>
                              <span style={{ fontSize: '0.875rem', color: '#999' }}>
                                Expires in {ad.expires}
                              </span>
                            </div>
                          </div>
                          <FaEnvelope style={{ 
                            fontSize: '1.5rem', 
                            color: '#2c5530',
                            opacity: 0.3,
                            marginLeft: '1rem'
                          }} />
                        </div>
                      </div>
                    ))}
                    
                    {/* Seen Ads Section */}
                    {seenAds.length > 0 && (
                      <>
                        <div style={{
                          padding: '1rem 1.5rem',
                          background: '#f8f9fa',
                          borderBottom: '1px solid #e0e0e0',
                          fontWeight: 600,
                          color: '#666',
                          fontSize: '0.875rem'
                        }}>
                          Previously Viewed
                        </div>
                        {seenAds.map((ad) => (
                          <div
                            key={ad.id}
                            onClick={() => setSelectedAd(ad)}
                            style={{
                              padding: '1.5rem',
                              borderBottom: '1px solid #f0f0f0',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              background: selectedAd?.id === ad.id ? '#f8f9fa' : 'white',
                              opacity: 0.7
                            }}
                            onMouseEnter={(e) => {
                              if (selectedAd?.id !== ad.id) {
                                e.currentTarget.style.background = '#f8f9fa';
                                e.currentTarget.style.opacity = '1';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (selectedAd?.id !== ad.id) {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.opacity = '0.7';
                              }
                            }}
                          >
                            <div className="d-flex justify-content-between align-items-start">
                              <div style={{ flex: 1 }}>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <Badge bg="secondary" style={{ fontSize: '0.75rem' }}>
                                    {ad.category}
                                  </Badge>
                                  <span style={{ fontSize: '0.875rem', color: '#666' }}>
                                    {ad.brand}
                                  </span>
                                  {ad.read && (
                                    <FaCheckCircle style={{ fontSize: '0.875rem', color: '#28a745' }} />
                                  )}
                                </div>
                                <h5 style={{ 
                                  margin: '0.5rem 0', 
                                  color: '#2c5530', 
                                  fontWeight: 600,
                                  fontSize: '1rem'
                                }}>
                                  {ad.subject}
                                </h5>
                                <p style={{ 
                                  margin: '0.5rem 0', 
                                  color: '#666', 
                                  fontSize: '0.9rem'
                                }}>
                                  {ad.preview}
                                </p>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                  <span style={{ 
                                    color: '#2c5530', 
                                    fontWeight: 600
                                  }}>
                                    +${ad.earnings.toFixed(2)}
                                  </span>
                                  <span style={{ fontSize: '0.875rem', color: '#999' }}>
                                    {ad.date}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Old Tabs Structure - Keeping for reference but will be replaced */}
          <Row className="mb-4" style={{ display: 'none' }}>
            <Col>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => {
                  setActiveTab(k);
                  if (k === 'pharmacy') {
                    checkLocationOnPharmacyTab();
                  }
                }}
                className="professional-tabs"
              >
                <Tab eventKey="balance" title={
                  <span><FaWallet className="me-2" />Balance</span>
                }>
                  <Row className="justify-content-center" style={{ marginTop: '1rem' }}>
                    <Col xs={12} lg={10} xl={8}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        background: 'white',
                        marginTop: '1rem'
                      }}>
                        <Card.Body style={{ padding: '1rem' }}>
                          {/* Chart Display */}
                          <div style={{ width: '100%', height: '250px', position: 'relative', marginBottom: '1.5rem', overflow: 'hidden' }}>
                            <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                              <defs>
                                <linearGradient id="balanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#2c5530" stopOpacity="0.15" />
                                  <stop offset="100%" stopColor="#2c5530" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {(() => {
                                const minBalance = Math.min(...balanceHistory.map(b => b.balance));
                                const maxBalance = Math.max(...balanceHistory.map(b => b.balance));
                                const range = maxBalance - minBalance || 100;
                                const padding = range * 0.15;
                                const chartHeight = 260;
                                const chartWidth = 280;
                                const stepX = balanceHistory.length > 1 ? chartWidth / (balanceHistory.length - 1) : 0;
                                
                                const points = balanceHistory.map((item, index) => {
                                  const x = 10 + (index * stepX);
                                  const y = 290 - ((item.balance - minBalance + padding) / (range + padding * 2)) * chartHeight;
                                  return { x, y, balance: item.balance };
                                });
                                
                                const pathData = points.map((p, i) => 
                                  i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`
                                ).join(' ');
                                
                                const areaPath = `${pathData} L ${points[points.length - 1].x} 300 L ${points[0].x} 300 Z`;
                                
                                return (
                                  <>
                                    {/* Area fill */}
                                    <path
                                      d={areaPath}
                                      fill="url(#balanceGradient)"
                                    />
                                    {/* Line */}
                                    <path
                                      d={pathData}
                                      fill="none"
                                      stroke="#2c5530"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    {/* Grid lines */}
                                    <line x1="10" y1="300" x2="290" y2="300" stroke="#e5e5e5" strokeWidth="1" />
                                    <line x1="10" y1="230" x2="290" y2="230" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                    <line x1="10" y1="160" x2="290" y2="160" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                    <line x1="10" y1="90" x2="290" y2="90" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                                  </>
                                );
                              })()}
                            </svg>
                          </div>

                          {/* Stats Display */}
                          {(() => {
                            const firstBalance = balanceHistory[0].balance;
                            const lastBalance = balanceHistory[balanceHistory.length - 1].balance;
                            const change = lastBalance - firstBalance;
                            const changePercent = firstBalance > 0 ? ((change / firstBalance) * 100) : 0;
                            const isPositive = change >= 0;
                            
                            return (
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingBottom: '1.5rem',
                                marginBottom: '1.5rem',
                                borderBottom: '1px solid #f0f0f0'
                              }}>
                                <div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    marginBottom: '0.5rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    Current Balance
                                  </div>
                                  <div style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                    fontWeight: 700,
                                    color: '#000000',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    letterSpacing: '-0.02em'
                                  }}>
                                    ${lastBalance.toFixed(2)}
                                  </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    marginBottom: '0.5rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {chartPeriod === '1D' ? 'Today' : chartPeriod === '1W' ? 'This Week' : chartPeriod === '1M' ? 'This Month' : chartPeriod === '3M' ? '3 Months' : chartPeriod === '1Y' ? 'This Year' : chartPeriod === '5Y' ? '5 Years' : 'All Time'}
                                  </div>
                                  <div style={{
                                    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                                    fontWeight: 700,
                                    color: isPositive ? '#2c5530' : '#e74c3c',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {isPositive ? '+' : ''}${change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
                                  </div>
                                </div>
                              </div>
                            );
                          })()}

                          {/* Time Period Buttons */}
                          <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                          }}>
                            {['1D', '1W', '1M', '3M', '1Y', '5Y', 'MAX'].map((period) => (
                              <button
                                key={period}
                                onClick={() => setChartPeriod(period)}
                                style={{
                                  padding: '0.4rem 0.75rem',
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  borderRadius: '6px',
                                  border: 'none',
                                  background: chartPeriod === period ? '#000000' : '#f5f5f5',
                                  color: chartPeriod === period ? '#ffffff' : '#666666',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                  letterSpacing: '0.3px',
                                  whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => {
                                  if (chartPeriod !== period) {
                                    e.target.style.background = '#e5e5e5';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (chartPeriod !== period) {
                                    e.target.style.background = '#f5f5f5';
                                  }
                                }}
                              >
                                {period}
                              </button>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="mailbox" title={
                  <span><FaEnvelope className="me-2" />Mailbox</span>
                }>
                  <Row>
                    {/* Seen Ads Section */}
                    <Col xs={12} lg={6}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        marginBottom: '2rem',
                        background: 'white'
                      }}>
                        <Card.Body style={{ padding: 0 }}>
                          {seenAds.slice((readPage - 1) * adsPerPage, readPage * adsPerPage).map((ad, index, array) => (
                            <div
                              key={ad.id}
                              style={{
                                padding: '1rem',
                                paddingTop: '1rem',
                                paddingBottom: '1.5rem',
                                borderBottom: index < array.length - 1 ? '1px solid #f0f0f0' : 'none',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease',
                                background: ad.read ? 'white' : '#f8f9fa',
                                minHeight: '120px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f5f5f5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = ad.read ? 'white' : '#f8f9fa';
                              }}
                            >
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1rem',
                                  flexShrink: 0
                                }}>
                                  {ad.brand.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.5rem'
                                  }}>
                                    <span style={{
                                      fontSize: '0.875rem',
                                      fontWeight: 600,
                                      color: '#1B392F',
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                      {ad.brand}
                                    </span>
                                    {!ad.read && (
                                      <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#2c5530'
                                      }}></div>
                                    )}
                                    <Badge bg="success" style={{
                                      fontSize: '0.65rem',
                                      padding: '0.2rem 0.4rem',
                                      marginLeft: 'auto'
                                    }}>
                                      +${ad.earnings.toFixed(2)}
                                    </Badge>
                                  </div>
                                  <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: ad.read ? 400 : 600,
                                    color: '#333',
                                    marginBottom: '0.25rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {ad.subject}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#666',
                                    marginBottom: '0.875rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    lineHeight: '1.5',
                                    paddingBottom: '0.25rem'
                                  }}>
                                    {ad.preview}
                                  </div>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    lineHeight: '1.5',
                                    marginBottom: '0',
                                    paddingTop: '0.25rem'
                                  }}>
                                    <span style={{ color: '#2c5530', fontWeight: 500 }}>Task Completed</span>
                                    <span>•</span>
                                    <span>{ad.date}</span>
                                    <span>•</span>
                                    <FaTag style={{ fontSize: '0.7rem' }} />
                                    <span>{ad.category}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Card.Body>
                        {seenAds.length > adsPerPage && (
                          <Card.Footer style={{
                            background: 'white',
                            border: 'none',
                            borderTop: '1px solid #e8eaed',
                            padding: '1rem 1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <div style={{
                              fontSize: '0.875rem',
                              color: '#5f6368',
                              fontFamily: 'Roboto, sans-serif'
                            }}>
                              Showing {((readPage - 1) * adsPerPage) + 1} - {Math.min(readPage * adsPerPage, seenAds.length)} of {seenAds.length}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button
                                onClick={() => setReadPage(prev => Math.max(1, prev - 1))}
                                disabled={readPage === 1}
                                style={{
                                  padding: '0.5rem 1rem',
                                  fontSize: '0.875rem',
                                  border: '1px solid #dadce0',
                                  borderRadius: '4px',
                                  background: readPage === 1 ? '#f8f9fa' : 'white',
                                  color: readPage === 1 ? '#dadce0' : '#1a73e8',
                                  cursor: readPage === 1 ? 'not-allowed' : 'pointer',
                                  fontFamily: 'Roboto, sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Previous
                              </button>
                              <button
                                onClick={() => setReadPage(prev => Math.min(Math.ceil(seenAds.length / adsPerPage), prev + 1))}
                                disabled={readPage === Math.ceil(seenAds.length / adsPerPage)}
                                style={{
                                  padding: '0.5rem 1rem',
                                  fontSize: '0.875rem',
                                  border: '1px solid #dadce0',
                                  borderRadius: '4px',
                                  background: readPage === Math.ceil(seenAds.length / adsPerPage) ? '#f8f9fa' : 'white',
                                  color: readPage === Math.ceil(seenAds.length / adsPerPage) ? '#dadce0' : '#1a73e8',
                                  cursor: readPage === Math.ceil(seenAds.length / adsPerPage) ? 'not-allowed' : 'pointer',
                                  fontFamily: 'Roboto, sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Next
                              </button>
                            </div>
                          </Card.Footer>
                        )}
                      </Card>
                    </Col>

                    {/* Qualified Ads Section */}
                    <Col xs={12} lg={6}>
                      <Card style={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        marginBottom: '2rem',
                        background: 'white'
                      }}>
                        <Card.Body style={{ padding: 0 }}>
                          {qualifiedAds.slice((unreadPage - 1) * adsPerPage, unreadPage * adsPerPage).map((ad, index, array) => (
                            <div
                              key={ad.id}
                              style={{
                                padding: '1rem',
                                paddingTop: '1.5rem',
                                paddingBottom: '2rem',
                                borderBottom: index < array.length - 1 ? '1px solid #f0f0f0' : 'none',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease',
                                background: 'white',
                                minHeight: '120px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f5f5f5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                              }}
                            >
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1rem',
                                  flexShrink: 0
                                }}>
                                  {ad.brand.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.5rem'
                                  }}>
                                    <span style={{
                                      fontSize: '0.875rem',
                                      fontWeight: 600,
                                      color: '#1B392F',
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                      {ad.brand}
                                    </span>
                                    <Badge bg="warning" style={{
                                      fontSize: '0.65rem',
                                      padding: '0.2rem 0.4rem',
                                      marginLeft: 'auto'
                                    }}>
                                      +${ad.earnings.toFixed(2)}
                                    </Badge>
                                  </div>
                                  <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    marginBottom: '0.25rem',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                  }}>
                                    {ad.subject}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#666',
                                    marginBottom: '0.875rem',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    lineHeight: '1.5',
                                    paddingBottom: '0.25rem'
                                  }}>
                                    {ad.preview}
                                  </div>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    fontSize: '0.75rem',
                                    color: '#8e8e93',
                                    lineHeight: '1.5',
                                    marginBottom: '0',
                                    paddingTop: '0.25rem'
                                  }}>
                                    <span style={{ color: '#C4A962', fontWeight: 500 }}>Unread</span>
                                    <span>•</span>
                                    <FaTag style={{ fontSize: '0.7rem' }} />
                                    <span>{ad.category}</span>
                                    <span>•</span>
                                    <span style={{ color: '#C4A962', fontWeight: 600 }}>
                                      Expires in {ad.expires}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Card.Body>
                        {qualifiedAds.length > adsPerPage && (
                          <Card.Footer style={{
                            background: 'white',
                            border: 'none',
                            borderTop: '1px solid #e8eaed',
                            padding: '1rem 1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <div style={{
                              fontSize: '0.875rem',
                              color: '#5f6368',
                              fontFamily: 'Roboto, sans-serif'
                            }}>
                              Showing {((unreadPage - 1) * adsPerPage) + 1} - {Math.min(unreadPage * adsPerPage, qualifiedAds.length)} of {qualifiedAds.length}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button
                                onClick={() => setUnreadPage(prev => Math.max(1, prev - 1))}
                                disabled={unreadPage === 1}
                                style={{
                                  padding: '0.5rem 1rem',
                                  fontSize: '0.875rem',
                                  border: '1px solid #dadce0',
                                  borderRadius: '4px',
                                  background: unreadPage === 1 ? '#f8f9fa' : 'white',
                                  color: unreadPage === 1 ? '#dadce0' : '#1a73e8',
                                  cursor: unreadPage === 1 ? 'not-allowed' : 'pointer',
                                  fontFamily: 'Roboto, sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Previous
                              </button>
                              <button
                                onClick={() => setUnreadPage(prev => Math.min(Math.ceil(qualifiedAds.length / adsPerPage), prev + 1))}
                                disabled={unreadPage === Math.ceil(qualifiedAds.length / adsPerPage)}
                                style={{
                                  padding: '0.5rem 1rem',
                                  fontSize: '0.875rem',
                                  border: '1px solid #dadce0',
                                  borderRadius: '4px',
                                  background: unreadPage === Math.ceil(qualifiedAds.length / adsPerPage) ? '#f8f9fa' : 'white',
                                  color: unreadPage === Math.ceil(qualifiedAds.length / adsPerPage) ? '#dadce0' : '#1a73e8',
                                  cursor: unreadPage === Math.ceil(qualifiedAds.length / adsPerPage) ? 'not-allowed' : 'pointer',
                                  fontFamily: 'Roboto, sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Next
                              </button>
                            </div>
                          </Card.Footer>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="pharmacy" title={
                  <span><FaHospital className="me-2" />Pharmacy</span>
                }>
                  {userLocation && localPharmacies.length > 0 ? (
                    <Row>
                      <Col xs={12} lg={8} style={{ marginBottom: '1rem' }}>
                        <Card style={{
                          border: 'none',
                          borderRadius: '12px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          overflow: 'hidden',
                          height: '400px'
                        }}>
                          <Card.Body style={{ padding: 0, height: '100%' }}>
                            {/* Google Maps Embed */}
                            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                              <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d-s6U4uUgLhV0k&q=pharmacy+near+${userLocation.lat},${userLocation.lng}&zoom=13`}
                              ></iframe>
                              {/* Custom markers overlay */}
                              <div style={{
                                position: 'absolute',
                                top: '1rem',
                                left: '1rem',
                                background: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                zIndex: 1000,
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '0.875rem',
                                color: '#202124'
                              }}>
                                <strong>{localPharmacies.length}</strong> pharmacies nearby
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs={12} lg={4}>
                        <Card style={{
                          border: 'none',
                          borderRadius: '12px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          maxHeight: '600px',
                          overflowY: 'auto'
                        }}>
                          <Card.Body style={{ padding: 0 }}>
                            {localPharmacies.map((pharmacy, index) => (
                              <div
                                key={pharmacy.id}
                                style={{
                                  padding: '1rem 1.5rem',
                                  borderBottom: index < localPharmacies.length - 1 ? '1px solid #e8eaed' : 'none',
                                  cursor: 'pointer',
                                  transition: 'background 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                onClick={() => {
                                  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.address)}`, '_blank');
                                }}
                              >
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '1rem'
                                }}>
                                  <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '8px',
                                    background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    flexShrink: 0
                                  }}>
                                    <FaHospital />
                                  </div>
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{
                                      fontSize: '0.9375rem',
                                      fontWeight: 500,
                                      color: '#202124',
                                      marginBottom: '0.25rem',
                                      fontFamily: 'Roboto, sans-serif'
                                    }}>
                                      {pharmacy.name}
                                    </div>
                                    <div style={{
                                      fontSize: '0.8125rem',
                                      color: '#5f6368',
                                      marginBottom: '0.5rem',
                                      fontFamily: 'Roboto, sans-serif'
                                    }}>
                                      {pharmacy.address}
                                    </div>
                                    <div style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.75rem',
                                      fontSize: '0.75rem',
                                      color: '#5f6368',
                                      fontFamily: 'Roboto, sans-serif'
                                    }}>
                                      <span>{pharmacy.distance}</span>
                                      <span>•</span>
                                      <span>{pharmacy.hours}</span>
                                    </div>
                                    <div style={{ marginTop: '0.5rem' }}>
                                      <Badge bg="success" style={{
                                        fontSize: '0.7rem',
                                        padding: '0.25rem 0.5rem',
                                        background: '#34a853',
                                        border: 'none'
                                      }}>
                                        Accepts Private Subsidy
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  ) : (
                    <Card style={{
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      padding: '4rem 2rem'
                    }}>
                      <Card.Body>
                        <div style={{
                          fontSize: '0.9375rem',
                          color: '#5f6368',
                          fontFamily: 'Roboto, sans-serif'
                        }}>
                          Loading pharmacy locations...
                        </div>
                      </Card.Body>
                    </Card>
                  )}
                </Tab>

                <Tab eventKey="history" title={
                  <span><FaHistory className="me-2" />Transactions</span>
                }>
                  <Card style={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                    background: 'white'
                  }}>
                    <Card.Body style={{ padding: 0 }}>
                      <div style={{
                        borderBottom: '1px solid #e8eaed',
                        padding: '0.75rem 1.5rem',
                        background: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '0.75rem',
                        color: '#5f6368',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        <div style={{ width: '200px' }}>Description</div>
                        <div style={{ width: '150px' }}>Merchant</div>
                        <div style={{ width: '120px' }}>Date</div>
                        <div style={{ width: '100px', textAlign: 'right' }}>Amount</div>
                        <div style={{ width: '100px', textAlign: 'center' }}>Status</div>
                      </div>
                      {paginatedTransactions.map((transaction, index) => (
                        <div
                          key={transaction.id}
                          style={{
                            padding: '1rem 1.5rem',
                            borderBottom: index < paginatedTransactions.length - 1 ? '1px solid #e8eaed' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s ease',
                            fontFamily: 'Roboto, sans-serif'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f8f9fa';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: transaction.type === 'earned' || transaction.type === 'interest' 
                              ? 'rgba(44, 85, 48, 0.1)' 
                              : 'rgba(231, 76, 60, 0.1)',
                            color: transaction.type === 'earned' || transaction.type === 'interest' 
                              ? '#2c5530' 
                              : '#e74c3c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.1rem',
                            flexShrink: 0
                          }}>
                            {transaction.icon}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: '#202124',
                              marginBottom: '0.25rem'
                            }}>
                              {transaction.description}
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: '#5f6368'
                            }}>
                              {transaction.category}
                            </div>
                          </div>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            flex: 1,
                            minWidth: 0
                          }}>
                            <div style={{
                              fontSize: '0.75rem',
                              color: '#5f6368',
                              display: 'none'
                            }}>
                              {transaction.merchant}
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: '#5f6368'
                            }}>
                              {transaction.date}
                            </div>
                            <div style={{
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: transaction.type === 'earned' || transaction.type === 'interest' 
                                ? '#2c5530' 
                                : '#e74c3c',
                              fontFamily: 'Roboto, sans-serif',
                              marginTop: '0.25rem'
                            }}>
                              {transaction.type === 'earned' || transaction.type === 'interest' ? '+' : '-'}${transaction.amount.toFixed(2)}
                            </div>
                          </div>
                          <div style={{
                            display: 'none',
                            textAlign: 'center',
                            flexShrink: 0
                          }}>
                            <Badge bg="success" style={{
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              fontWeight: 500,
                              background: '#34a853',
                              border: 'none'
                            }}>
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                    {/* Pagination */}
                    {totalTransactionPages > 1 && (
                      <Card.Footer style={{
                        background: 'white',
                        border: 'none',
                        borderTop: '1px solid #e8eaed',
                        padding: '1rem 1.5rem',
                        borderRadius: '0 0 8px 8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          fontSize: '0.875rem',
                          color: '#5f6368',
                          fontFamily: 'Roboto, sans-serif'
                        }}>
                          Showing {((transactionPage - 1) * transactionsPerPage) + 1} - {Math.min(transactionPage * transactionsPerPage, allTransactions.length)} of {allTransactions.length}
                        </div>
                        <div style={{
                          display: 'flex',
                          gap: '0.5rem',
                          alignItems: 'center'
                        }}>
                          <button
                            onClick={() => setTransactionPage(prev => Math.max(1, prev - 1))}
                            disabled={transactionPage === 1}
                            style={{
                              padding: '0.5rem 1rem',
                              fontSize: '0.875rem',
                              border: '1px solid #dadce0',
                              borderRadius: '4px',
                              background: transactionPage === 1 ? '#f8f9fa' : 'white',
                              color: transactionPage === 1 ? '#dadce0' : '#1a73e8',
                              cursor: transactionPage === 1 ? 'not-allowed' : 'pointer',
                              fontFamily: 'Roboto, sans-serif',
                              fontWeight: 500,
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              if (transactionPage !== 1) {
                                e.target.style.background = '#f8f9fa';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (transactionPage !== 1) {
                                e.target.style.background = 'white';
                              }
                            }}
                          >
                            Previous
                          </button>
                          <div style={{
                            fontSize: '0.875rem',
                            color: '#5f6368',
                            fontFamily: 'Roboto, sans-serif',
                            padding: '0 1rem'
                          }}>
                            Page {transactionPage} of {totalTransactionPages}
                          </div>
                          <button
                            onClick={() => setTransactionPage(prev => Math.min(totalTransactionPages, prev + 1))}
                            disabled={transactionPage === totalTransactionPages}
                            style={{
                              padding: '0.5rem 1rem',
                              fontSize: '0.875rem',
                              border: '1px solid #dadce0',
                              borderRadius: '4px',
                              background: transactionPage === totalTransactionPages ? '#f8f9fa' : 'white',
                              color: transactionPage === totalTransactionPages ? '#dadce0' : '#1a73e8',
                              cursor: transactionPage === totalTransactionPages ? 'not-allowed' : 'pointer',
                              fontFamily: 'Roboto, sans-serif',
                              fontWeight: 500,
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              if (transactionPage !== totalTransactionPages) {
                                e.target.style.background = '#f8f9fa';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (transactionPage !== totalTransactionPages) {
                                e.target.style.background = 'white';
                              }
                            }}
                          >
                            Next
                          </button>
                        </div>
                      </Card.Footer>
                    )}
                  </Card>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>

        {/* Location Permission Modal */}
        <Modal 
          show={showLocationModal} 
          onHide={() => {
            if (locationConsent) {
              setShowLocationModal(false);
            }
          }}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header style={{ borderBottom: '1px solid #e8eaed' }}>
            <Modal.Title style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#202124',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Enable Location Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a73e8 0%, #4285f4 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem'
              }}>
                <FaHospital />
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 400,
                color: '#202124',
                marginBottom: '1rem',
                fontFamily: 'Roboto, sans-serif'
              }}>
                Find Pharmacies Near You
              </h4>
              <p style={{
                fontSize: '0.9375rem',
                color: '#5f6368',
                lineHeight: '1.5',
                marginBottom: '1.5rem',
                fontFamily: 'Roboto, sans-serif'
              }}>
                We'll use your current location to show you nearby pharmacies where you can spend your private subsidy. Your location data is kept private and secure.
              </p>
            </div>

            <div style={{
              background: '#f8f9fa',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <input
                  type="checkbox"
                  id="locationConsent"
                  checked={locationConsent}
                  onChange={(e) => setLocationConsent(e.target.checked)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginTop: '2px',
                    cursor: 'pointer'
                  }}
                />
                <label
                  htmlFor="locationConsent"
                  style={{
                    fontSize: '0.875rem',
                    color: '#202124',
                    fontFamily: 'Roboto, sans-serif',
                    cursor: 'pointer',
                    lineHeight: '1.5'
                  }}
                >
                  I consent to sharing my location to find nearby pharmacies. I have read and agree to the{' '}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1a73e8',
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1a73e8',
                      textDecoration: 'none'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms and Conditions
                  </a>
                  .
                </label>
              </div>
            </div>

            {locationError && (
              <Alert variant="danger" style={{
                marginBottom: '1rem',
                fontSize: '0.875rem',
                fontFamily: 'Roboto, sans-serif'
              }}>
                {locationError}
              </Alert>
            )}
          </Modal.Body>
          <Modal.Footer style={{ borderTop: '1px solid #e8eaed', padding: '1rem 1.5rem' }}>
            <Button
              variant="secondary"
              onClick={() => {
                setShowLocationModal(false);
                setLocationConsent(false);
              }}
              style={{
                border: '1px solid #dadce0',
                background: 'white',
                color: '#5f6368',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleLocationConsent}
              disabled={!locationConsent}
              style={{
                background: locationConsent ? '#1a73e8' : '#dadce0',
                border: 'none',
                color: locationConsent ? 'white' : '#5f6368',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                cursor: locationConsent ? 'pointer' : 'not-allowed'
              }}
            >
              Allow Location Access
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Virtual Card Modal */}
        <Modal show={showVirtualCard} onHide={() => setShowVirtualCard(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Virtual Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-4">
              <div style={{
                background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                borderRadius: '15px',
                padding: '2rem',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                <FaCreditCard size={60} style={{ color: '#C4A962', marginBottom: '1rem' }} />
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>**** **** **** 1234</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Expires: 12/25</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Available Balance: ${subsidyBalance.toFixed(2)}</p>
              </div>
              <Alert variant="info">
                <FaShieldAlt className="me-2" />
                Your virtual card is secure and ready to use at any participating pharmacy. Simply show this card at checkout.
              </Alert>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowVirtualCard(false)}>
              Close
            </Button>
            <Button variant="primary" style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              border: 'none'
            }}>
              <FaDownload className="me-2" />
              Download Card
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Settings Modal */}
        <Modal show={showSettings} onHide={() => setShowSettings(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Account Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Notifications</Form.Label>
                <Form.Check type="switch" defaultChecked label="Receive earnings notifications" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button variant="primary" style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              border: 'none'
            }} onClick={() => setShowSettings(false)}>
              Save Settings
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Balance Modal with Transactions */}
        <Modal 
          show={showBalanceModal} 
          onHide={() => setShowBalanceModal(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton style={{ borderBottom: '2px solid #f0f0f0' }}>
            <Modal.Title style={{ color: '#2c5530', fontWeight: 600 }}>
              <FaWallet className="me-2" />
              Balance & Transaction History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: '1.5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              borderRadius: '12px',
              padding: '2rem',
              color: 'white',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>
                Current Balance
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                ${subsidyBalance.toFixed(2)}
              </div>
            </div>

            <h5 style={{ marginBottom: '1rem', color: '#2c5530', fontWeight: 600 }}>
              Recent Transactions
            </h5>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {allTransactions.slice(0, 10).map((transaction) => (
                <div
                  key={transaction.id}
                  style={{
                    padding: '1rem',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: transaction.type === 'earned' ? '#d4edda' : transaction.type === 'spent' ? '#f8d7da' : '#d1ecf1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: transaction.type === 'earned' ? '#155724' : transaction.type === 'spent' ? '#721c24' : '#0c5460'
                    }}>
                      {transaction.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#2c5530' }}>
                        {transaction.description}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#666' }}>
                        {transaction.date} • {transaction.merchant}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: transaction.type === 'earned' ? '#28a745' : transaction.type === 'spent' ? '#dc3545' : '#17a2b8'
                  }}>
                    {transaction.type === 'earned' ? '+' : transaction.type === 'spent' ? '-' : '+'}${transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>

        {/* Pharmacy Map Modal with 3D Google Maps */}
        <Modal 
          show={showPharmacyMap} 
          onHide={() => setShowPharmacyMap(false)}
          size="xl"
          centered
          fullscreen="lg-down"
        >
          <Modal.Header closeButton style={{ borderBottom: '2px solid #f0f0f0' }}>
            <Modal.Title style={{ color: '#2c5530', fontWeight: 600 }}>
              <FaHospital className="me-2" />
              Nearby Pharmacies
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: 0, height: '70vh' }}>
            {userLocation ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Google Maps 3D View */}
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d-s6U4uUgLhV0k&center=${userLocation.lat},${userLocation.lng}&zoom=14&maptype=roadmap`}
                ></iframe>
                
                {/* Pharmacy List Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'white',
                  maxHeight: '40%',
                  overflowY: 'auto',
                  borderTop: '2px solid #2c5530',
                  padding: '1rem'
                }}>
                  <h6 style={{ marginBottom: '1rem', color: '#2c5530', fontWeight: 600 }}>
                    Pharmacies Near You
                  </h6>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {localPharmacies.map((pharmacy) => (
                      <div
                        key={pharmacy.id}
                        style={{
                          padding: '1rem',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          background: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#2c5530';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(44, 85, 48, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e0e0e0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <div>
                            <div style={{ fontWeight: 600, color: '#2c5530', marginBottom: '0.25rem' }}>
                              {pharmacy.name}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                              {pharmacy.address}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#666' }}>
                              {pharmacy.distance} • {pharmacy.hours}
                            </div>
                          </div>
                          {pharmacy.acceptsSubsidy && (
                            <Badge bg="success" style={{ fontSize: '0.75rem' }}>
                              Accepts Subsidy
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <FaHospital style={{ fontSize: '3rem', color: '#ccc' }} />
                <p style={{ color: '#666' }}>Loading location...</p>
                <Button onClick={getCurrentLocation} variant="primary">
                  Enable Location
                </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>

        {/* Logout Success Modal */}
        <Modal 
          show={showLogoutModal} 
          onHide={() => setShowLogoutModal(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 1.5rem'
            }}>
              <FaCheckCircle />
            </div>
            <h4 style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: '#202124',
              marginBottom: '1rem',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Successfully Logged Out
            </h4>
            <p style={{
              fontSize: '0.9375rem',
              color: '#5f6368',
              marginBottom: '2rem',
              fontFamily: 'Roboto, sans-serif'
            }}>
              You have been successfully logged out of your account.
            </p>
            <Button
              onClick={confirmLogout}
              style={{
                background: '#2c5530',
                border: 'none',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: 500,
                fontFamily: 'Roboto, sans-serif',
                width: '100%'
              }}
            >
              Continue to Login
            </Button>
          </Modal.Body>
        </Modal>
      </div>
      
      {/* Minimal Footer */}
      <footer style={{
        background: '#f8f9fa',
        padding: '1.5rem 0',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        marginTop: '3rem'
      }}>
        <Container>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            © 2025 Saint Daniels Healthcare. All rights reserved.
          </p>
        </Container>
      </footer>
    </PageTransition>
  );
}
