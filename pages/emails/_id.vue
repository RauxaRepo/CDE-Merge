<template>
  <EmailGenerator
    v-if="$store.state.currentEmail && $store.state.currentEmail.id"
    :email-id="$store.state.currentEmail.id"
    title="Update Email"
  />
  <div v-else class="not-found">
    Not found
  </div>
</template>

<script>
import EmailGenerator from '@/components/core/EmailGenerator'

export default {
  components: {
    EmailGenerator
  },
  mounted: function() {
    const id = this.$route.params.id
    this.$store.dispatch('getEmail', id)
  }
}
</script>

<style lang="scss" scoped></style>
