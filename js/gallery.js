// Enhanced Gallery data for Fiye Foods
const galleryData = [
    // Rice Meals
    {
        id: 1,
        image: "images/gallery/rice/fiye-party-jollof.jpg",
        category: "rice",
        title: "Fiye Party Jollof",
        description: "Our signature smoky jollof rice with chicken and plantain",
        price: "₦3,500",
        featured: true
    },
    {
        id: 2,
        image: "images/gallery/rice/basmati-stir-fried-rice.jpg",
        category: "rice",
        title: "Basmati Stir Fried Rice",
        description: "Special fried rice with shrimp, chicken and vegetables",
        price: "₦4,500"
    },
    {
        id: 3,
        image: "images/gallery/rice/seafood-rice.jpg", 
        category: "rice",
        title: "SeaFood Rice",
        description: "Aromatic coconut rice with fish and vegetables",
        price: "₦9,999"
    },
    
    // Proteins
    {
        id: 4,
        image: "images/gallery/proteins/grilled-chicken.jpg",
        category: "protein", 
        title: "Grilled Chicken",
        description: "Perfectly grilled chicken with special Fiye spices",
        price: "₦2,500",
        featured: true
    },
    {
        id: 5,
        image: "images/gallery/proteins/titus-fish.jpg",
        category: "protein",
        title: "Titus Fish", 
        description: "Fresh fish cooked in special pepper sauce",
        price: "₦2,500"
    },
    {
        id: 6,
        image: "images/gallery/proteins/assorted-peppersoup.jpg",
        category: "protein",
        title: "Assorted Peppersoup",
        description: "Beef, goat meat, and chicken with special sauce",
        price: "₦4,500"
    },
    
    // Soups & Swallows
    {
        id: 7,
        image: "images/gallery/soups/egusi-soup.jpg",
        category: "soup",
        title: "Egusi Soup",
        description: "Traditional egusi soup with assorted meat and fish",
        price: "₦3,000"
    },
    {
        id: 8,
        image: "images/gallery/soups/ogbonno-soup.jpg",
        category: "soup", 
        title: "Ogbonno Soup",
        description: "Traditional oha soup with fufu and assorted meat",
        price: "₦3,000"
    },
    {
        id: 9,
        image: "images/gallery/soups/bitterleaf-soup.jpg",
        category: "soup",
        title: "Bitterleaf Soup",
        description: "Fresh okro soup with seafood and assorted meat",
        price: "₦3,000"
    },
    
    // Wednesday Grills
    {
        id: 10,
        image: "images/gallery/grills/bole-and-fish-wednesday.jpg",
        category: "grill",
        title: "Bole and Fish Wednesday",
        description: "Plantain and Fish with Fiye Secret Sauce",
        price: "₦4,000",
        featured: true
    },
    {
        id: 11,
        image: "images/gallery/grills/grilled-turkey.jpg",
        category: "grill",
        title: "Grilled Turkey",
        description: "Special Wednesday grilled turkey with spices",
        price: "₦3,500"
    },
    
    // Special Offers
    {
        id: 12,
        image: "images/gallery/specials/family-pack.jpg",
        category: "special",
        title: "Family Pack",
        description: "Complete family meal for 4-6 people",
        price: "₦8,500"
    },
    {
        id: 13,
        image: "images/gallery/specials/office-combo.jpg",
        category: "special", 
        title: "Office Combo",
        description: "Perfect lunch combo for the office team",
        price: "₦4,500"
    },
    {
        id: 14,
        image: "images/gallery/specials/student-special.jpg",
        category: "special",
        title: "Student Special",
        description: "Budget-friendly meal for students",
        price: "₦1,800"
    }
];

// Events data for Fiye Foods
const eventsData = [
    {
        id: 1,
        image: "images/events/abuja-food-festival.jpg",
        date: "December 15, 2023",
        title: "Abuja Food Festival",
        location: "Eagle Square, Abuja",
        description: "Join us at the biggest food festival in Abuja. Experience authentic Nigerian cuisine, live cooking demonstrations, and special discounts.",
        action1: { text: "Learn More", link: "#" },
        action2: { text: "Register", link: "#" }
    },
    {
        id: 2,
        image: "images/events/suya-night.jpg",
        date: "Every Wednesday",
        title: "Suya & Grills Night",
        location: "Fiye Foods Restaurant",
        description: "Experience our special Wednesday grills with live music, unlimited suya, and a variety of grilled meats with our signature sauces.",
        action1: { text: "View Menu", link: "#" },
        action2: { text: "Reserve Table", link: "https://wa.me/2348057266953?text=I%20want%20to%20reserve%20for%20Suya%20Night" }
    },
    {
        id: 3,
        image: "images/events/cooking-class.jpg",
        date: "January 20, 2024",
        title: "Nigerian Cooking Masterclass",
        location: "Fiye Foods Kitchen",
        description: "Learn to cook authentic Nigerian dishes from our master chefs. Limited spots available for this hands-on cooking experience.",
        action1: { text: "View Details", link: "#" },
        action2: { text: "Register Now", link: "https://wa.me/2348057266953?text=I%20want%20to%20register%20for%20the%20cooking%20class" }
    }
];

// Featured dishes for carousel (automatically filtered from galleryData)
const featuredDishes = galleryData.filter(dish => dish.featured);

// Initialize all gallery components
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupFilters();
    initializeCarousel();
    initializeEvents();
    setupMobileMenu();
});

function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const totalPhotos = document.getElementById('total-photos');
    
    // Update total photos count
    totalPhotos.textContent = galleryData.length;
    
    // Clear loading state
    galleryGrid.innerHTML = '';
    
    // Add gallery items
    galleryData.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Add image loading animation
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            // Hide placeholder if it exists
            const placeholder = this.parentElement.querySelector('.placeholder-image');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
}

function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-category', item.category);
    
    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-image">
        <div class="gallery-overlay">
            <span class="gallery-category">${getCategoryName(item.category)}</span>
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-description">${item.description}</p>
            <div class="gallery-price">${item.price}</div>
            <button class="gallery-order-btn" onclick="orderItem('${item.title}', '${item.price}')">
                <i class="fab fa-whatsapp"></i> Order Now
            </button>
        </div>
    `;
    
    return galleryItem;
}

function getCategoryName(category) {
    const categories = {
        'all': 'All Dishes',
        'rice': 'Rice Meals',
        'protein': 'Proteins', 
        'soup': 'Soups & Swallows',
        'grill': 'Wednesday Grills',
        'special': 'Special Offers'
    };
    return categories[category] || category;
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Carousel functionality
function initializeCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    const slidesContainer = document.querySelector('.carousel-slides');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    // Clear existing content
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create slides and dots
    featuredDishes.forEach((dish, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${dish.image}" alt="${dish.title}" class="carousel-image">
            <div class="carousel-caption">
                <h3>${dish.title}</h3>
                <p>${dish.description}</p>
                <a href="https://wa.me/2348057266953?text=I%20would%20like%20to%20order%20${encodeURIComponent(dish.title)}" class="btn btn-primary">Order Now</a>
            </div>
        `;
        slidesContainer.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
    });
    
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let slideInterval;
    
    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Start autoplay
    function startAutoplay() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop autoplay
    function stopAutoplay() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            stopAutoplay();
            startAutoplay();
        });
    });
    
    // Start autoplay
    startAutoplay();
    
    // Pause on hover
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
    
    // Add image loading for carousel images
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
}

// Events section initialization
function initializeEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;
    
    // Clear existing content
    eventsGrid.innerHTML = '';
    
    // Create event cards
    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" class="event-img">
            </div>
            <div class="event-content">
                <div class="event-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${event.date}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${event.location}</span>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-actions">
                    <a href="${event.action1.link}" class="btn btn-outline">${event.action1.text}</a>
                    <a href="${event.action2.link}" class="btn btn-primary">${event.action2.text}</a>
                </div>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
    
    // Add image loading for event images
    const eventImages = document.querySelectorAll('.event-img');
    eventImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
}

// Order function for WhatsApp
function orderItem(itemName, itemPrice) {
    const message = `Hello Fiye Foods! I would like to order:\n\n🍽️ ${itemName}\n💵 ${itemPrice}\n\nPlease let me know the delivery details.`;
    const whatsappUrl = `https://wa.me/2348057266953?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger to X
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
        
        // Close menu when clicking on a link
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
    }
}

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    // Handle image errors for gallery
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.className = 'placeholder-image';
            placeholder.innerHTML = `
                <i class="fas fa-utensils fa-2x"></i>
                <span>${this.alt}</span>
            `;
            this.parentNode.insertBefore(placeholder, this.nextSibling);
            this.style.display = 'none';
        });
    });
    
    // Handle image errors for carousel
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        img.addEventListener('error', function() {
            // Use a fallback image or hide the slide
            this.src = 'images/placeholder/food-placeholder.jpg';
        });
    });
    
    // Handle image errors for events
    const eventImages = document.querySelectorAll('.event-img');
    eventImages.forEach(img => {
        img.addEventListener('error', function() {
            // Use a fallback image
            this.src = 'images/placeholder/event-placeholder.jpg';
        });
    });
});

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

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
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
});