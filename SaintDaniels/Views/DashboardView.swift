//
//  DashboardView.swift
//  SaintDaniels
//
//  Dashboard with tabs for Balance, Mailbox, Pharmacy Network, and Transactions
//

import SwiftUI
import Charts

struct DashboardView: View {
    @State private var selectedTab = 0
    @State private var balanceData = BalanceData(
        subsidyBalance: 1247.50,
        compoundInterest: 18,
        monthlyEarnings: 89.25,
        totalEarned: 2456.80,
        totalSpent: 1209.30,
        pharmacyCount: 3
    )
    @State private var chartPeriod = "1W"
    
    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                // Tab selector
                Picker("Dashboard Tab", selection: $selectedTab) {
                    Text("Balance").tag(0)
                    Text("Mailbox").tag(1)
                    Text("Pharmacies").tag(2)
                    Text("History").tag(3)
                }
                .pickerStyle(SegmentedPickerStyle())
                .padding()
                
                // Tab content
                TabView(selection: $selectedTab) {
                    BalanceTabView(balanceData: balanceData, chartPeriod: $chartPeriod)
                        .tag(0)
                    
                    MailboxTabView()
                        .tag(1)
                    
                    PharmacyNetworkTabView()
                        .tag(2)
                    
                    TransactionHistoryTabView()
                        .tag(3)
                }
                .tabViewStyle(PageTabViewStyle(indexDisplayMode: .never))
            }
            .navigationTitle("Dashboard")
            .navigationBarTitleDisplayMode(.large)
        }
    }
}

struct BalanceTabView: View {
    let balanceData: BalanceData
    @Binding var chartPeriod: String
    
    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Balance card
                VStack(spacing: 15) {
                    Text("Private Subsidy Balance")
                        .font(.headline)
                        .foregroundColor(.secondary)
                    
                    Text("$\(String(format: "%.2f", balanceData.subsidyBalance))")
                        .font(.system(size: 48, weight: .bold))
                        .foregroundColor(Color(red: 0.2, green: 0.33, blue: 0.19))
                    
                    HStack(spacing: 30) {
                        VStack {
                            Text("Monthly Earnings")
                                .font(.caption)
                                .foregroundColor(.secondary)
                            Text("$\(String(format: "%.2f", balanceData.monthlyEarnings))")
                                .font(.headline)
                        }
                        
                        VStack {
                            Text("Compound Interest")
                                .font(.caption)
                                .foregroundColor(.secondary)
                            Text("\(String(format: "%.1f", balanceData.compoundInterest))%")
                                .font(.headline)
                        }
                    }
                }
                .padding()
                .frame(maxWidth: .infinity)
                .background(Color.white)
                .cornerRadius(15)
                .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
                .padding(.horizontal)
                .padding(.top)
                
                // Chart period selector
                Picker("Period", selection: $chartPeriod) {
                    Text("1D").tag("1D")
                    Text("1W").tag("1W")
                    Text("1M").tag("1M")
                    Text("3M").tag("3M")
                    Text("1Y").tag("1Y")
                    Text("5Y").tag("5Y")
                }
                .pickerStyle(SegmentedPickerStyle())
                .padding(.horizontal)
                
                // Balance chart
                BalanceChartView(period: chartPeriod)
                    .frame(height: 200)
                    .padding()
                    .background(Color.white)
                    .cornerRadius(15)
                    .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
                    .padding(.horizontal)
                
                // Stats cards
                HStack(spacing: 15) {
                    StatCard(
                        title: "Total Earned",
                        value: "$\(String(format: "%.2f", balanceData.totalEarned))",
                        icon: "arrow.up.circle.fill",
                        color: .green
                    )
                    
                    StatCard(
                        title: "Total Spent",
                        value: "$\(String(format: "%.2f", balanceData.totalSpent))",
                        icon: "arrow.down.circle.fill",
                        color: .red
                    )
                }
                .padding(.horizontal)
                
                // Virtual card section
                VirtualCardView()
                    .padding(.horizontal)
                    .padding(.bottom)
            }
        }
    }
}

struct BalanceChartView: View {
    let period: String
    
    var body: some View {
        // Simplified chart - in production, use Charts framework
        GeometryReader { geometry in
            Path { path in
                let data = getBalanceHistory(for: period)
                let maxBalance = data.map { $0.balance }.max() ?? 1
                let minBalance = data.map { $0.balance }.min() ?? 0
                let range = maxBalance - minBalance
                
                let width = geometry.size.width
                let height = geometry.size.height
                
                for (index, point) in data.enumerated() {
                    let x = CGFloat(index) / CGFloat(max(data.count - 1, 1)) * width
                    let y = height - CGFloat((point.balance - minBalance) / range) * height
                    
                    if index == 0 {
                        path.move(to: CGPoint(x: x, y: y))
                    } else {
                        path.addLine(to: CGPoint(x: x, y: y))
                    }
                }
            }
            .stroke(Color(red: 0.2, green: 0.33, blue: 0.19), lineWidth: 2)
        }
    }
    
    func getBalanceHistory(for period: String) -> [BalanceHistoryPoint] {
        switch period {
        case "1D":
            return [
                BalanceHistoryPoint(time: 0, balance: 1240),
                BalanceHistoryPoint(time: 1, balance: 1242),
                BalanceHistoryPoint(time: 2, balance: 1243),
                BalanceHistoryPoint(time: 3, balance: 1244.5),
                BalanceHistoryPoint(time: 4, balance: 1245.5),
                BalanceHistoryPoint(time: 5, balance: 1246),
                BalanceHistoryPoint(time: 6, balance: 1247.50)
            ]
        case "1W":
            return [
                BalanceHistoryPoint(time: 0, balance: 1100),
                BalanceHistoryPoint(time: 1, balance: 1125),
                BalanceHistoryPoint(time: 2, balance: 1150),
                BalanceHistoryPoint(time: 3, balance: 1180),
                BalanceHistoryPoint(time: 4, balance: 1200),
                BalanceHistoryPoint(time: 5, balance: 1225),
                BalanceHistoryPoint(time: 6, balance: 1247.50)
            ]
        default:
            return [
                BalanceHistoryPoint(time: 0, balance: 1100),
                BalanceHistoryPoint(time: 1, balance: 1125),
                BalanceHistoryPoint(time: 2, balance: 1150),
                BalanceHistoryPoint(time: 3, balance: 1180),
                BalanceHistoryPoint(time: 4, balance: 1200),
                BalanceHistoryPoint(time: 5, balance: 1225),
                BalanceHistoryPoint(time: 6, balance: 1247.50)
            ]
        }
    }
}

struct StatCard: View {
    let title: String
    let value: String
    let icon: String
    let color: Color
    
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundColor(color)
            
            Text(value)
                .font(.headline)
            
            Text(title)
                .font(.caption)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color.white)
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
    }
}

struct VirtualCardView: View {
    @State private var showCard = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 15) {
            HStack {
                Image(systemName: "creditcard.fill")
                    .font(.title2)
                Text("Virtual Card")
                    .font(.headline)
                Spacer()
                Button(action: { showCard.toggle() }) {
                    Image(systemName: showCard ? "eye.slash.fill" : "eye.fill")
                }
            }
            
            if showCard {
                VStack(alignment: .leading, spacing: 10) {
                    Text("**** **** **** 1234")
                        .font(.title2)
                        .fontWeight(.semibold)
                    
                    HStack {
                        Text("Exp: 12/25")
                        Spacer()
                        Text("CVV: ***")
                    }
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                }
                .padding()
                .background(
                    LinearGradient(
                        gradient: Gradient(colors: [Color(red: 0.2, green: 0.33, blue: 0.19), Color(red: 0.77, green: 0.66, blue: 0.38)]),
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .foregroundColor(.white)
                .cornerRadius(12)
            } else {
                Text("Tap to reveal card details")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.gray.opacity(0.1))
                    .cornerRadius(12)
            }
        }
        .padding()
        .background(Color.white)
        .cornerRadius(15)
        .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
    }
}

struct MailboxTabView: View {
    @State private var selectedFilter = "All"
    @State private var ads: [AdCampaign] = [
        AdCampaign(id: 1, brand: "Health Brand A", subject: "Cardiovascular Health Education", preview: "Learn about heart health and earn $12.50", earnings: 12.50, date: "2 hours ago", read: true, category: "Cardiovascular"),
        AdCampaign(id: 2, brand: "Wellness Brand B", subject: "Nutrition & Metabolism Insights", preview: "Discover how nutrition affects your metabolism", earnings: 8.75, date: "1 day ago", read: true, category: "Nutrition"),
        AdCampaign(id: 3, brand: "Pharma Brand C", subject: "Mental Health Awareness Campaign", preview: "Support mental health awareness", earnings: 15.00, date: "2 days ago", read: false, category: "Mental Health")
    ]
    
    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                Picker("Filter", selection: $selectedFilter) {
                    Text("All").tag("All")
                    Text("Unread").tag("Unread")
                    Text("Read").tag("Read")
                }
                .pickerStyle(SegmentedPickerStyle())
                .padding()
                
                ForEach(filteredAds, id: \.id) { ad in
                    AdCampaignRow(ad: ad)
                }
            }
        }
    }
    
    var filteredAds: [AdCampaign] {
        switch selectedFilter {
        case "Unread":
            return ads.filter { !$0.read }
        case "Read":
            return ads.filter { $0.read }
        default:
            return ads
        }
    }
}

struct AdCampaignRow: View {
    let ad: AdCampaign
    
    var body: some View {
        HStack(alignment: .top, spacing: 15) {
            VStack(alignment: .leading, spacing: 5) {
                if !ad.read {
                    Circle()
                        .fill(Color.blue)
                        .frame(width: 8, height: 8)
                }
                
                Text(ad.brand)
                    .font(.headline)
                
                Text(ad.subject)
                    .font(.subheadline)
                    .fontWeight(.semibold)
                
                Text(ad.preview)
                    .font(.caption)
                    .foregroundColor(.secondary)
                    .lineLimit(2)
                
                HStack {
                    Text("+$\(String(format: "%.2f", ad.earnings))")
                        .font(.caption)
                        .fontWeight(.semibold)
                        .foregroundColor(.green)
                    
                    Spacer()
                    
                    Text(ad.date)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
            
            Spacer()
        }
        .padding()
        .background(ad.read ? Color.white : Color.blue.opacity(0.05))
        .overlay(
            Rectangle()
                .frame(height: 1)
                .foregroundColor(Color.gray.opacity(0.2)),
            alignment: .bottom
        )
    }
}

struct PharmacyNetworkTabView: View {
    @State private var pharmacies: [Pharmacy] = [
        Pharmacy(id: 1, name: "CVS Pharmacy", address: "123 Main St", city: "Austin", state: "TX", zipCode: "78701", phone: "(512) 555-0100", distance: 0.5, latitude: 30.2672, longitude: -97.7431),
        Pharmacy(id: 2, name: "Walgreens", address: "456 Oak Ave", city: "Austin", state: "TX", zipCode: "78702", phone: "(512) 555-0200", distance: 1.2, latitude: 30.2747, longitude: -97.7403),
        Pharmacy(id: 3, name: "H-E-B Pharmacy", address: "789 Elm St", city: "Austin", state: "TX", zipCode: "78703", phone: "(512) 555-0300", distance: 2.1, latitude: 30.2711, longitude: -97.7467)
    ]
    @State private var searchText = ""
    @State private var showLocationPermission = false
    
    var body: some View {
        VStack(spacing: 0) {
            // Search bar
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(.secondary)
                TextField("Search pharmacies...", text: $searchText)
            }
            .padding()
            .background(Color.gray.opacity(0.1))
            .cornerRadius(10)
            .padding()
            
            // Pharmacy list
            List(filteredPharmacies) { pharmacy in
                PharmacyRow(pharmacy: pharmacy)
            }
            .listStyle(PlainListStyle())
        }
        .sheet(isPresented: $showLocationPermission) {
            LocationPermissionView()
        }
    }
    
    var filteredPharmacies: [Pharmacy] {
        if searchText.isEmpty {
            return pharmacies
        }
        return pharmacies.filter {
            $0.name.localizedCaseInsensitiveContains(searchText) ||
            $0.city.localizedCaseInsensitiveContains(searchText) ||
            $0.address.localizedCaseInsensitiveContains(searchText)
        }
    }
}

struct PharmacyRow: View {
    let pharmacy: Pharmacy
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(pharmacy.name)
                    .font(.headline)
                Spacer()
                if let distance = pharmacy.distance {
                    Text("\(String(format: "%.1f", distance)) mi")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
            
            Text("\(pharmacy.address), \(pharmacy.city), \(pharmacy.state) \(pharmacy.zipCode)")
                .font(.subheadline)
                .foregroundColor(.secondary)
            
            Text(pharmacy.phone)
                .font(.subheadline)
                .foregroundColor(.blue)
        }
        .padding(.vertical, 8)
    }
}

struct LocationPermissionView: View {
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Image(systemName: "location.fill")
                    .font(.system(size: 60))
                    .foregroundColor(.blue)
                
                Text("Enable Location Services")
                    .font(.title2)
                    .fontWeight(.bold)
                
                Text("To find pharmacies near you, we need access to your location.")
                    .multilineTextAlignment(.center)
                    .foregroundColor(.secondary)
                    .padding(.horizontal)
                
                Button("Enable Location") {
                    // Request location permission
                    dismiss()
                }
                .buttonStyle(CustomButtonStyle())
                .padding()
            }
            .padding()
            .navigationTitle("Location Access")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Cancel") {
                        dismiss()
                    }
                }
            }
        }
    }
}

struct TransactionHistoryTabView: View {
    @State private var transactions: [Transaction] = [
        Transaction(id: 1, type: .earned, amount: 12.50, description: "Health Brand A Campaign", date: Date().addingTimeInterval(-7200), pharmacy: nil),
        Transaction(id: 2, type: .spent, amount: -45.30, description: "Prescription Purchase", date: Date().addingTimeInterval(-86400), pharmacy: "CVS Pharmacy"),
        Transaction(id: 3, type: .interest, amount: 2.15, description: "Daily Compound Interest", date: Date().addingTimeInterval(-172800), pharmacy: nil),
        Transaction(id: 4, type: .earned, amount: 8.75, description: "Wellness Brand B Campaign", date: Date().addingTimeInterval(-259200), pharmacy: nil)
    ]
    
    var body: some View {
        List(transactions) { transaction in
            TransactionRow(transaction: transaction)
        }
        .listStyle(PlainListStyle())
    }
}

struct TransactionRow: View {
    let transaction: Transaction
    
    var body: some View {
        HStack {
            Image(systemName: transactionIcon)
                .font(.title3)
                .foregroundColor(transactionColor)
                .frame(width: 40, height: 40)
                .background(transactionColor.opacity(0.1))
                .cornerRadius(8)
            
            VStack(alignment: .leading, spacing: 4) {
                Text(transaction.description)
                    .font(.headline)
                
                if let pharmacy = transaction.pharmacy {
                    Text(pharmacy)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                
                Text(transaction.date, style: .date)
                    .font(.caption)
                    .foregroundColor(.secondary)
            }
            
            Spacer()
            
            Text(amountString)
                .font(.headline)
                .foregroundColor(transactionColor)
        }
        .padding(.vertical, 4)
    }
    
    var transactionIcon: String {
        switch transaction.type {
        case .earned:
            return "arrow.down.circle.fill"
        case .spent:
            return "arrow.up.circle.fill"
        case .interest:
            return "percent"
        }
    }
    
    var transactionColor: Color {
        switch transaction.type {
        case .earned, .interest:
            return .green
        case .spent:
            return .red
        }
    }
    
    var amountString: String {
        let sign = transaction.amount >= 0 ? "+" : ""
        return "\(sign)$\(String(format: "%.2f", abs(transaction.amount)))"
    }
}

extension Pharmacy: Identifiable {}
extension Transaction: Identifiable {}

struct DashboardView_Previews: PreviewProvider {
    static var previews: some View {
        DashboardView()
    }
}

