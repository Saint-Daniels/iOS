import SwiftUI

struct LoginView: View {
    @StateObject private var authManager = AuthenticationManager.shared
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var showError: Bool = false
    @State private var errorMessage: String = ""
    @State private var isLoading: Bool = false
    
    var body: some View {
        ZStack {
            // Background
            Color(red: 0.106, green: 0.224, blue: 0.184) // #1B392F
                .ignoresSafeArea()
            
            ScrollView {
                VStack(spacing: 30) {
                    Spacer()
                        .frame(height: 60)
                    
                    // Logo/Title
                    VStack(spacing: 10) {
                        Text("SAINT DANIELS")
                            .font(.system(size: 36, weight: .bold, design: .serif))
                            .foregroundColor(.white)
                        
                        Text("Welcome Back")
                            .font(.system(size: 24, weight: .medium))
                            .foregroundColor(.white.opacity(0.9))
                        
                        Text("Please sign in to your account")
                            .font(.system(size: 16))
                            .foregroundColor(.white.opacity(0.7))
                    }
                    .padding(.bottom, 40)
                    
                    // Login Form
                    VStack(spacing: 20) {
                        // Email Field
                        VStack(alignment: .leading, spacing: 8) {
                            Text("Email address")
                                .font(.system(size: 14, weight: .medium))
                                .foregroundColor(.white)
                            
                            TextField("Enter your email", text: $email)
                                .textFieldStyle(CustomTextFieldStyle())
                                .autocapitalization(.none)
                                .keyboardType(.emailAddress)
                        }
                        
                        // Password Field
                        VStack(alignment: .leading, spacing: 8) {
                            HStack {
                                Text("Password")
                                    .font(.system(size: 14, weight: .medium))
                                    .foregroundColor(.white)
                                
                                Spacer()
                                
                                Button("Forgot password?") {
                                    // Handle forgot password
                                }
                                .font(.system(size: 14))
                                .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384)) // #C4A962
                            }
                            
                            SecureField("Enter your password", text: $password)
                                .textFieldStyle(CustomTextFieldStyle())
                        }
                        
                        // Remember Me
                        HStack {
                            Toggle("Remember me", isOn: .constant(true))
                                .toggleStyle(SwitchToggleStyle(tint: Color(red: 0.769, green: 0.663, blue: 0.384)))
                                .font(.system(size: 14))
                                .foregroundColor(.white)
                            
                            Spacer()
                            
                            Button("Contact Us") {
                                // Handle contact
                            }
                            .font(.system(size: 14, weight: .medium))
                            .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384))
                        }
                        
                        // Error Message
                        if showError {
                            Text(errorMessage)
                                .font(.system(size: 14))
                                .foregroundColor(.red)
                                .padding(.top, 10)
                        }
                        
                        // Sign In Button
                        Button(action: handleLogin) {
                            HStack {
                                if isLoading {
                                    ProgressView()
                                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                                } else {
                                    Text("Sign In")
                                        .font(.system(size: 18, weight: .semibold))
                                }
                            }
                            .frame(maxWidth: .infinity)
                            .frame(height: 50)
                            .background(Color(red: 0.769, green: 0.663, blue: 0.384))
                            .foregroundColor(.white)
                            .cornerRadius(12)
                        }
                        .disabled(isLoading || email.isEmpty || password.isEmpty)
                        .opacity((isLoading || email.isEmpty || password.isEmpty) ? 0.6 : 1.0)
                        
                        // Start Enrollment Button
                        Button(action: {
                            // Handle enrollment
                        }) {
                            Text("Start Enrollment")
                                .font(.system(size: 18, weight: .semibold))
                                .frame(maxWidth: .infinity)
                                .frame(height: 50)
                                .background(Color.clear)
                                .foregroundColor(Color(red: 0.769, green: 0.663, blue: 0.384))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12)
                                        .stroke(Color(red: 0.769, green: 0.663, blue: 0.384), lineWidth: 2)
                                )
                        }
                    }
                    .padding(.horizontal, 30)
                    .padding(.vertical, 40)
                    .background(
                        RoundedRectangle(cornerRadius: 20)
                            .fill(Color.white.opacity(0.1))
                            .background(
                                RoundedRectangle(cornerRadius: 20)
                                    .fill(.ultraThinMaterial)
                            )
                    )
                    .padding(.horizontal, 20)
                    
                    Spacer()
                    
                    // Copyright
                    Text("© 2025 Saint Daniels Healthcare. All rights reserved.")
                        .font(.system(size: 12))
                        .foregroundColor(.white.opacity(0.6))
                        .padding(.bottom, 30)
                }
            }
        }
    }
    
    private func handleLogin() {
        guard !email.isEmpty && !password.isEmpty else {
            showError = true
            errorMessage = "Please enter both email and password."
            return
        }
        
        isLoading = true
        showError = false
        
        // Simulate login API call
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            authManager.login(email: email, password: password)
            isLoading = false
        }
    }
}

struct CustomTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .padding()
            .background(Color.white)
            .cornerRadius(10)
            .font(.system(size: 16))
    }
}

#Preview {
    LoginView()
}

