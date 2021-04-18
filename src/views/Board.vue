<template>
  <light-header/>
  <main class="main">

    <board-menu/>

    <div class="board__workspace">
      <div class="workspace__col" v-for="i in '123'">
          <cards-holder/>
      </div>
    </div>
  </main>
</template>

<script>
import LightHeader from "../components/main/LightHeader";
import BoardMenu from "../components/board/BoardMenu";
import DragManager from "../utils/DragManager";
import CardsHolder from "../components/board/CardsHolder";

export default {
  name: "Board",
  components: {CardsHolder, BoardMenu, LightHeader},
  mounted() {

  }
}

</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1604/06f3f756d346eacde666b4d37828e85e/photo-1617747001512-9abc21e2447a.jpg");
  background-position: 50%;
  background-size: cover;
}

#app {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.20) 70%, rgba(0, 0, 0, 0.25) 100%);
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