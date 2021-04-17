<template>
  <div class="cards_holder">
    <div class="cards_holder__cards_header">
      <span class="cards_header__title">Полезное</span>
      <a class="card__header__button">X</a>
    </div>
    <div class="cards_holder__cards">
      <div class="card">
        HEllO
      </div>
      <div class="card">
        HEllO
      </div>
      <div class="card">
        HEllO
      </div>
    </div>
    <div class="cards_holder__cards_bottom">
      <button class="cards_bottom__add_card_btn" id="add_card_btn" type="button" v-on:click="showCardAdding">
        <img src="../../assets/img/plus.svg" alt="" width="32" height="32">
        <span>Добавить еще одну карточку</span>
      </button>
      <div class="cards_bottom__input_add_card" id="add_card_input">
        <textarea class="input_add_card__textarea" placeholder="Введите заголовок для этой карточки"></textarea>
        <div class="input_add_card__add_btn_group">
          <button class="add_btn_group__add" type="button">Добавить карточку</button>
          <button class="add_btn_group__close" type="button" v-on:click="hideCardAdding">
            <img src="../../assets/img/plus.svg" alt="Delete" width="16" height="16">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsHolder",
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.cards_holder {
  background-color: #ebecf0;
  border-radius: .3rem;
  max-height: 100%;
  width: 100%;
  padding: 0 1rem;
  color: #6b778c;

  overflow-y: auto;
  overflow-x: hidden;

  &__cards_header {
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;

    color: #172b4d;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__cards_bottom {
    margin: 1rem .5rem;
    width: calc(100% - 1rem);
  }

}

.cards_header {
  &__title {
    font-size: 160%;
    font-weight: bold;
  }
}

.card {
  height: 5rem;
  width: $card-width;
  margin: .5rem 0;

  @include card-background;
}

.cards_bottom {
  &__add_card_btn {
    padding: .5rem;
    cursor: pointer;

    background-color: transparent;
    color: inherit;
    border: none;
    border-radius: .5rem;

    display: flex;
    align-items: center;

    & img {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: .6rem;
    }

    & span {
      font-size: 110%;
    }

    &:hover {
      background-color: rgba(0, 0, 0, .05);
    }

    &:active {
      background-color: rgba(0, 0, 0, .1);
    }
  }
}

.input_add_card {
  &__textarea {
    width: 100%;
    height: 7rem;
    padding: 1rem;

    @include card-background;
    border: none;
    outline: none;
    resize: none;

    overflow: hidden;
    overflow-wrap: break-word;

    font-size: 130%;
  }

  &__add_btn_group {
    margin-top: .5rem;
    display: flex;
    align-items: center;
  }
}


.add_btn_group {
  &__add {
    @include add_card_btn;

    background-color: #5aac44;
    margin-right: .5rem;

    &:hover {
      background-color: #6bc154;
    }

    &:active {
      background-color: #489432;
    }
  }

  &__close {
    @include add_card_btn;

    & img {
      transform: rotate(45deg);
      width: 1.9rem;
      height: 1.9rem;
    }

    &:hover {
      background-color: rgba(0, 0, 0, .05);
    }
  }
}

</style>