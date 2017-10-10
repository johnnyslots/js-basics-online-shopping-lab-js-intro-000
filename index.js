var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var addItem = {[item]: itemPrice};
  cart.push(addItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
};


function viewCart() {
  var cartText = '';
  if (cart.length === 0){
    cartText = 'Your shopping cart is empty.';
  } else {
      var itemName = Object.keys(cart[0])[0];
      var itemPrice = cart[0][itemName];
      cartText = `In your cart, you have ${itemName} at $${itemPrice}`;
      for (var index = 1;index< cart.length-1;index++){
        itemName = Object.keys(cart[index])[0];
        itemPrice = cart[index][itemName];
          cartText+= `, ${itemName} at $${itemPrice}`;
      }
      if (cart.length > 1) {

        var lastIndex = cart.length - 1;
        itemName = Object.keys(cart[lastIndex])[0];
        itemPrice = cart[lastIndex][itemName];

        if (cart.length > 2) {
            cartText+= ',';
        }
        cartText+= ` and ${itemName} at $${itemPrice}.`;
      }
      else {
         cartText+= '.';
      }
  }
    console.log(cartText);
};

function total() {
  var totalPrice = 0;
  for(let i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])[0];
    var itemPrice = cart[i][itemName];
    totalPrice += itemPrice;
  }
  return totalPrice
};

function removeFromCart(item) {
  var itemNotInCart = true;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      itemNotInCart = false;
    }
  }
  if(itemNotInCart){
    console.log("That item is not in your cart.");
  }
  return cart;
};

// function removeFromCart(item) {
//   for(let i = 0; i < cart.length; i++){
//     if(cart.hasOwnProperty(Object.keys(cart)[i]) === false){
//       console.log("That item is not in your cart.")
//       return cart
//     } else {
//       var itemName = Object.keys(cart[i])[0];
//       delete cart.itemName;
//       return cart
//     }
//   }
// };

function placeOrder(cardNumber) {
  // write your code here
}
