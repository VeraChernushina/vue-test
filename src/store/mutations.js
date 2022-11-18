export default {
  addProductToCart(state, payload) {
    const productData = payload;
    const productInCartIndex = state.cart.findIndex(
      (ci) => ci.id === productData.id
    );
    if (productInCartIndex >= 0) {
      state.cart[productInCartIndex].qty++;
      state.cart[productInCartIndex].total_price +=
        state.cart[productInCartIndex].price;
    } else {
      const newItem = {
        id: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        total_price: productData.price,
        vendor_code: productData.vendor_code,
        parameters: productData.parameters,
        qty: 1,
      };
      state.cart.push(newItem);
    }
    state.qty++;
    state.total += productData.price;
  },

  removeProductFromCart(state, id) {
    const productInCartIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === id
    );
    const prodData = state.cart[productInCartIndex];
    state.cart.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  },

  decreaseProductQtyInCart(state, id) {
    // look for the product in cart
    const productInCartIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === id
    );
    // get product data
    const prodData = state.cart[productInCartIndex];
    if (prodData.qty === 1) {
      state.cart.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    } else {
      prodData.qty--;
      prodData.total_price -= prodData.price;
      state.qty--;
      state.total -= prodData.price;
    }
  },

  clearCart(state) {
    state.total = 0;
    state.qty = 0;
    state.cart = [];
    state.installation = false;
  },

  includeInstallation(state) {
    state.installation = !state.installation;
  },
};
