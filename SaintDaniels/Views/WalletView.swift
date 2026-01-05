import SwiftUI
import Charts

struct WalletView: View {
    @StateObject private var rewardsService = RewardsService.shared
    @State private var showCashoutSheet = false
    @State private var cashoutAmount: String = ""
    @State private var selectedPeriod: TimePeriod = .week
    
    enum TimePeriod: String, CaseIterable {
        case day = "1D"
        case week = "1W"
        case month = "1M"
        case threeMonths = "3M"
        case year = "1Y"
    }
    
    var body: some View {
        NavigationView {
            ZStack {
                // Background
                Color(red: 0.95, green: 0.95, blue: 0.97)
                    .ignoresSafeArea()
                
                ScrollView {
                    VStack(spacing: 20) {
                        // Balance Card
                        VStack(spacing: 15) {
                            Text("Private Subsidy Balance")
                                .font(.system(size: 16, weight: .medium))
                                .foregroundColor(.white.opacity(0.8))
                            
                            Text("$\(String(format: "%.2f", rewardsService.balance))")
                                .font(.system(size: 48, weight: .bold))
                                .foregroundColor(.white)
                            
                            HStack(spacing: 30) {
                                VStack(alignment: .leading, spacing: 4) {
                                    Text("Total Earned")
                                        .font(.system(size: 12))
                                        .foregroundColor(.white.opacity(0.7))
                                    Text("$\(String(format: "%.2f", rewardsService.totalEarned))")
                                        .font(.system(size: 18, weight: .semibold))
                                        .foregroundColor(.white)
                                }
                                
                                VStack(alignment: .leading, spacing: 4) {
                                    Text("Total Spent")
                                        .font(.system(size: 12))
                                        .foregroundColor(.white.opacity(0.7))
                                    Text("$\(String(format: "%.2f", rewardsService.totalSpent))")
                                        .font(.system(size: 18, weight: .semibold))
                                        .foregroundColor(.white)
                                }
                                
                                VStack(alignment: .leading, spacing: 4) {
                                    Text("Interest Earned")
                                        .font(.system(size: 12))
                                        .foregroundColor(.white.opacity(0.7))
                                    Text("$\(String(format: "%.2f", rewardsService.interestEarned))")
                                        .font(.system(size: 18, weight: .semibold))
                                        .foregroundColor(.white)
                                }
                            }
                            .padding(.top, 10)
                        }
                        .padding(25)
                        .frame(maxWidth: .infinity)
                        .background(
                            LinearGradient(
                                gradient: Gradient(colors: [
                                    Color(red: 0.106, green: 0.224, blue: 0.184),
                                    Color(red: 0.15, green: 0.3, blue: 0.25)
                                ]),
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .cornerRadius(20)
                        .padding(.horizontal, 20)
                        .padding(.top, 10)
                        
                        // Chart Period Selector
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: 12) {
                                ForEach(TimePeriod.allCases, id: \.self) { period in
                                    Button(action: {
                                        selectedPeriod = period
                                    }) {
                                        Text(period.rawValue)
                                            .font(.system(size: 14, weight: .medium))
                                            .foregroundColor(selectedPeriod == period ? .white : .gray)
                                            .padding(.horizontal, 16)
                                            .padding(.vertical, 8)
                                            .background(selectedPeriod == period ? Color(red: 0.769, green: 0.663, blue: 0.384) : Color.clear)
                                            .cornerRadius(8)
                                    }
                                }
                            }
                            .padding(.horizontal, 20)
                        }
                        
                        // Balance Chart
                        VStack(alignment: .leading, spacing: 10) {
                            Text("Balance History")
                                .font(.system(size: 20, weight: .semibold))
                                .padding(.horizontal, 20)
                            
                            Chart(rewardsService.getBalanceHistory(for: selectedPeriod)) { data in
                                LineMark(
                                    x: .value("Time", data.time),
                                    y: .value("Balance", data.balance)
                                )
                                .foregroundStyle(Color(red: 0.769, green: 0.663, blue: 0.384))
                                .interpolationMethod(.catmullRom)
                                
                                AreaMark(
                                    x: .value("Time", data.time),
                                    y: .value("Balance", data.balance)
                                )
                                .foregroundStyle(
                                    LinearGradient(
                                        gradient: Gradient(colors: [
                                            Color(red: 0.769, green: 0.663, blue: 0.384).opacity(0.3),
                                            Color(red: 0.769, green: 0.663, blue: 0.384).opacity(0.0)
                                        ]),
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                                .interpolationMethod(.catmullRom)
                            }
                            .frame(height: 200)
                            .padding()
                            .background(Color.white)
                            .cornerRadius(15)
                            .padding(.horizontal, 20)
                        }
                        
                        // Quick Actions
                        VStack(alignment: .leading, spacing: 15) {
                            Text("Quick Actions")
                                .font(.system(size: 20, weight: .semibold))
                                .padding(.horizontal, 20)
                            
                            HStack(spacing: 15) {
                                Button(action: {
                                    showCashoutSheet = true
                                }) {
                                    VStack(spacing: 10) {
                                        Image(systemName: "dollarsign.circle.fill")
                                            .font(.system(size: 32))
                                            .foregroundColor(.white)
                                        Text("Cash Out")
                                            .font(.system(size: 14, weight: .medium))
                                            .foregroundColor(.white)
                                    }
                                    .frame(maxWidth: .infinity)
                                    .frame(height: 100)
                                    .background(Color(red: 0.769, green: 0.663, blue: 0.384))
                                    .cornerRadius(15)
                                }
                                
                                Button(action: {
                                    // View transactions
                                }) {
                                    VStack(spacing: 10) {
                                        Image(systemName: "list.bullet.rectangle")
                                            .font(.system(size: 32))
                                            .foregroundColor(.white)
                                        Text("Transactions")
                                            .font(.system(size: 14, weight: .medium))
                                            .foregroundColor(.white)
                                    }
                                    .frame(maxWidth: .infinity)
                                    .frame(height: 100)
                                    .background(Color(red: 0.106, green: 0.224, blue: 0.184))
                                    .cornerRadius(15)
                                }
                            }
                            .padding(.horizontal, 20)
                        }
                        .padding(.top, 10)
                        
                        // Recent Transactions
                        VStack(alignment: .leading, spacing: 15) {
                            Text("Recent Transactions")
                                .font(.system(size: 20, weight: .semibold))
                                .padding(.horizontal, 20)
                            
                            ForEach(rewardsService.recentTransactions.prefix(5)) { transaction in
                                TransactionRow(transaction: transaction)
                            }
                            .padding(.horizontal, 20)
                        }
                        .padding(.top, 10)
                    }
                    .padding(.bottom, 30)
                }
            }
            .navigationTitle("Wallet")
            .navigationBarTitleDisplayMode(.large)
            .sheet(isPresented: $showCashoutSheet) {
                CashoutView(rewardsService: rewardsService)
            }
        }
    }
}

struct TransactionRow: View {
    let transaction: Transaction
    
    var body: some View {
        HStack {
            Image(systemName: transaction.type == .earned ? "arrow.down.circle.fill" : "arrow.up.circle.fill")
                .font(.system(size: 24))
                .foregroundColor(transaction.type == .earned ? .green : .red)
            
            VStack(alignment: .leading, spacing: 4) {
                Text(transaction.description)
                    .font(.system(size: 16, weight: .medium))
                Text(transaction.date, style: .relative)
                    .font(.system(size: 12))
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            Text(transaction.type == .earned ? "+$\(String(format: "%.2f", transaction.amount))" : "-$\(String(format: "%.2f", transaction.amount))")
                .font(.system(size: 16, weight: .semibold))
                .foregroundColor(transaction.type == .earned ? .green : .red)
        }
        .padding()
        .background(Color.white)
        .cornerRadius(12)
    }
}

struct CashoutView: View {
    @ObservedObject var rewardsService: RewardsService
    @Environment(\.dismiss) var dismiss
    @State private var cashoutAmount: String = ""
    @State private var showSuccess = false
    
    var body: some View {
        NavigationView {
            VStack(spacing: 30) {
                Text("Available Balance")
                    .font(.system(size: 16))
                    .foregroundColor(.gray)
                
                Text("$\(String(format: "%.2f", rewardsService.balance))")
                    .font(.system(size: 48, weight: .bold))
                    .foregroundColor(Color(red: 0.106, green: 0.224, blue: 0.184))
                
                VStack(alignment: .leading, spacing: 8) {
                    Text("Cash Out Amount")
                        .font(.system(size: 14, weight: .medium))
                    
                    TextField("Enter amount", text: $cashoutAmount)
                        .textFieldStyle(.roundedBorder)
                        .keyboardType(.decimalPad)
                }
                .padding(.horizontal, 20)
                
                Button(action: {
                    if let amount = Double(cashoutAmount), amount > 0 && amount <= rewardsService.balance {
                        rewardsService.cashout(amount: amount)
                        showSuccess = true
                        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                            dismiss()
                        }
                    }
                }) {
                    Text("Cash Out")
                        .font(.system(size: 18, weight: .semibold))
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 50)
                        .background(
                            (Double(cashoutAmount) ?? 0) > 0 && (Double(cashoutAmount) ?? 0) <= rewardsService.balance
                            ? Color(red: 0.769, green: 0.663, blue: 0.384)
                            : Color.gray
                        )
                        .cornerRadius(12)
                }
                .disabled((Double(cashoutAmount) ?? 0) <= 0 || (Double(cashoutAmount) ?? 0) > rewardsService.balance)
                .padding(.horizontal, 20)
                
                if showSuccess {
                    Text("Cashout successful!")
                        .font(.system(size: 16, weight: .medium))
                        .foregroundColor(.green)
                }
                
                Spacer()
            }
            .padding(.top, 40)
            .navigationTitle("Cash Out")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Done") {
                        dismiss()
                    }
                }
            }
        }
    }
}

#Preview {
    WalletView()
}

