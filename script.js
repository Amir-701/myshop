let cart = []; // { name, price, quantity }

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity -= 1;
    if (existingItem.quantity <= 0) {
      cart = cart.filter(item => item.name !== name);
    }
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartCount = document.getElementById('cart-count');
  const totalPrice = document.getElementById('total-price');

  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ${item.price.toLocaleString()} ₸ x ${item.quantity} 
      <button onclick="addToCart('${item.name}', ${item.price})">+</button>
      <button onclick="removeFromCart('${item.name}')">-</button>
    `;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  totalPrice.textContent = total.toLocaleString();
}

function toggleCart() {
  const cartDiv = document.getElementById('cart-items');
  cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}
