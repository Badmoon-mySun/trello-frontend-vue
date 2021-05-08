<template>
  <div class="modal" id="modal" @click="closeModal">
    <div class="board_create">
      <form method="post" @submit.prevent="onSubmit">
        <h4 class="board_create__title">Создание доски</h4>
        <input class="board_create__image_input" type="file" accept="image/*">
        <textarea class="board_create__title_input" placeholder="Введите название доски..." required></textarea>
        <div class="board_create__btn_holder">
          <button type="submit" class="btn_holder__btn">Создать</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LightCustomTextInput from "../auth/LightCustomTextInput";
import CardModuleComments from "./modules/CardModuleComments";
export default {
  name: "BoardCreationModal",
  components: {CardModuleComments, LightCustomTextInput},
  data() {
    return {
      modal: false
    }
  },
  methods: {
    onSubmit() {

    },
    closeModal(event) {
      if (document.getElementById('modal') === event.target) {
        this.$emit('closeModal')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, .5);
}

.board_create {
  position: relative;
  top: 30vh;
  margin: 0 auto;
  padding: 1rem 2rem;

  width: 45rem;

  background-color: #c8c8c8;
  border-radius: .5rem;

  @include card-input-holder;

  &__title {
    font-size: 160%;
  }

  &__image_input {
    margin: 1rem 0;
  }
}
</style>