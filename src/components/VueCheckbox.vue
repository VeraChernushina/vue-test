<template>
  <div class="checkbox">
    <label>
      <input
        class="checkbox__input"
        type="checkbox"
        :checked="installation"
        @change="() => includeInstallation()"
      />
      <img src="../assets/setting-icon.svg" alt="Icon" />
      <div>
        <span class="checkbox__title">Установка</span>
        <span class="checkbox__text">
          Отметьте, если Вам необходима консультация профессионала по монтажу
          выбранных товаров.
        </span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  computed: {
    installation() {
      return this.$store.getters["installation"];
    },
  },
  methods: {
    includeInstallation() {
      this.$store.dispatch("includeInstallation");
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  width: 800px;
  height: 102px;
  padding: 41px 25px;
  background: #f6f8fa;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &__input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__title {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
  }

  &__text {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
  }

  label {
    display: flex;
    align-items: center;
    column-gap: 20px;

    div {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
