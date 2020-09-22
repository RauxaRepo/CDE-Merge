<template>
  <div class="layout">
    <Header />
    <section class="wrapper">
      <Nuxt />
    </section>
  </div>
</template>
<script>
import Header from '@/components/core/Header'

export default {
  components: {
    Header
  },
  mounted() {
    if (this.$auth.loggedIn && !this.$store.state.auth.user.id) {
      this.$store.dispatch('getUser', this.$auth)
    }
    if (!this.$store.state.currentClient) {
      const currentClient = this.$auth.$storage.getLocalStorage('currentClient')
      if (currentClient) {
        this.$store.commit('setCurrentClient', currentClient)
      }
    }
  }
}
</script>
