<template>
  <li class="item">
    <img :src="image" :alt="title" class="item__image" />
    <h3 class="item__name">
      {{ title }}
    </h3>
    <p class="item__description">{{ description }}</p>
    <div class="item__block">
      <span class="item__price-range_ru">{{ price_range_ru }}</span>
      <span class="item__price-range_en">{{ price_range_en }}</span>
      <button class="item__button" @click="addProductToCart(product)">
        Подробнее
      </button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ProductCard",
  props: [
    "product",
    "id",
    "title",
    "description",
    "price",
    "image",
    "price_range_ru",
    "price_range_en",
    "vendor",
    "parameters",
  ],
  methods: {
    ...mapMutations(["addProductToCart", "removeProductFromCart"]),
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 563px;
  background-color: #F6F8FA;
  border-radius: 5px;
  box-sizing: border-box;

  &__image {
    width: 245px;
    height: 245px;
    margin-bottom: 5px;
  }

  &__name {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 120.52%;
    color: #1F2432;
    margin-bottom: 10px;
  }

  &__description {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1F2432;
    display: block;
    max-width: 255px;
    white-space: normal;
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }

  &__price-range_ru {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: #1F2432;
  }

  &__price-range_en {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797B86;
  }

  &__button {
    box-sizing: border-box;
    width: 255px;
    height: 52px;
    background: #0069B4;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    margin-top: 20px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
