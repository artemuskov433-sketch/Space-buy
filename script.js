let cartCount = 0;

// Функція додавання у кошик
function addToCart(itemName) {
    cartCount++;
    
    // Оновлюємо цифру на іконці кошика
    const badge = document.getElementById('cart-count');
    badge.innerText = cartCount;
    
    // Ефектна пульсація кошика при додаванні
    badge.style.transform = "scale(1.3)";
    setTimeout(() => {
        badge.style.transform = "scale(1)";
    }, 200);

    console.log(`Додано: ${itemName}. Всього у кошику: ${cartCount}`);
}

// Плавна прокрутка до секцій (для браузерів, що не підтримують CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Зміна прозорості шапки при скролі
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = "10px 10%";
        header.style.background = "rgba(5, 7, 10, 0.95)";
    } else {
        header.style.padding = "20px 10%";
        header.style.background = "rgba(5, 7, 10, 0.8)";
    }
});