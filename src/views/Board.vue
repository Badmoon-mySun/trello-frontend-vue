<template>
  <div class="board" v-if="boardId">
    <div class="container">
      <light-header/>
      <main class="main">
        <board-menu/>
        <div class="board__workspace">
          <div class="workspace__col" v-for="list in lists">
            <cards-holder v-bind:list="list"/>
          </div>
          <div class="workspace__col">
            <cards-holder-creation/>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="loader_holder" v-else>
    <loader/>
  </div>
</template>

<script>
import LightHeader from "../components/main/LightHeader";
import BoardMenu from "../components/board/BoardMenu";
import dragManager from "../utils/DragManager";
import CardsHolder from "../components/board/CardsHolder";
import {mapActions, mapGetters} from "vuex";
import Loader from "../components/main/Loader";
import CardsHolderCreation from "../components/board/CardsHolderCreation";

export default {
  name: "Board",
  components: {CardsHolderCreation, Loader, CardsHolder, BoardMenu, LightHeader},
  data() {
    return {
      boardIdUrlParam: this.$route.params.boardId,
    }
  },
  mounted() {
    dragManager(this.$store, this.$axios)

    // TODO redirect to 404
    this.loadBoard(this.boardIdUrlParam)
        .catch(error => console.log(error))
  },
  computed: {
    ...mapGetters({
      boardId: 'board/getId',
      lists: 'board/getCardLists',
    })
  },
  methods: {
    ...mapActions({
      loadBoard: 'board/requestBoard'
    })
  }
}

</script>

<style lang="scss" scoped>
.loader_holder {
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.board {
  height: 100%;
  width: 100%;

  background-image: url("./../assets/img/car.png");
  background-position: 50%;
  background-size: cover;
}

.container {
  background: linear-gradient(0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 55%,
      rgba(0, 0, 0, 0.20) 70%,
      rgba(0, 0, 0, 0.25) 100%);
}

.main {
  width: 100%;
  min-height: calc(100vh - #{$header-height});
}

.board {
  &__workspace {
    min-width: 100%;
    height: calc(100vh - #{$header-height} - 4.5rem);

    padding: .8rem .4rem;

    overflow-x: auto;
    overflow-y: hidden;

    display: flex;
  }
}

.workspace__col {
  min-width: $cards-col-width;
  max-width: $cards-col-width;
  height: 100%;

  margin: 0 .4rem;
}
</style>