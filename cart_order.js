let cart = document.getElementById('cart');
let order = document.getElementById('order');

cart.addEventListener('mouseover', () => {
    cart.style.color = "white";
    cart.style.width = "30rem";
    cart.style.transition = "all 1s";
})
cart.addEventListener('mouseleave', () => {
    cart.style.color = "black";
    cart.style.width = "10rem";
    cart.style.transition = "all 1s";
})
order.addEventListener('mouseover', () => {
    order.style.color = "white";
    order.style.width = "30rem";
    order.style.transition = "all 1s";
})
order.addEventListener('mouseleave', () => {
    order.style.color = "black";
    order.style.width = "20rem";
    order.style.transition = "all 1s";
})