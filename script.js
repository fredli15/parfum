// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Fade-in effect for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Dynamic stock update
let stock = {
    'midnight': 50,
    'golden': 50,
    'ethereal': 50
};

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedParfum = this.parfum.value;
    const quantity = parseInt(this.quantity.value);
    
    if (stock[selectedParfum] >= quantity) {
        stock[selectedParfum] -= quantity;
        alert('Pesanan berhasil! Terima kasih telah membeli Essence de Luxe.');
        updateStockDisplay();
    } else {
        alert('Maaf, stok tidak mencukupi.');
    }
});

function updateStockDisplay() {
    const urgencyElement = document.querySelector('.urgency');
    urgencyElement.textContent = `Stok terbatas! Tersisa: Midnight Allure (${stock.midnight}), Golden Opulence (${stock.golden}), Ethereal Bloom (${stock.ethereal})`;
}

updateStockDisplay();