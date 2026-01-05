# Saint Daniels iOS App

A comprehensive iOS application for managing healthcare rewards and private subsidies. Watch ads, earn rewards, and cash out your earnings.

## Features

- **Splash Screen**: Beautiful splash screen with Saint Daniels branding
- **Authentication**: Secure login system with email and password
- **Wallet**: View your balance, earnings, and transaction history with interactive charts
- **Mailbox**: Browse and watch ad campaigns to earn rewards
- **Settings**: Manage your account, notifications, and app preferences
- **Cashout**: Withdraw your earnings directly to your bank account

## Requirements

- iOS 17.0+
- Xcode 15.0+
- Swift 5.0+

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/saint-daniels/ios.git
cd ios
```

2. Open the project in Xcode:
```bash
open SaintDaniels.xcodeproj
```

3. Build and run the app on a simulator or device

## Project Structure

```
SaintDaniels/
├── AppDelegate.swift          # App lifecycle management
├── SceneDelegate.swift        # Scene configuration
├── ContentView.swift          # Root view with navigation
├── Views/                     # All view files
│   ├── SplashView.swift       # Splash screen
│   ├── LoginView.swift        # Login screen
│   ├── MainTabView.swift      # Tab bar navigation
│   ├── WalletView.swift       # Wallet and balance
│   ├── MailboxView.swift      # Ad campaigns mailbox
│   ├── SettingsView.swift     # App settings
│   └── AdDetailView.swift     # Ad viewing screen
├── Models/                    # Data models
│   ├── UserModel.swift        # User and authentication
│   ├── AdModel.swift          # Ad campaign model
│   └── TransactionModel.swift # Transaction model
└── Services/                  # Business logic
    └── RewardsService.swift   # Rewards management
```

## Key Features

### Wallet
- View your current balance
- Track total earnings and spending
- Interactive balance history charts
- Quick cashout functionality
- Transaction history

### Mailbox
- Browse available ad campaigns
- Watch ads to earn rewards
- Track watched and unread ads
- Filter by inbox/unread

### Settings
- Account management
- Notification preferences
- Transaction and cashout history
- Help and support
- App information

## Design

The app uses a modern, clean design with:
- Primary color: #C4A962 (Gold)
- Background color: #1B392F (Dark green)
- SwiftUI for all UI components
- Native iOS design patterns

## License

Copyright © 2025 Saint Daniels Healthcare. All rights reserved.
