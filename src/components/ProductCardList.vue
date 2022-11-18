<template>
  <div class="carousel__header">
    <h3 class="carousel__title">Просмотренные товары</h3>
    <div class="carousel__navigation">
      <button class="carousel__button carousel__button_prev" @click="prev" />
      <div class="carousel__pagination">
        <span class="carousel__pagination_active">{{ stepCount }}</span> / {{ products.length }}
      </div>
      <button class="carousel__button carousel__button_next" @click="next" />
    </div>
  </div>
  <div class="carousel__list-wrapper">
    <ul class="carousel__list" ref="inner" :style="innerStyles">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :image="product.image"
        :price_range_ru="product.price_range_ru"
        :price_range_en="product.price_range_en"
        :vendor="product.vendor_code"
        :parameters="product.parameters"
      />
    </ul>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {
      innerStyles: {},
      step: "163px",
      transitioning: false,
      stepCount: 1,
    };
  },
  mounted() {
    this.resetTranslate();
  },
  methods: {
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.products.shift();
        this.products.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
      if (this.stepCount === this.products.length) {
        this.stepCount = 1;
      } else {
        this.stepCount++;
      }
    },

    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.products.pop();
        this.products.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
      if (this.stepCount === 1) {
        this.stepCount = this.products.length;
      } else {
        this.stepCount--;
      }
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: "translateX(0)",
      };
    },
  },
  components: {
    ProductCard,
  },
  computed: {
    products() {
      const productsSort = this.$store.getters["products"];
      return productsSort.sort((a, b) => {
        if (a.model < b.model) {
          return -1;
        }
        if (a.model > b.model) {
          return 1;
        }
        return 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
  }

  &__title {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
    color: #1f2432;
  }

  &__list-wrapper {
    width: 100%;
    overflow: hidden;
  }

  &__list {
    padding: 0 0 65px;
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
    white-space: nowrap;
    transition: transform 0.5s;
  }

  &__navigation {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }

  &__pagination {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #90A2B5;

    &_active {
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #212121;
    }
  }

  &__button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all ease 0.3s;
    border: none;
    background: none;

    &:hover {
      opacity: 0.5;
    }

    &_prev {
      background-image: url(../assets/prev-btn.svg);
    }

    &_next {
      background-image: url(../assets/next-btn.svg);
    }
  }
}
</style>
