function createRestaurant(restaurantName) {
  var pizzaRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return pizzaRestaurant
}

// function addMenuItem(pizzaRestaurant, menuItem) {
//   // var menuItem = pizzaRestaurant.menus.lunch.unshift(menuItem)
//   // if(pizzaRestaurant.menus.lunch.length ===1) {
//   //   pizzaRestaurant.menus.lunch.push(menuItem)
//   // }
// }

function addMenuItem(pizzaRestaurant, menuItem) {
  // var menuItem = pizzaRestaurant.menus.lunch.push(menuItem)
  if(menuItem.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(menuItem)) {
    pizzaRestaurant.menus.breakfast.push(menuItem)
  } else if(menuItem.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(menuItem)) {
    pizzaRestaurant.menus.lunch.push(menuItem)
  } else if(menuItem.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(menuItem)) {
    pizzaRestaurant.menus.dinner.push(menuItem)
  }
  console.log('bananas', pizzaRestaurant.menus)
}



module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}