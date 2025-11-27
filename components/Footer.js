'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const pathname = usePathname();
  const isMinimalFooter = pathname === '/login' || 
                         pathname === '/signup' || 
                         pathname === '/register' ||
                         pathname === '/newsletter' || 
                         pathname === '/partners' || 
                         pathname === '/help' ||
                         pathname === '/documents' ||
                         pathname === '/resources' ||
                         pathname === '/privacy' ||
                         pathname === '/terms' ||
                         pathname === '/about' ||
                         pathname === '/contact' ||
                         pathname === '/download' ||
                         pathname === '/learnmore';

  if (isMinimalFooter) {
    return (
      <footer className="footer-minimal">
        <div className="container">
          <div className="footer-bottom">
            <p>© 2025 Saint Daniels Healthcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">SAINT DANIELS</h3>
            <div className="social-icons">
              <a href="https://youtube.com/@saintdaniels" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://instagram.com/centuriesmutual" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com/@_saintdaniels" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576418669825#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">MEMBERS</h4>
            <ul className="footer-links">
              <li><Link href="/resources">Documents</Link></li>
              <li><Link href="/help">Help Center</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">RESOURCES</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Saint Daniels Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 