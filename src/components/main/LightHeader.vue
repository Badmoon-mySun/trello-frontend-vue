<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__inner">
        <a href="#" class="header__logo">
          <svg class="logo__img" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m312.65 124.915h-121.953l56.031-83.009c5.573-8.256 6.131-18.85 1.456-27.645s-13.768-14.261-23.73-14.261h-71.817c-8.911 0-17.22 4.4-22.228 11.771l-125.168 184.251c-12.172 17.808.594 42.033 22.182 42.033h125.428l-50.738 83.672c-10.839 17.876 2.06 40.805 22.977 40.805h64.992c9.005 0 17.364-4.474 22.36-11.967l122.566-183.878c11.892-17.841-.927-41.772-22.358-41.772z"/>
              <path d="m487.126 314.544h-91.315l35.035-57.673c9.829-16.181-1.849-36.952-20.789-36.952h-50.417c-8.037 0-15.543 3.961-20.08 10.597l-96.581 141.287c-11.019 16.122.54 38.049 20.08 38.049h91.906l-41.772 64.618c-10.451 16.167 1.181 37.53 20.427 37.53h54.314c8.152 0 15.717-4.049 20.24-10.833l99.191-148.81c10.764-16.148-.838-37.813-20.239-37.813z"/>
            </g>
          </svg>
          <h1 class="logo__name">Cratto</h1>
        </a>
        <a href="#" class="header__user">
          <span class="user__name">Anvar</span>
          <img class="user__avatar" src="../../assets/img/climbing-goals.svg" alt="Anvar avatar">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LightHeader"
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: $header-height;
  background-color: rgba(0,0,0,.25);

  &__inner {
    height: 100%;
    width: 100%;

    padding: 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__user,
  &__logo {
    height: 100%;

    text-decoration: none;
    color: $header-font-color;

    display: flex;
    align-items: center;
  }
}

.logo {
  &__img {
    height: 60%;
    fill: $header-font-color;
  }

  &__name {
    font-size: 270%;
    font-weight: bold;
  }
}

.user {
  &__name {
    font-size: 150%;
    font-weight: bold;
  }

  &__avatar {
    @include header-avatar;

    margin-left: 1rem;
  }
}
</style>