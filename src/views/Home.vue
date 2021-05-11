<template>
  <light-header class="header"/>
  <main class="main">
    <div class="boards">
      <div class="boards__boards_header">
        <div class="boards_header__left">
          <h2 class="boards_header__boards_title">Персональные доски</h2>
          <button class="boards_header__create_button" @click="modal = !modal">Создать доску</button>
        </div>
        <button class="boards_header__logout" @click="logout">Выйти</button>
      </div>
      <div class="boards__list" v-if="boards">
        <router-link v-for="board in boards" :to="'/board/' + board.id" class="list__board"  :style="getBackgroundImage(board)">
          <span class="board__board_title">{{board.title}}</span>
        </router-link>
      </div>
      <div class="loader_holder" v-else>
        <loader/>
      </div>
    </div>
  </main>
  <teleport to="body" v-if="modal">
    <board-creation-modal @closeModal="closeModal"/>
  </teleport>
</template>

<script>
import LightHeader from "../components/main/LightHeader";
import BoardCreationModal from "../components/board/BoardCreationModal";
import {mapActions, mapGetters} from "vuex";
import Loader from "../components/main/Loader";
import {BACKEND_PUBLIC_URL} from "../utils/config";

export default {
  name: 'Home',
  data() {
    return {
      modal: false,
    }
  },
  components: {
    Loader,
    BoardCreationModal,
    LightHeader
  },
  computed: {
    ...mapGetters({
      boards: 'home/getBoards'
    })
  },
  mounted() {
    this.requestBoards()
  },
  methods: {
    ...mapActions({
      logoutUser: 'auth/logout',
      requestBoards: 'home/requestBoards'
    }),
    getBackgroundImage(board) {
      if (board.background) {
        return 'background-image: url(' + BACKEND_PUBLIC_URL + '/' + board.background + ')'
      }

      return 'background-color: #0273b6'
    },
    closeModal() {
      this.modal = false
    },
    logout() {
      this.logoutUser()
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: #026aa7;
}

.main {
  min-height: calc(100vh - #{$header-height});
  background-color: #f8f8f8;
}

.boards {
  max-width: 90rem;

  margin: 0 auto;
  padding-top: 3rem;

  &__boards_header {
    max-width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }

  &__list {
    margin-top: 1rem;

    display: flex;
    flex-wrap: wrap;
  }
}

.boards_header {
  &__left {
    display: flex;
  }

  &__boards_title {
    font-size: 190%;
    color: $card-font-color;
  }

  &__logout,
  &__create_button {
    cursor: pointer;
    border: none;

    padding: .6rem 1.5rem;
    border-radius: .2rem;

    font-size: 140%;
    font-family: inherit;
  }

  &__create_button {
    margin-left: 2rem;

    background-color: rgba(0, 0, 0, .25);

    &:hover {
      background-color: rgba(0, 0, 0, .35);
    }
  }

  &__logout {
    background-color: rgb(255, 89, 89);

    &:hover {
      background-color: rgb(255, 118, 118);
    }
  }
}

.list__board {
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
  text-shadow: 1px 0 1px #2c2c2c;
  color: white;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
