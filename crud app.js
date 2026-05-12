// JavaScript application for Week 12 Project: Create, Read, Update, Delete App


// API endpoint:
const API_URL = "http://localhost:3000/shoppingList";



// Code to fetch data from form:
//const shoppingListElement = document.getElementById("title");
//const shoppingForm = document.getElementById("shoppingForm");
//const titleInput = document.getElementById("title");


// GET – Fetch and display tasks
async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const status_clientSide = await response.status;
  console.log("Status Code:", status_clientSide);
  response.ok ? console.log("Request was successful") : console.log("Request failed");
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "New Task" })
  })
}

// CREATE – Add new task
// taskForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const newTask = {
//     title: titleInput.value
//   };

//   await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newTask)
//   });

//   titleInput.value = "";
//   fetchTasks();
// });
// DELETE – Remove task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchTasks();
}

// Initial load
fetchTasks();














// Beginning array for shopping list:
let shoppingList = [
    { id: 1, item: "Apples", quantity: 5 },
    { id: 2, item: "Bananas", quantity: 6 },
    { id: 3, item: "Oranges", quantity: 7 }
];


// Constructor for adding elements to array shoppingList:
function addItem(id, item, quantity) {
    shoppingList.push({ id: id, item: item, quantity: quantity });
}


// CREATE (Add items to shopping list)
addItem(4, "Grapes", 8);
addItem(5, "Strawberries", 10);
addItem(6, "Blueberries", 12);
addItem(7, "Cheez-Itz", 2);
console.table(shoppingList);


// READ (Find items in shopping list)
const selectedItem = shoppingList.find(item => item.id === 2);
console.log(selectedItem);

// UPDATE (Change an item in shopping list)
const updateItem = {...selectedItem, item: 'Updated Item' };
const index = shoppingList.findIndex(item => item.id === 2);
shoppingList[index] = updateItem;
console.table(shoppingList);


// DELETE (Remove an item from shopping list)
const updatedItems = shoppingList.filter(item => item.id !== 3);
console.table(updatedItems);

