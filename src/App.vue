<template>
  <HeaderCartVue />
  <VueBreadcrumbsVue />
  <main>
    <ProductCart />
    <ProductCardList />
  </main>
</template>

<script setup>
import ProductCart from "./components/ProductCart.vue";
import ProductCardList from "./components/ProductCardList.vue";
import VueBreadcrumbsVue from "./components/VueBreadcrumbs.vue";
import HeaderCartVue from "./components/HeaderCart.vue";
</script>
