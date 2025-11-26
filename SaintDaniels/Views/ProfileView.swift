//
//  ProfileView.swift
//  SaintDaniels
//
//  User profile and settings
//

import SwiftUI

struct ProfileView: View {
    @EnvironmentObject var authManager: AuthenticationManager
    @State private var showLogoutAlert = false
    
    var body: some View {
        NavigationView {
            List {
                Section {
                    HStack {
                        Image(systemName: "person.circle.fill")
                            .font(.system(size: 60))
                            .foregroundColor(Color(red: 0.2, green: 0.33, blue: 0.19))
                        
                        VStack(alignment: .leading) {
                            Text(authManager.userEmail ?? "User")
                                .font(.headline)
                            Text("Member since 2024")
                                .font(.caption)
                                .foregroundColor(.secondary)
                        }
                    }
                    .padding(.vertical, 8)
                }
                
                Section("Account") {
                    NavigationLink(destination: AccountSettingsView()) {
                        Label("Account Settings", systemImage: "person.circle")
                    }
                    
                    NavigationLink(destination: NotificationSettingsView()) {
                        Label("Notifications", systemImage: "bell")
                    }
                    
                    NavigationLink(destination: PrivacySettingsView()) {
                        Label("Privacy", systemImage: "lock.shield")
                    }
                }
                
                Section("Support") {
                    NavigationLink(destination: HelpView()) {
                        Label("Help Center", systemImage: "questionmark.circle")
                    }
                    
                    NavigationLink(destination: ContactView()) {
                        Label("Contact Us", systemImage: "envelope")
                    }
                    
                    NavigationLink(destination: AboutView()) {
                        Label("About", systemImage: "info.circle")
                    }
                }
                
                Section {
                    Button(role: .destructive) {
                        showLogoutAlert = true
                    } label: {
                        Label("Logout", systemImage: "arrow.right.square")
                    }
                }
            }
            .navigationTitle("Profile")
            .alert("Logout", isPresented: $showLogoutAlert) {
                Button("Cancel", role: .cancel) {}
                Button("Logout", role: .destructive) {
                    authManager.logout()
                }
            } message: {
                Text("Are you sure you want to logout?")
            }
        }
    }
}

struct AccountSettingsView: View {
    var body: some View {
        Form {
            Section("Personal Information") {
                TextField("Email", text: .constant("user@example.com"))
                    .disabled(true)
                TextField("Phone", text: .constant("(555) 123-4567"))
            }
            
            Section("Password") {
                SecureField("Current Password", text: .constant(""))
                SecureField("New Password", text: .constant(""))
                SecureField("Confirm Password", text: .constant(""))
            }
        }
        .navigationTitle("Account Settings")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct NotificationSettingsView: View {
    @State private var emailNotifications = true
    @State private var pushNotifications = true
    @State private var campaignAlerts = true
    
    var body: some View {
        Form {
            Section("Notification Preferences") {
                Toggle("Email Notifications", isOn: $emailNotifications)
                Toggle("Push Notifications", isOn: $pushNotifications)
                Toggle("Campaign Alerts", isOn: $campaignAlerts)
            }
        }
        .navigationTitle("Notifications")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct PrivacySettingsView: View {
    var body: some View {
        Form {
            Section("Privacy") {
                NavigationLink("Privacy Policy", destination: Text("Privacy Policy Content"))
                NavigationLink("Terms of Service", destination: Text("Terms of Service Content"))
            }
            
            Section("Data") {
                Button("Download My Data") {}
                Button("Delete My Account", role: .destructive) {}
            }
        }
        .navigationTitle("Privacy")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct HelpView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("Frequently Asked Questions")
                    .font(.title2)
                    .fontWeight(.bold)
                    .padding()
                
                FAQItem(question: "How do I earn rewards?", answer: "You earn rewards by engaging with health brand campaigns in your mailbox.")
                FAQItem(question: "How do I spend rewards?", answer: "You can spend rewards at any participating pharmacy in our network.")
                FAQItem(question: "How does compound interest work?", answer: "Unused rewards grow daily through our compound interest system.")
            }
        }
        .navigationTitle("Help Center")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct FAQItem: View {
    let question: String
    let answer: String
    @State private var isExpanded = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Button(action: {
                withAnimation {
                    isExpanded.toggle()
                }
            }) {
                HStack {
                    Text(question)
                        .font(.headline)
                        .foregroundColor(.primary)
                    Spacer()
                    Image(systemName: isExpanded ? "chevron.up" : "chevron.down")
                        .foregroundColor(.secondary)
                }
            }
            
            if isExpanded {
                Text(answer)
                    .font(.body)
                    .foregroundColor(.secondary)
                    .padding(.top, 5)
            }
        }
        .padding()
        .background(Color.gray.opacity(0.1))
        .cornerRadius(10)
        .padding(.horizontal)
    }
}

struct ContactView: View {
    var body: some View {
        Form {
            Section("Contact Information") {
                Text("Email: support@saintdaniels.com")
                Text("Phone: (555) 123-4567")
            }
            
            Section("Office Locations") {
                Text("Austin, TX")
                Text("Dallas, TX")
            }
        }
        .navigationTitle("Contact Us")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct AboutView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("About Saint Daniels Healthcare")
                    .font(.title2)
                    .fontWeight(.bold)
                
                Text("Saint Daniels Healthcare Rewards is a comprehensive platform for managing healthcare rewards and private subsidies.")
                
                Text("Our mission is to make healthcare more accessible through innovative reward programs.")
            }
            .padding()
        }
        .navigationTitle("About")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
            .environmentObject(AuthenticationManager())
    }
}

