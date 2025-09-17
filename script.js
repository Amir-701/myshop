let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(productName + " добавлен в корзину!");
}