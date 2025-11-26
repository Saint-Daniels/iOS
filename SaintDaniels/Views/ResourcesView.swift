//
//  ResourcesView.swift
//  SaintDaniels
//
//  Resources and documents page
//

import SwiftUI

struct ResourcesView: View {
    let documents = [
        ResourceDocument(title: "Healthcare Rewards Program Guide", description: "Complete guide to understanding how private subsidies work", icon: "book.fill", color: Color(red: 0.2, green: 0.33, blue: 0.19)),
        ResourceDocument(title: "Compound Interest Vault Guide", description: "Detailed explanation of how unused rewards grow", icon: "doc.text.fill", color: Color(red: 0.77, green: 0.66, blue: 0.38)),
        ResourceDocument(title: "Pharmacy Network Directory", description: "Comprehensive list of participating pharmacies", icon: "list.bullet", color: Color(red: 0.2, green: 0.33, blue: 0.19)),
        ResourceDocument(title: "Rewards Application Form", description: "Complete application form to enroll in the program", icon: "doc.fill", color: Color(red: 0.77, green: 0.66, blue: 0.38)),
        ResourceDocument(title: "Privacy Policy", description: "Our commitment to protecting your privacy", icon: "lock.shield.fill", color: Color(red: 0.2, green: 0.33, blue: 0.19)),
        ResourceDocument(title: "Terms of Service", description: "Terms and conditions for using our services", icon: "doc.text.fill", color: Color(red: 0.77, green: 0.66, blue: 0.38))
    ]
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    Text("Resources & Documents")
                        .font(.title)
                        .fontWeight(.bold)
                        .padding(.top)
                    
                    ForEach(documents) { document in
                        ResourceDocumentCard(document: document)
                    }
                    .padding(.horizontal)
                }
                .padding(.bottom)
            }
            .navigationTitle("Resources")
            .navigationBarTitleDisplayMode(.large)
        }
    }
}

struct ResourceDocument: Identifiable {
    let id = UUID()
    let title: String
    let description: String
    let icon: String
    let color: Color
}

struct ResourceDocumentCard: View {
    let document: ResourceDocument
    
    var body: some View {
        HStack(spacing: 15) {
            Image(systemName: document.icon)
                .font(.system(size: 30))
                .foregroundColor(document.color)
                .frame(width: 50, height: 50)
                .background(document.color.opacity(0.1))
                .cornerRadius(10)
            
            VStack(alignment: .leading, spacing: 5) {
                Text(document.title)
                    .font(.headline)
                
                Text(document.description)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                    .lineLimit(2)
            }
            
            Spacer()
            
            Image(systemName: "chevron.right")
                .foregroundColor(.secondary)
        }
        .padding()
        .background(Color.white)
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.1), radius: 5, x: 0, y: 2)
    }
}

struct ResourcesView_Previews: PreviewProvider {
    static var previews: some View {
        ResourcesView()
    }
}

