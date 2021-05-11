<template>
  <div class="col">
    <div class="list_add__holder">
      <div class="holder__btn_holder">
        <button class="btn_holder__add_list_btn" type="button" v-on:click="showListAdding">
          <img src="../../assets/img/plus-white.svg" alt="" width="32" height="32">
          <span>Добавить список</span>
        </button>
      </div>
      <form method="post" @submit.prevent="onSubmit">
        <div class="holder__input_add_list">
          <textarea class="input_add_list__textarea" v-model="form.title" placeholder="Ввести заголовок списка"></textarea>
          <div class="input_add_list__add_btn_group">
            <button class="add_btn_group__add" type="submit">Добавить список</button>
            <button class="add_btn_group__close" type="button" v-on:click="hideListAdding">
              <img src="../../assets/img/plus.svg" alt="Delete" width="16" height="16">
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CardsHolderCreation",
  data() {
    return {
      form: {
        title: '',
        boardId: this.$route.params.boardId
      }
    }
  },
  computed: {
    ...mapGetters({
      getBoardId: 'board/getId'
    })
  },
  methods: {
    ...mapActions({
      createList: 'board/createList'
    }),
    onSubmit() {
      this.createList(this.form)

      this.hideListAdding()
      this.form.title = ''
    },
    showListAdding() {
      let btn = document.querySelector('.holder__btn_holder')
      let inputGroup = document.querySelector('.holder__input_add_list')

      btn.style.display = 'none';
      inputGroup.style.display = 'block';
    },

    hideListAdding() {
      let inputGroup = document.querySelector('.holder__input_add_list')
      let btn = document.querySelector('.holder__btn_holder')

      btn.style.display = 'block';
      inputGroup.style.display = 'none'
    }
  }
}
</script>

<style scoped lang="scss">
.holder__input_add_list {
  display: none;
  background-color: #ebecf0;
  padding: .5rem .5rem;
  border-radius: .3rem;

  & .input_add_list__textarea {
    border: .2rem solid #0079bf;
    height: 4rem;
  }

  @include card-input-holder;
}

.btn_holder__add_list_btn {
  @include header-btn;
  width: 100%;
  padding: 1rem;

  & img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .6rem;
  }

  & span {
    font-size: 120%;
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