<template>
  <div class="module">
    <div class="module__header">
      <div class="header__title">
        <div class="title__icon card_icon">
          <img src="../../../assets/img/left-align.svg" alt="" width="32" height="32">
        </div>
        <div class="title__text">
          <h4>Описание</h4>
        </div>
      </div>
    </div>
    <div class="module__body">
      <div class="module__body_input">
        <textarea class="module__body_input__textarea" placeholder="Введите описание для этой карточки"></textarea>
        <div class="input_add_card__add_btn_group">
          <button class="module__body_input__add" type="button">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardModuleDescription"
}
</script>

<style scoped lang="scss">
.module {
  @include card-module;

  &__body {
    &_input {
      @include card-input-holder;
    }
  }
}
</style>