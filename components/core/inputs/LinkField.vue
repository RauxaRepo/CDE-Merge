<template>
  <b-field label="Link URL">
    <b-input v-model.lazy="link" placeholder="https://rauxa.com/"></b-input>
  </b-field>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      isActive: false,
      link: ''
    }
  },
  watch: {
    link: function() {
      this.$emit('input', this.link)
    }
  },
  mounted: function () {
    this.link = this.value
  }
}
</script>

<style></style>
