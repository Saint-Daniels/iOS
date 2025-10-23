'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaNewspaper, FaGraduationCap, FaHeart, FaLightbulb, FaUsers, FaTrophy, FaBook, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: <FaNewspaper /> },
    { id: 'career', name: 'Career Development', icon: <FaGraduationCap /> },
    { id: 'wellness', name: 'Workplace Wellness', icon: <FaHeart /> },
    { id: 'education', name: 'Public Health Education', icon: <FaLightbulb /> },
    { id: 'community', name: 'Community', icon: <FaUsers /> },
    { id: 'success', name: 'Success Stories', icon: <FaTrophy /> }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Saint Daniels Healthcare Launches New Career Development Program",
      excerpt: "We're excited to announce our comprehensive career development program designed to help professionals achieve their career goals through personalized coaching and evidence-based strategies.",
      category: "career",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Workplace Wellness Initiative Shows 40% Improvement in Employee Satisfaction",
      excerpt: "Our latest workplace wellness program has demonstrated significant improvements in team dynamics, stress reduction, and overall job satisfaction among participating organizations.",
      category: "wellness",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Public Health Education: Building Healthier Workplaces",
      excerpt: "Learn about our evidence-based public health education programs that are transforming workplace wellness and professional development across various industries.",
      category: "education",
      author: "Dr. Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    }
  ];

  const regularNews = [
    {
      id: 4,
      title: "Community Networking Event: Building Professional Connections",
      excerpt: "Join us for our monthly networking event where professionals from various industries come together to share experiences and build meaningful connections.",
      category: "community",
      author: "Jennifer Martinez",
      date: "December 8, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Success Story: How Career Coaching Transformed Sarah's Professional Journey",
      excerpt: "Read about Sarah's inspiring journey from career uncertainty to landing her dream role through our personalized coaching program.",
      category: "success",
      author: "David Thompson",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "New Research: The Impact of Workplace Wellness on Career Development",
      excerpt: "Our latest research study reveals the significant correlation between workplace wellness programs and career advancement opportunities.",
      category: "wellness",
      author: "Dr. Lisa Wang",
      date: "December 3, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Intensive Career Development Program: Now Accepting Applications",
      excerpt: "Applications are now open for our intensive career development program. This structured program offers comprehensive coaching for professionals seeking career transformation.",
      category: "career",
      author: "Robert Kim",
      date: "November 30, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Community Spotlight: Meet Our Career Development Mentors",
      excerpt: "Get to know the experienced professionals who serve as mentors in our community-based career support program.",
      category: "community",
      author: "Amanda Foster",
      date: "November 28, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "Public Health Education: New Course on Workplace Safety",
      excerpt: "We're launching a new course focused on workplace safety and health promotion, designed for professionals in various industries.",
      category: "education",
      author: "Dr. Mark Stevens",
      date: "November 25, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const allNews = [...featuredNews, ...regularNews];

  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      career: '#2c5530',
      wellness: '#e74c3c',
      education: '#3498db',
      community: '#9b59b6',
      success: '#f39c12',
      all: '#2c5530'
    };
    return colors[category] || '#2c5530';
  };

  return (
    <div className="news-page">
      <MainNavbar />
      
      {/* Featured Hero Article */}
      <section className="news-hero-article">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="hero-article-content">
                <div className="hero-article-meta">
                  <Badge className="hero-category-badge" style={{ backgroundColor: '#2c5530' }}>
                    BREAKING NEWS
                  </Badge>
                  <span className="hero-article-date">December 15, 2024</span>
                </div>
                <h1 className="hero-article-title">
                  Saint Daniels Healthcare Launches Comprehensive Career Development Initiative
                </h1>
                <p className="hero-article-subtitle">
                  New program combines career coaching, workplace wellness, and public health education 
                  to transform professional development across industries.
                </p>
                <div className="hero-article-meta-details">
                  <div className="hero-author">
                    <FaUser className="meta-icon" />
                    <span>Dr. Sarah Johnson, Chief Development Officer</span>
                  </div>
                  <div className="hero-read-time">
                    <FaBook className="meta-icon" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="hero-article-excerpt">
                  Saint Daniels Healthcare today announced the launch of its most comprehensive career development 
                  program to date, integrating personalized coaching, workplace wellness initiatives, and evidence-based 
                  public health education. The initiative represents a $2.5 million investment in professional development 
                  and is expected to serve over 1,000 professionals in its first year.
                </p>
                <Button 
                  variant="outline-primary" 
                  className="hero-read-more-btn"
                  style={{ borderColor: '#2c5530', color: '#2c5530' }}
                >
                  Read Full Article <FaArrowRight />
                </Button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="hero-article-image">
                <Image 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Career development program launch"
                  width={500}
                  height={400}
                  className="hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="news-filter-section">
        <Container>
          <Row className="align-items-center mb-4">
            <Col lg={6}>
              <div className="search-container">
                <InputGroup>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search news articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="news-search-input"
                  />
                </InputGroup>
              </div>
            </Col>
            <Col lg={6}>
              <div className="category-filter">
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="news-category-select"
                >
                  {newsCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Col>
          </Row>

          {/* Category Pills */}
          <Row>
            <Col>
              <div className="category-pills">
                {newsCategories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline-primary'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="category-pill"
                    style={{ 
                      backgroundColor: selectedCategory === category.id ? getCategoryColor(category.id) : 'transparent',
                      borderColor: getCategoryColor(category.id),
                      color: selectedCategory === category.id ? 'white' : getCategoryColor(category.id)
                    }}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured News Section */}
      <section className="featured-news-section">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Featured Stories</h2>
              <p className="section-subtitle">Highlighting our most important news and updates</p>
            </Col>
          </Row>

          <Row className="g-4">
            {featuredNews.map((article) => (
              <Col lg={4} md={6} key={article.id}>
                <Card className="featured-news-card">
                  <div className="news-image-container">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="news-image"
                    />
                    <Badge 
                      className="news-category-badge"
                      style={{ backgroundColor: getCategoryColor(article.category) }}
                    >
                      {newsCategories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title className="news-card-title">{article.title}</Card.Title>
                    <div className="news-meta">
                      <div className="news-author">
                        <FaUser className="meta-icon" />
                        <span>{article.author}</span>
                      </div>
                      <div className="news-date">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline-primary" 
                      className="read-more-btn"
                      style={{ borderColor: getCategoryColor(article.category), color: getCategoryColor(article.category) }}
                    >
                      Read More <FaArrowRight />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Regular News Section */}
      <section className="regular-news-section">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">Latest News</h2>
              <p className="section-subtitle">Stay up to date with our latest articles and updates</p>
            </Col>
          </Row>

          <Row className="g-4">
            {filteredNews.filter(article => !article.featured).map(article => (
              <Col lg={4} md={6} key={article.id}>
                <Card className="regular-news-card">
                  <div className="news-image-container">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="news-image"
                    />
                    <Badge 
                      className="news-category-badge"
                      style={{ backgroundColor: getCategoryColor(article.category) }}
                    >
                      {newsCategories.find(cat => cat.id === article.category)?.name}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title className="news-card-title">{article.title}</Card.Title>
                    <div className="news-meta">
                      <div className="news-author">
                        <FaUser className="meta-icon" />
                        <span>{article.author}</span>
                      </div>
                      <div className="news-date">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline-primary" 
                      className="read-more-btn"
                      style={{ borderColor: getCategoryColor(article.category), color: getCategoryColor(article.category) }}
                    >
                      Read More <FaArrowRight />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter-subscription-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="newsletter-subscription-card">
                <h3 className="newsletter-title">Stay Updated</h3>
                <p className="newsletter-subtitle">
                  Subscribe to our newsletter for the latest news, insights, and updates from Saint Daniels Healthcare.
                </p>
                <Form className="newsletter-form">
                  <Row className="g-3">
                    <Col md={8}>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-email-input"
                      />
                    </Col>
                    <Col md={4}>
                      <Button 
                        type="submit" 
                        className="newsletter-subscribe-btn w-100"
                        style={{ backgroundColor: '#2c5530', borderColor: '#2c5530' }}
                      >
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
} 