// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Load today's specials
    loadTodaysSpecials();
    
    // Initialize any other components
    initializeComponents();
});

// Function to load today's specials
function loadTodaysSpecials() {
    const specials = [
        {
            name: "Fiye Party Jollof",
            description: "Our signature smoky jollof rice with chicken and plantain",
            price: 3500,
            image: "placeholder"
        },
        {
            name: "Bole & Fish",
            description: "Grilled plantain with spicy fish",
            price: 4200,
            image: "placeholder"
        },
        {
            name: "Goat Pepper Soup",
            description: "Spicy goat meat pepper soup",
            price: 2800,
            image: "placeholder"
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
                    <div class="placeholder-image">${special.name}</div>
                </div>
                <div class="special-content">
                    <h3>${special.name}</h3>
                    <p>${special.description}</p>
                    <div class="special-price">₦${special.price.toLocaleString()}</div>
                </div>
            `;
            specialsGrid.appendChild(specialItem);
        });
    }
}

// Initialize other components
function initializeComponents() {
    // Add any additional initialization code here
    
    // Example: Add to cart functionality (placeholder)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            
            // This would connect to a shopping cart API in production
            console.log(`Added ${itemName} to cart for ₦${itemPrice}`);
            
            // Show confirmation
            showNotification(`Added ${itemName} to your order!`);
        });
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// QR Code Menu Integration
function generateQRCodeMenu() {
    // This function would generate a QR code for the menu page
    // In production, this would connect to a QR code generation API
    console.log("QR Code menu generated for: " + window.location.origin + "/menu.html");
    
    // Placeholder for QR code generation
    showNotification("QR Code menu ready for scanning!");
}
// Add this to your existing script.js file
// Mobile menu toggle (ensure it's there)
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});