<template>
  <b-field :label="label">
    <b-slider
    v-model="rangeEditorValue"
    :custom-formatter="val => val + 'px'"
    :min="minVal"
    :max="maxVal"
    rounded
    class="range"></b-slider>
  </b-field>
</template>

<script>
import { debounce } from 'lodash'

export default {
  props: [
    'value',
    'label',
    'minVal',
    'maxVal',
    'itemIndex'
  ],
  data() {
    return {
      rangeVal: 0,
    }
  },
  computed: {
    rangeEditorValue: {
      get() {
        return this.itemIndex !== undefined
          ? this.value[this.itemIndex].range
          : this.value
      },
      set: debounce(function(newValue) {
        if (this.itemIndex !== undefined) {
          this.$emit('input', this.value.map((item, i) => this.itemIndex === i ? { ...item, range: newValue } : item))
        } else {
          this.$emit('input', newValue)
        }
      }, 400)
    },
  },
  watch: {
    rangeVal: function () {
      this.$emit("input", this.rangeVal)
    },
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
