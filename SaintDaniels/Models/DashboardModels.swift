//
//  DashboardModels.swift
//  SaintDaniels
//
//  Data models for dashboard
//

import Foundation

struct BalanceData {
    let subsidyBalance: Double
    let compoundInterest: Double
    let monthlyEarnings: Double
    let totalEarned: Double
    let totalSpent: Double
    let pharmacyCount: Int
}

struct BalanceHistoryPoint {
    let time: Int
    let balance: Double
}

struct AdCampaign {
    let id: Int
    let brand: String
    let subject: String
    let preview: String
    let earnings: Double
    let date: String
    let read: Bool
    let category: String
}

struct Transaction {
    let id: Int
    let type: TransactionType
    let amount: Double
    let description: String
    let date: Date
    let pharmacy: String?
}

enum TransactionType {
    case earned
    case spent
    case interest
}

struct Pharmacy {
    let id: Int
    let name: String
    let address: String
    let city: String
    let state: String
    let zipCode: String
    let phone: String
    let distance: Double? // in miles
    let latitude: Double
    let longitude: Double
}

