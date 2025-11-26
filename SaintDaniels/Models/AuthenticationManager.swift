//
//  AuthenticationManager.swift
//  SaintDaniels
//
//  Handles user authentication
//

import Foundation
import Combine

class AuthenticationManager: ObservableObject {
    @Published var isAuthenticated = false
    @Published var userEmail: String?
    @Published var isLoading = false
    @Published var errorMessage: String?
    
    private let userDefaults = UserDefaults.standard
    private let isLoggedInKey = "isLoggedIn"
    private let userEmailKey = "userEmail"
    
    init() {
        checkAuthenticationStatus()
    }
    
    func checkAuthenticationStatus() {
        let isLoggedIn = userDefaults.bool(forKey: isLoggedInKey)
        let email = userDefaults.string(forKey: userEmailKey)
        
        if isLoggedIn && email != nil {
            isAuthenticated = true
            userEmail = email
        }
    }
    
    func login(email: String, password: String) async -> Bool {
        isLoading = true
        errorMessage = nil
        
        // Simulate API call - replace with actual authentication
        do {
            try await Task.sleep(nanoseconds: 1_000_000_000) // 1 second delay
            
            // For demo purposes, accept any email/password
            // In production, this would call your authentication API
            userDefaults.set(true, forKey: isLoggedInKey)
            userDefaults.set(email, forKey: userEmailKey)
            
            await MainActor.run {
                isAuthenticated = true
                userEmail = email
                isLoading = false
            }
            
            return true
        } catch {
            await MainActor.run {
                errorMessage = "Login failed. Please try again."
                isLoading = false
            }
            return false
        }
    }
    
    func loginWithGoogle() async -> Bool {
        isLoading = true
        errorMessage = nil
        
        // Implement Google Sign-In
        // This would integrate with Google Sign-In SDK
        do {
            try await Task.sleep(nanoseconds: 1_000_000_000)
            
            // For demo - replace with actual Google Sign-In
            let demoEmail = "user@example.com"
            userDefaults.set(true, forKey: isLoggedInKey)
            userDefaults.set(demoEmail, forKey: userEmailKey)
            
            await MainActor.run {
                isAuthenticated = true
                userEmail = demoEmail
                isLoading = false
            }
            
            return true
        } catch {
            await MainActor.run {
                errorMessage = "Google Sign-In failed. Please try again."
                isLoading = false
            }
            return false
        }
    }
    
    func logout() {
        userDefaults.removeObject(forKey: isLoggedInKey)
        userDefaults.removeObject(forKey: userEmailKey)
        isAuthenticated = false
        userEmail = nil
    }
}

