<template>
  <a class="social_item" :href="getVkAuthUrl()">
    <img class="social_item__logo" src="../../assets/img/vk-logo.svg" alt="Google Icon">
    <span>Sign in with Vkontakte</span>
  </a>
</template>

<script>
import {OAUTH_REDIRECT_URL, OAUTH_VK_APP_ID} from "../../utils/config";
import {buildURLQuery} from "../../utils/utils";

export default {
  name: "SingInWithVkontakteButton",
  methods: {
    getVkAuthUrl() {
      let params = {
        client_id: OAUTH_VK_APP_ID,
        redirect_uri: OAUTH_REDIRECT_URL,
        scope: 'email',
        response_type: 'code',
      }

      return 'https://oauth.vk.com/authorize?' + buildURLQuery(params)
    }
  }
}
</script>

<style lang="scss" scoped>
.social_item {
  height: 2rem;
  cursor: pointer;

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