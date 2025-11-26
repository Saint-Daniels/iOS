//
//  APIService.swift
//  SaintDaniels
//
//  API service for backend communication
//

import Foundation

class APIService {
    static let shared = APIService()
    
    private let baseURL = "https://saintdanielshealthcare.com/api"
    
    private init() {}
    
    // MARK: - Authentication
    
    func login(email: String, password: String) async throws -> AuthResponse {
        let url = URL(string: "\(baseURL)/auth/login")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let body = ["email": email, "password": password]
        request.httpBody = try JSONSerialization.data(withJSONObject: body)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(AuthResponse.self, from: data)
    }
    
    // MARK: - Dashboard
    
    func fetchBalanceData() async throws -> BalanceData {
        let url = URL(string: "\(baseURL)/dashboard/balance")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        
        // Add authentication token
        if let token = UserDefaults.standard.string(forKey: "authToken") {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(BalanceData.self, from: data)
    }
    
    func fetchAdCampaigns() async throws -> [AdCampaign] {
        let url = URL(string: "\(baseURL)/dashboard/ads")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        
        if let token = UserDefaults.standard.string(forKey: "authToken") {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode([AdCampaign].self, from: data)
    }
    
    func fetchTransactions() async throws -> [Transaction] {
        let url = URL(string: "\(baseURL)/dashboard/transactions")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        
        if let token = UserDefaults.standard.string(forKey: "authToken") {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode([Transaction].self, from: data)
    }
    
    // MARK: - Pharmacy Network
    
    func fetchPharmacies(latitude: Double, longitude: Double) async throws -> [Pharmacy] {
        let url = URL(string: "\(baseURL)/pharmacies?lat=\(latitude)&lng=\(longitude)")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        
        if let token = UserDefaults.standard.string(forKey: "authToken") {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode([Pharmacy].self, from: data)
    }
    
    // MARK: - Application
    
    func submitApplication(_ application: ApplicationFormData) async throws -> ApplicationResponse {
        let url = URL(string: "\(baseURL)/submit-application")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let encoder = JSONEncoder()
        request.httpBody = try encoder.encode(application)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(ApplicationResponse.self, from: data)
    }
}

// MARK: - Response Models

struct AuthResponse: Codable {
    let token: String
    let user: User
}

struct User: Codable {
    let email: String
    let name: String?
}

struct ApplicationResponse: Codable {
    let success: Bool
    let message: String
    let applicationId: String?
}

// MARK: - Codable Extensions

extension BalanceData: Codable {}
extension AdCampaign: Codable {}
extension Transaction: Codable {}
extension Pharmacy: Codable {}

extension TransactionType: Codable {
    enum CodingKeys: String, CodingKey {
        case earned, spent, interest
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        let type = try container.decode(String.self)
        switch type {
        case "earned":
            self = .earned
        case "spent":
            self = .spent
        case "interest":
            self = .interest
        default:
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "Unknown transaction type")
        }
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .earned:
            try container.encode("earned")
        case .spent:
            try container.encode("spent")
        case .interest:
            try container.encode("interest")
        }
    }
}

extension ApplicationFormData: Codable {
    enum CodingKeys: String, CodingKey {
        case firstName, middleName, lastName, suffix, email, phone, dateOfBirth, ssn, stateOfOrigin
        case isMarried, hasChildren, isClaimedOnTaxes, taxFilingStatus
        case spouseFirstName, spouseLastName, spouseDateOfBirth, spouseSSN, dependents
        case streetAddress, city, state, zipCode, country
        case sameAsResidential, mailingStreet, mailingCity, mailingState, mailingZip
        case hasExistingInsurance, existingInsuranceType, healthInsuranceProvider, deductible
        case signatureData, signatureConsent
    }
}

