<template>
  <main class="main">
    <div class="main__auth">
      <div class="auth">
        <div class="auth__intro">
          <h1 class="intro__title">Login</h1>
          <span class="intro__body">Welcome to the club, body</span>
        </div>
        <div class="auth__social">
          <sing-in-with-google-button/>
        </div>
        <div class="auth__auth_line">
          <span class="auth_line__line"></span><span class="auth_line__text">or Sign in with Email</span><span
            class="auth_line__line"></span>
        </div>

        <login-form/>

        <span class="auth__auth_bottom">
          Not registered yet? <router-link to="/registration">Create an account</router-link>
        </span>
      </div>
    </div>
    <div class="main__intro">
      <div class="intro__illustration">
        <div class="illustration_top">
          <img class="illustration__img" src="../../assets/img/climbing-goals.svg" alt="">
        </div>
        <div class="illustration_bottom">
          <img class="illustration__img" src="../../assets/img/cooperate.svg" alt="">
        </div>
      </div>
      <div class="intro__intro_description">
        <h4>Turn your ideas into reality</h4>
        <span>Trello helps teams get things done efficiently.</span>
      </div>
    </div>
  </main>
</template>

<script>


import LoginForm from "../../components/auth/LoginForm";
import SingInWithGoogleButton from "../../components/auth/SingInWithGoogleButton";
export default {
  name: "Login.vue",
  components: {SingInWithGoogleButton, LoginForm}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/auth.scss";

</style>