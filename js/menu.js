// Fiye Foods Menu Data
const menuData = {
    categories: [
        { id: 'rice-meals', name: 'Rice Meals', description: 'Premium rice dishes with authentic Abuja flavours' },
        { id: 'combos', name: 'Online Exclusive Combos', description: 'Special combos available for online orders only' },
        { id: 'proteins', name: 'Proteins', description: 'Add extra proteins to your meals' },
        { id: 'soups', name: 'Soups', description: 'Traditional Nigerian soups in various sizes' },
        { id: 'swallows', name: 'Swallows', description: 'Perfect accompaniments for our soups' },
        { id: 'sides', name: 'Finger Foods & Sides', description: 'Delicious sides and snacks' },
        { id: 'grills', name: 'Grills', description: 'Wednesday special grilled items' },
        { id: 'retail', name: 'Retail Products', description: 'Premium ingredients for your home cooking' },
        { id: 'weekend', name: 'Weekend Specials', description: 'Exclusive weekend offerings' }
    ],
    items: {
        'rice-meals': [
            { name: 'Fiye Party Jollof + Beef + Water', description: 'Our signature jollof rice with beef and bottled water', price: 3500 },
            { name: 'Basmati Stir-Fried Rice', description: 'Premium basmati rice stir-fried with vegetables and spices', price: 4500 },
            { name: 'White Rice & Stew + Beef + Water', description: 'White rice with rich stew, beef, and bottled water', price: 3500 },
            { name: 'Asun Rice', description: 'Spicy grilled goat meat with seasoned rice', price: 4500 },
            { name: 'Buka Combo', description: 'Rice, beans, stew, plantain with beef - complete traditional meal', price: 6500 },
            { name: 'Assorted Pepper Soup + Rice', description: 'Mixed meat pepper soup served with rice', price: 6500 },
            { name: 'Goat Meat Pepper Soup + Rice', description: 'Spicy goat meat pepper soup served with rice', price: 6500 }
        ],
        'combos': [
            { name: 'Office Combo Pack', description: 'Rice + Protein + Plantain + Water/Drink - Perfect for lunch', price: 3000 },
            { name: 'Executive Combo Box', description: 'Soup + Swallow + Extra Protein - Premium dining experience', price: 5500 },
            { name: 'Family Sharing Pack', description: 'Large Rice + 6 Proteins + Plantain - Feeds the whole family', price: 10000 },
            { name: 'Pepper Soup Combo', description: 'Goat/Assorted pepper soup / Catfish + 1 Swallow or Rice or Agidi + Zobo or Water/Drink', price: 7000 }
        ],
        'proteins': [
            { name: 'Beef', description: 'Tender beef pieces', price: 500 },
            { name: 'Chicken (Regular)', description: 'Juicy chicken portion', price: 2500 },
            { name: 'Chicken (Large)', description: 'Large chicken portion', price: 5000 },
            { name: 'Turkey (Regular)', description: 'Premium turkey meat', price: 3500 },
            { name: 'Turkey (Large)', description: 'Large turkey portion', price: 7000 },
            { name: 'Goat Meat', description: 'Tender goat meat', price: 2500 },
            { name: 'Titus Fish', description: 'Grilled Titus fish', price: 2500 },
            { name: 'Pomo', description: 'Cow skin delicacy', price: 1000 },
            { name: 'Cowtail', description: 'Premium cowtail', price: 4000 },
            { name: 'Panla', description: 'Dried fish', price: 2000 },
            { name: 'Croaker', description: 'Fresh croaker fish', price: 4000 },
            { name: 'Snail', description: 'Fresh snail delicacy', price: 5000 },
            { name: 'Egg', description: 'Boiled or fried egg', price: 500 }
        ],
        'soups': [
            { name: 'Afang Soup (Small)', description: '2.4L - Traditional Afang soup', price: 3500 },
            { name: 'Afang Soup (Medium)', description: '3.4L - Traditional Afang soup', price: 25000 },
            { name: 'Afang Soup (Large)', description: 'Family size Afang soup', price: 40000 },
            { name: 'Egusi Soup (Small)', description: '2.4L - Melon seed soup', price: 3500 },
            { name: 'Egusi Soup (Medium)', description: '3.4L - Melon seed soup', price: 25000 },
            { name: 'Egusi Soup (Large)', description: 'Family size Egusi soup', price: 40000 },
            { name: 'Ogbono Soup (Small)', description: '2.4L - African mango seed soup', price: 3500 },
            { name: 'Ogbono Soup (Medium)', description: '3.4L - African mango seed soup', price: 25000 },
            { name: 'Ogbono Soup (Large)', description: 'Family size Ogbono soup', price: 40000 },
            { name: 'Vegetable Soup (Small)', description: '2.4L - Fresh vegetable soup', price: 3500 },
            { name: 'Vegetable Soup (Medium)', description: '3.4L - Fresh vegetable soup', price: 25000 },
            { name: 'Vegetable Soup (Large)', description: 'Family size Vegetable soup', price: 40000 },
            { name: 'Oha Soup (Small)', description: '2.4L - Traditional Oha soup', price: 3500 },
            { name: 'Oha Soup (Medium)', description: '3.4L - Traditional Oha soup', price: 25000 },
            { name: 'Oha Soup (Large)', description: 'Family size Oha soup', price: 40000 },
            { name: 'Bitterleaf Soup (Small)', description: '2.4L - Bitterleaf soup', price: 3500 },
            { name: 'Bitterleaf Soup (Medium)', description: '3.4L - Bitterleaf soup', price: 25000 },
            { name: 'Bitterleaf Soup (Large)', description: 'Family size Bitterleaf soup', price: 40000 },
            { name: 'Banga Soup (Small)', description: '2.4L - Palm fruit soup', price: 8500 },
            { name: 'Banga Soup (Medium)', description: '3.4L - Palm fruit soup', price: 35000 },
            { name: 'Banga Soup (Large)', description: 'Family size Banga soup', price: 50000 },
            { name: 'Stew (Medium)', description: '3.4L - Nigerian tomato stew', price: 25000 },
            { name: 'Stew (Large)', description: 'Family size Nigerian tomato stew', price: 40000 }
        ],
        'swallows': [
            { name: 'Semo', description: 'Smooth semolina swallow', price: 1000 },
            { name: 'Eba', description: 'Garri swallow', price: 500 },
            { name: 'Fufu', description: 'Cassava fufu', price: 500 },
            { name: 'Poundo', description: 'Pounded yam flour', price: 1500 },
            { name: 'Oatmeal Swallow', description: 'Healthy oatmeal swallow', price: 1500 }
        ],
        'sides': [
            { name: 'Crispy Yam Stripes + Egg Sauce', description: 'Crispy yam strips with creamy egg sauce', price: 4500 },
            { name: 'Plantain Slices + Scrambled Egg', description: 'Fried plantain with scrambled eggs', price: 3500 },
            { name: 'Fiye Plantain/Yam & Egg Box', description: 'Special plantain or yam with egg combo', price: 5500 },
            { name: 'Moi Moi (per piece)', description: 'Steamed bean pudding', price: 1000 },
            { name: 'Peppered Gizzard (4 pieces)', description: 'Spicy peppered gizzard', price: 3000 },
            { name: 'Chicken Wings (6 pieces)', description: 'Crispy chicken wings', price: 4000 },
            { name: 'Plantain', description: 'Fried plantain', price: 1000 }
        ],
        'grills': [
            { name: 'Turkey', description: 'Grilled turkey', price: 3500 },
            { name: 'Plantain (per piece)', description: 'Grilled plantain', price: 500 },
            { name: 'Yam (per piece)', description: 'Grilled yam', price: 500 },
            { name: 'Kote Fish (per piece)', description: 'Grilled Kote fish', price: 2500 },
            { name: 'Chicken', description: 'Grilled chicken', price: 2500 },
            { name: 'Titus Fish (per piece)', description: 'Grilled Titus fish', price: 2500 },
            { name: 'Bole & Fish Combo', description: '2 Plantain and full fish - Wednesday special', price: 8999 }
        ],
        'retail': [
            { name: 'Fiye Chili Pepper', description: 'Premium chili pepper', price: 2500 },
            { name: 'Fiye Cameroonian Pepper', description: 'Special Cameroonian pepper', price: 2500 },
            { name: 'Yellow Garri (1kg)', description: 'Premium yellow garri', price: 2000 },
            { name: 'Ijebu Garri (1kg)', description: 'Traditional Ijebu garri', price: 3000 },
            { name: 'Yellow Garri (2kg)', description: 'Premium yellow garri', price: 4000 },
            { name: 'Ijebu Garri (2kg)', description: 'Traditional Ijebu garri', price: 6000 },
            { name: 'Palm Oil (1 litre)', description: 'Pure palm oil', price: 5000 },
            { name: 'Palm Oil (5 litres)', description: 'Pure palm oil - family size', price: 18500 },
            { name: 'Kuli Kuli', description: 'Groundnut snack', price: 1500 },
            { name: 'Fiye Yaji (3 Variants)', description: 'Special suya spice in 3 variants', price: 2500 }
        ],
        'weekend': [
            { name: 'Friday Special: SeaFood Rice', description: 'Creamy Coconut Rice served with Turkey, Chicken or Fish, Calamari, prawns, Fish chunks', price: 9999 },
            { name: 'Friday Special: Pasta Stir-Fry', description: 'Special pasta stir-fry', price: 5499 },
            { name: 'Saturday Special: Fisherman Soup', description: 'Rich fisherman soup with assorted seafood', price: 14999 },
            { name: 'Saturday Special: Ekpang Nkukwo', description: 'Traditional cocoyam dish', price: 8499 },
            { name: 'Weekend Bonus: White Soup (Fri & Sat)', description: 'Special white soup available Friday and Saturday', price: 8500 }
        ]
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fiye Foods Menu - Initializing...');
    
    // Initialize menu system
    initMenu();
    
    // Set up scroll event for sticky order bar
    window.addEventListener('scroll', handleScroll);
});

// Initialize the menu system
function initMenu() {
    loadMenuCategories();
    loadMenuItems('rice-meals'); // Load first category by default
}

// Load menu categories into tabs
function loadMenuCategories() {
    const categoryTabs = document.getElementById('category-tabs');
    
    if (!categoryTabs) {
        console.error('Category tabs container not found!');
        return;
    }
    
    // Clear existing tabs
    categoryTabs.innerHTML = '';
    
    // Create tabs for each category
    menuData.categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.textContent = category.name;
        tab.setAttribute('data-category', category.id);
        
        // Add click event
        tab.addEventListener('click', function() {
            switchCategory(this);
        });
        
        categoryTabs.appendChild(tab);
    });
    
    // Activate first tab
    const firstTab = categoryTabs.querySelector('.category-tab');
    if (firstTab) {
        firstTab.classList.add('active');
    }
}

// Switch to a different category
function switchCategory(clickedTab) {
    // Remove active class from all tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    clickedTab.classList.add('active');
    
    // Get category ID and load items
    const categoryId = clickedTab.getAttribute('data-category');
    loadMenuItems(categoryId);
}

// Load menu items for a specific category
function loadMenuItems(categoryId) {
    const menuItemsContainer = document.getElementById('menu-items');
    
    if (!menuItemsContainer) {
        console.error('Menu items container not found!');
        return;
    }
    
    const items = menuData.items[categoryId] || [];
    
    // Clear existing items
    menuItemsContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-items">No items available in this category at the moment.</p>';
        return;
    }
    
    // Create menu items
    items.forEach((item, index) => {
        const menuItem = createMenuItem(item, categoryId, index);
        menuItemsContainer.appendChild(menuItem);
    });
    
    // Initialize interactive elements
    initInteractiveElements();
}

// Create a single menu item element
function createMenuItem(item, categoryId, index) {
    const menuItem = document.createElement('div');
    const isCombo = categoryId === 'combos';
    const isPopular = index < 2;
    const isWeekend = categoryId === 'weekend';
    
    // Base classes
    let itemClass = 'menu-item';
    if (isCombo) itemClass += ' combo-item';
    if (isPopular) itemClass += ' popular-item';
    if (isWeekend) itemClass += ' weekend-special';
    
    menuItem.className = itemClass;
    
    // Build HTML content
    let html = `
        <div class="item-image">
            <div class="placeholder-image">${getItemInitials(item.name)}</div>
    `;
    
    // Add badges
    if (isPopular) {
        html += '<div class="popular-badge">🔥 Popular</div>';
    }
    if (isWeekend) {
        html += '<div class="weekend-badge">🎉 Weekend Special</div>';
    }
    
    html += `
        </div>
        <div class="item-content">
            <div class="item-header">
                <h3>${formatItemName(item.name)}</h3>
                <div class="item-price">₦${item.price.toLocaleString()}</div>
            </div>
    `;
    
    // Add description
    if (isCombo) {
        html += `<div class="combo-description">${item.description}</div>`;
    } else {
        html += `<p class="item-description">${item.description}</p>`;
    }
    
    // Add quantity counter for appropriate items
    if (!isCombo && categoryId !== 'soups' && categoryId !== 'retail') {
        html += `
            <div class="item-counter">
                <button class="counter-btn minus" type="button">-</button>
                <span class="counter-value">1</span>
                <button class="counter-btn plus" type="button">+</button>
            </div>
        `;
    }
    
    // Add to cart button
    html += `
            <button class="btn btn-primary add-to-cart" 
                    data-item="${item.name}" 
                    data-price="${item.price}"
                    data-category="${categoryId}">
                <i class="fas fa-plus"></i> Add to Order
            </button>
        </div>
    `;
    
    menuItem.innerHTML = html;
    return menuItem;
}

// Helper function to get initials for placeholder
function getItemInitials(itemName) {
    const words = itemName.split(' ');
    if (words.length >= 2) {
        return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
    return itemName.substring(0, 2).toUpperCase();
}

// Helper function to format item names
function formatItemName(name) {
    return name.replace(/\(Small\)|\(Medium\)|\(Large\)|\(Regular\)/g, '').trim();
}

// Initialize interactive elements
function initInteractiveElements() {
    initAddToCartButtons();
    initQuantityCounters();
}

// Initialize add to cart buttons
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const basePrice = parseInt(this.getAttribute('data-price'));
            const category = this.getAttribute('data-category');
            
            // Get quantity
            let quantity = 1;
            const counter = this.parentElement.querySelector('.counter-value');
            if (counter) {
                quantity = parseInt(counter.textContent);
            }
            
            const totalPrice = basePrice * quantity;
            
            // Add to cart (placeholder for backend integration)
            addToCart(itemName, quantity, totalPrice, category);
            
            // Show confirmation
            showNotification(`Added ${quantity}x ${formatItemName(itemName)} to your order!`);
        });
    });
}

// Initialize quantity counters
function initQuantityCounters() {
    const minusButtons = document.querySelectorAll('.counter-btn.minus');
    const plusButtons = document.querySelectorAll('.counter-btn.plus');
    
    // Minus buttons
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const counter = this.nextElementSibling;
            let value = parseInt(counter.textContent);
            if (value > 1) {
                value--;
                counter.textContent = value;
            }
        });
    });
    
    // Plus buttons
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const counter = this.previousElementSibling;
            let value = parseInt(counter.textContent);
            value++;
            counter.textContent = value;
        });
    });
}

// Add item to cart (placeholder function)
function addToCart(itemName, quantity, totalPrice, category) {
    console.log(`Added to cart: ${quantity}x ${itemName} = ₦${totalPrice}`);
    
    // In a real implementation, this would:
    // 1. Add to a cart array
    // 2. Update local storage
    // 3. Update cart UI
    // 4. Sync with backend if user is logged in
    
    updateOrderSummary(itemName, totalPrice);
}

// Update order summary in sticky bar
function updateOrderSummary(itemName, price) {
    const orderBar = document.querySelector('.sticky-order-bar');
    if (orderBar) {
        orderBar.classList.add('visible');
        
        // Update order info
        const orderInfo = orderBar.querySelector('.order-info span');
        if (orderInfo) {
            orderInfo.textContent = `Added: ${formatItemName(itemName)} - ₦${price.toLocaleString()}`;
            
            // Reset after 5 seconds
            setTimeout(() => {
                orderInfo.textContent = 'Ready to order?';
            }, 5000);
        }
    }
}

// Show notification
function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle scroll for sticky order bar
function handleScroll() {
    const orderBar = document.querySelector('.sticky-order-bar');
    if (orderBar && window.scrollY > 200) {
        orderBar.classList.add('visible');
    }
}

// QR Code Menu Generation
function generateQRCodeMenu() {
    const currentUrl = window.location.href;
    
    // Simple implementation - in production, use a QR code library
    showNotification('QR Menu URL: ' + currentUrl + '\nShare this link for QR menu access!');
    
    // For a real implementation, you would:
    // 1. Use a QR code generation library like QRCode.js
    // 2. Display the QR code in a modal
    // 3. Allow downloading/printing
}

// Make functions globally available
window.generateQRCodeMenu = generateQRCodeMenu;
window.loadMenuItems = loadMenuItems;