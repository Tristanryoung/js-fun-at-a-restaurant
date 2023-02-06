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
  // console.log('menu arrays', pizzaRestaurant.menus)
}

function removeMenuItem(pizzaRestaurant, menuItem, type) {

  for (i = 0; i < pizzaRestaurant.menus[type].length; i++) {
    if (pizzaRestaurant.menus[type][i].menuItem === menuItem) {
      pizzaRestaurant.menus[type].splice([i], 1)
    } 
    return `No one is eating our ${menuItem} - it has been removed from the dinner menu!`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}