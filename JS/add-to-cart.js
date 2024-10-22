
let cart = [];

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="card border-success mb-3 p-3 shadow-sm">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Image Section -->
                    <img src="${item.img}" alt="${item.name}" style="width: 90px; height: 90px; object-fit: cover;" class="me-3 rounded">

                    <!-- Product Details -->
                    <div class="flex-grow-1">
                        <h5 class="mb-1">${item.name}</h5>
                        <p class="mb-0 text-danger">$${item.price} x ${item.quantity}</p>
                    </div>

                    <!-- Quantity Controls and Remove Button -->
                    <div class="d-flex flex-column align-items-center">
                        <div class="d-flex align-items-center mb-2">
                            <button class="btn btn-sm btn-outline-danger me-2" onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="px-2">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-success ms-2" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="btn btn-sm mt-3 btn-success text-white rounded-3" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    updateTotalPrice();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCartDisplay();
    updateCartQuantityBadge();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartQuantityBadge();
}

function updateCartQuantityBadge() {
    const cartQuantityBadge = document.getElementById('cartQuantityBadge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartQuantityBadge.innerText = totalItems;
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPriceElements = document.getElementById('totalPrices');
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    totalPriceElements.innerText = `$${totalPrice}`;
    totalPriceElement.innerText = `$${totalPrice}`;
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const productImg = this.getAttribute('data-img');

        const listItem = cart.find(item => item.name === productName);

        if (listItem) {
            listItem.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }

        updateCartDisplay();
        updateCartQuantityBadge();
    });
});