// Enhanced Mobile Menu and Core Functionality for Fiye Foods
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeImageLoading();
    loadTodaysSpecials();
    initializeComponents();
});

// Enhanced Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.querySelector('body');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Toggle body scroll to prevent background scrolling
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }

            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
                
                // Reset hamburger animation
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
                
                // Reset hamburger animation
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
                
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Image loading with error handling
function initializeImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Handle successful load
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            // Hide placeholder if it exists
            const placeholder = this.parentElement.querySelector('.placeholder-image');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        });
        
        // Handle loading errors
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            this.style.display = 'none';
            
            // Show placeholder
            const placeholder = this.parentElement.querySelector('.placeholder-image');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
        
        // Set initial state
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
        }
    });
}

// Function to load today's specials
function loadTodaysSpecials() {
    const specials = [
        {
            name: "Fiye Party Jollof",
            description: "Our signature smoky jollof rice with chicken and plantain",
            price: 3500,
            image: "images/gallery/rice/fiye-party-jollof.jpg"
        },
        {
            name: "Bole & Fish Wednesday",
            description: "Grilled plantain with spicy fish and Fiye Secret Sauce",
            price: 4000,
            image: "images/gallery/grills/bole-and-fish-wednesday.jpg"
        },
        {
            name: "Assorted Peppersoup",
            description: "Beef, goat meat, and chicken with special sauce",
            price: 4500,
            image: "images/gallery/proteins/assorted-peppersoup.jpg"
        }
    ];
    
    // Update the specials grid with actual data
    const specialsGrid = document.getElementById('specials-container');
    if (specialsGrid) {
        specialsGrid.innerHTML = '';
        
        specials.forEach(special => {
            const specialItem = document.createElement('div');
            specialItem.className = 'special-item';
            specialItem.innerHTML = `
                <div class="special-image">
                    <img src="${special.image}" alt="${special.name}" onerror="this.style.display='none'">
                    <div class="placeholder-image">
                        <i class="fas fa-utensils"></i>
                        <span>${special.name}</span>
                    </div>
                </div>
                <div class="special-content">
                    <h3>${special.name}</h3>
                    <p>${special.description}</p>
                    <div class="special-price">₦${special.price.toLocaleString()}</div>
                    <button class="btn btn-primary add-to-cart" 
                            data-item="${special.name}" 
                            data-price="${special.price}">
                        <i class="fab fa-whatsapp"></i> Order Now
                    </button>
                </div>
            `;
            specialsGrid.appendChild(specialItem);
        });
    }
}

// Initialize other components
function initializeComponents() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            
            orderItem(itemName, itemPrice);
        });
    });

    // Form handling
    initializeForms();
    
    // Lazy loading for images
    initializeLazyLoading();
}

// WhatsApp order function
function orderItem(itemName, itemPrice) {
    const message = `Hello Fiye Foods! I would like to order:\n\n🍽️ ${itemName}\n💵 ₦${parseInt(itemPrice).toLocaleString()}\n\nPlease let me know the delivery details.`;
    const whatsappUrl = `https://wa.me/2348057266953?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation
    showNotification(`Order request sent for ${itemName}!`);
}

// Form handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const whatsappMessage = `Hello Fiye Foods! I have an inquiry:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const whatsappUrl = `https://wa.me/2348057266953?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            showNotification('Thank you! Your message has been sent via WhatsApp.');
            this.reset();
        });
    }

    // Event booking form
    const eventForm = document.getElementById('event-booking-form');
    if (eventForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }

        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const eventType = formData.get('event-type');
            const guests = formData.get('guests');
            const date = formData.get('date');
            const package = formData.get('package');
            
            const message = `Hello Fiye Foods! I would like to book an event:\n\n👤 Name: ${name}\n🎉 Event Type: ${eventType}\n👥 Guests: ${guests}\n📅 Date: ${date}\n📦 Package: ${package}\n\nPlease contact me to discuss further details.`;
            const whatsappUrl = `https://wa.me/2348057266953?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
            showNotification(`Thank you ${name}! Your ${eventType} booking request has been sent.`);
            this.reset();
        });
    }
}

// Initialize lazy loading for images
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success, #10b981)' : 'var(--error, #ef4444)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        font-family: inherit;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .scale-in');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => observer.observe(el));
    }
}

// QR Code Menu Integration
function generateQRCodeMenu() {
    const menuUrl = window.location.origin + '/menu.html';
    console.log("QR Code menu generated for: " + menuUrl);
    
    // In a real implementation, you would generate a QR code here
    // For now, we'll show a notification
    showNotification("QR Code menu is available at: " + menuUrl);
    
    // You can integrate with a QR code library like:
    // QRCode.toCanvas(document.getElementById('qr-canvas'), menuUrl, function (error) {
    //   if (error) console.error(error)
    //   console.log('QR code generated!');
    // })
}

// Handle page visibility changes (for performance)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden - pause any animations or videos
        console.log('Page is now hidden');
    } else {
        // Page is visible - resume animations
        console.log('Page is now visible');
    }
});

// Add resize handler for responsive behavior
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Close mobile menu on large screens
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            const body = document.querySelector('body');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                body.style.overflow = '';
                
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }, 250);
});

// Export functions for global access (if needed)
window.orderItem = orderItem;
window.showNotification = showNotification;
window.generateQRCodeMenu = generateQRCodeMenu;