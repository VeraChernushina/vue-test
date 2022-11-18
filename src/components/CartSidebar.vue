<template>
  <div class="cart">
    <h3>Итого</h3>
    <div class="cart__info">
      <div>
        <span>Сумма заказа</span>
        <span>{{ addSpaceToDigits(cartTotal) }} ₽</span>
      </div>
      <div>
        <span>Количество</span>
        <span>{{ quantityTotal }} шт</span>
      </div>
      <div>
        <span>Установка</span>
        <span>{{ installation ? "Да" : "Нет" }}</span>
      </div>
    </div>
    <div class="cart__sum-block">
      <span>Стоимость товаров</span>
      <span class="cart__sum-block_price"
        >{{ addSpaceToDigits(cartTotal) }} ₽</span
      >
    </div>
    <div class="cart__buttons">
      <button
        class="cart__button cart__button_blue"
        @click="sendRequestToServer"
        :disabled="cartTotal === 0"
      >
        Оформить заказ
      </button>
      <button
        class="cart__button cart__button_white"
        @click="sendRequestToServer"
        :disabled="cartTotal === 0"
      >
        Купить в 1 клик
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { addSpaceToDigits } from "../utils/addSpaceToDigits";
export default {
  computed: {
    cartTotal() {
      return this.$store.getters["totalSum"];
    },
    quantityTotal() {
      return this.$store.getters["quantity"];
    },
    installation() {
      return this.$store.getters["installation"];
    },
    cartProducts() {
      return this.$store.getters["cart"];
    },
  },
  methods: {
    addSpaceToDigits,
    ...mapMutations(["clearCart"]),

    async sendRequestToServer() {
      if (this.cartTotal === 0) return;
      const order = {
        totalPrice: this.cartTotal,
        totalProductsQuantity: this.quantityTotal,
        isInstallationRequested: this.installation,
        products: this.cartProducts,
      };
      const response = await axios.post(
        "https://vue-test-shop-cff89-default-rtdb.firebaseio.com/orders.json",
        order
      );
      if (response.status === 200) {
        this.clearCart();
        alert("Спасибо за заказ!");
      } else {
        alert(response.statusText);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  padding: 35px 30px;
  background-color: #f6f8fa;
  border-radius: 5px;
  width: 425px;
  max-height: 458px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h3 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120.52%;
    color: #1F2432;
    margin-bottom: 31px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    padding-bottom: 29px;
    border-bottom: 1px solid #AEB0B6;
    margin-bottom: 16px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  &__sum-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #1F2432;

    &_price {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 130%;
      text-align: right;
      letter-spacing: 0.005em;
      color: #1F2432;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }

  &__button {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    border: none;
    border-radius: 4px;
    padding: 14px 0;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.5;
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }

    &_blue {
      background: #0069B4;
      color: #fff;
      margin-bottom: 12px;
    }

    &_white {
      border: 1px solid #0069B4;
      background: #fff;
      color: #0069B4;
    }
  }
}
</style>