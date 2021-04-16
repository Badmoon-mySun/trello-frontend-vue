<template>
  <a class="social_item" href="#">
    <img class="social_item__logo" src="../../assets/img/google-logo.svg" alt="Google Icon">
    <span>Sign in with Google</span>
  </a>
</template>

<script>
export default {
  name: "SingInWithGoogleButton"
}
</script>

<style lang="scss" scoped>
.social_item {
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  text-decoration: none;
  color: black;

  @include auth-input-border;

  &__logo {
    height: 60%;
    margin: 0 1rem;
  }
}
</style>