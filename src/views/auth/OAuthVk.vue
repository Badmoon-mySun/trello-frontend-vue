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
      .then(response => this.packUp({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        rememberMe: true
      }))
      .then(() => this.$router.push({name: 'Home'}))
      .catch(w => console.log(w))
  },
  methods: {
    ...mapActions({
      packUp: 'auth/packUp'
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