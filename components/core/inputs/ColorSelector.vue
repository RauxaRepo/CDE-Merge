<template>
  <div class="color-selector" :style="componentStyle">
    <div class="flex selected-container">
      <label>{{ title || 'Color' }}</label>
      <span>{{ value }}</span>
    </div>
    <div class="flex options">
      <div
        v-for="color in colors"
        :key="color"
        :style="{ background: color }"
        :class="{ selected: color === value, none: color === 'none' }"
        @click="$emit('input', color)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSelector',
  props: ['value', 'componentStyle', 'colors', 'title'],
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
.color-selector {
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  .selected-container {
    margin-bottom: 0.5rem;
    label {
      margin-right: 2rem;
    }
  }
  .options {
    align-items: center;
    div {
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid $black;
      margin-right: 0.5rem;
      position: relative;
      &.selected {
        border: 4px solid $black;
      }
      &.none {
        position: relative;
        &:after {
          position: absolute;
          content: '';
          width: 1.7rem;
          height: 2px;
          background: $red;
          transform: rotate(45deg);
          transform-origin: top left;
        }
        &.selected {
          &:after {
            width: 1.4rem;
          }
        }
      }
    }
  }
}
</style>
