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

function addIngredients(name) {
  var ingredients = ['Cheese'] 
  return ingredients
}
console.log(addIngredients());



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


