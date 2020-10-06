<template>
  <div
    v-if="$store.state.editMode"
    class="visible-selector"
    :class="{ active: isActive }"
    :style="componentStyle"
  >
    <button
      :class="{ active: value === null }"
      @click="$emit('input', null)"
    >
      <b-icon icon="eye"></b-icon>
    </button>
    <button
      :class="{ active: value === 'mso-hide: all; overflow: hidden; max-height: 0; width: 0; display: none; line-height: 0; visibility: hidden;' }"
      @click="$emit('input', 'mso-hide: all; overflow: hidden; max-height: 0; width: 0; display: none; line-height: 0; visibility: hidden;')"
    >
      <b-icon icon="eye-off"></b-icon>
    </button>
    <!-- <button
      :class="{ active: value === 'right' }"
      @click="$emit('input', 'right')"
    >
      <b-icon icon="format-align-right"></b-icon>
    </button> -->
  </div>
</template>

<script>
export default {
  name: 'VisibleSelector',
  props: ['value', 'componentStyle'],
  data() {
    return {
      isActive: false,
      link: ''
    }
  },
  watch: {
    value: function() {
      this.link = this.value
    }
  },
  methods: {
    save: function() {
      this.isActive = false
      this.$emit('input', this.link)
    },
    close: function() {
      this.isActive = false
      this.link = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.visible-selector {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  button {
    height: 32px;
    width: 32px;
    border-radius: 0;
    border: none;
    opacity: 0.7;
    text-align: center;
    padding: 0;
    &:hover,
    &:focus {
      opacity: 1;
      outline: none;
    }
    &.active {
      background: $purple;
      color: $white;
    }
  }
}
</style>
