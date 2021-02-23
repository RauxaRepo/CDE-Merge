<template>
  <b-field :label="label">
    <b-slider
    v-model="rangeVal"
    :custom-formatter="val => val + 'px'"
    :min="minVal"
    :max="maxVal"
    rounded
    class="range"></b-slider>
  </b-field>
</template>

<script>
export default {
  props: [
    "value",
    "label",
    "minVal",
    "maxVal"
  ],
  data() {
    return {
      rangeVal: 0,
    }
  },
  watch: {
    rangeVal: function () {
      this.$emit("input", this.rangeVal)
    },
  },
  mounted: function () {
    this.rangeVal = this.value
  },
}
</script>

<style>
.b-slider.range .b-slider-fill {
  background: #3674AD !important;
}

.b-tooltip.is-primary .tooltip-content {
  background: #3674AD !important;
}

.b-tooltip.is-primary .tooltip-content::before {
  border-top-color: #3674AD !important;
}
</style>
