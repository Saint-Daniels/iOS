import UIKit

class DashboardViewController: UIViewController {
    
    private let headerView: UIView = {
        let view = UIView()
        view.backgroundColor = .systemBlue
        view.layer.shadowColor = UIColor.black.cgColor
        view.layer.shadowOffset = CGSize(width: 0, height: 2)
        view.layer.shadowRadius = 8
        view.layer.shadowOpacity = 0.1
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let welcomeLabel: UILabel = {
        let label = UILabel()
        label.text = "Welcome to Saint Daniels"
        label.textColor = .white
        label.font = .systemFont(ofSize: 24, weight: .bold)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let dateLabel: UILabel = {
        let label = UILabel()
        label.textColor = .white
        label.font = .systemFont(ofSize: 14)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let logoutButton: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Logout", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        return button
    }()
    
    private let scrollView: UIScrollView = {
        let scrollView = UIScrollView()
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.showsVerticalScrollIndicator = false
        return scrollView
    }()
    
    private let contentView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let statsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.spacing = 20
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    private let quickActionsView: UIView = {
        let view = UIView()
        view.backgroundColor = .systemGray6
        view.layer.cornerRadius = 12
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    private let quickActionsLabel: UILabel = {
        let label = UILabel()
        label.text = "Quick Actions"
        label.font = .systemFont(ofSize: 18, weight: .bold)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private let quickActionsStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.distribution = .fillEqually
        stackView.spacing = 15
        stackView.translatesAutoresizingMaskIntoConstraints = false
        return stackView
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        updateDateLabel()
    }
    
    private func setupUI() {
        view.backgroundColor = .systemBackground
        
        // Add header
        view.addSubview(headerView)
        headerView.addSubview(welcomeLabel)
        headerView.addSubview(dateLabel)
        headerView.addSubview(logoutButton)
        
        // Add scroll view
        view.addSubview(scrollView)
        scrollView.addSubview(contentView)
        contentView.addSubview(statsStackView)
        contentView.addSubview(quickActionsView)
        
        // Setup quick actions
        quickActionsView.addSubview(quickActionsLabel)
        quickActionsView.addSubview(quickActionsStackView)
        
        // Add some sample stat cards
        addStatCard(title: "Total Properties", value: "150", icon: "house.fill")
        addStatCard(title: "Active Listings", value: "45", icon: "tag.fill")
        addStatCard(title: "Pending Sales", value: "12", icon: "clock.fill")
        
        // Add quick action buttons
        addQuickActionButton(title: "New Listing", icon: "plus.circle.fill", color: .systemBlue)
        addQuickActionButton(title: "View Properties", icon: "list.bullet", color: .systemGreen)
        addQuickActionButton(title: "Analytics", icon: "chart.bar.fill", color: .systemOrange)
        
        NSLayoutConstraint.activate([
            headerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            headerView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            headerView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            headerView.heightAnchor.constraint(equalToConstant: 120),
            
            welcomeLabel.leadingAnchor.constraint(equalTo: headerView.leadingAnchor, constant: 20),
            welcomeLabel.topAnchor.constraint(equalTo: headerView.topAnchor, constant: 20),
            
            dateLabel.leadingAnchor.constraint(equalTo: headerView.leadingAnchor, constant: 20),
            dateLabel.topAnchor.constraint(equalTo: welcomeLabel.bottomAnchor, constant: 8),
            
            logoutButton.trailingAnchor.constraint(equalTo: headerView.trailingAnchor, constant: -20),
            logoutButton.centerYAnchor.constraint(equalTo: headerView.centerYAnchor),
            
            scrollView.topAnchor.constraint(equalTo: headerView.bottomAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            
            contentView.topAnchor.constraint(equalTo: scrollView.topAnchor),
            contentView.leadingAnchor.constraint(equalTo: scrollView.leadingAnchor),
            contentView.trailingAnchor.constraint(equalTo: scrollView.trailingAnchor),
            contentView.bottomAnchor.constraint(equalTo: scrollView.bottomAnchor),
            contentView.widthAnchor.constraint(equalTo: scrollView.widthAnchor),
            
            statsStackView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 20),
            statsStackView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 20),
            statsStackView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -20),
            
            quickActionsView.topAnchor.constraint(equalTo: statsStackView.bottomAnchor, constant: 30),
            quickActionsView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 20),
            quickActionsView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -20),
            quickActionsView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -20),
            
            quickActionsLabel.topAnchor.constraint(equalTo: quickActionsView.topAnchor, constant: 20),
            quickActionsLabel.leadingAnchor.constraint(equalTo: quickActionsView.leadingAnchor, constant: 20),
            
            quickActionsStackView.topAnchor.constraint(equalTo: quickActionsLabel.bottomAnchor, constant: 20),
            quickActionsStackView.leadingAnchor.constraint(equalTo: quickActionsView.leadingAnchor, constant: 20),
            quickActionsStackView.trailingAnchor.constraint(equalTo: quickActionsView.trailingAnchor, constant: -20),
            quickActionsStackView.bottomAnchor.constraint(equalTo: quickActionsView.bottomAnchor, constant: -20)
        ])
        
        logoutButton.addTarget(self, action: #selector(logoutButtonTapped), for: .touchUpInside)
    }
    
    private func updateDateLabel() {
        let formatter = DateFormatter()
        formatter.dateStyle = .long
        dateLabel.text = formatter.string(from: Date())
    }
    
    private func addStatCard(title: String, value: String, icon: String) {
        let cardView = UIView()
        cardView.backgroundColor = .systemGray6
        cardView.layer.cornerRadius = 12
        cardView.translatesAutoresizingMaskIntoConstraints = false
        
        let iconImageView = UIImageView()
        iconImageView.image = UIImage(systemName: icon)
        iconImageView.tintColor = .systemBlue
        iconImageView.contentMode = .scaleAspectFit
        iconImageView.translatesAutoresizingMaskIntoConstraints = false
        
        let titleLabel = UILabel()
        titleLabel.text = title
        titleLabel.font = .systemFont(ofSize: 16, weight: .medium)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        
        let valueLabel = UILabel()
        valueLabel.text = value
        valueLabel.font = .systemFont(ofSize: 24, weight: .bold)
        valueLabel.translatesAutoresizingMaskIntoConstraints = false
        
        cardView.addSubview(iconImageView)
        cardView.addSubview(titleLabel)
        cardView.addSubview(valueLabel)
        
        NSLayoutConstraint.activate([
            cardView.heightAnchor.constraint(equalToConstant: 100),
            
            iconImageView.leadingAnchor.constraint(equalTo: cardView.leadingAnchor, constant: 16),
            iconImageView.centerYAnchor.constraint(equalTo: cardView.centerYAnchor),
            iconImageView.widthAnchor.constraint(equalToConstant: 24),
            iconImageView.heightAnchor.constraint(equalToConstant: 24),
            
            titleLabel.leadingAnchor.constraint(equalTo: iconImageView.trailingAnchor, constant: 12),
            titleLabel.topAnchor.constraint(equalTo: cardView.topAnchor, constant: 16),
            
            valueLabel.leadingAnchor.constraint(equalTo: iconImageView.trailingAnchor, constant: 12),
            valueLabel.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 8),
            valueLabel.bottomAnchor.constraint(equalTo: cardView.bottomAnchor, constant: -16)
        ])
        
        statsStackView.addArrangedSubview(cardView)
        
        // Add animation
        cardView.alpha = 0
        cardView.transform = CGAffineTransform(translationX: 0, y: 20)
        UIView.animate(withDuration: 0.5, delay: 0.1 * Double(statsStackView.arrangedSubviews.count - 1)) {
            cardView.alpha = 1
            cardView.transform = .identity
        }
    }
    
    private func addQuickActionButton(title: String, icon: String, color: UIColor) {
        let button = UIButton(type: .system)
        button.setTitle(title, for: .normal)
        button.setImage(UIImage(systemName: icon), for: .normal)
        button.tintColor = color
        button.backgroundColor = color.withAlphaComponent(0.1)
        button.layer.cornerRadius = 12
        button.titleLabel?.font = .systemFont(ofSize: 14, weight: .medium)
        
        // Configure button layout
        button.imageEdgeInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 8)
        button.titleEdgeInsets = UIEdgeInsets(top: 0, left: 8, bottom: 0, right: 0)
        
        button.addTarget(self, action: #selector(quickActionTapped(_:)), for: .touchUpInside)
        quickActionsStackView.addArrangedSubview(button)
        
        // Add animation
        button.alpha = 0
        button.transform = CGAffineTransform(scaleX: 0.8, y: 0.8)
        UIView.animate(withDuration: 0.5, delay: 0.2 * Double(quickActionsStackView.arrangedSubviews.count - 1)) {
            button.alpha = 1
            button.transform = .identity
        }
    }
    
    @objc private func quickActionTapped(_ sender: UIButton) {
        UIView.animate(withDuration: 0.1, animations: {
            sender.transform = CGAffineTransform(scaleX: 0.95, y: 0.95)
        }) { _ in
            UIView.animate(withDuration: 0.1) {
                sender.transform = .identity
            }
        }
    }
    
    @objc private func logoutButtonTapped() {
        UIView.animate(withDuration: 0.2, animations: {
            self.view.alpha = 0
        }) { _ in
            self.dismiss(animated: true)
        }
    }
} 