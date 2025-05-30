const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        price: 699.00, // Example price in INR
        description: "Classic cheese and tomato pizza on a thin crust.",
        image: "https://th.bing.com/th/id/OIP.6-CTwFgn7d5AB5tTikzHYAHaHa?cb=iwp2&w=626&h=626&rs=1&pid=ImgDetMain"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 599.00, // Example price in INR
        description: "Pepperoni slices on mozzarella cheese with tomato sauce.",
        image: "https://images.unsplash.com/photo-1705537637301-956413896f3c?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Classic Burger",
        category: "burger",
        price: 799.00, // Example price in INR
        description: "Juicy beef patty with lettuce, tomato, and cheese.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Veggie Burger",
        category: "burger",
        price: 699.00, // Example price in INR
        description: "A delicious patty made from garden-fresh veggies.",
        image: "https://plus.unsplash.com/premium_photo-1664648063548-50808d58f061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Greek Salad",
        category: "salad",
        price: 599.00, // Example price in INR
        description: "Fresh cucumbers, olives, feta cheese, and tomatoes.",
        image: "https://www.jessicagavin.com/wp-content/uploads/2018/02/greek-salad-1.jpg"
    },
    {
        id: 6,
        name: "Caesar Salad",
        category: "salad",
        price: 449.00, // Example price in INR
        description: "Romaine lettuce with parmesan cheese and Caesar dressing.",
        image: "https://www.onceuponachef.com/images/2010/08/Homemade-Caesar-Salad-Dressing.jpg"
    },
    {
        id: 7,
        name: "Chocolate Cake",
        category: "dessert",
        price: 449.00, // Example price in INR
        description: "Rich and moist chocolate cake slice.",
        image: "https://tatyanaseverydayfood.com/wp-content/uploads/2022/03/The-Best-Dark-Chocolate-Cake-Recipe-3.jpg"
    },
    {
        id: 8,
        name: "Fruit Tart",
        category: "dessert",
        price: 499.00, // Example price in INR
        description: "Tart filled with custard and topped with fresh fruits.",
        image: "https://images.unsplash.com/photo-1614174486496-344ef3e9d870?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        name: "Fresh Orange Juice",
        category: "drinks",
        price: 299.00, // Example price in INR
        description: "Cold pressed fresh orange juice.",
        image: "https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Iced Coffee",
        category: "drinks",
        price: 329.00, // Example price in INR
        description: "Chilled coffee with ice and milk.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Chicken Biryani",
        category: "rice",
        price: 899.00,
        description: "Aromatic basmati rice cooked with tender chicken and Indian spices.",
        image: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        name: "Paneer Tikka",
        category: "starter",
        price: 699.00,
        description: "Grilled paneer cubes marinated in yogurt and spices.",
        image: "https://th.bing.com/th/id/OIP.J1EveS2ESmDjxaAVWEi1MwAAAA?cb=iwp2&rs=1&pid=ImgDetMain"
    },
    {
        id: 13,
        name: "Sushi Platter",
        category: "sushi",
        price: 399.00,
        description: "Assorted sushi rolls with fresh fish, vegetables, and rice.",
        image: "https://plus.unsplash.com/premium_photo-1664648184236-115c6e36648e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        name: "Pasta Alfredo",
        category: "pasta",
        price: 749.00,
        description: "Creamy Alfredo sauce with fettuccine and parmesan cheese.",
        image: "https://images.pexels.com/photos/13294540/pexels-photo-13294540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 15,
        name: "Mango Smoothie",
        category: "drinks",
        price: 349.00,
        description: "Refreshing mango smoothie made with fresh mango pulp and yogurt.",
        image: "https://images.unsplash.com/photo-1653542773369-51cce8d08250?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const foodGrid = document.querySelector('.food-grid');
const filterButtons = document.querySelectorAll('.filter-button');
const cartButton = document.getElementById('cartButton');
const cartPanel = document.getElementById('cartPanel');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPriceEl = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const deliveryLocationInput = document.getElementById('deliveryLocation');
const estimatedTimeEl = document.getElementById('estimatedTime');
const navHomeLink = document.getElementById('navHomeLink'); // Get the home link
const navMenuLink = document.getElementById('navMenuLink'); // Get the menu link
const navContactLink = document.getElementById('navContactLink'); // Get the contact link
const navAboutLink = document.getElementById('navAboutLink'); // Get the about link
const mainHeader = document.querySelector('header'); // Get the header element

const deliveryNameInput = document.getElementById('deliveryName');
const deliveryPhoneInput = document.getElementById('deliveryPhone');


// Cart state: { id: number, quantity: number }
let cart = [];

function renderFoodItems(filter = 'all') {
    foodGrid.innerHTML = '';
    const filteredItems = filter === 'all'
        ? foodItems
        : foodItems.filter(item => item.category === filter);

    if(filteredItems.length === 0) {
        foodGrid.innerHTML = '<p style="grid-column:1/-1; text-align:center; font-weight: 700; color: #ff4d4d;">No items found in this category.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'food-card';
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="food-card-bottom">
                    <div class="price">₹${item.price.toFixed(2)}</div>
                    <button class="btn-add" data-id="${item.id}" aria-label="Add ${item.name} to cart">Add to Cart</button>
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// Render cart items panel
function renderCart() {
    cartItemsContainer.innerHTML = '';
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty-message">Your cart is empty.</p>';
        cartCount.textContent = '0';
        cartTotalPriceEl.textContent = '₹0.00';
        cartButton.setAttribute('aria-label', 'Open cart, currently no items');
        cartButton.setAttribute('aria-expanded', 'false');
        return;
    }

    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartButton.setAttribute('aria-label', `Open cart, ${cartCount.textContent} items`);
    cartButton.setAttribute('aria-expanded', 'false');

    cart.forEach(cartItem => {
        const product = foodItems.find(i => i.id === cartItem.id);
        if(!product) return;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.setAttribute('role', 'listitem');
        itemDiv.setAttribute('tabindex', '0');
        itemDiv.innerHTML = `
            <div class="cart-item-name" title="${product.name}">${product.name}</div>
            <div class="cart-item-qty" aria-label="Quantity control for ${product.name}">
                <button class="qty-decrease" aria-label="Decrease quantity of ${product.name}">−</button>
                <span class="qty-number" aria-live="polite" aria-atomic="true">${cartItem.quantity}</span>
                <button class="qty-increase" aria-label="Increase quantity of ${product.name}">+</button>
            </div>
            <div class="cart-item-price">₹${(product.price * cartItem.quantity).toFixed(2)}</div>
            <button class="cart-item-remove" aria-label="Remove ${product.name} from cart">&times;</button>
        `;
        cartItemsContainer.appendChild(itemDiv);

        // Bind event listeners to qty buttons and remove button here:
        const decreaseBtn = itemDiv.querySelector('.qty-decrease');
        const increaseBtn = itemDiv.querySelector('.qty-increase');
        const removeBtn = itemDiv.querySelector('.cart-item-remove');

        decreaseBtn.addEventListener('click', () => {
            if(cartItem.quantity === 1) {
                removeFromCart(cartItem.id);
            } else {
                updateCartQuantity(cartItem.id, cartItem.quantity - 1);
            }
        });
        increaseBtn.addEventListener('click', () => {
            updateCartQuantity(cartItem.id, cartItem.quantity + 1);
        });
        removeBtn.addEventListener('click', () => {
            removeFromCart(cartItem.id);
        });
    });
    updateCartTotalPrice();
}

// Update quantity in cart
function updateCartQuantity(id, quantity) {
    for(let i=0; i < cart.length; i++) {
        if(cart[i].id === id) {
            cart[i].quantity = quantity;
            break;
        }
    }
    renderCart();
}

// Remove item entirely from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

// Add item to cart, increment if already present
function addToCart(id) {
    const found = cart.find(item => item.id === id);
    if(found) {
        updateCartQuantity(id, found.quantity + 1);
    } else {
        cart.push({id, quantity: 1});
        renderCart();
    }
}

function updateCartTotalPrice() {
    let total = 0;
    cart.forEach(cartItem => {
        const product = foodItems.find(i => i.id === cartItem.id);
        if(product) {
            total += product.price * cartItem.quantity;
        }
    });
    cartTotalPriceEl.textContent = `₹${total.toFixed(2)}`;
}

// Toggle cart panel visibility
function openCart() {
    cartPanel.classList.add('open');
    overlay.classList.add('active');
    cartPanel.setAttribute('aria-hidden', 'false');
    cartButton.setAttribute('aria-expanded', 'true');
    cartCloseBtn.focus();
}
function closeCart() {
    cartPanel.classList.remove('open');
    overlay.classList.remove('active');
    cartPanel.setAttribute('aria-hidden', 'true');
    cartButton.setAttribute('aria-expanded', 'false');
    cartButton.focus();
}

// Calculate estimated delivery time string given location string
function calculateDeliveryTime(location) {
    // If location is empty or just whitespace, return empty string
    if(!location || location.trim().length === 0) return '';

    // We could simulate some variability based on location string length or content
    // But for simplicity, just a fixed 20-40 minutes range
    return 'Estimated Delivery Time: 20-40 minutes';
}

// Update delivery time display
function updateEstimatedTime() {
    const location = deliveryLocationInput.value.trim();
    const estimated = calculateDeliveryTime(location);
    estimatedTimeEl.textContent = estimated;
}

// Initial renders
renderFoodItems();
renderCart();
updateEstimatedTime();

// Event listener for scroll to change header background
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value as needed, e.g., 50px scrolled
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderFoodItems(filter);
    });
});

// Add to cart button clicks
foodGrid.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-add')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const item = foodItems.find(i => i.id === id);
        if(item) {
            addToCart(id);
            alert(`${item.name} added to your cart! Cart now has ${cartCount.textContent} item(s).`);
        }
    }
});

// Cart open/close button
cartButton.addEventListener('click', () => {
    if(cartPanel.classList.contains('open')) {
        closeCart();
    } else {
        openCart();
    }
});
cartCloseBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

// Escape key closes cart if open
document.addEventListener('keydown', (event) => {
    if(event.key === "Escape" && cartPanel.classList.contains('open')) {
        closeCart();
    }
});

// "Order Now" button scrolls to menu
document.getElementById('orderNowBtn').addEventListener('click', () => {
    document.getElementById('menuTitle').scrollIntoView({behavior: "smooth"});
});

// Smooth scroll for "Home" navigation link
if (navHomeLink) {
    navHomeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor jump
        document.getElementById('home').scrollIntoView({ behavior: "smooth" });
    });
}

// Smooth scroll for "Menu" navigation link
if (navMenuLink) {
    navMenuLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor jump
        document.getElementById('menuTitle').scrollIntoView({ behavior: "smooth" });
    });
}

// Smooth scroll for "Contact" navigation link
if (navContactLink) {
    navContactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor jump
        document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
    });
}

// Smooth scroll for "About" navigation link (scrolls to footer)
if (navAboutLink) {
    navAboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor jump
        document.getElementById('pageFooter').scrollIntoView({ behavior: "smooth" });
    });
}

// Delivery location input update delivery time dynamically
deliveryLocationInput.addEventListener('input', () => {
    updateEstimatedTime();
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items before checkout.");
    return;
  }

  const nameVal = deliveryNameInput.value.trim();
  const phoneVal = deliveryPhoneInput.value.trim();
  const locationVal = deliveryLocationInput.value.trim();

  if (nameVal.length === 0) {
    alert("Please enter your name.");
    deliveryNameInput.focus();
    return;
  }
  if (phoneVal.length === 0 || !/^\d{10}$/.test(phoneVal)) {
    alert("Please enter a valid 10-digit phone number.");
    deliveryPhoneInput.focus();
    return;
  }
  if (locationVal.length === 0) {
    alert("Please enter your delivery location.");
    deliveryLocationInput.focus();
    return;
  }

  const deliveryOverlay = document.getElementById('deliveryLoading');
  deliveryOverlay.classList.add('active');
  deliveryOverlay.setAttribute('aria-hidden', 'false');

  setTimeout(() => {
    deliveryOverlay.classList.remove('active');
    deliveryOverlay.setAttribute('aria-hidden', 'true');

    // Create order summary
    let summary = `Name: ${nameVal}\nPhone: ${phoneVal}\nAddress: ${locationVal}\n\nOrder Details:\n`;
    cart.forEach(cartItem => {
      const product = foodItems.find(i => i.id === cartItem.id);
      if (product) {
        summary += `${product.name} × ${cartItem.quantity} — ₹${(product.price * cartItem.quantity).toFixed(2)}\n`;
      }
    });
    summary += `\nTotal: ${cartTotalPriceEl.textContent}`;
    summary += `\n${calculateDeliveryTime(locationVal)}`;

    document.getElementById('orderSummary').textContent = summary;
    const modal = document.getElementById('orderConfirmation');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');

    // Clear cart & form
    cart = [];
    renderCart();
    deliveryNameInput.value = '';
    deliveryPhoneInput.value = '';
    deliveryLocationInput.value = '';
    updateEstimatedTime();
    closeCart();
  }, 5000);
});

document.getElementById('closeOrderModal').addEventListener('click', () => {
    const modal = document.getElementById('orderConfirmation');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
});
