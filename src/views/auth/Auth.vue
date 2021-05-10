<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style lang="scss" scoped>
.slide {
  &-enter-active,
  &-leave-active {
    transition: all 1.3s ease-out;
  }

  &-enter-to {
    position: absolute;
    right: 0;
  }

  &-enter-from {
    position: absolute;
    right: -100%;
  }

  &-leave-to {
    position: absolute;
    left: -100%;
  }

  &-leave-from {
    position: absolute;
    left: 0;
  }
}
</style>