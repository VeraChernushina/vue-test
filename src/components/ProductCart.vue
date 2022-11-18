<template>
  <div class="header">
    <h1 class="title">Ваша корзина</h1>
    <span class="items">{{ quantity }} товара</span>
    <button @click="clearCart">Очистить корзину</button>
  </div>
  <section class="cart">
    <div v-if="cartProducts.length > 0">
      <ul>
        <ProductItemInTheCart
          v-for="product in cartProducts"
          :product="product"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :parameters="product.parameters"
          :vendor="product.vendor_code"
          :price="product.price"
          :image="product.image"
          :qty="product.qty"
          :total_price="product.total_price"
        />
      </ul>
      <VueCheckboxVue />
    </div>
    <div v-else class="cart_empty">Корзина пуста.</div>
    <CartSidebar />
  </section>
</template>

<script>
import VueCheckboxVue from "./VueCheckbox.vue";
import ProductItemInTheCart from "./ProductItemInTheCart.vue";
import CartSidebar from "./CartSidebar.vue";
export default {
  components: {
    VueCheckboxVue,
    ProductItemInTheCart,
    CartSidebar,
  },
  computed: {
    cartProducts() {
      return this.$store.getters["cart"];
    },

    quantity() {
      return this.$store.getters["quantity"];
    },
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-bottom: 34px;
  align-items: flex-end;
  max-width: 800px;

  button {
    border: none;
    background: transparent;
    text-decoration: underline;
    color: #797b86;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    cursor: pointer;
    margin-left: auto;
    transition: all ease 0.3s;
  }

  button:hover {
    color: red;
  }

  .items {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 185%;
    color: #797b86;
  }
}
.title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 120.52%;
  color: #1f2432;
  margin-right: 22px;
}
.cart {
  display: flex;
  column-gap: 55px;
  margin-bottom: 96px;

  ul {
    padding: 0;
  }

  &_empty {
    width: 800px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #0069B4;
  }
}
</style>
