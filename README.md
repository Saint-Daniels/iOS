# Saint Daniels Healthcare Rewards

**Project Name:** saint-daniels-healthcare-rewards  
**Purpose:** Frontend web application for healthcare rewards, private subsidies, ad network earnings, pharmacy spending, and compound interest management for the Saint Daniels ecosystem.

## Overview

The Saint Daniels Healthcare Rewards project is a Next.js 15 frontend application that provides a comprehensive platform for managing healthcare rewards and private subsidies.

It handles:

- **Healthcare Rewards Management**: Track private subsidies earned through ad network engagement
- **Pharmacy Network**: Find and connect with participating pharmacies to spend rewards
- **Compound Interest**: Monitor and grow unused rewards through daily compound interest
- **Ad Network Integration**: View and engage with health brand campaigns to earn rewards
- **User Dashboard**: Comprehensive dashboard for balance tracking, transaction history, and mailbox
- **Application Portal**: Health insurance enrollment and application management

This project works alongside the Saint Daniels backend services to provide a seamless user experience for healthcare reward management.

## Features

- **Next.js 15** with React 18
- **Responsive Design**: Mobile-optimized dashboard and pages
- **Healthcare Rewards Dashboard**: Real-time balance tracking with Robinhood-style charts
- **Pharmacy Network**: Interactive Google Maps integration for finding nearby pharmacies
- **Mailbox System**: Gmail-style interface for ad campaigns and rewards
- **Transaction History**: Comprehensive transaction tracking with pagination
- **Application Portal**: Multi-step health insurance enrollment form
- **Video Game Network**: Newsletter page for Fortnite and Call of Duty content
- **Document Management**: Professional document library and help center

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: JavaScript/TypeScript
- **UI Libraries**: React Bootstrap, Tailwind CSS, Framer Motion
- **Icons**: React Icons
- **Maps**: Google Maps API
- **Authentication**: NextAuth.js
- **Styling**: CSS Modules, Global CSS, Inline Styles
- **Deployment**: Vercel (or Docker/Kubernetes)

## Project Structure

```
saint-daniels-healthcare-rewards/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # User dashboard with tabs
│   ├── application/        # Health insurance application
│   ├── documents/          # Document library
│   ├── newsletter/         # Video game network content
│   ├── help/               # Help center
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── layout.js           # Root layout with metadata
├── components/             # React components
│   ├── Hero.js             # Homepage hero section
│   ├── Footer.js           # Site footer
│   ├── Navbar.js           # Navigation bar
│   └── ScrollAnimation.js  # Framer Motion animations
├── public/                 # Static assets
│   └── images/             # Image files
├── styles/                 # Global styles
│   └── globals.css         # Global CSS
├── package.json            # Dependencies and scripts
└── next.config.js          # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js >= 22.x
- NPM or Yarn
- Git

### Installation

1. **Clone the repository:**

```bash
git clone https://gitlab.com/saint-daniels/saint-daniels-healthcare-rewards.git
cd saint-daniels-healthcare-rewards
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables in `.env.local`:**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Build for Production

```bash
npm run build
npm start
```

## Key Pages

- **Homepage** (`/`): Healthcare rewards overview, eligibility, privacy, and enrollment
- **Dashboard** (`/dashboard`): User dashboard with Balance, Mailbox, Pharmacy Network, and Transaction History tabs
- **Application** (`/application`): Health insurance enrollment form
- **Documents** (`/documents`): Program documentation and forms
- **Newsletter** (`/newsletter`): Saint Daniels Video Game Network content
- **Help Center** (`/help`): Support and required documents
- **About** (`/about`): Company information
- **Contact** (`/contact`): Contact information and offices

## GitLab CI/CD Integration

Example `.gitlab-ci.yml` for Next.js deployment:

```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  image: node:22
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour

test:
  stage: test
  image: node:22
  script:
    - npm ci
    - npm run lint

deploy:
  stage: deploy
  image: node:22
  script:
    - npm ci
    - npm run build
    - npm start
  environment:
    name: production
  only:
    - main
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a merge request

## License

Copyright © 2025 Saint Daniels Healthcare. All rights reserved.

