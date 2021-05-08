<template>
  <div class="auth">
    <loader/>
  </div>
</template>

<script>
import Loader from "../../components/main/Loader";
import {mapActions} from "vuex";
export default {
  name: "OAuthVk",
  components: {Loader},
  mounted() {
    this.$axios.get('auth/vk?code=' + this.$route.query.code)
      .then(resp => this.attempt(resp.accessToken, resp.refreshToken, true))
      .then(() => this.$router.push({name: 'Home'}))
      .catch(() => this.$router.push({name: 'Login'}))
  },
  methods: {
    ...mapActions({
      attempt: 'auth/attempt'
    })
  }
}
</script>

<style scoped lang="scss">
.auth {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>