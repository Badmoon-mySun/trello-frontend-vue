<template>
  <form class="form" method="post">
    <light-custom-text-input class="form__input_field"
       label="Email"
       id="email"
       type="email"
       placeholder="example@google.com"
    />
    <light-custom-text-input class="form__input_field"
       label="Password"
       id="password"
       type="password"
       placeholder="example@google.com"
    />
    <div class="form__input_remember_me">
      <custom-check-box/>
      <span>Remember me</span>
    </div>
    <div class="form__input_field submit_btn">
      <input type="submit" value="Login">
    </div>
  </form>
</template>

<script>
import LightCustomTextInput from "./LightCustomTextInput";
import CustomCheckBox from "./CustomCheckBox";

export default {
  name: "LoginForm",
  components: {CustomCheckBox, LightCustomTextInput}
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