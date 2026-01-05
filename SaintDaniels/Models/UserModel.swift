import Foundation

struct User: Codable, Identifiable {
    let id: UUID
    var email: String
    var name: String?
    var createdAt: Date
    
    init(id: UUID = UUID(), email: String, name: String? = nil, createdAt: Date = Date()) {
        self.id = id
        self.email = email
        self.name = name
        self.createdAt = createdAt
    }
}

// Authentication Manager
class AuthenticationManager: ObservableObject {
    static let shared = AuthenticationManager()
    
    @Published var isAuthenticated: Bool = false
    @Published var currentUser: User?
    
    private let userDefaults = UserDefaults.standard
    private let isAuthenticatedKey = "isAuthenticated"
    private let userEmailKey = "userEmail"
    
    private init() {
        loadAuthenticationState()
    }
    
    func login(email: String, password: String) {
        // In a real app, this would make an API call
        // For now, we'll just store the authentication state
        let user = User(email: email)
        currentUser = user
        isAuthenticated = true
        
        userDefaults.set(true, forKey: isAuthenticatedKey)
        userDefaults.set(email, forKey: userEmailKey)
    }
    
    func logout() {
        currentUser = nil
        isAuthenticated = false
        
        userDefaults.removeObject(forKey: isAuthenticatedKey)
        userDefaults.removeObject(forKey: userEmailKey)
    }
    
    private func loadAuthenticationState() {
        if userDefaults.bool(forKey: isAuthenticatedKey),
           let email = userDefaults.string(forKey: userEmailKey) {
            let user = User(email: email)
            currentUser = user
            isAuthenticated = true
        }
    }
}

