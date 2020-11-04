<template>
  <b-field :label="label || 'Listing Length'">
    <b-numberinput
      v-model.lazy="count"
      :min="0"
    ></b-numberinput>
  </b-field>
</template>

<script>
export default {
  props: ['value', 'label', 'listingDefaults'],
  data() {
    return {
      isActive: false,
      count: 0
    }
  },
  watch: {
    count: function() {
      this.$emit(
        'input',
        new Array(this.count).fill(undefined).map((item, i) => {
          return this.value[i]
            ? this.value[i]
            : this.listingDefaults && this.listingDefaults[i]
            ? this.listingDefaults[i]
            : 'Lorem, ipsum dolor sit amet'
        })
      )
    }
  },
  mounted: function() {
    this.count = this.value.length
  }
}
</script>

<style></style>
