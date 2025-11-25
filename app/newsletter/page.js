'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaGamepad, FaVideo, FaComment, FaTrophy, FaUsers, FaYoutube, FaTwitch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const gameCategories = [
    { id: 'all', name: 'All Content', icon: <FaGamepad /> },
    { id: 'fortnite', name: 'Fortnite', icon: <FaGamepad /> },
    { id: 'cod', name: 'Call of Duty', icon: <FaGamepad /> },
    { id: 'commentary', name: 'Commentary', icon: <FaComment /> },
    { id: 'highlights', name: 'Highlights', icon: <FaVideo /> },
    { id: 'tournaments', name: 'Tournaments', icon: <FaTrophy /> }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Epic Fortnite Victory Royale - 20 Kill Solo Win!",
      excerpt: "Watch as we dominate the Fortnite battlefield with insane building skills and clutch plays. This victory royale showcases the best of Saint Daniels gaming network.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "December 15, 2024",
      watchTime: "12 min watch",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Call of Duty: Warzone - Insane 1v4 Clutch Commentary",
      excerpt: "Breaking down the most intense 1v4 clutch in Warzone history. Our commentary team analyzes every move, strategy, and decision that led to this incredible play.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "December 12, 2024",
      watchTime: "8 min watch",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Fortnite vs Call of Duty: Meta Analysis & Strategy Breakdown",
      excerpt: "Our gaming experts dive deep into the current meta for both Fortnite and Call of Duty, discussing weapon loadouts, map strategies, and competitive play insights.",
      category: "commentary",
      author: "Saint Daniels Gaming",
      date: "December 10, 2024",
      watchTime: "15 min watch",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    }
  ];

  const regularContent = [
    {
      id: 4,
      title: "Fortnite Chapter 5: New Map Locations & Loot Routes",
      excerpt: "Exploring the latest Fortnite map changes and the best landing spots for maximum loot and survival chances.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "December 8, 2024",
      watchTime: "10 min watch",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Call of Duty: Best Loadouts for Ranked Play",
      excerpt: "Top-tier weapon builds and class setups for dominating in Call of Duty ranked matches. Tested and proven by our pro players.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "December 5, 2024",
      watchTime: "7 min watch",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Fortnite Tournament Highlights - Saint Daniels Championship",
      excerpt: "Relive the best moments from our recent Fortnite tournament featuring top players from the Saint Daniels gaming network.",
      category: "tournaments",
      author: "Saint Daniels Gaming",
      date: "December 3, 2024",
      watchTime: "20 min watch",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 7,
      title: "Call of Duty: Warzone 2.0 - New Meta Breakdown",
      excerpt: "Analyzing the latest Warzone 2.0 updates, weapon changes, and how they impact competitive play strategies.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "November 30, 2024",
      watchTime: "9 min watch",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 8,
      title: "Fortnite Building Techniques: Advanced Edit Course",
      excerpt: "Master the most advanced building and editing techniques in Fortnite with our comprehensive tutorial series.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "November 28, 2024",
      watchTime: "14 min watch",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 9,
      title: "Top 10 Plays of the Week - Fortnite & Call of Duty",
      excerpt: "The most insane plays, clutches, and highlights from the Saint Daniels gaming network this week.",
      category: "highlights",
      author: "Saint Daniels Gaming",
      date: "November 25, 2024",
      watchTime: "18 min watch",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    }
  ];

  const allContent = [...featuredContent, ...regularContent];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      fortnite: '#00d2ff',
      cod: '#ff6b00',
      commentary: '#9b59b6',
      highlights: '#e74c3c',
      tournaments: '#f39c12',
      all: '#2c5530'
    };
    return colors[category] || '#2c5530';
  };

  return (
    <div className="news-page">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <FaGamepad size={60} style={{ color: '#00d2ff' }} />
                </div>
                <h1 className="mission-title-professional" style={{ color: 'white', fontSize: '3rem' }}>
                  Saint Daniels Video Game Network
                </h1>
                <div className="mission-divider" style={{ margin: '1.5rem auto', background: '#00d2ff' }}></div>
                <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Your destination for the coolest Fortnite and Call of Duty videos, epic gameplay highlights, 
                  expert commentary, and tournament coverage. Join the Saint Daniels gaming community and never miss a play.
                </p>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="service-fullpage-section" style={{ background: '#f8f9fa', paddingTop: '3rem', paddingBottom: '2rem' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="align-items-center mb-4">
              <Col lg={6}>
                <div className="search-container">
                  <InputGroup>
                    <InputGroup.Text style={{ background: '#2c5530', color: 'white', border: 'none' }}>
                      <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search videos and content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="news-search-input"
                      style={{ borderLeft: 'none' }}
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
                    style={{ borderColor: '#2c5530' }}
                  >
                    {gameCategories.map(category => (
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
                <div className="category-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                  {gameCategories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'primary' : 'outline-primary'}
                      onClick={() => setSelectedCategory(category.id)}
                      className="category-pill"
                      style={{ 
                        backgroundColor: selectedCategory === category.id ? getCategoryColor(category.id) : 'transparent',
                        borderColor: getCategoryColor(category.id),
                        color: selectedCategory === category.id ? 'white' : getCategoryColor(category.id),
                        borderRadius: '25px',
                        padding: '0.5rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: '2px solid'
                      }}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      {/* Featured Content Section */}
      <section className="service-fullpage-section">
        <Container>
          <ScrollFadeIn>
            <Row className="mb-5">
              <Col className="text-center">
                <h2 className="service-title-large">Featured Videos</h2>
                <div className="service-divider"></div>
                <p className="section-subtitle" style={{ marginTop: '1rem' }}>Top gaming content from the Saint Daniels network</p>
              </Col>
            </Row>
          </ScrollFadeIn>

          <Row className="g-4">
            {featuredContent.map((item, index) => (
              <Col lg={4} md={6} key={item.id}>
                <ScrollFadeIn delay={index * 0.2}>
                  <Card className="featured-news-card" style={{
                    border: 'none',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="news-image-container" style={{ position: 'relative' }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="news-image"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        display: 'flex',
                        gap: '0.5rem'
                      }}>
                        <Badge 
                          style={{ 
                            backgroundColor: getCategoryColor(item.category),
                            padding: '0.5rem 1rem',
                            fontSize: '0.85rem'
                          }}
                        >
                          {gameCategories.find(cat => cat.id === item.category)?.name}
                        </Badge>
                        <Badge 
                          style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            padding: '0.5rem 1rem',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <FaVideo /> {item.watchTime}
                        </Badge>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.5rem' }}>
                      <Card.Title className="news-card-title" style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        color: '#333',
                        minHeight: '3.5rem'
                      }}>{item.title}</Card.Title>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '1rem',
                        lineHeight: '1.6'
                      }}>{item.excerpt}</p>
                      <div className="news-meta" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        fontSize: '0.85rem',
                        color: '#888'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FaUser size={14} />
                          <span>{item.author}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FaCalendarAlt size={14} />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline-primary" 
                        className="read-more-btn w-100"
                        style={{ 
                          borderColor: getCategoryColor(item.category), 
                          color: getCategoryColor(item.category),
                          borderRadius: '8px',
                          padding: '0.75rem',
                          fontWeight: 600
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = getCategoryColor(item.category);
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = getCategoryColor(item.category);
                        }}
                      >
                        <FaVideo style={{ marginRight: '0.5rem' }} />
                        Watch Video <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                      </Button>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Latest Content Section */}
      <section className="service-fullpage-section" style={{ background: '#f8f9fa' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="mb-5">
              <Col className="text-center">
                <h2 className="service-title-large">Latest Content</h2>
                <div className="service-divider"></div>
                <p className="section-subtitle" style={{ marginTop: '1rem' }}>Fresh gaming videos and commentary every week</p>
              </Col>
            </Row>
          </ScrollFadeIn>

          <Row className="g-4">
            {filteredContent.filter(item => !item.featured).map((item, index) => (
              <Col lg={4} md={6} key={item.id}>
                <ScrollFadeIn delay={index * 0.15}>
                  <Card className="regular-news-card" style={{
                    border: 'none',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="news-image-container" style={{ position: 'relative' }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={200}
                        className="news-image"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px'
                      }}>
                        <Badge 
                          style={{ 
                            backgroundColor: getCategoryColor(item.category),
                            padding: '0.4rem 0.8rem',
                            fontSize: '0.8rem'
                          }}
                        >
                          {gameCategories.find(cat => cat.id === item.category)?.name}
                        </Badge>
                      </div>
                    </div>
                    <Card.Body style={{ padding: '1.25rem' }}>
                      <Card.Title className="news-card-title" style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        color: '#333',
                        minHeight: '3rem'
                      }}>{item.title}</Card.Title>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        marginBottom: '1rem',
                        lineHeight: '1.5'
                      }}>{item.excerpt}</p>
                      <div className="news-meta" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        fontSize: '0.8rem',
                        color: '#888'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FaVideo size={12} />
                          <span>{item.watchTime}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FaCalendarAlt size={12} />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline-primary" 
                        className="read-more-btn w-100"
                        style={{ 
                          borderColor: getCategoryColor(item.category), 
                          color: getCategoryColor(item.category),
                          borderRadius: '8px',
                          padding: '0.6rem',
                          fontSize: '0.9rem',
                          fontWeight: 500
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = getCategoryColor(item.category);
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = getCategoryColor(item.category);
                        }}
                      >
                        <FaVideo style={{ marginRight: '0.5rem' }} />
                        Watch <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                      </Button>
                    </Card.Body>
                  </Card>
                </ScrollFadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="service-fullpage-section" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', color: 'white' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '3rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <FaGamepad size={50} style={{ color: '#00d2ff', marginBottom: '1rem' }} />
                  </div>
                  <h3 className="service-title-large" style={{ color: 'white', marginBottom: '1rem' }}>Join the Gaming Network</h3>
                  <p className="mission-description-professional" style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                  }}>
                    Subscribe to get notified about new Fortnite and Call of Duty videos, tournament highlights, 
                    and exclusive gaming content from the Saint Daniels network.
                  </p>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    padding: '2rem',
                    marginBottom: '2rem'
                  }}>
                    <p style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}>
                      Want to submit your gaming content?
                    </p>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      Send your Fortnite and Call of Duty videos, highlights, and commentary to:
                    </p>
                    <a 
                      href="mailto:submissions@saintdaniels.com"
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#00d2ff',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00b8e6';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00d2ff';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      submissions@saintdaniels.com
                    </a>
                  </div>
                  <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <a href="https://youtube.com/@saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem'
                    }}>
                      <FaYoutube size={20} /> YouTube
                    </a>
                    <a href="https://tiktok.com/@_saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem'
                    }}>
                      <FaVideo size={20} /> TikTok
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
} 