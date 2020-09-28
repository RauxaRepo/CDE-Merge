<template>
  <EmailGenerator />
</template>

<script>
import EmailGenerator from '@/components/core/EmailGenerator'

export default {
  components: {
    EmailGenerator
  },
  beforeCreate: function() {
    this.$store.commit('clearCurrentEmail')
  }
}
</script>

<style lang="scss" scoped></style>
