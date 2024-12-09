document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

const currencySelector = document.getElementById('currency');
const productCards = document.querySelectorAll('.product-card');

currencySelector.addEventListener('change', () => {
    const selectedCurrency = currencySelector.value;

    productCards.forEach(card => {
        const priceUSD = card.getAttribute('data-usd');
        const priceEUR = card.getAttribute('data-eur');
        const priceElement = card.querySelector('.price');

        if (selectedCurrency === 'usd') {
            priceElement.textContent = `USD $${priceUSD}`;
        } else if (selectedCurrency === 'eur') {
            priceElement.textContent = `EUR €${priceEUR}`;
        }
    });
});
