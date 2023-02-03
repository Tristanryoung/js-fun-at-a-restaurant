function nameMenuItem(name) {
  var menuItemName = 'Delicious ' + name
  return menuItemName
}
// console.log(nameMenuItem('Pizza'))


function createMenuItem(menuItemName, initialPrice, type) {
  var menuItem = {
    name: menuItemName,
    price: initialPrice,
    type: type
  }
  return menuItem
}
// console.log(createMenuItem());

function addIngredients(addFood, ingredients) {
  if (!ingredients.includes(addFood)) {
    ingredients.push(addFood)
  }
}

function formatPrice(initialPrice) {
  return '$' + initialPrice
  }
// console.log(formatPrice(5.99))

function decreasePrice(initialPrice) {
  return (initialPrice)-(initialPrice*.1)
}
// console.log(decreasePrice(6.00))

function createRecipe(title, ingredients, type) {
  var recipe = {
   title: title,
   ingredients: ingredients,
  type: type
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


