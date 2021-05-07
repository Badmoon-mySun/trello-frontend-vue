<template>
  <div class="col droppable">
    <div class="cards_holder">
      <div class="cards_holder__cards_header">
        <span class="cards_header__title">{{list.title}}</span>
        <button class="cards_header__button" type="button">
          <img src="../../assets/img/folder.svg" alt="Архивировать" width="16" height="16">
        </button>
      </div>
      <div class="cards_holder__cards">
        <div @click="cardModal = true" class="card draggable" v-for="card in list.cards">
          {{card.title}}
        </div>
      </div>
      <div class="cards_holder__cards_bottom">
        <button class="cards_bottom__add_card_btn" type="button" v-on:click="showCardAdding($event)">
          <img src="../../assets/img/plus.svg" alt="" width="32" height="32">
          <span>Добавить карточку</span>
        </button>
        <div class="cards_bottom__input_add_card">
          <textarea class="input_add_card__textarea" placeholder="Введите заголовок для этой карточки"></textarea>
          <div class="input_add_card__add_btn_group">
            <button class="add_btn_group__add" type="button">Добавить карточку</button>
            <button class="add_btn_group__close" type="button" v-on:click="hideCardAdding($event)">
              <img src="../../assets/img/plus.svg" alt="Delete" width="16" height="16">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  <teleport to="body">-->
<!--    <card-modal/>-->
<!--  </teleport>-->
</template>

<script>
import CardModal from "./CardModal";
export default {
  name: "CardsHolder",
  components: {CardModal},
  props: ['list'],
  data() {
    return {
      cardModal: false,
    }
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    showCardAdding(event) {
      let btn = event.currentTarget
      let inputGroup = btn.parentNode.querySelector('.cards_bottom__input_add_card')

      btn.style.display = 'none';
      inputGroup.style.display = 'block';
    },

    hideCardAdding(event) {
      let inputGroup = event.currentTarget.parentNode.parentNode
      let btn = inputGroup.parentNode.querySelector('.cards_bottom__add_card_btn')

      btn.style.display = 'block';
      inputGroup.style.display = 'none'
    }
  },

}
</script>

<style lang="scss">
.card_shadow {
  height: 5rem;
  width: $card-width;
  margin: .5rem 0;

  @include card-background;
  background-color: #c3c3c3;
}
</style>

<style lang="scss" scoped>
.col {
  height: 100%;
}

.cards_holder {
  background-color: #ebecf0;
  border-radius: .3rem;
  max-height: 100%;
  width: 100%;
  padding: 0 1rem;
  color: #6b778c;

  display: flex;
  flex-direction: column;

  &__cards_header {
    width: 100%;
    padding: 1.2rem 1rem;

    color: $card-font-color;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__cards {
    width: 100%;

    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__cards_bottom {
    margin: 0 .5rem 1rem .5rem;
    width: calc(100% - 1rem);
  }

}

.cards_header {
  &__title {
    font-size: 160%;
    font-weight: bold;
  }

  &__button {
    @include card_btn;

    & img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}

.card {
  height: 5rem;
  width: $card-width;
  margin: .5rem 0;

  font-size: 160%;
  font-weight: bold;

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

  &__input_add_card {
    display: none;

    @include card-input-holder;
  }
}


.add_btn_group {
  &__close {
    @include card_btn;

    & img {
      transform: rotate(45deg);
      width: 1.9rem;
      height: 1.9rem;
    }
  }
}

</style>