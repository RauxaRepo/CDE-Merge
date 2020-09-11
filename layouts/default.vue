<template>
  <div class="wrapper">
    <header>
      <button @click="logout">
        Logout
      </button>
    </header>
    <Nuxt />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.reset()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
}
button {
  margin-left: auto;
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  background: none;
}
</style>
