// JavaScript application for Week 12 Project: Create, Read, Update, Delete App

const API_URL = "http://127.0.0.1:3000/shoppingList";

const shoppingForm = document.getElementById("shoppingForm");
const itemInput = document.getElementById("itemInput");
const quantityInput = document.getElementById("quantityInput");
const shoppingList = document.getElementById("shoppingList");

// READ
async function fetchItems() {
  const response = await fetch(API_URL);
  const items = await response.json();

  shoppingList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML = `
      ${item.item} - Quantity: ${item.quantity}

      <button onclick="updateItem('${item.id}', '${item.item}', '${item.quantity}')">
        Edit
      </button>

      <button onclick="deleteItem('${item.id}')">
        Delete
      </button>
    `;

    shoppingList.appendChild(li);
  });
}

// CREATE
shoppingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newItem = {
    item: itemInput.value,
    quantity: quantityInput.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  });

  itemInput.value = "";
  quantityInput.value = "";

  fetchItems();
});

// DELETE
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchItems();
}

// Initial load
fetchItems();

// UPDATE

async function updateItem(id, currentItem, currentQuantity) {

  const newQuantity = prompt(
    `Enter new quantity for ${currentItem}:`,
    currentQuantity
  );

  if (newQuantity === null) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: currentItem,
      quantity: newQuantity
    })
  });

  fetchItems();
}