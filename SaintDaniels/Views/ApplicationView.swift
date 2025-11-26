//
//  ApplicationView.swift
//  SaintDaniels
//
//  Health insurance enrollment application form
//

import SwiftUI

struct ApplicationView: View {
    @State private var currentStep = 1
    @State private var showDisclaimer = true
    @State private var formData = ApplicationFormData()
    @State private var showSignaturePad = false
    
    var body: some View {
        NavigationView {
            ZStack {
                if showDisclaimer {
                    LegalDisclaimerView(showDisclaimer: $showDisclaimer)
                } else {
                    ScrollView {
                        VStack(spacing: 20) {
                            // Progress indicator
                            ProgressView(value: Double(currentStep), total: 6)
                                .padding()
                            
                            // Step content
                            Group {
                                switch currentStep {
                                case 1:
                                    PersonalInfoStep(formData: $formData)
                                case 2:
                                    FamilyInfoStep(formData: $formData)
                                case 3:
                                    AddressStep(formData: $formData)
                                case 4:
                                    InsuranceInfoStep(formData: $formData)
                                case 5:
                                    ReviewStep(formData: $formData)
                                case 6:
                                    SignatureStep(formData: $formData, showSignaturePad: $showSignaturePad)
                                default:
                                    Text("Unknown step")
                                }
                            }
                            
                            // Navigation buttons
                            HStack {
                                if currentStep > 1 {
                                    Button("Previous") {
                                        withAnimation {
                                            currentStep -= 1
                                        }
                                    }
                                    .buttonStyle(SecondaryButtonStyle())
                                }
                                
                                Spacer()
                                
                                if currentStep < 6 {
                                    Button("Next") {
                                        if validateStep(currentStep) {
                                            withAnimation {
                                                currentStep += 1
                                            }
                                        }
                                    }
                                    .buttonStyle(PrimaryButtonStyle())
                                } else {
                                    Button("Submit") {
                                        submitApplication()
                                    }
                                    .buttonStyle(PrimaryButtonStyle())
                                }
                            }
                            .padding()
                        }
                    }
                    .navigationTitle("Application")
                    .navigationBarTitleDisplayMode(.inline)
                }
            }
        }
        .sheet(isPresented: $showSignaturePad) {
            SignaturePadView(signature: $formData.signatureData)
        }
    }
    
    func validateStep(_ step: Int) -> Bool {
        switch step {
        case 1:
            return !formData.firstName.isEmpty && !formData.lastName.isEmpty && !formData.email.isEmpty
        case 2:
            return true // Family info is optional
        case 3:
            return !formData.streetAddress.isEmpty && !formData.city.isEmpty && !formData.state.isEmpty && !formData.zipCode.isEmpty
        case 4:
            return true // Insurance info is optional
        default:
            return true
        }
    }
    
    func submitApplication() {
        // Submit application to API
        print("Submitting application...")
    }
}

struct ApplicationFormData {
    // Personal Information
    var firstName = ""
    var middleName = ""
    var lastName = ""
    var suffix = ""
    var email = ""
    var phone = ""
    var dateOfBirth = Date()
    var ssn = ""
    var stateOfOrigin = ""
    
    // Family Information
    var isMarried = false
    var hasChildren = false
    var isClaimedOnTaxes = false
    var taxFilingStatus = ""
    var spouseFirstName = ""
    var spouseLastName = ""
    var spouseDateOfBirth = Date()
    var spouseSSN = ""
    var dependents: [Dependent] = []
    
    // Address
    var streetAddress = ""
    var city = ""
    var state = ""
    var zipCode = ""
    var country = "United States"
    var sameAsResidential = true
    var mailingStreet = ""
    var mailingCity = ""
    var mailingState = ""
    var mailingZip = ""
    
    // Insurance
    var hasExistingInsurance = false
    var existingInsuranceType = ""
    var healthInsuranceProvider = ""
    var deductible = ""
    
    // Signature
    var signatureData: Data?
    var signatureConsent = false
}

struct Dependent {
    var firstName = ""
    var lastName = ""
    var dateOfBirth = Date()
    var ssn = ""
}

struct PersonalInfoStep: View {
    @Binding var formData: ApplicationFormData
    
    var body: some View {
        Form {
            Section(header: Text("Personal Information")) {
                TextField("First Name *", text: $formData.firstName)
                TextField("Middle Name", text: $formData.middleName)
                TextField("Last Name *", text: $formData.lastName)
                TextField("Suffix", text: $formData.suffix)
                
                TextField("Email *", text: $formData.email)
                    .keyboardType(.emailAddress)
                    .autocapitalization(.none)
                
                TextField("Phone", text: $formData.phone)
                    .keyboardType(.phonePad)
                
                DatePicker("Date of Birth", selection: $formData.dateOfBirth, displayedComponents: .date)
                
                SecureField("SSN", text: $formData.ssn)
                    .keyboardType(.numberPad)
                
                TextField("State of Origin", text: $formData.stateOfOrigin)
            }
        }
    }
}

struct FamilyInfoStep: View {
    @Binding var formData: ApplicationFormData
    
    var body: some View {
        Form {
            Section(header: Text("Family Information")) {
                Toggle("Married", isOn: $formData.isMarried)
                Toggle("Has Children", isOn: $formData.hasChildren)
                Toggle("Claimed on Taxes", isOn: $formData.isClaimedOnTaxes)
                
                if formData.isMarried {
                    TextField("Spouse First Name", text: $formData.spouseFirstName)
                    TextField("Spouse Last Name", text: $formData.spouseLastName)
                    DatePicker("Spouse Date of Birth", selection: $formData.spouseDateOfBirth, displayedComponents: .date)
                    SecureField("Spouse SSN", text: $formData.spouseSSN)
                        .keyboardType(.numberPad)
                }
            }
        }
    }
}

struct AddressStep: View {
    @Binding var formData: ApplicationFormData
    
    var body: some View {
        Form {
            Section(header: Text("Residential Address")) {
                TextField("Street Address *", text: $formData.streetAddress)
                TextField("City *", text: $formData.city)
                TextField("State *", text: $formData.state)
                TextField("ZIP Code *", text: $formData.zipCode)
                    .keyboardType(.numberPad)
                TextField("Country", text: $formData.country)
            }
            
            Section(header: Text("Mailing Address")) {
                Toggle("Same as Residential", isOn: $formData.sameAsResidential)
                
                if !formData.sameAsResidential {
                    TextField("Street Address", text: $formData.mailingStreet)
                    TextField("City", text: $formData.mailingCity)
                    TextField("State", text: $formData.mailingState)
                    TextField("ZIP Code", text: $formData.mailingZip)
                        .keyboardType(.numberPad)
                }
            }
        }
    }
}

struct InsuranceInfoStep: View {
    @Binding var formData: ApplicationFormData
    
    var body: some View {
        Form {
            Section(header: Text("Insurance Information")) {
                Toggle("Has Existing Insurance", isOn: $formData.hasExistingInsurance)
                
                if formData.hasExistingInsurance {
                    TextField("Insurance Type", text: $formData.existingInsuranceType)
                    TextField("Health Insurance Provider", text: $formData.healthInsuranceProvider)
                    TextField("Deductible", text: $formData.deductible)
                        .keyboardType(.decimalPad)
                }
            }
        }
    }
}

struct ReviewStep: View {
    @Binding var formData: ApplicationFormData
    
    var body: some View {
        Form {
            Section(header: Text("Review Your Information")) {
                Text("Name: \(formData.firstName) \(formData.lastName)")
                Text("Email: \(formData.email)")
                Text("Phone: \(formData.phone)")
                Text("Address: \(formData.streetAddress), \(formData.city), \(formData.state) \(formData.zipCode)")
            }
        }
    }
}

struct SignatureStep: View {
    @Binding var formData: ApplicationFormData
    @Binding var showSignaturePad: Bool
    
    var body: some View {
        Form {
            Section(header: Text("Signature")) {
                Button(action: {
                    showSignaturePad = true
                }) {
                    HStack {
                        Image(systemName: "pencil")
                        Text(formData.signatureData == nil ? "Sign Here" : "Signature Captured - Tap to Change")
                    }
                }
                
                Toggle("I consent to the terms and conditions", isOn: $formData.signatureConsent)
            }
        }
    }
}

struct SignaturePadView: View {
    @Binding var signature: Data?
    @Environment(\.dismiss) var dismiss
    @State private var drawing = Path()
    @State private var points: [CGPoint] = []
    
    var body: some View {
        NavigationView {
            VStack {
                ZStack {
                    Color.white
                    
                    Canvas { context, size in
                        var path = Path()
                        if !points.isEmpty {
                            path.move(to: points[0])
                            for point in points.dropFirst() {
                                path.addLine(to: point)
                            }
                        }
                        context.stroke(path, with: .color(.black), lineWidth: 2)
                    }
                    .gesture(
                        DragGesture(minimumDistance: 0)
                            .onChanged { value in
                                points.append(value.location)
                            }
                    )
                }
                .frame(height: 300)
                .border(Color.gray, width: 1)
                
                HStack {
                    Button("Clear") {
                        points.removeAll()
                    }
                    .buttonStyle(SecondaryButtonStyle())
                    
                    Spacer()
                    
                    Button("Done") {
                        // Convert points to data (simplified)
                        signature = Data()
                        dismiss()
                    }
                    .buttonStyle(PrimaryButtonStyle())
                }
                .padding()
            }
            .navigationTitle("Sign")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

struct LegalDisclaimerView: View {
    @Binding var showDisclaimer: Bool
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Legal Disclaimer")
                .font(.title)
                .fontWeight(.bold)
            
            ScrollView {
                Text("""
                By proceeding with this application, you acknowledge that:
                
                1. All information provided is accurate and truthful
                2. You understand the terms and conditions of the healthcare rewards program
                3. You consent to the collection and use of your personal information
                4. You are eligible to participate in this program
                
                Please review all information carefully before submitting.
                """)
                .padding()
            }
            
            Button("I Agree") {
                showDisclaimer = false
            }
            .buttonStyle(PrimaryButtonStyle())
            .padding()
        }
        .padding()
    }
}

struct PrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundColor(.white)
            .padding()
            .frame(maxWidth: .infinity)
            .background(
                LinearGradient(
                    gradient: Gradient(colors: [Color(red: 0.2, green: 0.33, blue: 0.19), Color(red: 0.77, green: 0.66, blue: 0.38)]),
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .cornerRadius(10)
            .scaleEffect(configuration.isPressed ? 0.95 : 1.0)
    }
}

struct SecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundColor(.primary)
            .padding()
            .frame(maxWidth: .infinity)
            .background(Color.gray.opacity(0.2))
            .cornerRadius(10)
            .scaleEffect(configuration.isPressed ? 0.95 : 1.0)
    }
}

struct ApplicationView_Previews: PreviewProvider {
    static var previews: some View {
        ApplicationView()
    }
}

