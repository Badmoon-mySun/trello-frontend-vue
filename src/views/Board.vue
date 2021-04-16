<template>
  <light-header/>
  <main class="main">

    <board-menu/>

    <div class="board__workspace">
      <div class="workspace__cards_holder">
        <div class="cards_holder__card_header">
          <span class="cards_header__title">Полезное</span>
          <a class="card__header__button">X</a>
        </div>
        <div class="cards_holder__cards">
          <div class="card">
            HEllO
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'
import LightHeader from "../components/main/LightHeader";
import BoardMenu from "../components/board/BoardMenu";

export default {
  name: "Board",
  components: {BoardMenu, LightHeader}
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

.workspace__cards_holder {
  background-color: #ebecf0;
  border-radius: .5rem;

  min-width: 30rem;
  max-width: 30rem;
  max-height: 100%;

  overflow-y: auto;
  overflow-x: hidden;

  margin: 0 .4rem;
  color: #172b4d;
}

.cards_holder {
  &__card_header {
    background-color: grey;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.cards_header {
  &__title {
    font-size: 160%;
    font-weight: bold;
  }
}

</style>