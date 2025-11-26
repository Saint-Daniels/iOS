//
//  MainTabView.swift
//  SaintDaniels
//
//  Main tab navigation
//

import SwiftUI

struct MainTabView: View {
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            HomeView()
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("Home")
                }
                .tag(0)
            
            DashboardView()
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                    Text("Dashboard")
                }
                .tag(1)
            
            ApplicationView()
                .tabItem {
                    Image(systemName: "doc.text.fill")
                    Text("Application")
                }
                .tag(2)
            
            ResourcesView()
                .tabItem {
                    Image(systemName: "folder.fill")
                    Text("Resources")
                }
                .tag(3)
            
            ProfileView()
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("Profile")
                }
                .tag(4)
        }
        .accentColor(Color(red: 0.2, green: 0.33, blue: 0.19))
    }
}

struct MainTabView_Previews: PreviewProvider {
    static var previews: some View {
        MainTabView()
            .environmentObject(AuthenticationManager())
    }
}

