'use client';

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <Navbar 
      expand="lg" 
      className="navbar"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <div className="d-flex align-items-center w-100 justify-content-between">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/images/saintdanielslogo.jpeg"
              alt="Saint Daniels Logo"
              width={50}
              height={50}
              className="me-2"
            />
            <span className="brand-text">Saint Daniels</span>
          </Link>
          {isHomePage && (
            <Link href="/login" className="nav-button">
              Login
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNavbar; 