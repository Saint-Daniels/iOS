# Saint Daniels Healthcare Rewards - iOS App

Native iOS application for Saint Daniels Healthcare Rewards platform, built with SwiftUI.

## Overview

The Saint Daniels Healthcare Rewards iOS app provides a comprehensive platform for managing healthcare rewards and private subsidies on iOS devices. The app allows users to:

- **Track Rewards**: Monitor private subsidy balance in real-time with interactive charts
- **Engage with Campaigns**: View and interact with health brand campaigns to earn rewards
- **Find Pharmacies**: Discover nearby pharmacies in the network using location services
- **Manage Transactions**: View complete transaction history with detailed information
- **Submit Applications**: Complete health insurance enrollment applications with digital signature
- **Access Resources**: Browse program guides, documents, and support materials

## Features

- **Native iOS Experience**: Built with SwiftUI for a native, responsive interface
- **Authentication**: Secure login with email/password and Google Sign-In support
- **Dashboard**: Comprehensive dashboard with tabs for Balance, Mailbox, Pharmacy Network, and Transaction History
- **Real-time Balance Tracking**: Interactive charts showing balance history across multiple time periods
- **Ad Campaign Mailbox**: Gmail-style interface for viewing and engaging with health brand campaigns
- **Pharmacy Network**: Location-based pharmacy finder with search functionality
- **Multi-step Application Form**: Complete enrollment process with signature capture
- **Resources Library**: Access to program guides, documents, and support materials
- **Profile Management**: Account settings, notifications, and privacy controls

## Requirements

- iOS 17.0 or later
- Xcode 15.0 or later
- Swift 5.9 or later

## Project Structure

```
SaintDaniels/
├── SaintDaniels/
│   ├── SaintDanielsApp.swift          # App entry point
│   ├── ContentView.swift              # Main content view
│   ├── Models/
│   │   ├── AuthenticationManager.swift
│   │   └── DashboardModels.swift
│   ├── Views/
│   │   ├── LoginView.swift
│   │   ├── MainTabView.swift
│   │   ├── HomeView.swift
│   │   ├── DashboardView.swift
│   │   ├── ApplicationView.swift
│   │   ├── ResourcesView.swift
│   │   └── ProfileView.swift
│   ├── Services/
│   │   └── APIService.swift
│   ├── Assets.xcassets/               # App icons and images
│   └── Info.plist                     # App configuration
└── README.md
```

## Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saint-Daniels/iOS.git
   cd iOS
   ```

2. **Open the project in Xcode:**
   ```bash
   open SaintDaniels/SaintDaniels.xcodeproj
   ```

3. **Configure the project:**
   - Update the bundle identifier in project settings if needed
   - Add your API endpoints in `APIService.swift`
   - Configure authentication providers (Google Sign-In, etc.)

4. **Add Assets:**
   - Add the app icon to `Assets.xcassets/AppIcon`
   - Add the Saint Daniels logo image as "saintdanielslogo" in Assets

5. **Build and Run:**
   - Select a simulator or connected device
   - Press `Cmd + R` to build and run

### Configuration

#### API Configuration

Update the base URL in `APIService.swift`:

```swift
private let baseURL = "https://your-api-domain.com/api"
```

#### Authentication

The app currently uses a simplified authentication system. To integrate with your backend:

1. Update `AuthenticationManager.swift` to call your authentication API
2. Implement Google Sign-In SDK if using Google authentication
3. Configure OAuth providers as needed

#### Location Services

The app requests location permissions to find nearby pharmacies. Ensure `Info.plist` includes:

- `NSLocationWhenInUseUsageDescription`
- `NSLocationAlwaysAndWhenInUseUsageDescription`

## Architecture

### MVVM Pattern

The app follows the Model-View-ViewModel architecture:

- **Models**: Data structures and business logic (`DashboardModels.swift`, `AuthenticationManager.swift`)
- **Views**: SwiftUI views for UI presentation
- **Services**: API communication and external integrations (`APIService.swift`)

### State Management

- `@StateObject` for view models and managers
- `@EnvironmentObject` for shared state (authentication)
- `@State` for local view state

## Key Components

### Authentication

- `AuthenticationManager`: Handles user authentication and session management
- `LoginView`: Login screen with email/password and Google Sign-In

### Dashboard

- `DashboardView`: Main dashboard with tab navigation
- `BalanceTabView`: Balance display with charts and statistics
- `MailboxTabView`: Ad campaign mailbox interface
- `PharmacyNetworkTabView`: Pharmacy finder with location services
- `TransactionHistoryTabView`: Transaction list with filtering

### Application

- `ApplicationView`: Multi-step enrollment form
- `SignaturePadView`: Digital signature capture
- Form steps for personal info, family info, address, insurance, review, and signature

### Resources

- `ResourcesView`: Document library with categorized resources
- Links to program guides, policies, and support materials

## API Integration

The app includes a comprehensive API service layer (`APIService.swift`) for:

- Authentication endpoints
- Dashboard data (balance, ads, transactions)
- Pharmacy network data
- Application submission

### Example API Call

```swift
let balanceData = try await APIService.shared.fetchBalanceData()
```

## Dependencies

Currently, the app uses only native iOS frameworks:

- **SwiftUI**: UI framework
- **Foundation**: Core functionality
- **Charts**: For balance charts (iOS 16+)
- **Combine**: Reactive programming (if needed)

No external dependencies required for basic functionality.

## Future Enhancements

- [ ] Push notifications for campaign alerts
- [ ] Receipt scanning with camera
- [ ] Offline mode with local data caching
- [ ] Biometric authentication (Face ID / Touch ID)
- [ ] Apple Pay integration for virtual card
- [ ] Dark mode support
- [ ] Accessibility improvements
- [ ] Unit and UI tests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

Copyright © 2025 Saint Daniels Healthcare. All rights reserved.

## Support

For support, email support@saintdaniels.com or visit the Help Center in the app.

## Version History

- **1.0.0** (2025-01-XX): Initial release
  - Authentication system
  - Dashboard with tabs
  - Application form
  - Resources library
  - Profile management

