<template>
  <header class="header">
    <img src="../assets/cart-icon.svg" alt="Корзина" />
    <div class="header__cart-info">
      <span class="header__cart-info_title">Ваша корзина</span>
      <span class="header__cart-info_qty">{{ quantityTotal }} товара</span>
      <span class="header__cart-info_sum"
        >{{ addSpaceToDigits(cartTotal) }} ₽</span
      >
    </div>
  </header>
</template>

<script>
import { addSpaceToDigits } from "../utils/addSpaceToDigits";
export default {
  computed: {
    cartTotal() {
      return this.$store.getters["totalSum"];
    },
    quantityTotal() {
      return this.$store.getters["quantity"];
    },
  },
  methods: {
    addSpaceToDigits,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding-top: 65px;
  padding-bottom: 56px;

  img {
    width: 28px;
    height: 25px;
  }

  &__cart-info {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    &_title {
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #1F2432;
    }

    &_qty {
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 145%;
      color: #797B86;
    }

    &_sum {
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 145%;
      color: #1F2432;
    }
  }
}
</style>
