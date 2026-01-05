import SwiftUI

struct SettingsView: View {
    @StateObject private var authManager = AuthenticationManager.shared
    @StateObject private var rewardsService = RewardsService.shared
    @State private var showLogoutAlert = false
    @State private var notificationsEnabled = true
    @State private var emailNotifications = true
    @State private var pushNotifications = true
    
    var body: some View {
        NavigationView {
            ZStack {
                Color(red: 0.95, green: 0.95, blue: 0.97)
                    .ignoresSafeArea()
                
                List {
                    // Account Section
                    Section("Account") {
                        HStack {
                            Image(systemName: "person.circle.fill")
                                .font(.system(size: 24))
                                .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384))
                            
                            VStack(alignment: .leading, spacing: 4) {
                                Text(authManager.currentUser?.email ?? "User")
                                    .font(.system(size: 16, weight: .medium))
                                Text("Member since 2025")
                                    .font(.system(size: 12))
                                    .foregroundColor(.gray)
                            }
                            
                            Spacer()
                        }
                        .padding(.vertical, 8)
                    }
                    
                    // Notifications Section
                    Section("Notifications") {
                        Toggle("Enable Notifications", isOn: $notificationsEnabled)
                        
                        if notificationsEnabled {
                            Toggle("Email Notifications", isOn: $emailNotifications)
                            Toggle("Push Notifications", isOn: $pushNotifications)
                        }
                    }
                    
                    // Wallet Settings
                    Section("Wallet") {
                        NavigationLink(destination: TransactionHistoryView()) {
                            Label("Transaction History", systemImage: "list.bullet.rectangle")
                        }
                        
                        NavigationLink(destination: CashoutHistoryView()) {
                            Label("Cashout History", systemImage: "dollarsign.circle")
                        }
                    }
                    
                    // App Settings
                    Section("App") {
                        NavigationLink(destination: AboutView()) {
                            Label("About", systemImage: "info.circle")
                        }
                        
                        NavigationLink(destination: HelpView()) {
                            Label("Help & Support", systemImage: "questionmark.circle")
                        }
                        
                        Link(destination: URL(string: "https://saintdaniels.com/privacy")!) {
                            Label("Privacy Policy", systemImage: "lock.shield")
                        }
                        
                        Link(destination: URL(string: "https://saintdaniels.com/terms")!) {
                            Label("Terms of Service", systemImage: "doc.text")
                        }
                    }
                    
                    // Stats Section
                    Section("Statistics") {
                        HStack {
                            Text("Total Ads Watched")
                            Spacer()
                            Text("\(rewardsService.totalAdsWatched)")
                                .foregroundColor(.gray)
                        }
                        
                        HStack {
                            Text("Total Earnings")
                            Spacer()
                            Text("$\(String(format: "%.2f", rewardsService.totalEarned))")
                                .foregroundColor(.green)
                                .fontWeight(.semibold)
                        }
                    }
                    
                    // Logout Section
                    Section {
                        Button(action: {
                            showLogoutAlert = true
                        }) {
                            HStack {
                                Spacer()
                                Text("Log Out")
                                    .foregroundColor(.red)
                                    .fontWeight(.semibold)
                                Spacer()
                            }
                        }
                    }
                }
                .listStyle(.insetGrouped)
            }
            .navigationTitle("Settings")
            .navigationBarTitleDisplayMode(.large)
            .alert("Log Out", isPresented: $showLogoutAlert) {
                Button("Cancel", role: .cancel) { }
                Button("Log Out", role: .destructive) {
                    authManager.logout()
                }
            } message: {
                Text("Are you sure you want to log out?")
            }
        }
    }
}

struct TransactionHistoryView: View {
    @StateObject private var rewardsService = RewardsService.shared
    
    var body: some View {
        List {
            ForEach(rewardsService.allTransactions) { transaction in
                TransactionRow(transaction: transaction)
            }
        }
        .navigationTitle("Transaction History")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct CashoutHistoryView: View {
    @StateObject private var rewardsService = RewardsService.shared
    
    var cashouts: [Transaction] {
        rewardsService.allTransactions.filter { $0.type == .cashout }
    }
    
    var body: some View {
        List {
            ForEach(cashouts) { transaction in
                TransactionRow(transaction: transaction)
            }
        }
        .navigationTitle("Cashout History")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct AboutView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Saint Daniels")
                    .font(.system(size: 32, weight: .bold))
                
                Text("Version 1.0.0")
                    .font(.system(size: 16))
                    .foregroundColor(.gray)
                
                Text("Saint Daniels Healthcare Rewards is a comprehensive platform for managing healthcare rewards and private subsidies. Watch ads, earn rewards, and cash out your earnings.")
                    .font(.system(size: 16))
                    .lineSpacing(4)
                
                Text("© 2025 Saint Daniels Healthcare. All rights reserved.")
                    .font(.system(size: 14))
                    .foregroundColor(.gray)
                    .padding(.top, 20)
            }
            .padding()
        }
        .navigationTitle("About")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct HelpView: View {
    var body: some View {
        List {
            Section("Getting Started") {
                Text("Watch ads in your mailbox to earn rewards. Each ad you watch will add money to your wallet balance.")
            }
            
            Section("Earning Rewards") {
                Text("You earn private subsidies by engaging with verified health brands in our ad network. When you watch sponsored health content, advertisers deposit real dollars into your private subsidy wallet instantly.")
            }
            
            Section("Cashing Out") {
                Text("You can cash out your balance at any time. Go to the Wallet tab and tap 'Cash Out' to withdraw your earnings.")
            }
            
            Section("Support") {
                Link("Contact Support", destination: URL(string: "mailto:support@saintdaniels.com")!)
                Text("Phone: 888-324-6642")
                Text("Hours: Monday-Friday, 9am-5pm CST")
            }
        }
        .navigationTitle("Help & Support")
        .navigationBarTitleDisplayMode(.inline)
    }
}

#Preview {
    SettingsView()
}

