<template>
  <div class="modal">
    <div class="card_modal">
      <div class="card_modal__header">
        <div class="header__title">
          <div class="title__icon">
            <img src="../../assets/img/card.svg" alt="" width="32" height="32">
          </div>
          <div class="title__text">
            <h3>Hello</h3>
          </div>
        </div>
        <div class="header__close">
          <button>
            <img src="../../assets/img/plus.svg" alt="Close" width="16" height="16">
          </button>
        </div>
      </div>
      <div class="card_modal__main">
        <div class="main__content">
          <card-module-description/>

          <card-module-check-list/>

          <card-module-comments/>
        </div>
        <div class="main__sidebar">
          <div class="sidebar__header">
            <span class="header__title">Добавить на карточку</span>
          </div>
          <div class="sidebar__bar_items">
            <div class="bar_items__bar_item">
              <div class="bar_item__icon_holder">
                <img src="../../assets/img/user.svg" alt="">
              </div>
              <div class="bar_item__item_name">
                <span class="item_name">
                  Участники
                </span>
              </div>
            </div>
            <div class="bar_items__bar_item">
              <div class="bar_item__icon_holder">
                <img src="../../assets/img/user.svg" alt="">
              </div>
              <div class="bar_item__item_name">
                <span class="item_name">
                  Участники
                </span>
              </div>
            </div>
            <div class="bar_items__bar_item">
              <div class="bar_item__icon_holder">
                <img src="../../assets/img/user.svg" alt="">
              </div>
              <div class="bar_item__item_name">
                <span class="item_name">
                  Участники
                </span>
              </div>
            </div>
            <div class="bar_items__bar_line"></div>
            <div class="bar_items__bar_item">
              <div class="bar_item__icon_holder">
                <img src="../../assets/img/user.svg" alt="">
              </div>
              <div class="bar_item__item_name">
                <span class="item_name">
                  Участники
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardModuleDescription from "./modules/CardModuleDescription";
import CardModuleCheckList from "./modules/CardModuleCheckList";
import CardModuleComments from "./modules/CardModuleComments";
export default {
  name: "CardModal",
  components: {CardModuleComments, CardModuleCheckList, CardModuleDescription}
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0,0,0,.5);

  overflow-y: auto;
}

.card_modal {
  position: relative;
  top: 8vh;

  min-height: 92vh;
  width: 78rem;
  max-width: 94vw;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem 2.5rem;

  background-color: #f4f5f7;
  border-radius: .2rem;

  color: $card-font-color;
  @include card-module;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
  }

  &__main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}

.header {
  &__close {
    & button {
      @include card_btn;
    }

    & img {
      transform: rotate(45deg);
      width: 1.9rem;
      height: 1.9rem;
    }
  }
}

.main {
  &__content {
    flex-grow: 1;
    width: 55rem;
    margin-right: 1rem;
  }

  &__sidebar {
    flex-grow: 1;
    width: 18rem;
    height: 40rem;
  }
}

.sidebar {
  &__header {
    font-size: 120%;
    text-transform: uppercase;
    text-align: center;
    color: #5E6C84;

    margin-bottom: .4rem;
  }

  &__bar_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.bar_items {
  &__bar_item {
    min-width: 18rem;
    width: 49%;
    height: 3.2rem;

    margin: .2rem 0;
    padding: .6rem 1.2rem;

    background-color: #e2e4e6;
    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: #d1d3d5;
    }

    &:active {
      background-color: #d0dae5;
    }
  }

  &__bar_line {
    min-width: 100%;
    border: 1px solid #cecece;
    margin: .3rem 0;
  }
}

.bar_item {
  &__icon_holder {
    margin-right: 1rem;;

    & img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &__item_name {
    font-size: 150%;
  }
}
</style>