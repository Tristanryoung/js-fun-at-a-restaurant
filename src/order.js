function takeOrder(order, array) {
  if(array.length<=2) {
    array.push(order)
  }
}

// function refundOrder(order, array) {
//   array.shift(order)
// }
function refundOrder(order, array) {
  for(var i = 0; i < array.length; i++) {
  if(array[i].orderNumber === order) {
    return array.splice([i], 1)
  }
    }
  }
  // console.log(refundOrder(2893, deliveryOrders))
 

  function listItems(array) {
    var itemList = [];
    for(var i = 0; i < array.length; i++) {
      itemList.push(array[i].item)
    }
    return itemList.join(', ')
  }

  function searchOrder(order, array) {
    for(var i = 0; i < array.length; i++) {
    if(array[i].item === order) {
    }
    }
  }




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}