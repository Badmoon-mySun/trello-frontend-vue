<template>
  <form class="form" method="post" @submit.prevent="onSubmit">
    <p class="form__error">{{error}}</p>
    <light-custom-text-input class="form__input_field"
       label="Email"
       id="email"
       type="email"
       placeholder="example@google.com"
       v-model="form.email"
    />
    <light-custom-text-input class="form__input_field"
       label="Password"
       id="password"
       type="password"
       placeholder="example@google.com"
       v-model="form.password"
    />
    <div class="form__input_remember_me">
      <custom-check-box v-model:checkbox="form.rememberMe"/>
      <span>Remember me</span>
    </div>
    <div class="form__input_field submit_btn">
      <input type="submit" value="Login">
    </div>
  </form>
</template>

<script>
import LightCustomTextInput from "./LightCustomTextInput";
import CustomCheckBox from "../main/CustomCheckBox";
import {mapActions} from "vuex";

export default {
  name: "LoginForm",
  components: {CustomCheckBox, LightCustomTextInput},
  data() {
    return {
      form: {
        email: '',
        password: '',
        // rememberMe: false
      },
      error: ''
    }
  },
  methods: {
    ...mapActions({
      singIn: 'auth/singIn'
    }),

    async onSubmit() {
      this.singIn(this.form)
          .then(() => this.$router.push('/'))
          .catch(() => this.error = 'Email or password is not right')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/auth-form";

.form__input_remember_me {
  margin-top: -1.4rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 90%;

  & > span {
    margin-left: .5rem;
  }
}
</style>