<template>
  <div class="module">
    <div class="module__header">
      <div class="header__title">
        <div class="title__icon">
          <img src="../../../assets/img/check.svg" alt="" width="32" height="32">
        </div>
        <div class="title__text">
          <h4>Чек-лист</h4>
        </div>
      </div>
    </div>
    <div class="module__body">
      <div class="module__body__checkbox_list">
        <div class="checkbox_list__checkbox_line" v-for="i in '123'">
          <custom-check-box class="checkbox_line__checkbox"/>
          <span class="checkbox_line__text">hello body</span>
        </div>
      </div>
      <div class="module__body_input">
        <textarea class="module__body_input__textarea" placeholder="Добавить элемент"></textarea>
        <div class="input_add_card__add_btn_group">
          <button class="module__body_input__add" type="button">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCheckBox from "../../CustomCheckBox";
export default {
  name: "CardModuleCheckList",
  components: {CustomCheckBox}
}
</script>

<style scoped lang="scss">
.module {
  @include card-module;

  &__body {
    font-size: 140%;

    &_input {
      font-size: 10px;

      @include card-input-holder;

      & textarea {
        border: 2px solid #0079bf;
        height: 5rem
      }
    }
  }
}

.checkbox_list {
  &__checkbox_line {
    display: flex;
    align-items: center;

    margin: 1rem 0;

    & > span {
      margin-left: 1.5rem;
    }
  }
}

.checkbox_line {
  &__checkbox:checked  {
    text-decoration: line-through;
    background-color: #172b4d;
  }
}

</style>