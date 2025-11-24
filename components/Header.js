'use client';

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isLearnMorePage = pathname === '/learnmore';

  return (
    <div className="top-header">
      <Container>
        <div className="header-content">
          <Link href="/" className="logo-container">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              width={50} 
              height={50} 
              className="header-logo"
            />
            <span className="brand-text">SAINT DANIELS</span>
          </Link>
          {!isLearnMorePage && (
            <Link href="/login">
              <button className="login-button">Login</button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
} 