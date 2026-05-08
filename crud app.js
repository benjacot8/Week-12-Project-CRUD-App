// JavaScript application for Week 12 Project: Create, Read, Update, Delete App

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




// CREATE
addItem(4, "Grapes", 8);
addItem(5, "Strawberries", 10);
addItem(6, "Blueberries", 12);
addItem(7, "Cheez-Itz", 2);
console.table(shoppingList);


// READ
const selectedItem = shoppingList.find(item => item.id === 2);
console.log(selectedItem);

// UPDATE



// DELETE