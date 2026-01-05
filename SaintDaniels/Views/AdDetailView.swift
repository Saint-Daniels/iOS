import SwiftUI
import AVKit

struct AdDetailView: View {
    let ad: Ad
    @ObservedObject var rewardsService: RewardsService
    @Environment(\.dismiss) var dismiss
    @State private var isWatching = false
    @State private var watchProgress: Double = 0.0
    @State private var hasEarned = false
    @State private var timer: Timer?
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    // Ad Header
                    VStack(alignment: .leading, spacing: 10) {
                        Text(ad.brand)
                            .font(.system(size: 14, weight: .semibold))
                            .foregroundColor(.gray)
                        
                        Text(ad.subject)
                            .font(.system(size: 24, weight: .bold))
                        
                        if ad.earnings > 0 {
                            HStack {
                                Image(systemName: "dollarsign.circle.fill")
                                    .foregroundColor(.green)
                                Text("Earn $\(String(format: "%.2f", ad.earnings))")
                                    .font(.system(size: 18, weight: .semibold))
                                    .foregroundColor(.green)
                            }
                        }
                    }
                    .padding(.horizontal, 20)
                    .padding(.top, 20)
                    
                    // Video/Ad Content Area
                    ZStack {
                        RoundedRectangle(cornerRadius: 15)
                            .fill(Color.black)
                            .frame(height: 250)
                        
                        if isWatching {
                            VStack(spacing: 15) {
                                ProgressView(value: watchProgress, total: 100)
                                    .progressViewStyle(LinearProgressViewStyle(tint: Color(red: 0.769, green: 0.663, blue: 0.384)))
                                    .padding(.horizontal, 40)
                                
                                Text("Watching ad... \(Int(watchProgress))%")
                                    .font(.system(size: 16, weight: .medium))
                                    .foregroundColor(.white)
                            }
                        } else if hasEarned {
                            VStack(spacing: 15) {
                                Image(systemName: "checkmark.circle.fill")
                                    .font(.system(size: 60))
                                    .foregroundColor(.green)
                                
                                Text("Reward Earned!")
                                    .font(.system(size: 20, weight: .bold))
                                    .foregroundColor(.white)
                                
                                Text("+$\(String(format: "%.2f", ad.earnings))")
                                    .font(.system(size: 32, weight: .bold))
                                    .foregroundColor(.green)
                            }
                        } else {
                            VStack(spacing: 15) {
                                Image(systemName: "play.circle.fill")
                                    .font(.system(size: 60))
                                    .foregroundColor(.white)
                                
                                Text("Tap to Watch Ad")
                                    .font(.system(size: 18, weight: .semibold))
                                    .foregroundColor(.white)
                                
                                Text("Watch this ad to earn $\(String(format: "%.2f", ad.earnings))")
                                    .font(.system(size: 14))
                                    .foregroundColor(.white.opacity(0.8))
                            }
                        }
                    }
                    .padding(.horizontal, 20)
                    .onTapGesture {
                        if !isWatching && !hasEarned {
                            startWatching()
                        }
                    }
                    
                    // Ad Description
                    VStack(alignment: .leading, spacing: 10) {
                        Text("About this Campaign")
                            .font(.system(size: 18, weight: .semibold))
                        
                        Text(ad.description)
                            .font(.system(size: 15))
                            .foregroundColor(.gray)
                            .lineSpacing(4)
                    }
                    .padding(.horizontal, 20)
                    
                    // Category Badge
                    HStack {
                        Text("Category:")
                            .font(.system(size: 14, weight: .medium))
                        
                        Text(ad.category)
                            .font(.system(size: 14))
                            .padding(.horizontal, 12)
                            .padding(.vertical, 6)
                            .background(Color(red: 0.769, green: 0.663, blue: 0.384).opacity(0.2))
                            .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384))
                            .cornerRadius(8)
                    }
                    .padding(.horizontal, 20)
                    
                    // Watch Button (if not watched)
                    if !ad.isWatched && !hasEarned && !isWatching {
                        Button(action: {
                            startWatching()
                        }) {
                            HStack {
                                Image(systemName: "play.fill")
                                Text("Watch Ad to Earn")
                            }
                            .font(.system(size: 18, weight: .semibold))
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity)
                            .frame(height: 50)
                            .background(Color(red: 0.769, green: 0.663, blue: 0.384))
                            .cornerRadius(12)
                        }
                        .padding(.horizontal, 20)
                        .padding(.top, 10)
                    }
                }
                .padding(.bottom, 30)
            }
            .navigationTitle("Ad Campaign")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Done") {
                        timer?.invalidate()
                        dismiss()
                    }
                }
            }
        }
    }
    
    private func startWatching() {
        guard !ad.isWatched && !hasEarned else { return }
        
        isWatching = true
        watchProgress = 0.0
        
        // Simulate watching ad for 15 seconds
        timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { timer in
            watchProgress += 0.67 // 100% over 15 seconds
            
            if watchProgress >= 100 {
                timer.invalidate()
                completeWatching()
            }
        }
    }
    
    private func completeWatching() {
        isWatching = false
        hasEarned = true
        
        // Mark ad as watched and add earnings
        rewardsService.watchAd(ad: ad)
        
        // Haptic feedback
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)
    }
}

#Preview {
    AdDetailView(
        ad: Ad(
            id: UUID(),
            brand: "Health Brand A",
            subject: "Cardiovascular Health Education",
            preview: "Learn about heart health",
            description: "This comprehensive campaign educates users about cardiovascular health and preventive care strategies.",
            earnings: 12.50,
            date: "2 hours ago",
            isRead: false,
            isWatched: false,
            category: "Cardiovascular"
        ),
        rewardsService: RewardsService.shared
    )
}

