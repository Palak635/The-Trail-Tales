// Add to cart button functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const product = event.target.closest('.product');
        const productName = product.querySelector('.product-name').textContent;
        const productPrice = product.querySelector('.product-price').textContent;

        addToCart(productName, productPrice);
    });
});

let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ productName, productPrice });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCounter = document.querySelector('.cart-counter');
    cartCounter.textContent = cart.length;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, size, price) {
  const item = { name: productName, size: size, price: price };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to storage
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItemsContainer || !cartTotal || !cartCount) return;

  cartItemsContainer.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.size}ml - ₹${item.price}`;
    cartItemsContainer.appendChild(li);
  });

  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;
}
function placeOrder() {
  localStorage.removeItem('cart');
  cart = [];
  renderCheckout();
  showToast();
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

</script>