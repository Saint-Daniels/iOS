'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
  FaDollarSign,
  FaClipboardList,
  FaBullseye,
  FaTrophy,
  FaGift,
  FaLightbulb,
  FaMobile,
  FaListUl,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaHeart,
  FaBookOpen,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import { ScrollFadeIn, ScrollSlideIn } from '../components/ScrollAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <div className="home-page">
        <Hero />

        {/* Healthcare Rewards Promise */}
        <section className="mission-section-professional">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="mission-header">
                    <h2 className="mission-title-professional">Bank With Your Health</h2>
                    <div className="mission-divider"></div>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="right" delay={0.2}>
                  <div className="mission-image-wrapper-professional">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2070&q=80"
                      alt="Modern banking and healthcare technology"
                      width={600}
                      height={450}
                      className="mission-image-professional"
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="left" delay={0.3}>
                  <div className="mission-content-professional">
                  <p className="mission-description-professional">
                    Saint Daniels Healthcare Rewards converts privacy-safe ad attention into a private subsidy. Every time you
                    engage with health brands inside our ad network, dollars flow into your reward wallet, ready to be spent at
                    any participating pharmacy. Skip a purchase and the unused balance compounds daily, so your care budget
                    grows automatically while you focus on feeling better.
                  </p>

                  <div className="mission-highlights-professional">
                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaDollarSign className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Private Subsidy</h4>
                        <p>Brand-funded dollars arrive in your secure wallet as soon as you complete a sponsored activity.</p>
                      </div>
                    </div>

                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaClipboardList className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Pharmacy Freedom</h4>
                        <p>Show the app at checkout and spend rewards on prescriptions, OTC items, or preventative care kits.</p>
                      </div>
                    </div>

                    <div className="highlight-card">
                      <div className="highlight-icon-wrapper">
                        <FaChartLine className="highlight-icon" />
                      </div>
                      <div className="highlight-content">
                        <h4>Compound Growth</h4>
                        <p>Unused dollars earn daily compound interest so the value of your subsidy keeps expanding.</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How Subsidies Work */}
        <section className="who-we-section-professional">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="section-header-professional">
                    <h2 className="section-title-professional">How Your Subsidy Flows</h2>
                    <div className="section-divider"></div>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center">
              <Col lg={6}>
                <ScrollSlideIn direction="left" delay={0.2}>
                  <div className="team-image-wrapper-professional">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2076&q=80"
                    alt="Financial data and healthcare analytics"
                    width={600}
                    height={450}
                    className="team-image-professional"
                  />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right" delay={0.3}>
                  <div className="team-content-professional">
                  <div className="team-description-professional">
                    <p>
                      Advertisers place offers in our closed healthcare ad network. Members opt in, view personalized content,
                      and immediately unlock a private subsidy that can be routed to any verified pharmacy. Our treasury keeps
                      unused balances compounding, so every week you wait to spend, your total subsidy earns more interest.
                    </p>
                  </div>

                  <div className="team-stats-professional">
                    <div className="stat-card">
                      <div className="stat-number">$240</div>
                      <div className="stat-label">Avg. annual subsidy</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">18%</div>
                      <div className="stat-label">Compound rate</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">1.2M</div>
                      <div className="stat-label">Pharmacy SKUs</div>
                    </div>
                  </div>

                  <div className="team-expertise-professional">
                    <h4>What powers the network</h4>
                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <FaBullseye className="expertise-icon" />
                        <span>Ad quality review</span>
                      </div>
                      <div className="expertise-item">
                        <FaHandshake className="expertise-icon" />
                        <span>Pharmacy settlement</span>
                      </div>
                      <div className="expertise-item">
                        <FaUsers className="expertise-icon" />
                        <span>Member care team</span>
                      </div>
                      <div className="expertise-item">
                        <FaChartLine className="expertise-icon" />
                        <span>Compound treasury</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Reward Lifecycle */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="service-header">
                    <h2 className="service-title-large">Your Reward Lifecycle</h2>
                    <div className="service-divider"></div>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <ScrollSlideIn direction="right" delay={0.2}>
                  <div className="service-image-wrapper">
                    <Image
                      src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80"
                      alt="Member tracking healthcare rewards timeline"
                      width={600}
                      height={400}
                      className="service-image"
                    />
                  </div>
                </ScrollSlideIn>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="left" delay={0.3}>
                  <div className="service-content">
                  <h3 className="service-subtitle">Earn, spend, and grow in one tap</h3>
                  <p className="service-description-large">
                    Watch a sponsored insight, receive your private subsidy, and choose whether to spend it instantly at the
                    pharmacy counter or let it ride inside the compound rewards vault. Transparent receipts show how every
                    penny was funded, where it was redeemed, and how much interest accrued while you waited.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaListUl className="feature-icon" />
                      <span>Ad tasks unlock cash</span>
                    </div>
                    <div className="feature-item">
                      <FaGift className="feature-icon" />
                      <span>Instant pharmacy payments</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Daily compounding ledger</span>
                    </div>
                  </div>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <ScrollFadeIn delay={0.1}>
                  <div className="workshop-card">
                    <h4>Earn</h4>
                    <p>Complete curated ad experiences that prioritize clinical clarity over clickbait.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.2}>
                  <div className="workshop-card">
                    <h4>Spend</h4>
                    <p>Use your virtual card in-app or share your member ID to pay inside any partner pharmacy.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
              <Col lg={4}>
                <ScrollFadeIn delay={0.3}>
                  <div className="workshop-card">
                    <h4>Grow</h4>
                    <p>Let unspent balances earn compound interest that can later cover higher-cost treatments.</p>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Ad Network Marketplace */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center mb-5">
                <Col lg={8} className="text-center">
                  <div className="service-header">
                    <h2 className="service-title-large">Ad Network Marketplace</h2>
                    <div className="service-divider"></div>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Brands fund your future care</h3>
                  <p className="service-description-large">
                    Healthcare advertisers compete for attention inside our marketplace. When you opt in to their stories,
                    they deposit real dollars into your private subsidy. We cap frequency, protect data, and route every
                    campaign through pharmacists so what you watch translates to eligible products on the shelf.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaBullseye className="feature-icon" />
                      <span>Verified health brands only</span>
                    </div>
                    <div className="feature-item">
                      <FaHandshake className="feature-icon" />
                      <span>Transparent funding agreements</span>
                    </div>
                    <div className="feature-item">
                      <FaLightbulb className="feature-icon" />
                      <span>Contextual education moments</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                    alt="Healthcare advertiser meeting"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Brand Wallets</h4>
                  <p>Every campaign reserves dollars in escrow so your rewards are guaranteed at redemption.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Relevance Controls</h4>
                  <p>Preference centers keep content aligned to the conditions and pharmacies you actually use.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="coaching-card">
                  <h4>Compliance Desk</h4>
                  <p>Pharmacists review every script before it reaches members, ensuring safe, useful guidance.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pharmacy Experience */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <h2 className="service-title-large">Pharmacy Spending Experience</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                    alt="Pharmacist scanning app"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Use rewards where care happens</h3>
                  <p className="service-description-large">
                    Show your virtual card in your app, let the pharmacist process it, and watch your private subsidy cover the
                    bill. Every receipt explains which advertiser funded the purchase and how much compound interest you kept
                    by not spending everything at once.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaMobile className="feature-icon" />
                      <span>Tap-to-pay in store</span>
                    </div>
                    <div className="feature-item">
                      <FaUsers className="feature-icon" />
                      <span>Pharmacist verified pricing</span>
                    </div>
                    <div className="feature-item">
                      <FaHeart className="feature-icon" />
                      <span>OTC + Rx eligible</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Same-Day Settlement</h4>
                  <p>Pharmacies receive funds instantly so there is never a delay in filling critical meds.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Benefit Stacking</h4>
                  <p>Combine your subsidy with FSA/HSA cards for maximum savings at checkout.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="wellness-card">
                  <h4>Interest Insights</h4>
                  <p>Real-time projections show how much future care you can fund if you defer a purchase.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Compound Growth Programs */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <h2 className="service-title-large">Compound Growth Programs</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Savings accounts built for care</h3>
                  <p className="service-description-large">
                    When you let rewards sit, they join a diversified healthcare treasury that produces daily compound interest.
                    Choose conservative, balanced, or accelerator tracks depending on how soon you plan to spend at the
                    pharmacy. The dashboard shows projected growth so you can schedule refills with confidence.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaTrophy className="feature-icon" />
                      <span>Goal-based vaults</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Transparent yield engine</span>
                    </div>
                    <div className="feature-item">
                      <FaLightbulb className="feature-icon" />
                      <span>Automated rebalancing</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1000&q=80"
                    alt="Member monitoring compound growth"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Everyday Essentials Track</h4>
                  <p>Short-term growth designed for weekly OTC needs and seasonal care kits.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Maintenance Medication Track</h4>
                  <p>Medium-term compounding tailored to 30/60/90-day prescription cycles.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="intensive-card">
                  <h4>Future Care Track</h4>
                  <p>High-yield strategy for elective procedures or emergency cushions.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Health Finance Education */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <h2 className="service-title-large">Health Finance Education</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1000&q=80"
                    alt="Educational session about health finance"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">Understand every dollar</h3>
                  <p className="service-description-large">
                    We pair financial literacy with clinical education so you always know how your subsidy is created, what it
                    can cover, and how compounding protects future wellness. Weekly live sessions explain marketplace updates,
                    interest policies, and new pharmacy partners.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaBookOpen className="feature-icon" />
                      <span>Regulatory explainers</span>
                    </div>
                    <div className="feature-item">
                      <FaLightbulb className="feature-icon" />
                      <span>Practical budgeting</span>
                    </div>
                    <div className="feature-item">
                      <FaChartLine className="feature-icon" />
                      <span>Impact calculators</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="education-card">
                  <h4>Reward Literacy</h4>
                  <p>Video series covering how private subsidies differ from coupons or copay cards.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="education-card">
                  <h4>Compound Playbooks</h4>
                  <p>Guided plans for timing purchases to maximize interest without skipping critical care.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="education-card">
                  <h4>Partner Spotlights</h4>
                  <p>Meet pharmacies and advertisers funding the network so you understand every stakeholder.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Community Support */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="service-header">
                  <h2 className="service-title-large">Community & Pharmacy Network</h2>
                  <div className="service-divider"></div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col lg={6}>
                <div className="service-content">
                  <h3 className="service-subtitle">A support system for every refill</h3>
                  <p className="service-description-large">
                    Join pharmacists, caregivers, and members who share tips on stretching rewards, choosing generic options,
                    and timing compound interest for bigger procedures. Every community room syncs with your wallet so
                    moderators can answer questions using real numbers from your subsidy history.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <FaUsers className="feature-icon" />
                      <span>Live reward coaches</span>
                    </div>
                    <div className="feature-item">
                      <FaHandshake className="feature-icon" />
                      <span>Pharmacy onboarding</span>
                    </div>
                    <div className="feature-item">
                      <FaHeart className="feature-icon" />
                      <span>Caregiver circles</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
                    alt="Community gathering discussing rewards"
                    width={600}
                    height={400}
                    className="service-image"
                  />
                </div>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="community-card">
                  <h4>Local Pharmacy Tours</h4>
                  <p>Meet partners in person and learn how redemptions settle behind the scenes.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="community-card">
                  <h4>Caregiver Labs</h4>
                  <p>Small groups practice budgeting rewards for families managing multiple prescriptions.</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="community-card">
                  <h4>Advocate Hotline</h4>
                  <p>Round-the-clock chat for resolving redemptions or optimizing compound growth strategies.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Premium CTA */}
        <section className="premium-network-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="premium-cta-content">
                  <h2 className="premium-cta-title">Activate Your Healthcare Rewards</h2>
                  <p className="premium-cta-description">
                    Unlock your private subsidy, spend it instantly at pharmacies, or let unused dollars earn compound
                    interest through our ad network treasury. One tap turns attention into a lifelong care budget.
                  </p>
                  <div className="premium-cta-buttons">
                    <button className="btn-premium-primary" onClick={() => (window.location.href = '/download')}>
                      Download App
                    </button>
                    <button className="btn-premium-secondary" onClick={() => (window.location.href = '/learnmore')}>
                      Learn How It Works
                    </button>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="network-cards-vertical">
                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaUsers size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Pharmacy-first Network</h4>
                        <p className="network-description">
                          Thousands of independent and national pharmacies settle subsidies through our ledger every day.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => (window.location.href = '/learnmore')}>
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaTrophy size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Compound Interest Engine</h4>
                        <p className="network-description">
                          Watch unused rewards grow automatically with transparent daily statements.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => (window.location.href = '/learnmore')}>
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="network-card-horizontal">
                    <div className="network-card-content">
                      <div className="network-icon">
                        <FaHandshake size={48} />
                      </div>
                      <div className="network-text">
                        <h4 className="network-title">Advertiser Transparency</h4>
                        <p className="network-description">
                          See exactly which advertiser funded each reward and how that subsidy can be used in-store.
                        </p>
                      </div>
                    </div>
                    <div className="network-cta">
                      <button className="btn-network-learn-more" onClick={() => (window.location.href = '/learnmore')}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer>
        <div className="footer-links">
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/application">Rewards Application</Link>
              </li>
              <li>
                <Link href="/partners">Advertiser Partners</Link>
              </li>
              <li>
                <Link href="/newsletter">Network News</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Connect</h5>
            <ul>
              <li>
                <Link href="/blog">Product Blog</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/partners">Pharmacy Network</Link>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </PageTransition>
  );
}
