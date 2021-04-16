<template>
  <div class="board__menu">
    <div class="menu__board_name">
      <h2 class="board_name">Сайт "сотка"</h2>
    </div>
    <div class="menu__collaborators">
      <img class="collaborators_item" src="../../assets/img/women.svg" alt="">
      <img class="collaborators_item" src="../../assets/img/climbing-goals.svg" alt="">
      <img class="collaborators_item" src="../../assets/img/logo.png" alt="">
      <img class="collaborators_item" src="../../assets/img/women.svg" alt="">
      <button class="collaborators_btn" type="button">Пригласить</button>
    </div>
    <button class="menu__chat_btn" type="button">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path
                  d="M304,96H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16C320,103.168,312.832,96,304,96z"
              />
            </g>
          </g>
        <g>
            <g>
              <path d="M240,160H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128c8.832,0,16-7.168,16-16
                C256,167.168,248.832,160,240,160z"/>
            </g>
          </g>
        <g>
            <g>
              <path d="M352,0H64C28.704,0,0,28.704,0,64v320c0,6.208,3.584,11.872,9.216,14.496C11.36,399.488,13.696,400,16,400
                c3.68,0,7.328-1.28,10.24-3.712L117.792,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z M384,256
                c0,17.632-14.336,32-32,32H112c-3.744,0-7.36,1.312-10.24,3.712L32,349.856V64c0-17.632,14.336-32,32-32h288
                c17.664,0,32,14.368,32,32V256z"/>
            </g>
          </g>
        <g>
            <g>
              <path d="M448,128c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c17.664,0,32,14.368,32,32v270.688l-54.016-43.2
                c-2.816-2.24-6.368-3.488-9.984-3.488H192c-17.664,0-32-14.368-32-32v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16
                c0,35.296,28.704,64,64,64h218.368l75.616,60.512C488.896,510.816,492.448,512,496,512c2.336,0,4.704-0.512,6.944-1.568
                C508.48,507.744,512,502.144,512,496V192C512,156.704,483.296,128,448,128z"/>
            </g>
          </g>
        </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoardMenu"
}
</script>

<style lang="scss" scoped>
.board__menu {
  width: 100%;
  height: $board-menu-height;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: $header-font-color;
  border: solid 1px white;
}

.menu {
  &__board_name {
    font-weight: bold;
    font-size: 150%;

    @include header-btn-background;
  }

  &__collaborators {
    height: 100%;
    margin-left: .5rem;

    display: flex;
    align-items: center;
  }

  &__chat_btn {
    @include header-btn;

    & svg {
      height: 65%;
      fill: $header-font-color;
    }
  }
}

.collaborators {
  &_item {
    margin-left: -.5rem;

    @include header-avatar;
  }

  &_btn {
    margin-left: 2rem;
    font-size: 160%;

    @include header-btn;
  }
}
</style>