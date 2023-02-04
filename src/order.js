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
 




module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}