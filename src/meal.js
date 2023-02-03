function nameMenuItem(name) {
  var menuItemName = 'Delicious ' + name
  return menuItemName
}
// console.log(nameMenuItem('Pizza'))


function createMenuItem() {
  var menuItem = {
    name: 'Delicious French Toast',
    price: 10.99,
    type: 'breakfast'
  }
  return menuItem
}
// console.log(createMenuItem());

function addIngredients(addFood, ingredients) {
  if (!ingredients.includes(addFood)) {
    ingredients.push(addFood)
  }
}

function formatPrice(formattedPrice) {
  var menuItem = {
    name: 'French Toast',
    price: formattedPrice,
    type: 'breakfast'
  }
    return  '$'+formattedPrice
} 

console.log(formatPrice(10.99))

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


