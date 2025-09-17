let cart = [];

function addToCart(name, price) {
  // ищем, есть ли товар в корзине
  const existingItem = cart.find(item => item.name === name);
  
  if(existingItem) {
    // если есть, увеличиваем количество
    existingItem.quantity++;
  } else {
    // если нет, добавляем новый объект с quantity=1
    cart.push({name, price, quantity: 1});
  }
  
  document.getElementById('cart').innerText = `Корзина (${getTotalQuantity()})`;
  updateCartDisplay();
}

// функция подсчёта общего количества товаров
function getTotalQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
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
    cartDiv.innerHTML = cart
      .map(item => `${item.name} - ${item.price} ₸ x${item.quantity}`)
      .join('<br>');
  }
}
