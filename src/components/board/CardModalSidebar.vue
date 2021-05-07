<template>
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
</template>

<script>
export default {
  name: "CardModalSidebar"
}
</script>

<style scoped lang="scss">
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