let cart = [];

function addToCart(name, price) {
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

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ${item.price.toLocaleString()} ₸ × ${item.quantity}
      <button onclick="changeQuantity(${index}, 1)">+</button>
      <button onclick="changeQuantity(${index}, -1)">−</button>
      <button onclick="removeItem(${index})">Удалить</button>
    `;
    cartList.appendChild(li);

    total += item.price * item.quantity;
    totalItems += item.quantity;
  });

  cartCount.textContent = totalItems;
  totalPrice.textContent = total.toLocaleString();
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartDiv = document.getElementById('cart-items');
  cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}
