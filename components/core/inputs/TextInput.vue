<template>
  <input
    v-if="$store.state.editMode"
    type="text"
    :value="value"
    @input="debounceInput($event.target.value)"
  />
  <span v-else>{{ value }}</span>
</template>

<script>
import { debounce } from 'lodash'
export default {
  props: ['value'],
  methods: {
    debounceInput: debounce(function(value) {
      this.$emit('input', value)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  width: 100%;
}
</style>
