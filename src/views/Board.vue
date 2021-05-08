<template>
  <light-header/>
  <main class="main">
    <board-menu v-bind:members="members" v-bind:name="boardName"/>
    <div class="board__workspace">
      <div class="workspace__col" v-for="list in cardLists">
          <cards-holder v-bind:list="list"/>
      </div>
    </div>
  </main>
</template>

<script>
import LightHeader from "../components/main/LightHeader";
import BoardMenu from "../components/board/BoardMenu";
import DragManager from "../utils/DragManager";
import CardsHolder from "../components/board/CardsHolder";
import {mapGetters} from "vuex";

export default {
  name: "Board",
  components: {CardsHolder, BoardMenu, LightHeader},
  data() {
    return {
      boardId: this.$route.params.boardId,
    }
  },
  mounted() {
    console.log(this.boardId)
  },
  computed: {
    ...mapGetters({
      cardLists: 'board/getCardLists',
      boardName: 'board/getName',
      members: 'board/getMembers'
    })
  },
  methods: {
    loadBoard(id) {
      // TODO load board there
    },
  }
}

</script>

<style lang="scss">
body {
  background-image: url("./../assets/img/car.png");
  background-position: 50%;
  background-size: cover;
}

#app {
  background: linear-gradient(0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 55%,
      rgba(0, 0, 0, 0.20) 70%,
      rgba(0, 0, 0, 0.25) 100%);
}
</style>

<style lang="scss" scoped>

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