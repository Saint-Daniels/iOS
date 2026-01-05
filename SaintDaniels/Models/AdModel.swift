import Foundation

struct Ad: Identifiable, Codable {
    let id: UUID
    let brand: String
    let subject: String
    let preview: String
    let description: String
    let earnings: Double
    let date: String
    var isRead: Bool
    var isWatched: Bool
    let category: String
    
    init(id: UUID = UUID(), brand: String, subject: String, preview: String, description: String = "", earnings: Double, date: String, isRead: Bool = false, isWatched: Bool = false, category: String) {
        self.id = id
        self.brand = brand
        self.subject = subject
        self.preview = preview
        self.description = description.isEmpty ? preview : description
        self.earnings = earnings
        self.date = date
        self.isRead = isRead
        self.isWatched = isWatched
        self.category = category
    }
}

