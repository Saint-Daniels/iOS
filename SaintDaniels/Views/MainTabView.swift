import SwiftUI

struct MainTabView: View {
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            WalletView()
                .tabItem {
                    Label("Wallet", systemImage: "wallet.pass")
                }
                .tag(0)
            
            MailboxView()
                .tabItem {
                    Label("Mailbox", systemImage: "envelope.fill")
                }
                .tag(1)
            
            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape.fill")
                }
                .tag(2)
        }
        .accentColor(Color(red: 0.769, green: 0.663, blue: 0.384)) // #C4A962
    }
}

#Preview {
    MainTabView()
}

