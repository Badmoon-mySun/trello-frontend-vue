<template>
  <main class="main">
    <div class="main__intro">
      <div class="intro__illustration">
        <div class="illustration_top">
          <img class="illustration__img" src="../../assets/img/flat-graphic-development.svg" alt="">
        </div>
        <div class="illustration_bottom">
          <img class="illustration__img" src="../../assets/img/graphic-design.svg" alt="">
        </div>
      </div>
      <div class="intro__intro_description">
        <h4>Turn your ideas into reality</h4>
        <span>Trello helps teams get things done efficiently.</span>
      </div>
    </div>
    <div class="main__auth">
      <div class="auth">
        <div class="auth__intro">
          <h1 class="intro__title">Registration</h1>
          <span class="intro__body">We are waiting for you in our club, body</span>
        </div>
        <div class="auth__social">
          <sing-in-with-google-button/>
        </div>
        <div class="auth__auth_line">
          <span class="auth_line__line"></span><span class="auth_line__text">or Sign up with Email</span><span
            class="auth_line__line"></span>
        </div>

        <registration-form/>

        <span class="auth__auth_bottom">
          Already have an account? <router-link to="/login">Sign in</router-link>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import SingInWithGoogleButton from "../../components/auth/SingInWithGoogleButton";
import RegistrationForm from "../../components/auth/RegistrationForm";
export default {
name: "Registration",
  components: {RegistrationForm, SingInWithGoogleButton}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/auth.scss";

</style>