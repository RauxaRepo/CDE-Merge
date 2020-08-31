<template>
  <EmailGenerator
    v-if="$store.state.currentEmail.id"
    :id="$store.state.currentEmail.id"
    title="Update Email"
  />
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
