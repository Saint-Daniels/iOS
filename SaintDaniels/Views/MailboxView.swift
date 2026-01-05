import SwiftUI

struct MailboxView: View {
    @StateObject private var rewardsService = RewardsService.shared
    @State private var selectedTab: MailboxTab = .inbox
    @State private var selectedAd: Ad? = nil
    
    enum MailboxTab {
        case inbox
        case unread
    }
    
    var body: some View {
        NavigationView {
            ZStack {
                Color(red: 0.95, green: 0.95, blue: 0.97)
                    .ignoresSafeArea()
                
                VStack(spacing: 0) {
                    // Tab Selector
                    HStack(spacing: 0) {
                        TabButton(title: "Inbox", isSelected: selectedTab == .inbox) {
                            selectedTab = .inbox
                        }
                        
                        TabButton(title: "Unread", isSelected: selectedTab == .unread) {
                            selectedTab = .unread
                        }
                    }
                    .padding(.horizontal, 20)
                    .padding(.top, 10)
                    
                    // Ad List
                    ScrollView {
                        LazyVStack(spacing: 12) {
                            ForEach(filteredAds) { ad in
                                AdRow(ad: ad)
                                    .onTapGesture {
                                        selectedAd = ad
                                    }
                            }
                        }
                        .padding(.horizontal, 20)
                        .padding(.vertical, 15)
                    }
                }
            }
            .navigationTitle("Mailbox")
            .navigationBarTitleDisplayMode(.large)
            .sheet(item: $selectedAd) { ad in
                AdDetailView(ad: ad, rewardsService: rewardsService)
            }
        }
    }
    
    private var filteredAds: [Ad] {
        switch selectedTab {
        case .inbox:
            return rewardsService.allAds
        case .unread:
            return rewardsService.allAds.filter { !$0.isRead }
        }
    }
}

struct TabButton: View {
    let title: String
    let isSelected: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            VStack(spacing: 8) {
                Text(title)
                    .font(.system(size: 16, weight: isSelected ? .semibold : .regular))
                    .foregroundColor(isSelected ? Color(red: 0.769, green: 0.663, blue: 0.384) : .gray)
                
                Rectangle()
                    .fill(isSelected ? Color(red: 0.769, green: 0.663, blue: 0.384) : Color.clear)
                    .frame(height: 2)
            }
            .frame(maxWidth: .infinity)
        }
    }
}

struct AdRow: View {
    let ad: Ad
    
    var body: some View {
        HStack(alignment: .top, spacing: 15) {
            // Unread Indicator
            if !ad.isRead {
                Circle()
                    .fill(Color(red: 0.769, green: 0.663, blue: 0.384))
                    .frame(width: 10, height: 10)
                    .padding(.top, 6)
            } else {
                Spacer()
                    .frame(width: 10)
            }
            
            VStack(alignment: .leading, spacing: 8) {
                HStack {
                    Text(ad.brand)
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.gray)
                    
                    Spacer()
                    
                    if ad.earnings > 0 {
                        Text("+$\(String(format: "%.2f", ad.earnings))")
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.green)
                    }
                }
                
                Text(ad.subject)
                    .font(.system(size: 16, weight: ad.isRead ? .regular : .semibold))
                    .foregroundColor(.primary)
                    .lineLimit(2)
                
                Text(ad.preview)
                    .font(.system(size: 14))
                    .foregroundColor(.gray)
                    .lineLimit(2)
                
                HStack {
                    Text(ad.date)
                        .font(.system(size: 12))
                        .foregroundColor(.gray)
                    
                    Spacer()
                    
                    if !ad.isWatched {
                        Label("Watch to Earn", systemImage: "play.circle.fill")
                            .font(.system(size: 12, weight: .medium))
                            .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384))
                    }
                }
            }
        }
        .padding()
        .background(Color.white)
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.05), radius: 5, x: 0, y: 2)
    }
}

#Preview {
    MailboxView()
}

