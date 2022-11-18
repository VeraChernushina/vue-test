<template>
  <div class="breadcrumbs">
    <span class="breadcrumbs__prev">Главная</span>
    <span class="breadcrumbs__arrow" />
    <span class="breadcrumbs__current">Корзина</span>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 60px;

  &__prev {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #33374E;
  }

  &__arrow {
    background-image: url(../assets/arrow-icon.svg);
    width: 5px;
    height: 8px;
    background-size: contain;
  }

  &__current {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
  }
}
</style>