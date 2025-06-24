document.querySelectorAll(".col-4").forEach((productBox) => {
  const name = productBox.querySelector("h4").innerText;
  const price = parseFloat(productBox.querySelector("p").innerText.replace("$", ""));
  const image = productBox.querySelector("img").src;

  const btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.className = "btn";
  btn.onclick = () => addToCart({ name, price, image, quantity: 1 });
  productBox.appendChild(btn);
});

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const found = cart.find(item => item.name === product.name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
