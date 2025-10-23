'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, ProgressBar, Tab, Tabs, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaHeartbeat, FaDumbbell, FaApple, FaWater, FaMoon, FaSun, FaPlus, FaCheck, FaTimes, FaEdit, FaTrash, FaArrowLeft, FaArrowRight, FaUser, FaCog, FaSignOutAlt, FaBell, FaChartLine, FaTrophy, FaUsers, FaBook, FaVideo, FaDownload, FaStethoscope, FaGraduationCap, FaClipboardList, FaUserMd, FaBrain, FaHeart, FaShieldAlt, FaAward, FaLightbulb, FaBookOpen, FaMicroscope, FaPills, FaRunning, FaWeight, FaThermometerHalf, FaEye, FaLungs, FaHeadSideVirus, FaHandHoldingHeart, FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Dashboard() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [showWellnessProgram, setShowWellnessProgram] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showHiddenAnalytics, setShowHiddenAnalytics] = useState(false);
  const [analyticsPassword, setAnalyticsPassword] = useState('');
  const [showMailbox, setShowMailbox] = useState(false);
  const [mailboxMessages, setMailboxMessages] = useState([
    { id: 1, from: "Dr. Sarah Johnson", subject: "Weekly Health Report", time: "2 hours ago", unread: true, priority: "high" },
    { id: 2, from: "Wellness Team", subject: "New Learning Module Available", time: "1 day ago", unread: true, priority: "medium" },
    { id: 3, from: "System Admin", subject: "Account Security Update", time: "3 days ago", unread: false, priority: "low" },
    { id: 4, from: "Dr. Michael Chen", subject: "Lab Results Ready", time: "1 week ago", unread: false, priority: "high" }
  ]);
  const [newActivity, setNewActivity] = useState({
    type: '',
    title: '',
    duration: '',
    notes: ''
  });
  const [activities, setActivities] = useState({});
  const [wellnessGoals, setWellnessGoals] = useState({
    steps: 10000,
    water: 8,
    sleep: 8,
    exercise: 30,
    meditation: 15
  });
  const [dailyProgress, setDailyProgress] = useState({
    steps: 0,
    water: 0,
    sleep: 0,
    exercise: 0,
    meditation: 0
  });

  // Check authentication
  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDay = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleAddActivity = () => {
    if (newActivity.type && newActivity.title) {
      const dateKey = selectedDate.toDateString();
      const activity = {
        ...newActivity,
        id: Date.now(),
        date: selectedDate
      };
      
      setActivities(prev => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), activity]
      }));
      
      setNewActivity({ type: '', title: '', duration: '', notes: '' });
      setShowAddActivity(false);
    }
  };

  const getActivitiesForDate = (date) => {
    return activities[date.toDateString()] || [];
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'exercise': return <FaDumbbell />;
      case 'nutrition': return <FaApple />;
      case 'hydration': return <FaWater />;
      case 'sleep': return <FaMoon />;
      case 'meditation': return <FaHeartbeat />;
      default: return <FaHeartbeat />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'exercise': return '#e74c3c';
      case 'nutrition': return '#f39c12';
      case 'hydration': return '#3498db';
      case 'sleep': return '#9b59b6';
      case 'meditation': return '#2ecc71';
      default: return '#95a5a6';
    }
  };

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "Normal", icon: <FaHeart />, color: "#2ecc71" },
    { label: "Heart Rate", value: "72 BPM", status: "Optimal", icon: <FaHeartbeat />, color: "#1B392F" },
    { label: "BMI", value: "22.5", status: "Healthy", icon: <FaWeight />, color: "#C4A962" },
    { label: "Body Temp", value: "98.6°F", status: "Normal", icon: <FaThermometerHalf />, color: "#e74c3c" }
  ];

  const educationalModules = [
    {
      id: 1,
      title: "Cardiovascular Health Fundamentals",
      description: "Learn about heart health, blood pressure management, and cardiovascular disease prevention",
      duration: "45 minutes",
      difficulty: "Beginner",
      category: "Cardiology",
      progress: 0,
      color: "#1B392F",
      icon: <FaHeart />
    },
    {
      id: 2,
      title: "Nutritional Science & Metabolism",
      description: "Understanding macronutrients, micronutrients, and their impact on health",
      duration: "60 minutes",
      difficulty: "Intermediate",
      category: "Nutrition",
      progress: 25,
      color: "#C4A962",
      icon: <FaApple />
    },
    {
      id: 3,
      title: "Mental Health & Wellness",
      description: "Stress management, mindfulness, and psychological well-being strategies",
      duration: "40 minutes",
      difficulty: "Beginner",
      category: "Psychology",
      progress: 0,
      color: "#1B392F",
      icon: <FaBrain />
    },
    {
      id: 4,
      title: "Exercise Physiology",
      description: "How physical activity affects the body and optimal training principles",
      duration: "50 minutes",
      difficulty: "Advanced",
      category: "Physiology",
      progress: 0,
      color: "#C4A962",
      icon: <FaDumbbell />
    },
    {
      id: 5,
      title: "Preventive Medicine",
      description: "Disease prevention strategies and health screening recommendations",
      duration: "35 minutes",
      difficulty: "Intermediate",
      category: "Prevention",
      progress: 0,
      color: "#1B392F",
      icon: <FaShieldAlt />
    },
    {
      id: 6,
      title: "Sleep Science & Recovery",
      description: "Understanding sleep cycles, sleep disorders, and recovery optimization",
      duration: "30 minutes",
      difficulty: "Beginner",
      category: "Sleep Medicine",
      progress: 0,
      color: "#C4A962",
      icon: <FaMoon />
    }
  ];

  const clinicalResources = [
    { title: "Clinical Guidelines", icon: <FaClipboardList />, count: 24, color: "#1B392F" },
    { title: "Research Papers", icon: <FaMicroscope />, count: 156, color: "#C4A962" },
    { title: "Case Studies", icon: <FaBookOpen />, count: 89, color: "#1B392F" },
    { title: "Treatment Protocols", icon: <FaPills />, count: 42, color: "#C4A962" }
  ];

  const quickStats = [
    { label: "Steps Today", value: dailyProgress.steps, goal: wellnessGoals.steps, icon: <FaDumbbell />, color: "#1B392F" },
    { label: "Water Glasses", value: dailyProgress.water, goal: wellnessGoals.water, icon: <FaWater />, color: "#C4A962" },
    { label: "Sleep Hours", value: dailyProgress.sleep, goal: wellnessGoals.sleep, icon: <FaMoon />, color: "#1B392F" },
    { label: "Exercise (min)", value: dailyProgress.exercise, goal: wellnessGoals.exercise, icon: <FaHeartbeat />, color: "#C4A962" }
  ];

  const handleLogout = () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('userEmail');
    router.push('/');
  };

  return (
    <div className="professional-dashboard">
      {/* Professional Header */}
      <header className="dashboard-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <div className="header-icon me-3">
                  <FaStethoscope size={28} />
                </div>
                <div>
                  <h1 className="mb-0">Saint Daniels Healthcare</h1>
                  <p className="mb-0 text-light opacity-75">Professional Health & Education Portal</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-end">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <Button variant="outline-light" size="sm" className="notification-btn">
                  <FaBell />
                  <span className="notification-badge">3</span>
                </Button>
                <Button variant="outline-light" size="sm" onClick={() => setShowSettings(true)}>
                  <FaCog />
                </Button>
                <div className="user-profile">
                  <FaUserMd className="me-2" />
                  <span>Dr. User</span>
                </div>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                  <FaSignOutAlt />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <Container fluid className="py-4">
        {/* Navigation Tabs */}
        <Row className="mb-4">
          <Col>
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="professional-tabs"
            >
              <Tab eventKey="overview" title={
                <span><FaChartLine className="me-2" />Overview</span>
              }>
                <Row>
                  {/* Health Metrics Dashboard */}
                  <Col lg={8}>
                    <Card className="metrics-card mb-4">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">Health Metrics Dashboard</h3>
                        <Badge bg="success">Live Data</Badge>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          {healthMetrics.map((metric, index) => (
                            <Col md={6} lg={3} key={index} className="mb-3">
                              <div className="metric-item">
                                <div className="metric-icon" style={{ color: metric.color }}>
                                  {metric.icon}
                                </div>
                                <div className="metric-content">
                                  <h6 className="metric-label">{metric.label}</h6>
                                  <h4 className="metric-value">{metric.value}</h4>
                                  <Badge bg={metric.status === 'Normal' || metric.status === 'Optimal' || metric.status === 'Healthy' ? 'success' : 'warning'}>
                                    {metric.status}
                                  </Badge>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>

                    {/* Educational Modules */}
                    <Card className="education-card">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <h3 className="mb-0">Educational Modules</h3>
                        <Button variant="outline-primary" size="sm" onClick={() => setShowWellnessProgram(true)}>
                          View All
                        </Button>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          {educationalModules.slice(0, 4).map((module) => (
                            <Col md={6} key={module.id} className="mb-4">
                              <Card className="module-card">
                                <Card.Body>
                                  <div className="d-flex align-items-start mb-3">
                                    <div className="module-icon me-3" style={{ backgroundColor: module.color }}>
                                      {module.icon}
                                    </div>
                                    <div className="flex-grow-1">
                                      <h5 className="module-title">{module.title}</h5>
                                      <p className="module-description">{module.description}</p>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <Badge bg="secondary">{module.category}</Badge>
                                        <small className="text-muted">{module.duration}</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="progress mb-3" style={{ height: '6px' }}>
                                    <div
                                      className="progress-bar"
                                      style={{ width: `${module.progress}%`, backgroundColor: module.color }}
                                    />
                                  </div>
                                  <Button variant="primary" size="sm" className="w-100">
                                    {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
                                  </Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Sidebar */}
                  <Col lg={4}>
                    {/* Clinical Resources */}
                    <Card className="resources-card mb-4">
                      <Card.Header>
                        <h5 className="mb-0">Clinical Resources</h5>
                      </Card.Header>
                      <Card.Body>
                        {clinicalResources.map((resource, index) => (
                          <div key={index} className="resource-item">
                            <div className="resource-icon" style={{ color: resource.color }}>
                              {resource.icon}
                            </div>
                            <div className="resource-content">
                              <h6 className="resource-title">{resource.title}</h6>
                              <span className="resource-count">{resource.count} available</span>
                            </div>
                          </div>
                        ))}
                      </Card.Body>
                    </Card>

                    {/* Daily Progress */}
                    <Card className="progress-card mb-4">
                      <Card.Header>
                        <h5 className="mb-0">Daily Wellness Goals</h5>
                      </Card.Header>
                      <Card.Body>
                        {quickStats.map((stat, index) => (
                          <div key={index} className="progress-item mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <span className="fw-medium">{stat.label}</span>
                              <span className="text-muted">{stat.value}/{stat.goal}</span>
                            </div>
                            <div className="progress" style={{ height: '8px' }}>
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${Math.min((stat.value / stat.goal) * 100, 100)}%`,
                                  backgroundColor: stat.color
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </Card.Body>
                    </Card>

                    {/* Mailbox */}
                    <Card className="mb-4">
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Mailbox</h5>
                        <Badge bg="danger">{mailboxMessages.filter(m => m.unread).length}</Badge>
                      </Card.Header>
                      <Card.Body>
                        <div className="mailbox-preview">
                          {mailboxMessages.slice(0, 3).map((message) => (
                            <div key={message.id} className={`mailbox-item ${message.unread ? 'unread' : ''}`}>
                              <div className="d-flex align-items-center">
                                <div className={`priority-indicator ${message.priority}`}></div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1">{message.from}</h6>
                                  <p className="mb-0 text-muted">{message.subject}</p>
                                </div>
                                <small className="text-muted">{message.time}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline-primary" 
                          className="w-100 mt-3"
                          onClick={() => setShowMailbox(true)}
                        >
                          <FaEnvelope className="me-2" />
                          View All Messages
                        </Button>
                      </Card.Body>
                    </Card>

                    {/* Hidden Analytics Access */}
                    <Card className="analytics-card">
                      <Card.Header>
                        <h5 className="mb-0">Advanced Analytics</h5>
                      </Card.Header>
                      <Card.Body>
                        {!showHiddenAnalytics ? (
                          <div className="analytics-lock">
                            <div className="text-center mb-3">
                              <FaChartLine size={48} className="text-muted mb-3" />
                              <p className="text-muted">Enter password to access advanced analytics</p>
                            </div>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="password"
                                placeholder="Enter analytics password"
                                value={analyticsPassword}
                                onChange={(e) => setAnalyticsPassword(e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter' && analyticsPassword === 'analytics2024') {
                                    setShowHiddenAnalytics(true);
                                  }
                                }}
                              />
                            </Form.Group>
                            <Button 
                              variant="outline-primary" 
                              className="w-100"
                              onClick={() => {
                                if (analyticsPassword === 'analytics2024') {
                                  setShowHiddenAnalytics(true);
                                } else {
                                  alert('Incorrect password');
                                }
                              }}
                            >
                              <FaLock className="me-2" />
                              Access Analytics
                            </Button>
                          </div>
                        ) : (
                          <div className="hidden-analytics">
                            <div className="analytics-header mb-3">
                              <h6 className="text-success">🔓 Advanced Analytics Unlocked</h6>
                            </div>
                            <div className="analytics-content">
                              <div className="analytics-metric">
                                <span className="metric-label">Health Score</span>
                                <span className="metric-value">94/100</span>
                              </div>
                              <div className="analytics-metric">
                                <span className="metric-label">Learning Progress</span>
                                <span className="metric-value">78%</span>
                              </div>
                              <div className="analytics-metric">
                                <span className="metric-label">Engagement Rate</span>
                                <span className="metric-value">92%</span>
                              </div>
                              <div className="analytics-metric">
                                <span className="metric-label">Risk Assessment</span>
                                <span className="metric-value text-success">Low</span>
                              </div>
                            </div>
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              className="w-100 mt-3"
                              onClick={() => setShowHiddenAnalytics(false)}
                            >
                              Lock Analytics
                            </Button>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="calendar" title={
                <span><FaCalendarAlt className="me-2" />Wellness Calendar</span>
              }>
                <div className="calendar-page">
                  <Row>
                    <Col lg={8}>
                      <Card className="calendar-card mb-4">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <h3 className="mb-0">Wellness Calendar</h3>
                          <div className="d-flex gap-2">
                            <Button variant="outline-primary" size="sm" onClick={() => navigateMonth(-1)}>
                              <FaArrowLeft />
                            </Button>
                            <Button variant="outline-primary" size="sm" onClick={() => navigateMonth(1)}>
                              <FaArrowRight />
                            </Button>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <div className="calendar-header">
                            <h4 className="text-center mb-4">{formatDate(currentDate)}</h4>
                            
                            {/* Calendar Grid */}
                            <div className="calendar-grid">
                              {/* Day Headers */}
                              <div className="calendar-weekdays">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                  <div key={day} className="calendar-weekday">{day}</div>
                                ))}
                              </div>
                              
                              {/* Calendar Days */}
                              <div className="calendar-days">
                                {generateCalendarDays().map((date, index) => {
                                  const dayActivities = getActivitiesForDate(date);
                                  const isSelected = date.toDateString() === selectedDate.toDateString();
                                  
                                  return (
                                    <div
                                      key={index}
                                      className={`calendar-day ${isCurrentMonth(date) ? 'current-month' : 'other-month'} ${isToday(date) ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
                                      onClick={() => setSelectedDate(date)}
                                    >
                                      <div className="day-number">{date.getDate()}</div>
                                      {dayActivities.length > 0 && (
                                        <div className="day-activities">
                                          {dayActivities.slice(0, 3).map((activity, idx) => (
                                            <div
                                              key={idx}
                                              className="activity-dot"
                                              style={{ backgroundColor: getActivityColor(activity.type) }}
                                              title={activity.title}
                                            />
                                          ))}
                                          {dayActivities.length > 3 && (
                                            <div className="more-activities">+{dayActivities.length - 3}</div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>

                      {/* Selected Date Activities */}
                      <Card>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mb-0">
                              Activities for {selectedDate.toLocaleDateString()}
                            </h5>
                            <small className="text-muted">
                              {getActivitiesForDate(selectedDate).length} activities scheduled
                            </small>
                          </div>
                          <div className="d-flex gap-2">
                            <Button variant="outline-primary" size="sm">
                              <FaDownload className="me-1" />
                              Export
                            </Button>
                            <Button variant="primary" size="sm" onClick={() => setShowAddActivity(true)}>
                              <FaPlus className="me-1" />
                              Add Activity
                            </Button>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          {getActivitiesForDate(selectedDate).length > 0 ? (
                            <div className="activities-list">
                              {getActivitiesForDate(selectedDate).map((activity, index) => (
                                <div key={index} className="activity-item">
                                  <div className="activity-icon" style={{ color: getActivityColor(activity.type) }}>
                                    {getActivityIcon(activity.type)}
                                  </div>
                                  <div className="activity-details">
                                    <h6 className="mb-1">{activity.title}</h6>
                                    <small className="text-muted">
                                      {activity.type} • {activity.duration} minutes
                                    </small>
                                    {activity.notes && (
                                      <p className="mb-0 mt-1 small">{activity.notes}</p>
                                    )}
                                  </div>
                                  <div className="activity-actions">
                                    <Button variant="outline-primary" size="sm">
                                      <FaEdit />
                                    </Button>
                                    <Button variant="outline-danger" size="sm" className="ms-1">
                                      <FaTrash />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-4 text-muted">
                              <FaCalendarAlt size={48} className="mb-3" />
                              <p>No activities scheduled for this date</p>
                              <Button variant="primary" onClick={() => setShowAddActivity(true)}>
                                <FaPlus className="me-1" />
                                Add Your First Activity
                              </Button>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col lg={4}>
                      {/* Today's Summary */}
                      <Card className="mb-4">
                        <Card.Header>
                          <h5 className="mb-0">Today's Health Summary</h5>
                        </Card.Header>
                        <Card.Body>
                          <Alert variant="success" className="mb-3">
                            <FaCheck className="me-2" />
                            All vital signs within normal range
                          </Alert>
                          <div className="summary-stats">
                            <div className="stat-item">
                              <span className="stat-label">Activities Completed</span>
                              <span className="stat-value">3/5</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Learning Progress</span>
                              <span className="stat-value">25%</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Wellness Score</span>
                              <span className="stat-value">85/100</span>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>

                      {/* Upcoming Events */}
                      <Card>
                        <Card.Header>
                          <h5 className="mb-0">Upcoming Events</h5>
                        </Card.Header>
                        <Card.Body>
                          <div className="event-item">
                            <div className="event-time">2:00 PM</div>
                            <div className="event-title">Cardiology Module Review</div>
                          </div>
                          <div className="event-item">
                            <div className="event-time">4:30 PM</div>
                            <div className="event-title">Wellness Check-in</div>
                          </div>
                          <div className="event-item">
                            <div className="event-time">Tomorrow</div>
                            <div className="event-title">Nutrition Assessment</div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>

              <Tab eventKey="academy" title={
                <span><FaGraduationCap className="me-2" />Academy</span>
              }>
                <Row>
                  {educationalModules.map((module) => (
                    <Col lg={4} md={6} key={module.id} className="mb-4">
                      <Card className="education-module-card">
                        <Card.Body>
                          <div className="d-flex align-items-center mb-3">
                            <div className="module-icon-large me-3" style={{ backgroundColor: module.color }}>
                              {module.icon}
                            </div>
                            <div>
                              <h5 className="module-title">{module.title}</h5>
                              <Badge bg="secondary">{module.category}</Badge>
                            </div>
                          </div>
                          <p className="module-description">{module.description}</p>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <small className="text-muted">{module.duration}</small>
                            <Badge bg={module.difficulty === 'Beginner' ? 'success' : module.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
                              {module.difficulty}
                            </Badge>
                          </div>
                          <div className="progress mb-3" style={{ height: '8px' }}>
                            <div
                              className="progress-bar"
                              style={{ width: `${module.progress}%`, backgroundColor: module.color }}
                            />
                          </div>
                          <Button variant="primary" className="w-100">
                            {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      {/* Add Activity Modal */}
      <Modal show={showAddActivity} onHide={() => setShowAddActivity(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Wellness Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Activity Type</Form.Label>
              <Form.Select
                value={newActivity.type}
                onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })}
              >
                <option value="">Select type</option>
                <option value="exercise">Exercise</option>
                <option value="nutrition">Nutrition</option>
                <option value="hydration">Hydration</option>
                <option value="sleep">Sleep</option>
                <option value="meditation">Meditation</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Activity Title</Form.Label>
              <Form.Control
                type="text"
                value={newActivity.title}
                onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                placeholder="e.g., Morning Run, Healthy Lunch"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                value={newActivity.duration}
                onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
                placeholder="30"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notes (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newActivity.notes}
                onChange={(e) => setNewActivity({ ...newActivity, notes: e.target.value })}
                placeholder="Add any additional notes..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddActivity(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddActivity}>
            Add Activity
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Educational Modules Modal */}
      <Modal show={showWellnessProgram} onHide={() => setShowWellnessProgram(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Educational Modules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {educationalModules.map((module) => (
              <Col lg={6} key={module.id} className="mb-4">
                <Card className="module-card">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="module-icon-large me-3"
                        style={{ backgroundColor: module.color }}
                      >
                        {module.icon}
                      </div>
                      <div>
                        <h5 className="module-title">{module.title}</h5>
                        <Badge bg="secondary">{module.category}</Badge>
                      </div>
                    </div>
                    <p className="module-description">{module.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <small className="text-muted">{module.duration}</small>
                      <Badge bg={module.difficulty === 'Beginner' ? 'success' : module.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
                        {module.difficulty}
                      </Badge>
                    </div>
                    <div className="progress mb-3" style={{ height: '8px' }}>
                      <div
                        className="progress-bar"
                        style={{ width: `${module.progress}%`, backgroundColor: module.color }}
                      />
                    </div>
                    <Button variant="primary" className="w-100">
                      {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      {/* Settings Modal */}
      <Modal show={showSettings} onHide={() => setShowSettings(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Daily Step Goal</Form.Label>
              <Form.Control
                type="number"
                value={wellnessGoals.steps}
                onChange={(e) => setWellnessGoals({ ...wellnessGoals, steps: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Daily Water Goal (glasses)</Form.Label>
              <Form.Control
                type="number"
                value={wellnessGoals.water}
                onChange={(e) => setWellnessGoals({ ...wellnessGoals, water: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sleep Goal (hours)</Form.Label>
              <Form.Control
                type="number"
                value={wellnessGoals.sleep}
                onChange={(e) => setWellnessGoals({ ...wellnessGoals, sleep: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Exercise Goal (minutes)</Form.Label>
              <Form.Control
                type="number"
                value={wellnessGoals.exercise}
                onChange={(e) => setWellnessGoals({ ...wellnessGoals, exercise: parseInt(e.target.value) })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSettings(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowSettings(false)}>
            Save Settings
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Mailbox Modal */}
      <Modal show={showMailbox} onHide={() => setShowMailbox(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mailbox</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mailbox-container">
            {mailboxMessages.map((message) => (
              <div key={message.id} className={`mailbox-message ${message.unread ? 'unread' : ''}`}>
                <div className="d-flex align-items-start">
                  <div className={`priority-indicator ${message.priority}`}></div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-1">{message.from}</h6>
                      <div className="d-flex align-items-center gap-2">
                        <small className="text-muted">{message.time}</small>
                        {message.unread && <Badge bg="primary" size="sm">New</Badge>}
                        <Badge bg={message.priority === 'high' ? 'danger' : message.priority === 'medium' ? 'warning' : 'secondary'} size="sm">
                          {message.priority}
                        </Badge>
                      </div>
                    </div>
                    <h5 className="message-subject">{message.subject}</h5>
                    <p className="text-muted mb-0">Click to read full message...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMailbox(false)}>
            Close
          </Button>
          <Button variant="primary">
            <FaEnvelope className="me-2" />
            Compose New Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}