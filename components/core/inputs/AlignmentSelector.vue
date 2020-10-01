<template>
  <div
    v-if="$store.state.editMode && !$store.state.previewMode"
    class="alignment-selector"
    :class="{ active: isActive }"
    :style="componentStyle"
  >
    <button
      :class="{ active: value === 'left' }"
      @click="$emit('input', 'left')"
    >
      <b-icon icon="format-align-left"></b-icon>
    </button>
    <button
      :class="{ active: value === 'center' }"
      @click="$emit('input', 'center')"
    >
      <b-icon icon="format-align-center"></b-icon>
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
  name: 'AlignmentSelector',
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
.alignment-selector {
  overflow: hidden;
  display: flex;
  margin-bottom: 1rem;
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
