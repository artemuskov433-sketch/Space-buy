// Ініціалізація кошика з localStorage
let cart = JSON.parse(localStorage.getItem('spaceCart')) || [];

// Функція оновлення лічильника на всіх сторінках
function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// Додавання товару
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('spaceCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} додано до кошика!`);
}

// Виведення товарів у кошику (для сторінки cart.html)
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Твій кошик порожній. Час щось придбати!</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>${item.price} грн</span>
                </div>
            `;
        });
    }
    totalPriceElement.innerText = total;
}

// Очищення кошика
function clearCart() {
    cart = [];
    localStorage.setItem('spaceCart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Оновлюємо лічильник при завантаженні будь-якої сторінки
updateCartCount();