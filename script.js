// Data storage - loaded from JSON files
let data = {
    branding: null,
    services: null,
    portfolio: null,
    stats: null,
    contact: null
};

// JSON file loader with error handling
async function loadJSON(filename) {
    try {
        const response = await fetch(`data/${filename}`);
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        
        // Return fallback data if JSON loading fails
        return getFallbackData(filename);
    }
}

// Fallback data in case JSON files can't be loaded
function getFallbackData(filename) {
    const fallbacks = {
        'branding.json': {
            logo: { icon: "Palette", text: "GFX Town", showIcon: true },
            socialMedia: { instagram: { url: "https://www.instagram.com/gfx.tw/", icon: "Instagram" }}
        },
        'services.json': [
            {
                title: "Logo Design",
                description: "Professional logo design that captures your brand's essence and makes a lasting impression.",
                icon: "🎨",
                features: ["Custom Design", "Multiple Concepts", "Vector Files", "Brand Guidelines"],
                price: "$299+",
                color: "text-primary"
            },
            {
                title: "Video Graphics", 
                description: "Motion graphics and video editing that bring your content to life with stunning animations.",
                icon: "🎬",
                features: ["Motion Graphics", "Video Editing", "Animations", "Color Grading"],
                price: "$499+",
                color: "text-accent" 
            },
            {
                title: "Brand Identity",
                description: "Complete brand identity packages including logo, colors, typography, and brand guidelines.",
                icon: "✨",
                features: ["Logo & Variations", "Color Palette", "Typography", "Brand Book"],
                price: "$799+",
                color: "text-secondary"
            }
        ],
        'portfolio.json': [
            {
                title: "Tech Startup Logo",
                description: "Modern logo design for innovative tech company", 
                category: "graphics",
                imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                featured: true
            },
            {
                title: "Brand Identity Package",
                description: "Complete branding solution for creative agency",
                category: "graphics", 
                imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                featured: true
            },
            {
                title: "Motion Graphics Video",
                description: "Dynamic animated video for product launch",
                category: "video",
                imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", 
                featured: true
            }
        ],
        'stats.json': [
            { value: "500+", label: "Projects Completed", color: "text-primary" },
            { value: "200+", label: "Happy Clients", color: "text-accent" },
            { value: "5+", label: "Years Experience", color: "text-secondary" },
            { value: "24/7", label: "Support", color: "text-primary" }
        ],
        'contact.json': {
            email: "workforgraphixtown@gmail.com",
            responseTime: "We typically respond to all inquiries within 24 hours.",
            availability: "Currently Available"
        }
    };
    
    return fallbacks[filename] || null;
}

// Load all data from JSON files
async function loadAllData() {
    try {
        console.log('Loading website data from JSON files...');
        
        // Load all JSON files in parallel for better performance
        const [branding, services, portfolio, stats, contact] = await Promise.all([
            loadJSON('branding.json'),
            loadJSON('services.json'), 
            loadJSON('portfolio.json'),
            loadJSON('stats.json'),
            loadJSON('contact.json')
        ]);
        
        // Store loaded data
        data.branding = branding;
        data.services = services;
        data.portfolio = portfolio;
        data.stats = stats;
        data.contact = contact;
        
        console.log('All data loaded successfully');
        return true;
        
    } catch (error) {
        console.error('Failed to load website data:', error);
        showNotification('Some content may not display correctly due to loading issues.', 'error');
        return false;
    }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async function() {
    await initializeApp();
});

async function initializeApp() {
    // Show loading indicator
    showLoadingIndicator();
    
    // Load JSON data first
    const success = await loadAllData();
    
    if (success) {
        // Initialize app components
        setupMobileMenu();
        setupSmoothScrolling();
        setupActiveNavigation();
        loadContent();
        setupPortfolioFilters();
        setupContactForm();
        setupScrollAnimations();
        
        // Update branding
        updateBranding();
    }
    
    // Hide loading indicator
    hideLoadingIndicator();
}

// Loading indicator functions
function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.id = 'loading-indicator';
    loader.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading GFX Town...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: var(--text-primary);
    `;
    
    const spinner = document.createElement('style');
    spinner.textContent = `
        .loading-spinner {
            text-align: center;
        }
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--border);
            border-top: 4px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinner);
    document.body.appendChild(loader);
}

function hideLoadingIndicator() {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s ease';
        setTimeout(() => loader.remove(), 300);
    }
}

// Update branding elements from JSON data
function updateBranding() {
    if (!data.branding) return;
    
    // Update logo text in navigation and footer
    const logoElements = document.querySelectorAll('.logo-text');
    logoElements.forEach(element => {
        element.textContent = data.branding.logo.text;
    });
    
    // Update page title
    document.title = `${data.branding.logo.text} - Professional Graphic Design Services`;
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active Navigation Highlighting
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Load Content from Static Data
function loadContent() {
    loadServices();
    loadPortfolio();
    loadStats();
    loadContact();
}

function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = data.services.map(service => `
        <div class="service-card fade-in">
            <div class="service-icon">
                ${service.icon}
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="service-price">${service.price}</div>
        </div>
    `).join('');
}

function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = data.portfolio.map(item => `
        <div class="portfolio-item fade-in" data-category="${item.category}">
            <div class="portfolio-image">
                <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <div class="portfolio-category">${item.category}</div>
                </div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function loadStats() {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;

    statsGrid.innerHTML = data.stats.map(stat => `
        <div class="stat-card fade-in">
            <div class="stat-value ${stat.color}">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

function loadContact() {
    const contactEmail = document.getElementById('contact-email');
    const responseTime = document.getElementById('response-time');
    const availability = document.getElementById('availability');

    if (contactEmail) contactEmail.textContent = data.contact.email;
    if (responseTime) responseTime.textContent = data.contact.responseTime;
    if (availability) availability.textContent = data.contact.availability;
}

// Portfolio Filters
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Contact Form Handler
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = `New Inquiry from ${name} - ${service}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:${data.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Thank you! Your email client will open with the pre-filled message.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .portfolio-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 16px;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-success {
        border-left: 4px solid var(--primary);
    }
    
    .notification-error {
        border-left: 4px solid #ef4444;
    }
    
    .notification-info {
        border-left: 4px solid var(--accent);
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Preload images for better performance
function preloadImages() {
    data.portfolio.forEach(item => {
        const img = new Image();
        img.src = item.imageUrl;
    });
}

// Initialize image preloading
preloadImages();

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('GFX Town website loaded successfully');
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Failed to load image:', e.target.src);
    }
}, true);