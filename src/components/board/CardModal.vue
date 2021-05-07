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
          <card-modal-sidebar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardModuleDescription from "./modules/CardModuleDescription";
import CardModuleCheckList from "./modules/CardModuleCheckList";
import CardModuleComments from "./modules/CardModuleComments";
import CardModalSidebar from "./CardModalSidebar";
export default {
  name: "CardModal",
  components: {CardModalSidebar, CardModuleComments, CardModuleCheckList, CardModuleDescription}
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


</style>