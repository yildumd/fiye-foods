// Retail Products Data
const retailProducts = [
    {
        id: 1,
        name: 'Fiye Chili Pepper',
        description: 'Premium chili pepper for authentic Southern Nigerian dishes',
        price: 2500,
        category: 'spices',
        image: 'chili-pepper'
    },
    {
        id: 2,
        name: 'Fiye Cameroonian Pepper',
        description: 'Special Cameroonian pepper for extra heat and flavor',
        price: 2500,
        category: 'spices',
        image: 'cameroonian-pepper'
    },
    {
        id: 3,
        name: 'Yellow Garri (1kg)',
        description: 'Premium yellow garri, perfect for eba',
        price: 2000,
        category: 'grains',
        image: 'yellow-garri'
    },
    {
        id: 4,
        name: 'Ijebu Garri (1kg)',
        description: 'Traditional Ijebu garri with authentic taste',
        price: 3000,
        category: 'grains',
        image: 'ijebu-garri'
    },
    {
        id: 5,
        name: 'Yellow Garri (2kg)',
        description: 'Premium yellow garri - family size',
        price: 4000,
        category: 'grains',
        image: 'yellow-garri-2kg'
    },
    {
        id: 6,
        name: 'Ijebu Garri (2kg)',
        description: 'Traditional Ijebu garri - family size',
        price: 6000,
        category: 'grains',
        image: 'ijebu-garri-2kg'
    },
    {
        id: 7,
        name: 'Palm Oil (1 litre)',
        description: 'Pure, fresh palm oil for cooking',
        price: 5000,
        category: 'oils',
        image: 'palm-oil'
    },
    {
        id: 8,
        name: 'Palm Oil (5 litres)',
        description: 'Pure palm oil - economy family size',
        price: 18500,
        category: 'oils',
        image: 'palm-oil-5l'
    },
    {
        id: 9,
        name: 'Kuli Kuli',
        description: 'Traditional groundnut snack, perfect with drinks',
        price: 1500,
        category: 'snacks',
        image: 'kuli-kuli'
    },
    {
        id: 10,
        name: 'Fiye Yaji (3 Variants)',
        description: 'Special suya spice in 3 different variants',
        price: 2500,
        category: 'spices',
        image: 'fiye-yaji'
    }
];

// Shopping cart
let cart = [];

// Initialize the order page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fiye Foods Retail Order - Initializing...');
    
    loadRetailProducts();
    loadCartFromStorage();
    updateCartDisplay();
    
    // Set up event listeners
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('checkout-btn').addEventListener('click', proceedToCheckout);
    
    console.log('Fiye Foods Retail Order initialized successfully');
});

// Load retail products
function loadRetailProducts() {
    const productsContainer = document.getElementById('retail-products');
    
    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }
    
    productsContainer.innerHTML = '';
    
    retailProducts.forEach(product => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

// Create product element
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
        <div class="product-image">
            <div class="placeholder-image">
                ${product.name.split(' ')[0].charAt(0)}${product.name.split(' ')[1] ? product.name.split(' ')[1].charAt(0) : ''}
            </div>
        </div>
        <div class="product-content">
            <div class="product-header">
                <h4>${product.name}</h4>
                <div class="product-price">₦${product.price.toLocaleString()}</div>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <div class="quantity-controls">
                    <button class="qty-btn minus" data-product="${product.id}">-</button>
                    <span class="qty-value" id="qty-${product.id}">0</span>
                    <button class="qty-btn plus" data-product="${product.id}">+</button>
                </div>
                <button class="btn btn-primary add-to-cart" data-product="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return productDiv;
}

// Add event listeners after products are loaded
function initProductInteractions() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product'));
            addToCart(productId);
        });
    });
    
    // Quantity buttons
    document.querySelectorAll('.qty-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product'));
            increaseQuantity(productId);
        });
    });
    
    document.querySelectorAll('.qty-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product'));
            decreaseQuantity(productId);
        });
    });
}

// Cart functions
function addToCart(productId) {
    const product = retailProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`Added ${product.name} to cart!`);
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCartDisplay();
        saveCartToStorage();
    }
}

function decreaseQuantity(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCartDisplay();
        saveCartToStorage();
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartDisplay();
        saveCartToStorage();
        showNotification('Cart cleared!');
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Update quantity displays on products
    retailProducts.forEach(product => {
        const qtyElement = document.getElementById(`qty-${product.id}`);
        if (qtyElement) {
            const cartItem = cart.find(item => item.id === product.id);
            qtyElement.textContent = cartItem ? cartItem.quantity : '0';
        }
    });
    
    // Update cart items
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartSummary.style.display = 'none';
        checkoutBtn.disabled = true;
        return;
    }
    
    emptyCart.style.display = 'none';
    cartSummary.style.display = 'block';
    checkoutBtn.disabled = false;
    
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    // Calculate delivery fee
    let deliveryFee = 0;
    if (subtotal > 0 && subtotal < 5000) {
        deliveryFee = 1000;
    } else if (subtotal >= 5000 && subtotal < 10000) {
        deliveryFee = 500;
    }
    // Over 10000 is free
    
    const total = subtotal + deliveryFee;
    
    // Update summary
    document.getElementById('cart-subtotal').textContent = `₦${subtotal.toLocaleString()}`;
    document.getElementById('delivery-fee').textContent = `₦${deliveryFee.toLocaleString()}`;
    document.getElementById('cart-total').textContent = `₦${total.toLocaleString()}`;
    
    // Update cart items list
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <div class="cart-item-price">₦${item.price.toLocaleString()} × ${item.quantity}</div>
            </div>
            <div class="cart-item-total">₦${(item.price * item.quantity).toLocaleString()}</div>
            <div class="cart-item-actions">
                <button class="btn-remove" data-product="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItemElement);
    });
    
    // Add remove button event listeners
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product'));
            removeFromCart(productId);
        });
    });
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
        saveCartToStorage();
        showNotification('Item removed from cart');
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    let deliveryFee = 0;
    if (subtotal > 0 && subtotal < 5000) {
        deliveryFee = 1000;
    } else if (subtotal >= 5000 && subtotal < 10000) {
        deliveryFee = 500;
    }
    
    const total = subtotal + deliveryFee;
    
    // Format WhatsApp message
    let message = `Hello Fiye Foods! I would like to order the following retail products:%0A%0A`;
    
    cart.forEach(item => {
        message += `• ${item.name} - ${item.quantity} × ₦${item.price.toLocaleString()} = ₦${(item.price * item.quantity).toLocaleString()}%0A`;
    });
    
    message += `%0ASubtotal: ₦${subtotal.toLocaleString()}%0A`;
    message += `Delivery Fee: ₦${deliveryFee.toLocaleString()}%0A`;
    message += `Total: ₦${total.toLocaleString()}%0A%0A`;
    message += `Please contact me to confirm my order and arrange delivery.`;
    
    // Open WhatsApp
    const phoneNumber = '2348057266953'; // Your number without the leading 0
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('fiyeFoodsCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('fiyeFoodsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Notification function
function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create notification
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
        max-width: 300px;
    `;
    
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

// Initialize product interactions after a short delay to ensure DOM is ready
setTimeout(initProductInteractions, 100);