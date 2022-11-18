export default {
  addProductToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters.products;
    const product = products.find((prod) => prod.id === prodId);
    context.commit("addProductToCard", product);
  },

  removeProductFromCart(context, payload) {
    context.commit("removeProductFromCard", payload);
  },

  decreaseProductQtyInCart(context, payload) {
    context.commit("decreaseProductQtyInCart", payload);
  },

  clearCart(context) {
    context.commit("clearCart");
  },

  includeInstallation(context) {
    context.commit("includeInstallation");
  },
};
