<template>
  <form class="form" method="post">
    <light-custom-text-input
       class="form__input_field"
       label="Your email"
       id="email"
       type="email"
       placeholder="example@google.com"
    />
    <light-custom-text-input
        class="form__input_field"
        label="Name"
        id="name"
        type="text"
        placeholder="Steve"
    />
    <light-custom-text-input
       class="form__input_field"
       label="Password"
       id="password"
       type="password"
       placeholder="example@google.com"
    />
    <div class="form__input_field submit_btn">
      <input type="submit" value="Login">
    </div>
  </form>
</template>

<script>
import LightCustomTextInput from "./LightCustomTextInput";
export default {
  name: "RegistrationForm",
  components: {LightCustomTextInput}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/auth-form";

</style>