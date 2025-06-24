let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const tbody = document.getElementById("cart-items");
  const totalBox = document.getElementById("grand-total");
  tbody.innerHTML = "";

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" /></td>
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td><input type="number" value="${item.quantity}" min="1" onchange="updateQty(${index}, this.value)"/></td>
      <td>$${itemTotal.toFixed(2)}</td>
      <td><span class="remove-btn" onclick="removeItem(${index})">Remove</span></td>
    `;
    tbody.appendChild(row);
  });

  totalBox.innerText = `Total: $${grandTotal.toFixed(2)}`;
}

function updateQty(index, newQty) {
  cart[index].quantity = parseInt(newQty);
  saveCart();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  alert("Redirecting to payment...");
  window.location.href = "payment.html";
}

renderCart();
