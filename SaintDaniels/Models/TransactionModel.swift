import Foundation

struct Transaction: Identifiable, Codable {
    let id: UUID
    let type: TransactionType
    let amount: Double
    let description: String
    let date: Date
    
    enum TransactionType: String, Codable {
        case earned
        case spent
        case cashout
        case interest
    }
    
    init(id: UUID = UUID(), type: TransactionType, amount: Double, description: String, date: Date = Date()) {
        self.id = id
        self.type = type
        self.amount = amount
        self.description = description
        self.date = date
    }
}

// Balance History Data Point
struct BalanceDataPoint: Identifiable {
    let id = UUID()
    let time: Int
    let balance: Double
}

