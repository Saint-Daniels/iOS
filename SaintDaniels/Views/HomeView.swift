//
//  HomeView.swift
//  SaintDaniels
//
//  Home screen with hero section
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 0) {
                    // Hero Section
                    ZStack {
                        LinearGradient(
                            gradient: Gradient(colors: [Color(red: 0.96, green: 0.95, blue: 0.91), Color(red: 0.91, green: 0.86, blue: 0.78)]),
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                        
                        VStack(spacing: 20) {
                            Image("saintdanielslogo")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 100, height: 100)
                            
                            Text("Healthcare Rewards")
                                .font(.system(size: 32, weight: .bold))
                                .multilineTextAlignment(.center)
                                .foregroundColor(.primary)
                            
                            Text("Earn Well. Live Well")
                                .font(.system(size: 18, weight: .medium))
                                .foregroundColor(.secondary)
                            
                            Text("Saint Daniels Healthcare Rewards converts every qualified sponsor interaction into a private subsidy you can deploy at trusted pharmacies or allow to grow through our compound network.")
                                .font(.body)
                                .multilineTextAlignment(.center)
                                .foregroundColor(.secondary)
                                .padding(.horizontal, 30)
                                .padding(.top, 10)
                            
                            HStack(spacing: 20) {
                                NavigationLink(destination: DownloadView()) {
                                    Text("Download App")
                                        .font(.headline)
                                        .foregroundColor(.white)
                                        .frame(width: 150, height: 50)
                                        .background(
                                            LinearGradient(
                                                gradient: Gradient(colors: [Color(red: 0.2, green: 0.33, blue: 0.19), Color(red: 0.77, green: 0.66, blue: 0.38)]),
                                                startPoint: .leading,
                                                endPoint: .trailing
                                            )
                                        )
                                        .cornerRadius(10)
                                }
                                
                                NavigationLink(destination: LearnMoreView()) {
                                    Text("Learn More")
                                        .font(.headline)
                                        .foregroundColor(.primary)
                                        .frame(width: 150, height: 50)
                                        .background(Color.white)
                                        .cornerRadius(10)
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 10)
                                                .stroke(Color.gray.opacity(0.3), lineWidth: 1)
                                        )
                                }
                            }
                            .padding(.top, 20)
                        }
                        .padding(.vertical, 60)
                    }
                    .frame(height: 600)
                    
                    // Benefits Section
                    VStack(spacing: 30) {
                        Text("How It Works")
                            .font(.system(size: 28, weight: .bold))
                            .padding(.top, 40)
                        
                        VStack(spacing: 20) {
                            BenefitCard(
                                icon: "dollarsign.circle.fill",
                                title: "Earn Rewards",
                                description: "Earn private subsidies through ad network engagement"
                            )
                            
                            BenefitCard(
                                icon: "building.2.fill",
                                title: "Pharmacy Network",
                                description: "Spend rewards at trusted participating pharmacies"
                            )
                            
                            BenefitCard(
                                icon: "chart.line.uptrend.xyaxis",
                                title: "Compound Interest",
                                description: "Grow unused rewards through daily compound interest"
                            )
                        }
                        .padding(.horizontal, 20)
                    }
                    .padding(.bottom, 40)
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    Text("Saint Daniels")
                        .font(.headline)
                }
            }
        }
    }
}

struct BenefitCard: View {
    let icon: String
    let title: String
    let description: String
    
    var body: some View {
        HStack(spacing: 20) {
            Image(systemName: icon)
                .font(.system(size: 40))
                .foregroundColor(Color(red: 0.2, green: 0.33, blue: 0.19))
                .frame(width: 60, height: 60)
            
            VStack(alignment: .leading, spacing: 5) {
                Text(title)
                    .font(.headline)
                Text(description)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
        }
        .padding()
        .background(Color.white)
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
    }
}

struct DownloadView: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 30) {
                Text("Download the App")
                    .font(.title)
                    .padding(.top, 40)
                
                Text("Get the full Saint Daniels Healthcare Rewards experience on your iOS device.")
                    .multilineTextAlignment(.center)
                    .padding(.horizontal)
                
                // App Store button placeholder
                Button(action: {}) {
                    HStack {
                        Image(systemName: "arrow.down.circle.fill")
                        Text("Download from App Store")
                    }
                    .font(.headline)
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .frame(height: 50)
                    .background(Color.blue)
                    .cornerRadius(10)
                }
                .padding(.horizontal)
            }
        }
        .navigationTitle("Download")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct LearnMoreView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                Text("About Healthcare Rewards")
                    .font(.title)
                    .padding(.top, 20)
                
                Text("Saint Daniels Healthcare Rewards is a comprehensive platform for managing healthcare rewards and private subsidies.")
                    .font(.body)
                
                Text("Key Features:")
                    .font(.headline)
                    .padding(.top)
                
                VStack(alignment: .leading, spacing: 10) {
                    FeatureRow(text: "Track your private subsidy balance in real-time")
                    FeatureRow(text: "View and engage with health brand campaigns")
                    FeatureRow(text: "Find nearby pharmacies in our network")
                    FeatureRow(text: "Monitor transaction history")
                    FeatureRow(text: "Watch your balance grow with compound interest")
                }
            }
            .padding()
        }
        .navigationTitle("Learn More")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct FeatureRow: View {
    let text: String
    
    var body: some View {
        HStack(alignment: .top) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(Color(red: 0.2, green: 0.33, blue: 0.19))
            Text(text)
                .font(.body)
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}

