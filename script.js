let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  document.getElementById('cart').innerText = `Корзина (${cart.length})`;
  updateCartDisplay();
}

function toggleCart() {
  const cartDiv = document.getElementById('cartItems');
  cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}

function updateCartDisplay() {
  const cartDiv = document.getElementById('cartItems');
  if(cart.length === 0) {
    cartDiv.innerHTML = 'Корзина пуста';
  } else {
    cartDiv.innerHTML = cart.map(item => `${item.name} - ${item.price} ₸`).join('<br>');
  }
}
