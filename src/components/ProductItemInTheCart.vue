<template>
  <div class="cart-item">
    <img :src="image" :alt="title" class="cart-item__image" />
    <div class="cart-item__info">
      <h3 class="cart-item__title">Вытяжное устройство {{ title }}</h3>
      <p class="cart-item__parameters">{{ parameters }}</p>
      <span class="cart-item__vendor">Артикул: {{ vendor }}</span>
    </div>
    <div class="cart-item__amount">
      <div class="cart-item__counter">
        <button @click="decreaseProductQtyInCart(id)">-</button>
        <span class="cart-item__counter_qty">{{ qty }}</span>
        <button @click="addProductToCart(product)">+</button>
      </div>
      <span class="cart-item__price-per-unit" v-show="qty > 1"
        >{{ addSpaceToDigits(price) }} ₽/шт.
      </span>
      <span class="cart-item__price-per-unit" v-show="qty === 1"></span>
    </div>
    <div class="cart-item__price">{{ addSpaceToDigits(total_price) }} ₽</div>
    <button class="cart-item__close" @click="removeProductFromCart(id)" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { addSpaceToDigits } from "../utils/addSpaceToDigits";
export default {
  name: "ProductCard",
  props: [
    "id",
    "title",
    "parameters",
    "price",
    "image",
    "vendor",
    "qty",
    "total_price",
    "product",
  ],
  methods: {
    ...mapMutations([
      "addProductToCart",
      "removeProductFromCart",
      "decreaseProductQtyInCart",
    ]),
    addSpaceToDigits,
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 15px 25px;

  &__image {
    width: 100px;
    height: 100px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
  }

  &__title {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1f2432;
  }

  &__parameters {
    display: block;
    width: 263px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #2C3242;
  }

  &__vendor {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
  }

  &__amount {
    display: flex;
    flex-direction: column;
  }

  &__price-per-unit {
    margin-top: 8px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #1F2432;
    height: 17px;
  }

  &__counter {
    height: 34px;
    display: flex;
    column-gap: 2px;

    button {
      width: 32px;
      background: #f6f8fa;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    &_qty {
      width: 34px;
      height: 100%;
      background: #f6f8fa;
      border: none;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__price {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    text-align: right;
    color: #1F2432;
  }

  &__close {
    position: absolute;
    top: 27px;
    right: 7px;
    border: none;
    background: transparent;
    cursor: pointer;
    background-image: url(../assets/close-btn-icon.svg);
    width: 12px;
    height: 12px;
    background-size: contain;
  }
}

.cart-item + .cart-item {
  border-top: 1px solid #c4c4c4;
}
</style>
