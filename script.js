let cart = [];

function addToCart(name, price) {
  // проверяем, есть ли уже такой товар в корзине
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartCount = document.getElementById('cart-count');
  const totalPrice = document.getElementById('total-price');

  cartList.innerHTML = '';
  let total = 0;
  let totalItems = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()} ₸ × ${item.quantity}`;
    cartList.appendChild(li);
    total += item.price * item.quantity;
    totalItems += item.quantity;
  });

  cartCount.textContent = totalItems; // обновляем количество товаров
  totalPrice.textContent = total.toLocaleString(); // итоговая сумма
}

function toggleCart() {
  const cartDiv = document.getElementById('cart-items');
  cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}
