// JavaScript for dynamic functionality (e.g., adding items to cart, chatbot interactions, etc.)
// Example data for products (usually fetched from a database)
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Function to display products on the products page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // Add product to cart (implementation depends on your requirements)
}

// Function to display cart items on the cart page
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    // Retrieve cart items and display them
}

// Function to proceed to checkout
function checkout() {
    // Implement checkout process (redirect to checkout page, etc.)
}

// Call functions to initialize page content
displayProducts();
displayCart();
// Example data for authentication (usually fetched from a database)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Successful login
        document.getElementById('login-message').textContent = "Login successful!";
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        // Failed login
        document.getElementById('login-message').textContent = "Invalid username or password. Please try again.";
    }
}

// Add event listener to the login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);
// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password (you can add more validation logic as needed)
    if (username === "exampleUser" && password === "examplePassword") {
        // Successful login
        document.getElementById('login-message').textContent = "Login successful!";
        // Redirect to index.html (replace "index.html" with the actual URL of your homepage)
        window.location.href = "index.html";
    } else {
        // Failed login
        document.getElementById('login-message').textContent = "Invalid username or password. Please try again.";
    }
}

// Add event listener to the login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);


