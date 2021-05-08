<template>
  <light-header class="header"/>
  <main class="main">
    <div class="boards">
      <div class="boards__boards_header">
        <h2 class="boards_header__boards_title">Персональные доски</h2>
        <button class="boards_header__create_button" @click="modal = !modal">Создать доску</button>
      </div>
      <div class="boards__list">
        <router-link :to="'/'" class="list__board" v-for="i in '123456789'">
          <span class="board__board_title">HELLO</span>
        </router-link>
      </div>
    </div>
  </main>
  <teleport to="body" v-if="modal">
    <board-creation-modal @closeModal="closeModal"/>
  </teleport>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import LightHeader from "../components/main/LightHeader";
import BoardCreationModal from "../components/board/BoardCreationModal";
export default {
  name: 'Home',
  data() {
    return {
      modal: false
    }
  },
  components: {
    BoardCreationModal,
    LightHeader
  },
  methods: {
    closeModal() {
      this.modal = false
    }
  },
  watch: {
    modal(value) {
      console.log(value)
    }
  }
}
</script>
<style lang="scss">
body {
  background-color: #f8f8f8;
}
</style>

<style scoped lang="scss">
.header {
  background-color: #026aa7;
}

.main {
  min-height: calc(100vh - #{$header-height});
}

.boards {
  max-width: 90rem;

  margin: 3rem auto;

  &__boards_header {
    max-width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }

  &__list {
    margin-top: 1rem;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}

.boards_header {
  &__boards_title {
    font-size: 190%;
    color: $card-font-color;
  }

  &__create_button {
    background-color: rgba(0, 0, 0, .25);
    cursor: pointer;
    border: none;

    padding: .6rem 1.5rem;
    border-radius: .2rem;

    font-size: 140%;
    font-family: inherit;

    &:hover {
      background-color: rgba(0, 0, 0, .35);
    }
  }
}

.list__board {
  background-image: url("./../assets/img/car.png");
  background-position: 50%;
  background-size: cover;

  display: block;
  text-decoration: none;

  width: 26rem;
  height: 13rem;

  margin: 1rem 2rem;

  border-radius: .2rem;
}

.board__board_title {
  display: block;

  margin: .4rem .8rem;

  font-size: 190%;
  font-weight: bold;
  color: white;
}
</style>
