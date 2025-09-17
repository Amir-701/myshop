let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart').innerText = `Корзина (${cartCount})`;
}
