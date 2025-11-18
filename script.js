// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 22, 40, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.95)';
    }
});

// Load and display articles - Wired/Make style with categories
function loadArticles() {
    const articlesGrid = document.getElementById('articlesGrid');

    if (!articlesData || articlesData.length === 0) {
        articlesGrid.innerHTML = '<p>No articles available at the moment.</p>';
        return;
    }

    // Get featured article
    const featured = articlesData.find(a => a.featured);

    // Get articles by category
    const categories = ['Human Performance', 'Environment', 'Technology', 'Science', 'Innovation', 'Future'];

    let html = '';

    // Featured article section
    if (featured) {
        html += `
            <div class="featured-article" data-id="${featured.id}">
                <div class="featured-image">
                    <img src="${featured.image}" alt="${featured.title}" loading="lazy">
                    <span class="category-tag featured-tag">${featured.category}</span>
                </div>
                <div class="featured-content">
                    <h2 class="featured-title">${featured.title}</h2>
                    <p class="featured-subtitle">${featured.subtitle}</p>
                    <div class="article-meta">
                        <span class="read-time">${featured.readTime} read</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Category sections
    categories.forEach(category => {
        const categoryArticles = articlesData.filter(a => a.category === category && !a.featured);

        if (categoryArticles.length > 0) {
            html += `
                <div class="category-section">
                    <h3 class="category-title">${category}</h3>
                    <div class="category-grid">
                        ${categoryArticles.map(article => `
                            <article class="article-card" data-id="${article.id}">
                                <div class="article-image-wrapper">
                                    <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
                                    <span class="category-tag">${article.category}</span>
                                </div>
                                <div class="article-content">
                                    <h4 class="article-title">${article.title}</h4>
                                    <p class="article-subtitle">${article.subtitle}</p>
                                    <span class="read-time">${article.readTime} read</span>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });

    articlesGrid.innerHTML = html;

    // Add click event to all article cards and featured article
    const allArticles = document.querySelectorAll('.article-card, .featured-article');
    allArticles.forEach(card => {
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-id');
            window.location.href = `article-template.html?id=${articleId}`;
        });
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    
    // Simulate form submission
    formMessage.textContent = 'Thank you for subscribing! Check your email for confirmation.';
    formMessage.style.color = '#00d4ff';
    emailInput.value = '';
    
    // Reset message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    contactMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
    contactMessage.style.color = '#00d4ff';
    contactForm.reset();
    
    // Reset message after 5 seconds
    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Search functionality
let allArticlesData = [];

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    // Store all articles data
    allArticlesData = articlesData;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm.length > 0) {
            clearSearch.style.display = 'block';
            performSearch(searchTerm);
        } else {
            clearSearch.style.display = 'none';
            searchResults.textContent = '';
            searchResults.classList.remove('active');
            loadArticles(); // Reload all articles
        }
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.style.display = 'none';
        searchResults.textContent = '';
        searchResults.classList.remove('active');
        loadArticles(); // Reload all articles
    });
}

function performSearch(searchTerm) {
    const searchResults = document.getElementById('searchResults');
    const articlesGrid = document.getElementById('articlesGrid');

    // Filter articles based on search term
    const filteredArticles = allArticlesData.filter(article => {
        return (
            article.title.toLowerCase().includes(searchTerm) ||
            article.subtitle.toLowerCase().includes(searchTerm) ||
            article.category.toLowerCase().includes(searchTerm)
        );
    });

    // Update search results text
    if (filteredArticles.length > 0) {
        searchResults.textContent = `Found ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''}`;
        searchResults.classList.add('active');
    } else {
        searchResults.textContent = 'No articles found. Try a different search term.';
        searchResults.classList.remove('active');
    }

    // Display filtered articles
    displayFilteredArticles(filteredArticles);
}

function displayFilteredArticles(articles) {
    const articlesGrid = document.getElementById('articlesGrid');

    if (articles.length === 0) {
        articlesGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 3rem;">No articles match your search.</p>';
        return;
    }

    // Group by category
    const categories = ['Human Performance', 'Environment', 'Technology', 'Science', 'Innovation', 'Future'];
    let html = '';

    categories.forEach(category => {
        const categoryArticles = articles.filter(a => a.category === category);

        if (categoryArticles.length > 0) {
            html += `
                <div class="category-section">
                    <h3 class="category-title">${category}</h3>
                    <div class="category-grid">
                        ${categoryArticles.map(article => `
                            <article class="article-card" data-id="${article.id}">
                                <div class="article-image-wrapper">
                                    <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
                                    <span class="category-tag">${article.category}</span>
                                </div>
                                <div class="article-content">
                                    <h4 class="article-title">${article.title}</h4>
                                    <p class="article-subtitle">${article.subtitle}</p>
                                    <span class="read-time">${article.readTime} read</span>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });

    articlesGrid.innerHTML = html;

    // Add click event to all article cards
    const allArticleCards = document.querySelectorAll('.article-card');
    allArticleCards.forEach(card => {
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-id');
            window.location.href = `article-template.html?id=${articleId}`;
        });
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load articles
    loadArticles();

    // Initialize search
    initializeSearch();

    // Observe article cards for animation
    setTimeout(() => {
        const articleCards = document.querySelectorAll('.article-card');
        articleCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

