//
//  SaintDanielsApp.swift
//  SaintDaniels
//
//  Created for Saint Daniels Healthcare Rewards
//

import SwiftUI

@main
struct SaintDanielsApp: App {
    @StateObject private var authManager = AuthenticationManager()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(authManager)
        }
    }
}

