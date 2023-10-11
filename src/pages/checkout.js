const shipping = document.querySelector('.shipping');
const payment = document.querySelector('.payment');

var shippingPrice = document.querySelector('.shippingPrice');
var totalPrice = document.querySelector('.checkoutPrice');

const dhl = document.querySelector('.dhl');
const dhlExpress = document.querySelector('.dhlExpress');

dhlExpress.addEventListener('click', () => {
    shippingPrice.textContent = '10.00';

    const currentTotal = parseFloat(totalPrice.textContent);
    const newTotal = currentTotal + 10.00;

    totalPrice.textContent = newTotal.toFixed(2);
})

dhl.addEventListener('click', () => {
    shippingPrice.textContent = 'FREE';
    totalPrice.textContent = '124.77';
})

const visaDiv = document.querySelector('.visa');
const paypalDiv = document.querySelector('.paypal');
const visaRadio = document.querySelector('.visaRadio');
const paypalRadio = document.querySelector('.paypalRadio');


visaDiv.style.display = 'none';
paypalDiv.style.display = 'none';

visaRadio.addEventListener('click', () => {
    visaDiv.style.display = 'block';
    paypalDiv.style.display = 'none';
});

paypalRadio.addEventListener('click', () => {
    visaDiv.style.display = 'none';
    paypalDiv.style.display = 'block';
});