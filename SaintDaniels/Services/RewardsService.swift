import Foundation
import Combine

class RewardsService: ObservableObject {
    static let shared = RewardsService()
    
    @Published var balance: Double = 1247.50
    @Published var totalEarned: Double = 2456.80
    @Published var totalSpent: Double = 1209.30
    @Published var interestEarned: Double = 18.00
    @Published var allAds: [Ad] = []
    @Published var recentTransactions: [Transaction] = []
    @Published var allTransactions: [Transaction] = []
    @Published var totalAdsWatched: Int = 0
    
    private let userDefaults = UserDefaults.standard
    private let balanceKey = "walletBalance"
    private let totalEarnedKey = "totalEarned"
    private let totalSpentKey = "totalSpent"
    private let interestEarnedKey = "interestEarned"
    private let adsKey = "ads"
    private let transactionsKey = "transactions"
    private let totalAdsWatchedKey = "totalAdsWatched"
    
    private init() {
        loadData()
        if allAds.isEmpty {
            initializeDefaultAds()
        }
        if allTransactions.isEmpty {
            initializeDefaultTransactions()
        }
    }
    
    // MARK: - Ad Management
    
    func watchAd(ad: Ad) {
        guard !ad.isWatched else { return }
        
        // Update ad
        if let index = allAds.firstIndex(where: { $0.id == ad.id }) {
            var updatedAd = allAds[index]
            updatedAd.isWatched = true
            updatedAd.isRead = true
            allAds[index] = updatedAd
        }
        
        // Add earnings
        balance += ad.earnings
        totalEarned += ad.earnings
        totalAdsWatched += 1
        
        // Create transaction
        let transaction = Transaction(
            type: .earned,
            amount: ad.earnings,
            description: "Earned from \(ad.brand) - \(ad.subject)"
        )
        allTransactions.insert(transaction, at: 0)
        recentTransactions = Array(allTransactions.prefix(10))
        
        saveData()
    }
    
    // MARK: - Cashout
    
    func cashout(amount: Double) {
        guard amount > 0 && amount <= balance else { return }
        
        balance -= amount
        totalSpent += amount
        
        let transaction = Transaction(
            type: .cashout,
            amount: amount,
            description: "Cashout to bank account"
        )
        allTransactions.insert(transaction, at: 0)
        recentTransactions = Array(allTransactions.prefix(10))
        
        saveData()
    }
    
    // MARK: - Balance History
    
    func getBalanceHistory(for period: WalletView.TimePeriod) -> [BalanceDataPoint] {
        switch period {
        case .day:
            return [
                BalanceDataPoint(time: 0, balance: 1240),
                BalanceDataPoint(time: 1, balance: 1242),
                BalanceDataPoint(time: 2, balance: 1243),
                BalanceDataPoint(time: 3, balance: 1244.5),
                BalanceDataPoint(time: 4, balance: 1245.5),
                BalanceDataPoint(time: 5, balance: 1246),
                BalanceDataPoint(time: 6, balance: balance)
            ]
        case .week:
            return [
                BalanceDataPoint(time: 0, balance: 1100),
                BalanceDataPoint(time: 1, balance: 1125),
                BalanceDataPoint(time: 2, balance: 1150),
                BalanceDataPoint(time: 3, balance: 1180),
                BalanceDataPoint(time: 4, balance: 1200),
                BalanceDataPoint(time: 5, balance: 1225),
                BalanceDataPoint(time: 6, balance: balance)
            ]
        case .month:
            return [
                BalanceDataPoint(time: 0, balance: 850),
                BalanceDataPoint(time: 1, balance: 920),
                BalanceDataPoint(time: 2, balance: 980),
                BalanceDataPoint(time: 3, balance: 1050),
                BalanceDataPoint(time: 4, balance: 1120),
                BalanceDataPoint(time: 5, balance: 1180),
                BalanceDataPoint(time: 6, balance: balance)
            ]
        case .threeMonths:
            return [
                BalanceDataPoint(time: 0, balance: 600),
                BalanceDataPoint(time: 1, balance: 750),
                BalanceDataPoint(time: 2, balance: 900),
                BalanceDataPoint(time: 3, balance: 1100),
                BalanceDataPoint(time: 4, balance: balance)
            ]
        case .year:
            return [
                BalanceDataPoint(time: 0, balance: 200),
                BalanceDataPoint(time: 1, balance: 350),
                BalanceDataPoint(time: 2, balance: 500),
                BalanceDataPoint(time: 3, balance: 650),
                BalanceDataPoint(time: 4, balance: 800),
                BalanceDataPoint(time: 5, balance: 950),
                BalanceDataPoint(time: 6, balance: 1100),
                BalanceDataPoint(time: 7, balance: 1150),
                BalanceDataPoint(time: 8, balance: 1200),
                BalanceDataPoint(time: 9, balance: 1220),
                BalanceDataPoint(time: 10, balance: 1235),
                BalanceDataPoint(time: 11, balance: balance)
            ]
        }
    }
    
    // MARK: - Data Persistence
    
    private func saveData() {
        userDefaults.set(balance, forKey: balanceKey)
        userDefaults.set(totalEarned, forKey: totalEarnedKey)
        userDefaults.set(totalSpent, forKey: totalSpentKey)
        userDefaults.set(interestEarned, forKey: interestEarnedKey)
        userDefaults.set(totalAdsWatched, forKey: totalAdsWatchedKey)
        
        if let adsData = try? JSONEncoder().encode(allAds) {
            userDefaults.set(adsData, forKey: adsKey)
        }
        
        if let transactionsData = try? JSONEncoder().encode(allTransactions) {
            userDefaults.set(transactionsData, forKey: transactionsKey)
        }
    }
    
    private func loadData() {
        balance = userDefaults.double(forKey: balanceKey)
        if balance == 0 { balance = 1247.50 }
        
        totalEarned = userDefaults.double(forKey: totalEarnedKey)
        if totalEarned == 0 { totalEarned = 2456.80 }
        
        totalSpent = userDefaults.double(forKey: totalSpentKey)
        if totalSpent == 0 { totalSpent = 1209.30 }
        
        interestEarned = userDefaults.double(forKey: interestEarnedKey)
        if interestEarned == 0 { interestEarned = 18.00 }
        
        totalAdsWatched = userDefaults.integer(forKey: totalAdsWatchedKey)
        
        if let adsData = userDefaults.data(forKey: adsKey),
           let ads = try? JSONDecoder().decode([Ad].self, from: adsData) {
            allAds = ads
        }
        
        if let transactionsData = userDefaults.data(forKey: transactionsKey),
           let transactions = try? JSONDecoder().decode([Transaction].self, from: transactionsData) {
            allTransactions = transactions
            recentTransactions = Array(transactions.prefix(10))
        }
    }
    
    // MARK: - Default Data
    
    private func initializeDefaultAds() {
        allAds = [
            Ad(
                brand: "Health Brand A",
                subject: "Cardiovascular Health Education",
                preview: "Learn about heart health and earn $12.50 in your private subsidy",
                description: "This comprehensive campaign educates users about cardiovascular health, preventive care strategies, and the importance of regular check-ups. Watch to learn and earn.",
                earnings: 12.50,
                date: "2 hours ago",
                isRead: true,
                isWatched: false,
                category: "Cardiovascular"
            ),
            Ad(
                brand: "Wellness Brand B",
                subject: "Nutrition & Metabolism Insights",
                preview: "Discover how nutrition affects your metabolism and unlock $8.75",
                description: "Explore the science behind nutrition and metabolism. Learn how different foods impact your body and discover strategies for optimal health.",
                earnings: 8.75,
                date: "1 day ago",
                isRead: true,
                isWatched: false,
                category: "Nutrition"
            ),
            Ad(
                brand: "Pharma Brand C",
                subject: "Mental Health Awareness Campaign",
                preview: "Support mental health awareness and earn rewards",
                description: "Join us in raising awareness about mental health. Learn about resources, support systems, and strategies for maintaining mental wellness.",
                earnings: 15.00,
                date: "2 days ago",
                isRead: false,
                isWatched: false,
                category: "Mental Health"
            ),
            Ad(
                brand: "Health Brand D",
                subject: "Preventive Care Information",
                preview: "Learn about preventive care strategies and earn $10.25",
                description: "Prevention is the best medicine. Discover preventive care strategies that can help you maintain optimal health and avoid future complications.",
                earnings: 10.25,
                date: "3 days ago",
                isRead: true,
                isWatched: true,
                category: "Preventive Care"
            ),
            Ad(
                brand: "Pharma Brand E",
                subject: "Diabetes Management Guide",
                preview: "Comprehensive guide to managing diabetes and earning $9.50",
                description: "Learn about effective diabetes management strategies, including diet, exercise, medication, and monitoring techniques.",
                earnings: 9.50,
                date: "4 days ago",
                isRead: false,
                isWatched: false,
                category: "Chronic Care"
            ),
            Ad(
                brand: "Wellness Brand F",
                subject: "Fitness & Exercise Benefits",
                preview: "Discover the benefits of regular exercise and earn $11.00",
                description: "Regular exercise is crucial for maintaining good health. Learn about different types of exercise and their specific health benefits.",
                earnings: 11.00,
                date: "5 days ago",
                isRead: true,
                isWatched: false,
                category: "Fitness"
            )
        ]
        saveData()
    }
    
    private func initializeDefaultTransactions() {
        allTransactions = [
            Transaction(
                type: .earned,
                amount: 12.50,
                description: "Earned from Health Brand A - Cardiovascular Health Education",
                date: Date().addingTimeInterval(-7200)
            ),
            Transaction(
                type: .earned,
                amount: 8.75,
                description: "Earned from Wellness Brand B - Nutrition & Metabolism Insights",
                date: Date().addingTimeInterval(-86400)
            ),
            Transaction(
                type: .cashout,
                amount: 50.00,
                description: "Cashout to bank account",
                date: Date().addingTimeInterval(-172800)
            ),
            Transaction(
                type: .interest,
                amount: 0.50,
                description: "Daily compound interest",
                date: Date().addingTimeInterval(-259200)
            )
        ]
        recentTransactions = Array(allTransactions.prefix(10))
        saveData()
    }
}

