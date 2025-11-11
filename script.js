const productsData = {
  mens: [
    {name: "Футболка мужская", price: 5000, img: "https://via.placeholder.com/200x200"},
    {name: "Рубашка мужская", price: 8000, img: "https://via.placeholder.com/200x200"}
  ],
  womens: [
    {name: "Платье женское", price: 9000, img: "https://via.placeholder.com/200x200"},
    {name: "Блузка женская", price: 4500, img: "https://via.placeholder.com/200x200"}
  ],
  kids: [
    {name: "Футболка детская", price: 3000, img: "https://via.placeholder.com/200x200"},
    {name: "Шорты детские", price: 2500, img: "https://via.placeholder.com/200x200"}
  ],
  shoes: [
    {name: "Кроссовки", price: 12000, img: "https://via.placeholder.com/200x200"},
    {name: "Ботинки", price: 15000, img: "https://via.placeholder.com/200x200"}
  ]
};

let cart = [];

const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const orderBtn = document.getElementById("order-btn");
const modal = document.getElementById("order-modal");
const closeModal = document.getElementById("close-modal");
const sendOrderBtn = document.getElementById("send-order");

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showProducts(btn.dataset.category);
  });
});

function showProducts(category) {
  productsContainer.innerHTML = "";
  productsData[category].forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${p.price} тг</p>
      <button onclick="addToCart('${category}', ${index})">Добавить в корзину</button>
    `;
    productsContainer.appendChild(card);
  });
}

function addToCart(category, index) {
  cart.push(productsData[category][index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} тг`;
    cartItems.appendChild(li);
  });
  totalEl.textContent = `Итого: ${total} тг`;
}

orderBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

sendOrderBtn.addEventListener("click", () => {
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  if (!name || !phone) {
    alert("Пожалуйста, заполните все поля");
    return;
  }
  let message = "Новый заказ:%0A";
  cart.forEach(item => {
    message += `${item.name} - ${item.price} тг%0A`;
  });
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `Итого: ${total} тг%0AИмя: ${name}%0AТелефон: ${phone}`;
  window.open(`https://wa.me/77757817401?text=${message}`, "_blank");
});
