function getRandomTime() {
  // Generate a random time between 2000ms (2 seconds) and 7000ms (7 seconds)
  return Math.floor(Math.random() * 5000) + 2000;
}

function getRandomOrderId() {
  // Generate a random order ID between 100 and 1099
  return Math.floor(Math.random() * 1000) + 100;
}

document.getElementById("orderButton").addEventListener("click", function () {
  const checkBoxes = document.getElementsByName("foodItem");
  const selectedItems = [];

  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      selectedItems.push(checkBoxes[i].value);
    }
  }

  if (selectedItems.length === 0) {
    alert("Please select at least one item");
    return;
  }

  const orderButton = document.getElementById("orderButton");
  const foodImage = document.getElementById("foodImage");
  const orderIdElement = document.getElementById("orderId");
  const orderIdValueElement = document.getElementById("orderIdValue");

  orderButton.disabled = true;
  orderIdElement.style.display = "none";
  foodImage.style.display = "none";

  setTimeout(function () {
    const orderId = getRandomOrderId(); // Generate random order ID
    orderIdValueElement.textContent = orderId;
    orderIdElement.style.display = "block";

    const randomFood =
      selectedItems[Math.floor(Math.random() * selectedItems.length)];

    if (randomFood === "Burger") {
      foodImage.src =
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60";
    } else if (randomFood === "Fries") {
      foodImage.src =
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=60";
    } else if (randomFood === "Drink") {
      foodImage.src =
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=800&q=60";
    } else {
      foodImage.src =
        "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?auto=format&fit=crop&w=800&q=60";
    }

    foodImage.style.display = "block";
    orderButton.disabled = false;
  }, getRandomTime());
});
